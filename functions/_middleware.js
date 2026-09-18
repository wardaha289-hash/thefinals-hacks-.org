import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://thefinalshacks.org';
const APEX_HOST = 'thefinalshacks.org';
const WWW_HOST = 'www.thefinalshacks.org';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'bestfinalscheats.com',
	'www.bestfinalscheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

// Keep in sync with public/_redirects (which preserves query strings by default, as we do below).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap.xml',
	'/sitemap-i18n.xml': '/sitemap.xml',
	'/sitemap-i18n.xml/': '/sitemap.xml',
	'/sitemap-blogs.xml': '/sitemap-forum.xml',
	'/sitemap-blogs.xml/': '/sitemap-forum.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Exact-match keyword → pillar (not homepage)
	'/escape-from-the-finals-hacks': '/the-finals-hacks/',
	'/escape-from-the-finals-hacks/': '/the-finals-hacks/',
	// Cannibalization → canonical landings (money URL = /the-finals-hacks/)
	'/finals-esp-hack': '/finals-esp/',
	'/finals-esp-hack/': '/finals-esp/',
	'/finals-aimbot-hack': '/finals-aimbot/',
	'/finals-aimbot-hack/': '/finals-aimbot/',
	'/best-finals-hacks': '/the-finals-hacks/',
	'/best-finals-hacks/': '/the-finals-hacks/',
	'/the-finals-hacks-2026': '/the-finals-hacks/',
	'/the-finals-hacks-2026/': '/the-finals-hacks/',
	'/undetected-finals-hacks': '/the-finals-hacks/',
	'/undetected-finals-hacks/': '/the-finals-hacks/',
	'/finals-mod-menu': '/the-finals-hacks/',
	'/finals-mod-menu/': '/the-finals-hacks/',
	'/finals-unlock-all': '/the-finals-hacks/',
	'/finals-unlock-all/': '/the-finals-hacks/',
	'/finals-soft-aim': '/finals-aimbot/',
	'/finals-soft-aim/': '/finals-aimbot/',
	'/finals-wallhack': '/finals-esp/',
	'/finals-wallhack/': '/finals-esp/',
	'/finals-cheat-download': '/setup/',
	'/finals-cheat-download/': '/setup/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/warzone-cheats': '/the-finals-hacks/',
	'/warzone-cheats/': '/the-finals-hacks/',
	'/warzone-hacks': '/the-finals-hacks/',
	'/warzone-hacks/': '/the-finals-hacks/',
	'/warzone-esp': '/finals-esp/',
	'/warzone-esp/': '/finals-esp/',
	'/warzone-aimbot': '/finals-aimbot/',
	'/warzone-aimbot/': '/finals-aimbot/',
	'/ricochet-bypass': '/updates/',
	'/ricochet-bypass/': '/updates/',
	'/fortnite-aimbot': '/finals-aimbot/',
	'/fortnite-aimbot/': '/finals-aimbot/',
	'/fortnite-esp': '/finals-esp/',
	'/fortnite-esp/': '/finals-esp/',
	'/fortnite-hacks': '/the-finals-hacks/',
	'/fortnite-hacks/': '/the-finals-hacks/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/eac-bypass-fortnite': '/updates/',
	'/eac-bypass-fortnite/': '/updates/',
	// Legacy Tarkov inbound paths → THE FINALS pillars
	'/escape-from-tarkov-cheats': '/the-finals-hacks/',
	'/escape-from-tarkov-cheats/': '/the-finals-hacks/',
	'/tarkov-esp-hack': '/finals-esp/',
	'/tarkov-esp-hack/': '/finals-esp/',
	'/tarkov-aimbot-hack': '/finals-aimbot/',
	'/tarkov-aimbot-hack/': '/finals-aimbot/',
	'/best-tarkov-cheats': '/the-finals-hacks/',
	'/best-tarkov-cheats/': '/the-finals-hacks/',
	'/tarkov-cheats-2026': '/the-finals-hacks/',
	'/tarkov-cheats-2026/': '/the-finals-hacks/',
	'/undetected-tarkov-cheats': '/the-finals-hacks/',
	'/undetected-tarkov-cheats/': '/the-finals-hacks/',
	'/tarkov-mod-menu': '/the-finals-hacks/',
	'/tarkov-mod-menu/': '/the-finals-hacks/',
	'/tarkov-unlock-all': '/the-finals-hacks/',
	'/tarkov-unlock-all/': '/the-finals-hacks/',
	'/tarkov-soft-aim': '/finals-aimbot/',
	'/tarkov-soft-aim/': '/finals-aimbot/',
	'/tarkov-wallhack': '/finals-esp/',
	'/tarkov-wallhack/': '/finals-esp/',
	'/tarkov-cheat-download': '/setup/',
	'/tarkov-cheat-download/': '/setup/',
	'/battleye-bypass': '/updates/',
	'/battleye-bypass/': '/updates/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/finals-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/finals-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/finals-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/finals-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/finals-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/finals-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/finals-scav-run-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/finals-scav-run-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/finals-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/finals-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/finals-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/finals-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/finals-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/finals-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/finals-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/finals-warmup-maps-ranked/',
	'/reviews/finals-esp-zero-build-review-buildsr4k': '/reviews/finals-esp-scav-run-review-buildsr4k/',
	'/reviews/finals-esp-zero-build-review-buildsr4k/': '/reviews/finals-esp-scav-run-review-buildsr4k/',
	'/reviews/finals-radar-hack-review-vanlifefn': '/reviews/finals-radar-hack-review-vanlifeeft/',
	'/reviews/finals-radar-hack-review-vanlifefn/': '/reviews/finals-radar-hack-review-vanlifeeft/',
	'/reviews/finals-radar-hack-review-vanlifewz': '/reviews/finals-radar-hack-review-vanlifeeft/',
	'/reviews/finals-radar-hack-review-vanlifewz/': '/reviews/finals-radar-hack-review-vanlifeeft/',
	'/reviews/finals-controller-soft-aim-review-ctrl-player99': '/reviews/finals-soft-aim-review-ctrl-player99/',
	'/reviews/finals-controller-soft-aim-review-ctrl-player99/': '/reviews/finals-soft-aim-review-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
