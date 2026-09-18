#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from THE FINALS source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['finals-esp', 'finals-esp'],
	['finals-aimbot', 'finals-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-finals-hacks', 'undetected-finals-hacks'],
	['finals-wallhack', 'finals-wallhack'],
	['finals-radar-hack', 'finals-radar-hack'],
	['the-finals-hacks-2026', 'the-finals-hacks-2026'],
	['escape-from-the-finals-hacks', 'escape-from-the-finals-hacks'],
	['the-finals', 'finals'],
	['THE FINALS', 'THE FINALS'],
	['THE FINALS', 'THE FINALS'],
	['THE FINALS Hacks', 'THE FINALS Hacks'],
	['THE FINALS hacks', 'THE FINALS hacks'],
	['THE FINALS hack', 'THE FINALS hack'],
	['THE FINALS ESP', 'THE FINALS ESP'],
	['THE FINALS Aimbot', 'THE FINALS Aimbot'],
	['THE FINALS wallhack', 'THE FINALS wallhack'],
	['THE FINALS radar', 'THE FINALS radar'],
	['THE FINALS firefights', 'THE FINALS firefights'],
	['THE FINALS combat', 'THE FINALS combat'],
	['THE FINALS patches', 'THE FINALS patches'],
	['THE FINALS updates', 'THE FINALS updates'],
	['THE FINALS setup', 'THE FINALS setup'],
	['THE FINALS license', 'THE FINALS license'],
	['THE FINALS licenses', 'THE FINALS licenses'],
	['THE FINALS sessions', 'THE FINALS sessions'],
	['in THE FINALS', 'in THE FINALS'],
	['for THE FINALS', 'for THE FINALS'],
	['THE FINALS on', 'THE FINALS on'],
	['THE FINALS or', 'THE FINALS or'],
	['THE FINALS\'s', 'THE FINALS\'s'],
	['THE FINALS ', 'THE FINALS '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@thefinalshacks.org', 'support@thefinalshacks.org'],
	['Las Vegas, Monaco, and Seoul arenas', 'Las Vegas, Monaco, and Seoul arenas'],
	['Las Vegas, Monaco and Seoul arenas', 'Las Vegas, Monaco and Seoul arenas'],
	['cashout fights', 'cashout fights'],
	['cashout fight', 'cashout fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['Cashout and Quick Cash matches', 'Cashout and Quick Cash matches'],
	['Cashout and Quick Cash matches', 'Cashout and Quick Cash matches'],
	['Light, Medium & Heavy builds', 'Light, Medium & Heavy builds'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'THE FINALS combat pace'],
	['COD', 'THE FINALS'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'THE FINALS Hacks',
	game: 'THE FINALS',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Las Vegas, Monaco, and Seoul arenas'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
