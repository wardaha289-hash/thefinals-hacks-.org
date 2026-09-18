#!/usr/bin/env node
/**
 * Syncs locale 301s for cannibal pageIds → pillar pageIds into
 * functions/cannibal-redirects.json (handled by src/worker.ts).
 *
 * Cloudflare Workers static assets allow at most 100 _redirects rules;
 * cannibal locale pairs (~460) must not live in public/_redirects.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const CANONICAL = path.join(ROOT, 'src/data/seo-cannibal-map.ts');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const JSON_OUT = path.join(ROOT, 'functions/cannibal-redirects.json');

function readCannibalTargets() {
	const src = readFileSync(CANONICAL, 'utf8');
	const block = src.match(/cannibalRedirectTargets\s*=\s*\{([\s\S]*?)\}\s*as const/);
	if (!block) throw new Error('cannibalRedirectTargets missing in seo-cannibal-map.ts');
	/** @type {Record<string, string>} */
	const targets = {};
	for (const row of block[1].matchAll(/['"]?([\w-]+)['"]?\s*:\s*['"]([\w-]+)['"]/g)) {
		targets[row[1]] = row[2];
	}
	if (!Object.keys(targets).length) throw new Error('No cannibal targets parsed');
	return targets;
}

function extractSlugBlock(src, pageId) {
	const re = new RegExp(`\\t'${pageId}':\\s*\\{([\\s\\S]*?)\\n\\t\\},|\\t${pageId}:\\s*\\{([\\s\\S]*?)\\n\\t\\},`);
	const m = src.match(re);
	const block = m?.[1] ?? m?.[2];
	if (!block) throw new Error(`Missing localizedSlugs block for ${pageId}`);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']+)'/g)) {
		slugs[row[1]] = row[2];
	}
	return slugs;
}

function stripCannibalRedirectsBlock(redirects) {
	const markerStart = '# Auto-generated cannibal locale redirects';
	const start = redirects.indexOf(markerStart);
	if (start < 0) return redirects.trimEnd();
	const lineStart = redirects.lastIndexOf('\n', start);
	return redirects.slice(0, lineStart >= 0 ? lineStart : start).trimEnd();
}

const TARGETS = readCannibalTargets();
const routing = readFileSync(ROUTING, 'utf8');
/** @type {Record<string, string>} */
const map = {};

for (const [fromId, toId] of Object.entries(TARGETS)) {
	const fromSlugs = extractSlugBlock(routing, fromId);
	const toSlugs = extractSlugBlock(routing, toId);
	for (const [locale, fromSlug] of Object.entries(fromSlugs)) {
		if (locale === 'en') continue;
		const toSlug = toSlugs[locale];
		if (!toSlug) continue;
		const fromPath = `/${locale}/${fromSlug}/`;
		const toPath = `/${locale}/${toSlug}/`;
		map[fromPath] = toPath;
		map[`/${locale}/${fromSlug}`] = toPath;
	}
}

writeFileSync(JSON_OUT, `${JSON.stringify(map, null, 2)}\n`);

let redirects = stripCannibalRedirectsBlock(readFileSync(REDIRECTS, 'utf8'));
const note = [
	'',
	'# Cannibal locale 301s (~460) live in functions/cannibal-redirects.json',
	'# and are applied by src/worker.ts (Cloudflare _redirects limit is 100).',
].join('\n');
if (!redirects.includes('Cannibal locale 301s')) {
	redirects = `${redirects}${note}`;
}
writeFileSync(REDIRECTS, `${redirects.trimEnd()}\n`);

console.log(
	`Synced ${Object.keys(map).length} cannibal redirect paths (${Object.keys(TARGETS).length} pageIds) → functions/cannibal-redirects.json`,
);
