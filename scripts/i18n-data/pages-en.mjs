import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'THE FINALS Hacks 2026 | Undetected ESP, Aimbot & Wallhack',
		description:
			'THE FINALS hacks for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.',
		h1: 'THE FINALS Hacks — Undetected ESP, Wallhack & Aimbot',
		intro:
			'THE FINALS Hacks is the undetected thefinals hacks package for Windows PC — built for THE FINALS on Windows PC. THE FINALS esp wallhack, 2D radar, and the finals aimbot with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "THE FINALS Hacks homepage hero — ESP and aimbot for THE FINALS",
		galleryTitle: 'THE FINALS Hacks gallery — ESP, Aimbot and wallhack visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose THE FINALS hacks in 2026',
				'THE FINALS rewards map awareness. THE FINALS Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.finals} and ${EXT.eac}. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/the-finals-hacks/">THE FINALS hacks pillar</a>, <a href="/finals-esp/">ESP guide</a>, <a href="/finals-aimbot/">Aimbot controls</a>, and <a href="/the-finals-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP wallhack, radar hack, and Aimbot in one license',
				'Instead of stacking separate tools, THE FINALS Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for Cashout matches and scav-runs — covering both “thefinals hacks” and “THE FINALS cheats” search intent.',
				'Browse the <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-esp/">wallhack</a>, and <a href="/finals-radar-hack/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'finals-esp': {
		title: 'THE FINALS ESP 2026 | Player Boxes & Wallhack',
		description:
			'THE FINALS ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected thefinals hacks for THE FINALS.',
		h1: 'THE FINALS ESP — Player Boxes & Wallhack',
		intro:
			'THE FINALS esp visibility tools for raid and scav-run. Read enemy squads, players, teams, and bots, loot, and distance before you commit — toggleable the finals esp wallhack overlays bundled in our thefinals hacks package.',
		imageAlt: "THE FINALS ESP player boxes and distance readouts in a match",
		galleryTitle: 'THE FINALS ESP overlay visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'THE FINALS wallhack guide',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'What THE FINALS ESP solves in raids',
				'THE FINALS maps punish incomplete information. THE FINALS Hacks ESP wallhack helps you spot enemy squads early, spot players and teams before they push your angle, and mark high-value loot worth the detour.',
				'On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`THE FINALS’s live seasons and map updates are published by Battlestate Games (${EXT.finals}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports Cashout matches and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/finals-esp/">wallhack page</a> and pair visibility with the <a href="/finals-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and extract awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'THE FINALS Hacks ESP wallhack is maintained for THE FINALS with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/finals-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/the-finals-hacks/">THE FINALS hacks pillar</a> and <a href="/the-finals-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'finals-aimbot': {
		title: 'THE FINALS Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'THE FINALS aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our thefinals hacks package.',
		h1: 'THE FINALS Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for THE FINALS firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "THE FINALS aimbot and soft aim controls on Windows PC",
		galleryTitle: 'THE FINALS Aimbot combat previews',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Aimbot tuned for THE FINALS combat pace',
				'THE FINALS mixes long-range AR fights with close-quarters SMG pushes. THE FINALS Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.finals}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every match.',
				'Prefer softer tracking? Read the <a href="/finals-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/finals-esp/">ESP wallhack</a> and <a href="/finals-radar-hack/">2D radar</a> in the same THE FINALS Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Aimbot',
				'THE FINALS Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major THE FINALS patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'THE FINALS Hacks Features | ESP, Soft Aim & Radar',
		description:
			'Full thefinals hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'THE FINALS Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the THE FINALS Hacks package for THE FINALS on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "THE FINALS Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'THE FINALS Hacks feature gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports Cashout matches and scav-runs. Deep-dive the <a href="/finals-esp/">ESP page</a> and <a href="/finals-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.finals} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live THE FINALS sessions. See <a href="/finals-radar-hack/">radar</a> and <a href="/finals-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/the-finals-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@thefinalshacks.org.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/the-finals-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'THE FINALS Hacks Pricing | $35/mo or $150 Life',
		description:
			'THE FINALS hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'THE FINALS Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected THE FINALS Hacks — ESP wallhack, radar hack, and Aimbot for THE FINALS on Windows PC. Instant digital delivery after payment.',
		imageAlt: "THE FINALS Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'THE FINALS Hacks package visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime THE FINALS Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected THE FINALS Hacks package — ideal if you play THE FINALS regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major THE FINALS patches.',
				`Season calendars and client updates come from ${EXT.finals}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/the-finals-hacks/">THE FINALS hacks</a>, <a href="/the-finals-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'THE FINALS Hacks Setup | Windows PC Guide',
		description:
			'Set up thefinals hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'THE FINALS Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure THE FINALS Hacks for THE FINALS on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.',
		imageAlt: "THE FINALS Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'THE FINALS Hacks setup visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install THE FINALS Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching THE FINALS.',
				`Also glance at ${EXT.status} if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.`,
				'THE FINALS Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, teams, and bots, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, and <a href="/the-finals-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/finals-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After THE FINALS or Easy Anti-Cheat patches',
				'When Battlestate Games ships a major THE FINALS update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/the-finals-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'THE FINALS Hacks Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'THE FINALS hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'THE FINALS Hacks Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and THE FINALS patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "THE FINALS Hacks live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'THE FINALS patch and maintenance visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/the-finals-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'THE FINALS and Easy Anti-Cheat receive frequent patches. THE FINALS Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Battlestate Games platform health and this page for THE FINALS Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/the-finals-hacks/">undetected THE FINALS hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.finals}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'THE FINALS Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'THE FINALS hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'THE FINALS Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected THE FINALS Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and THE FINALS compatibility on Windows PC.',
		imageAlt: "THE FINALS Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'THE FINALS Hacks FAQ visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is THE FINALS Hacks?',
				'THE FINALS Hacks is an undetected cheat package for THE FINALS on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover raid and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/finals-esp/">ESP</a> / <a href="/finals-aimbot/">Aimbot</a> for module detail.',
				`THE FINALS itself is published by Battlestate Games (${EXT.finals}). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.`,
			),
			section(
				'Are THE FINALS Hacks undetected in 2026?',
				'THE FINALS Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/the-finals-hacks/">undetected THE FINALS hacks</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@thefinalshacks.org or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'THE FINALS Hacks Support | Help & Contact',
		description:
			'Contact thefinals hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'THE FINALS Hacks Support — Contact Us',
		intro:
			'Get help with THE FINALS Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for THE FINALS on Windows PC.',
		imageAlt: "THE FINALS Hacks support page for license and setup help",
		galleryTitle: 'THE FINALS Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. THE FINALS Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.',
				`Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@thefinalshacks.org',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected THE FINALS Hacks 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected thefinals hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected THE FINALS Hacks — Easy Anti-Cheat Maintenance',
		intro:
			'How THE FINALS Hacks stays maintained for THE FINALS after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "THE FINALS Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected THE FINALS Hacks visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for THE FINALS Hacks',
				'Undetected THE FINALS Hacks means the package is actively maintained against Easy Anti-Cheat and major THE FINALS patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; THE FINALS client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or THE FINALS updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass THE FINALS guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/the-finals-hacks/">THE FINALS hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'THE FINALS Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'THE FINALS wallhack ESP with player boxes and loot markers for Windows PC. Undetected thefinals hacks — learn overlays and buy.',
		h1: 'THE FINALS Wallhack — ESP Boxes & Visibility',
		intro:
			'THE FINALS wallhack ESP for THE FINALS — see players, loot, bosses, and containers through toggleable wallhack overlays built for Cashout matches and scav-runs.',
		imageAlt: "THE FINALS wallhack visibility through walls in a match",
		galleryTitle: 'THE FINALS wallhack ESP gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'THE FINALS ESP page',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A THE FINALS wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. THE FINALS Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.',
				'For the broader ESP keyword page see <a href="/finals-esp/">THE FINALS ESP</a>; for combat assist see <a href="/finals-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.finals}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/finals-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/the-finals-hacks/">undetected THE FINALS hacks</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/finals-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'THE FINALS Radar Hack 2026 | 2D Threat Overlay',
		description:
			'THE FINALS radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our thefinals hacks package.',
		h1: 'THE FINALS Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for THE FINALS — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "THE FINALS 2D radar overlay showing nearby threats",
		galleryTitle: 'THE FINALS radar hack visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'Why radar hack matters in THE FINALS',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'THE FINALS Hacks radar complements <a href="/finals-esp/">ESP wallhack</a> markers during squad pushes and extract camp fights.',
				`Mode rules and seasonal changes come from ${EXT.finals}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/the-finals-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/finals-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full THE FINALS Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major THE FINALS patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/the-finals-hacks/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'Easy Anti-Cheat Bypass THE FINALS | THE FINALS Hacks Maintenance',
		description:
			'How thefinals hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Easy Anti-Cheat Bypass — THE FINALS Hacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for THE FINALS Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after THE FINALS security updates.',
		imageAlt: "THE FINALS Hacks maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Battlestate Games' anti-cheat for THE FINALS on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`THE FINALS Hacks monitors Easy Anti-Cheat patch notes and THE FINALS seasonal updates from ${EXT.finals} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Battlestate Games service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/the-finals-hacks/">undetected THE FINALS hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'THE FINALS Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best thefinals hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected thefinals hacks with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'THE FINALS Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 THE FINALS Hacks package for THE FINALS — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "THE FINALS Hacks product overview for THE FINALS",
		galleryTitle: 'THE FINALS Hacks 2026 gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why thefinals hacks buyers choose THE FINALS Hacks in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. THE FINALS Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.finals}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/the-finals-hacks/">THE FINALS hacks pillar</a>, <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-esp/">wallhack</a>, <a href="/finals-radar-hack/">radar</a>, <a href="/the-finals-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/the-finals-hacks/">THE FINALS hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/the-finals-hacks/">THE FINALS hacks</a> checklist, <a href="/blog/the-finals-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@thefinalshacks.org via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'THE FINALS Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'THE FINALS hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare thefinals hacks options and buy the full package.',
		h1: 'THE FINALS Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'THE FINALS hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for thefinals hacks in 2026.',
		imageAlt: "THE FINALS Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'THE FINALS hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/the-finals-hacks/',
		sections: [
			section(
				'What THE FINALS hacks include in 2026',
				'Players searching for THE FINALS hacks usually want visibility and combat tools without stacking separate downloads. THE FINALS Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called thefinals hacks.',
				'Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.finals}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this THE FINALS hacks pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/the-finals-hacks/">thefinals hacks 2026</a> and <a href="/the-finals-hacks/">THE FINALS hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/finals-esp/">THE FINALS ESP</a>, <a href="/finals-aimbot/">THE FINALS Aimbot</a>, <a href="/finals-esp/">wallhack</a>, <a href="/finals-radar-hack/">radar hack</a>, and <a href="/finals-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/the-finals-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-the-finals-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-finals-hacks-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'THE FINALS hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. THE FINALS Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/the-finals-hacks/">mod menu</a>, <a href="/finals-aimbot/">aimbot</a>, <a href="/finals-esp/">ESP</a>.',
			),
			section(
				'Undetected THE FINALS hacks with Easy Anti-Cheat maintenance',
				'Undetected THE FINALS hacks require rebuilds after Easy Anti-Cheat and major THE FINALS patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/the-finals-hacks/">undetected THE FINALS hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'THE FINALS Hack Download 2026 | Instant Access',
		description:
			'THE FINALS hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'THE FINALS Hack Download — Instant License Delivery',
		intro:
			'How THE FINALS hack download works for THE FINALS — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "THE FINALS Hacks download and install delivery flow",
		galleryTitle: 'THE FINALS hack download visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How THE FINALS hack download delivery works',
				'After checkout confirms payment, THE FINALS Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Battlestate Games services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every THE FINALS hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for Cashout matches and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When THE FINALS or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/the-finals-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'THE FINALS Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'THE FINALS mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected thefinals hacks package.',
		h1: 'THE FINALS Mod Menu — In-Client Control Panel',
		intro:
			'THE FINALS mod menu controls for THE FINALS — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your THE FINALS session on Windows PC.',
		imageAlt: "THE FINALS Hacks in-game menu controls",
		galleryTitle: 'THE FINALS mod menu gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a THE FINALS mod menu controls',
				'A THE FINALS mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. THE FINALS Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of THE FINALS.',
				'Control deep-dives: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/finals-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for Cashout matches and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.finals} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/finals-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'THE FINALS mod menu behavior is rebuilt when Easy Anti-Cheat or major THE FINALS updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'THE FINALS Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'THE FINALS soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our thefinals hacks with ESP boxes.',
		h1: 'THE FINALS Soft Aim — Smooth Aimbot Controls',
		intro:
			'THE FINALS soft aim settings for THE FINALS — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "THE FINALS soft aim FOV and smoothness settings",
		galleryTitle: 'THE FINALS soft aim gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/finals-aimbot/',
		sections: [
			section(
				'What THE FINALS soft aim means',
				'THE FINALS soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. THE FINALS Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/finals-aimbot/">THE FINALS Aimbot</a>. Alternate wording: <a href="/finals-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.finals} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/finals-esp/">ESP wallhack</a> and <a href="/finals-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with Easy Anti-Cheat maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best THE FINALS Hacks 2026 | Buyer Guide',
		description:
			'Best thefinals hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best THE FINALS Hacks — 2026 Buyer Guide',
		intro:
			'Compare the THE FINALS hacks for THE FINALS in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "THE FINALS Hacks overview for THE FINALS on PC",
		galleryTitle: 'Best THE FINALS hacks gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the THE FINALS hacks in 2026',
				'The THE FINALS hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'THE FINALS Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best THE FINALS hacks feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after THE FINALS patches.',
				'Review <a href="/features/">Features</a>, <a href="/the-finals-hacks/">undetected status</a>, and <a href="/the-finals-hacks/">THE FINALS hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/finals-esp/">ESP</a>, <a href="/finals-aimbot/">Aimbot</a>, <a href="/the-finals-hacks/">hacks</a>.',
			),
			section(
				'Buying the THE FINALS hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'THE FINALS Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'THE FINALS aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our thefinals hacks package.',
		h1: 'THE FINALS Aimbot Hack — Soft Aim Assist',
		intro:
			'THE FINALS aimbot hack tools for THE FINALS — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "THE FINALS aimbot hack controls and bone priority",
		galleryTitle: 'THE FINALS aimbot hack gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/finals-aimbot/',
		sections: [
			section(
				'THE FINALS aimbot hack vs visibility tools',
				'A THE FINALS aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. THE FINALS Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for THE FINALS combat pace across Cashout matches and scav-runs.',
				'Prefer softer tracking language? See <a href="/finals-aimbot/">soft aim</a>. Full settings: <a href="/finals-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.finals} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/finals-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'THE FINALS ESP Hack 2026 | Player Boxes & Loot',
		description:
			'THE FINALS ESP hack with player boxes and loot markers for Windows PC. Undetected thefinals hacks with — see overlays and buy.',
		h1: 'THE FINALS ESP Hack — Player Boxes Guide',
		intro:
			'THE FINALS ESP hack overlays for THE FINALS — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.',
		imageAlt: "THE FINALS ESP hack boxes and loot markers",
		galleryTitle: 'THE FINALS ESP hack gallery',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/finals-esp/',
		sections: [
			section(
				'What a THE FINALS ESP hack shows',
				'A THE FINALS ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/finals-esp/">THE FINALS ESP</a>. Wallhack wording: <a href="/finals-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports Cashout matches and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and THE FINALS patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/finals-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/the-finals-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'THE FINALS Unlock All 2026 | What It Really Means',
		description:
			'THE FINALS unlock all explained vs real thefinals hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'THE FINALS Unlock All — What Players Search For',
		intro:
			'THE FINALS unlock all is a common search term for THE FINALS — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools THE FINALS Hacks actually provides on Windows PC.',
		imageAlt: "THE FINALS Hacks license features overview",
		galleryTitle: 'THE FINALS unlock all guide visuals',
		ctaPrimary: 'Buy THE FINALS Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What THE FINALS unlock all usually means',
				'THE FINALS unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'THE FINALS Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.finals}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/finals-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/the-finals-hacks/">THE FINALS hacks</a> and <a href="/the-finals-hacks/">THE FINALS hacks</a>.',
			),
			section(
				'Buying THE FINALS Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for THE FINALS on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | THE FINALS Hacks',
		description:
			'Privacy policy for THE FINALS Hacks. How we handle support emails, order data, and checkout for thefinals hacks licenses on thefinalshacks.org.',
		h1: 'Privacy Policy',
		intro: 'How THE FINALS Hacks handles information when you browse thefinalshacks.org or contact support about a THE FINALS license.',
		imageAlt: "THE FINALS Hacks privacy policy page",
		galleryTitle: 'THE FINALS Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual THE FINALS Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@thefinalshacks.org with your request details.',
				'Policy updates publish on this page. Continued use of thefinalshacks.org after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | THE FINALS Hacks',
		description:
			'Refund policy for THE FINALS Hacks. Digital delivery terms and eligibility for thefinals hacks packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for THE FINALS Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for THE FINALS.',
		imageAlt: "THE FINALS Hacks refund policy page",
		galleryTitle: 'THE FINALS Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'THE FINALS Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@thefinalshacks.org with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | THE FINALS Hacks Rules',
		description:
			'Terms of use for thefinalshacks.org and THE FINALS Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of thefinalshacks.org and THE FINALS Hacks licenses for THE FINALS on Windows PC.',
		imageAlt: "THE FINALS Hacks terms of use page",
		galleryTitle: 'THE FINALS Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using THE FINALS Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for THE FINALS on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in THE FINALS may violate Battlestate Games terms and result in account penalties. THE FINALS Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/the-finals-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@thefinalshacks.org for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
