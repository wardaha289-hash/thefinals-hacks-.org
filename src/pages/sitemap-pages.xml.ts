import type { APIRoute } from 'astro';
import { contentSitemapRows, renderSitemapUrlBlock } from '../data/sitemap-url-blocks';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** English info, legal, reviews, and FAQ URLs. */
export const GET: APIRoute = () => {
	const urls = contentSitemapRows().map((entry) => renderSitemapUrlBlock(entry));
	const xml = renderUrlsetXml(urls);
	return new Response(xml, { headers: sitemapResponseHeaders });
};
