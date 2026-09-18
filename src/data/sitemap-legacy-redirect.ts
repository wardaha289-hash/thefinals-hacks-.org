/** 301 legacy sitemap URLs to the current sitemap index or replacement file. */
export function legacySitemapRedirect(location: string): Response {
	return new Response(null, {
		status: 301,
		headers: {
			Location: location,
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
