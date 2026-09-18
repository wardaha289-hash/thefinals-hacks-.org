#!/usr/bin/env node
/**
 * Remove standalone words "undetected" and "guides" from visible copy.
 * Preserves URL paths, slugs, and code identifiers containing those substrings.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
	'public/locales/en/translation.json',
	'public/site.webmanifest',
	'src/data/brand.ts',
	'src/data/site-core.ts',
	'src/data/site.ts',
	'src/data/seo-config.ts',
	'src/data/forum/threads.ts',
	'src/data/i18n/simple-pages.ts',
	'src/data/i18n/content.generated.ts',
	'src/data/i18n/locales.ts',
	'src/data/brand-sitemap.ts',
	'src/data/blog/posts.generated.ts',
	'src/data/inline-edits.json',
	'src/data/blog/helpers.ts',
	'scripts/sync-brand.mjs',
	'scripts/i18n-data/ui-strings-part1.mjs',
	'scripts/i18n-data/ui-strings-part2.mjs',
	'scripts/i18n-data/phrases.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
	'src/pages/brand-studio/index.astro',
];

function protectPaths(content) {
	const tokens = [];
	const protectedContent = content.replace(
		/(?:https?:\/\/[^\s"'`]+|\/[a-z0-9][a-z0-9\-/.]*|[a-z0-9]+(?:-[a-z0-9]+)*undetected[a-z0-9-]*|slug:\s*'[^']*undetected[^']*'|pageId:\s*'undetected'|'undetected'\s*:\s*|"undetected"\s*:|undetected\s*:|undetected:\s*'|undetected-finals-hacks|aboutUndetected|linkUndetected|\| 'undetected')/gi,
		(match) => {
			const id = tokens.length;
			tokens.push(match);
			return `__KEEP_${id}__`;
		},
	);
	return { protectedContent, tokens };
}

function stripWords(text) {
	return text
		.replace(/undetected/gi, '')
		.replace(/guides/gi, '')
		.replace(/  +/g, ' ')
		.replace(/ — —/g, ' —')
		.replace(/,\s*,/g, ',')
		.replace(/ \| for /g, ' | For ')
		.replace(/ \|  /g, ' | ')
		.replace(/is \./g, 'is live.')
		.replace(/is ,/g, 'is live,')
		.replace(/" +/g, '"')
		.replace(/ +"/g, '"')
		.replace(/ \./g, '.')
		.replace(/ ,/g, ',');
}

function restorePaths(text, tokens) {
	let out = text;
	for (let i = 0; i < tokens.length; i += 1) {
		out = out.replace(`__KEEP_${i}__`, tokens[i]);
	}
	return out;
}

function processFile(relPath) {
	const filePath = path.join(ROOT, relPath);
	const original = readFileSync(filePath, 'utf8');
	const { protectedContent, tokens } = protectPaths(original);
	const stripped = stripWords(protectedContent);
	const next = restorePaths(stripped, tokens);
	if (next !== original) {
		writeFileSync(filePath, next, 'utf8');
		console.log(`updated: ${relPath}`);
	}
}

for (const file of FILES) {
	processFile(file);
}
