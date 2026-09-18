import type { APIRoute } from 'astro';
import { legacySitemapRedirect } from '../data/sitemap-legacy-redirect';

export const prerender = true;

/** Legacy locale aggregate sitemap — redirect to primary index. */
export const GET: APIRoute = () => legacySitemapRedirect('/sitemap.xml');
