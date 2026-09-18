#!/usr/bin/env node
/** Final pass: fix remaining THE FINALS references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['finalsImages', 'finalsImages'],
	["from '../data/finals'", "from '../data/finals'"],
	["from './finals'", "from './finals'"],
	['/undetected-finals-hacks/', '/undetected-finals-hacks/'],
	['/finals-wallhack/', '/finals-wallhack/'],
	['/finals-radar-hack/', '/finals-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/the-finals-hacks-2026/', '/the-finals-hacks-2026/'],
	['/finals-aimbot/', '/finals-aimbot/'],
	['/finals-esp/', '/finals-esp/'],
	['/the-finals-hacks/', '/finals-esp/'],
	['THE FINALS Hacks', 'THE FINALS Hacks'],
	['THE FINALS hacks', 'THE FINALS hacks'],
	['THE FINALS wallhack', 'THE FINALS wallhack'],
	['THE FINALS radar', 'THE FINALS radar'],
	['THE FINALS Aimbot', 'THE FINALS Aimbot'],
	['THE FINALS ESP', 'THE FINALS ESP'],
	['THE FINALS', 'THE FINALS'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['thefinalshacks.org', 'thefinalshacks.org'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
