import { siteConfig } from './site';
import { finalsImages } from './finals';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	finalsImages.espWallhack,
	finalsImages.aimbotCombat,
	finalsImages.aimbotSkeleton,
	finalsImages.playerEsp,
	finalsImages.cheatsCombat,
	'/images/the-finals-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/the-finals-hacks-hero-1024w.webp',
	'finals-esp': finalsImages.playerEsp,
	'finals-aimbot': finalsImages.aimbotCombat,
	features: finalsImages.aimbotSkeleton,
	pricing: finalsImages.cheatsCombat,
	setup: finalsImages.playerEsp,
	updates: '/images/the-finals-hacks-hero-1024w.webp',
	faq: finalsImages.aimbotSkeleton,
	support: finalsImages.cheatsCombat,
	undetected: finalsImages.espWallhack,
	wallhack: finalsImages.espWallhack,
	radar: finalsImages.playerEsp,
	eac: finalsImages.aimbotCombat,
	'cheats-2026': '/images/the-finals-hacks-hero-1024w.webp',
	hacks: '/images/finals-hacks-match-preview.webp',
	'cheat-download': finalsImages.cheatsCombat,
	'mod-menu': finalsImages.playerEsp,
	'soft-aim': finalsImages.aimbotSkeleton,
	'best-cheats': '/images/the-finals-hacks-hero-1024w.webp',
	'aimbot-hack': finalsImages.aimbotSkeleton,
	'esp-hack': finalsImages.espWallhack,
	'unlock-all': finalsImages.playerEsp,
	privacy: finalsImages.aimbotCombat,
	refund: finalsImages.cheatsCombat,
	terms: finalsImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
