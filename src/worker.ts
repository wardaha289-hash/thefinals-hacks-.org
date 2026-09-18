/**
 * Cloudflare Worker — host canonicalization + path 301s before static assets.
 * Canonical site: https://thefinalshacks.org (matches brand.url)
 *
 * Requires DNS: CNAME `www` → `thefinalshacks.org` (proxied) AND
 * Workers custom domain `www.thefinalshacks.org` attached — otherwise
 * www is NXDOMAIN and Seobility fails the www/non-www check.
 */
import cannibalRedirects from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_ORIGIN = 'https://thefinalshacks.org';
const CANONICAL_HOST = 'thefinalshacks.org';

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set<string>();

const CANNIBAL_REDIRECTS = cannibalRedirects as Record<string, string>;

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	return CANNIBAL_REDIRECTS[pathname] ?? null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const hostTarget = canonicalUrl(request);
		if (hostTarget) {
			return Response.redirect(hostTarget.toString(), 301);
		}

		const url = new URL(request.url);
		const redirectPath = pathRedirect(url.pathname);
		if (redirectPath) {
			const location = new URL(redirectPath + url.search, CANONICAL_ORIGIN);
			return Response.redirect(location.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
