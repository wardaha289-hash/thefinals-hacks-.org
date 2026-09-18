/**
 * Locked SEO identity — single source for purpose, about terms, and route keyword intents.
 * Do not paste ROUTE_KEYWORDS into every page meta field; use per-route only.
 */
export const SITE_PURPOSE =
	'The Finals Hacks is a single-product site for THE FINALS: ESP, wallhack, radar, and related gameplay features with live patch status. We do not sell hacks for other games.';

export const SITE_ABOUT = [
	'The Finals Hacks',
	'THE FINALS hacks',
	'The Finals ESP',
	'The Finals wallhack',
] as const;

export const ORGANIZATION_ALTERNATE_NAMES = [
	'The Finals Hacks',
	'the finals hacks',
	'thefinalshacks',
	'thefinalshacks.org',
] as const;

/** Short intent lists — max one route each; do not merge into a master dump. */
export const ROUTE_KEYWORDS = {
	home: ['The Finals Hacks', 'the finals hacks', 'THE FINALS hacks', 'the finals ESP'],
	forum: ['The Finals Hacks blogs', 'the finals hacks guide', 'THE FINALS guide'],
	reviews: ['The Finals Hacks reviews', 'the finals hacks review'],
	product: ['buy The Finals Hacks', 'the finals ESP', 'the finals wallhack', 'the finals radar'],
} as const;

export const PRODUCT_SCHEMA_SCOPE = 'The Finals only — no other games.';

export type HreflangPair = { hreflang: 'en' | 'x-default'; href: string };

/** Honest hreflang — English URL only (no fake regional locale stacks). */
export function honestHreflangAlternates(href: string): HreflangPair[] {
	return [
		{ hreflang: 'en', href },
		{ hreflang: 'x-default', href },
	];
}
