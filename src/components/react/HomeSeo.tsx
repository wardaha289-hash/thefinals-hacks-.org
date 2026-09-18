import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type FaqItem = { slug: string; question: string; answer: string; href: string };

type Props = {
	locale: string;
	faqs: FaqItem[];
	previewSrc: string;
	previewAlt: string;
};

function HomeSeoInner({ faqs, previewSrc, previewAlt }: Props) {
	const { t } = useTranslation();

	const categories = [
		{
			tone: 'features',
			titleKey: 'homeSeo.catFeatures',
			hintKey: 'homeSeo.catFeaturesHint',
			links: [
				{ href: '/features/', labelKey: 'homeSeo.linkAllFeatures' },
				{ href: '/finals-esp/', labelKey: 'homeSeo.linkEsp' },
				{ href: '/finals-radar-hack/', labelKey: 'homeSeo.linkRadar' },
			],
		},
		{
			tone: 'status',
			titleKey: 'homeSeo.catStatus',
			hintKey: 'homeSeo.catStatusHint',
			links: [
				{ href: '/updates/', labelKey: 'homeSeo.linkLiveStatus' },
				{ href: '/the-finals-hacks/', labelKey: 'homeSeo.linkUndetected' },
				{ href: '/setup/', labelKey: 'homeSeo.linkSetup' },
				{ href: '/faq/', labelKey: 'homeSeo.linkFaq' },
			],
		},
		{
			tone: 'store',
			titleKey: 'homeSeo.catStore',
			hintKey: 'homeSeo.catStoreHint',
			links: [
				{ href: '/pricing/', labelKey: 'homeSeo.linkPlans' },
				{ href: '/reviews/', labelKey: 'homeSeo.linkReviews' },
				{ href: '/the-finals-hacks/', labelKey: 'homeSeo.linkFinalsHacks' },
				{ href: '/features/', labelKey: 'homeSeo.linkAllFeatures' },
			],
		},
	];

	const buyLinks = [
		{ href: '/the-finals-hacks/', labelKey: 'homeSeo.linkFinalsHacks' },
		{ href: '/pricing/', labelKey: 'homeSeo.linkPlans' },
		{ href: '/reviews/', labelKey: 'homeSeo.linkReviews' },
	];

	return (
		<section className="home-seo shell" aria-labelledby="home-about-title">
			<div className="home-seo__intro">
				<div className="home-seo__copy">
					<div className="home-seo__about" aria-labelledby="home-about-title">
						<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
						<p>{t('home.aboutP1')}</p>
						<p>
							{t('home.aboutP2Before')}{' '}
							<a href="/the-finals-hacks/">{t('home.aboutPillar')}</a>
							{t('home.aboutP2Mid')}
							<a href="/finals-esp/">{t('home.aboutEsp')}</a>
							{t('home.aboutP2Mid')}
							<a href="/finals-radar-hack/">{t('home.aboutRadar')}</a>
							{t('home.aboutP2Or')}
							<a href="/updates/">{t('home.aboutUndetected')}</a>
							{t('home.aboutP2After')}
						</p>
					</div>
				</div>

				<figure className="home-seo__preview">
					<img src={previewSrc} alt={previewAlt} width={960} height={540} loading="lazy" decoding="async" />
					<figcaption className="home-seo__preview-badge">{t('homeSeo.previewBadge')}</figcaption>
				</figure>
			</div>

			<section className="home-seo__cats-wrap" aria-label={t('homeSeo.featuresTitle')}>
				<div className="home-seo__cats">
					{categories.map((cat) => (
						<nav
							key={cat.titleKey}
							className={`home-seo__cat home-seo__cat--${cat.tone}`}
							aria-label={t(cat.titleKey)}
						>
							<header className="home-seo__cat-head">
								<h3>{t(cat.titleKey)}</h3>
								<p>{t(cat.hintKey)}</p>
							</header>
							<ul>
								{cat.links.map((link) => (
									<li key={link.href + link.labelKey}>
										<a href={link.href}>
											<span>{t(link.labelKey)}</span>
											<span className="home-seo__cat-arrow" aria-hidden="true" />
										</a>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
			</section>

			<section className="home-seo__buy" aria-labelledby="home-buy-title">
				<h2 id="home-buy-title">{t('homeSeo.buyTitle')}</h2>
				<p>{t('homeSeo.buyLede')}</p>
				<ul className="home-seo__buy-links">
					{buyLinks.map((link) => (
						<li key={link.href}>
							<a href={link.href}>{t(link.labelKey)}</a>
						</li>
					))}
				</ul>
			</section>

			<section className="home-seo__faq" aria-labelledby="home-faq-title">
				<header className="home-seo__faq-head">
					<div>
						<h2 id="home-faq-title">{t('homeSeo.faqTitle')}</h2>
						<p className="home-seo__faq-lede">{t('homeSeo.faqLede')}</p>
					</div>
					<a className="home-seo__faq-link" href="/faq/">
						{t('homeSeo.allAnswers')}
					</a>
				</header>
				<div className="home-seo__faq-list">
					{faqs.map((item) => (
						<details className="home-seo__item" id={item.slug} key={item.slug}>
							<summary>
								<span>{item.question}</span>
								<span className="home-seo__chev" aria-hidden="true" />
							</summary>
							<div className="home-seo__item-body">
								<p>{item.answer}</p>
								<a className="home-seo__item-link" href={item.href}>
									{t('homeSeo.openFullPage')}
								</a>
							</div>
						</details>
					))}
				</div>
			</section>
		</section>
	);
}

export default function HomeSeoApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeSeoInner {...props} />
		</I18nProvider>
	);
}
