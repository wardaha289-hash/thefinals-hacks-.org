import type { APIRoute } from 'astro';
import { getForumSitemapEntries } from '../data/forum/helpers';
import { siteConfig } from '../data/site';
import { latestPageLastmod } from '../data/sitemap-meta';
import { renderSitemapIndexXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/**
 * Primary sitemap index — pages, products, blogs (forum), and images only.
 * Honest English URLs; no regional/locale duplicate sitemaps.
 */
export const GET: APIRoute = () => {
	const pageLastmod = latestPageLastmod();
	const forumLastmod = getForumSitemapEntries().reduce(
		(max, entry) => (entry.lastmod > max ? entry.lastmod : max),
		pageLastmod,
	);
	const base = siteConfig.url;

	const subSitemaps: { loc: string; lastmod: string }[] = [
		{ loc: new URL('/sitemap-pages.xml', base).href, lastmod: pageLastmod },
		{ loc: new URL('/sitemap-products.xml', base).href, lastmod: pageLastmod },
		{ loc: new URL('/sitemap-forum.xml', base).href, lastmod: forumLastmod },
		{ loc: new URL('/sitemap-images.xml', base).href, lastmod: pageLastmod },
	];

	const xml = renderSitemapIndexXml(subSitemaps);

	return new Response(xml, { headers: sitemapResponseHeaders });
};
