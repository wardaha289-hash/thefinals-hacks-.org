/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'THE FINALS Hacks',
	/** Short product label if needed */
	shortName: 'THE FINALS',
	/** Navbar wordmark (left of centered nav) */
	navBrand: 'TheFinals',
	/** Canonical origin — no trailing slash */
	url: 'https://thefinalshacks.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@thefinalshacks.org',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fthefinals',

	/** Game this template instance targets */
	game: 'THE FINALS',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/the-finals-hacks-logo.webp',
	logoRaster: '/images/the-finals-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'THE FINALS Hacks logo',
	defaultOgImage: '/images/the-finals-hacks-hero-1024w.webp',
	heroImage: '/images/the-finals-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#ff00ff',
		bg: '#1a1a1a',
		soft: '#ff66ff',
		deep: '#cc00cc',
		hover: '#ff33ff',
		panel: '#141414',
	},

	/**
	 * Keyword system — primary drives titles; list feeds home intent only (not a master dump).
	 */
	keywords: {
		primary: 'the finals hacks',
		list: [
			'The Finals Hacks',
			'the finals hacks',
			'THE FINALS hacks',
			'the finals ESP',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		homeTitle: 'The Finals Hacks | ESP & Wallhack',
		homeDescription:
			'The Finals Hacks for THE FINALS on Windows PC — ESP, wallhack, and radar with live patch status. One product. No other games.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, wallhack, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: 'Buy The Finals Hacks | ESP, Wallhack, Radar & More',
		storeDescription:
			'Buy The Finals Hacks for THE FINALS on Windows PC. Monthly and lifetime plans with ESP, wallhack, and radar. Instant delivery after checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live status for {brand} after {game} or {antiCheat} patches. Check here before you queue a match on Windows PC today.',
		previewTitle: 'Buy The Finals Hacks | ESP, Wallhack, Radar & More',
		previewDescription:
			'Buy The Finals Hacks for THE FINALS on Windows PC. ESP, wallhack, radar, and Easy Anti-Cheat patch updates in one license.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can queue faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for THE FINALS — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: 'The Finals Hacks Reviews | Player Feedback',
		reviewsDescription:
			'Player feedback for The Finals Hacks — ESP, wallhack, radar, and patch updates for THE FINALS on Windows PC.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			' and notes for {game} — arena tips, ESP, wallhack, cashout routes, and {antiCheat} update coverage for Windows PC players.',
		forumTitle: 'The Finals Hacks Blogs | For THE FINALS Players',
		forumDescription:
			' for THE FINALS players — setup, ESP, wallhack, radar, and configuration threads for The Finals Hacks on Windows PC.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: ' ESP, wallhack, and radar for THE FINALS on Windows PC',
		summary:
			'The Finals Hacks is a single-product site for THE FINALS: ESP, wallhack, radar, and related gameplay features with live patch status. We do not sell hacks for other games.',
		heroLede: ' ESP, soft aim, and radar for THE FINALS on Windows PC.',
		blogLabel: 'THE FINALS Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		heroCta: 'Explore Now',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro:
			'{brand} for THE FINALS — ESP wallhack, soft aim, 2D radar, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Preview',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-09-18',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/finals-hacks-esp.webp',
				title: 'ESP overlay in THE FINALS',
				caption: 'Box ESP, health bars, and FOV circle during Cashout matches',
			},
			{
				src: '/images/finals-hacks-aimbot.webp',
				title: 'Aimbot and player ESP in THE FINALS',
				caption: 'Snaplines, skeleton ESP, and aim assist in destructible arenas',
			},
			{
				src: '/images/finals-hacks-wallhack.webp',
				title: 'Box ESP for THE FINALS competitive play',
				caption: 'Player ESP boxes through walls on Las Vegas and Monaco maps',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
