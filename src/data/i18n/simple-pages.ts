import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See players, teams, and bots through walls with box ESP, skeleton ESP, snaplines, health ESP, name ESP, and distance ESP.',
					'Use visibility check and filters so overlays stay clear in Las Vegas, Monaco, Seoul, and other THE FINALS arenas.',
				],
				list: ['Player ESP & box ESP', 'Team ESP & bot ESP', 'Skeleton ESP & snaplines', 'Health, name & distance ESP'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural in THE FINALS gunplay.',
					'Set FOV, crosshair, aim smoothing, bone selection, target selection, and distance limit before you queue.',
				],
				list: ['Aim smoothing & FOV', 'Bone & target selection', 'Visibility check', 'Keybinds mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near cashout zones without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in Cashout & Quick Cash'],
			},
			{
				h2: 'Settings & support',
				paragraphs: [
					'Menu settings, language settings, FPS limit, and CPU support on Windows PC.',
					'We rebuild after big {game} or {antiCheat} patches. Check Status before you play after a patch day.',
				],
				list: ['Menu & language settings', 'FPS limit & CPU support', 'Status on the Status page', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'THE FINALS Hacks overview',
		ctaSecondaryHref: '/the-finals-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 18 Sep 2026 the package is online for THE FINALS on Windows PC. We post a new note here when a game or Easy Anti-Cheat patch needs a rebuild.',
					'If Status is green, you can queue. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'THE FINALS Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-match look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for THE FINALS on Windows PC — built for Cashout, Quick Cash, and ranked competitive modes.',
					'THE FINALS Hacks bundles aimbot, player ESP, team ESP, bot ESP, box ESP, skeleton ESP, snaplines, health ESP, name ESP, distance ESP, radar, crosshair, FOV, visibility check, aim smoothing, bone selection, target selection, distance limit, FPS limit, keybinds, menu settings, and language settings in a single package.',
				],
				list: [
					'Aimbot with aim smoothing and FOV',
					'Player ESP, team ESP, and bot ESP',
					'Box ESP, skeleton ESP, and snaplines',
					'Health ESP, name ESP, and distance ESP',
					'2D radar and crosshair overlay',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for THE FINALS arenas',
				paragraphs: [
					'THE FINALS is a free-to-play FPS on Steam where destructible arenas, Light Medium and Heavy builds, and cashout objectives decide every match. Whether you queue Cashout on Las Vegas, push vaults in Monaco, or fight for control in Seoul, you need clean information before you commit.',
					'Our thefinals hacks give you player ESP through walls, team ESP so you never confuse allies, and bot ESP when AI fills a lobby. Box ESP and skeleton ESP highlight targets in busy firefights. Snaplines point you to the right angle. Health ESP and name ESP tell you who is weak. Distance ESP keeps long-range fights readable.',
					'The aimbot layer includes visibility check so you only engage valid targets, bone selection for head or chest priority, target selection for nearest or lowest health, and distance limit so you stay within your comfort zone. Aim smoothing keeps movement natural. FOV and crosshair settings match how you already play THE FINALS on PC.',
				],
				list: [
					'<a href="/finals-esp/">ESP guide</a>',
					'<a href="/finals-aimbot/">Aimbot controls</a>',
					'<a href="/finals-radar-hack/">Radar overlay</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'Windows PC software you can tune',
				paragraphs: [
					'THE FINALS Hacks runs on Windows with CPU support tuned for stable FPS. Set an FPS limit so overlays stay smooth during intense destruction. Keybinds let you toggle ESP, aimbot, and radar without leaving a fight. Menu settings and language settings keep the interface clear on first launch.',
					'This is premium THE FINALS gaming software for competitive players who want THE FINALS PC tools in one license — not scattered utilities. Monthly and lifetime plans include the same feature set. After checkout you get instant digital delivery, a setup guide, and email support if you need help.',
					'We maintain the package after THE FINALS updates and Easy Anti-Cheat patches. Check Status before every session. No cheat stays forever, but active maintenance and sensible settings are how serious players use THE FINALS tools responsibly.',
				],
				list: [
					'Windows 10 and 11 support',
					'Menu settings and language settings',
					'FPS limit and CPU support',
					'Keybinds for ESP, aimbot, and radar',
				],
			},
			{
				h2: 'How to start',
				paragraphs: [
					'Buy a plan, get your license by email, then follow the setup guide. Check Status after every major THE FINALS patch or season update.',
				],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'finals-esp': page({
		title: 'THE FINALS ESP | {brand}',
		description:
			'THE FINALS ESP and wallhack for THE FINALS on Windows PC — player boxes, distance, loot filters, and clear overlays in raids.',
		h1: 'ESP',
		intro: 'See players and loot through walls during THE FINALS raids. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'THE FINALS Hacks overview',
		ctaSecondaryHref: '/the-finals-hacks/',
		galleryTitle: 'ESP in raid',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Boxes, distance, and filters for players, teams, and bots, bosses, and loot.'],
				list: ['Player ESP', 'Loot markers', 'Boss and bot filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear dorms, Factory, and scav runs without flooding the screen.'],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot and radar in one plan.'],
				list: [
					'<a href="/the-finals-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'finals-aimbot': page({
		title: 'THE FINALS Aimbot | {brand}',
		description:
			'THE FINALS aimbot and soft aim for THE FINALS on Windows PC — FOV, smoothness, and bone priority you can tune per weapon.',
		h1: 'Aimbot',
		intro: 'Soft aim and aim assist you can tune for THE FINALS. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'THE FINALS Hacks overview',
		ctaSecondaryHref: '/the-finals-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, and bone priority before you queue.'],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP and radar in one license.'],
				list: [
					'<a href="/the-finals-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'THE FINALS Radar | {brand}',
		description:
			'THE FINALS 2D radar for THE FINALS on Windows PC — flank cues near cashout zones without filling the whole screen.',
		h1: 'Radar',
		intro: 'A simple 2D radar for threats outside your view. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'THE FINALS Hacks overview',
		ctaSecondaryHref: '/the-finals-hacks/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Nearby enemy cues with adjustable range for PMC and Quick Cash rounds.'],
				list: ['Flank awareness', 'Extract approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use radar for threats you cannot see yet. Use ESP when you push.'],
				list: [
					'<a href="/finals-esp/">ESP guide</a>',
					'<a href="/the-finals-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
