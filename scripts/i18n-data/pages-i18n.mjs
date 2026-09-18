import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos THE FINALS indetectables para THE FINALS en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'THE FINALS Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete para THE FINALS en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galería THE FINALS Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen THE FINALS Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches THE FINALS indétectables pour THE FINALS sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'THE FINALS Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack pour THE FINALS sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galerie THE FINALS Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir THE FINALS Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot', desc: ' THE FINALS Hacks für THE FINALS auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'THE FINALS Hacks — ESP, Wallhack & Aimbot', intro: ' Windows PC Paket für THE FINALS: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'THE FINALS Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum THE FINALS Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats THE FINALS indetectáveis para THE FINALS no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'THE FINALS Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote para THE FINALS no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galeria THE FINALS Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher THE FINALS Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat THE FINALS indetectable per THE FINALS su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'THE FINALS Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto per THE FINALS su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galleria THE FINALS Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere THE FINALS Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot', desc: ' THE FINALS hacks voor THE FINALS op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'THE FINALS Hacks — ESP, Wallhack & Aimbot', intro: ' Windows PC pakket voor THE FINALS: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'THE FINALS Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom THE FINALS Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack i Aimbot', desc: ' cheaty THE FINALS dla THE FINALS na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'THE FINALS Hacks — ESP, Wallhack i Aimbot', intro: 'Pakiet dla THE FINALS na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galeria THE FINALS Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego THE FINALS Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack и Aimbot', desc: ' читы THE FINALS для THE FINALS на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'THE FINALS Hacks — ESP, Wallhack и Aimbot', intro: ' пакет для THE FINALS на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Галерея THE FINALS Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают THE FINALS Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'THE FINALS için hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'THE FINALS Hacks — ESP, Wallhack ve Aimbot', intro: 'THE FINALS Windows PC paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'THE FINALS Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden THE FINALS Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'THE FINALS Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش THE FINALS لـ THE FINALS على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'THE FINALS Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة لـ THE FINALS على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'معرض THE FINALS Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا THE FINALS Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'THE FINALS Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'THE FINALS向けチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'THE FINALS Hacks — ESP・Wallhack・Aimbot', intro: 'THE FINALS Windows PC向けパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'THE FINALS hacks hero ESP aimbot wallhack', gallery: 'THE FINALS Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にTHE FINALS Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'THE FINALS 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'THE FINALS Hacks — ESP, Wallhack, Aimbot', intro: 'THE FINALS Windows PC 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'THE FINALS hacks hero ESP aimbot wallhack', gallery: 'THE FINALS Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 THE FINALS Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'THE FINALS Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'THE FINALS 作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'THE FINALS Hacks — ESP、Wallhack、Aimbot', intro: 'THE FINALS Windows PC 套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'THE FINALS hacks hero ESP aimbot wallhack', gallery: 'THE FINALS Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择THE FINALS Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'THE FINALS cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'THE FINALS Hacks — ESP, Wallhack और Aimbot', intro: 'THE FINALS Windows PC पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'THE FINALS hacks hero ESP aimbot wallhack', gallery: 'THE FINALS Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में THE FINALS Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat THE FINALS untuk THE FINALS di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'THE FINALS Hacks — ESP, Wallhack & Aimbot', intro: 'Paket THE FINALS di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galeri THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa THE FINALS Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat THE FINALS สำหรับ THE FINALS บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'THE FINALS Hacks — ESP, Wallhack และ Aimbot', intro: 'แพ็ก สำหรับ THE FINALS บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'แกลเลอรี THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก THE FINALS Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat THE FINALS cho THE FINALS trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'THE FINALS Hacks — ESP, Wallhack & Aimbot', intro: 'Gói THE FINALS trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Thư viện THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn THE FINALS Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack і Aimbot', desc: ' чіти THE FINALS для THE FINALS на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'THE FINALS Hacks — ESP, Wallhack і Aimbot', intro: ' пакет для THE FINALS на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Галерея THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому THE FINALS Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack a Aimbot', desc: ' THE FINALS hacky pro THE FINALS na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'THE FINALS Hacks — ESP, Wallhack a Aimbot', intro: ' balíček pro THE FINALS na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galerie THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč THE FINALS Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats THE FINALS pentru THE FINALS pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'THE FINALS Hacks — ESP, Wallhack și Aimbot', intro: 'Pachet THE FINALS pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'Galerie THE FINALS Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce THE FINALS Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'THE FINALS Hacks 2026 | ESP, Wallhack & Aimbot', desc: ' THE FINALS hacks för THE FINALS på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'THE FINALS Hacks — ESP, Wallhack & Aimbot', intro: ' paket för THE FINALS på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'THE FINALS ESP player tags hack', gallery: 'THE FINALS Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför THE FINALS Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'finals-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'finals-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	: { suffix: 'Easy Anti-Cheat Safe Status', focus: ' maintenance after Easy Anti-Cheat patches', altKeyword: ' cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for THE FINALS hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 THE FINALS hacks checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the THE FINALS hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying THE FINALS hacks', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: ' Aimbot hack assist for THE FINALS', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'finals-esp': 'Cajas de jugador y wallhack',
		'finals-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'finals-esp': 'Boîtes joueur et wallhack',
		'finals-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'finals-esp': 'Spielerboxen & Wallhack',
		'finals-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: ' Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'finals-esp': 'Caixas de jogador e wallhack',
		'finals-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'finals-esp': 'Box giocatore e wallhack',
		'finals-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'finals-esp': 'Боксы игроков и wallhack',
		'finals-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус ',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'THE FINALS Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — THE FINALS Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'finals-esp': { en: 'THE FINALS ESP', es: 'ESP THE FINALS', fr: 'ESP THE FINALS', de: 'THE FINALS ESP', pt: 'ESP THE FINALS', it: 'ESP THE FINALS', nl: 'THE FINALS ESP', pl: 'ESP THE FINALS', ru: 'ESP THE FINALS', tr: 'THE FINALS ESP', ar: 'ESP THE FINALS', ja: 'THE FINALS ESP', ko: 'THE FINALS ESP', zh: 'THE FINALS ESP', hi: 'THE FINALS ESP', id: 'ESP THE FINALS', th: 'THE FINALS ESP', vi: 'ESP THE FINALS', uk: 'ESP THE FINALS', cs: 'THE FINALS ESP', ro: 'ESP THE FINALS', sv: 'THE FINALS ESP' },
	'finals-aimbot': { en: 'THE FINALS Aimbot', es: 'Aimbot THE FINALS', fr: 'Aimbot THE FINALS', de: 'THE FINALS Aimbot', pt: 'Aimbot THE FINALS', it: 'Aimbot THE FINALS', nl: 'THE FINALS Aimbot', pl: 'Aimbot THE FINALS', ru: 'Aimbot THE FINALS', tr: 'THE FINALS Aimbot', ar: 'Aimbot THE FINALS', ja: 'THE FINALS Aimbot', ko: 'THE FINALS Aimbot', zh: 'THE FINALS Aimbot', hi: 'THE FINALS Aimbot', id: 'Aimbot THE FINALS', th: 'THE FINALS Aimbot', vi: 'Aimbot THE FINALS', uk: 'Aimbot THE FINALS', cs: 'THE FINALS Aimbot', ro: 'Aimbot THE FINALS', sv: 'THE FINALS Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	: { en: ' Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: ' Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: ' Cheats', pl: 'Cheaty ', ru: ' читы', tr: ' hileler', ar: 'غش ', ja: 'チート', ko: ' 치트', zh: '作弊', hi: ' cheats', id: 'Cheat ', th: 'Cheats ', vi: 'Cheat ', uk: ' чіти', cs: ' cheaty', ro: 'Cheats ', sv: ' cheats' },
	wallhack: { en: 'THE FINALS Wallhack', es: 'Wallhack THE FINALS', fr: 'Wallhack THE FINALS', de: 'THE FINALS Wallhack', pt: 'Wallhack THE FINALS', it: 'Wallhack THE FINALS', nl: 'THE FINALS Wallhack', pl: 'Wallhack THE FINALS', ru: 'Wallhack THE FINALS', tr: 'THE FINALS Wallhack', ar: 'Wallhack THE FINALS', ja: 'THE FINALS Wallhack', ko: 'THE FINALS Wallhack', zh: 'THE FINALS Wallhack', hi: 'THE FINALS Wallhack', id: 'Wallhack THE FINALS', th: 'THE FINALS Wallhack', vi: 'Wallhack THE FINALS', uk: 'Wallhack THE FINALS', cs: 'THE FINALS Wallhack', ro: 'Wallhack THE FINALS', sv: 'THE FINALS Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'THE FINALS Hacks 2026', es: 'Trucos THE FINALS 2026', fr: 'Triches THE FINALS 2026', de: 'THE FINALS Hacks 2026', pt: 'Cheats THE FINALS 2026', it: 'Cheat THE FINALS 2026', nl: 'THE FINALS Hacks 2026', pl: 'Cheaty THE FINALS 2026', ru: 'Читы THE FINALS 2026', tr: 'THE FINALS Hileleri 2026', ar: 'غش THE FINALS 2026', ja: 'THE FINALS Hacks 2026', ko: 'THE FINALS Hacks 2026', zh: 'THE FINALS作弊 2026', hi: 'THE FINALS Hacks 2026', id: 'Cheat THE FINALS 2026', th: 'THE FINALS Hacks 2026', vi: 'Cheat THE FINALS 2026', uk: 'Чіти THE FINALS 2026', cs: 'THE FINALS hacky 2026', ro: 'Cheats THE FINALS 2026', sv: 'THE FINALS Hacks 2026' },
	hacks: { en: 'THE FINALS Hacks', es: 'Trucos THE FINALS', fr: 'Triches THE FINALS', de: 'THE FINALS Hacks', pt: 'Cheats THE FINALS', it: 'Cheat THE FINALS', nl: 'THE FINALS Hacks', pl: 'Cheaty THE FINALS', ru: 'Читы THE FINALS', tr: 'THE FINALS Hileleri', ar: 'غش THE FINALS', ja: 'THE FINALS Hacks', ko: 'THE FINALS Hacks', zh: 'THE FINALS作弊', hi: 'THE FINALS Hacks', id: 'Cheat THE FINALS', th: 'THE FINALS Hacks', vi: 'Cheat THE FINALS', uk: 'Чіти THE FINALS', cs: 'THE FINALS hacky', ro: 'Cheats THE FINALS', sv: 'THE FINALS Hacks' },
	'cheat-download': { en: 'THE FINALS Cheat Download', es: 'Descarga THE FINALS Hacks', fr: 'Téléchargement THE FINALS Hacks', de: 'THE FINALS Cheat Download', pt: 'Download THE FINALS Hacks', it: 'Download THE FINALS Hacks', nl: 'THE FINALS Cheat Download', pl: 'Pobieranie THE FINALS Hacks', ru: 'Скачать THE FINALS Hacks', tr: 'THE FINALS Hile İndir', ar: 'تحميل THE FINALS Hacks', ja: 'THE FINALS Cheat Download', ko: 'THE FINALS Cheat Download', zh: 'THE FINALS作弊下载', hi: 'THE FINALS Cheat Download', id: 'Download Cheat THE FINALS', th: 'ดาวน์โหลด THE FINALS Hacks', vi: 'Tải Cheat THE FINALS', uk: 'Завантаження THE FINALS Hacks', cs: 'Stáhnout THE FINALS Hacks', ro: 'Descărcare THE FINALS Hacks', sv: 'THE FINALS Cheat Download' },
	'mod-menu': { en: 'THE FINALS Mod Menu', es: 'Menú mod THE FINALS', fr: 'Menu mod THE FINALS', de: 'THE FINALS Mod-Menü', pt: 'Menu mod THE FINALS', it: 'Mod menu THE FINALS', nl: 'THE FINALS Mod Menu', pl: 'Mod menu THE FINALS', ru: 'Мод-меню THE FINALS', tr: 'THE FINALS Mod Menü', ar: 'قائمة مود THE FINALS', ja: 'THE FINALS Mod Menu', ko: 'THE FINALS 모드 메뉴', zh: 'THE FINALS修改菜单', hi: 'THE FINALS Mod Menu', id: 'Menu mod THE FINALS', th: 'เมนูมอด THE FINALS', vi: 'Mod menu THE FINALS', uk: 'Мод-меню THE FINALS', cs: 'THE FINALS mod menu', ro: 'Meniu mod THE FINALS', sv: 'THE FINALS Mod-meny' },
	'soft-aim': { en: 'THE FINALS Soft Aim', es: 'Soft aim THE FINALS', fr: 'Soft aim THE FINALS', de: 'THE FINALS Soft Aim', pt: 'Soft aim THE FINALS', it: 'Soft aim THE FINALS', nl: 'THE FINALS Soft Aim', pl: 'Soft aim THE FINALS', ru: 'Soft aim THE FINALS', tr: 'THE FINALS Soft Aim', ar: 'Soft aim THE FINALS', ja: 'THE FINALS Soft Aim', ko: 'THE FINALS Soft Aim', zh: 'THE FINALS Soft Aim', hi: 'THE FINALS Soft Aim', id: 'Soft aim THE FINALS', th: 'THE FINALS Soft Aim', vi: 'Soft aim THE FINALS', uk: 'Soft aim THE FINALS', cs: 'THE FINALS Soft Aim', ro: 'Soft aim THE FINALS', sv: 'THE FINALS Soft Aim' },
	'best-cheats': { en: 'Best THE FINALS Hacks', es: 'Mejores trucos THE FINALS', fr: 'Meilleures triches THE FINALS', de: 'Beste THE FINALS Hacks', pt: 'Melhores cheats THE FINALS', it: 'Migliori cheat THE FINALS', nl: 'Beste THE FINALS Hacks', pl: 'Najlepsze cheaty THE FINALS', ru: 'Лучшие читы THE FINALS', tr: 'En İyi THE FINALS Hileleri', ar: 'أفضل غش THE FINALS', ja: '最強THE FINALSチート', ko: '최고의 THE FINALS 치트', zh: '最佳THE FINALS作弊', hi: 'सर्वश्रेष्ठ THE FINALS Hacks', id: 'Cheat THE FINALS terbaik', th: 'Cheat THE FINALS ที่ดีที่สุด', vi: 'Cheat THE FINALS tốt nhất', uk: 'Найкращі чіти THE FINALS', cs: 'Nejlepší THE FINALS hacky', ro: 'Cele mai bune cheats THE FINALS', sv: 'Bästa THE FINALS Hacks' },
	'aimbot-hack': { en: 'THE FINALS Aimbot Hack', es: 'Hack aimbot THE FINALS', fr: 'Hack aimbot THE FINALS', de: 'THE FINALS Aimbot Hack', pt: 'Hack aimbot THE FINALS', it: 'Hack aimbot THE FINALS', nl: 'THE FINALS Aimbot Hack', pl: 'Hack aimbot THE FINALS', ru: 'Хак aimbot THE FINALS', tr: 'THE FINALS Aimbot Hilesi', ar: 'هاك Aimbot THE FINALS', ja: 'THE FINALS Aimbot Hack', ko: 'THE FINALS 에임봇 핵', zh: 'THE FINALS自瞄外挂', hi: 'THE FINALS Aimbot Hack', id: 'Hack aimbot THE FINALS', th: 'Hack Aimbot THE FINALS', vi: 'Hack aimbot THE FINALS', uk: 'Хак aimbot THE FINALS', cs: 'THE FINALS aimbot hack', ro: 'Hack aimbot THE FINALS', sv: 'THE FINALS Aimbot Hack' },
	'esp-hack': { en: 'THE FINALS ESP Hack', es: 'Hack ESP THE FINALS', fr: 'Hack ESP THE FINALS', de: 'THE FINALS ESP Hack', pt: 'Hack ESP THE FINALS', it: 'Hack ESP THE FINALS', nl: 'THE FINALS ESP Hack', pl: 'Hack ESP THE FINALS', ru: 'Хак ESP THE FINALS', tr: 'THE FINALS ESP Hilesi', ar: 'هاك ESP THE FINALS', ja: 'THE FINALS ESP Hack', ko: 'THE FINALS ESP 핵', zh: 'THE FINALS ESP外挂', hi: 'THE FINALS ESP Hack', id: 'Hack ESP THE FINALS', th: 'Hack ESP THE FINALS', vi: 'Hack ESP THE FINALS', uk: 'Хак ESP THE FINALS', cs: 'THE FINALS ESP hack', ro: 'Hack ESP THE FINALS', sv: 'THE FINALS ESP Hack' },
	'unlock-all': { en: 'THE FINALS Unlock All', es: 'Unlock all THE FINALS', fr: 'Unlock all THE FINALS', de: 'THE FINALS Unlock All', pt: 'Unlock all THE FINALS', it: 'Unlock all THE FINALS', nl: 'THE FINALS Unlock All', pl: 'Unlock all THE FINALS', ru: 'Unlock all THE FINALS', tr: 'THE FINALS Unlock All', ar: 'Unlock all THE FINALS', ja: 'THE FINALS Unlock All', ko: 'THE FINALS Unlock All', zh: 'THE FINALS Unlock All', hi: 'THE FINALS Unlock All', id: 'Unlock all THE FINALS', th: 'THE FINALS Unlock All', vi: 'Unlock all THE FINALS', uk: 'Unlock all THE FINALS', cs: 'THE FINALS Unlock All', ro: 'Unlock all THE FINALS', sv: 'THE FINALS Unlock All' },
};

const CTA2_HREF = {
	'finals-esp': '/the-finals-hacks/',
	'finals-aimbot': '/finals-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/the-finals-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/the-finals-hacks/',
	wallhack: '/finals-esp/',
	radar: '/finals-esp/',
	eac: '/updates/',
	'cheats-2026': '/the-finals-hacks/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/finals-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/finals-aimbot/',
	'esp-hack': '/finals-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | THE FINALS Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for THE FINALS Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for thefinalshacks.org and THE FINALS licenses.`),
		imageAlt: 'thefinals hacks',
		galleryTitle: 'thefinals hacks',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on thefinalshacks.org.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@thefinalshacks.org',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
