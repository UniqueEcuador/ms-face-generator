/**
 * ============================================================
 * ForwardJuntos — anatomy-mapper.js
 * Core logica: symptomen → zenuwbanen → visuele kaart
 *
 * Bronnen:
 * - Nederlands Herseninstituut (herseninstituut.nl)
 * - Amsterdam UMC MS Centrum
 * - ikhebms.nl (patiëntenperspectief)
 * - PubMed: White matter tract MS mapping
 * - Radiology Key: White Matter Anatomy (DTI)
 * - PLOS One: Optic radiation MS (2018)
 *
 * Disclaimer: Dit is educatief en ondersteunend.
 * Geen medisch advies — altijd een zorgverlener raadplegen.
 * ============================================================
 */

// ── ZENUWBANEN ───────────────────────────────────────────────
// Elk zenuwbaanobject bevat:
//   id, naam, locatie, kleur, svgPath (voor visuele kaart),
//   uitleg (gewone taal), wetenschappelijkeNaam, bronnen

export const ZENUWBANEN = {

  corticospinaal: {
    id: "corticospinaal",
    naam: "Corticospinaal tracé",
    wetenschappelijkeNaam: "Tractus corticospinalis",
    locatie: "hersenschors → capsula interna → hersenstam → ruggenmerg",
    kleur: "#ef4444",        // rood — motorisch
    kleurNaam: "rood",
    categorie: "motorisch",
    uitleg: "Dit is de hoofdweg van je hersenen naar je spieren. Signalen reizen van je hersenschors naar beneden door je ruggenmerg om bewegingen aan te sturen. Een laesie hier verstoort die verbinding — alsof de weg is afgesneden.",
    uitlegKort: "Stuurt bewegingssignalen van hersenen naar spieren",
    symptomenVerbonden: [
      "spierkracht_verlies", "spasticiteit", "loopproblemen",
      "coördinatieproblemen", "vermoeidheid_bij_lopen", "krampen"
    ],
    svgCoordinaten: {
      // Punten op het zenuwstelsel-SVG (relatief 0-100)
      startX: 50, startY: 15,   // hersenschors
      eindX: 50, eindY: 85,     // onderaan ruggenmerg
      waypoints: [
        { x: 50, y: 20 },  // motorische cortex
        { x: 50, y: 35 },  // capsula interna
        { x: 50, y: 50 },  // hersenstam
        { x: 50, y: 70 },  // cervicaal ruggenmerg
        { x: 50, y: 85 },  // lumbaal ruggenmerg
      ]
    },
    bronnen: [
      "Nederlands Herseninstituut — MS onderzoek",
      "Radiology Key: White Matter Anatomy (DTI)",
      "PubMed PMC9723981: Measuring progression in MS"
    ]
  },

  optisch: {
    id: "optisch",
    naam: "Visuele baan",
    wetenschappelijkeNaam: "Nervus opticus + Radiatio optica",
    locatie: "oogzenuw → chiasma opticum → laterale kniebult → visuele cortex",
    kleur: "#f97316",        // oranje — visus
    kleurNaam: "oranje",
    categorie: "visus",
    uitleg: "De oogzenuw is een van de meest kwetsbare plekken bij MS. Signalen van je oog reizen naar de visuele schors achterin je hoofd. Een laesie op de oogzenuw geeft pijn achter het oog en wazig zien. Dit was bij veel mensen het eerste teken van MS.",
    uitlegKort: "Vervoert beeldsignalen van oog naar visuele hersenschors",
    symptomenVerbonden: [
      "wazig_zien", "dubbelzien", "pijn_achter_oog",
      "kleurblindheid_rood_groen", "flikkerlicht", "blindevlek",
      "neuritis_optica"
    ],
    svgCoordinaten: {
      startX: 45, startY: 25,
      eindX: 50, eindY: 10,
      waypoints: [
        { x: 42, y: 28 },  // linker oogzenuw
        { x: 48, y: 30 },  // chiasma
        { x: 52, y: 25 },  // optisch tracé rechts
        { x: 55, y: 12 },  // visuele cortex
      ]
    },
    bronnen: [
      "PLOS One: Optic radiation reconstruction in MS (2018)",
      "ikhebms.nl: MSzien categorie",
      "Amsterdam UMC MS Centrum"
    ]
  },

  cerebellum: {
    id: "cerebellum",
    naam: "Cerebellaire banen",
    wetenschappelijkeNaam: "Tractus spinocerebellaris / Pedunculi cerebellares",
    locatie: "cerebellum ↔ hersenstam ↔ ruggenmerg",
    kleur: "#8b5cf6",        // paars — balans/coördinatie
    kleurNaam: "paars",
    categorie: "motorisch",
    uitleg: "Het cerebellum is je ingebouwde balanscomputer — het verfijnt elke beweging. Laesies in de cerebellaire banen zorgen voor wankelen, slechte coördinatie en soms onduidelijke spraak. Mensen beschrijven het als 'bewegen alsof je dronken bent, maar je bent het niet'.",
    uitlegKort: "Coördineert balans, fijne motoriek en vloeiende beweging",
    symptomenVerbonden: [
      "balansklachten", "wankelen", "dysartrie", "tremor",
      "nystagmus", "coördinatieproblemen", "dysmetrie"
    ],
    svgCoordinaten: {
      startX: 55, startY: 40,
      eindX: 50, eindY: 55,
      waypoints: [
        { x: 58, y: 38 },  // cerebellum
        { x: 55, y: 45 },  // pedunculus
        { x: 52, y: 52 },  // hersenstam
      ]
    },
    bronnen: [
      "Nederlands Herseninstituut MS Research",
      "ikhebms.nl: Balans categorie",
      "PubMed: Cerebellar pathways in MS"
    ]
  },

  spinothalamisch: {
    id: "spinothalamisch",
    naam: "Spinothalamisch tracé",
    wetenschappelijkeNaam: "Tractus spinothalamicus",
    locatie: "ruggenmerg → thalamus → sensorische cortex",
    kleur: "#3b82f6",        // blauw — sensorisch
    kleurNaam: "blauw",
    categorie: "sensorisch",
    uitleg: "Dit tracé vervoert gevoelssignalen — aanraking, pijn, temperatuur — van je lichaam naar je hersenen. Bij MS kan dit tracé beschadigd raken, wat zorgt voor tintelingen, een brandend gevoel, of juist gevoelloosheid. Het Lhermitte-teken (elektrisch schot bij buigen van de nek) is een klassiek signaal van schade hier.",
    uitlegKort: "Vervoert pijn-, temperatuur- en tastprikkels naar de hersenen",
    symptomenVerbonden: [
      "tintelingen", "gevoelloosheid", "brandend_gevoel",
      "lhermitte_teken", "pijn", "temperatuurgevoeligheid",
      "Uhthoff_fenomeen", "hitte_intolerantie"
    ],
    svgCoordinaten: {
      startX: 48, startY: 75,
      eindX: 50, eindY: 20,
      waypoints: [
        { x: 48, y: 75 },  // lumbaal ruggenmerg
        { x: 49, y: 55 },  // thoracaal ruggenmerg
        { x: 49, y: 40 },  // cervicaal ruggenmerg
        { x: 50, y: 25 },  // thalamus
      ]
    },
    bronnen: [
      "Haga Ziekenhuis MS folder",
      "ikhebms.nl: Pijn categorie",
      "UZ Leuven MS informatie"
    ]
  },

  corpusCallosum: {
    id: "corpusCallosum",
    naam: "Corpus callosum",
    wetenschappelijkeNaam: "Corpus callosum",
    locatie: "verbindingsbrug tussen linker en rechter hersenhalf",
    kleur: "#eab308",        // geel — cognitief
    kleurNaam: "geel",
    categorie: "cognitief",
    uitleg: "Het corpus callosum is de grootste verbinding tussen de twee hersenhelften — een brug van miljoenen zenuwvezels. MS-laesies hier zijn een van de meest typische kenmerken (de zogenaamde 'Dawson-vingers'). Schade verstoort de communicatie tussen hersengebieden, wat cognitieve klachten geeft.",
    uitlegKort: "Verbindt linker en rechter hersenhelf — cruciaal voor denken en verwerking",
    symptomenVerbonden: [
      "geheugenproblemen", "concentratieproblemen", "cognitieve_vermoeidheid",
      "trage_informatieverwerking", "aandachtsproblemen",
      "woordvindingsproblemen", "bedragen_uitspreken"
    ],
    svgCoordinaten: {
      startX: 35, startY: 18,
      eindX: 65, eindY: 18,
      waypoints: [
        { x: 35, y: 18 },  // linker hemiseer
        { x: 50, y: 16 },  // midden
        { x: 65, y: 18 },  // rechter hemiseer
      ]
    },
    bronnen: [
      "Medscape: Brain Imaging in MS",
      "ikhebms.nl: Geheugen + Concentratie + Hersenfuncties",
      "PubMed PMC9723981: Transcallosal white matter"
    ]
  },

  reticulair: {
    id: "reticulair",
    naam: "Reticulair activatiesysteem",
    wetenschappelijkeNaam: "Formatio reticularis / ARAS",
    locatie: "hersenstam — door het hele centrale zenuwstelsel",
    kleur: "#22c55e",        // groen — vermoeidheid/energie
    kleurNaam: "groen",
    categorie: "vermoeidheid",
    uitleg: "Dit systeem in je hersenstam regelt bewustzijn, alertheid en slaap-waakcyclus. Bij MS is dit een van de verklaringen voor de karakteristieke MS-vermoeidheid — niet gewone moeheid, maar een uitputting die niet verdwijnt na rust. De batterij laadt niet op.",
    uitlegKort: "Regelt alertheid, energie en de slaap-waakcyclus",
    symptomenVerbonden: [
      "ms_vermoeidheid", "slaapproblemen", "energieschommeling",
      "post_exertionele_malaise", "cognitieve_vermoeidheid",
      "dagelijkse_energieplanning"
    ],
    svgCoordinaten: {
      startX: 50, startY: 45,
      eindX: 50, eindY: 60,
      waypoints: [
        { x: 50, y: 42 },  // hersenstam boven
        { x: 50, y: 50 },  // midden hersenstam
        { x: 50, y: 58 },  // hersenstam onder
      ]
    },
    bronnen: [
      "Amsterdam UMC: MS vermoeidheid onderzoek",
      "ikhebms.nl: Klimmen tegen MS / energie",
      "Nederlands Herseninstituut: ARAS en MS"
    ]
  },

  frontothalamisch: {
    id: "frontothalamisch",
    naam: "Fronto-thalamische verbindingen",
    wetenschappelijkeNaam: "Tractus frontopontinus / Thalamische radiaties",
    locatie: "frontale kwab ↔ thalamus ↔ hippocampus",
    kleur: "#f59e0b",        // amber — geheugen/executief
    kleurNaam: "amber",
    categorie: "cognitief",
    uitleg: "De frontale kwab is je planningscentrum — hier woon je beslissingen, werkgeheugen en sociale inschatting. De verbindingen met de thalamus (je informatiesorteerkamer) en hippocampus (je geheugenopslag) zijn bij MS vaak aangetast. Dit verklaart moeite met plannen, snel afgeleid zijn, en namen of getallen vergeten.",
    uitlegKort: "Verbindt planningscentrum met geheugen en informatiesortering",
    symptomenVerbonden: [
      "geheugenproblemen", "executieve_functies", "planning_problemen",
      "multitasking", "emotieregulatie", "depressie",
      "aandachtsproblemen", "bedragen_uitspreken", "woordvinden"
    ],
    svgCoordinaten: {
      startX: 50, startY: 12,
      eindX: 50, eindY: 28,
      waypoints: [
        { x: 45, y: 10 },  // linker frontale kwab
        { x: 50, y: 15 },  // prefrontale cortex
        { x: 50, y: 22 },  // thalamus
        { x: 50, y: 30 },  // hippocampus
      ]
    },
    bronnen: [
      "ikhebms.nl: Geheugen, Aandacht, Hersenfuncties",
      "Medscape: Cognitive impairment gray matter atrophy MS",
      "Amsterdam UMC MS cognitie onderzoek"
    ]
  },

  autonoom: {
    id: "autonoom",
    naam: "Autonome zenuwbanen",
    wetenschappelijkeNaam: "Tractus autonomici / Nn. autonomici",
    locatie: "hypothalamus → hersenstam → ruggenmerg → organen",
    kleur: "#64748b",        // grijs — autonoom
    kleurNaam: "grijs",
    categorie: "autonoom",
    uitleg: "Het autonome zenuwstelsel regelt lichaamsfuncties die je niet bewust aanstuurt: blaas, darmen, bloeddruk, temperatuurregulatie, seksuele functie. Bij MS zijn deze banen vaak betrokken maar worden zelden als eerste besproken. Blaasproblemen komen voor bij tot 80% van de mensen met MS.",
    uitlegKort: "Regelt blaas, darmen, temperatuur en andere onbewuste functies",
    symptomenVerbonden: [
      "blaasproblemen", "darmklachten", "seksuele_problemen",
      "temperatuurregulatie", "orthostatische_hypotensie",
      "overactieve_blaas", "incontinentie"
    ],
    svgCoordinaten: {
      startX: 50, startY: 22,
      eindX: 50, eindY: 82,
      waypoints: [
        { x: 50, y: 22 },  // hypothalamus
        { x: 50, y: 50 },  // hersenstam
        { x: 50, y: 65 },  // sympathische keten
        { x: 50, y: 80 },  // bekkenzenuwen
      ]
    },
    bronnen: [
      "MS Vereniging NL: Blaas en MS",
      "ikhebms.nl: Overig categorie",
      "UMC Groningen MS neurologie"
    ]
  }
};


// ── SYMPTOMEN CATALOGUS ──────────────────────────────────────
// Gebaseerd op ikhebms.nl categorieën + klinische bronnen
// Elke symptoom heeft: id, naam, categorie, kleur,
//   zenuwbaan, ernst (1-10 schaal), uitlegKort, uitlegVoorFamilie

export const SYMPTOMEN = {

  // MOTORISCH 🔴
  spierkracht_verlies: {
    id: "spierkracht_verlies",
    naam: "Spierkrachtverlies",
    categorie: "motorisch",
    kleur: "#ef4444",
    zenuwbaan: "corticospinaal",
    uitlegKort: "Spieren reageren minder snel of zijn zwakker dan normaal",
    uitlegVoorFamilie: "Bepaalde bewegingen kosten véél meer energie dan jij zou verwachten. Niet doordat die persoon niet wil — de verbinding tussen hersenen en spieren werkt gewoon minder goed.",
    icon: "💪",
    schaal: { min: 1, max: 10, label: "Hoe sterk merk je dit in je dagelijks leven?" }
  },

  loopproblemen: {
    id: "loopproblemen",
    naam: "Loopproblemen",
    categorie: "motorisch",
    kleur: "#ef4444",
    zenuwbaan: "corticospinaal",
    uitlegKort: "Lopen gaat langzamer, wankeler of vermoeit veel sneller",
    uitlegVoorFamilie: "Een wandeling die voor jou normaal is, kan voor iemand met MS al zijn/haar energiereserve opgebruiken. Tempo aanpassen is geen onwil — het is noodzaak.",
    icon: "🚶",
    schaal: { min: 1, max: 10, label: "Hoe beïnvloedt dit jouw bewegingsvrijheid?" }
  },

  spasticiteit: {
    id: "spasticiteit",
    naam: "Spasticiteit & stijfheid",
    categorie: "motorisch",
    kleur: "#ef4444",
    zenuwbaan: "corticospinaal",
    uitlegKort: "Spieren zijn stijf of trekken ongewild samen — ook 's nachts",
    uitlegVoorFamilie: "Spasticiteit is niet hetzelfde als spanning door stress. Het is een neurologisch fenomeen waarbij spieren ongewenst aanspannen, soms pijnlijk, soms ook 's nachts.",
    icon: "⚡",
    schaal: { min: 1, max: 10, label: "Hoe storend is dit voor jouw dagelijks leven?" }
  },

  balansklachten: {
    id: "balansklachten",
    naam: "Balansklachten",
    categorie: "motorisch",
    kleur: "#8b5cf6",
    zenuwbaan: "cerebellum",
    uitlegKort: "Wankelen, moeite met evenwicht, onzeker gevoel bij lopen",
    uitlegVoorFamilie: "Wankelen bij MS is geen kwestie van niet oppassen. Het cerebellum — de balanscomputer — werkt minder goed door laesies. Soms helpt een wandelstok of extra steun.",
    icon: "⚖️",
    schaal: { min: 1, max: 10, label: "Hoe vaak merk je dit en in welke situaties?" }
  },

  tremor: {
    id: "tremor",
    naam: "Tremor (trillen)",
    categorie: "motorisch",
    kleur: "#8b5cf6",
    zenuwbaan: "cerebellum",
    uitlegKort: "Ongewild trillen van handen, hoofd of andere lichaamsdelen",
    uitlegVoorFamilie: "Trillen bij MS is geen zenuwen of angst — het komt door verstoorde signalen vanuit het cerebellum. Het kan erger worden bij vermoeidheid of warmte.",
    icon: "〰️",
    schaal: { min: 1, max: 10, label: "Hoe beïnvloedt dit jouw dagelijkse handelingen?" }
  },

  // SENSORISCH 🔵
  tintelingen: {
    id: "tintelingen",
    naam: "Tintelingen & prikkelingen",
    categorie: "sensorisch",
    kleur: "#3b82f6",
    zenuwbaan: "spinothalamisch",
    uitlegKort: "Prikkelend of tintelig gevoel — in handen, voeten, gezicht of overal",
    uitlegVoorFamilie: "Het voelt als een been dat 'slaapt' — maar dan zonder aanleiding en soms de hele dag. De gevoelszenuwen sturen verstoorde signalen.",
    icon: "✨",
    schaal: { min: 1, max: 10, label: "Hoe vervelend of afleidend is dit voor jou?" }
  },

  gevoelloosheid: {
    id: "gevoelloosheid",
    naam: "Gevoelloosheid",
    categorie: "sensorisch",
    kleur: "#3b82f6",
    zenuwbaan: "spinothalamisch",
    uitlegKort: "Verminderd of afwezig gevoel in bepaalde lichaamsdelen",
    uitlegVoorFamilie: "Iemand kan iets vasthouden zonder het goed te voelen. Dit maakt simpele dingen als knoopjes dichtdoen of een sleutel voelen ingewikkelder dan het lijkt.",
    icon: "🖐️",
    schaal: { min: 1, max: 10, label: "Welke lichaamsdelen zijn betrokken?" }
  },

  pijn: {
    id: "pijn",
    naam: "Pijn",
    categorie: "sensorisch",
    kleur: "#3b82f6",
    zenuwbaan: "spinothalamisch",
    uitlegKort: "Brandende, stekende of diepe pijn — soms zonder duidelijke aanleiding",
    uitlegVoorFamilie: "MS-pijn is neuropathisch — het komt vanuit het zenuwstelsel zelf, niet van een wond of beschadiging die je kunt zien. Het is real, ook als het onzichtbaar is.",
    icon: "🔥",
    schaal: { min: 1, max: 10, label: "Hoe intensief en hoe vaak heb je hier last van?" }
  },

  lhermitte_teken: {
    id: "lhermitte_teken",
    naam: "Lhermitte-teken",
    categorie: "sensorisch",
    kleur: "#3b82f6",
    zenuwbaan: "spinothalamisch",
    uitlegKort: "Elektrisch schot door rug/benen bij bukken van de nek",
    uitlegVoorFamilie: "Als iemand zijn hoofd naar voren buigt en een elektrisch gevoel door zijn rug/benen voelt — dat is het Lhermitte-teken. Een klassiek MS-signaal van schade in de cervicale ruggenmerg.",
    icon: "⚡",
    schaal: { min: 1, max: 10, label: "Hoe vaak treedt dit op?" }
  },

  hitte_intolerantie: {
    id: "hitte_intolerantie",
    naam: "Warmte-gevoeligheid (Uhthoff)",
    categorie: "sensorisch",
    kleur: "#3b82f6",
    zenuwbaan: "spinothalamisch",
    uitlegKort: "Warmte (bad, sport, koorts) verergert tijdelijk de klachten sterk",
    uitlegVoorFamilie: "Het Uhthoff-fenomeen: bij warmte geleiden beschadigde zenuwen nóg minder goed. Een warm bad kan tijdelijk MS-klachten sterk verergeren. Dit gaat vanzelf over als iemand afkoelt.",
    icon: "🌡️",
    schaal: { min: 1, max: 10, label: "Hoe sterk beïnvloedt warmte jouw dagelijks functioneren?" }
  },

  // COGNITIEF 🟡
  geheugenproblemen: {
    id: "geheugenproblemen",
    naam: "Geheugenproblemen",
    categorie: "cognitief",
    kleur: "#eab308",
    zenuwbaan: "corpusCallosum",
    uitlegKort: "Namen, afspraken of woorden vergeten — ook kort na het horen",
    uitlegVoorFamilie: "MS-geheugenproblemen zijn anders dan 'gewoon vergeetachtig zijn'. Informatie die net gezegd is kan al weg zijn. Dat is frustrerend voor beide kanten — geduld en herhaling helpen.",
    icon: "🧩",
    schaal: { min: 1, max: 10, label: "Hoe sterk beïnvloedt dit jouw dagelijks leven en werk?" }
  },

  concentratieproblemen: {
    id: "concentratieproblemen",
    naam: "Concentratieproblemen",
    categorie: "cognitief",
    kleur: "#eab308",
    zenuwbaan: "corpusCallosum",
    uitlegKort: "Moeite om gefocust te blijven, snel afgeleid, draadjes kwijt",
    uitlegVoorFamilie: "Concentratie kost bij MS veel meer energie dan normaal. Na een korte vergadering kan iemand al uitgeput zijn — niet door de inhoud, maar door het mentale werk van erbij blijven.",
    icon: "🎯",
    schaal: { min: 1, max: 10, label: "In welke situaties merk je dit het meest?" }
  },

  trage_informatieverwerking: {
    id: "trage_informatieverwerking",
    naam: "Trage informatieverwerking",
    categorie: "cognitief",
    kleur: "#eab308",
    zenuwbaan: "frontothalamisch",
    uitlegKort: "Informatie komt langzamer binnen en wordt trager verwerkt",
    uitlegVoorFamilie: "Alsof de processor iets langzamer draait. Iemand begrijpt het wél — het duurt gewoon meer tijd. Ruimte geven en niet onderbreken helpt enorm.",
    icon: "⏳",
    schaal: { min: 1, max: 10, label: "Hoe merkbaar is dit bij gesprekken of beslissingen?" }
  },

  bedragen_uitspreken: {
    id: "bedragen_uitspreken",
    naam: "Getallen/bedragen uitspreken",
    categorie: "cognitief",
    kleur: "#f59e0b",
    zenuwbaan: "frontothalamisch",
    uitlegKort: "Cijfers zien maar niet goed kunnen uitspreken — 'kortsluiting' tussen zien en zeggen",
    uitlegVoorFamilie: "Dit klinkt ongeloofwaardig maar is een bekend MS-fenomeen: het getal is zichtbaar in het hoofd, maar het juiste woord komt er niet uit. Niet dom — neurologie.",
    icon: "🔢",
    schaal: { min: 1, max: 10, label: "Hoe vaak heb je hier last van?" }
  },

  woordvindingsproblemen: {
    id: "woordvindingsproblemen",
    naam: "Woordvindingsproblemen",
    categorie: "cognitief",
    kleur: "#f59e0b",
    zenuwbaan: "frontothalamisch",
    uitlegKort: "Woorden liggen op het puntje van de tong maar komen er niet uit",
    uitlegVoorFamilie: "Het woord ís er — maar de verbinding naar uitspreken hapert even. Rustig wachten en niet het woord 'invullen' geeft de ander ruimte.",
    icon: "💬",
    schaal: { min: 1, max: 10, label: "In welke situaties is dit het meest storend?" }
  },

  // VERMOEIDHEID 🟢
  ms_vermoeidheid: {
    id: "ms_vermoeidheid",
    naam: "MS-vermoeidheid",
    categorie: "vermoeidheid",
    kleur: "#22c55e",
    zenuwbaan: "reticulair",
    uitlegKort: "Uitputting die dieper gaat dan normale moeheid — niet herstelbaar door rust alleen",
    uitlegVoorFamilie: "MS-vermoeidheid is niet hetzelfde als gewone moeheid. Het is alsof de batterij op 20% staat maar niet wil opladen. Soms slaat het midden op de dag toe, zonder aanleiding. Het is onzichtbaar maar invaliderend.",
    icon: "🔋",
    schaal: { min: 1, max: 10, label: "Hoeveel procent van je dag word je beperkt door vermoeidheid?" }
  },

  energieschommeling: {
    id: "energieschommeling",
    naam: "Energieschommelingen",
    categorie: "vermoeidheid",
    kleur: "#22c55e",
    zenuwbaan: "reticulair",
    uitlegKort: "Energie varieert sterk per dag, per uur — onvoorspelbaar",
    uitlegVoorFamilie: "Plannen maken is moeilijk als je niet weet hoeveel energie je morgen hebt. Iemand kan gisteren actief zijn geweest en vandaag nauwelijks functioneren — dat is geen grilligheid, dat is MS.",
    icon: "📉",
    schaal: { min: 1, max: 10, label: "Hoe sterk schommelt jouw energie gedurende de week?" }
  },

  cognitieve_vermoeidheid: {
    id: "cognitieve_vermoeidheid",
    naam: "Cognitieve vermoeidheid",
    categorie: "vermoeidheid",
    kleur: "#22c55e",
    zenuwbaan: "reticulair",
    uitlegKort: "Denken kost veel energie — na mentale inspanning plat",
    uitlegVoorFamilie: "Een vergadering, drukke ruimte of moeilijk gesprek kan net zoveel energie kosten als lichamelijke arbeid. Cognitieve vermoeidheid is onzichtbaar maar reëel.",
    icon: "🧠",
    schaal: { min: 1, max: 10, label: "Hoe lang kun je mentaal geconcentreerd werken?" }
  },

  // VISUS 🟠
  wazig_zien: {
    id: "wazig_zien",
    naam: "Wazig zien",
    categorie: "visus",
    kleur: "#f97316",
    zenuwbaan: "optisch",
    uitlegKort: "Eén of beide ogen zien wazig, ook met correcte bril",
    uitlegVoorFamilie: "Wazig zien bij MS heeft niets te maken met de ogen zelf — het is de oogzenuw of het visuele pad in de hersenen. Een andere bril helpt niet.",
    icon: "👁️",
    schaal: { min: 1, max: 10, label: "Hoe sterk en hoe vaak heb je hier last van?" }
  },

  dubbelzien: {
    id: "dubbelzien",
    naam: "Dubbelzien",
    categorie: "visus",
    kleur: "#f97316",
    zenuwbaan: "optisch",
    uitlegKort: "Alles in twee zien — tijdelijk of langdurig",
    uitlegVoorFamilie: "Dubbelzien maakt autorijden, lezen en beeldschermwerk onmogelijk. Het kan tijdelijk zijn bij een schub of aanhouden als er schade is.",
    icon: "👀",
    schaal: { min: 1, max: 10, label: "Hoe beïnvloedt dit jouw dagelijks functioneren?" }
  },

  // EMOTIE/MENTAAL 🟣
  depressie: {
    id: "depressie",
    naam: "Depressieve klachten",
    categorie: "emotie",
    kleur: "#6366f1",
    zenuwbaan: "frontothalamisch",
    uitlegKort: "Somberheid, verlies van interesse of levensvreugde — deel van MS, niet zwakte",
    uitlegVoorFamilie: "Depressie bij MS is deels neurobiologisch — laesies in emotie-regulerende gebieden spelen een rol. Het is geen karakter, geen instelling. Het is een neurologische complicatie die behandeld kan worden.",
    icon: "🌧️",
    schaal: { min: 1, max: 10, label: "Hoe sterk beïnvloedt dit jouw stemming en dagelijks leven?" }
  },

  emotielabiliteit: {
    id: "emotielabiliteit",
    naam: "Emotionele labiliteit",
    categorie: "emotie",
    kleur: "#6366f1",
    zenuwbaan: "frontothalamisch",
    uitlegKort: "Sneller huilen of lachen dan gewoonlijk — emoties moeilijk reguleren",
    uitlegVoorFamilie: "Emoties kunnen sterker of sneller zijn dan gewoonlijk. Dit is geen dramatisch gedrag — de remmen op emotieregulatie zitten in de frontale kwab, die bij MS soms minder goed functioneert.",
    icon: "🎭",
    schaal: { min: 1, max: 10, label: "Hoe vaak en in welke situaties merk je dit?" }
  },

  // AUTONOOM ⚪
  blaasproblemen: {
    id: "blaasproblemen",
    naam: "Blaasproblemen",
    categorie: "autonoom",
    kleur: "#64748b",
    zenuwbaan: "autonoom",
    uitlegKort: "Plotselinge aandrang, frequente toiletbezoeken, of juist moeite met plassen",
    uitlegVoorFamilie: "Blaasproblemen bij MS zijn neurologisch — de blaas ontvangt verkeerde signalen. Dit is een van de meest voorkomende maar zelden besproken MS-klachten.",
    icon: "💧",
    schaal: { min: 1, max: 10, label: "Hoe sterk beïnvloedt dit jouw dagelijks leven?" }
  },

  temperatuurregulatie: {
    id: "temperatuurregulatie",
    naam: "Temperatuurregulatie",
    categorie: "autonoom",
    kleur: "#64748b",
    zenuwbaan: "autonoom",
    uitlegKort: "Moeite om lichaamstemperatuur te reguleren — snel te warm of te koud",
    uitlegVoorFamilie: "Het autonome zenuwstelsel regelt lichaamstemperatuur. Bij MS kan dit systeem minder goed werken — iemand kan snel oververhitten of juist rillen in een warme kamer.",
    icon: "🌡️",
    schaal: { min: 1, max: 10, label: "Hoe sterk merk je dit en in welke omstandigheden?" }
  }
};


// ── CATEGORIEËN ──────────────────────────────────────────────

export const CATEGORIEEN = {
  motorisch: {
    id: "motorisch",
    naam: "Motorisch",
    icon: "🔴",
    kleur: "#ef4444",
    beschrijving: "Beweging, kracht, coördinatie en balans",
    zenuwbanen: ["corticospinaal", "cerebellum"]
  },
  sensorisch: {
    id: "sensorisch",
    naam: "Sensorisch",
    icon: "🔵",
    kleur: "#3b82f6",
    beschrijving: "Gevoel, pijn, tintelingen en temperatuur",
    zenuwbanen: ["spinothalamisch"]
  },
  cognitief: {
    id: "cognitief",
    naam: "Cognitief",
    icon: "🟡",
    kleur: "#eab308",
    beschrijving: "Geheugen, concentratie, denken en communicatie",
    zenuwbanen: ["corpusCallosum", "frontothalamisch"]
  },
  vermoeidheid: {
    id: "vermoeidheid",
    naam: "Vermoeidheid & Energie",
    icon: "🟢",
    kleur: "#22c55e",
    beschrijving: "MS-vermoeidheid, energieschommelingen en pacing",
    zenuwbanen: ["reticulair"]
  },
  visus: {
    id: "visus",
    naam: "Visus & Zien",
    icon: "🟠",
    kleur: "#f97316",
    beschrijving: "Zicht, oogbewegingen en visuele verwerking",
    zenuwbanen: ["optisch"]
  },
  emotie: {
    id: "emotie",
    naam: "Emotie & Mentaal",
    icon: "🟣",
    kleur: "#6366f1",
    beschrijving: "Stemming, emotieregulatie en psychisch welzijn",
    zenuwbanen: ["frontothalamisch"]
  },
  autonoom: {
    id: "autonoom",
    naam: "Autonoom",
    icon: "⚪",
    kleur: "#64748b",
    beschrijving: "Blaas, darmen, temperatuur en onbewuste functies",
    zenuwbanen: ["autonoom"]
  }
};


// ── MAPPER FUNCTIES ──────────────────────────────────────────

/**
 * Geeft zenuwbaan object terug voor een symptoom-id
 * @param {string} symptoomId
 * @returns {object} zenuwbaan
 */
export function getZenuwbaanVoorSymptoom(symptoomId) {
  const symptoom = SYMPTOMEN[symptoomId];
  if (!symptoom) return null;
  return ZENUWBANEN[symptoom.zenuwbaan] || null;
}

/**
 * Geeft alle symptomen terug voor een zenuwbaan-id
 * @param {string} zenuwbaanId
 * @returns {array} symptomen
 */
export function getSymptomenVoorZenuwbaan(zenuwbaanId) {
  return Object.values(SYMPTOMEN).filter(s => s.zenuwbaan === zenuwbaanId);
}

/**
 * Geeft alle symptomen terug voor een categorie
 * @param {string} categorieId
 * @returns {array} symptomen
 */
export function getSymptomenVoorCategorie(categorieId) {
  return Object.values(SYMPTOMEN).filter(s => s.categorie === categorieId);
}

/**
 * Bouwt MS Gezicht profiel op basis van geselecteerde symptomen
 * @param {object} invoer - { naam, symptomen: [{id, ernst}], quote, context }
 * @returns {object} msGezicht profiel
 */
export function bouwMsGezicht(invoer) {
  const { naam, symptomen = [], quote = "", context = {} } = invoer;

  // Bepaal actieve zenuwbanen
  const actieveZenuwbanen = {};
  const categorieScores = {};

  symptomen.forEach(({ id, ernst = 5 }) => {
    const symptoom = SYMPTOMEN[id];
    if (!symptoom) return;

    const zenuwbaan = symptoom.zenuwbaan;
    if (!actieveZenuwbanen[zenuwbaan]) {
      actieveZenuwbanen[zenuwbaan] = { ernst: 0, symptomen: [] };
    }
    actieveZenuwbanen[zenuwbaan].ernst = Math.max(
      actieveZenuwbanen[zenuwbaan].ernst, ernst
    );
    actieveZenuwbanen[zenuwbaan].symptomen.push(id);

    // Categorie scores
    const cat = symptoom.categorie;
    categorieScores[cat] = (categorieScores[cat] || 0) + ernst;
  });

  // Primaire categorie (hoogste score)
  const primaireCat = Object.entries(categorieScores)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || null;

  // Genereer persoonlijk verhaal
  const verhaal = genereerVerhaal(naam, symptomen, primaireCat, quote);

  // Genereer support-tips voor familie
  const familietips = genereerFamilietips(symptomen);

  return {
    naam,
    quote,
    context,
    actieveZenuwbanen,
    categorieScores,
    primaireCat,
    aantalSymptomen: symptomen.length,
    verhaal,
    familietips,
    gegenereerd: new Date().toISOString(),
    disclaimer: "Dit profiel biedt persoonlijk inzicht, geen medische diagnose. Bespreek klachten altijd met je zorgverlener."
  };
}

/**
 * Genereert persoonlijk tekstverhaal
 */
function genereerVerhaal(naam, symptomen, primaireCat, quote) {
  if (!symptomen.length) return "";

  const cat = CATEGORIEEN[primaireCat];
  const topSymptomen = symptomen
    .sort((a, b) => (b.ernst || 5) - (a.ernst || 5))
    .slice(0, 3)
    .map(s => SYMPTOMEN[s.id]?.naam)
    .filter(Boolean);

  const intro = `Voor ${naam || "deze persoon"} heeft MS vooral een ${cat?.naam.toLowerCase() || "persoonlijk"} gezicht.`;

  const midden = topSymptomen.length
    ? `De klachten die het meest opvallen zijn: ${topSymptomen.join(", ")}.`
    : "";

  const persoonlijk = quote
    ? `In eigen woorden: "${quote}"`
    : "";

  return [intro, midden, persoonlijk].filter(Boolean).join(" ");
}

/**
 * Genereert familietips op basis van actieve symptomen
 */
function genereerFamilietips(symptomen) {
  const tips = new Set();

  symptomen.forEach(({ id }) => {
    const symptoom = SYMPTOMEN[id];
    if (symptoom?.uitlegVoorFamilie) {
      tips.add(symptoom.uitlegVoorFamilie);
    }
  });

  return Array.from(tips).slice(0, 5); // max 5 tips
}

/**
 * Exporteer profiel als JSON string
 */
export function exporteerProfiel(profiel) {
  return JSON.stringify(profiel, null, 2);
}

/**
 * Exporteer profiel als leesbare tekst (voor Proton Documents)
 */
export function exporteerAlsTekst(profiel) {
  const lijnen = [
    `MS Gezicht — ${profiel.naam}`,
    `Gegenereerd: ${new Date(profiel.gegenereerd).toLocaleDateString("nl-NL")}`,
    "",
    profiel.verhaal,
    "",
    "── Actieve symptomen ──",
    ...Object.entries(profiel.actieveZenuwbanen).map(([baan, data]) => {
      const zenuwbaan = ZENUWBANEN[baan];
      return `${zenuwbaan?.naam}: ${data.symptomen.map(id => SYMPTOMEN[id]?.naam).join(", ")}`;
    }),
    "",
    "── Tips voor familie & vrienden ──",
    ...profiel.familietips.map((tip, i) => `${i + 1}. ${tip}`),
    "",
    `── ${profiel.disclaimer} ──`,
    "ForwardJuntos · forwardjuntos.nl · Geen medisch advies"
  ];

  return lijnen.join("\n");
}
