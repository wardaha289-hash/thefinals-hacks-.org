import type { APIRoute } from 'astro';
import { forumSitemapRows, renderSitemapUrlBlock } from '../data/sitemap-url-blocks';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** Forum hub and thread URLs (guides). */
export const GET: APIRoute = () => {
	const urls = forumSitemapRows().map((entry) => renderSitemapUrlBlock(entry));
	const xml = renderUrlsetXml(urls);
	return new Response(xml, { headers: sitemapResponseHeaders });
};
