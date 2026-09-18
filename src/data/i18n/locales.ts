export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global THE FINALS Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'THE FINALS Hacks Blog | Raid ',
		blogDescription:
			'THE FINALS — raid tips, ESP, aimbot notes, loot routes, and Easy Anti-Cheat update coverage. English blog at thefinalshacks.org/blog/.',
		blogH1: 'THE FINALS Hacks Intel',
		blogIntro:
			'Short THE FINALS for Cashout and Quick Cash matches. Pair these tips with the THE FINALS Hacks product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related ',
		allPosts: 'All blog posts',
		home: 'THE FINALS Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de THE FINALS Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para THE FINALS en PC Windows.',
		blogH1: 'Blog THE FINALS Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos THE FINALS indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías THE FINALS relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio THE FINALS Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | en 22 langues',
		blogDescription:
			'Blog THE FINALS Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour THE FINALS sur PC Windows.',
		blogH1: 'Blog THE FINALS Hacks — mondiaux',
		blogIntro:
			' SEO triches THE FINALS indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: ' THE FINALS associés',
		allPosts: 'Tous les articles',
		home: 'Accueil THE FINALS Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'THE FINALS Hacks Blog 2026 | in 22 Sprachen',
		blogDescription:
			'THE FINALS Hacks Blog mit ESP, Wallhack, Radar und Aimbot für THE FINALS auf Windows PC.',
		blogH1: 'THE FINALS Hacks Blog — Globale ',
		blogIntro:
			'SEO- für THE FINALS Hacks, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte THE FINALS ',
		allPosts: 'Alle Beiträge',
		home: 'THE FINALS Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog THE FINALS Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para THE FINALS no PC.',
		blogH1: 'Blog THE FINALS Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats THE FINALS indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias THE FINALS relacionados',
		allPosts: 'Todos os posts',
		home: 'Início THE FINALS Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog THE FINALS Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per THE FINALS su PC Windows.',
		blogH1: 'Blog THE FINALS Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat THE FINALS indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide THE FINALS correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home THE FINALS Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'THE FINALS Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'THE FINALS Hacks blog met ESP, wallhack, radar en Aimbot gidsen voor THE FINALS op Windows PC.',
		blogH1: 'THE FINALS Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor THE FINALS hacks, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde THE FINALS gidsen',
		allPosts: 'Alle posts',
		home: 'THE FINALS Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog THE FINALS Hacks z poradnikami ESP, wallhack, radar i Aimbot dla THE FINALS na PC.',
		blogH1: 'Blog THE FINALS Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO cheatów THE FINALS, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki THE FINALS',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna THE FINALS Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог THE FINALS Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог THE FINALS Hacks: ESP, wallhack, radar и Aimbot для THE FINALS на Windows PC.',
		blogH1: 'Блог THE FINALS Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по читам THE FINALS, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды THE FINALS',
		allPosts: 'Все статьи',
		home: 'Главная THE FINALS Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'THE FINALS Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'THE FINALS Hacks blog: ESP, wallhack, radar ve Aimbot rehberleri THE FINALS Windows PC.',
		blogH1: 'THE FINALS Hacks Blog — Küresel rehberler',
		blogIntro:
			' THE FINALS hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili THE FINALS rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'THE FINALS Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة THE FINALS Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة THE FINALS Hacks: غش وESP wallhack ورadar وAimbot لـ THE FINALS على Windows PC.',
		blogH1: 'مدونة THE FINALS Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش THE FINALS وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة THE FINALS ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية THE FINALS Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'THE FINALS Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'THE FINALS Hacksブログ： ESP、wallhack、radar、Aimbotガイド。THE FINALS Windows PC向け。',
		blogH1: 'THE FINALS Hacks ブログ — グローバルガイド',
		blogIntro:
			' THE FINALSチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連THE FINALSガイド',
		allPosts: 'すべての記事',
		home: 'THE FINALS Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'THE FINALS Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'THE FINALS Hacks 블로그: ESP, wallhack, radar, Aimbot 가이드. THE FINALS Windows PC.',
		blogH1: 'THE FINALS Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			' THE FINALS 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 THE FINALS 가이드',
		allPosts: '모든 게시물',
		home: 'THE FINALS Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'THE FINALS Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'THE FINALS Hacks博客： ESP、wallhack、radar和Aimbot指南，适用于THE FINALS Windows PC。',
		blogH1: 'THE FINALS Hacks 博客 — 全球指南',
		blogIntro:
			' THE FINALS作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关THE FINALS指南',
		allPosts: '所有文章',
		home: 'THE FINALS Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'THE FINALS Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'THE FINALS Hacks ब्लॉग: ESP, wallhack, radar और Aimbot गाइड THE FINALS Windows PC के लिए।',
		blogH1: 'THE FINALS Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			' THE FINALS hacks, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित THE FINALS गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'THE FINALS Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog THE FINALS Hacks: panduan ESP, wallhack, radar dan Aimbot untuk THE FINALS di PC Windows.',
		blogH1: 'Blog THE FINALS Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat THE FINALS, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan THE FINALS terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda THE FINALS Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก THE FINALS Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก THE FINALS Hacks: คู่มือ ESP, wallhack, radar และ Aimbot สำหรับ THE FINALS บน PC',
		blogH1: 'บล็อก THE FINALS Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat THE FINALS, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ THE FINALS ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก THE FINALS Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog THE FINALS Hacks: hướng dẫn ESP, wallhack, radar và Aimbot cho THE FINALS trên PC.',
		blogH1: 'Blog THE FINALS Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat THE FINALS, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn THE FINALS liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ THE FINALS Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог THE FINALS Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог THE FINALS Hacks: ESP, wallhack, radar та Aimbot для THE FINALS на Windows PC.',
		blogH1: 'Блог THE FINALS Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з читів THE FINALS, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts:"Пов'язані гайди THE FINALS",
		allPosts: 'Усі статті',
		home: 'Головна THE FINALS Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog THE FINALS Hacks: ESP, wallhack, radar a Aimbot pro THE FINALS na Windows PC.',
		blogH1: 'Blog THE FINALS Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce THE FINALS hacky, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související THE FINALS průvodce',
		allPosts: 'Všechny články',
		home: 'Domů THE FINALS Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog THE FINALS Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog THE FINALS Hacks: ghiduri ESP, wallhack, radar și Aimbot pentru THE FINALS pe PC.',
		blogH1: 'Blog THE FINALS Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri THE FINALS, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri THE FINALS related',
		allPosts: 'Toate articolele',
		home: 'Acasă THE FINALS Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'THE FINALS Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'THE FINALS Hacks blogg med ESP, wallhack, radar och Aimbot guider för THE FINALS på PC.',
		blogH1: 'THE FINALS Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för THE FINALS hacks, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade THE FINALS guider',
		allPosts: 'Alla inlägg',
		home: 'THE FINALS Hacks hem',
		language: 'Språk',
	},
};
