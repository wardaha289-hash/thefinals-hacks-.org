import enBase from '../../public/locales/en/translation.json';
import esBase from '../../public/locales/es/translation.json';
import { i18nContent } from '../data/i18n/content.generated';
import { localeCodes, type LocaleCode } from '../data/i18n/locales';

export type TranslationCatalog = typeof enBase;

function mergeCatalog(base: TranslationCatalog, patch: Partial<TranslationCatalog>): TranslationCatalog {
	return {
		...base,
		...patch,
		nav: { ...base.nav, ...patch.nav },
		hero: { ...base.hero, ...patch.hero },
		cta: { ...base.cta, ...patch.cta },
		trust: { ...base.trust, ...patch.trust },
		product: { ...base.product, ...patch.product },
		reviews: { ...base.reviews, ...patch.reviews },
		common: { ...base.common, ...patch.common },
		footer: { ...base.footer, ...patch.footer },
		home: { ...base.home, ...patch.home },
		homeSeo: { ...base.homeSeo, ...patch.homeSeo },
		deals: { ...base.deals, ...patch.deals },
		trustStrip: { ...base.trustStrip, ...patch.trustStrip },
		categoryRow: { ...base.categoryRow, ...patch.categoryRow },
		images: { ...base.images, ...patch.images },
		blog: { ...base.blog, ...patch.blog },
		gallery: { ...base.gallery, ...patch.gallery },
	};
}

function buildFromContent(locale: LocaleCode): TranslationCatalog {
	const { ui, pages } = i18nContent[locale];
	const home = pages.home;
	const features = pages.features;
	const pricing = pages.pricing;
	const updates = pages.updates;
	const setup = pages.setup;
	const hacks = pages.hacks;

	return mergeCatalog(enBase, {
		nav: {
			home: ui.nav.home,
			hacks: ui.nav.hacks,
			aimbot: ui.nav.aimbot,
			esp: ui.nav.esp,
			features: ui.nav.features,
			pricing: ui.nav.pricing,
			setup: ui.nav.setup,
			updates: ui.nav.updates,
			faq: ui.nav.faq,
			buyNow: ui.nav.buyNow,
			preview: hacks?.h1?.split('—')[0]?.trim() ?? ui.nav.hacks,
			store: pricing?.h1 ?? ui.nav.pricing,
			status: updates?.h1 ?? ui.nav.updates,
		},
		hero: {
			accent: ui.hero.accent,
			accentShort: ui.hero.accentShort,
			subtitle: ui.hero.subtitle,
			subtitleShort: ui.hero.subtitleShort,
			buyNow: ui.hero.buyNow,
			seeFeatures: ui.hero.seeFeatures,
			exploreNow: ui.hero.seeFeatures,
			title: home?.h1 ?? ui.hero.accent,
		},
		cta: {
			buy: ui.common.buyNow,
			buyShort: ui.nav.buyNow,
		},
		trust: ui.trust,
		product: ui.product,
		reviews: {
			title: ui.reviews.title,
			subtitle: ui.reviews.subtitle,
			outOf: ui.reviews.outOf,
			countLabel: ui.reviews.countLabel,
		},
		common: {
			buyNow: ui.common.buyNow,
			readGuide: ui.common.readGuide,
			language: ui.common.language,
			officialLanguageNote: ui.common.officialLanguageNote,
			relatedPages: ui.common.relatedPages,
			englishIsOfficial: ui.common.officialLanguageNote,
		},
		footer: ui.footer,
		images: ui.images,
		home: home
			? {
					aboutTitle: home.h1,
					aboutP1: home.intro,
				}
			: undefined,
		homeSeo: features
			? {
					catFeatures: features.h1,
					catStore: pricing?.h1,
					catStatus: updates?.h1,
				}
			: undefined,
		categoryRow: {
			hacks: ui.nav.hacks,
			esp: ui.nav.esp,
			aimbot: ui.nav.aimbot,
			pricing: ui.nav.pricing,
			setup: ui.nav.setup,
		},
	});
}

export const localeResources: Record<LocaleCode, TranslationCatalog> = Object.fromEntries(
	localeCodes.map((code) => {
		if (code === 'en') return [code, enBase];
		if (code === 'es') return [code, mergeCatalog(mergeCatalog(enBase, buildFromContent('es')), esBase)];
		return [code, buildFromContent(code)];
	}),
) as Record<LocaleCode, TranslationCatalog>;

export function getLocaleCatalog(locale: string): TranslationCatalog {
	if (locale in localeResources) return localeResources[locale as LocaleCode];
	return enBase;
}
