import { siteConfig } from '../site';
import { forumThreads } from './threads';
import type { ForumThreadDefinition, ResolvedForumThread } from './types';

export { forumThreads };

export function getForumBasePath(): string {
	return '/forum/';
}

export function getForumThreadPath(slug: string): string {
	return `${getForumBasePath()}${slug}/`;
}

export function absoluteForumUrl(slug?: string): string {
	const path = slug ? getForumThreadPath(slug) : getForumBasePath();
	return new URL(path, siteConfig.url).href;
}

export function resolveThread(thread: ForumThreadDefinition): ResolvedForumThread {
	return {
		...thread,
		canonicalPath: getForumThreadPath(thread.slug),
	};
}

export function getAllThreads(): ResolvedForumThread[] {
	return forumThreads.map(resolveThread);
}

export function getThreadBySlug(slug: string): ResolvedForumThread | undefined {
	const thread = forumThreads.find((item) => item.slug === slug);
	return thread ? resolveThread(thread) : undefined;
}

export function getForumIndexHreflangAlternates() {
	const href = absoluteForumUrl();
	return [
		{ hreflang: 'en', href },
		{ hreflang: 'x-default' as const, href },
	];
}

export function getForumThreadHreflangAlternates(thread: ForumThreadDefinition) {
	const href = absoluteForumUrl(thread.slug);
	return [
		{ hreflang: 'en', href },
		{ hreflang: 'x-default' as const, href },
	];
}

export function getForumSitemapEntries() {
	const indexLastmod = '2026-09-18';

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: getForumBasePath(),
			lastmod: indexLastmod,
			priority: 0.92,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					title: 'THE FINALS Hacks Forum',
					caption: 'Setup, features, and configuration threads for THE FINALS Hacks.',
				},
			],
		},
	];

	for (const thread of forumThreads) {
		entries.push({
			path: getForumThreadPath(thread.slug),
			lastmod: indexLastmod,
			priority: 0.9,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					title: thread.title,
					caption: thread.intro,
				},
			],
		});
	}

	return entries;
}
