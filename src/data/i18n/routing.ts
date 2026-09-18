import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'finals-esp'
	| 'finals-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'finals-esp': '/finals-esp/',
	'finals-aimbot': '/finals-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-finals-hacks/',
	wallhack: '/finals-wallhack/',
	radar: '/finals-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/the-finals-hacks-2026/',
	hacks: '/the-finals-hacks/',
	'cheat-download': '/finals-cheat-download/',
	'mod-menu': '/finals-mod-menu/',
	'soft-aim': '/finals-soft-aim/',
	'best-cheats': '/best-finals-hacks/',
	'aimbot-hack': '/finals-aimbot-hack/',
	'esp-hack': '/finals-esp-hack/',
	'unlock-all': '/finals-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'finals-esp': {
		en: 'finals-esp',
		es: 'trucos-finals-esp',
		fr: 'triche-finals-esp',
		de: 'finals-esp-wallhack',
		pt: 'cheats-finals-esp',
		it: 'trucchi-finals-esp',
		nl: 'finals-esp-wallhack',
		pl: 'cheaty-finals-esp',
		ru: 'finals-esp-chity',
		tr: 'finals-esp-hile',
		ar: 'finals-esp-wallhack',
		ja: 'finals-esp-wallhack',
		ko: 'finals-esp-wallhack',
		zh: 'finals-esp-wallhack',
		hi: 'finals-esp-wallhack',
		id: 'finals-esp-wallhack',
		th: 'finals-esp-wallhack',
		vi: 'finals-esp-wallhack',
		uk: 'finals-esp-chity',
		cs: 'finals-esp-wallhack',
		ro: 'finals-esp-wallhack',
		sv: 'finals-esp-wallhack',
	},
	'finals-aimbot': {
		en: 'finals-aimbot',
		es: 'trucos-finals-aimbot',
		fr: 'triche-finals-aimbot',
		de: 'finals-aimbot',
		pt: 'cheats-finals-aimbot',
		it: 'trucchi-finals-aimbot',
		nl: 'finals-aimbot',
		pl: 'cheaty-finals-aimbot',
		ru: 'finals-aimbot-chity',
		tr: 'finals-aimbot-hile',
		ar: 'finals-aimbot',
		ja: 'finals-aimbot',
		ko: 'finals-aimbot',
		zh: 'finals-aimbot',
		hi: 'finals-aimbot',
		id: 'finals-aimbot',
		th: 'finals-aimbot',
		vi: 'finals-aimbot',
		uk: 'finals-aimbot-chity',
		cs: 'finals-aimbot',
		ro: 'finals-aimbot',
		sv: 'finals-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-finals',
		fr: 'fonctionnalites-triche-finals',
		de: 'escape-from-the-finals-hacks-funktionen',
		pt: 'recursos-cheats-finals',
		it: 'funzioni-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-functies',
		pl: 'funkcje-cheatow-finals',
		ru: 'funkcii-chitov-finals',
		tr: 'finals-hile-ozellikleri',
		ar: 'escape-from-the-finals-hacks-features',
		ja: 'escape-from-the-finals-hacks-features',
		ko: 'escape-from-the-finals-hacks-features',
		zh: 'escape-from-the-finals-hacks-features',
		hi: 'escape-from-the-finals-hacks-features',
		id: 'escape-from-the-finals-hacks-features',
		th: 'escape-from-the-finals-hacks-features',
		vi: 'escape-from-the-finals-hacks-features',
		uk: 'funkcii-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-funkce',
		ro: 'functii-cheats-finals',
		sv: 'escape-from-the-finals-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-finals',
		fr: 'prix-triche-finals',
		de: 'escape-from-the-finals-hacks-preise',
		pt: 'precos-cheats-finals',
		it: 'prezzi-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-prijzen',
		pl: 'ceny-cheatow-finals',
		ru: 'ceny-chitov-finals',
		tr: 'finals-hile-fiyatlari',
		ar: 'escape-from-the-finals-hacks-pricing',
		ja: 'escape-from-the-finals-hacks-pricing',
		ko: 'escape-from-the-finals-hacks-pricing',
		zh: 'escape-from-the-finals-hacks-pricing',
		hi: 'escape-from-the-finals-hacks-pricing',
		id: 'escape-from-the-finals-hacks-pricing',
		th: 'escape-from-the-finals-hacks-pricing',
		vi: 'escape-from-the-finals-hacks-pricing',
		uk: 'ciny-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-ceny',
		ro: 'preturi-cheats-finals',
		sv: 'escape-from-the-finals-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-finals',
		fr: 'installation-triche-finals',
		de: 'escape-from-the-finals-hacks-installation',
		pt: 'instalacao-cheats-finals',
		it: 'installazione-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-installatie',
		pl: 'instalacja-cheatow-finals',
		ru: 'ustanovka-chitov-finals',
		tr: 'finals-hile-kurulum',
		ar: 'escape-from-the-finals-hacks-setup',
		ja: 'escape-from-the-finals-hacks-setup',
		ko: 'escape-from-the-finals-hacks-setup',
		zh: 'escape-from-the-finals-hacks-setup',
		hi: 'escape-from-the-finals-hacks-setup',
		id: 'escape-from-the-finals-hacks-setup',
		th: 'escape-from-the-finals-hacks-setup',
		vi: 'escape-from-the-finals-hacks-setup',
		uk: 'vstanovka-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-instalace',
		ro: 'instalare-cheats-finals',
		sv: 'escape-from-the-finals-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-finals',
		fr: 'mises-a-jour-triche-finals',
		de: 'escape-from-the-finals-hacks-updates',
		pt: 'atualizacoes-cheats-finals',
		it: 'aggiornamenti-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-updates',
		pl: 'aktualizacje-cheatow-finals',
		ru: 'obnovleniya-chitov-finals',
		tr: 'finals-hile-guncellemeleri',
		ar: 'escape-from-the-finals-hacks-updates',
		ja: 'escape-from-the-finals-hacks-updates',
		ko: 'escape-from-the-finals-hacks-updates',
		zh: 'escape-from-the-finals-hacks-updates',
		hi: 'escape-from-the-finals-hacks-updates',
		id: 'escape-from-the-finals-hacks-updates',
		th: 'escape-from-the-finals-hacks-updates',
		vi: 'escape-from-the-finals-hacks-updates',
		uk: 'onovlennya-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-aktualizace',
		ro: 'actualizari-cheats-finals',
		sv: 'escape-from-the-finals-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-finals',
		fr: 'faq-triche-finals',
		de: 'escape-from-the-finals-hacks-faq',
		pt: 'faq-cheats-finals',
		it: 'faq-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-faq',
		pl: 'faq-cheatow-finals',
		ru: 'faq-chitov-finals',
		tr: 'finals-hile-sss',
		ar: 'escape-from-the-finals-hacks-faq',
		ja: 'escape-from-the-finals-hacks-faq',
		ko: 'escape-from-the-finals-hacks-faq',
		zh: 'escape-from-the-finals-hacks-faq',
		hi: 'escape-from-the-finals-hacks-faq',
		id: 'escape-from-the-finals-hacks-faq',
		th: 'escape-from-the-finals-hacks-faq',
		vi: 'escape-from-the-finals-hacks-faq',
		uk: 'faq-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-faq',
		ro: 'faq-cheats-finals',
		sv: 'escape-from-the-finals-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-finals',
		fr: 'support-triche-finals',
		de: 'escape-from-the-finals-hacks-support',
		pt: 'suporte-cheats-finals',
		it: 'supporto-trucchi-finals',
		nl: 'escape-from-the-finals-hacks-support',
		pl: 'wsparcie-cheatow-finals',
		ru: 'podderzhka-chitov-finals',
		tr: 'finals-hile-destek',
		ar: 'escape-from-the-finals-hacks-support',
		ja: 'escape-from-the-finals-hacks-support',
		ko: 'escape-from-the-finals-hacks-support',
		zh: 'escape-from-the-finals-hacks-support',
		hi: 'escape-from-the-finals-hacks-support',
		id: 'escape-from-the-finals-hacks-support',
		th: 'escape-from-the-finals-hacks-support',
		vi: 'escape-from-the-finals-hacks-support',
		uk: 'pidtrymka-chitiv-finals',
		cs: 'escape-from-the-finals-hacks-podpora',
		ro: 'suport-cheats-finals',
		sv: 'escape-from-the-finals-hacks-support',
	},
	undetected: {
		en: 'undetected-finals-hacks',
		es: 'trucos-finals-indetectables',
		fr: 'triche-finals-indetectable',
		de: 'unentdeckte-escape-from-the-finals-hacks',
		pt: 'cheats-finals-indetectaveis',
		it: 'trucchi-finals-indetectabili',
		nl: 'undetected-finals-hacks',
		pl: 'niewykrywalne-cheats-finals',
		ru: 'nedecektiruemye-chity-finals',
		tr: 'tespit-edilemeyen-finals-hileleri',
		ar: 'undetected-finals-hacks',
		ja: 'undetected-finals-hacks',
		ko: 'undetected-finals-hacks',
		zh: 'undetected-finals-hacks',
		hi: 'undetected-finals-hacks',
		id: 'undetected-finals-hacks',
		th: 'undetected-finals-hacks',
		vi: 'undetected-finals-hacks',
		uk: 'nedecektovani-chity-finals',
		cs: 'undetected-finals-hacks',
		ro: 'cheats-finals-nedetectabile',
		sv: 'undetected-finals-hacks',
	},
	wallhack: {
		en: 'finals-wallhack',
		es: 'wallhack-trucos-finals',
		fr: 'wallhack-triche-finals',
		de: 'finals-wallhack',
		pt: 'wallhack-cheats-finals',
		it: 'wallhack-trucchi-finals',
		nl: 'finals-wallhack',
		pl: 'wallhack-cheatow-finals',
		ru: 'wallhack-chity-finals',
		tr: 'finals-wallhack-hile',
		ar: 'finals-wallhack',
		ja: 'finals-wallhack',
		ko: 'finals-wallhack',
		zh: 'finals-wallhack',
		hi: 'finals-wallhack',
		id: 'finals-wallhack',
		th: 'finals-wallhack',
		vi: 'finals-wallhack',
		uk: 'wallhack-chity-finals',
		cs: 'finals-wallhack',
		ro: 'wallhack-cheats-finals',
		sv: 'finals-wallhack',
	},
	radar: {
		en: 'finals-radar-hack',
		es: 'radar-hack-trucos-finals',
		fr: 'radar-hack-triche-finals',
		de: 'finals-radar-hack',
		pt: 'radar-hack-cheats-finals',
		it: 'radar-hack-trucchi-finals',
		nl: 'finals-radar-hack',
		pl: 'radar-hack-cheatow-finals',
		ru: 'radar-hack-chity-finals',
		tr: 'finals-radar-hack',
		ar: 'finals-radar-hack',
		ja: 'finals-radar-hack',
		ko: 'finals-radar-hack',
		zh: 'finals-radar-hack',
		hi: 'finals-radar-hack',
		id: 'finals-radar-hack',
		th: 'finals-radar-hack',
		vi: 'finals-radar-hack',
		uk: 'radar-hack-chity-finals',
		cs: 'finals-radar-hack',
		ro: 'radar-hack-cheats-finals',
		sv: 'finals-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'the-finals-hacks-2026',
		es: 'trucos-finals-2026',
		fr: 'triche-finals-2026',
		de: 'the-finals-hacks-2026',
		pt: 'cheats-finals-2026',
		it: 'trucchi-finals-2026',
		nl: 'the-finals-hacks-2026',
		pl: 'cheaty-finals-2026',
		ru: 'chity-finals-2026',
		tr: 'finals-hileleri-2026',
		ar: 'the-finals-hacks-2026',
		ja: 'the-finals-hacks-2026',
		ko: 'the-finals-hacks-2026',
		zh: 'the-finals-hacks-2026',
		hi: 'the-finals-hacks-2026',
		id: 'the-finals-hacks-2026',
		th: 'the-finals-hacks-2026',
		vi: 'the-finals-hacks-2026',
		uk: 'chity-finals-2026',
		cs: 'the-finals-hacks-2026',
		ro: 'cheats-finals-2026',
		sv: 'the-finals-hacks-2026',
	},
	hacks: {
		en: 'the-finals-hacks',
		es: 'hacks-trucos-finals',
		fr: 'hacks-triche-finals',
		de: 'the-finals-hacks',
		pt: 'hacks-cheats-finals',
		it: 'hacks-trucchi-finals',
		nl: 'the-finals-hacks',
		pl: 'hacks-cheatow-finals',
		ru: 'haksy-chity-finals',
		tr: 'finals-hile-hacks',
		ar: 'the-finals-hacks',
		ja: 'the-finals-hacks',
		ko: 'the-finals-hacks',
		zh: 'the-finals-hacks',
		hi: 'the-finals-hacks',
		id: 'the-finals-hacks',
		th: 'the-finals-hacks',
		vi: 'the-finals-hacks',
		uk: 'haksy-chity-finals',
		cs: 'the-finals-hacks',
		ro: 'hacks-cheats-finals',
		sv: 'the-finals-hacks',
	},
	'cheat-download': {
		en: 'finals-cheat-download',
		es: 'descarga-trucos-finals',
		fr: 'telechargement-triche-finals',
		de: 'finals-cheat-download',
		pt: 'download-cheats-finals',
		it: 'download-trucchi-finals',
		nl: 'finals-cheat-download',
		pl: 'pobieranie-cheatow-finals',
		ru: 'skachat-chity-finals',
		tr: 'finals-hile-indir',
		ar: 'finals-cheat-download',
		ja: 'finals-cheat-download',
		ko: 'finals-cheat-download',
		zh: 'finals-cheat-download',
		hi: 'finals-cheat-download',
		id: 'finals-cheat-download',
		th: 'finals-cheat-download',
		vi: 'finals-cheat-download',
		uk: 'zavantazhennya-chitiv-finals',
		cs: 'finals-cheat-download',
		ro: 'descarcare-cheats-finals',
		sv: 'finals-cheat-download',
	},
	'mod-menu': {
		en: 'finals-mod-menu',
		es: 'menu-mod-trucos-finals',
		fr: 'menu-mod-triche-finals',
		de: 'finals-mod-menu',
		pt: 'menu-mod-cheats-finals',
		it: 'menu-mod-trucchi-finals',
		nl: 'finals-mod-menu',
		pl: 'menu-mod-cheatow-finals',
		ru: 'mod-menu-chity-finals',
		tr: 'finals-mod-menu',
		ar: 'finals-mod-menu',
		ja: 'finals-mod-menu',
		ko: 'finals-mod-menu',
		zh: 'finals-mod-menu',
		hi: 'finals-mod-menu',
		id: 'finals-mod-menu',
		th: 'finals-mod-menu',
		vi: 'finals-mod-menu',
		uk: 'mod-menu-chity-finals',
		cs: 'finals-mod-menu',
		ro: 'meniu-mod-cheats-finals',
		sv: 'finals-mod-menu',
	},
	'soft-aim': {
		en: 'finals-soft-aim',
		es: 'soft-aim-trucos-finals',
		fr: 'soft-aim-triche-finals',
		de: 'finals-soft-aim',
		pt: 'soft-aim-cheats-finals',
		it: 'soft-aim-trucchi-finals',
		nl: 'finals-soft-aim',
		pl: 'soft-aim-cheatow-finals',
		ru: 'soft-aim-chity-finals',
		tr: 'finals-soft-aim',
		ar: 'finals-soft-aim',
		ja: 'finals-soft-aim',
		ko: 'finals-soft-aim',
		zh: 'finals-soft-aim',
		hi: 'finals-soft-aim',
		id: 'finals-soft-aim',
		th: 'finals-soft-aim',
		vi: 'finals-soft-aim',
		uk: 'soft-aim-chity-finals',
		cs: 'finals-soft-aim',
		ro: 'soft-aim-cheats-finals',
		sv: 'finals-soft-aim',
	},
	'best-cheats': {
		en: 'best-finals-hacks',
		es: 'mejores-trucos-finals',
		fr: 'meilleures-triches-finals',
		de: 'beste-escape-from-the-finals-hacks',
		pt: 'melhores-cheats-finals',
		it: 'migliori-trucchi-finals',
		nl: 'beste-escape-from-the-finals-hacks',
		pl: 'najlepsze-cheats-finals',
		ru: 'luchshie-chity-finals',
		tr: 'en-iyi-finals-hileleri',
		ar: 'best-finals-hacks',
		ja: 'best-finals-hacks',
		ko: 'best-finals-hacks',
		zh: 'best-finals-hacks',
		hi: 'best-finals-hacks',
		id: 'best-finals-hacks',
		th: 'best-finals-hacks',
		vi: 'best-finals-hacks',
		uk: 'naykrashchi-chity-finals',
		cs: 'nejlepsi-escape-from-the-finals-hacks',
		ro: 'cele-mai-bune-cheats-finals',
		sv: 'basta-escape-from-the-finals-hacks',
	},
	'aimbot-hack': {
		en: 'finals-aimbot-hack',
		es: 'aimbot-hack-trucos-finals',
		fr: 'aimbot-hack-triche-finals',
		de: 'finals-aimbot-hack',
		pt: 'aimbot-hack-cheats-finals',
		it: 'aimbot-hack-trucchi-finals',
		nl: 'finals-aimbot-hack',
		pl: 'aimbot-hack-cheatow-finals',
		ru: 'aimbot-hack-chity-finals',
		tr: 'finals-aimbot-hack',
		ar: 'finals-aimbot-hack',
		ja: 'finals-aimbot-hack',
		ko: 'finals-aimbot-hack',
		zh: 'finals-aimbot-hack',
		hi: 'finals-aimbot-hack',
		id: 'finals-aimbot-hack',
		th: 'finals-aimbot-hack',
		vi: 'finals-aimbot-hack',
		uk: 'aimbot-hack-chity-finals',
		cs: 'finals-aimbot-hack',
		ro: 'aimbot-hack-cheats-finals',
		sv: 'finals-aimbot-hack',
	},
	'esp-hack': {
		en: 'finals-esp-hack',
		es: 'esp-hack-trucos-finals',
		fr: 'esp-hack-triche-finals',
		de: 'finals-esp-hack',
		pt: 'esp-hack-cheats-finals',
		it: 'esp-hack-trucchi-finals',
		nl: 'finals-esp-hack',
		pl: 'esp-hack-cheatow-finals',
		ru: 'esp-hack-chity-finals',
		tr: 'finals-esp-hack',
		ar: 'finals-esp-hack',
		ja: 'finals-esp-hack',
		ko: 'finals-esp-hack',
		zh: 'finals-esp-hack',
		hi: 'finals-esp-hack',
		id: 'finals-esp-hack',
		th: 'finals-esp-hack',
		vi: 'finals-esp-hack',
		uk: 'esp-hack-chity-finals',
		cs: 'finals-esp-hack',
		ro: 'esp-hack-cheats-finals',
		sv: 'finals-esp-hack',
	},
	'unlock-all': {
		en: 'finals-unlock-all',
		es: 'unlock-all-trucos-finals',
		fr: 'unlock-all-triche-finals',
		de: 'finals-unlock-all',
		pt: 'unlock-all-cheats-finals',
		it: 'unlock-all-trucchi-finals',
		nl: 'finals-unlock-all',
		pl: 'unlock-all-cheatow-finals',
		ru: 'unlock-all-chity-finals',
		tr: 'finals-unlock-all',
		ar: 'finals-unlock-all',
		ja: 'finals-unlock-all',
		ko: 'finals-unlock-all',
		zh: 'finals-unlock-all',
		hi: 'finals-unlock-all',
		id: 'finals-unlock-all',
		th: 'finals-unlock-all',
		vi: 'finals-unlock-all',
		uk: 'unlock-all-chity-finals',
		cs: 'finals-unlock-all',
		ro: 'unlock-all-cheats-finals',
		sv: 'finals-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(path: string): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: 'en', href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, _currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const href = absoluteLocalizedUrl(resolvedId, defaultLocale);
	return [
		{ hreflang: 'en', href },
		{ hreflang: 'x-default', href },
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
		{ label: labels.preview ?? labels.hacks ?? 'Preview', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.store ?? labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.status ?? labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.reviews ?? 'Reviews', href: '/reviews/' },
		{ label: labels.forums ?? 'Forum', href: '/forum/' },
		{ label: labels.esp, href: getLocalizedPath('finals-esp', locale), pageId: 'finals-esp' },
		{ label: labels.aimbot, href: getLocalizedPath('finals-aimbot', locale), pageId: 'finals-aimbot' },
		{ label: labels.radar ?? 'Radar', href: getLocalizedPath('radar', locale), pageId: 'radar' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
