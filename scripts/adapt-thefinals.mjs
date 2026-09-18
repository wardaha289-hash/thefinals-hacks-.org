#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → THE FINALS Hacks (thefinalshacks.org)
 * Run from project root: node scripts/adapt-thefinals.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'finals-aimbot'],
	['tarkov-esp', 'finals-esp'],
	['tarkov-wallhack', 'finals-wallhack'],
	['tarkov-radar-hack', 'finals-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-finals-hacks'],
	['tarkov-cheats-2026', 'the-finals-hacks-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'the-finals-hacks'],
	['tarkov-cheat-download', 'finals-cheat-download'],
	['tarkov-mod-menu', 'finals-mod-menu'],
	['tarkov-soft-aim', 'finals-soft-aim'],
	['best-tarkov-cheats', 'best-finals-hacks'],
	['tarkov-aimbot-hack', 'finals-aimbot-hack'],
	['tarkov-esp-hack', 'finals-esp-hack'],
	['tarkov-unlock-all', 'finals-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://thefinalshacks.org'],
	['https://www.tarkovcheats.org', 'https://www.thefinalshacks.org'],
	['www.tarkovcheats.org', 'www.thefinalshacks.org'],
	['tarkovcheats.org', 'thefinalshacks.org'],
	['support@tarkovcheats.org', 'support@thefinalshacks.org'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fthefinals'],
	['/products/escape-from-tarkov', '/products/thefinals'],
	['project-name=tarkovcheats', 'project-name=thefinalshacks'],
	['name = "tarkovcheats"', 'name = "thefinalshacks"'],
	['"name": "tarkov-cheats"', '"name": "the-finals-hacks"'],
	['undetected-tarkov-cheats', 'undetected-finals-hacks'],
	['best-tarkov-cheats', 'best-finals-hacks'],
	['tarkov-cheat-download', 'finals-cheat-download'],
	['tarkov-cheats-2026', 'the-finals-hacks-2026'],
	['tarkov-radar-hack', 'finals-radar-hack'],
	['tarkov-aimbot-hack', 'finals-aimbot-hack'],
	['tarkov-esp-hack', 'finals-esp-hack'],
	['tarkov-unlock-all', 'finals-unlock-all'],
	['tarkov-soft-aim', 'finals-soft-aim'],
	['tarkov-mod-menu', 'finals-mod-menu'],
	['tarkov-wallhack', 'finals-wallhack'],
	['/tarkov-cheats/', '/the-finals-hacks/'],
	['tarkov-cheats', 'the-finals-hacks'],
	['tarkov-aimbot', 'finals-aimbot'],
	['tarkov-esp', 'finals-esp'],
	['battleye-bypass', 'eac-bypass'],
	["pageId=\"battleye\"", 'pageId="eac"'],
	["pageId: 'battleye'", "pageId: 'eac'"],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye rebuilds', 'Easy Anti-Cheat rebuilds'],
	['BattlEye rebuild', 'Easy Anti-Cheat rebuild'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['Escape from Tarkov', 'THE FINALS'],
	['escape from tarkov', 'THE FINALS'],
	['Tarkov Cheats', 'THE FINALS Hacks'],
	['Tarkov cheats', 'THE FINALS hacks'],
	['Tarkov cheat', 'THE FINALS hack'],
	['Tarkov hacks', 'THE FINALS hacks'],
	['Tarkov hack', 'THE FINALS hack'],
	['Tarkov Intel', 'THE FINALS Intel'],
	['TarkovCheatsSite', 'TheFinalsHacksSite'],
	['tarkov cheats', 'thefinals hacks'],
	['tarkov hacks', 'thefinals hacks'],
	['tarkov hack', 'thefinals hack'],
	['tarkov esp', 'the finals esp'],
	['tarkov aimbot', 'the finals aimbot'],
	['tarkov wallhack', 'the finals wallhack'],
	['undetected tarkov cheats', 'undetected the finals hacks'],
	['best tarkov cheats', 'best the finals hacks'],
	['Customs, Woods, and Streets of Tarkov', 'Las Vegas, Monaco, and Seoul arenas'],
	['Customs, Woods and Streets of Tarkov', 'Las Vegas, Monaco and Seoul arenas'],
	['PMC raids and Scav runs', 'Cashout and Quick Cash matches'],
	['PMC & Scav', 'Light, Medium & Heavy builds'],
	['PMC raids', 'Cashout matches'],
	['Scav runs', 'Quick Cash rounds'],
	['PMC and Scav', 'players and teams'],
	['PMCs and Scavs', 'players and teams'],
	['PMCs, Scavs', 'players, teams, and bots'],
	['PMC or Scav', 'Light, Medium, or Heavy'],
	['PMCs', 'players'],
	['Scavs', 'bots'],
	['Scav', 'bot'],
	['extract fights', 'cashout fights'],
	['extract fight', 'cashout fight'],
	['raid rounds', 'match rounds'],
	['extract and loot markers', 'vault and cashout markers'],
	['extract markers', 'vault markers'],
	['near extracts', 'near cashout zones'],
	['before you raid', 'before you queue'],
	['every raid', 'every match'],
	['you raid', 'you queue'],
	['In-raid', 'In-match'],
	['in a raid', 'in a match'],
	['during a raid', 'during a match'],
	['tarkovImages', 'finalsImages'],
	["from './tarkov'", "from './finals'"],
	["from '../data/tarkov'", "from '../data/finals'"],
	["from '../../data/tarkov'", "from '../../data/finals'"],
	['fetch-tarkov-images', 'fetch-finals-images'],
	['tarkov-hack-overlays', 'finals-hack-overlays'],
	['trucos-tarkov', 'trucos-finals'],
	['triche-tarkov', 'triche-finals'],
	['cheats-tarkov', 'cheats-finals'],
	['trucchi-tarkov', 'trucchi-finals'],
	['cheaty-tarkov', 'cheaty-finals'],
	['chity-tarkov', 'chity-finals'],
	['chitov-tarkov', 'chitov-finals'],
	['chitiv-tarkov', 'chitiv-finals'],
	['cheatow-tarkov', 'cheatow-finals'],
	['hile-tarkov', 'hile-finals'],
	['tarkov-hile', 'finals-hile'],
	['tarkov-esp-chity', 'finals-esp-chity'],
	['tarkov-aimbot-chity', 'finals-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-finals-hacks'],
	['cheats-tarkov-indetectaveis', 'cheats-finals-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-finals-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-finals'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-finals'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-finals-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-finals'],
	['cheats-tarkov-nedetectabile', 'cheats-finals-nedetectabile'],
	['basta-tarkov-cheats', 'basta-finals-hacks'],
	['tarkov-cheats-funktionen', 'finals-hacks-funktionen'],
	['tarkov-cheats-functies', 'finals-hacks-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-finals'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-finals'],
	['recursos-cheats-tarkov', 'recursos-cheats-finals'],
	['escape-from-tarkov', 'the-finals'],
	['Buy Tarkov Cheats', 'Buy THE FINALS Hacks'],
	["'tarkov-esp'", "'finals-esp'"],
	["'tarkov-aimbot'", "'finals-aimbot'"],
	['tarkov-esp-player-tags', 'finals-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'finals-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'finals-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'finals-aimbot-skeleton'],
	['tarkov-esp-radar', 'finals-esp-radar'],
	['tarkov-cheats-combat', 'finals-hacks-combat'],
	['tarkov-cheats-logo', 'the-finals-hacks-logo'],
	['tarkov-hero-banner', 'the-finals-hacks-hero-banner'],
	['tarkov-hero-ghost', 'the-finals-hacks-hero-ghost'],
	['tarkov-hero-source', 'the-finals-hacks-hero-source'],
	['tarkov-cheats-hero', 'the-finals-hacks-hero'],
	['tarkov-cheats-wallhack', 'finals-hacks-wallhack'],
	['tarkov-cheats-aimbot', 'finals-hacks-aimbot'],
	['tarkov-cheats-aimbot-view', 'finals-hacks-aimbot-view'],
	['tarkov-cheats-radar', 'finals-hacks-radar'],
	['tarkov-cheats-raid', 'finals-hacks-match'],
	['tarkov-cheats-esp', 'finals-hacks-esp'],
	['what-are-tarkov-cheats', 'what-are-the-finals-hacks'],
	['are-tarkov-cheats-undetected-in-2026', 'are-the-finals-hacks-undetected-in-2026'],
	['pmc-raids-and-scav-runs', 'cashout-and-quick-cash-modes'],
	['Tarkov', 'THE FINALS'],
	['tarkov', 'finals'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-fortnite.mjs', 'adapt-thefinals.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'finals.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → finals.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'finals-aimbot': 'finals-aimbot',
		'finals-esp': 'finals-esp',
		'finals-wallhack': 'wallhack',
		'finals-radar-hack': 'radar',
		'undetected-finals-hacks': 'undetected',
		'the-finals-hacks-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'the-finals-hacks': 'hacks',
		'finals-cheat-download': 'cheat-download',
		'finals-mod-menu': 'mod-menu',
		'finals-soft-aim': 'soft-aim',
		'best-finals-hacks': 'best-cheats',
		'finals-aimbot-hack': 'aimbot-hack',
		'finals-esp-hack': 'esp-hack',
		'finals-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → THE FINALS Hacks (thefinalshacks.org)...\n');
	await renamePageDirs();
	await renameDataFile();
	await transformTextFiles();
	await updatePageAstroFiles();
	console.log('\nDone. Next: update brand.ts, import images, sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
