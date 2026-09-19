export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';
import {
	customerReviewGeneratedStats,
	customerReviewSeed,
	type CustomerReviewSeed,
} from './customer-reviews';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<
	T extends { seoTitle: string; seoDescription: string; text: string; short: string },
>(item: T): T {
	return {
		...item,
		text: fillBrandTokens(item.text),
		short: fillBrandTokens(item.short),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/the-finals-hacks/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/the-finals-hacks/' },
	{ label: fillBrandTokens('{game} esp'), href: '/finals-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/finals-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens(' {primaryKeyword}'), href: '/the-finals-hacks/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/finals-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/finals-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/the-finals-hacks/' },
	{ label: 'Aimbot', href: '/finals-aimbot/' },
	{ label: 'ESP', href: '/finals-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/the-finals-hacks/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/finals-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/finals-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/finals-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Forum'), href: '/forum/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an {primaryKeyword} package for THE FINALS on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-the-finals-hacks',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent status — maintenance and responsible use matter.',
		slug: 'are-the-finals-hacks-undetected-in-2026',
		seoTitle: 'Are {brand} in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent status.',
	}),
	faq({
		question: 'Does this work in Cashout and Quick Cash matches?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading players and teams, spotting threats, and staying aware near cashout zones.',
		slug: 'cashout-and-quick-cash-modes',
		seoTitle: 'Cashout and Quick Cash Support | FAQ',
		seoDescription:
			'{brand} works in Cashout and Quick Cash matches — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a {game} or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a {game} or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows players, teams, and bots, and loot through walls. {brand} includes distance readouts, extract cues, and toggleable categories.',
		slug: 'what-is-a-finals-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals players, teams, and bots, and loot through walls — with distance, extracts, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and extract holds.',
		slug: 'does-the-finals-hacks-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'eac-anti-cheat-and-the-finals-hacks',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-finals-hacks-windows-pc',
		seoTitle: 'Buy {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type { CustomerReviewSeed };
export type CustomerReview = CustomerReviewSeed;

export const customerReviews = customerReviewSeed.map((item) => reviewMeta(item));

export const customerReviewStats = customerReviewGeneratedStats;
