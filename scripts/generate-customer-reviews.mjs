#!/usr/bin/env node
/**
 * Generates src/data/customer-reviews.ts — 100 short THE FINALS cheat buyer reviews.
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src/data/customer-reviews.ts');

const maps = ['Monaco', 'Seoul', 'Skyway Stadium', 'Las Vegas', 'SYS$HORIZON', 'Horizon'];
const modes = ['Cashout', 'Quick Cash', 'World Tour', 'Tournament'];
const classes = ['Light', 'Medium', 'Heavy'];
const weapons = ['R32', 'AKM', 'XP-54', 'LH1', 'M11', 'SR-84', 'Lewis Gun', 'Pump'];
const tags = ['ESP', 'Aimbot', 'Soft aim', 'Radar', 'Wallhack', 'Setup', 'Updates', 'Cashout'];

const handles = [
	'neoVaultPulse',
	'cashoutKing99',
	'mediumMain42',
	'skywayBeam',
	'arcShift_TV',
	'fragDashX',
	'rankedNeo7',
	'lootArc404',
	'beamRunner.gg',
	'dashVault77',
	'pulseCashout',
	'horizonMain',
	'monacoFrag',
	'seoulRadar',
	'lasVegasESP',
	'quickCashAce',
	'worldTourNeo',
	'heavyWallhack',
	'lightPeek42',
	'xp54SoftAim',
	'r32Grinder',
	'akmBeamMain',
	'sr84SnipeX',
	'lewisSprayTV',
	'vaultPeek99',
	'cashoutCrew',
	'stadiumRadar',
	'finalsFan88',
	'cheatBuyer21',
	'undetectedPC',
	'eacPatchDay',
	'win11Setup',
	'menuTweakX',
	'fovSlider42',
	'boxEspMain',
	'snaplineKid',
	'thirdPartySave',
	'teamCashout',
	'arenaGrind77',
	'buildBreaker',
	'wallBangESP',
	'destructionPeek',
	'objSecureX',
	'vaultRunner21',
	'rankedQueue99',
	'casualFinals',
	'nightOwlCheat',
	'weekendGrind',
	'duoQueueNeo',
	'trioCashout',
	'soloQueue42',
	'controllerPC',
	'mkbFinals',
	'lowSensAim',
	'highSensPeek',
	'streamSafe-ish',
	'realCheatUser',
	'honestReview7',
	'monthlySubGuy',
	'lifetimeBuy99',
	'firstCheatEver',
	'switchedFromX',
	'patchSurvivor',
	'statusPageFan',
	'supportReply1h',
	'loaderEasy',
	'defenderBypass',
	'cleanOverlay',
	'noFpsDrop',
	'smoothAimbot',
	'toggleEspOnly',
	'radarMiniMap',
	'enemyTagsX',
	'healthReadESP',
	'distanceMeters',
	'nameTagsOn',
	'skeletonEspTV',
	'teamColorFix',
	'customColors42',
	'cfgExport99',
	'profileSwitchX',
	'weaponCfgMain',
	'perGunSoftAim',
	'meleePeekLight',
	'grenadeEspHelp',
	'reviveRadarSave',
	'cashoutTimerESP',
	'lastSecondWin',
	'clutchRadar42',
	'overtimeSaveX',
	'finalRoundNeo',
	'semifinalsGrind',
	'openBetaVet',
	'season3Main',
	'newMapMonaco',
	'seoulGrind99',
	'skywayJumpESP',
	'verticalPeekX',
	'zipLineRadar',
	'glassWallESP',
	'debrisPeek42',
	'objWallhack',
	'secureRoomWin',
	'peekGod42',
	'vaultCampRadar',
	'mediumAnchorX',
	'lightDashTV',
	'heavyTankESP',
	'finalsOnlyPC',
	'cheatNoTarkov',
	'arenaOnly99',
];

function esc(value) {
	return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function slugify(handle, index) {
	const base = handle
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
		.slice(0, 36);
	return `finals-cheat-review-${base || `buyer-${index + 1}`}`;
}

function pick(list, index) {
	return list[index % list.length];
}

function ratingFor(index) {
	if (index % 17 === 0) return 3;
	if (index % 4 === 0) return 4;
	return 5;
}

const templates = [
	{ tag: 'ESP', line: (map, mode) => `ESP on ${map} during ${mode} showed the whole push — {brand} cheat saved our cashout.` },
	{ tag: 'Soft aim', line: (_map, mode, _cls, weapon) => `Soft aim with the ${weapon} in ${mode} feels natural, not robotic.` },
	{ tag: 'Radar', line: (map, _mode, cls) => `Radar caught a ${cls} flanking ${map} before the vault opened — huge W.` },
	{ tag: 'Setup', line: () => `Setup took one restart; the loader guide on {brand} was enough to get the cheat running.` },
	{ tag: 'Updates', line: () => `Patch day hit and {brand} posted on status before my Discord did — back in next morning.` },
	{ tag: 'Wallhack', line: (map) => `Wallhack boxes through ${map} debris are strong; I toggle ESP off in spectator.` },
	{ tag: 'Aimbot', line: (mode, weapon) => `${mode} rounds got easier once I dialed soft aim on the ${weapon}.` },
	{ tag: 'Radar', line: (map) => `Third-party radar on ${map} is why I keep the monthly cheat license.` },
	{ tag: 'ESP', line: (_map, _mode, cls) => `${cls} peek fights feel fair with ESP health bars — still looks legit on stream delay.` },
	{ tag: 'Setup', line: () => `Support answered in under an hour when Windows flagged the cheat loader.` },
	{ tag: 'ESP', line: (map, mode) => `Quick Cash on ${map} with box ESP is free rank if you play smart with the cheat.` },
	{ tag: 'Cashout', line: () => `Lifetime was worth it — one week of {brand} beat months on a sketchier cheat.` },
	{ tag: 'Soft aim', line: (weapon) => `FOV circle plus ${weapon} soft aim is clean; I do not full-lock anymore.` },
	{ tag: 'Radar', line: (map) => `Chaos on ${map} is easier when radar shows who is still alive in THE FINALS.` },
	{ tag: 'Aimbot', line: () => `Menu is simple: ESP, radar, soft aim — I turned off the rest and stayed undetected.` },
	{ tag: 'Updates', line: (mode) => `${mode} finals with {brand} felt smooth; no bans through two EAC updates.` },
	{ tag: 'ESP', line: (map, cls) => `Caught a ${cls} on the zip line at ${map} thanks to name ESP — instant delete.` },
	{ tag: 'Setup', line: () => `First cheat I bought for THE FINALS; {brand} delivery was instant like they said.` },
	{ tag: 'Soft aim', line: (weapon, map) => `${weapon} tap shots in ${map} World Tour — soft aim does the micro correction.` },
	{ tag: 'Updates', line: () => `Status page could be louder, but the cheat itself is solid on Win 11.` },
];

function dateFor(index) {
	const day = 1 + (index % 28);
	const month = 1 + (index % 12);
	const year = index < 40 ? 2025 : 2026;
	return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

/** @type {Array<{handle:string,rating:number,text:string,short:string,slug:string,seoTitle:string,seoDescription:string,date:string,tag:string}>} */
const reviews = [];

for (let i = 0; i < 100; i += 1) {
	const handle = handles[i] ?? `finalsBuyer${i + 1}`;
	const map = pick(maps, i * 3);
	const mode = pick(modes, i * 5);
	const cls = pick(classes, i * 7);
	const weapon = pick(weapons, i * 11);
	const template = templates[i % templates.length];
	const short = template.line(map, mode, cls, weapon);
	const text =
		short.length > 110
			? short
			: `${short} Would buy the cheat again for THE FINALS on PC.`;
	const rating = ratingFor(i);
	const slug = slugify(handle, i);
	const tag = template.tag;

	reviews.push({
		handle,
		rating,
		text,
		short,
		slug,
		seoTitle: `${tag} Review by @${handle} — ${rating}/5 | {brand}`,
		seoDescription: `@${handle} rates {brand} ${tag.toLowerCase()} ${rating}/5 for THE FINALS on Windows PC.`,
		date: dateFor(i),
		tag,
	});
}

const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const rows = reviews
	.map(
		(review) => `\t{
\t\thandle: '${esc(review.handle)}',
\t\trating: ${review.rating},
\t\ttext: '${esc(review.text)}',
\t\tshort: '${esc(review.short)}',
\t\tslug: '${esc(review.slug)}',
\t\tseoTitle: '${esc(review.seoTitle)}',
\t\tseoDescription: '${esc(review.seoDescription)}',
\t\tdate: '${review.date}',
\t\ttag: '${esc(review.tag)}',
\t}`,
	)
	.join(',\n');

const body = `/** Auto-generated by scripts/generate-customer-reviews.mjs — do not edit by hand. */
export type CustomerReviewSeed = {
\thandle: string;
\trating: 3 | 4 | 5;
\ttext: string;
\tshort: string;
\tslug: string;
\tseoTitle: string;
\tseoDescription: string;
\tdate: string;
\ttag?: string;
};

export const customerReviewSeed = [
${rows},
] as const satisfies readonly CustomerReviewSeed[];

export const customerReviewGeneratedStats = {
\taverageRating: ${Math.round(avg * 10) / 10},
\ttotalCount: ${reviews.length},
} as const;
`;

writeFileSync(OUT, body);
console.log(`Generated ${reviews.length} reviews → src/data/customer-reviews.ts (avg ${avg.toFixed(1)})`);
