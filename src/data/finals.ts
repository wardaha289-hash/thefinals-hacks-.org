import { siteConfig } from './site';

/** Screenshots used across product pages — thefinals hacks keyword alts. */
export const finalsImages = {
	hero: '/images/the-finals-hacks-hero-full.png',
	espWallhack: '/images/finals-hacks-esp.webp',
	aimbotCombat: '/images/finals-hacks-aimbot.webp',
	aimbotSkeleton: '/images/finals-hacks-aimbot.webp',
	playerEsp: '/images/finals-hacks-esp.webp',
	cheatsCombat: '/images/finals-hacks-wallhack.webp',
	logo: siteConfig.logo,
	cover: '/images/finals-hacks-wallhack.webp',
	loadoutBuilder: '/images/finals-hacks-esp.webp',
	squadFight: '/images/finals-hacks-aimbot.webp',
	cheatsPackage: '/images/finals-hacks-esp.webp',
	headerArt: '/images/finals-hacks-aimbot.webp',
	battleRoyaleCombat: '/images/finals-hacks-wallhack.webp',
	extractFight: '/images/finals-hacks-aimbot.webp',
	rebootFight: '/images/finals-hacks-aimbot.webp',
	scavRunCombat: '/images/finals-hacks-wallhack.webp',
	scavRunMode: '/images/finals-hacks-esp.webp',
	battleRoyaleIsland: '/images/finals-hacks-esp.webp',
	raidMap: '/images/finals-hacks-esp.webp',
	product: [
		{ src: '/images/finals-hacks-esp.webp', alt: 'THE FINALS ESP with box overlays and FOV circle' },
		{ src: '/images/finals-hacks-aimbot.webp', alt: 'THE FINALS aimbot with player ESP and snaplines' },
		{ src: '/images/finals-hacks-wallhack.webp', alt: 'THE FINALS box ESP showing enemy positions on rooftops' },
	],
	gallery: [
		{ src: '/images/finals-hacks-esp.webp', alt: 'THE FINALS ESP overlay with box ESP and health readouts', featured: true },
		{ src: '/images/finals-hacks-aimbot.webp', alt: 'THE FINALS aimbot FOV circle with player outlines' },
		{ src: '/images/finals-hacks-wallhack.webp', alt: 'THE FINALS box ESP through destructible arenas' },
	],
	sitemap: [
		{ src: '/images/finals-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/finals-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/finals-hacks-wallhack.webp', title: '', caption: '' },
	],
} as const;
