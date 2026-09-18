#!/usr/bin/env node
/** Remove Brand Studio HTML from production dist (defense in depth). */
import { readFileSync, rmSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'dist', 'brand-studio');
if (existsSync(target)) {
	rmSync(target, { recursive: true, force: true });
	console.log('strip-brand-studio: removed dist/brand-studio');
} else {
	console.log('strip-brand-studio: nothing to remove');
}
// legacy path if ever present
const legacy = path.join(root, 'dist', '__brand');
if (existsSync(legacy)) {
	rmSync(legacy, { recursive: true, force: true });
	console.log('strip-brand-studio: removed dist/__brand');
}

/** Cloudflare Workers assets reject >100 _redirects rules — strip stale cannibal block from dist. */
function stripCannibalRedirectsBlock(redirects) {
	const markerStart = '# Auto-generated cannibal locale redirects';
	const start = redirects.indexOf(markerStart);
	if (start < 0) return redirects.trimEnd();
	const lineStart = redirects.lastIndexOf('\n', start);
	return redirects.slice(0, lineStart >= 0 ? lineStart : start).trimEnd();
}

const distRedirects = path.join(root, 'dist', '_redirects');
if (existsSync(distRedirects)) {
	const before = readFileSync(distRedirects, 'utf8');
	const after = stripCannibalRedirectsBlock(before);
	if (after !== before.trimEnd()) {
		writeFileSync(distRedirects, `${after.trimEnd()}\n`);
		console.log('strip-brand-studio: removed cannibal block from dist/_redirects');
	}
}
