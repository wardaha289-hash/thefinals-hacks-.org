import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'finals-esp' | 'finals-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home:"Home",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Features",
					pricing:"Pricing",
					setup:"Setup",
					updates:"Updates",
					faq:"FAQ",
					buyNow:"Buy Now",
				},
				hero: {
					accent:"2026 — ESP, Aimbot & Wallhack",
					accentShort:"thefinals hacks 2026",
					subtitle:"THE FINALS hacks with the finals esp, radar hack and the finals aimbot for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort:"THE FINALS esp, radar & aimbot for PC",
					buyNow:"Buy THE FINALS Hacks",
					seeFeatures:"See Features",
				},
				trust: {
					status:"Online",
					statusNote:"THE FINALS Hacks — thefinals hacks live for THE FINALS on Windows PC.",
					statusShort:"Live",
					delivery:"Instant digital delivery",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheat maintenance supported",
					antiCheatShort:"Easy Anti-Cheat supported",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Add to Cart",
					monthly:"Monthly",
					lifetime:"Lifetime",
					available:"Available now",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"thefinals hacks",
				},
				reviews: {
					title:"What players say",
					subtitle:"Recent feedback from THE FINALS Hacks buyers",
					outOf:"out of 5",
					countLabel:"reviews",
				},
				common: {
					buyNow:"Buy THE FINALS Hacks",
					readGuide:"Read guide",
					language:"Language",
					officialLanguageNote:"English is official; other locales are translated.",
					relatedPages:"Related pages",
				},
				footer: {
					explore:"Explore",
					help:"Help & legal",
					tagline:"THE FINALS hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Aimbot & Wallhack",
					description:"THE FINALS hacks for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"THE FINALS Hacks is the thefinals hacks package for Windows PC — built for THE FINALS on Windows PC. THE FINALS esp wallhack, 2D radar, and the finals aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt:"THE FINALS Hacks homepage hero — ESP and aimbot for THE FINALS",
					galleryTitle:"THE FINALS Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"See all features",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Why players choose THE FINALS hacks in 2026",
							paragraphs: [
								"THE FINALS rewards map awareness. THE FINALS Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> and <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/the-finals-hacks/\">THE FINALS hacks pillar</a>, <a href=\"/finals-esp/\">ESP guide</a>, <a href=\"/finals-aimbot/\">Aimbot controls</a>, and <a href=\"/the-finals-hacks/\"> status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2:"ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, THE FINALS Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one package built for Cashout matches and scav-runs — covering both “thefinals hacks” and “THE FINALS cheats” search intent.",
								"Browse the <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, <a href=\"/finals-esp/\">wallhack</a>, and <a href=\"/finals-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-esp.webp",
				},
				"finals-esp": {
					title:"THE FINALS ESP 2026 | Player Boxes & Wallhack",
					description:"THE FINALS ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our thefinals hacks for THE FINALS.",
					h1:"THE FINALS ESP — Player Boxes & Wallhack",
					intro:"THE FINALS esp visibility tools for raid and scav-run. Read enemy squads, players, teams, and bots, loot, and distance before you commit — toggleable the finals esp wallhack overlays bundled in our thefinals hacks package.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP overlay visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"THE FINALS wallhack guide",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"What THE FINALS ESP solves in raids",
							paragraphs: [
								"THE FINALS maps punish incomplete information. THE FINALS Hacks ESP wallhack helps you spot enemy squads early, spot players and teams before they push your angle, and mark high-value loot worth the detour.",
								"On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"THE FINALS’s live seasons and map updates are published by Battlestate Games (<a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2:"Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Cashout matches and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/finals-esp/\">wallhack page</a> and pair visibility with the <a href=\"/finals-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and extract awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2:"ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"THE FINALS Hacks ESP wallhack is maintained for THE FINALS with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent status.",
								"Read <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2:"ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/finals-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/the-finals-hacks/\">THE FINALS hacks pillar</a> and <a href=\"/the-finals-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-radar.webp",
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot 2026 | Soft Aim for Windows PC",
					description:"THE FINALS aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our thefinals hacks package.",
					h1:"THE FINALS Aimbot — Soft Aim for Windows PC",
					intro:"Configurable Aimbot tools for THE FINALS firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one license.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot combat previews",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"See ESP wallhack",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot tuned for THE FINALS combat pace",
							paragraphs: [
								"THE FINALS mixes long-range AR fights with close-quarters SMG pushes. THE FINALS Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2:"Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every match.",
								"Prefer softer tracking? Read the <a href=\"/finals-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/finals-esp/\">ESP wallhack</a> and <a href=\"/finals-radar-hack/\">2D radar</a> in the same THE FINALS Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2:"Easy Anti-Cheat maintenance for Aimbot",
							paragraphs: [
								"THE FINALS Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major THE FINALS patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2:"Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot.webp",
				},
				features: {
					title:"THE FINALS Hacks Features | ESP, Soft Aim & Radar",
					description:"Full thefinals hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1:"THE FINALS Hacks Features — Full Control List",
					intro:"Every ESP wallhack, radar hack, and Aimbot control included in the THE FINALS Hacks package for THE FINALS on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"THE FINALS Hacks feature gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"View pricing",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports Cashout matches and scav-runs. Deep-dive the <a href=\"/finals-esp/\">ESP page</a> and <a href=\"/finals-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2:"Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live THE FINALS sessions. See <a href=\"/finals-radar-hack/\">radar</a> and <a href=\"/finals-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/the-finals-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2:"Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@thefinalshacks.org.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/the-finals-hacks/\">how maintenance works</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
				},
				pricing: {
					title:"THE FINALS Hacks Pricing | $35/mo or $150 Life",
					description:"THE FINALS hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1:"THE FINALS Hacks Pricing — Monthly & Lifetime",
					intro:"Choose monthly or lifetime access to THE FINALS Hacks — ESP wallhack, radar hack, and Aimbot for THE FINALS on Windows PC. Instant digital delivery after payment.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"THE FINALS Hacks package visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Read setup guide",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Monthly and lifetime THE FINALS Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same THE FINALS Hacks package — ideal if you play THE FINALS regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2:"What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major THE FINALS patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2:"Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/the-finals-hacks/\">THE FINALS hacks</a>, <a href=\"/the-finals-hacks/\"> status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-raid.webp",
				},
				setup: {
					title:"THE FINALS Hacks Setup | Windows PC Guide",
					description:"Set up thefinals hacks on Windows PC — activate ESP boxes, soft aim profiles, and. Check Easy Anti-Cheat updates before your first queue.",
					h1:"THE FINALS Hacks Setup — Windows PC Guide",
					intro:"Install and configure THE FINALS Hacks for THE FINALS on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"THE FINALS Hacks setup visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Contact support",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Before you install THE FINALS Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching THE FINALS.",
								"Also glance at <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.",
								"THE FINALS Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2:"Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, teams, and bots, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, and <a href=\"/the-finals-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/finals-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2:"After THE FINALS or Easy Anti-Cheat patches",
							paragraphs: [
								"When Battlestate Games ships a major THE FINALS update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/the-finals-hacks/\"> guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-radar.webp",
				},
				updates: {
					title:"THE FINALS Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description:"THE FINALS hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1:"THE FINALS Hacks Updates — Maintenance Log",
					intro:"Track Easy Anti-Cheat maintenance and THE FINALS patch rebuilds for the ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"THE FINALS patch and maintenance visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"status guide",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Why the Updates page matters",
							paragraphs: [
								"THE FINALS and Easy Anti-Cheat receive frequent patches. THE FINALS Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> for Battlestate Games platform health and this page for THE FINALS Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.",
							],
						},
						{
							h2:"What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/the-finals-hacks/\"> THE FINALS hacks</a> explainer.",
							],
						},
						{
							h2:"Staying after patches",
							paragraphs: [
								"No cheat guarantees permanent status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-esp.webp",
				},
				faq: {
					title:"THE FINALS Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description:"THE FINALS hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1:"THE FINALS Hacks FAQ — Common Questions",
					intro:"Answers about THE FINALS Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and THE FINALS compatibility on Windows PC.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"THE FINALS Hacks FAQ visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Contact support",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"What is THE FINALS Hacks?",
							paragraphs: [
								"THE FINALS Hacks is an cheat package for THE FINALS on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover raid and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/finals-esp/\">ESP</a> / <a href=\"/finals-aimbot/\">Aimbot</a> for module detail.",
								"THE FINALS itself is published by Battlestate Games (<a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.",
							],
						},
						{
							h2:"Are THE FINALS Hacks in 2026?",
							paragraphs: [
								"THE FINALS Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent operation.",
								"Read <a href=\"/the-finals-hacks/\"> THE FINALS hacks</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2:"Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@thefinalshacks.org or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
				},
				support: {
					title:"THE FINALS Hacks Support | Help & Contact",
					description:"Contact thefinals hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1:"THE FINALS Hacks Support — Contact Us",
					intro:"Get help with THE FINALS Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for THE FINALS on Windows PC.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"THE FINALS Hacks support resources",
					ctaPrimary:"Email support",
					ctaSecondary:"Read setup guide",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2:"Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. THE FINALS Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.",
								"Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2:"Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@thefinalshacks.org",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-raid.webp",
				},
				undetected: {
					title:"THE FINALS Hacks 2026 | Easy Anti-Cheat Maintenance",
					description:"thefinals hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1:"THE FINALS Hacks — Easy Anti-Cheat Maintenance",
					intro:"How THE FINALS Hacks stays maintained for THE FINALS after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"THE FINALS Hacks visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Easy Anti-Cheat bypass guide",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"What means for THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks means the package is actively maintained against Easy Anti-Cheat and major THE FINALS patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>; THE FINALS client updates ship through <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. status is an ongoing process tied to those releases.",
							],
						},
						{
							h2:"Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or THE FINALS updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass THE FINALS guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2:"Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/the-finals-hacks/\">THE FINALS hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-wallhack.webp",
				},
				wallhack: {
					title:"THE FINALS Wallhack 2026 | ESP Boxes & Visibility",
					description:"THE FINALS wallhack ESP with player boxes and loot markers for Windows PC. thefinals hacks — learn overlays and buy.",
					h1:"THE FINALS Wallhack — ESP Boxes & Visibility",
					intro:"THE FINALS wallhack ESP for THE FINALS — see players, loot, bosses, and containers through toggleable wallhack overlays built for Cashout matches and scav-runs.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS wallhack ESP gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"THE FINALS ESP page",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A THE FINALS wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. THE FINALS Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.",
								"For the broader ESP keyword page see <a href=\"/finals-esp/\">THE FINALS ESP</a>; for combat assist see <a href=\"/finals-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2:"Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/finals-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2:"wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/the-finals-hacks/\"> THE FINALS hacks</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/finals-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-wallhack.webp",
				},
				radar: {
					title:"THE FINALS Radar Hack 2026 | 2D Threat Overlay",
					description:"THE FINALS radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our thefinals hacks package.",
					h1:"THE FINALS Radar Hack — 2D Threat Awareness",
					intro:"2D radar-style overlay for THE FINALS — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"THE FINALS radar hack visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"See ESP wallhack",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Why radar hack matters in THE FINALS",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"THE FINALS Hacks radar complements <a href=\"/finals-esp/\">ESP wallhack</a> markers during squad pushes and extract camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2:"Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/the-finals-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/finals-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2:"Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full THE FINALS Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major THE FINALS patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/the-finals-hacks/\"> status</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-radar.webp",
				},
				eac: {
					title:"Easy Anti-Cheat Bypass THE FINALS | THE FINALS Hacks Maintenance",
					description:"How thefinals hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1:"Easy Anti-Cheat Bypass — THE FINALS Hacks Maintenance",
					intro:"Understand Easy Anti-Cheat maintenance for THE FINALS Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after THE FINALS security updates.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat maintenance visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Check updates",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Battlestate Games' anti-cheat for THE FINALS on PC (see <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for packages.",
								"THE FINALS Hacks monitors Easy Anti-Cheat patch notes and THE FINALS seasonal updates from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2:"What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Battlestate Games service health on <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/the-finals-hacks/\"> THE FINALS hacks</a>.",
							],
						},
						{
							h2:"No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | ESP Soft Aim & Radar",
					description:"Best thefinals hacks 2026: ESP boxes, soft aim, and radar for Windows PC. thefinals hacks with Easy Anti-Cheat maintenance — compare and buy.",
					h1:"THE FINALS Hacks 2026 — ESP, Soft Aim & Radar",
					intro:"The 2026 THE FINALS Hacks package for THE FINALS — ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026 gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Compare features",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Why thefinals hacks buyers choose THE FINALS Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. THE FINALS Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2:"Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/the-finals-hacks/\">THE FINALS hacks pillar</a>, <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, <a href=\"/finals-esp/\">wallhack</a>, <a href=\"/finals-radar-hack/\">radar</a>, <a href=\"/the-finals-hacks/\"></a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2:"Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/the-finals-hacks/\">THE FINALS hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/the-finals-hacks/\">THE FINALS hacks</a> checklist, <a href=\"/blog/the-finals-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@thefinalshacks.org via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-esp.webp",
				},
				hacks: {
					title:"THE FINALS Hacks 2026 | ESP Aimbot Guide",
					description:"THE FINALS hacks for Windows PC: ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare thefinals hacks options and buy the full package.",
					h1:"THE FINALS Hacks — ESP, Aimbot & Wallhack",
					intro:"THE FINALS hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for thefinals hacks in 2026.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"See guide",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"What THE FINALS hacks include in 2026",
							paragraphs: [
								"Players searching for THE FINALS hacks usually want visibility and combat tools without stacking separate downloads. THE FINALS Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called thefinals hacks.",
								"Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> before patch-day queues.",
							],
						},
						{
							h2:"How this THE FINALS hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/the-finals-hacks/\">thefinals hacks 2026</a> and <a href=\"/the-finals-hacks/\">THE FINALS hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/finals-esp/\">THE FINALS ESP</a>, <a href=\"/finals-aimbot/\">THE FINALS Aimbot</a>, <a href=\"/finals-esp/\">wallhack</a>, <a href=\"/finals-radar-hack/\">radar hack</a>, and <a href=\"/finals-aimbot/\">soft aim</a>.",
								"Blog expand Easy Anti-Cheat keyword: <a href=\"/blog/the-finals-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-the-finals-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-finals-hacks-eac/\">Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2:"THE FINALS hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. THE FINALS Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/the-finals-hacks/\">mod menu</a>, <a href=\"/finals-aimbot/\">aimbot</a>, <a href=\"/finals-esp/\">ESP</a>.",
							],
						},
						{
							h2:"THE FINALS hacks with Easy Anti-Cheat maintenance",
							paragraphs: [
								"THE FINALS hacks require rebuilds after Easy Anti-Cheat and major THE FINALS patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent status.",
								"See <a href=\"https://www.eac.com/\"target=\"_blank\"rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/the-finals-hacks/\"> THE FINALS hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-raid.webp",
				},
				"cheat-download": {
					title:"THE FINALS Hack Download 2026 | Instant Access",
					description:"THE FINALS hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1:"THE FINALS Hack Download — Instant License Delivery",
					intro:"How THE FINALS hack download works for THE FINALS — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS hack download visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Setup guide",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"How THE FINALS hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, THE FINALS Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Battlestate Games services are down, check <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a> before assuming a download failure.",
							],
						},
						{
							h2:"What your download unlocks",
							paragraphs: [
								"Every THE FINALS hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Cashout matches and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2:"After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When THE FINALS or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/the-finals-hacks/\"> status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-raid.webp",
				},
				"mod-menu": {
					title:"THE FINALS Mod Menu 2026 | ESP & Soft Aim Toggles",
					description:"THE FINALS mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. thefinals hacks package.",
					h1:"THE FINALS Mod Menu — In-Client Control Panel",
					intro:"THE FINALS mod menu controls for THE FINALS — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your THE FINALS session on Windows PC.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS mod menu gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Full feature list",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"What a THE FINALS mod menu controls",
							paragraphs: [
								"A THE FINALS mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. THE FINALS Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of THE FINALS.",
								"Control deep-dives: <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, <a href=\"/finals-radar-hack/\">radar</a>.",
							],
						},
						{
							h2:"Mod menu categories for Cashout matches and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.finals} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/finals-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2:"Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"THE FINALS mod menu behavior is rebuilt when Easy Anti-Cheat or major THE FINALS updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-radar.webp",
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim 2026 | Smooth Aimbot Settings",
					description:"THE FINALS soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our thefinals hacks with ESP boxes.",
					h1:"THE FINALS Soft Aim — Smooth Aimbot Controls",
					intro:"THE FINALS soft aim settings for THE FINALS — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one license.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS soft aim gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Aimbot controls",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"What THE FINALS soft aim means",
							paragraphs: [
								"THE FINALS soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. THE FINALS Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/finals-aimbot/\">THE FINALS Aimbot</a>. Alternate wording: <a href=\"/finals-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2:"Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/finals-esp/\">ESP wallhack</a> and <a href=\"/finals-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2:"soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title:"Best THE FINALS Hacks 2026 | Buyer Guide",
					description:"Best thefinals hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1:"Best THE FINALS Hacks — 2026 Buyer Guide",
					intro:"Compare the THE FINALS hacks for THE FINALS in 2026 — ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Best THE FINALS hacks gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Compare pricing",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"What makes the THE FINALS hacks in 2026",
							paragraphs: [
								"The THE FINALS hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"THE FINALS Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromfinals.com/support\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2:"Best THE FINALS hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after THE FINALS patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/the-finals-hacks/\"> status</a>, and <a href=\"/the-finals-hacks/\">THE FINALS hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/finals-esp/\">ESP</a>, <a href=\"/finals-aimbot/\">Aimbot</a>, <a href=\"/the-finals-hacks/\">hacks</a>.",
							],
						},
						{
							h2:"Buying the THE FINALS hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-esp.webp",
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack 2026 | Soft Aim Assist",
					description:"THE FINALS aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our thefinals hacks package.",
					h1:"THE FINALS Aimbot Hack — Soft Aim Assist",
					intro:"THE FINALS aimbot hack tools for THE FINALS — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one license.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS aimbot hack gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"Aimbot settings",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS aimbot hack vs visibility tools",
							paragraphs: [
								"A THE FINALS aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. THE FINALS Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for THE FINALS combat pace across Cashout matches and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/finals-aimbot/\">soft aim</a>. Full settings: <a href=\"/finals-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2:"Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2:"aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/finals-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack 2026 | Player Boxes & Loot",
					description:"THE FINALS ESP hack with player boxes and loot markers for Windows PC. thefinals hacks with — see overlays and buy.",
					h1:"THE FINALS ESP Hack — Player Boxes Guide",
					intro:"THE FINALS ESP hack overlays for THE FINALS — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP hack gallery",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"ESP controls",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"What a THE FINALS ESP hack shows",
							paragraphs: [
								"A THE FINALS ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/finals-esp/\">THE FINALS ESP</a>. Wallhack wording: <a href=\"/finals-esp/\">wallhack</a>.",
							],
						},
						{
							h2:"ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports Cashout matches and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2:"ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and THE FINALS patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/finals-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/the-finals-hacks/\"> guide</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-wallhack.webp",
				},
				"unlock-all": {
					title:"THE FINALS Unlock All 2026 | What It Really Means",
					description:"THE FINALS unlock all explained vs real thefinals hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1:"THE FINALS Unlock All — What Players Search For",
					intro:"THE FINALS unlock all is a common search term for THE FINALS — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools THE FINALS Hacks actually provides on Windows PC.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS unlock all guide visuals",
					ctaPrimary:"Buy THE FINALS Hacks",
					ctaSecondary:"See features",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"What THE FINALS unlock all usually means",
							paragraphs: [
								"THE FINALS unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"THE FINALS Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromfinals.com/\"target=\"_blank\"rel=\"noopener noreferrer\">THE FINALS</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2:"Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/finals-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/the-finals-hacks/\">THE FINALS hacks</a> and <a href=\"/the-finals-hacks/\">THE FINALS hacks</a>.",
							],
						},
						{
							h2:"Buying THE FINALS Hacks for the right reasons",
							paragraphs: [
								"If you need ESP wallhack, radar hack, and Aimbot for THE FINALS on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-radar.webp",
				},
				privacy: {
					title:"Privacy Policy | THE FINALS Hacks",
					description:"Privacy policy for THE FINALS Hacks. How we handle support emails, order data, and checkout for thefinals hacks licenses on thefinalshacks.org.",
					h1:"Privacy Policy",
					intro:"How THE FINALS Hacks handles information when you browse thefinalshacks.org or contact support about a THE FINALS license.",
					imageAlt:"THE FINALS Hacks privacy policy page",
					galleryTitle:"THE FINALS Hacks legal resources",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms of use",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2:"How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual THE FINALS Hacks customers.",
							],
						},
						{
							h2:"Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@thefinalshacks.org with your request details.",
								"Policy updates publish on this page. Continued use of thefinalshacks.org after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot.webp",
				},
				refund: {
					title:"Refund Policy | THE FINALS Hacks",
					description:"Refund policy for THE FINALS Hacks. Digital delivery terms and eligibility for thefinals hacks packages with ESP, soft aim, and radar.",
					h1:"Refund Policy",
					intro:"Refund terms for THE FINALS Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for THE FINALS.",
					imageAlt:"THE FINALS Hacks refund policy page",
					galleryTitle:"THE FINALS Hacks billing resources",
					ctaPrimary:"Contact support",
					ctaSecondary:"Read privacy policy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery and eligibility",
							paragraphs: [
								"THE FINALS Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2:"When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2:"How to request a refund",
							paragraphs: [
								"Email support@thefinalshacks.org with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-raid.webp",
				},
				terms: {
					title:"Terms of Use 2026 | THE FINALS Hacks Rules",
					description:"Terms of use for thefinalshacks.org and THE FINALS Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1:"Terms of Use",
					intro:"Terms governing use of thefinalshacks.org and THE FINALS Hacks licenses for THE FINALS on Windows PC.",
					imageAlt:"THE FINALS Hacks terms of use page",
					galleryTitle:"THE FINALS Hacks legal pages",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy policy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance and license scope",
							paragraphs: [
								"By purchasing or using THE FINALS Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for THE FINALS on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2:"Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in THE FINALS may violate Battlestate Games terms and result in account penalties. THE FINALS Hacks provides maintenance but does not guarantee status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/the-finals-hacks/\"> status</a>.",
							],
						},
						{
							h2:"Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@thefinalshacks.org for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home:"Inicio",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funciones",
					pricing:"Precios",
					setup:"Instalación",
					updates:"Actualizaciones",
					faq:"FAQ",
					buyNow:"Comprar",
				},
				hero: {
					accent:"Trucos THE FINALS indetectables",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack y Aimbot para THE FINALS en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort:"ESP, radar y Aimbot para THE FINALS PC",
					buyNow:"Comprar ahora",
					seeFeatures:"Ver funciones",
				},
				trust: {
					status:"En línea",
					statusNote:"El paquete THE FINALS Hacks está activo para THE FINALS en PC Windows.",
					statusShort:"Activo",
					delivery:"Entrega digital instantánea",
					platform:"Windows 10 y 11",
					antiCheat:"Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort:"Easy Anti-Cheat incluido",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Añadir al carrito",
					monthly:"Mensual",
					lifetime:"De por vida",
					available:"Disponible ahora",
					gameBadge:"THE FINALS",
					platformBadge:"PC Windows",
					statusBadge:"Paquete indetectable",
				},
				reviews: {
					title:"Lo que dicen los jugadores",
					subtitle:"Comentarios recientes de compradores de THE FINALS Hacks",
					outOf:"de 5",
					countLabel:"reseñas",
				},
				common: {
					buyNow:"Comprar ahora",
					readGuide:"Leer guía",
					language:"Idioma",
					officialLanguageNote:"El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages:"Páginas relacionadas",
				},
				footer: {
					explore:"Explorar",
					help:"Ayuda y legal",
					tagline:"ESP, wallhack, radar y Aimbot indetectables para THE FINALS — checkout en Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack y Aimbot",
					description:"Trucos THE FINALS indetectables para THE FINALS en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital",
					h1:"THE FINALS Hacks — ESP, Wallhack y Aimbot indetectables",
					intro:"Paquete para THE FINALS en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galería THE FINALS Hacks — ESP, Aimbot y wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Por qué eligen THE FINALS Hacks en 2026",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Cajas de jugador y wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Controles soft aim",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title:"Funciones | Lista completa de funciones",
					description:"Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Funciones",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Funciones.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funciones",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funciones",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title:"Precios | Mensual y de por vida",
					description:"Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Precios",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Precios.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Precios",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Precios",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title:"Instalación | Guía de instalación PC",
					description:"Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Instalación",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Instalación.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Instalación",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Instalación",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title:"Actualizaciones | Registro Easy Anti-Cheat",
					description:"Actualizaciones: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Actualizaciones",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Actualizaciones.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Actualizaciones",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Actualizaciones",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Preguntas frecuentes",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title:"Soporte | Ayuda y contacto",
					description:"Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Soporte",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Soporte.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Soporte",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Soporte",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title:"Trucos indetectables | Estado indetectable",
					description:"Trucos indetectables: maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Trucos indetectables",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Trucos indetectables.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Trucos indetectables",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Trucos indetectables",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | Visibilidad ESP",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | Radar 2D de amenazas",
					description:"Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Trucos THE FINALS 2026 | Guía del comprador",
					description:"Trucos THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Trucos THE FINALS 2026",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Trucos THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Trucos THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Trucos THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title:"Trucos THE FINALS | Guía ESP y Aimbot",
					description:"Trucos THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Trucos THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Trucos THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Trucos THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Trucos THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Descarga THE FINALS Hacks | Acceso instantáneo",
					description:"Descarga THE FINALS Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Descarga THE FINALS Hacks",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Descarga THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Descarga THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Descarga THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Menú mod THE FINALS | Controles en partida",
					description:"Menú mod THE FINALS: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Menú mod THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Menú mod THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Menú mod THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Menú mod THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Ajustes soft aim",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Mejores trucos THE FINALS | Lista de compra",
					description:"Mejores trucos THE FINALS: what to compare before buying THE FINALS hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Mejores trucos THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Mejores trucos THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Mejores trucos THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Mejores trucos THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. what to compare before buying THE FINALS hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Asistencia soft aim",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Aimbot hack assist for THE FINALS.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Cajas y loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | Qué significa",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver funciones",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title:"Política de privacidad | THE FINALS Hacks",
					description:"Política de privacidad for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Política de privacidad",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Política de privacidad for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Leer términos",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Información que recopilamos",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"Uso de la información",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2:"Tus derechos",
							paragraphs: [
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Política de reembolso | THE FINALS Hacks",
					description:"Política de reembolso for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Política de reembolso",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Política de reembolso for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Leer privacidad",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Entrega digital",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"Cuándo se aprueba",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2:"Cómo solicitar",
							paragraphs: [
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Términos de uso | THE FINALS Hacks",
					description:"Términos de uso for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Términos de uso",
					intro:"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Términos de uso for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Leer privacidad",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Aceptación de términos",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2:"Riesgos y anti-cheat",
							paragraphs: [
								"THE FINALS Hacks ofrece ESP wallhack, radar hack y the finals aimbot indetectables para THE FINALS en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Cambios",
							paragraphs: [
								"Contacta support@thefinalshacks.org para solicitudes legales o de soporte.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home:"Accueil",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Fonctions",
					pricing:"Tarifs",
					setup:"Installation",
					updates:"Mises à jour",
					faq:"FAQ",
					buyNow:"Acheter",
				},
				hero: {
					accent:"Triches THE FINALS indétectables",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack et Aimbot pour THE FINALS sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort:"ESP, radar et Aimbot pour THE FINALS PC",
					buyNow:"Acheter",
					seeFeatures:"Voir les fonctions",
				},
				trust: {
					status:"En ligne",
					statusNote:"Le pack THE FINALS Hacks est actif pour THE FINALS sur PC Windows.",
					statusShort:"Actif",
					delivery:"Livraison numérique instantanée",
					platform:"Windows 10 et 11",
					antiCheat:"Maintenance Easy Anti-Cheat incluse",
					antiCheatShort:"Easy Anti-Cheat inclus",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Ajouter au panier",
					monthly:"Mensuel",
					lifetime:"À vie",
					available:"Disponible",
					gameBadge:"THE FINALS",
					platformBadge:"PC Windows",
					statusBadge:"Pack indétectable",
				},
				reviews: {
					title:"Ce que disent les joueurs",
					subtitle:"Avis récents des acheteurs THE FINALS Hacks",
					outOf:"sur 5",
					countLabel:"avis",
				},
				common: {
					buyNow:"Acheter",
					readGuide:"Lire le guide",
					language:"Langue",
					officialLanguageNote:"L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages:"Pages associées",
				},
				footer: {
					explore:"Explorer",
					help:"Aide et légal",
					tagline:"ESP, wallhack, radar et Aimbot indétectables pour THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack et Aimbot",
					description:"Triches THE FINALS indétectables pour THE FINALS sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison",
					h1:"THE FINALS Hacks — ESP, Wallhack et Aimbot indétectables",
					intro:"Pack pour THE FINALS sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galerie THE FINALS Hacks — ESP, Aimbot et wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Pourquoi choisir THE FINALS Hacks en 2026",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Boîtes joueur et wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Contrôles soft aim",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title:"Fonctions | Liste complète des fonctions",
					description:"Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Fonctions",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Fonctions.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Fonctions",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Fonctions",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title:"Tarifs | Mensuel et à vie",
					description:"Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Tarifs",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Tarifs.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Tarifs",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Tarifs",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title:"Installation | Guide d'installation PC",
					description:"Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Installation",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Installation.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Installation",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Installation",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title:"Mises à jour | Journal Easy Anti-Cheat",
					description:"Mises à jour: Easy Anti-Cheat patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Mises à jour",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Mises à jour.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Mises à jour",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Mises à jour",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Questions fréquentes",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title:"Support | Aide et contact",
					description:"Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Support",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Support.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Support",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Support",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title:"Triches indétectables | Statut indétectable",
					description:"Triches indétectables: maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Triches indétectables",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Triches indétectables.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Triches indétectables",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Triches indétectables",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | Visibilité ESP",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | Radar 2D des menaces",
					description:"Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Maintenance des patchs",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Triches THE FINALS 2026 | Guide acheteur",
					description:"Triches THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Triches THE FINALS 2026",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Triches THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Triches THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Triches THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title:"Triches THE FINALS | Guide ESP et Aimbot",
					description:"Triches THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Triches THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Triches THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Triches THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Triches THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Téléchargement THE FINALS Hacks | Accès instantané",
					description:"Téléchargement THE FINALS Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Téléchargement THE FINALS Hacks",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Téléchargement THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Téléchargement THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Téléchargement THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Menu mod THE FINALS | Contrôles en jeu",
					description:"Menu mod THE FINALS: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Menu mod THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Menu mod THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Menu mod THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Menu mod THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Réglages soft aim",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Meilleures triches THE FINALS | Checklist acheteur",
					description:"Meilleures triches THE FINALS: what to compare before buying THE FINALS hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Meilleures triches THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Meilleures triches THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Meilleures triches THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Meilleures triches THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. what to compare before buying THE FINALS hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Assistance soft aim",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Aimbot hack assist for THE FINALS.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boîtes et loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | Ce que ça signifie",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acheter THE FINALS Hacks",
					ctaSecondary:"Voir les fonctions",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title:"Politique de confidentialité | THE FINALS Hacks",
					description:"Politique de confidentialité for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Politique de confidentialité",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Politique de confidentialité for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Lire conditions",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Informations collectées",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"Utilisation",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2:"Vos droits",
							paragraphs: [
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Politique de remboursement | THE FINALS Hacks",
					description:"Politique de remboursement for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Politique de remboursement",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Politique de remboursement for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Livraison numérique",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"Approbation",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2:"Comment demander",
							paragraphs: [
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Conditions d'utilisation | THE FINALS Hacks",
					description:"Conditions d'utilisation for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Conditions d'utilisation",
					intro:"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Conditions d'utilisation for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptation",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risques",
							paragraphs: [
								"THE FINALS Hacks combine ESP wallhack, radar hack et the finals aimbot indétectables pour THE FINALS sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Modifications",
							paragraphs: [
								"Contactez support@thefinalshacks.org pour le support ou les demandes légales.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home:"Start",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Features",
					pricing:"Preise",
					setup:"Setup",
					updates:"Updates",
					faq:"FAQ",
					buyNow:"Kaufen",
				},
				hero: {
					accent:"THE FINALS Hacks",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP Wallhack, Radar Hack und Aimbot für THE FINALS auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort:"ESP, Radar & Aimbot für THE FINALS PC",
					buyNow:"Jetzt kaufen",
					seeFeatures:"Features ansehen",
				},
				trust: {
					status:"Online",
					statusNote:"THE FINALS Hacks Paket ist live für THE FINALS auf Windows PC.",
					statusShort:"Live",
					delivery:"Sofortige digitale Lieferung",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort:"Easy Anti-Cheat Support",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"In den Warenkorb",
					monthly:"Monatlich",
					lifetime:"Lifetime",
					available:"Jetzt verfügbar",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"Paket",
				},
				reviews: {
					title:"Was Spieler sagen",
					subtitle:"Aktuelles Feedback von THE FINALS Hacks Käufern",
					outOf:"von 5",
					countLabel:"Bewertungen",
				},
				common: {
					buyNow:"Jetzt kaufen",
					readGuide:"Guide lesen",
					language:"Sprache",
					officialLanguageNote:"Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages:"Verwandte Seiten",
				},
				footer: {
					explore:"Entdecken",
					help:"Hilfe & Rechtliches",
					tagline:"ESP, Wallhack, Radar und Aimbot für THE FINALS — Checkout über Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot",
					description:"THE FINALS Hacks für THE FINALS auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"Windows PC Paket für THE FINALS: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"THE FINALS Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Warum THE FINALS Hacks 2026 führt",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Spielerboxen & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft-Aim Steuerung",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title:"Features | Vollständige Feature-Liste",
					description:"Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. — Windows PC.",
					h1:"Features",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Features.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Features",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Features",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title:"Preise | Monatlich & Lifetime",
					description:"Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. — Windows PC.",
					h1:"Preise",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Preise.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Preise",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Preise",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title:"Setup | PC Setup-Anleitung",
					description:"Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. — Windows PC.",
					h1:"Setup",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Setup.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Setup",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Setup",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title:"Updates | Easy Anti-Cheat Wartungslog",
					description:"Updates: Easy Anti-Cheat patch status and rebuild notes. sofortige digitale Lieferung. — Windows PC.",
					h1:"Updates",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Updates.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Updates",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Updates",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Häufige Fragen",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. sofortige digitale Lieferung. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title:"Support | Hilfe & Kontakt",
					description:"Support: order help and license support contact. sofortige digitale Lieferung. — Windows PC.",
					h1:"Support",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Support.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Support",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Support",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title:"Cheats | Status",
					description:"Cheats: maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. — Windows PC.",
					h1:"Cheats",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Sichtbarkeit",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Bedrohungsradar",
					description:"Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch-Wartung",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. sofortige digitale Lieferung. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Käuferleitfaden",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Sofortzugang",
					description:"THE FINALS Cheat Download: digital license download after payment. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod-Menü | In-Game Toggles",
					description:"THE FINALS Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Mod-Menü",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Mod-Menü.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod-Menü",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod-Menü",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Soft-Aim Einstellungen",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Beste THE FINALS Hacks | Käufer-Checkliste",
					description:"Beste THE FINALS Hacks: what to compare before buying THE FINALS hacks. sofortige digitale Lieferung. — Windows PC.",
					h1:"Beste THE FINALS Hacks",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Beste THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Beste THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Beste THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. what to compare before buying THE FINALS hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack | Soft-Aim Assist",
					description:"THE FINALS Aimbot Hack: Aimbot hack assist for THE FINALS. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Aimbot Hack",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Aimbot Hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hack",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Aimbot hack assist for THE FINALS.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack | Boxen & Loot",
					description:"THE FINALS ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS ESP Hack",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS ESP Hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hack",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | Was es bedeutet",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kaufen",
					ctaSecondary:"Features ansehen",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title:"Datenschutz | THE FINALS Hacks",
					description:"Datenschutz for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Datenschutz",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Datenschutz for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Nutzungsbedingungen",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Erhobene Daten",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"Datennutzung",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
							],
						},
						{
							h2:"Ihre Rechte",
							paragraphs: [
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Rückerstattung | THE FINALS Hacks",
					description:"Rückerstattung for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Rückerstattung",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Rückerstattung for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digitale Lieferung",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"Genehmigung",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft Status.",
							],
						},
						{
							h2:"Anfrage stellen",
							paragraphs: [
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Nutzungsbedingungen | THE FINALS Hacks",
					description:"Nutzungsbedingungen for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Nutzungsbedingungen",
					intro:"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Nutzungsbedingungen for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Annahme",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2:"Risiko",
							paragraphs: [
								"THE FINALS Hacks bündelt ESP wallhack, radar hack und the finals aimbot als Paket für THE FINALS auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Änderungen",
							paragraphs: [
								"support@thefinalshacks.org für Support und rechtliche Anfragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home:"Início",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Recursos",
					pricing:"Preços",
					setup:"Instalação",
					updates:"Atualizações",
					faq:"FAQ",
					buyNow:"Comprar",
				},
				hero: {
					accent:"Cheats THE FINALS indetectáveis",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack e Aimbot para THE FINALS no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort:"ESP, radar e Aimbot para THE FINALS PC",
					buyNow:"Comprar agora",
					seeFeatures:"Ver recursos",
				},
				trust: {
					status:"Online",
					statusNote:"O pacote THE FINALS Hacks está ativo para THE FINALS no PC Windows.",
					statusShort:"Ativo",
					delivery:"Entrega digital instantânea",
					platform:"Windows 10 e 11",
					antiCheat:"Manutenção Easy Anti-Cheat incluída",
					antiCheatShort:"Easy Anti-Cheat incluído",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Adicionar ao carrinho",
					monthly:"Mensal",
					lifetime:"Vitalício",
					available:"Disponível agora",
					gameBadge:"THE FINALS",
					platformBadge:"PC Windows",
					statusBadge:"Pacote indetectável",
				},
				reviews: {
					title:"O que os jogadores dizem",
					subtitle:"Feedback recente de compradores THE FINALS Hacks",
					outOf:"de 5",
					countLabel:"avaliações",
				},
				common: {
					buyNow:"Comprar agora",
					readGuide:"Ler guia",
					language:"Idioma",
					officialLanguageNote:"Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages:"Páginas relacionadas",
				},
				footer: {
					explore:"Explorar",
					help:"Ajuda e legal",
					tagline:"ESP, wallhack, radar e Aimbot indetectáveis para THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack e Aimbot",
					description:"Cheats THE FINALS indetectáveis para THE FINALS no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital",
					h1:"THE FINALS Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro:"Pacote para THE FINALS no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galeria THE FINALS Hacks — ESP, Aimbot e wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Por que escolher THE FINALS Hacks em 2026",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Caixas de jogador e wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Controles soft aim",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title:"Recursos | Lista completa de recursos",
					description:"Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Recursos",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Recursos.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Recursos",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Recursos",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title:"Preços | Mensal e vitalício",
					description:"Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Preços",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Preços.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Preços",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Preços",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title:"Instalação | Guia de instalação PC",
					description:"Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Instalação",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Instalação.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Instalação",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Instalação",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title:"Atualizações | Registro Easy Anti-Cheat",
					description:"Atualizações: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Atualizações",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Atualizações.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Atualizações",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Atualizações",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Perguntas frequentes",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title:"Suporte | Ajuda e contato",
					description:"Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Suporte",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Suporte.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Suporte",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Suporte",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title:"Cheats indetectáveis | Status indetectável",
					description:"Cheats indetectáveis: maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Cheats indetectáveis",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Cheats indetectáveis.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheats indetectáveis",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats indetectáveis",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | Visibilidade ESP",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | Radar 2D de ameaças",
					description:"Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Manutenção de patches",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheats THE FINALS 2026 | Guia do comprador",
					description:"Cheats THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Cheats THE FINALS 2026",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Cheats THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheats THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title:"Cheats THE FINALS | Guia ESP e Aimbot",
					description:"Cheats THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Cheats THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Cheats THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheats THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheats THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Download THE FINALS Hacks | Acesso instantâneo",
					description:"Download THE FINALS Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Download THE FINALS Hacks",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Download THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Download THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Download THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Menu mod THE FINALS | Controles in-game",
					description:"Menu mod THE FINALS: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Menu mod THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Menu mod THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Menu mod THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Menu mod THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Ajustes soft aim",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Melhores cheats THE FINALS | Checklist do comprador",
					description:"Melhores cheats THE FINALS: what to compare before buying THE FINALS hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Melhores cheats THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Melhores cheats THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Melhores cheats THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Melhores cheats THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. what to compare before buying THE FINALS hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Assistência soft aim",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Aimbot hack assist for THE FINALS.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Caixas e loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | O que significa",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Comprar THE FINALS Hacks",
					ctaSecondary:"Ver recursos",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title:"Política de privacidade | THE FINALS Hacks",
					description:"Política de privacidade for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Política de privacidade",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Política de privacidade for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Política de reembolso | THE FINALS Hacks",
					description:"Política de reembolso for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Política de reembolso",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Política de reembolso for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Termos de uso | THE FINALS Hacks",
					description:"Termos de uso for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Termos de uso",
					intro:"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Termos de uso for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks reúne ESP wallhack, radar hack e the finals aimbot indetectáveis para THE FINALS no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"Contacte support@thefinalshacks.org para suporte ou questões legais.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home:"Home",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funzioni",
					pricing:"Prezzi",
					setup:"Setup",
					updates:"Aggiornamenti",
					faq:"FAQ",
					buyNow:"Acquista",
				},
				hero: {
					accent:"Cheat THE FINALS indetectable",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack e Aimbot per THE FINALS su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort:"ESP, radar e Aimbot per THE FINALS PC",
					buyNow:"Acquista ora",
					seeFeatures:"Vedi funzioni",
				},
				trust: {
					status:"Online",
					statusNote:"Il pacchetto THE FINALS Hacks è attivo per THE FINALS su PC Windows.",
					statusShort:"Attivo",
					delivery:"Consegna digitale istantanea",
					platform:"Windows 10 e 11",
					antiCheat:"Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort:"Easy Anti-Cheat supportato",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Aggiungi al carrello",
					monthly:"Mensile",
					lifetime:"A vita",
					available:"Disponibile ora",
					gameBadge:"THE FINALS",
					platformBadge:"PC Windows",
					statusBadge:"Pacchetto indetectable",
				},
				reviews: {
					title:"Cosa dicono i giocatori",
					subtitle:"Feedback recente dagli acquirenti THE FINALS Hacks",
					outOf:"su 5",
					countLabel:"recensioni",
				},
				common: {
					buyNow:"Acquista ora",
					readGuide:"Leggi guida",
					language:"Lingua",
					officialLanguageNote:"L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages:"Pagine correlate",
				},
				footer: {
					explore:"Esplora",
					help:"Aiuto e legale",
					tagline:"ESP, wallhack, radar e Aimbot indetectable per THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack e Aimbot",
					description:"Cheat THE FINALS indetectable per THE FINALS su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale",
					h1:"THE FINALS Hacks — ESP, Wallhack e Aimbot indetectable",
					intro:"Pacchetto per THE FINALS su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galleria THE FINALS Hacks — ESP, Aimbot e wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Perché scegliere THE FINALS Hacks nel 2026",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Box giocatore e wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Controlli soft aim",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title:"Funzioni | Elenco completo funzioni",
					description:"Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Funzioni",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Funzioni.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funzioni",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funzioni",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title:"Prezzi | Mensile e lifetime",
					description:"Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Prezzi",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Prezzi.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Prezzi",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Prezzi",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title:"Setup | Guida setup PC",
					description:"Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Setup",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Setup.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Setup",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Setup",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title:"Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description:"Aggiornamenti: Easy Anti-Cheat patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Aggiornamenti",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Aggiornamenti.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Aggiornamenti",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Aggiornamenti",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Domande frequenti",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title:"Supporto | Aiuto e contatto",
					description:"Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Supporto",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Supporto.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Supporto",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Supporto",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title:"Cheat indetectable | Stato indetectable",
					description:"Cheat indetectable: maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Cheat indetectable",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Cheat indetectable.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheat indetectable",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat indetectable",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | Visibilità ESP",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | Radar 2D minacce",
					description:"Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Manutenzione patch",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheat THE FINALS 2026 | Guida acquirente",
					description:"Cheat THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Cheat THE FINALS 2026",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Cheat THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheat THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title:"Cheat THE FINALS | Guida ESP e Aimbot",
					description:"Cheat THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Cheat THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Download THE FINALS Hacks | Accesso istantaneo",
					description:"Download THE FINALS Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Download THE FINALS Hacks",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Download THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Download THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Download THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Mod menu THE FINALS | Toggle in-game",
					description:"Mod menu THE FINALS: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Mod menu THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Mod menu THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Mod menu THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Mod menu THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Impostazioni soft aim",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Migliori cheat THE FINALS | Checklist acquirente",
					description:"Migliori cheat THE FINALS: what to compare before buying THE FINALS hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Migliori cheat THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Migliori cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Migliori cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Migliori cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. what to compare before buying THE FINALS hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Assist soft aim",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Aimbot hack assist for THE FINALS.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Box e loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | Cosa significa",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Acquista THE FINALS Hacks",
					ctaSecondary:"Vedi funzioni",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title:"Informativa privacy | THE FINALS Hacks",
					description:"Informativa privacy for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Informativa privacy",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Informativa privacy for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Politica di rimborso | THE FINALS Hacks",
					description:"Politica di rimborso for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Politica di rimborso",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Politica di rimborso for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Termini di utilizzo | THE FINALS Hacks",
					description:"Termini di utilizzo for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Termini di utilizzo",
					intro:"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Termini di utilizzo for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks unisce ESP wallhack, radar hack e the finals aimbot indetectable per THE FINALS su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"Contatta support@thefinalshacks.org per supporto o richieste legali.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home:"Home",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Functies",
					pricing:"Prijzen",
					setup:"Setup",
					updates:"Updates",
					faq:"FAQ",
					buyNow:"Kopen",
				},
				hero: {
					accent:"THE FINALS Hacks",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack en Aimbot voor THE FINALS op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort:"ESP, radar & Aimbot voor THE FINALS PC",
					buyNow:"Nu kopen",
					seeFeatures:"Bekijk functies",
				},
				trust: {
					status:"Online",
					statusNote:"THE FINALS Hacks pakket is live voor THE FINALS op Windows PC.",
					statusShort:"Live",
					delivery:"Directe digitale levering",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort:"Easy Anti-Cheat support",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"In winkelwagen",
					monthly:"Maandelijks",
					lifetime:"Lifetime",
					available:"Nu beschikbaar",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"pakket",
				},
				reviews: {
					title:"Wat spelers zeggen",
					subtitle:"Recente feedback van THE FINALS Hacks kopers",
					outOf:"van 5",
					countLabel:"reviews",
				},
				common: {
					buyNow:"Nu kopen",
					readGuide:"Lees gids",
					language:"Taal",
					officialLanguageNote:"Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages:"Gerelateerde pagina's",
				},
				footer: {
					explore:"Verkennen",
					help:"Help & juridisch",
					tagline:"ESP, wallhack, radar en Aimbot voor THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot",
					description:"THE FINALS hacks voor THE FINALS op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"Windows PC pakket voor THE FINALS: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"THE FINALS Hacks galerij — ESP, Aimbot en wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Waarom THE FINALS Hacks in 2026",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title:"Functies | Full Feature List",
					description:"Functies: ESP, soft aim, radar controls. directe digitale levering. — Windows PC.",
					h1:"Functies",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Functies.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Functies",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Functies",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title:"Prijzen | Monthly & Lifetime",
					description:"Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. — Windows PC.",
					h1:"Prijzen",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Prijzen.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Prijzen",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Prijzen",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title:"Setup | PC Setup Guide",
					description:"Setup: Windows PC activation and first-launch setup. directe digitale levering. — Windows PC.",
					h1:"Setup",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Setup.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Setup",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Setup",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title:"Updates | Easy Anti-Cheat Maintenance Log",
					description:"Updates: Easy Anti-Cheat patch status and rebuild notes. directe digitale levering. — Windows PC.",
					h1:"Updates",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Updates.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Updates",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Updates",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. directe digitale levering. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title:"Support | Help & Contact",
					description:"Support: order help and license support contact. directe digitale levering. — Windows PC.",
					h1:"Support",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Support.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Support",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Support",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title:"Cheats | Easy Anti-Cheat Safe Status",
					description:"Cheats: maintenance after Easy Anti-Cheat patches. directe digitale levering. — Windows PC.",
					h1:"Cheats",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. directe digitale levering. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Instant Access",
					description:"THE FINALS Cheat Download: digital license download after payment. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod Menu | In-Game Toggles",
					description:"THE FINALS Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Mod Menu",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Mod Menu.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod Menu",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod Menu",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Beste THE FINALS Hacks | Buyer Checklist",
					description:"Beste THE FINALS Hacks: what to compare before buying THE FINALS hacks. directe digitale levering. — Windows PC.",
					h1:"Beste THE FINALS Hacks",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Beste THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Beste THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Beste THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. what to compare before buying THE FINALS hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack | Soft Aim Assist",
					description:"THE FINALS Aimbot Hack: Aimbot hack assist for THE FINALS. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Aimbot Hack",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Aimbot Hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hack",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Aimbot hack assist for THE FINALS.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack | Boxes & Loot",
					description:"THE FINALS ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. — Windows PC.",
					h1:"THE FINALS ESP Hack",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS ESP Hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hack",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks kopen",
					ctaSecondary:"Bekijk functies",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@thefinalshacks.org voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title:"Privacybeleid | THE FINALS Hacks",
					description:"Privacybeleid for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Privacybeleid",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Privacybeleid for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org voor support en juridische vragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Restitutiebeleid | THE FINALS Hacks",
					description:"Restitutiebeleid for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Restitutiebeleid",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Restitutiebeleid for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent status.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org voor support en juridische vragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Gebruiksvoorwaarden | THE FINALS Hacks",
					description:"Gebruiksvoorwaarden for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Gebruiksvoorwaarden",
					intro:"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Gebruiksvoorwaarden for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks bundelt ESP wallhack, radar hack en the finals aimbot als pakket voor THE FINALS op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org voor support en juridische vragen.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home:"Strona główna",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funkcje",
					pricing:"Cennik",
					setup:"Instalacja",
					updates:"Aktualizacje",
					faq:"FAQ",
					buyNow:"Kup teraz",
				},
				hero: {
					accent:"cheaty THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack i Aimbot do THE FINALS na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort:"ESP, radar i Aimbot dla THE FINALS PC",
					buyNow:"Kup teraz",
					seeFeatures:"Zobacz funkcje",
				},
				trust: {
					status:"Online",
					statusNote:"Pakiet THE FINALS Hacks jest aktywny dla THE FINALS na PC Windows.",
					statusShort:"Aktywny",
					delivery:"Natychmiastowa dostawa cyfrowa",
					platform:"Windows 10 i 11",
					antiCheat:"Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort:"Easy Anti-Cheat wsparcie",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Dodaj do koszyka",
					monthly:"Miesięcznie",
					lifetime:"Dożywotnio",
					available:"Dostępne teraz",
					gameBadge:"THE FINALS",
					platformBadge:"PC Windows",
					statusBadge:"Pakiet",
				},
				reviews: {
					title:"Co mówią gracze",
					subtitle:"Ostatnie opinie kupujących THE FINALS Hacks",
					outOf:"na 5",
					countLabel:"opinii",
				},
				common: {
					buyNow:"Kup teraz",
					readGuide:"Czytaj poradnik",
					language:"Język",
					officialLanguageNote:"Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages:"Powiązane strony",
				},
				footer: {
					explore:"Odkrywaj",
					help:"Pomoc i prawo",
					tagline:"ESP, wallhack, radar i Aimbot dla THE FINALS — checkout przez Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack i Aimbot",
					description:"cheaty THE FINALS dla THE FINALS na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa",
					h1:"THE FINALS Hacks — ESP, Wallhack i Aimbot",
					intro:"Pakiet dla THE FINALS na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galeria THE FINALS Hacks — ESP, Aimbot i wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Dlaczego THE FINALS Hacks w 2026",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title:"Funkcje | Full Feature List",
					description:"Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Funkcje",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Funkcje.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funkcje",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funkcje",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title:"Cennik | Monthly & Lifetime",
					description:"Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Cennik",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Cennik.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Cennik",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Cennik",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title:"Instalacja | PC Setup Guide",
					description:"Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Instalacja",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Instalacja.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Instalacja",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Instalacja",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title:"Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description:"Aktualizacje: Easy Anti-Cheat patch status and rebuild notes. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Aktualizacje",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Aktualizacje.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Aktualizacje",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Aktualizacje",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title:"Wsparcie | Help & Contact",
					description:"Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Wsparcie",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Wsparcie.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Wsparcie",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Wsparcie",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title:"Cheaty | Easy Anti-Cheat Safe Status",
					description:"Cheaty : maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Cheaty",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Cheaty.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheaty",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheaty",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheaty THE FINALS 2026 | Buyer Guide",
					description:"Cheaty THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Cheaty THE FINALS 2026",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Cheaty THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheaty THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheaty THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title:"Cheaty THE FINALS | ESP Aimbot Guide",
					description:"Cheaty THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Cheaty THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Cheaty THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheaty THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheaty THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Pobieranie THE FINALS Hacks | Instant Access",
					description:"Pobieranie THE FINALS Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Pobieranie THE FINALS Hacks",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Pobieranie THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Pobieranie THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Pobieranie THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Mod menu THE FINALS | In-Game Toggles",
					description:"Mod menu THE FINALS: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Mod menu THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Mod menu THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Mod menu THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Mod menu THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Najlepsze cheaty THE FINALS | Buyer Checklist",
					description:"Najlepsze cheaty THE FINALS: what to compare before buying THE FINALS hacks. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Najlepsze cheaty THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Najlepsze cheaty THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Najlepsze cheaty THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Najlepsze cheaty THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. what to compare before buying THE FINALS hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Soft Aim Assist",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Aimbot hack assist for THE FINALS.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boxes & Loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Kup THE FINALS Hacks",
					ctaSecondary:"Zobacz funkcje",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title:"Polityka prywatności | THE FINALS Hacks",
					description:"Polityka prywatności for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Polityka prywatności",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Polityka prywatności for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Polityka zwrotów | THE FINALS Hacks",
					description:"Polityka zwrotów for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Polityka zwrotów",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Polityka zwrotów for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego statusu.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Warunki użytkowania | THE FINALS Hacks",
					description:"Warunki użytkowania for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Warunki użytkowania",
					intro:"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Warunki użytkowania for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks łączy ESP wallhack, radar hack i the finals aimbot jako pakiet dla THE FINALS na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org w sprawach wsparcia i prawnych.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home:"Главная",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Функции",
					pricing:"Цены",
					setup:"Установка",
					updates:"Обновления",
					faq:"FAQ",
					buyNow:"Купить",
				},
				hero: {
					accent:"читы THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack и Aimbot для THE FINALS на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort:"ESP, radar и Aimbot для THE FINALS PC",
					buyNow:"Купить",
					seeFeatures:"Смотреть функции",
				},
				trust: {
					status:"Онлайн",
					statusNote:"Пакет THE FINALS Hacks активен для THE FINALS на Windows PC.",
					statusShort:"Активен",
					delivery:"Мгновенная цифровая доставка",
					platform:"Windows 10 и 11",
					antiCheat:"Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort:"Easy Anti-Cheat поддержка",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"В корзину",
					monthly:"Месяц",
					lifetime:"Навсегда",
					available:"Доступно сейчас",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"пакет",
				},
				reviews: {
					title:"Что говорят игроки",
					subtitle:"Недавние отзывы покупателей THE FINALS Hacks",
					outOf:"из 5",
					countLabel:"отзывов",
				},
				common: {
					buyNow:"Купить",
					readGuide:"Читать гайд",
					language:"Язык",
					officialLanguageNote:"Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages:"Похожие страницы",
				},
				footer: {
					explore:"Обзор",
					help:"Помощь и право",
					tagline:"ESP, wallhack, radar и Aimbot для THE FINALS — оплата через Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack и Aimbot",
					description:"читы THE FINALS для THE FINALS на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая",
					h1:"THE FINALS Hacks — ESP, Wallhack и Aimbot",
					intro:"пакет для THE FINALS на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Галерея THE FINALS Hacks — ESP, Aimbot и wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Почему выбирают THE FINALS Hacks в 2026",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Боксы игроков и wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. — Windows PC.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Управление soft aim",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. — Windows PC.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title:"Функции | Полный список функций",
					description:"Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. — Windows PC.",
					h1:"Функции",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Функции.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Функции",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Функции",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title:"Цены | Месяц и lifetime",
					description:"Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. — Windows PC.",
					h1:"Цены",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Цены.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Цены",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Цены",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title:"Установка | Гайд по установке",
					description:"Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. — Windows PC.",
					h1:"Установка",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Установка.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Установка",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Установка",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title:"Обновления | Журнал Easy Anti-Cheat",
					description:"Обновления: Easy Anti-Cheat patch status and rebuild notes. мгновенная цифровая доставка. — Windows PC.",
					h1:"Обновления",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Обновления.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Обновления",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Обновления",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Частые вопросы",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. мгновенная цифровая доставка. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title:"Поддержка | Помощь и контакт",
					description:"Поддержка: order help and license support contact. мгновенная цифровая доставка. — Windows PC.",
					h1:"Поддержка",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Поддержка.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Поддержка",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Поддержка",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title:"читы | Статус",
					description:"читы: maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. — Windows PC.",
					h1:"читы",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. читы.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"читы",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"читы",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | Видимость ESP",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. — Windows PC.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D радар угроз",
					description:"Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. — Windows PC.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Обслуживание патчей",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. мгновенная цифровая доставка. — Windows PC.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Читы THE FINALS 2026 | Гайд покупателя",
					description:"Читы THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. мгновенная цифровая доставка. — Windows PC.",
					h1:"Читы THE FINALS 2026",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Читы THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Читы THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Читы THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title:"Читы THE FINALS | Гайд ESP и Aimbot",
					description:"Читы THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. — Windows PC.",
					h1:"Читы THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Читы THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Читы THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Читы THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Скачать THE FINALS Hacks | Мгновенный доступ",
					description:"Скачать THE FINALS Hacks: digital license download after payment. мгновенная цифровая доставка. — Windows PC.",
					h1:"Скачать THE FINALS Hacks",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Скачать THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Скачать THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Скачать THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Мод-меню THE FINALS | Игровые переключатели",
					description:"Мод-меню THE FINALS: in-client ESP and soft aim toggles. мгновенная цифровая доставка. — Windows PC.",
					h1:"Мод-меню THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Мод-меню THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Мод-меню THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Мод-меню THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Настройки soft aim",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. — Windows PC.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Лучшие читы THE FINALS | Чеклист покупателя",
					description:"Лучшие читы THE FINALS: what to compare before buying THE FINALS hacks. мгновенная цифровая доставка. — Windows PC.",
					h1:"Лучшие читы THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Лучшие читы THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Лучшие читы THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Лучшие читы THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. what to compare before buying THE FINALS hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Хак aimbot THE FINALS | Soft aim ассист",
					description:"Хак aimbot THE FINALS: Aimbot hack assist for THE FINALS. мгновенная цифровая доставка. — Windows PC.",
					h1:"Хак aimbot THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Хак aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Хак aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Хак aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Aimbot hack assist for THE FINALS.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Хак ESP THE FINALS | Боксы и лут",
					description:"Хак ESP THE FINALS: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. — Windows PC.",
					h1:"Хак ESP THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Хак ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Хак ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Хак ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | Что это значит",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. — Windows PC.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купить THE FINALS Hacks",
					ctaSecondary:"Смотреть функции",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title:"Политика конфиденциальности | THE FINALS Hacks",
					description:"Политика конфиденциальности for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Политика конфиденциальности",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Политика конфиденциальности for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Политика возврата | THE FINALS Hacks",
					description:"Политика возврата for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Политика возврата",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Политика возврата for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный статус.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Условия использования | THE FINALS Hacks",
					description:"Условия использования for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Условия использования",
					intro:"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Условия использования for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks объединяет ESP wallhack, radar hack и the finals aimbot в пакете для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org для поддержки и юридических вопросов.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home:"Ana sayfa",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Özellikler",
					pricing:"Fiyatlar",
					setup:"Kurulum",
					updates:"Güncellemeler",
					faq:"SSS",
					buyNow:"Satın al",
				},
				hero: {
					accent:"THE FINALS hileleri",
					accentShort:"THE FINALS Hacks",
					subtitle:"THE FINALS Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort:"THE FINALS PC için ESP, radar ve Aimbot",
					buyNow:"Satın al",
					seeFeatures:"Özellikleri gör",
				},
				trust: {
					status:"Çevrimiçi",
					statusNote:"THE FINALS Hacks paketi THE FINALS Windows PC için aktif.",
					statusShort:"Aktif",
					delivery:"Anında dijital teslimat",
					platform:"Windows 10 ve 11",
					antiCheat:"Easy Anti-Cheat bakım desteği",
					antiCheatShort:"Easy Anti-Cheat destek",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Sepete ekle",
					monthly:"Aylık",
					lifetime:"Ömür boyu",
					available:"Şimdi mevcut",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"paket",
				},
				reviews: {
					title:"Oyuncular ne diyor",
					subtitle:"THE FINALS Hacks alıcılarından son geri bildirimler",
					outOf:"/5",
					countLabel:"yorum",
				},
				common: {
					buyNow:"Satın al",
					readGuide:"Rehberi oku",
					language:"Dil",
					officialLanguageNote:"Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages:"İlgili sayfalar",
				},
				footer: {
					explore:"Keşfet",
					help:"Yardım ve yasal",
					tagline:"THE FINALS için ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack ve Aimbot",
					description:"THE FINALS için hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1:"THE FINALS Hacks — ESP, Wallhack ve Aimbot",
					intro:"THE FINALS Windows PC paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"THE FINALS Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"2026'da neden THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				features: {
					title:"Özellikler | Full Feature List",
					description:"Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. — Windows PC.",
					h1:"Özellikler",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Özellikler.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Özellikler",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Özellikler",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				pricing: {
					title:"Fiyatlar | Monthly & Lifetime",
					description:"Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. — Windows PC.",
					h1:"Fiyatlar",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Fiyatlar.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Fiyatlar",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Fiyatlar",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				setup: {
					title:"Kurulum | PC Setup Guide",
					description:"Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. — Windows PC.",
					h1:"Kurulum",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Kurulum.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Kurulum",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Kurulum",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				updates: {
					title:"Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description:"Güncellemeler: Easy Anti-Cheat patch status and rebuild notes. anında dijital teslimat. — Windows PC.",
					h1:"Güncellemeler",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Güncellemeler.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Güncellemeler",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Güncellemeler",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				faq: {
					title:"SSS | Common Answers",
					description:"SSS: ESP, soft aim, delivery, and Easy Anti-Cheat questions. anında dijital teslimat. — Windows PC.",
					h1:"SSS",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. SSS.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"SSS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"SSS",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				support: {
					title:"Destek | Help & Contact",
					description:"Destek: order help and license support contact. anında dijital teslimat. — Windows PC.",
					h1:"Destek",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Destek.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Destek",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Destek",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				undetected: {
					title:"hileler | Easy Anti-Cheat Safe Status",
					description:"hileler: maintenance after Easy Anti-Cheat patches. anında dijital teslimat. — Windows PC.",
					h1:"hileler",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. hileler.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"hileler",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"hileler",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. — Windows PC.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat bypass | Patch Maintenance",
					description:"Easy Anti-Cheat bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. anında dijital teslimat. — Windows PC.",
					h1:"Easy Anti-Cheat bypass",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Easy Anti-Cheat bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat bypass",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hileleri 2026 | Buyer Guide",
					description:"THE FINALS Hileleri 2026: 2026 THE FINALS hacks checklist before checkout. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Hileleri 2026",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Hileleri 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hileleri 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hileleri 2026",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. 2026 THE FINALS hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hileleri | ESP Aimbot Guide",
					description:"THE FINALS Hileleri: the THE FINALS hacks pillar for ESP and Aimbot. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Hileleri",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Hileleri.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hileleri",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hileleri",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Hile İndir | Instant Access",
					description:"THE FINALS Hile İndir: digital license download after payment. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Hile İndir",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Hile İndir.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Hile İndir",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Hile İndir",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod Menü | In-Game Toggles",
					description:"THE FINALS Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Mod Menü",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Mod Menü.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod Menü",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod Menü",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"best-cheats": {
					title:"En İyi THE FINALS Hileleri | Buyer Checklist",
					description:"En İyi THE FINALS Hileleri: what to compare before buying THE FINALS hacks. anında dijital teslimat. — Windows PC.",
					h1:"En İyi THE FINALS Hileleri",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. En İyi THE FINALS Hileleri.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"En İyi THE FINALS Hileleri",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"En İyi THE FINALS Hileleri",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. what to compare before buying THE FINALS hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hilesi | Soft Aim Assist",
					description:"THE FINALS Aimbot Hilesi: Aimbot hack assist for THE FINALS. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Aimbot Hilesi",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Aimbot Hilesi.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hilesi",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hilesi",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Aimbot hack assist for THE FINALS.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hilesi | Boxes & Loot",
					description:"THE FINALS ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS ESP Hilesi",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS ESP Hilesi.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hilesi",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hilesi",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks satın al",
					ctaSecondary:"Özellikleri gör",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@thefinalshacks.org.",
							],
						},
					],
				},
				privacy: {
					title:"Gizlilik politikası | THE FINALS Hacks",
					description:"Gizlilik politikası for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Gizlilik politikası",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Gizlilik politikası for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@thefinalshacks.org.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"İade politikası | THE FINALS Hacks",
					description:"İade politikası for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"İade politikası",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. İade politikası for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı garantisi vermez.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@thefinalshacks.org.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Kullanım şartları | THE FINALS Hacks",
					description:"Kullanım şartları for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Kullanım şartları",
					intro:"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Kullanım şartları for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks, THE FINALS için Windows PC üzerinde ESP wallhack, radar hack ve the finals aimbot paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@thefinalshacks.org.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home:"الرئيسية",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"الميزات",
					pricing:"الأسعار",
					setup:"التثبيت",
					updates:"التحديثات",
					faq:"الأسئلة",
					buyNow:"اشترِ الآن",
				},
				hero: {
					accent:"غش THE FINALS غير مكتشف",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack ورadar hack وAimbot لـ THE FINALS على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort:"ESP ورadar وAimbot لـ THE FINALS PC",
					buyNow:"اشترِ الآن",
					seeFeatures:"عرض الميزات",
				},
				trust: {
					status:"متصل",
					statusNote:"حزمة THE FINALS Hacks نشطة لـ THE FINALS على Windows PC.",
					statusShort:"نشط",
					delivery:"تسليم رقمي فوري",
					platform:"Windows 10 و11",
					antiCheat:"دعم صيانة Easy Anti-Cheat",
					antiCheatShort:"دعم Easy Anti-Cheat",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"أضف إلى السلة",
					monthly:"شهري",
					lifetime:"مدى الحياة",
					available:"متوفر الآن",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"حزمة غير مكتشفة",
				},
				reviews: {
					title:"ماذا يقول اللاعبون",
					subtitle:"آراء حديثة من مشتري THE FINALS Hacks",
					outOf:"من 5",
					countLabel:"مراجعات",
				},
				common: {
					buyNow:"اشترِ الآن",
					readGuide:"اقرأ الدليل",
					language:"اللغة",
					officialLanguageNote:"الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages:"صفحات ذات صلة",
				},
				footer: {
					explore:"استكشف",
					help:"المساعدة والقانون",
					tagline:"ESP وwallhack ورadar وAimbot غير مكتشف لـ THE FINALS — الدفع عبر Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP وWallhack وAimbot",
					description:"غش THE FINALS لـ THE FINALS على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1:"THE FINALS Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro:"حزمة لـ THE FINALS على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"معرض THE FINALS Hacks — ESP وAimbot وwallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"لماذا THE FINALS Hacks في 2026",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title:"الميزات | Full Feature List",
					description:"الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"الميزات",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. الميزات.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"الميزات",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"الميزات",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title:"الأسعار | Monthly & Lifetime",
					description:"الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"الأسعار",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. الأسعار.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"الأسعار",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"الأسعار",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title:"التثبيت | PC Setup Guide",
					description:"التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"التثبيت",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. التثبيت.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"التثبيت",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"التثبيت",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title:"التحديثات | Easy Anti-Cheat Maintenance Log",
					description:"التحديثات: Easy Anti-Cheat patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"التحديثات",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. التحديثات.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"التحديثات",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"التحديثات",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title:"الأسئلة | Common Answers",
					description:"الأسئلة: ESP, soft aim, delivery, and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"الأسئلة",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. الأسئلة.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"الأسئلة",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"الأسئلة",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title:"الدعم | Help & Contact",
					description:"الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"الدعم",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. الدعم.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"الدعم",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"الدعم",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title:"غش | Easy Anti-Cheat Safe Status",
					description:"غش : maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"غش",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. غش.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"غش",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"غش",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"غش THE FINALS 2026 | Buyer Guide",
					description:"غش THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"غش THE FINALS 2026",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. غش THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"غش THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"غش THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title:"غش THE FINALS | ESP Aimbot Guide",
					description:"غش THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"غش THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. غش THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"غش THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"غش THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title:"تحميل THE FINALS Hacks | Instant Access",
					description:"تحميل THE FINALS Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"تحميل THE FINALS Hacks",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. تحميل THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"تحميل THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"تحميل THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title:"قائمة مود THE FINALS | In-Game Toggles",
					description:"قائمة مود THE FINALS: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"قائمة مود THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. قائمة مود THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"قائمة مود THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"قائمة مود THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title:"أفضل غش THE FINALS | Buyer Checklist",
					description:"أفضل غش THE FINALS: what to compare before buying THE FINALS hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"أفضل غش THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. أفضل غش THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"أفضل غش THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"أفضل غش THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. what to compare before buying THE FINALS hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"هاك Aimbot THE FINALS | Soft Aim Assist",
					description:"هاك Aimbot THE FINALS: Aimbot hack assist for THE FINALS. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"هاك Aimbot THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. هاك Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"هاك Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"هاك Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Aimbot hack assist for THE FINALS.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title:"هاك ESP THE FINALS | Boxes & Loot",
					description:"هاك ESP THE FINALS: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"هاك ESP THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. هاك ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"هاك ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"هاك ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"اشترِ THE FINALS Hacks",
					ctaSecondary:"عرض الميزات",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title:"سياسة الخصوصية | THE FINALS Hacks",
					description:"سياسة الخصوصية for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"سياسة الخصوصية",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. سياسة الخصوصية for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"مراسلة الدعم",
					ctaSecondary:"اقرأ الشروط",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"المعلومات التي نجمعها",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"استخدام المعلومات",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
							],
						},
						{
							h2:"حقوقك",
							paragraphs: [
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"سياسة الاسترداد | THE FINALS Hacks",
					description:"سياسة الاسترداد for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"سياسة الاسترداد",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. سياسة الاسترداد for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"مراسلة الدعم",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"التسليم الرقمي",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"موافقة الاسترداد",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة دائمة.",
							],
						},
						{
							h2:"كيفية الطلب",
							paragraphs: [
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"شروط الاستخدام | THE FINALS Hacks",
					description:"شروط الاستخدام for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"شروط الاستخدام",
					intro:"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. شروط الاستخدام for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"مراسلة الدعم",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"قبول الشروط",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2:"المخاطر",
							paragraphs: [
								"THE FINALS Hacks يجمع ESP wallhack وradar hack وthe finals aimbot غير مكتشف لـ THE FINALS على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"التغييرات",
							paragraphs: [
								"support@thefinalshacks.org للدعم والطلبات القانونية.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home:"ホーム",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"機能",
					pricing:"料金",
					setup:"セットアップ",
					updates:"更新",
					faq:"FAQ",
					buyNow:"今すぐ購入",
				},
				hero: {
					accent:"THE FINALSチート",
					accentShort:"THE FINALS Hacks",
					subtitle:"THE FINALS Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort:"THE FINALS PC向けESP・radar・Aimbot",
					buyNow:"今すぐ購入",
					seeFeatures:"機能を見る",
				},
				trust: {
					status:"オンライン",
					statusNote:"THE FINALS HacksパッケージはTHE FINALS Windows PCで利用可能です。",
					statusShort:"稼働中",
					delivery:"即時デジタル配信",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheatメンテナンス対応",
					antiCheatShort:"Easy Anti-Cheat対応",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"カートに追加",
					monthly:"月額",
					lifetime:"永久",
					available:"現在利用可能",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"パッケージ",
				},
				reviews: {
					title:"プレイヤーの声",
					subtitle:"THE FINALS Hacks購入者からの最近のフィードバック",
					outOf:"/5",
					countLabel:"件のレビュー",
				},
				common: {
					buyNow:"今すぐ購入",
					readGuide:"ガイドを読む",
					language:"言語",
					officialLanguageNote:"英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages:"関連ページ",
				},
				footer: {
					explore:"探索",
					help:"ヘルプと法務",
					tagline:"THE FINALS向け ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP・Wallhack・Aimbot",
					description:"THE FINALS向けチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1:"THE FINALS Hacks — ESP・Wallhack・Aimbot",
					intro:"THE FINALS Windows PC向けパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt:"THE FINALS hacks hero ESP aimbot wallhack",
					galleryTitle:"THE FINALS Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"2026年にTHE FINALS Hacksを選ぶ理由",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				features: {
					title:"機能 | Full Feature List",
					description:"機能: ESP, soft aim, radar controls. 即時デジタル配信. — Windows PC.",
					h1:"機能",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。機能.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"機能",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"機能",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				pricing: {
					title:"料金 | Monthly & Lifetime",
					description:"料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. — Windows PC.",
					h1:"料金",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。料金.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"料金",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"料金",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				setup: {
					title:"セットアップ | PC Setup Guide",
					description:"セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. — Windows PC.",
					h1:"セットアップ",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。セットアップ.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"セットアップ",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"セットアップ",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				updates: {
					title:"更新 | Easy Anti-Cheat Maintenance Log",
					description:"更新: Easy Anti-Cheat patch status and rebuild notes. 即時デジタル配信. — Windows PC.",
					h1:"更新",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。更新.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"更新",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"更新",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即時デジタル配信. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				support: {
					title:"サポート | Help & Contact",
					description:"サポート: order help and license support contact. 即時デジタル配信. — Windows PC.",
					h1:"サポート",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。サポート.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"サポート",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"サポート",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				undetected: {
					title:"チート | Easy Anti-Cheat Safe Status",
					description:"チート: maintenance after Easy Anti-Cheat patches. 即時デジタル配信. — Windows PC.",
					h1:"チート",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。チート.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"チート",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"チート",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。 maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. 即時デジタル配信. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。2026 THE FINALS hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。the THE FINALS hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Instant Access",
					description:"THE FINALS Cheat Download: digital license download after payment. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod Menu | In-Game Toggles",
					description:"THE FINALS Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Mod Menu",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Mod Menu.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod Menu",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod Menu",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title:"最強THE FINALSチート | Buyer Checklist",
					description:"最強THE FINALSチート: what to compare before buying THE FINALS hacks. 即時デジタル配信. — Windows PC.",
					h1:"最強THE FINALSチート",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。最強THE FINALSチート.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"最強THE FINALSチート",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"最強THE FINALSチート",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。what to compare before buying THE FINALS hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack | Soft Aim Assist",
					description:"THE FINALS Aimbot Hack: Aimbot hack assist for THE FINALS. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Aimbot Hack",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Aimbot Hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hack",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。 Aimbot hack assist for THE FINALS.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack | Boxes & Loot",
					description:"THE FINALS ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS ESP Hack",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS ESP Hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hack",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacksを購入",
					ctaSecondary:"機能を見る",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@thefinalshacks.org",
							],
						},
					],
				},
				privacy: {
					title:"プライバシーポリシー | THE FINALS Hacks",
					description:"プライバシーポリシー for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"プライバシーポリシー",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。プライバシーポリシー for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"サポートにメール",
					ctaSecondary:"利用規約",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"収集する情報",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"情報の利用",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
							],
						},
						{
							h2:"あなたの権利",
							paragraphs: [
								"サポート・法務: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"返金ポリシー | THE FINALS Hacks",
					description:"返金ポリシー for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"返金ポリシー",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。返金ポリシー for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"サポートにメール",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"デジタル配信",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"返金承認",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久は保証されません。",
							],
						},
						{
							h2:"申請方法",
							paragraphs: [
								"サポート・法務: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"利用規約 | THE FINALS Hacks",
					description:"利用規約 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"利用規約",
					intro:"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。利用規約 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"サポートにメール",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"規約への同意",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2:"リスク",
							paragraphs: [
								"THE FINALS HacksはTHE FINALS向けWindows PC用ESP wallhack、radar hack、the finals aimbotのパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"変更",
							paragraphs: [
								"サポート・法務: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home:"홈",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"기능",
					pricing:"가격",
					setup:"설치",
					updates:"업데이트",
					faq:"FAQ",
					buyNow:"구매하기",
				},
				hero: {
					accent:"THE FINALS 치트",
					accentShort:"THE FINALS Hacks",
					subtitle:"THE FINALS Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort:"THE FINALS PC용 ESP, radar, Aimbot",
					buyNow:"지금 구매",
					seeFeatures:"기능 보기",
				},
				trust: {
					status:"온라인",
					statusNote:"THE FINALS Hacks 패키지는 THE FINALS Windows PC에서 이용 가능합니다.",
					statusShort:"가동 중",
					delivery:"즉시 디지털 배송",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheat 유지보수 지원",
					antiCheatShort:"Easy Anti-Cheat 지원",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"장바구니에 추가",
					monthly:"월간",
					lifetime:"평생",
					available:"지금 이용 가능",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"패키지",
				},
				reviews: {
					title:"플레이어 후기",
					subtitle:"THE FINALS Hacks 구매자 최근 피드백",
					outOf:"/5",
					countLabel:"리뷰",
				},
				common: {
					buyNow:"지금 구매",
					readGuide:"가이드 읽기",
					language:"언어",
					officialLanguageNote:"영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages:"관련 페이지",
				},
				footer: {
					explore:"탐색",
					help:"도움말 및 법적",
					tagline:"THE FINALS용 ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack, Aimbot",
					description:"THE FINALS 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1:"THE FINALS Hacks — ESP, Wallhack, Aimbot",
					intro:"THE FINALS Windows PC 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt:"THE FINALS hacks hero ESP aimbot wallhack",
					galleryTitle:"THE FINALS Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"2026년 THE FINALS Hacks를 선택하는 이유",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				features: {
					title:"기능 | Full Feature List",
					description:"기능: ESP, soft aim, radar controls. 즉시 디지털 배송. — Windows PC.",
					h1:"기능",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 기능.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"기능",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"기능",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				pricing: {
					title:"가격 | Monthly & Lifetime",
					description:"가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. — Windows PC.",
					h1:"가격",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 가격.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"가격",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"가격",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				setup: {
					title:"설치 | PC Setup Guide",
					description:"설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. — Windows PC.",
					h1:"설치",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 설치.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"설치",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"설치",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				updates: {
					title:"업데이트 | Easy Anti-Cheat Maintenance Log",
					description:"업데이트: Easy Anti-Cheat patch status and rebuild notes. 즉시 디지털 배송. — Windows PC.",
					h1:"업데이트",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 업데이트.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"업데이트",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"업데이트",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 즉시 디지털 배송. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				support: {
					title:"지원 | Help & Contact",
					description:"지원: order help and license support contact. 즉시 디지털 배송. — Windows PC.",
					h1:"지원",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 지원.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"지원",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"지원",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				undetected: {
					title:"치트 | Easy Anti-Cheat Safe Status",
					description:"치트: maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. — Windows PC.",
					h1:"치트",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 치트.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"치트",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"치트",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. 즉시 디지털 배송. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 2026 THE FINALS hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Instant Access",
					description:"THE FINALS Cheat Download: digital license download after payment. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS 모드 메뉴 | In-Game Toggles",
					description:"THE FINALS 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS 모드 메뉴",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS 모드 메뉴.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS 모드 메뉴",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS 모드 메뉴",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title:"최고의 THE FINALS 치트 | Buyer Checklist",
					description:"최고의 THE FINALS 치트: what to compare before buying THE FINALS hacks. 즉시 디지털 배송. — Windows PC.",
					h1:"최고의 THE FINALS 치트",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 최고의 THE FINALS 치트.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"최고의 THE FINALS 치트",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"최고의 THE FINALS 치트",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. what to compare before buying THE FINALS hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS 에임봇 핵 | Soft Aim Assist",
					description:"THE FINALS 에임봇 핵: Aimbot hack assist for THE FINALS. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS 에임봇 핵",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS 에임봇 핵.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS 에임봇 핵",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS 에임봇 핵",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Aimbot hack assist for THE FINALS.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP 핵 | Boxes & Loot",
					description:"THE FINALS ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS ESP 핵",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS ESP 핵.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP 핵",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP 핵",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks 구매",
					ctaSecondary:"기능 보기",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@thefinalshacks.org",
							],
						},
					],
				},
				privacy: {
					title:"개인정보 처리방침 | THE FINALS Hacks",
					description:"개인정보 처리방침 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"개인정보 처리방침",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 개인정보 처리방침 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"지원 이메일",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"지원 및 법무: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"환불 정책 | THE FINALS Hacks",
					description:"환불 정책 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"환불 정책",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 환불 정책 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"지원 이메일",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 보장 없음.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"지원 및 법무: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"이용 약관 | THE FINALS Hacks",
					description:"이용 약관 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"이용 약관",
					intro:"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. 이용 약관 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"지원 이메일",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks는 THE FINALS Windows PC용 ESP wallhack, radar hack, the finals aimbot 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"지원 및 법무: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home:"首页",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"功能",
					pricing:"价格",
					setup:"安装",
					updates:"更新",
					faq:"常见问题",
					buyNow:"立即购买",
				},
				hero: {
					accent:"THE FINALS作弊",
					accentShort:"THE FINALS Hacks",
					subtitle:"适用于THE FINALS Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort:"THE FINALS PC版ESP、radar与Aimbot",
					buyNow:"立即购买",
					seeFeatures:"查看功能",
				},
				trust: {
					status:"在线",
					statusNote:"THE FINALS Hacks套餐已在THE FINALS Windows PC上线。",
					statusShort:"运行中",
					delivery:"即时数字交付",
					platform:"Windows 10 和 11",
					antiCheat:"支持Easy Anti-Cheat维护",
					antiCheatShort:"Easy Anti-Cheat支持",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"加入购物车",
					monthly:"月付",
					lifetime:"终身",
					available:"现已可用",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"套餐",
				},
				reviews: {
					title:"玩家评价",
					subtitle:"THE FINALS Hacks 买家近期反馈",
					outOf:"/5",
					countLabel:"条评价",
				},
				common: {
					buyNow:"立即购买",
					readGuide:"阅读指南",
					language:"语言",
					officialLanguageNote:"英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages:"相关页面",
				},
				footer: {
					explore:"探索",
					help:"帮助与法律",
					tagline:"THE FINALS ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP、Wallhack、Aimbot",
					description:"THE FINALS 作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1:"THE FINALS Hacks — ESP、Wallhack、Aimbot",
					intro:"THE FINALS Windows PC 套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt:"THE FINALS hacks hero ESP aimbot wallhack",
					galleryTitle:"THE FINALS Hacks图库 — ESP、Aimbot、wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"2026年选择THE FINALS Hacks的原因",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				features: {
					title:"功能 | Full Feature List",
					description:"功能: ESP, soft aim, radar controls. 即时数字交付. — Windows PC.",
					h1:"功能",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。功能.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"功能",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"功能",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				pricing: {
					title:"价格 | Monthly & Lifetime",
					description:"价格: $35 monthly or $150 lifetime licenses. 即时数字交付. — Windows PC.",
					h1:"价格",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。价格.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"价格",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"价格",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				setup: {
					title:"安装 | PC Setup Guide",
					description:"安装: Windows PC activation and first-launch setup. 即时数字交付. — Windows PC.",
					h1:"安装",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。安装.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"安装",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"安装",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				updates: {
					title:"更新 | Easy Anti-Cheat Maintenance Log",
					description:"更新: Easy Anti-Cheat patch status and rebuild notes. 即时数字交付. — Windows PC.",
					h1:"更新",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。更新.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"更新",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"更新",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Easy Anti-Cheat patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				faq: {
					title:"常见问题 | Common Answers",
					description:"常见问题: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即时数字交付. — Windows PC.",
					h1:"常见问题",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。常见问题.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"常见问题",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"常见问题",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				support: {
					title:"支持 | Help & Contact",
					description:"支持: order help and license support contact. 即时数字交付. — Windows PC.",
					h1:"支持",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。支持.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"支持",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"支持",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				undetected: {
					title:"作弊 | Easy Anti-Cheat Safe Status",
					description:"作弊: maintenance after Easy Anti-Cheat patches. 即时数字交付. — Windows PC.",
					h1:"作弊",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。作弊.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"作弊",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"作弊",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。 maintenance after Easy Anti-Cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. 即时数字交付. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS作弊 2026 | Buyer Guide",
					description:"THE FINALS作弊 2026: 2026 THE FINALS hacks checklist before checkout. 即时数字交付. — Windows PC.",
					h1:"THE FINALS作弊 2026",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS作弊 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS作弊 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS作弊 2026",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。2026 THE FINALS hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS作弊 | ESP Aimbot Guide",
					description:"THE FINALS作弊: the THE FINALS hacks pillar for ESP and Aimbot. 即时数字交付. — Windows PC.",
					h1:"THE FINALS作弊",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS作弊.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS作弊",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS作弊",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。the THE FINALS hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS作弊下载 | Instant Access",
					description:"THE FINALS作弊下载: digital license download after payment. 即时数字交付. — Windows PC.",
					h1:"THE FINALS作弊下载",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS作弊下载.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS作弊下载",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS作弊下载",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS修改菜单 | In-Game Toggles",
					description:"THE FINALS修改菜单: in-client ESP and soft aim toggles. 即时数字交付. — Windows PC.",
					h1:"THE FINALS修改菜单",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS修改菜单.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS修改菜单",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS修改菜单",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title:"最佳THE FINALS作弊 | Buyer Checklist",
					description:"最佳THE FINALS作弊: what to compare before buying THE FINALS hacks. 即时数字交付. — Windows PC.",
					h1:"最佳THE FINALS作弊",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。最佳THE FINALS作弊.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"最佳THE FINALS作弊",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"最佳THE FINALS作弊",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。what to compare before buying THE FINALS hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS自瞄外挂 | Soft Aim Assist",
					description:"THE FINALS自瞄外挂: Aimbot hack assist for THE FINALS. 即时数字交付. — Windows PC.",
					h1:"THE FINALS自瞄外挂",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS自瞄外挂.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS自瞄外挂",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS自瞄外挂",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。 Aimbot hack assist for THE FINALS.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP外挂 | Boxes & Loot",
					description:"THE FINALS ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. — Windows PC.",
					h1:"THE FINALS ESP外挂",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS ESP外挂.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP外挂",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP外挂",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"购买 THE FINALS Hacks",
					ctaSecondary:"查看功能",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@thefinalshacks.org",
							],
						},
					],
				},
				privacy: {
					title:"隐私政策 | THE FINALS Hacks",
					description:"隐私政策 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"隐私政策",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。隐私政策 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"邮件支持",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"支持与法务：support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"退款政策 | THE FINALS Hacks",
					description:"退款政策 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"退款政策",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。退款政策 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"邮件支持",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久。",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"支持与法务：support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"使用条款 | THE FINALS Hacks",
					description:"使用条款 for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"使用条款",
					intro:"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。使用条款 for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"邮件支持",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks为THE FINALSWindows PC提供ESP wallhack、radar hack和the finals aimbot套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"支持与法务：support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home:"होम",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"फ़ीचर्स",
					pricing:"कीमत",
					setup:"सेटअप",
					updates:"अपडेट",
					faq:"FAQ",
					buyNow:"अभी खरीदें",
				},
				hero: {
					accent:"THE FINALS hacks",
					accentShort:"THE FINALS Hacks",
					subtitle:"THE FINALS Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort:"THE FINALS PC के लिए ESP, radar और Aimbot",
					buyNow:"अभी खरीदें",
					seeFeatures:"फ़ीचर्स देखें",
				},
				trust: {
					status:"ऑनलाइन",
					statusNote:"THE FINALS Hacks पैकेज THE FINALS Windows PC के लिए सक्रिय है।",
					statusShort:"सक्रिय",
					delivery:"तुरंत डिजिटल डिलीवरी",
					platform:"Windows 10 और 11",
					antiCheat:"Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort:"Easy Anti-Cheat समर्थित",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"कार्ट में जोड़ें",
					monthly:"मासिक",
					lifetime:"लाइफ़टाइम",
					available:"अभी उपलब्ध",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"पैकेज",
				},
				reviews: {
					title:"खिलाड़ी क्या कहते हैं",
					subtitle:"THE FINALS Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf:"/5",
					countLabel:"समीक्षाएँ",
				},
				common: {
					buyNow:"अभी खरीदें",
					readGuide:"गाइड पढ़ें",
					language:"भाषा",
					officialLanguageNote:"अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages:"संबंधित पेज",
				},
				footer: {
					explore:"एक्सप्लोर",
					help:"सहायता और कानूनी",
					tagline:"THE FINALS के लिए ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack और Aimbot",
					description:"THE FINALS cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1:"THE FINALS Hacks — ESP, Wallhack और Aimbot",
					intro:"THE FINALS Windows PC पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt:"THE FINALS hacks hero ESP aimbot wallhack",
					galleryTitle:"THE FINALS Hacks gallery — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"2026 में THE FINALS Hacks क्यों",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				features: {
					title:"फ़ीचर्स | Full Feature List",
					description:"फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"फ़ीचर्स",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। फ़ीचर्स.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"फ़ीचर्स",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"फ़ीचर्स",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				pricing: {
					title:"कीमत | Monthly & Lifetime",
					description:"कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"कीमत",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। कीमत.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"कीमत",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"कीमत",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				setup: {
					title:"सेटअप | PC Setup Guide",
					description:"सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"सेटअप",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। सेटअप.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"सेटअप",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"सेटअप",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				updates: {
					title:"अपडेट | Easy Anti-Cheat Maintenance Log",
					description:"अपडेट: Easy Anti-Cheat patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"अपडेट",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। अपडेट.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"अपडेट",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"अपडेट",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				support: {
					title:"सहायता | Help & Contact",
					description:"सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"सहायता",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। सहायता.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"सहायता",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"सहायता",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				undetected: {
					title:"cheats | Easy Anti-Cheat Safe Status",
					description:"cheats: maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"cheats",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"cheats",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। 2026 THE FINALS hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। the THE FINALS hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Instant Access",
					description:"THE FINALS Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod Menu | In-Game Toggles",
					description:"THE FINALS Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Mod Menu",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Mod Menu.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod Menu",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod Menu",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"best-cheats": {
					title:"सर्वश्रेष्ठ THE FINALS Hacks | Buyer Checklist",
					description:"सर्वश्रेष्ठ THE FINALS Hacks: what to compare before buying THE FINALS hacks. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"सर्वश्रेष्ठ THE FINALS Hacks",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। सर्वश्रेष्ठ THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"सर्वश्रेष्ठ THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"सर्वश्रेष्ठ THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। what to compare before buying THE FINALS hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack | Soft Aim Assist",
					description:"THE FINALS Aimbot Hack: Aimbot hack assist for THE FINALS. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Aimbot Hack",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Aimbot Hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hack",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Aimbot hack assist for THE FINALS.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack | Boxes & Loot",
					description:"THE FINALS ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS ESP Hack",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS ESP Hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hack",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"THE FINALS Hacks खरीदें",
					ctaSecondary:"फ़ीचर्स देखें",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@thefinalshacks.org",
							],
						},
					],
				},
				privacy: {
					title:"गोपनीयता नीति | THE FINALS Hacks",
					description:"गोपनीयता नीति for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"गोपनीयता नीति",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। गोपनीयता नीति for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"सहायता: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"रिफंड नीति | THE FINALS Hacks",
					description:"रिफंड नीति for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"रिफंड नीति",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। रिफंड नीति for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent गारंटी नहीं देता।",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"सहायता: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"उपयोग की शर्तें | THE FINALS Hacks",
					description:"उपयोग की शर्तें for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"उपयोग की शर्तें",
					intro:"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। उपयोग की शर्तें for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks THE FINALS के लिए Windows PC पर ESP wallhack, radar hack और the finals aimbot पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"सहायता: support@thefinalshacks.org",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home:"Beranda",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Fitur",
					pricing:"Harga",
					setup:"Setup",
					updates:"Pembaruan",
					faq:"FAQ",
					buyNow:"Beli sekarang",
				},
				hero: {
					accent:"Cheat THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack, dan Aimbot untuk THE FINALS di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort:"ESP, radar & Aimbot untuk THE FINALS PC",
					buyNow:"Beli sekarang",
					seeFeatures:"Lihat fitur",
				},
				trust: {
					status:"Online",
					statusNote:"Paket THE FINALS Hacks aktif untuk THE FINALS di PC Windows.",
					statusShort:"Aktif",
					delivery:"Pengiriman digital instan",
					platform:"Windows 10 & 11",
					antiCheat:"Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort:"Easy Anti-Cheat didukung",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Tambah ke keranjang",
					monthly:"Bulanan",
					lifetime:"Seumur hidup",
					available:"Tersedia sekarang",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"Paket",
				},
				reviews: {
					title:"Apa kata pemain",
					subtitle:"Umpan balik terbaru dari pembeli THE FINALS Hacks",
					outOf:"dari 5",
					countLabel:"ulasan",
				},
				common: {
					buyNow:"Beli sekarang",
					readGuide:"Baca panduan",
					language:"Bahasa",
					officialLanguageNote:"Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages:"Halaman terkait",
				},
				footer: {
					explore:"Jelajahi",
					help:"Bantuan & legal",
					tagline:"ESP, wallhack, radar, dan Aimbot untuk THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot",
					description:"Cheat THE FINALS untuk THE FINALS di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"Paket THE FINALS di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galeri THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Mengapa THE FINALS Hacks di 2026",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title:"Fitur | Full Feature List",
					description:"Fitur: ESP, soft aim, radar controls. pengiriman digital instan. — PC Windows.",
					h1:"Fitur",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Fitur.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Fitur",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Fitur",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title:"Harga | Monthly & Lifetime",
					description:"Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. — PC Windows.",
					h1:"Harga",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Harga.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Harga",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Harga",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title:"Setup | PC Setup Guide",
					description:"Setup: Windows PC activation and first-launch setup. pengiriman digital instan. — PC Windows.",
					h1:"Setup",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Setup.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Setup",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Setup",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title:"Pembaruan | Easy Anti-Cheat Maintenance Log",
					description:"Pembaruan: Easy Anti-Cheat patch status and rebuild notes. pengiriman digital instan. — PC Windows.",
					h1:"Pembaruan",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Pembaruan.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Pembaruan",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Pembaruan",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. pengiriman digital instan. — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title:"Dukungan | Help & Contact",
					description:"Dukungan: order help and license support contact. pengiriman digital instan. — PC Windows.",
					h1:"Dukungan",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Dukungan.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Dukungan",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Dukungan",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title:"Cheat | Easy Anti-Cheat Safe Status",
					description:"Cheat : maintenance after Easy Anti-Cheat patches. pengiriman digital instan. — PC Windows.",
					h1:"Cheat",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Cheat.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheat",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. pengiriman digital instan. — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. pengiriman digital instan. — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheat THE FINALS 2026 | Buyer Guide",
					description:"Cheat THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. pengiriman digital instan. — PC Windows.",
					h1:"Cheat THE FINALS 2026",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Cheat THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheat THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title:"Cheat THE FINALS | ESP Aimbot Guide",
					description:"Cheat THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. pengiriman digital instan. — PC Windows.",
					h1:"Cheat THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Download Cheat THE FINALS | Instant Access",
					description:"Download Cheat THE FINALS: digital license download after payment. pengiriman digital instan. — PC Windows.",
					h1:"Download Cheat THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Download Cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Download Cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Download Cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Menu mod THE FINALS | In-Game Toggles",
					description:"Menu mod THE FINALS: in-client ESP and soft aim toggles. pengiriman digital instan. — PC Windows.",
					h1:"Menu mod THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Menu mod THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Menu mod THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Menu mod THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. pengiriman digital instan. — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Cheat THE FINALS terbaik | Buyer Checklist",
					description:"Cheat THE FINALS terbaik: what to compare before buying THE FINALS hacks. pengiriman digital instan. — PC Windows.",
					h1:"Cheat THE FINALS terbaik",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Cheat THE FINALS terbaik.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Cheat THE FINALS terbaik",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Cheat THE FINALS terbaik",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. what to compare before buying THE FINALS hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Soft Aim Assist",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. pengiriman digital instan. — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Aimbot hack assist for THE FINALS.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boxes & Loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. pengiriman digital instan. — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Beli THE FINALS Hacks",
					ctaSecondary:"Lihat fitur",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@thefinalshacks.org untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title:"Kebijakan privasi | THE FINALS Hacks",
					description:"Kebijakan privasi for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Kebijakan privasi",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Kebijakan privasi for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org untuk dukungan dan legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Kebijakan refund | THE FINALS Hacks",
					description:"Kebijakan refund for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Kebijakan refund",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Kebijakan refund for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin permanen.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org untuk dukungan dan legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Syarat penggunaan | THE FINALS Hacks",
					description:"Syarat penggunaan for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Syarat penggunaan",
					intro:"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Syarat penggunaan for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks menyediakan ESP wallhack, radar hack, dan the finals aimbot untuk THE FINALS di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org untuk dukungan dan legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home:"หน้าแรก",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"ฟีเจอร์",
					pricing:"ราคา",
					setup:"ติดตั้ง",
					updates:"อัปเดต",
					faq:"FAQ",
					buyNow:"ซื้อเลย",
				},
				hero: {
					accent:"THE FINALS hacks ไม่ถูกตรวจจับ",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack และ Aimbot สำหรับ THE FINALS บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort:"ESP, radar และ Aimbot สำหรับ THE FINALS PC",
					buyNow:"ซื้อเลย",
					seeFeatures:"ดูฟีเจอร์",
				},
				trust: {
					status:"ออนไลน์",
					statusNote:"แพ็กเกจ THE FINALS Hacks พร้อมใช้งานสำหรับ THE FINALS บน Windows PC",
					statusShort:"ใช้งาน",
					delivery:"จัดส่งดิจิทัลทันที",
					platform:"Windows 10 และ 11",
					antiCheat:"รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort:"Easy Anti-Cheat รองรับ",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"เพิ่มในตะกร้า",
					monthly:"รายเดือน",
					lifetime:"ตลอดชีพ",
					available:"พร้อมใช้งาน",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"แพ็กเกจ",
				},
				reviews: {
					title:"ผู้เล่นพูดว่าอย่างไร",
					subtitle:"ความคิดเห็นล่าสุดจากผู้ซื้อ THE FINALS Hacks",
					outOf:"จาก 5",
					countLabel:"รีวิว",
				},
				common: {
					buyNow:"ซื้อเลย",
					readGuide:"อ่านคู่มือ",
					language:"ภาษา",
					officialLanguageNote:"ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages:"หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore:"สำรวจ",
					help:"ช่วยเหลือและกฎหมาย",
					tagline:"ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ THE FINALS — ชำระผ่าน Zadeyo",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack และ Aimbot",
					description:"Cheat THE FINALS สำหรับ THE FINALS บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1:"THE FINALS Hacks — ESP, Wallhack และ Aimbot",
					intro:"แพ็ก สำหรับ THE FINALS บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"แกลเลอรี THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"ทำไมเลือก THE FINALS Hacks ปี 2026",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title:"ฟีเจอร์ | Full Feature List",
					description:"ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"ฟีเจอร์",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ฟีเจอร์.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"ฟีเจอร์",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"ฟีเจอร์",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title:"ราคา | Monthly & Lifetime",
					description:"ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"ราคา",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ราคา.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"ราคา",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"ราคา",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title:"ติดตั้ง | PC Setup Guide",
					description:"ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"ติดตั้ง",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ติดตั้ง.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"ติดตั้ง",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"ติดตั้ง",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title:"อัปเดต | Easy Anti-Cheat Maintenance Log",
					description:"อัปเดต: Easy Anti-Cheat patch status and rebuild notes. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"อัปเดต",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC อัปเดต.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"อัปเดต",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"อัปเดต",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Easy Anti-Cheat patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title:"สนับสนุน | Help & Contact",
					description:"สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"สนับสนุน",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC สนับสนุน.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"สนับสนุน",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"สนับสนุน",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title:"Cheats | Easy Anti-Cheat Safe Status",
					description:"Cheats : maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Cheats",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC 2026 THE FINALS hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC the THE FINALS hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title:"ดาวน์โหลด THE FINALS Hacks | Instant Access",
					description:"ดาวน์โหลด THE FINALS Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"ดาวน์โหลด THE FINALS Hacks",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ดาวน์โหลด THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"ดาวน์โหลด THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"ดาวน์โหลด THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title:"เมนูมอด THE FINALS | In-Game Toggles",
					description:"เมนูมอด THE FINALS: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"เมนูมอด THE FINALS",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC เมนูมอด THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"เมนูมอด THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"เมนูมอด THE FINALS",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title:"Cheat THE FINALS ที่ดีที่สุด | Buyer Checklist",
					description:"Cheat THE FINALS ที่ดีที่สุด: what to compare before buying THE FINALS hacks. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Cheat THE FINALS ที่ดีที่สุด",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Cheat THE FINALS ที่ดีที่สุด.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Cheat THE FINALS ที่ดีที่สุด",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Cheat THE FINALS ที่ดีที่สุด",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC what to compare before buying THE FINALS hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack Aimbot THE FINALS | Soft Aim Assist",
					description:"Hack Aimbot THE FINALS: Aimbot hack assist for THE FINALS. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Hack Aimbot THE FINALS",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Hack Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Aimbot hack assist for THE FINALS.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boxes & Loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"ซื้อ THE FINALS Hacks",
					ctaSecondary:"ดูฟีเจอร์",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@thefinalshacks.org สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title:"นโยบายความเป็นส่วนตัว | THE FINALS Hacks",
					description:"นโยบายความเป็นส่วนตัว for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"นโยบายความเป็นส่วนตัว",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC นโยบายความเป็นส่วนตัว for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org สำหรับการสนับสนุน",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"นโยบายการคืนเงิน | THE FINALS Hacks",
					description:"นโยบายการคืนเงิน for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"นโยบายการคืนเงิน",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC นโยบายการคืนเงิน for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน ถาวร",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org สำหรับการสนับสนุน",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"ข้อกำหนดการใช้งาน | THE FINALS Hacks",
					description:"ข้อกำหนดการใช้งาน for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"ข้อกำหนดการใช้งาน",
					intro:"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC ข้อกำหนดการใช้งาน for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks รวม ESP wallhack, radar hack และ the finals aimbot แบบ สำหรับ THE FINALS บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org สำหรับการสนับสนุน",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home:"Trang chủ",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Tính năng",
					pricing:"Giá",
					setup:"Cài đặt",
					updates:"Cập nhật",
					faq:"FAQ",
					buyNow:"Mua ngay",
				},
				hero: {
					accent:"Cheat THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack và Aimbot cho THE FINALS trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort:"ESP, radar & Aimbot cho THE FINALS PC",
					buyNow:"Mua ngay",
					seeFeatures:"Xem tính năng",
				},
				trust: {
					status:"Trực tuyến",
					statusNote:"Gói THE FINALS Hacks đang hoạt động cho THE FINALS trên PC Windows.",
					statusShort:"Hoạt động",
					delivery:"Giao hàng kỹ thuật số tức thì",
					platform:"Windows 10 & 11",
					antiCheat:"Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort:"Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Thêm vào giỏ",
					monthly:"Hàng tháng",
					lifetime:"Trọn đời",
					available:"Có sẵn ngay",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"Gói",
				},
				reviews: {
					title:"Người chơi nói gì",
					subtitle:"Phản hồi gần đây từ người mua THE FINALS Hacks",
					outOf:"/5",
					countLabel:"đánh giá",
				},
				common: {
					buyNow:"Mua ngay",
					readGuide:"Đọc hướng dẫn",
					language:"Ngôn ngữ",
					officialLanguageNote:"Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages:"Trang liên quan",
				},
				footer: {
					explore:"Khám phá",
					help:"Trợ giúp & pháp lý",
					tagline:"ESP, wallhack, radar và Aimbot cho THE FINALS — thanh toán qua Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot",
					description:"Cheat THE FINALS cho THE FINALS trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"Gói THE FINALS trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Thư viện THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Vì sao chọn THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title:"Tính năng | Full Feature List",
					description:"Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Tính năng",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Tính năng.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Tính năng",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Tính năng",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title:"Giá | Monthly & Lifetime",
					description:"Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Giá",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Giá.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Giá",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Giá",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title:"Cài đặt | PC Setup Guide",
					description:"Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cài đặt",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cài đặt.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Cài đặt",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Cài đặt",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title:"Cập nhật | Easy Anti-Cheat Maintenance Log",
					description:"Cập nhật: Easy Anti-Cheat patch status and rebuild notes. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cập nhật",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cập nhật.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Cập nhật",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cập nhật",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title:"Hỗ trợ | Help & Contact",
					description:"Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Hỗ trợ",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Hỗ trợ.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Hỗ trợ",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Hỗ trợ",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title:"Cheat | Easy Anti-Cheat Safe Status",
					description:"Cheat : maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cheat",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cheat.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheat",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheat THE FINALS 2026 | Buyer Guide",
					description:"Cheat THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cheat THE FINALS 2026",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cheat THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheat THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheat THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title:"Cheat THE FINALS | ESP Aimbot Guide",
					description:"Cheat THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cheat THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Tải Cheat THE FINALS | Instant Access",
					description:"Tải Cheat THE FINALS: digital license download after payment. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Tải Cheat THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Tải Cheat THE FINALS.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Tải Cheat THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Tải Cheat THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Mod menu THE FINALS | In-Game Toggles",
					description:"Mod menu THE FINALS: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Mod menu THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Mod menu THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Mod menu THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Mod menu THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Cheat THE FINALS tốt nhất | Buyer Checklist",
					description:"Cheat THE FINALS tốt nhất: what to compare before buying THE FINALS hacks. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Cheat THE FINALS tốt nhất",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Cheat THE FINALS tốt nhất.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Cheat THE FINALS tốt nhất",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Cheat THE FINALS tốt nhất",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. what to compare before buying THE FINALS hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Soft Aim Assist",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Aimbot hack assist for THE FINALS.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boxes & Loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Mua THE FINALS Hacks",
					ctaSecondary:"Xem tính năng",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title:"Chính sách bảo mật | THE FINALS Hacks",
					description:"Chính sách bảo mật for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Chính sách bảo mật",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Chính sách bảo mật for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Chính sách hoàn tiền | THE FINALS Hacks",
					description:"Chính sách hoàn tiền for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Chính sách hoàn tiền",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Chính sách hoàn tiền for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo vĩnh viễn.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Điều khoản sử dụng | THE FINALS Hacks",
					description:"Điều khoản sử dụng for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Điều khoản sử dụng",
					intro:"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Điều khoản sử dụng for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks cung cấp ESP wallhack, radar hack và the finals aimbot cho THE FINALS trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org cho hỗ trợ và pháp lý.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home:"Головна",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Функції",
					pricing:"Ціни",
					setup:"Встановлення",
					updates:"Оновлення",
					faq:"FAQ",
					buyNow:"Купити",
				},
				hero: {
					accent:"чіти THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack і Aimbot для THE FINALS на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort:"ESP, radar і Aimbot для THE FINALS PC",
					buyNow:"Купити",
					seeFeatures:"Дивитися функції",
				},
				trust: {
					status:"Онлайн",
					statusNote:"Пакет THE FINALS Hacks активний для THE FINALS на Windows PC.",
					statusShort:"Активний",
					delivery:"Миттєва цифрова доставка",
					platform:"Windows 10 і 11",
					antiCheat:"Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort:"Easy Anti-Cheat підтримка",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"До кошика",
					monthly:"Щомісяця",
					lifetime:"Назавжди",
					available:"Доступно зараз",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"пакет",
				},
				reviews: {
					title:"Що кажуть гравці",
					subtitle:"Останні відгуки покупців THE FINALS Hacks",
					outOf:"з 5",
					countLabel:"відгуків",
				},
				common: {
					buyNow:"Купити",
					readGuide:"Читати гайд",
					language:"Мова",
					officialLanguageNote:"Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages:"Пов'язані сторінки",
				},
				footer: {
					explore:"Огляд",
					help:"Допомога та право",
					tagline:"ESP, wallhack, radar і Aimbot для THE FINALS — оплата через Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack і Aimbot",
					description:"чіти THE FINALS для THE FINALS на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая",
					h1:"THE FINALS Hacks — ESP, Wallhack і Aimbot",
					intro:"пакет для THE FINALS на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Галерея THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Чому THE FINALS Hacks у 2026",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. — Windows PC.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. — Windows PC.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title:"Функції | Full Feature List",
					description:"Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. — Windows PC.",
					h1:"Функції",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Функції.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Функції",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Функції",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title:"Ціни | Monthly & Lifetime",
					description:"Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. — Windows PC.",
					h1:"Ціни",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Ціни.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Ціни",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Ціни",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title:"Встановлення | PC Setup Guide",
					description:"Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. — Windows PC.",
					h1:"Встановлення",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Встановлення.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Встановлення",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Встановлення",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title:"Оновлення | Easy Anti-Cheat Maintenance Log",
					description:"Оновлення: Easy Anti-Cheat patch status and rebuild notes. миттєва цифрова доставка. — Windows PC.",
					h1:"Оновлення",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Оновлення.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Оновлення",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Оновлення",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. миттєва цифрова доставка. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title:"Підтримка | Help & Contact",
					description:"Підтримка: order help and license support contact. миттєва цифрова доставка. — Windows PC.",
					h1:"Підтримка",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Підтримка.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Підтримка",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Підтримка",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title:"чіти | Easy Anti-Cheat Safe Status",
					description:"чіти: maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. — Windows PC.",
					h1:"чіти",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. чіти.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"чіти",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"чіти",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. — Windows PC.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. — Windows PC.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. миттєва цифрова доставка. — Windows PC.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Чіти THE FINALS 2026 | Buyer Guide",
					description:"Чіти THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. миттєва цифрова доставка. — Windows PC.",
					h1:"Чіти THE FINALS 2026",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Чіти THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Чіти THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Чіти THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title:"Чіти THE FINALS | ESP Aimbot Guide",
					description:"Чіти THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. миттєва цифрова доставка. — Windows PC.",
					h1:"Чіти THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Чіти THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Чіти THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Чіти THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Завантаження THE FINALS Hacks | Instant Access",
					description:"Завантаження THE FINALS Hacks: digital license download after payment. миттєва цифрова доставка. — Windows PC.",
					h1:"Завантаження THE FINALS Hacks",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Завантаження THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Завантаження THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Завантаження THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Мод-меню THE FINALS | In-Game Toggles",
					description:"Мод-меню THE FINALS: in-client ESP and soft aim toggles. миттєва цифрова доставка. — Windows PC.",
					h1:"Мод-меню THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Мод-меню THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Мод-меню THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Мод-меню THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. миттєва цифрова доставка. — Windows PC.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Найкращі чіти THE FINALS | Buyer Checklist",
					description:"Найкращі чіти THE FINALS: what to compare before buying THE FINALS hacks. миттєва цифрова доставка. — Windows PC.",
					h1:"Найкращі чіти THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Найкращі чіти THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Найкращі чіти THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Найкращі чіти THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. what to compare before buying THE FINALS hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Хак aimbot THE FINALS | Soft Aim Assist",
					description:"Хак aimbot THE FINALS: Aimbot hack assist for THE FINALS. миттєва цифрова доставка. — Windows PC.",
					h1:"Хак aimbot THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Хак aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Хак aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Хак aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Aimbot hack assist for THE FINALS.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Хак ESP THE FINALS | Boxes & Loot",
					description:"Хак ESP THE FINALS: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. — Windows PC.",
					h1:"Хак ESP THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Хак ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Хак ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Хак ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. — Windows PC.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Купити THE FINALS Hacks",
					ctaSecondary:"Дивитися функції",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@thefinalshacks.org для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title:"Політика конфіденційності | THE FINALS Hacks",
					description:"Політика конфіденційності for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Політика конфіденційності",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Політика конфіденційності for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org для підтримки та правових питань.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Політика повернення | THE FINALS Hacks",
					description:"Політика повернення for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Політика повернення",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Політика повернення for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний статус.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org для підтримки та правових питань.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Умови використання | THE FINALS Hacks",
					description:"Умови використання for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Умови використання",
					intro:"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Умови використання for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks об'єднує ESP wallhack, radar hack і the finals aimbot у пакеті для THE FINALS на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org для підтримки та правових питань.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home:"Domů",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funkce",
					pricing:"Ceny",
					setup:"Instalace",
					updates:"Aktualizace",
					faq:"FAQ",
					buyNow:"Koupit",
				},
				hero: {
					accent:"THE FINALS hacky",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack a Aimbot pro THE FINALS na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort:"ESP, radar a Aimbot pro THE FINALS PC",
					buyNow:"Koupit",
					seeFeatures:"Zobrazit funkce",
				},
				trust: {
					status:"Online",
					statusNote:"Balíček THE FINALS Hacks je aktivní pro THE FINALS na Windows PC.",
					statusShort:"Aktivní",
					delivery:"Okamžité digitální doručení",
					platform:"Windows 10 a 11",
					antiCheat:"Podpora údržby Easy Anti-Cheat",
					antiCheatShort:"Easy Anti-Cheat podpora",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Přidat do košíku",
					monthly:"Měsíčně",
					lifetime:"Doživotně",
					available:"Dostupné nyní",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"balíček",
				},
				reviews: {
					title:"Co říkají hráči",
					subtitle:"Nedávná zpětná vazba od kupujících THE FINALS Hacks",
					outOf:"z 5",
					countLabel:"recenzí",
				},
				common: {
					buyNow:"Koupit",
					readGuide:"Číst průvodce",
					language:"Jazyk",
					officialLanguageNote:"Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages:"Související stránky",
				},
				footer: {
					explore:"Prozkoumat",
					help:"Nápověda a právo",
					tagline:"ESP, wallhack, radar a Aimbot pro THE FINALS — checkout přes Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack a Aimbot",
					description:"THE FINALS hacky pro THE FINALS na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1:"THE FINALS Hacks — ESP, Wallhack a Aimbot",
					intro:"balíček pro THE FINALS na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galerie THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Proč THE FINALS Hacks v roce 2026",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title:"Funkce | Full Feature List",
					description:"Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. — Windows PC.",
					h1:"Funkce",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Funkce.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funkce",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funkce",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title:"Ceny | Monthly & Lifetime",
					description:"Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. — Windows PC.",
					h1:"Ceny",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Ceny.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Ceny",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Ceny",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title:"Instalace | PC Setup Guide",
					description:"Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. — Windows PC.",
					h1:"Instalace",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Instalace.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Instalace",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Instalace",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title:"Aktualizace | Easy Anti-Cheat Maintenance Log",
					description:"Aktualizace: Easy Anti-Cheat patch status and rebuild notes. okamžité digitální doručení. — Windows PC.",
					h1:"Aktualizace",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Aktualizace.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Aktualizace",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Aktualizace",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. okamžité digitální doručení. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title:"Podpora | Help & Contact",
					description:"Podpora: order help and license support contact. okamžité digitální doručení. — Windows PC.",
					h1:"Podpora",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Podpora.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Podpora",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Podpora",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title:"cheaty | Easy Anti-Cheat Safe Status",
					description:"cheaty: maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. — Windows PC.",
					h1:"cheaty",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. cheaty.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"cheaty",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"cheaty",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. okamžité digitální doručení. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS hacky 2026 | Buyer Guide",
					description:"THE FINALS hacky 2026: 2026 THE FINALS hacks checklist before checkout. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS hacky 2026",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS hacky 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS hacky 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS hacky 2026",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS hacky | ESP Aimbot Guide",
					description:"THE FINALS hacky: the THE FINALS hacks pillar for ESP and Aimbot. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS hacky",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS hacky.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS hacky",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS hacky",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Stáhnout THE FINALS Hacks | Instant Access",
					description:"Stáhnout THE FINALS Hacks: digital license download after payment. okamžité digitální doručení. — Windows PC.",
					h1:"Stáhnout THE FINALS Hacks",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Stáhnout THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Stáhnout THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Stáhnout THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS mod menu | In-Game Toggles",
					description:"THE FINALS mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS mod menu",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS mod menu.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS mod menu",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS mod menu",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Nejlepší THE FINALS hacky | Buyer Checklist",
					description:"Nejlepší THE FINALS hacky: what to compare before buying THE FINALS hacks. okamžité digitální doručení. — Windows PC.",
					h1:"Nejlepší THE FINALS hacky",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Nejlepší THE FINALS hacky.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Nejlepší THE FINALS hacky",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Nejlepší THE FINALS hacky",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. what to compare before buying THE FINALS hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS aimbot hack | Soft Aim Assist",
					description:"THE FINALS aimbot hack: Aimbot hack assist for THE FINALS. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS aimbot hack",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS aimbot hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS aimbot hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS aimbot hack",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Aimbot hack assist for THE FINALS.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP hack | Boxes & Loot",
					description:"THE FINALS ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS ESP hack",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS ESP hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP hack",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Koupit THE FINALS Hacks",
					ctaSecondary:"Zobrazit funkce",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@thefinalshacks.org pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title:"Zásady ochrany soukromí | THE FINALS Hacks",
					description:"Zásady ochrany soukromí for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Zásady ochrany soukromí",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Zásady ochrany soukromí for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org pro podporu a právní dotazy.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Zásady vrácení peněz | THE FINALS Hacks",
					description:"Zásady vrácení peněz for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Zásady vrácení peněz",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Zásady vrácení peněz for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý stav.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org pro podporu a právní dotazy.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Podmínky použití | THE FINALS Hacks",
					description:"Podmínky použití for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Podmínky použití",
					intro:"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Podmínky použití for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks spojuje ESP wallhack, radar hack a the finals aimbot jako balíček pro THE FINALS na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org pro podporu a právní dotazy.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home:"Acasă",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funcții",
					pricing:"Prețuri",
					setup:"Instalare",
					updates:"Actualizări",
					faq:"FAQ",
					buyNow:"Cumpără",
				},
				hero: {
					accent:"Cheats THE FINALS",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack și Aimbot pentru THE FINALS pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort:"ESP, radar și Aimbot pentru THE FINALS PC",
					buyNow:"Cumpără acum",
					seeFeatures:"Vezi funcții",
				},
				trust: {
					status:"Online",
					statusNote:"Pachetul THE FINALS Hacks este activ pentru THE FINALS pe PC Windows.",
					statusShort:"Activ",
					delivery:"Livrare digitală instantă",
					platform:"Windows 10 și 11",
					antiCheat:"Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort:"Easy Anti-Cheat suportat",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Adaugă în coș",
					monthly:"Lunar",
					lifetime:"Pe viață",
					available:"Disponibil acum",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"Pachet",
				},
				reviews: {
					title:"Ce spun jucătorii",
					subtitle:"Feedback recent de la cumpărătorii THE FINALS Hacks",
					outOf:"din 5",
					countLabel:"recenzii",
				},
				common: {
					buyNow:"Cumpără acum",
					readGuide:"Citește ghidul",
					language:"Limbă",
					officialLanguageNote:"Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages:"Pagini related",
				},
				footer: {
					explore:"Explorează",
					help:"Ajutor și legal",
					tagline:"ESP, wallhack, radar și Aimbot pentru THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack și Aimbot",
					description:"Cheats THE FINALS pentru THE FINALS pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală",
					h1:"THE FINALS Hacks — ESP, Wallhack și Aimbot",
					intro:"Pachet THE FINALS pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"Galerie THE FINALS Hacks — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"De ce THE FINALS Hacks în 2026",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
							],
						},
					],
				},
				"finals-esp": {
					title:"ESP THE FINALS | Player Boxes & Wallhack",
					description:"ESP THE FINALS: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. — PC Windows.",
					h1:"ESP THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. ESP THE FINALS.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"Aimbot THE FINALS | Soft Aim Controls",
					description:"Aimbot THE FINALS: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. — PC Windows.",
					h1:"Aimbot THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"Aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title:"Funcții | Full Feature List",
					description:"Funcții: ESP, soft aim, radar controls. livrare digitală instantă. — PC Windows.",
					h1:"Funcții",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Funcții.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funcții",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funcții",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title:"Prețuri | Monthly & Lifetime",
					description:"Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. — PC Windows.",
					h1:"Prețuri",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Prețuri.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Prețuri",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Prețuri",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title:"Instalare | PC Setup Guide",
					description:"Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. — PC Windows.",
					h1:"Instalare",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Instalare.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Instalare",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Instalare",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title:"Actualizări | Easy Anti-Cheat Maintenance Log",
					description:"Actualizări: Easy Anti-Cheat patch status and rebuild notes. livrare digitală instantă. — PC Windows.",
					h1:"Actualizări",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Actualizări.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Actualizări",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Actualizări",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livrare digitală instantă. — PC Windows.",
					h1:"FAQ",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title:"Suport | Help & Contact",
					description:"Suport: order help and license support contact. livrare digitală instantă. — PC Windows.",
					h1:"Suport",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Suport.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Suport",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Suport",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title:"Cheats | Easy Anti-Cheat Safe Status",
					description:"Cheats : maintenance after Easy Anti-Cheat patches. livrare digitală instantă. — PC Windows.",
					h1:"Cheats",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"Cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title:"Wallhack THE FINALS | ESP Visibility",
					description:"Wallhack THE FINALS: wallhack ESP for players, loot, and distance. livrare digitală instantă. — PC Windows.",
					h1:"Wallhack THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Wallhack THE FINALS.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"Wallhack THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Wallhack THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title:"Radar hack | 2D Threat Overlay",
					description:"Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. — PC Windows.",
					h1:"Radar hack",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Radar hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar hack",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title:"Bypass Easy Anti-Cheat | Patch Maintenance",
					description:"Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for THE FINALS hacks. livrare digitală instantă. — PC Windows.",
					h1:"Bypass Easy Anti-Cheat",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Bypass Easy Anti-Cheat",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Bypass Easy Anti-Cheat",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"Cheats THE FINALS 2026 | Buyer Guide",
					description:"Cheats THE FINALS 2026: 2026 THE FINALS hacks checklist before checkout. livrare digitală instantă. — PC Windows.",
					h1:"Cheats THE FINALS 2026",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Cheats THE FINALS 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"Cheats THE FINALS 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Cheats THE FINALS 2026",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. 2026 THE FINALS hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title:"Cheats THE FINALS | ESP Aimbot Guide",
					description:"Cheats THE FINALS: the THE FINALS hacks pillar for ESP and Aimbot. livrare digitală instantă. — PC Windows.",
					h1:"Cheats THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Cheats THE FINALS.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"Cheats THE FINALS",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Cheats THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title:"Descărcare THE FINALS Hacks | Instant Access",
					description:"Descărcare THE FINALS Hacks: digital license download after payment. livrare digitală instantă. — PC Windows.",
					h1:"Descărcare THE FINALS Hacks",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Descărcare THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"Descărcare THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Descărcare THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title:"Meniu mod THE FINALS | In-Game Toggles",
					description:"Meniu mod THE FINALS: in-client ESP and soft aim toggles. livrare digitală instantă. — PC Windows.",
					h1:"Meniu mod THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Meniu mod THE FINALS.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"Meniu mod THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Meniu mod THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title:"Soft aim THE FINALS | Smooth Aim Settings",
					description:"Soft aim THE FINALS: smooth soft aim settings for Windows PC. livrare digitală instantă. — PC Windows.",
					h1:"Soft aim THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Soft aim THE FINALS.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"Soft aim THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Soft aim THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Cele mai bune cheats THE FINALS | Buyer Checklist",
					description:"Cele mai bune cheats THE FINALS: what to compare before buying THE FINALS hacks. livrare digitală instantă. — PC Windows.",
					h1:"Cele mai bune cheats THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Cele mai bune cheats THE FINALS.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Cele mai bune cheats THE FINALS",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Cele mai bune cheats THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. what to compare before buying THE FINALS hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"Hack aimbot THE FINALS | Soft Aim Assist",
					description:"Hack aimbot THE FINALS: Aimbot hack assist for THE FINALS. livrare digitală instantă. — PC Windows.",
					h1:"Hack aimbot THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Hack aimbot THE FINALS.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"Hack aimbot THE FINALS",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"Hack aimbot THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Aimbot hack assist for THE FINALS.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title:"Hack ESP THE FINALS | Boxes & Loot",
					description:"Hack ESP THE FINALS: ESP hack boxes, loot pins, and distance. livrare digitală instantă. — PC Windows.",
					h1:"Hack ESP THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Hack ESP THE FINALS.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"Hack ESP THE FINALS",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Hack ESP THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title:"Unlock all THE FINALS | What It Means",
					description:"Unlock all THE FINALS: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. — PC Windows.",
					h1:"Unlock all THE FINALS",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Unlock all THE FINALS.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"Unlock all THE FINALS",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Cumpără THE FINALS Hacks",
					ctaSecondary:"Vezi funcții",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Unlock all THE FINALS",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@thefinalshacks.org pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title:"Politica de confidențialitate | THE FINALS Hacks",
					description:"Politica de confidențialitate for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Politica de confidențialitate",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Politica de confidențialitate for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org pentru suport și legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Politica de rambursare | THE FINALS Hacks",
					description:"Politica de rambursare for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Politica de rambursare",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Politica de rambursare for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează permanent.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org pentru suport și legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Termeni de utilizare | THE FINALS Hacks",
					description:"Termeni de utilizare for THE FINALS Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1:"Termeni de utilizare",
					intro:"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Termeni de utilizare for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks combină ESP wallhack, radar hack și the finals aimbot pentru THE FINALS pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org pentru suport și legal.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home:"Hem",
					hacks:"Hacks",
					aimbot:"Aimbot",
					esp:"ESP",
					features:"Funktioner",
					pricing:"Priser",
					setup:"Installation",
					updates:"Uppdateringar",
					faq:"FAQ",
					buyNow:"Köp nu",
				},
				hero: {
					accent:"THE FINALS hacks",
					accentShort:"THE FINALS Hacks",
					subtitle:"ESP wallhack, radar hack och Aimbot för THE FINALS på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort:"ESP, radar & Aimbot för THE FINALS PC",
					buyNow:"Köp nu",
					seeFeatures:"Se funktioner",
				},
				trust: {
					status:"Online",
					statusNote:"THE FINALS Hacks-paketet är live för THE FINALS på Windows PC.",
					statusShort:"Live",
					delivery:"Omedelbar digital leverans",
					platform:"Windows 10 & 11",
					antiCheat:"Easy Anti-Cheat-underhåll stöds",
					antiCheatShort:"Easy Anti-Cheat stöd",
				},
				product: {
					title:"THE FINALS Hacks",
					addToCart:"Lägg i varukorg",
					monthly:"Månadsvis",
					lifetime:"Lifetime",
					available:"Tillgänglig nu",
					gameBadge:"THE FINALS",
					platformBadge:"Windows PC",
					statusBadge:"paket",
				},
				reviews: {
					title:"Vad spelare säger",
					subtitle:"Senaste feedback från THE FINALS Hacks-köpare",
					outOf:"av 5",
					countLabel:"recensioner",
				},
				common: {
					buyNow:"Köp nu",
					readGuide:"Läs guide",
					language:"Språk",
					officialLanguageNote:"Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages:"Relaterade sidor",
				},
				footer: {
					explore:"Utforska",
					help:"Hjälp & juridik",
					tagline:"ESP, wallhack, radar och Aimbot för THE FINALS — checkout via Zadeyo.",
				},
				images: {
					hero:"THE FINALS Hacks hero — ESP and aimbot overlay in THE FINALS",
					espWallhack:"Wallhack outlines showing players and teams through walls",
					aimbotCombat:"Soft aim assist overlay during an THE FINALS raid",
					squadFight:"THE FINALS Hacks combat overlay during a squad fight",
					playerEsp:"Player ESP boxes and distance readouts in a THE FINALS raid",
					headerArt:"Aimbot view and bone priority controls for THE FINALS",
					cheatsPackage:"2D radar threat overlay for THE FINALS",
					rebootFight:"Aimbot assist during a THE FINALS firefight",
					battleRoyale:"THE FINALS Hacks in-raid overview for Windows PC",
					battleRoyaleIsland:"ESP markers for loot and extracts in THE FINALS",
				},
			},
			pages: {
				home: {
					title:"THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot",
					description:"THE FINALS hacks för THE FINALS på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1:"THE FINALS Hacks — ESP, Wallhack & Aimbot",
					intro:"paket för THE FINALS på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt:"THE FINALS ESP player tags hack",
					galleryTitle:"THE FINALS Hacks galleri — ESP, Aimbot, wallhack",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"Varför THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
							],
						},
					],
				},
				"finals-esp": {
					title:"THE FINALS ESP | Player Boxes & Wallhack",
					description:"THE FINALS ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS ESP",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS ESP.",
					imageAlt:"THE FINALS ESP player boxes and distance readouts in a match",
					galleryTitle:"THE FINALS ESP",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS ESP",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"finals-aimbot": {
					title:"THE FINALS Aimbot | Soft Aim Controls",
					description:"THE FINALS Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Aimbot",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Aimbot.",
					imageAlt:"THE FINALS aimbot and soft aim controls on Windows PC",
					galleryTitle:"THE FINALS Aimbot",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Aimbot",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				features: {
					title:"Funktioner | Full Feature List",
					description:"Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. — Windows PC.",
					h1:"Funktioner",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Funktioner.",
					imageAlt:"THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle:"Funktioner",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Funktioner",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title:"Priser | Monthly & Lifetime",
					description:"Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. — Windows PC.",
					h1:"Priser",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Priser.",
					imageAlt:"THE FINALS Hacks store plans for monthly and lifetime licenses",
					galleryTitle:"Priser",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Priser",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				setup: {
					title:"Installation | PC Setup Guide",
					description:"Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. — Windows PC.",
					h1:"Installation",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Installation.",
					imageAlt:"THE FINALS Hacks setup guide screenshot for Windows PC",
					galleryTitle:"Installation",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"Installation",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				updates: {
					title:"Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description:"Uppdateringar: Easy Anti-Cheat patch status and rebuild notes. omedelbar digital leverans. — Windows PC.",
					h1:"Uppdateringar",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Uppdateringar.",
					imageAlt:"THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle:"Uppdateringar",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"Uppdateringar",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				faq: {
					title:"FAQ | Common Answers",
					description:"FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. omedelbar digital leverans. — Windows PC.",
					h1:"FAQ",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. FAQ.",
					imageAlt:"THE FINALS Hacks FAQ — delivery, setup, and update answers",
					galleryTitle:"FAQ",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/support/",
					sections: [
						{
							h2:"FAQ",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				support: {
					title:"Support | Help & Contact",
					description:"Support: order help and license support contact. omedelbar digital leverans. — Windows PC.",
					h1:"Support",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Support.",
					imageAlt:"THE FINALS Hacks support page for license and setup help",
					galleryTitle:"Support",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"Support",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title:"cheats | Easy Anti-Cheat Safe Status",
					description:"cheats: maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. — Windows PC.",
					h1:"cheats",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. cheats.",
					imageAlt:"THE FINALS Hacks status overview for Windows PC",
					galleryTitle:"cheats",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"cheats",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title:"THE FINALS Wallhack | ESP Visibility",
					description:"THE FINALS Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Wallhack",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Wallhack.",
					imageAlt:"THE FINALS wallhack visibility through walls in a match",
					galleryTitle:"THE FINALS Wallhack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS Wallhack",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				radar: {
					title:"Radar Hack | 2D Threat Overlay",
					description:"Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. — Windows PC.",
					h1:"Radar Hack",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Radar Hack.",
					imageAlt:"THE FINALS 2D radar overlay showing nearby threats",
					galleryTitle:"Radar Hack",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"Radar Hack",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				eac: {
					title:"Easy Anti-Cheat Bypass | Patch Maintenance",
					description:"Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for THE FINALS hacks. omedelbar digital leverans. — Windows PC.",
					h1:"Easy Anti-Cheat Bypass",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt:"THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle:"Easy Anti-Cheat Bypass",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/updates/",
					sections: [
						{
							h2:"Easy Anti-Cheat Bypass",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. how Easy Anti-Cheat updates are handled for THE FINALS hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title:"THE FINALS Hacks 2026 | Buyer Guide",
					description:"THE FINALS Hacks 2026: 2026 THE FINALS hacks checklist before checkout. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Hacks 2026",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Hacks 2026.",
					imageAlt:"THE FINALS Hacks product overview for THE FINALS",
					galleryTitle:"THE FINALS Hacks 2026",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/the-finals-hacks/",
					sections: [
						{
							h2:"THE FINALS Hacks 2026",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. 2026 THE FINALS hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title:"THE FINALS Hacks | ESP Aimbot Guide",
					description:"THE FINALS Hacks: the THE FINALS hacks pillar for ESP and Aimbot. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Hacks",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks product page — ESP, aimbot, and radar",
					galleryTitle:"THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. the THE FINALS hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title:"THE FINALS Cheat Download | Instant Access",
					description:"THE FINALS Cheat Download: digital license download after payment. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Cheat Download",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Cheat Download.",
					imageAlt:"THE FINALS Hacks download and install delivery flow",
					galleryTitle:"THE FINALS Cheat Download",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/setup/",
					sections: [
						{
							h2:"THE FINALS Cheat Download",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title:"THE FINALS Mod-meny | In-Game Toggles",
					description:"THE FINALS Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Mod-meny",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Mod-meny.",
					imageAlt:"THE FINALS Hacks in-game menu controls",
					galleryTitle:"THE FINALS Mod-meny",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Mod-meny",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title:"THE FINALS Soft Aim | Smooth Aim Settings",
					description:"THE FINALS Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Soft Aim",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Soft Aim.",
					imageAlt:"THE FINALS soft aim FOV and smoothness settings",
					galleryTitle:"THE FINALS Soft Aim",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Soft Aim",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title:"Bästa THE FINALS Hacks | Buyer Checklist",
					description:"Bästa THE FINALS Hacks: what to compare before buying THE FINALS hacks. omedelbar digital leverans. — Windows PC.",
					h1:"Bästa THE FINALS Hacks",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Bästa THE FINALS Hacks.",
					imageAlt:"THE FINALS Hacks overview for THE FINALS on PC",
					galleryTitle:"Bästa THE FINALS Hacks",
					heroImage:"/images/the-finals-hacks-esp.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/pricing/",
					sections: [
						{
							h2:"Bästa THE FINALS Hacks",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. what to compare before buying THE FINALS hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title:"THE FINALS Aimbot Hack | Soft Aim Assist",
					description:"THE FINALS Aimbot Hack: Aimbot hack assist for THE FINALS. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Aimbot Hack",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Aimbot Hack.",
					imageAlt:"THE FINALS aimbot hack controls and bone priority",
					galleryTitle:"THE FINALS Aimbot Hack",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-aimbot/",
					sections: [
						{
							h2:"THE FINALS Aimbot Hack",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Aimbot hack assist for THE FINALS.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title:"THE FINALS ESP Hack | Boxes & Loot",
					description:"THE FINALS ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS ESP Hack",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS ESP Hack.",
					imageAlt:"THE FINALS ESP hack boxes and loot markers",
					galleryTitle:"THE FINALS ESP Hack",
					heroImage:"/images/the-finals-hacks-wallhack.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/finals-esp/",
					sections: [
						{
							h2:"THE FINALS ESP Hack",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title:"THE FINALS Unlock All | What It Means",
					description:"THE FINALS Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. — Windows PC.",
					h1:"THE FINALS Unlock All",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. THE FINALS Unlock All.",
					imageAlt:"THE FINALS Hacks license features overview",
					galleryTitle:"THE FINALS Unlock All",
					heroImage:"/images/the-finals-hacks-radar.webp",
					ctaPrimary:"Köp THE FINALS Hacks",
					ctaSecondary:"Se funktioner",
					ctaSecondaryHref:"/features/",
					sections: [
						{
							h2:"THE FINALS Unlock All",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@thefinalshacks.org för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title:"Integritetspolicy | THE FINALS Hacks",
					description:"Integritetspolicy for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Integritetspolicy",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Integritetspolicy for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read terms",
					ctaSecondaryHref:"/terms/",
					sections: [
						{
							h2:"Information we collect",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.",
							],
						},
						{
							h2:"How we use data",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
							],
						},
						{
							h2:"Your rights",
							paragraphs: [
								"support@thefinalshacks.org för support och juridik.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				refund: {
					title:"Återbetalningspolicy | THE FINALS Hacks",
					description:"Återbetalningspolicy for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Återbetalningspolicy",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Återbetalningspolicy for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-raid.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Digital delivery",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"Refund approval",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent status.",
							],
						},
						{
							h2:"How to request",
							paragraphs: [
								"support@thefinalshacks.org för support och juridik.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
				terms: {
					title:"Användarvillkor | THE FINALS Hacks",
					description:"Användarvillkor for THE FINALS Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1:"Användarvillkor",
					intro:"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Användarvillkor for thefinalshacks.org and THE FINALS licenses.",
					imageAlt:"thefinals hacks",
					galleryTitle:"thefinals hacks",
					heroImage:"/images/the-finals-hacks-aimbot-view.webp",
					ctaPrimary:"Email support",
					ctaSecondary:"Read privacy",
					ctaSecondaryHref:"/privacy-policy/",
					sections: [
						{
							h2:"Acceptance of terms",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2:"Risk disclaimer",
							paragraphs: [
								"THE FINALS Hacks kombinerar ESP wallhack, radar hack och the finals aimbot som paket för THE FINALS på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2:"Policy changes",
							paragraphs: [
								"support@thefinalshacks.org för support och juridik.",
								"Email: support@thefinalshacks.org",
							],
						},
					],
				},
			},
		},
	};
