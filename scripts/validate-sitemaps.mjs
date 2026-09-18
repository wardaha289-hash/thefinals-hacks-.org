#!/usr/bin/env node
/**
 * Validates built sitemaps match all routable pages.
 * Run after `npm run build`: node scripts/validate-sitemaps.mjs
 * Site URL and image-sitemap count come from src/data/brand.ts.
 */
import { readFileSync } from 'node:fs';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readBrandSource() {
	return readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
}

function readBrandUrl() {
	const src = readBrandSource();
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

function countBrandSitemapImages() {
	const src = readBrandSource();
	const block = src.match(/sitemap:\s*\{([\s\S]*?)\n\t\},/);
	if (!block) return 6;
	const srcs = [...block[1].matchAll(/src:\s*'((?:\\'|[^'])*)'/g)].map((m) => m[1]);
	return new Set(srcs).size || 6;
}

/** dist/ for static builds; dist/client/ when a Cloudflare adapter rearranges assets. */
async function resolveDistRoot() {
	const candidates = [
		path.join(ROOT, 'dist'),
		path.join(ROOT, 'dist', 'client'),
	];
	for (const dir of candidates) {
		try {
			await access(path.join(dir, 'sitemap.xml'));
			return dir;
		} catch {
			// try next candidate
		}
	}
	throw new Error(
		'Could not find sitemap.xml in dist/ or dist/client/. Run `astro build` first.',
	);
}
const SITE = readBrandUrl();
const IMAGE_SITEMAP_ENTRIES = countBrandSitemapImages();

const BLOG_PAGES = 0;
const FORUM_PAGES = 7; // /forum/ index + 6 threads
const REVIEW_PAGES = 11; // /reviews/ index + 10 review detail pages
const FAQ_PAGES = 11; // FAQ answer pages (index is in content pages)
const CONTENT_PAGES = 8; // home, setup, updates, faq, support, privacy, refund, terms
const PAGES_SITEMAP_URLS = CONTENT_PAGES + REVIEW_PAGES + FAQ_PAGES;
/** Product pages in sitemap — excludes cannibal EN URLs that 301 to stronger pillars */
const PRODUCT_PAGES = 6;
const ENGLISH_PAGES = PAGES_SITEMAP_URLS + PRODUCT_PAGES + FORUM_PAGES;
const HREFLANG_PER_URL = 2;
const SITEMAP_INDEX_ENTRIES = 4; // pages + products + forum + images

/** Built HTML that intentionally 301s — allowed to be absent from sitemaps */
const REDIRECT_ONLY_PATHS = new Set([
	'/best-finals-hacks/',
	'/finals-aimbot-hack/',
	'/finals-esp-hack/',
	'/the-finals-hacks-2026/',
	'/undetected-finals-hacks/',
	'/finals-mod-menu/',
	'/finals-unlock-all/',
	'/finals-soft-aim/',
	'/finals-wallhack/',
	'/finals-cheat-download/',
	'/eac-bypass/',
]);

const ENGLISH_PATHS = [
	'/',
	'/finals-esp/',
	'/finals-aimbot/',
	'/features/',
	'/pricing/',
	'/setup/',
	'/updates/',
	'/faq/',
	'/support/',
	'/undetected-finals-hacks/',
	'/finals-wallhack/',
	'/finals-radar-hack/',
	'/eac-bypass/',
	'/the-finals-hacks-2026/',
	'/the-finals-hacks/',
	'/finals-cheat-download/',
	'/finals-mod-menu/',
	'/finals-soft-aim/',
	'/finals-unlock-all/',
	'/privacy-policy/',
	'/refund-policy/',
	'/terms/',
	'/forum/',
	'/forum/config-save-load/',
	'/forum/the-finals-hacks/',
	'/forum/soft-aim-config/',
	'/forum/performance/',
	'/forum/player-esp/',
	'/forum/aimbot-settings/',
	'/reviews/',
	'/reviews/finals-soft-aim-review-xkrypt0/',
	'/reviews/finals-esp-scav-run-review-buildsr4k/',
	'/reviews/finals-cloud-dma-review-dma-wizard/',
	'/reviews/finals-soft-aim-review-ctrl-player99/',
	'/reviews/finals-cheat-setup-review-stormchaser07/',
	'/reviews/finals-loot-esp-review-lootgoblinx/',
	'/reviews/finals-soft-aim-raid-review-rankedgrind42/',
	'/reviews/finals-radar-hack-review-vanlifeeft/',
	'/reviews/finals-eac-update-review-patchdaymike/',
	'/reviews/finals-sniper-soft-aim-review-snipezonly/',
	'/faq/what-are-the-finals-hacks/',
	'/faq/are-the-finals-hacks-undetected-in-2026/',
	'/faq/cashout-and-quick-cash-modes/',
	'/faq/esp-wallhack-radar-or-aimbot/',
	'/faq/how-are-licenses-delivered/',
	'/faq/where-to-check-updates/',
	'/faq/how-to-contact-support/',
	'/faq/what-is-a-finals-wallhack/',
	'/faq/does-the-finals-hacks-include-radar-hack/',
	'/faq/eac-anti-cheat-and-the-finals-hacks/',
	'/faq/buy-undetected-finals-hacks-windows-pc/',
];

const LOCALE_CODES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

const I18N_LOCALE_CODES = LOCALE_CODES.filter((code) => code !== 'en');

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function extractHreflangCount(xml, url) {
	const block = xml.split('<loc>').find((part) => part.startsWith(url.replace(/&/g, '&amp;')));
	if (!block) return 0;
	return (block.match(/hreflang="/g) ?? []).length;
}

async function collectHtmlPaths(dir, base = '') {
	const entries = await readdir(dir, { withFileTypes: true });
	const paths = [];
	for (const entry of entries) {
		const rel = `${base}/${entry.name}`.replace(/\\/g, '/');
		if (entry.isDirectory()) {
			paths.push(...(await collectHtmlPaths(path.join(dir, entry.name), rel)));
		} else if (entry.name === 'index.html') {
			const urlPath = rel.replace(/\/index\.html$/, '/') || '/';
			paths.push(urlPath === '' ? '/' : urlPath);
		}
	}
	return paths;
}

function fail(msg) {
	console.error(`✗ ${msg}`);
	process.exitCode = 1;
}

function ok(msg) {
	console.log(`✓ ${msg}`);
}

async function main() {
	console.log('Validating sitemaps…\n');
	let errors = 0;
	const bump = () => {
		errors += 1;
	};

	const DIST = await resolveDistRoot();
	if (DIST !== path.join(ROOT, 'dist')) {
		console.log(`Using build output at ${path.relative(ROOT, DIST)}/\n`);
	}

	const sitemapIndex = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
	const sitemapPages = await readFile(path.join(DIST, 'sitemap-pages.xml'), 'utf8');
	const sitemapProducts = await readFile(path.join(DIST, 'sitemap-products.xml'), 'utf8');
	const sitemapForum = await readFile(path.join(DIST, 'sitemap-forum.xml'), 'utf8');
	const sitemapImages = await readFile(path.join(DIST, 'sitemap-images.xml'), 'utf8');
	const robots = await readFile(path.join(ROOT, 'public', 'robots.txt'), 'utf8');
	const redirects = await readFile(path.join(ROOT, 'public', '_redirects'), 'utf8');

	const indexLocs = extractLocs(sitemapIndex);
	const pagesLocs = extractLocs(sitemapPages);
	const productsLocs = extractLocs(sitemapProducts);
	const forumLocs = extractLocs(sitemapForum);
	const imageLocs = extractLocs(sitemapImages);
	const allPageLocs = [...pagesLocs, ...productsLocs, ...forumLocs];

	// sitemap.xml must be a sitemap index (not a urlset)
	if (!sitemapIndex.includes('<sitemapindex')) {
		fail('sitemap.xml must be a sitemap index (<sitemapindex>)');
		bump();
	} else ok('sitemap.xml is a valid sitemap index');

	// Legacy sitemap-index.xml must not be emitted — redirect handles old URLs
	try {
		await access(path.join(DIST, 'sitemap-index.xml'));
		fail('sitemap-index.xml must not exist in dist/ (use redirect to sitemap.xml)');
		bump();
	} catch {
		ok('sitemap-index.xml not emitted (legacy URL redirects to sitemap.xml)');
	}

	if (!redirects.includes('/sitemap-index.xml /sitemap.xml 301')) {
		fail('_redirects missing 301: /sitemap-index.xml → /sitemap.xml');
		bump();
	} else ok('_redirects 301s sitemap-index.xml → sitemap.xml');

	if (pagesLocs.length !== PAGES_SITEMAP_URLS) {
		fail(`sitemap-pages.xml: expected ${PAGES_SITEMAP_URLS} URLs, got ${pagesLocs.length}`);
		bump();
	} else ok(`sitemap-pages.xml has ${PAGES_SITEMAP_URLS} content URLs`);

	if (productsLocs.length !== PRODUCT_PAGES) {
		fail(`sitemap-products.xml: expected ${PRODUCT_PAGES} URLs, got ${productsLocs.length}`);
		bump();
	} else ok(`sitemap-products.xml has ${PRODUCT_PAGES} product URLs`);

	if (forumLocs.length !== FORUM_PAGES) {
		fail(`sitemap-forum.xml: expected ${FORUM_PAGES} forum URLs, got ${forumLocs.length}`);
		bump();
	} else ok(`sitemap-forum.xml has ${FORUM_PAGES} forum URLs`);

	if (pagesLocs.length + productsLocs.length + forumLocs.length !== ENGLISH_PAGES) {
		fail(`Split sitemaps total: expected ${ENGLISH_PAGES}, got ${pagesLocs.length + productsLocs.length + forumLocs.length}`);
		bump();
	} else ok(`${ENGLISH_PAGES} English URLs across pages, products, and forum sitemaps`);

	if (imageLocs.length !== IMAGE_SITEMAP_ENTRIES) {
		fail(`sitemap-images.xml: expected ${IMAGE_SITEMAP_ENTRIES} image host URLs, got ${imageLocs.length}`);
		bump();
	} else ok(`sitemap-images.xml has ${IMAGE_SITEMAP_ENTRIES} image entries`);

	const uniqueImageHosts = new Set(imageLocs);
	if (uniqueImageHosts.size !== imageLocs.length) {
		fail(
			`sitemap-images.xml has duplicate <loc> hosts (${imageLocs.length} locs, ${uniqueImageHosts.size} unique) — causes crawl warnings`,
		);
		bump();
	} else ok('sitemap-images.xml has unique page <loc> hosts (no duplicates)');

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!productsLocs.includes(required) && !pagesLocs.includes(required)) {
			fail(`Missing core page in split sitemaps: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Core pages present: /features/ /pricing/ /updates/');
	}

	for (const required of [`${SITE}/features/`, `${SITE}/pricing/`, `${SITE}/updates/`]) {
		if (!imageLocs.includes(required)) {
			fail(`Missing core host in sitemap-images.xml: ${required}`);
			bump();
		}
	}
	if (errors === 0) {
		ok('Image sitemap hosts Features, Store (/pricing/), and Status (/updates/)');
	}

	for (const p of ENGLISH_PATHS) {
		if (REDIRECT_ONLY_PATHS.has(p)) continue;
		const full = `${SITE}${p === '/' ? '/' : p}`;
		if (!allPageLocs.includes(full)) {
			fail(`Missing English URL in split sitemaps: ${full}`);
			bump();
		}
	}
	if (errors === 0) ok(`All ${ENGLISH_PAGES} English canonical paths present in split sitemaps`);

	const combinedXml = `${sitemapPages}\n${sitemapProducts}\n${sitemapForum}`;
	if (combinedXml.includes('/undefined') || combinedXml.includes('undefined</image:loc>')) {
		fail('Split sitemaps contain broken image:loc ending in /undefined');
		bump();
	} else ok('Split sitemaps have no undefined image URLs');

	function countUrlsMissingImages(xml) {
		const blocks = xml.split(/<url>/i).slice(1);
		return blocks.filter((block) => !/<image:image[\s>]/i.test(block)).length;
	}

	const missingImages =
		countUrlsMissingImages(sitemapPages) +
		countUrlsMissingImages(sitemapProducts) +
		countUrlsMissingImages(sitemapForum);
	if (missingImages > 0) {
		fail(`Split sitemaps: ${missingImages} <url> entries missing <image:image>`);
		bump();
	} else ok('Every split sitemap URL has <image:image>');

	const overlap = pagesLocs.filter((u) => productsLocs.includes(u) || forumLocs.includes(u));
	if (overlap.length > 0) {
		fail(`Duplicate URLs across split sitemaps: ${overlap.join(', ')}`);
		bump();
	} else ok('No duplicate URLs across pages, products, and forum sitemaps');

	for (const loc of allPageLocs) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS URL: ${loc}`);
			bump();
		}
		if (!loc.endsWith('/')) {
			fail(`URL missing trailing slash: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	for (const loc of indexLocs) {
		if (!loc.startsWith('https://')) {
			fail(`Non-HTTPS sub-sitemap URL: ${loc}`);
			bump();
		}
		if (loc.includes('www.')) {
			fail(`Sub-sitemap URL must use apex domain (no www): ${loc}`);
			bump();
		}
	}
	if (errors === 0) ok('All sitemap URLs use HTTPS apex with trailing slashes');

	const homeHreflang = extractHreflangCount(sitemapPages, `${SITE}/`);
	if (homeHreflang !== HREFLANG_PER_URL) {
		fail(`Homepage hreflang links: expected ${HREFLANG_PER_URL}, got ${homeHreflang}`);
		bump();
	} else ok(`Homepage has ${HREFLANG_PER_URL} hreflang alternates (en + x-default)`);

	if (indexLocs.length !== SITEMAP_INDEX_ENTRIES) {
		fail(`sitemap.xml: expected ${SITEMAP_INDEX_ENTRIES} sub-sitemaps, got ${indexLocs.length}`);
		bump();
	} else ok(`sitemap.xml lists ${SITEMAP_INDEX_ENTRIES} sub-sitemaps`);

	for (const sub of ['sitemap-pages.xml', 'sitemap-products.xml', 'sitemap-forum.xml', 'sitemap-images.xml']) {
		if (!indexLocs.includes(`${SITE}/${sub}`)) {
			fail(`sitemap.xml missing ${sub}`);
			bump();
		}
	}
	if (errors === 0) ok('sitemap.xml lists pages, products, forum, and image sitemaps');

	for (const legacy of ['sitemap-en.xml', 'sitemap-i18n.xml', 'sitemap-regions.xml']) {
		if (indexLocs.includes(`${SITE}/${legacy}`)) {
			fail(`sitemap.xml must not list legacy regional sitemap: ${legacy}`);
			bump();
		}
	}
	if (errors === 0) ok('No legacy locale/regional sitemaps in sitemap index');

	if (!robots.includes(`${SITE}/sitemap.xml`)) {
		fail('robots.txt missing Sitemap: sitemap.xml');
		bump();
	}
	if (robots.includes(`${SITE}/sitemap-index.xml`)) {
		fail('robots.txt must not list legacy sitemap-index.xml');
		bump();
	}
	for (const sub of ['sitemap-i18n.xml', 'sitemap-images.xml', 'sitemap-en.xml', 'sitemap-regions.xml']) {
		if (robots.includes(`${SITE}/${sub}`)) {
			fail(`robots.txt must not list redundant sitemap: ${sub} (already covered by sitemap.xml index)`);
			bump();
		}
	}
	if (errors === 0) ok('robots.txt lists sitemap.xml only (primary GSC submission path)');

	const htmlPaths = await collectHtmlPaths(DIST);
	const sitemapPaths = new Set(allPageLocs.map((u) => u.replace(SITE, '') || '/'));

	const htmlSet = new Set(htmlPaths);
	const missingFromSitemap = [...htmlSet].filter((p) => {
		if (sitemapPaths.has(p) || REDIRECT_ONLY_PATHS.has(p)) return false;
		if (/^\/[a-z]{2}\/blog(\/|$)/.test(p)) return false;
		if (p.startsWith('/blog/')) return false;
		return true;
	});
	const extraInSitemap = [...sitemapPaths].filter((p) => !htmlSet.has(p));

	if (missingFromSitemap.length > 0) {
		fail(`HTML pages missing from sitemaps: ${missingFromSitemap.slice(0, 5).join(', ')}${missingFromSitemap.length > 5 ? '…' : ''}`);
		bump();
	} else ok('Every indexable English HTML page is listed in a sitemap');

	if (extraInSitemap.length > 0) {
		fail(`Sitemap URLs without HTML: ${extraInSitemap.slice(0, 5).join(', ')}`);
		bump();
	} else ok('Every sitemap URL has a matching HTML page');

	console.log('');
	if (errors > 0) {
		console.error(`Validation failed with ${errors} error(s).`);
		process.exit(1);
	}
	console.log('All sitemap checks passed.');
	console.log(`\nSubmit to Google Search Console: ${SITE}/sitemap.xml`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
