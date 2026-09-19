import type { ForumThreadDefinition } from './types';

const sharedWhatYouGet = {
	paragraphs: [
		'THE FINALS Hacks for THE FINALS on Windows PC. You get a loader plus license with live status on thefinalshacks.org.',
		'Open the product page, confirm status, then checkout. Delivery is digital on supported builds.',
	],
};

const sharedFeaturesList = [
	'Player ESP / wallhack — boxes, skeletons, distance and health through terrain and destructible arenas.',
	'Loot ESP — weapons, meds, and cashout cues with configurable filters.',
	'2D radar — map-style awareness for off-screen threats in Cashout and Quick Cash.',
	'Soft aim — adjustable FOV, smoothing and hitbox; leave it off if you only want ESP.',
	'Stream-proof — hide supported overlays from capture when you clip or go live.',
	'Config save/load — keep your setup between sessions.',
];

const sharedNextStep = {
	paragraphs: [
		'Read the hotkeys and setup, then buy THE FINALS Hacks when status is live.',
	],
};

import { brand } from '../brand';

const sharedCta = {
	title: 'Ready for THE FINALS Hacks?',
	body: 'Check live status, then buy ESP, wallhack, and radar for THE FINALS on thefinalshacks.org. Need help? Read <a href="/setup/">loader help</a> or <a href="/reviews/">buyer reviews</a>. Own the game via <a href="https://store.steampowered.com/app/2073850/THE_FINALS/"target="_blank"rel="noopener noreferrer">Steam</a>.',
	primaryLabel: 'Open product',
	primaryHref: '/the-finals-hacks/',
	secondaryLabel: 'FAQ',
	secondaryHref: '/faq/',
	checkoutLabel: 'Checkout',
	checkoutHref: brand.checkoutUrl,
};

export const forumThreads: ForumThreadDefinition[] = [
	{
		id: 'config-profiles',
		category: 'Setup',
		slug: 'config-save-load',
		title: 'THE FINALS Hacks Configuration: Save, Load and Profile Tuning',
		metaDescription:
			'Save and load THE FINALS Hacks profiles on Windows PC. Keep ESP, soft aim, and radar settings between sessions after you buy.',
		h1: 'THE FINALS Hacks Configuration: Save, Load and Profile Tuning',
		intro:
			'Learn how to save, load, and tune THE FINALS Hacks profiles so your ESP, soft aim, and radar settings stay consistent between Cashout matches.',
		keywords: ['best the finals hacks setup', 'the finals hacks config', 'THE FINALS hacks setup'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
	{
		id: 'radar-features',
		category: 'Features',
		slug: 'the-finals-hacks',
		title: 'THE FINALS Hacks Radar Features',
		metaDescription:
			'2D radar features in THE FINALS Hacks — off-screen threats, team awareness, and Cashout zone reads on Windows PC.',
		h1: 'THE FINALS Hacks Radar Features',
		intro:
			'How the 2D radar in THE FINALS Hacks helps you track off-screen players, teams, and push timing near cashout zones.',
		keywords: ['the finals radar hack', 'THE FINALS radar', 'the finals radar'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
	{
		id: 'soft-aim-config',
		category: 'Features',
		slug: 'soft-aim-config',
		title: 'THE FINALS Hacks Soft Aim Configuration',
		metaDescription:
			'Tune soft aim FOV, smoothing, and bone priority in THE FINALS Hacks for Light, Medium, and Heavy builds on Windows PC.',
		h1: 'THE FINALS Hacks Soft Aim Configuration',
		intro:
			'Adjust soft aim FOV, smoothing, bone priority, and distance limits so aim assist feels natural in THE FINALS firefights.',
		keywords: ['The Finals Hacks menu', 'the finals hacks features', 'THE FINALS hack menu'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
	{
		id: 'performance-esp',
		category: 'Setup',
		slug: 'performance',
		title: 'THE FINALS Hacks Performance Settings for ESP and Radar Tools',
		metaDescription:
			'FPS limit, CPU support, and overlay performance tips for THE FINALS Hacks ESP and radar on Windows PC.',
		h1: 'THE FINALS Hacks Performance Settings for ESP and Radar Tools',
		intro:
			'Keep ESP and radar smooth during destructible arena fights with FPS limits, CPU support, and sensible overlay density.',
		keywords: ['finals esp performance', 'THE FINALS Hacks performance', 'the finals radar'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
	{
		id: 'player-esp',
		category: 'Features',
		slug: 'player-esp',
		title: 'THE FINALS Hacks Player ESP Explained for Arena Fights',
		metaDescription:
			'Player ESP, box ESP, skeleton ESP, and team filters in THE FINALS Hacks — what each overlay shows in Cashout matches.',
		h1: 'THE FINALS Hacks Player ESP Explained for Arena Fights',
		intro:
			'Understand player ESP, team ESP, bot ESP, boxes, skeletons, snaplines, and health bars before you queue a Cashout match.',
		keywords: ['the finals ESP hack', 'the finals wallhack', 'The Finals ESP', 'THE FINALS ESP hack'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
	{
		id: 'aimbot-settings',
		category: 'Instructions',
		slug: 'aimbot-settings',
		title: 'THE FINALS Hacks Aimbot Settings',
		metaDescription:
			'Aimbot hotkeys, visibility check, target selection, and safe defaults for THE FINALS Hacks on Windows PC.',
		h1: 'THE FINALS Hacks Aimbot Settings',
		intro:
			'Set aimbot hotkeys, visibility checks, target selection, and per-weapon profiles before your first THE FINALS session.',
		keywords: ['finals aimbot settings', 'aimbot hotkeys', 'THE FINALS Hacks guide'],
		whatYouGet: sharedWhatYouGet,
		featuresList: sharedFeaturesList,
		nextStep: sharedNextStep,
		cta: sharedCta,
	},
];
