export type ForumCategory = 'Setup' | 'Features' | 'Instructions';

export type ForumThreadDefinition = {
	id: string;
	category: ForumCategory;
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	whatYouGet: {
		paragraphs: string[];
	};
	featuresList: string[];
	nextStep: {
		paragraphs: string[];
	};
	cta: {
		title: string;
		body: string;
		primaryLabel: string;
		primaryHref: string;
		secondaryLabel: string;
		secondaryHref: string;
		checkoutLabel: string;
		checkoutHref: string;
	};
};

export type ResolvedForumThread = ForumThreadDefinition & {
	canonicalPath: string;
};
