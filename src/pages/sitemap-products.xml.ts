import type { APIRoute } from 'astro';
import { productSitemapRows, renderSitemapUrlBlock } from '../data/sitemap-url-blocks';
import { renderUrlsetXml, sitemapResponseHeaders } from '../data/sitemap-xml';

export const prerender = true;

/** English product and buy-intent landing URLs. */
export const GET: APIRoute = () => {
	const urls = productSitemapRows().map((entry) => renderSitemapUrlBlock(entry));
	const xml = renderUrlsetXml(urls);
	return new Response(xml, { headers: sitemapResponseHeaders });
};
