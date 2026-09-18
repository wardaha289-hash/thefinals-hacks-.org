#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'THE FINALS Support'],
	['Activision THE FINALS', 'THE FINALS'],
	['Activision Support', 'THE FINALS Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromfinals.com/support'],
	['www.epicgames.com/finals', 'www.escapefromfinals.com'],
	['www.finals.com/competitive', 'www.escapefromfinals.com'],
	['https://www.finals.com/', 'https://www.escapefromfinals.com/'],
	['THE FINALS.com', 'THE FINALS'],
	['THE FINALS Competitive', 'THE FINALS'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
