import { getFaqSitemapEntries } from './faq';
import { getForumSitemapEntries } from './forum/helpers';
import { hreflangLinksXml, resolvePageIdFromPath } from './i18n/routing';
import type { PageId } from './i18n/routing';
import {
	absolutePageUrl,
	pageSitemapEntries,
	type PageSitemapEntry,
	type SitemapImage,
} from './page-sitemap';
import { getReviewSitemapEntries } from './reviews';
import { contentPageIds, productPageIds } from './sitemap-groups';
import { escapeXml, renderImageExtension } from './sitemap-xml';

type SitemapRow = {
	path: string;
	lastmod: string;
	changefreq: string;
	priority: number;
	images?: SitemapImage[];
};

function filterByPageIds(ids: Set<PageId>, entries: PageSitemapEntry[]): PageSitemapEntry[] {
	return entries.filter((entry) => {
		const pageId = resolvePageIdFromPath(entry.path);
		return pageId && ids.has(pageId);
	});
}

export function productSitemapRows(): SitemapRow[] {
	return filterByPageIds(productPageIds, pageSitemapEntries);
}

export function contentSitemapRows(): SitemapRow[] {
	const pages = filterByPageIds(contentPageIds, pageSitemapEntries);
	const reviews = getReviewSitemapEntries();
	const faq = getFaqSitemapEntries();
	return [...pages, ...reviews, ...faq];
}

export function forumSitemapRows(): SitemapRow[] {
	return getForumSitemapEntries()
		.filter((entry) => !entry.path.match(/^\/[a-z]{2}\//))
		.map((entry) => ({
			path: entry.path,
			lastmod: entry.lastmod,
			changefreq: entry.changefreq,
			priority: entry.priority,
			images: entry.images,
		}));
}

export function renderSitemapUrlBlock(entry: SitemapRow): string {
	const images = (entry.images ?? [])
		.map((image) => renderImageExtension(image, entry.path))
		.join('\n');
	const imageBlock = images ? `\n${images}` : '';
	const loc = absolutePageUrl(entry.path);
	const pageId = resolvePageIdFromPath(entry.path);
	const hreflangBlock = pageId
		? `\n${hreflangLinksXml(pageId, escapeXml)}`
		: `\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(loc)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(loc)}"/>`;

	return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(entry.lastmod)}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>${hreflangBlock}${imageBlock}
  </url>`;
}
