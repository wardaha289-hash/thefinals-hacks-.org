import type { APIRoute, GetStaticPaths } from 'astro';
import { i18nLocaleCodes } from '../data/sitemap-locale';
import { legacySitemapRedirect } from '../data/sitemap-legacy-redirect';

export const prerender = true;

export const getStaticPaths = (() =>
	i18nLocaleCodes.map((locale) => ({ params: { locale } }))) satisfies GetStaticPaths;

/** Legacy per-locale sitemaps — redirect to primary index. */
export const GET: APIRoute = () => legacySitemapRedirect('/sitemap.xml');
