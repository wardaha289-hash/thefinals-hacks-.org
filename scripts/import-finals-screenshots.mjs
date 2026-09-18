import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const publicDir = path.join(root, 'public');
const assetsDir =
	'C:/Users/Tahoor/.cursor/projects/c-Users-Tahoor-Documents-thefinalshacks-org/assets';

const HERO = {
	source:
		'c__Users_Tahoor_AppData_Roaming_Cursor_User_workspaceStorage_ea5a50dd4f951aa7a90f92943054173f_images_image-bae7353f-5a3f-4d6f-b1f0-b290524dec1f.jpg',
	file: 'the-finals-hacks-hero-full.png',
};

const USER_SCREENSHOTS = [
	{
		source:
			'c__Users_Tahoor_AppData_Roaming_Cursor_User_workspaceStorage_ea5a50dd4f951aa7a90f92943054173f_images_image-190dd1c3-73a2-4db3-a23d-5a529368f523.jpg',
		file: 'finals-hacks-esp.webp',
	},
	{
		source:
			'c__Users_Tahoor_AppData_Roaming_Cursor_User_workspaceStorage_ea5a50dd4f951aa7a90f92943054173f_images_image-56052069-0314-41c0-bc65-049c818de465.jpg',
		file: 'finals-hacks-aimbot.webp',
	},
	{
		source:
			'c__Users_Tahoor_AppData_Roaming_Cursor_User_workspaceStorage_ea5a50dd4f951aa7a90f92943054173f_images_image-cd6f74e6-a77c-4f49-819e-648a6328629c.jpg',
		file: 'finals-hacks-wallhack.webp',
	},
];

const HERO_WIDTHS = [640, 1024];
const CONTENT_WIDTHS = [480, 960];

async function importHero() {
	const input = path.join(assetsDir, HERO.source);
	const dest = path.join(imagesDir, HERO.file);
	const buffer = await sharp(input)
		.resize({ width: 1400, withoutEnlargement: true })
		.png({ quality: 90, compressionLevel: 9 })
		.toBuffer();
	await writeFile(dest, buffer);
	console.log(`Wrote ${HERO.file} (${buffer.length} bytes)`);

	for (const width of HERO_WIDTHS) {
		const file = `the-finals-hacks-hero-${width}w.webp`;
		const quality = width <= 640 ? 70 : 78;
		const variant = await sharp(input)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), variant);
		console.log(`Wrote ${file}`);
	}
}

async function convertScreenshots() {
	for (const { source, file } of USER_SCREENSHOTS) {
		const input = path.join(assetsDir, source);
		const dest = path.join(imagesDir, file);
		const buffer = await sharp(input)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 86, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		console.log(`Wrote ${file} (${buffer.length} bytes)`);

		const base = file.replace(/\.webp$/i, '');
		const meta = await sharp(buffer).metadata();
		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const variantBuffer = await sharp(buffer)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), variantBuffer);
			console.log(`Wrote ${variant}`);
		}
	}
}

async function generateLogoAndFavicons() {
	const logoPath = path.join(imagesDir, 'the-finals-hacks-logo.png');
	const logoBuffer = await sharp(path.join(assetsDir, HERO.source))
		.resize(512, 512, { fit: 'cover', position: 'right' })
		.png()
		.toBuffer();
	await writeFile(logoPath, logoBuffer);
	await writeFile(
		path.join(imagesDir, 'the-finals-hacks-logo.webp'),
		await sharp(logoBuffer).webp({ quality: 85 }).toBuffer(),
	);
	console.log('Wrote logo assets');

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
		console.log(`Wrote public/${name}`);
	}

	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);
	console.log('Wrote public/favicon.ico');
}

await mkdir(imagesDir, { recursive: true });
await importHero();
await convertScreenshots();
await generateLogoAndFavicons();
console.log('Done — THE FINALS hero and screenshots imported.');
