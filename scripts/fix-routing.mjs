#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean THE FINALS source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['finals-esp', 'finals-esp'],
	['finals-aimbot', 'finals-aimbot'],
	['eac', 'eac'],
	['undetected-finals-hacks', 'undetected-finals-hacks'],
	['finals-wallhack', 'finals-wallhack'],
	['finals-radar-hack', 'finals-radar-hack'],
	['the-finals-hacks-2026', 'the-finals-hacks-2026'],
	['eac-bypass', 'eac-bypass'],
	['thefinalshacks.org', 'thefinalshacks.org'],
	['trucos-finals', 'trucos-finals'],
	['triche-finals', 'triche-finals'],
	['the-finals-hacks', 'escape-from-the-finals-hacks'],
	['cheats-finals', 'cheats-finals'],
	['trucchi-finals', 'trucchi-finals'],
	['cheaty-finals', 'cheaty-finals'],
	['chity-finals', 'chity-finals'],
	['chitov-finals', 'chitov-finals'],
	['chitiv-finals', 'chitiv-finals'],
	['cheatow-finals', 'cheatow-finals'],
	['hile-finals', 'hile-finals'],
	['finals-hile', 'finals-hile'],
	['finals-esp-chity', 'finals-esp-chity'],
	['finals-aimbot-chity', 'finals-aimbot-chity'],
	['unentdeckte-the-finals-hacks', 'unentdeckte-escape-from-the-finals-hacks'],
	['cheats-finals-indetectaveis', 'cheats-finals-indetectaveis'],
	['trucchi-finals-indetectabili', 'trucchi-finals-indetectabili'],
	['niewykrywalne-cheats-finals', 'niewykrywalne-cheats-finals'],
	['nedecektiruemye-chity-finals', 'nedecektiruemye-chity-finals'],
	['tespit-edilemeyen-finals-hileleri', 'tespit-edilemeyen-finals-hileleri'],
	['nedecektovani-chity-finals', 'nedecektovani-chity-finals'],
	['cheats-finals-nedetectabile', 'cheats-finals-nedetectabile'],
	['basta-the-finals-hacks', 'basta-escape-from-the-finals-hacks'],
	['eac-bypass-trucos-finals', 'eac-bypass-trucos-finals'],
	['eac-bypass-triche-finals', 'eac-bypass-triche-finals'],
	['eac-bypass-cheats-finals', 'eac-bypass-cheats-finals'],
	['eac-bypass-chity-finals', 'eac-bypass-chity-finals'],
	['eac-bypass-finals', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-the-finals-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-the-finals-hacks-hero.webp',
	'finals-esp': '/images/escape-from-the-finals-hacks-esp-wallhack.webp',
	'finals-aimbot': '/images/escape-from-the-finals-hacks-aimbot-combat.webp',
	features: '/images/escape-from-the-finals-hacks-package.webp',
	pricing: '/images/escape-from-the-finals-hacks-cover.webp',
	setup: '/images/finals-loadout-builder.webp',
	updates: '/images/finals-header-art.webp',
	faq: '/images/finals-squad-fight.webp',
	support: '/images/escape-from-the-finals-hacks-package.webp',
	undetected: '/images/finals-battle-royale-combat.webp',
	wallhack: '/images/escape-from-the-finals-hacks-esp-wallhack.webp',
	radar: '/images/finals-player-esp.webp',
	'eac': '/images/finals-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-the-finals-hacks-hero.webp',
	privacy: '/images/escape-from-the-finals-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-the-finals-hacks-cover.webp',
	terms: '/images/escape-from-the-finals-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'finals-esp', 'finals-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'finals-esp' | 'finals-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
