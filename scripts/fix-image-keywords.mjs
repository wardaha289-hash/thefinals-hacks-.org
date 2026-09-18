#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'thefinals hacks', espWallhack: 'thefinals hacks wallhack', aimbotCombat: 'thefinals hacks aimbot', squadFight: 'thefinals hacks', playerEsp: 'thefinals hacks esp', headerArt: 'thefinals hacks aimbot', cheatsPackage: 'thefinals hacks radar', rebootFight: 'thefinals hacks aimbot', battleRoyale: 'thefinals hacks', battleRoyaleIsland: 'thefinals hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'THE FINALS ESP player tags hack'", "imageAlt: 'thefinals hacks esp'"],
	["imageAlt: 'THE FINALS ESP radar hack'", "imageAlt: 'thefinals hacks radar'"],
	["imageAlt: 'THE FINALS aimbot sniper kill'", "imageAlt: 'thefinals hacks aimbot'"],
	["imageAlt: 'THE FINALS aimbot skeleton targeting'", "imageAlt: 'thefinals hacks aimbot'"],
	["imageAlt: 'THE FINALS hacks ADS combat'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks setup PC activation'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks updates Easy Anti-Cheat maintenance'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks FAQ ESP aimbot'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks support license help'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'Undetected thefinals hacks ESP wallhack'", "imageAlt: 'undetected thefinals hacks'"],
	["imageAlt: 'THE FINALS wallhack skeleton ESP'", "imageAlt: 'thefinals hacks wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass finals ESP aimbot'", "imageAlt: 'thefinals hacks eac'"],
	["imageAlt: 'THE FINALS hacks 2026 ESP aimbot'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks combat aimbot'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hack download ESP aimbot'", "imageAlt: 'thefinals hacks download'"],
	["imageAlt: 'THE FINALS mod menu ESP aimbot'", "imageAlt: 'thefinals hacks mod menu'"],
	["imageAlt: 'THE FINALS soft aim aimbot settings'", "imageAlt: 'thefinals hacks soft aim'"],
	["imageAlt: 'Best thefinals hacks 2026 ESP'", "imageAlt: 'best thefinals hacks'"],
	["imageAlt: 'THE FINALS aimbot hack combat'", "imageAlt: 'thefinals hacks aimbot'"],
	["imageAlt: 'THE FINALS ESP hack wallhack'", "imageAlt: 'thefinals hacks esp'"],
	["imageAlt: 'THE FINALS unlock all ESP aimbot guide'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks privacy policy'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks refund policy'", "imageAlt: 'thefinals hacks'"],
	["imageAlt: 'THE FINALS hacks terms of use'", "imageAlt: 'thefinals hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `THE FINALS ${meta.altKeyword}`")
	.join("imageAlt: 'thefinals hacks'")
	.split("galleryTitle: `THE FINALS Hacks ${topicName}`")
	.join("galleryTitle: 'thefinals hacks'")
	.split("imageAlt: `THE FINALS hacks ${kind} policy`")
	.join("imageAlt: 'thefinals hacks'")
	.split("galleryTitle: `THE FINALS Hacks ${kind} resources`")
	.join("galleryTitle: 'thefinals hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
