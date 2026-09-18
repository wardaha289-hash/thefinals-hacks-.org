import type { PageId } from './i18n/routing';

/** Buy / product landing URLs — sitemap-products.xml */
export const productPageIds = new Set<PageId>([
	'hacks',
	'pricing',
	'features',
	'finals-esp',
	'finals-aimbot',
	'radar',
]);

/** Info, legal, and hub URLs — sitemap-pages.xml */
export const contentPageIds = new Set<PageId>([
	'home',
	'setup',
	'updates',
	'faq',
	'support',
	'privacy',
	'refund',
	'terms',
]);
