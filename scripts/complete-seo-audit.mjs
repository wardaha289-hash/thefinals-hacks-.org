#!/usr/bin/env node
/**
 * Completes escape-from-the-finals-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'the-finals-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'finals-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'finals-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'finals-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-finals-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'finals-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'finals-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'finals-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/finals-finals/g, 'finals'],
	[/eac-bypass-finals/g, 'eac-bypass'],
	[/THE FINALS/g, 'THE FINALS'],
	[/THE FINALS/g, 'THE FINALS'],
	[/Call of Duty/g, 'THE FINALS'],
	[/THE FINALS Wallhack/g, 'THE FINALS Wallhack'],
	[/THE FINALS Radar Hack/g, 'THE FINALS Radar Hack'],
	[/THE FINALS Cheat Features/g, 'THE FINALS Cheat Features'],
	[/THE FINALS Cheat Pricing/g, 'THE FINALS Cheat Pricing'],
	[/THE FINALS Cheat Setup/g, 'THE FINALS Cheat Setup'],
	[/THE FINALS Cheat Status/g, 'THE FINALS Cheat Status'],
	[/THE FINALS Cheat Support/g, 'THE FINALS Cheat Support'],
	[/THE FINALS squad fight/g, 'THE FINALS squad fight'],
	[/THE FINALS squad builder/g, 'THE FINALS loadout builder'],
	[/THE FINALS store header/g, 'THE FINALS header'],
	[/THE FINALS wasteland combat/g, 'THE FINALS battle royale combat'],
	[/THE FINALS loadout builder/g, 'THE FINALS loadout builder'],
	[/THE FINALS pricing/g, 'THE FINALS pricing'],
	[/THE FINALS Easy Anti-Cheat/g, 'THE FINALS Easy Anti-Cheat'],
	[/on THE FINALS/g, 'on THE FINALS'],
	[/for THE FINALS/g, 'for THE FINALS'],
	[/THE FINALS guides/g, 'THE FINALS guides'],
	[/THE FINALS guide/g, 'THE FINALS guide'],
	[/THE FINALS hileleri/g, 'THE FINALS hileleri'],
	[/THE FINALS hile/g, 'THE FINALS hile'],
	[/THE FINALS hileleri/g, 'THE FINALS hileleri'],
	[/cheatów THE FINALS/g, 'cheatów THE FINALS'],
	[/cheat THE FINALS/g, 'cheat THE FINALS'],
	[/cheats THE FINALS/g, 'cheats THE FINALS'],
	[/trucos THE FINALS/g, 'trucos THE FINALS'],
	[/triche THE FINALS/g, 'triche THE FINALS'],
	[/trucchi THE FINALS/g, 'trucchi THE FINALS'],
	[/Wallhack THE FINALS/g, 'THE FINALS Wallhack'],
	[/cheat THE FINALS undetected/g, 'cheat THE FINALS undetected'],
	[/cheats THE FINALS undetected/g, 'cheats THE FINALS undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-the-finals-hacks/g, 'escape-from-the-finals-hacks'],
	[/the-finals/g, 'finals'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for THE FINALS'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after THE FINALS anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy THE FINALS Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/THE FINALS guides/g, 'THE FINALS guides');
	content = content.replace(/THE FINALS guide/g, 'THE FINALS guide');
	content = content.replace(/THE FINALS hileleri/g, 'THE FINALS hileleri');
	content = content.replace(/THE FINALS hile/g, 'THE FINALS hile');
	content = content.replace(/cheat THE FINALS/g, 'cheat THE FINALS');
	content = content.replace(/cheats THE FINALS/g, 'cheats THE FINALS');
	content = content.replace(/trucos THE FINALS/g, 'trucos THE FINALS');
	content = content.replace(/triche THE FINALS/g, 'triche THE FINALS');
	content = content.replace(/trucchi THE FINALS/g, 'trucchi THE FINALS');
	content = content.replace(/cheatów THE FINALS/g, 'cheatów THE FINALS');
	content = content.replace(/читов THE FINALS/g, 'читов THE FINALS');
	content = content.replace(/читів THE FINALS/g, 'читів THE FINALS');
	content = content.replace(/THE FINALSチート/g, 'THE FINALSチート');
	content = content.replace(/THE FINALS 치트/g, 'THE FINALS 치트');
	content = content.replace(/THE FINALS作弊/g, 'THE FINALS作弊');
	content = content.replace(/THE FINALS rehberleri/g, 'THE FINALS rehberleri');
	content = content.replace(/THE FINALS gidsen/g, 'THE FINALS gidsen');
	content = content.replace(/THE FINALS průvodce/g, 'THE FINALS průvodce');
	content = content.replace(/THE FINALS guider/g, 'THE FINALS guider');
	content = content.replace(/THE FINALS related/g, 'THE FINALS related');
	content = content.replace(/THE FINALS ガイド/g, 'THE FINALS ガイド');
	content = content.replace(/THE FINALS 가이드/g, 'THE FINALS 가이드');
	content = content.replace(/THE FINALS指南/g, 'THE FINALS指南');
	content = content.replace(/THE FINALS गाइड/g, 'THE FINALS गाइड');
	content = content.replace(/THE FINALS panduan/g, 'THE FINALS panduan');
	content = content.replace(/THE FINALS คู่มือ/g, 'THE FINALS คู่มือ');
	content = content.replace(/THE FINALS hướng dẫn/g, 'THE FINALS hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== THE FINALS Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
