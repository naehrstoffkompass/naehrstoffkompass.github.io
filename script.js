"use strict";

const categoryData = [
  { id:"macro", name:"Makronährstoffe & Aminosäuren", intro:"Proteine und Aminosäuren bilden die elementaren Bausteine für Körperstrukturen, Muskulatur und Stoffwechsel.", icon:"🥣" },
  { id:"vitamins", name:"Vitamine", intro:"Lebenswichtige organische Verbindungen, die an unzähligen Stoffwechselprozessen und der Immunabwehr beteiligt sind.", icon:"🍊" },
  { id:"minerals", name:"Mineralstoffe & Spurenelemente", intro:"Anorganische Nährstoffe, die für Knochenbau, Nervenfunktionen und den Elektrolythaushalt unersetzlich sind.", icon:"🌰" },
  { id:"lipids", name:"Essenzielle Fettsäuren & Lipide", intro:"Lebensnotwendige Fette und Öle für Zellmembranen, Hormonhaushalt und kardiovaskuläre Gesundheit.", icon:"🐟" },
  { id:"performance", name:"Performance & Nootropika", intro:"Substanzen zur Unterstützung von mentaler Fokusleistung, Energiebereitstellung und körperlicher Belastbarkeit.", icon:"🍃" },
  { id:"plants", name:"Sekundäre Pflanzenstoffe & Antioxidantien", intro:"Bioaktive Substanzen aus der Natur, die zum Zellschutz und zur Reduktion von oxidativem Stress beitragen.", icon:"🌿" },
  { id:"microbiome", name:"Mikrobiom, Gelenke & Haut", intro:"Nährstoffe und Mikroorganismen zur Unterstützung der Darmflora, des Bindegewebes und der Hautstruktur.", icon:"🫙" }
];

const nutrientsData = [
  // --- 1. VITAMINE (13 Stoffe) ---
  {
    id: "vitamin-a",
    name: "Vitamin A (Retinol)",
    category: "Vitamine",
    funktion: "Unterstützt Sehkraft, Immunsystem, Zellwachstum sowie Haut und Schleimhäute.",
    mangel: "Nachtblindheit, trockene Haut, erhöhte Infektanfälligkeit.",
    tagesbedarf: "Ca. 700–850 µg RAE (DGE)",
    quellen: "Leber, Karotten (als Beta-Carotin), Süßkartoffeln, Spinat, Eigelb.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b1",
    name: "Vitamin B1 (Thiamin)",
    category: "Vitamine",
    funktion: "Unerlässlich für den Kohlenhydratstoffwechsel und die Nervenfunktion.",
    mangel: "Müdigkeit, Reizbarkeit, Gedächtnisstörungen, Beriberi.",
    tagesbedarf: "Ca. 1,0–1,3 mg (DGE)",
    quellen: "Vollkornprodukte, Schweinefleisch, Sonnenblumenkerne, Hülsenfrüchte.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b2",
    name: "Vitamin B2 (Riboflavin)",
    category: "Vitamine",
    funktion: "Beteiligt an Energiegewinnung, Zellschutz und Hautgesundheit.",
    mangel: "Einrisse an den Mundwinkeln (Rhadaden), Hautentzündungen.",
    tagesbedarf: "Ca. 1,1–1,4 mg (DGE)",
    quellen: "Milchprodukte, Eier, Fleisch, Mandeln, Champignons.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b3",
    name: "Vitamin B3 (Niacin)",
    category: "Vitamine",
    funktion: "Wichtig für Energiestoffwechsel, DNA-Reparatur und Nervensystem.",
    mangel: "Pellagra (Hautveränderungen, Durchfall, Demenz).",
    tagesbedarf: "Ca. 12–16 mg NE (DGE)",
    quellen: "Geflügel, Fisch, Erdnüsse, Pilze, Vollkorn.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b5",
    name: "Vitamin B5 (Pantothensäure)",
    category: "Vitamine",
    funktion: "Baustein von Coenzym A, wichtig für Hormonsynthese und Energiestoffwechsel.",
    mangel: "Sehr selten; Taubheitsgefühl in den Zehen ('Burning-Feet-Syndrom').",
    tagesbedarf: "Ca. 5 mg (DGE)",
    quellen: "In fast allen Lebensmitteln (Leber, Eier, Nüsse, Avocados).",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b6",
    name: "Vitamin B6 (Pyridoxin)",
    category: "Vitamine",
    funktion: "Zentral für Aminosäurestoffwechsel, Nerven und Hämoglobinbildung.",
    mangel: "Anämie, Nervenstörungen, Hautveränderungen.",
    tagesbedarf: "Ca. 1,4–1,6 mg (DGE)",
    quellen: "Lachs, Hähnchen, Bananen, Kartoffeln, Walnüsse.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b7",
    name: "Vitamin B7 (Biotin)",
    category: "Vitamine",
    funktion: "Essenziell für Fett-, Kohlenhydrat- und Eiweißstoffwechsel, Haare und Haut.",
    mangel: "Haarausfall, brüchige Nägel, Hautausschläge.",
    tagesbedarf: "Ca. 40 µg (DGE)",
    quellen: "Eigelb, Haferflocken, Nüsse, Sojabohnen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b9",
    name: "Vitamin B9 (Folsäure / Folat)",
    category: "Vitamine",
    funktion: "Unerlässlich für Zellteilung, Blutbildung und Gewebewachstum.",
    mangel: "Megaloblastäre Anämie, erhöhtes Risiko für Neuralrohrdefekte in der Schwangerschaft.",
    tagesbedarf: "Ca. 300 µg (Schwangere 550 µg) (DGE)",
    quellen: "Grünes Blattgemüse, Hülsenfrüchte, Weizenkeime, Orangen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-b12",
    name: "Vitamin B12 (Cobalamin)",
    category: "Vitamine",
    funktion: "Wichtig für Blutbildung, Nervensystem und DNA-Synthese.",
    mangel: "Müdigkeit, Blutarmut, Nervenschäden (Kribbeln in Händen/Füßen).",
    tagesbedarf: "Ca. 4,0 µg (DGE)",
    quellen: "Fleisch, Fisch, Eier, Milchprodukte (für Veganer Supplementierung notwendig).",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-c",
    name: "Vitamin C (Ascorbinsäure)",
    category: "Vitamine",
    funktion: "Antioxidans, fördert Kollagensynthese, Immunsystem und Eisenaufnahme.",
    mangel: "Skorbut (Zahnfleischbluten, verzögerte Wundheilung), Infektanfälligkeit.",
    tagesbedarf: "Ca. 95–110 mg (DGE)",
    quellen: "Paprika, Zitrusfrüchte, Beeren, Brokkoli, Sauerkraut.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 (Cholecalciferol)",
    category: "Vitamine",
    funktion: "Reguliert Kalziumaufnahme, Knochengesundheit, Immunsystem und Muskeln.",
    mangel: "Rachitis bei Kindern, Osteomalazie/Osteoporose bei Erwachsenen, Immunschwäche.",
    tagesbedarf: "Ca. 20 µg (800 IE) bei fehlender Eigen-Synthese durch Sonnenlicht (DGE)",
    quellen: "Sonnenlicht (UVB), Fettreicher Fisch (Lachs, Makrele), Eigelb.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-e",
    name: "Vitamin E (Tocopherol)",
    category: "Vitamine",
    funktion: "Wichtigstes fettlösliches Antioxidans zum Schutz der Zellmembranen.",
    mangel: "Sehr selten; Nervenstörungen, Muskel-Schwäche.",
    tagesbedarf: "Ca. 12–15 mg (DGE)",
    quellen: "Pflanzenöle (Weizenkeimöl, Sonnenblumenöl), Nüsse, Mandeln.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "vitamin-k2",
    name: "Vitamin K2 (Menachinon)",
    category: "Vitamine",
    funktion: "Essenziell für die Blutgerinnung und den Einbau von Kalzium in die Knochen.",
    mangel: "Erhöhte Neigung zu Blutungen, geschwächte Knochendichte.",
    tagesbedarf: "Ca. 60–80 µg (Gesamt-Vitamin K) (DGE)",
    quellen: "Fermentierte Lebensmittel (Natto, Kefe), Hartkäse, Eigelb.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "magnesium",
    name: "Magnesium",
    category: "Mineralstoffe",
    funktion: "Cofaktor für >300 Enzymreaktionen, Muskel- und Nervenfunktion, Knochen.",
    mangel: "Muskelkrämpfe, Unruhe, Kopfschmerzen, Herzrhythmusstörungen.",
    tagesbedarf: "Ca. 300–400 mg (DGE)",
    quellen: "Kürbiskerne, Mandeln, Haferflocken, Hülsenfrüchte, dunkle Schokolade.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "kalzium",
    name: "Kalzium",
    category: "Mineralstoffe",
    funktion: "Hauptbaustein für Knochen und Zähne, wichtig für Blutgerinnung und Muskeln.",
    mangel: "Osteoporose, Muskelkrämpfe, brüchige Nägel.",
    tagesbedarf: "Ca. 1000 mg (DGE)",
    quellen: "Milchprodukte, grüne Gemüsesorten (Grünkohl, Brokkoli), Mineralwasser.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "kalium",
    name: "Kalium",
    category: "Mineralstoffe",
    funktion: "Reguliert Elektrolythaushalt, Blutdruck und Impulsweiterleitung der Nerven.",
    mangel: "Muskelschwäche, Verstopfung, Herzrhythmusstörungen.",
    tagesbedarf: "Ca. 4000 mg (DGE)",
    quellen: "Bananen, Kartoffeln, Trockenobst, Tomatenmark, Spinat.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "zink",
    name: "Zink",
    category: "Mineralstoffe",
    funktion: "Unterstützt Immunsystem, Wundheilung, Hautgesundheit und Testosteronhaushalt.",
    mangel: "Infektanfälligkeit, Wundheilungsstörungen, Haarausfall, Hautprobleme.",
    tagesbedarf: "Ca. 8–14 mg (DGE)",
    quellen: "Austern, Rindfleisch, Kürbiskerne, Käse, Haferflocken.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "eisen",
    name: "Eisen",
    category: "Mineralstoffe",
    funktion: "Sauerstofftransport im Blut (Hämoglobin) und Energiestoffwechsel.",
    mangel: "Anämie, Blässe, chronische Müdigkeit, Brüchige Fingernägel.",
    tagesbedarf: "Ca. 10–15 mg (DGE)",
    quellen: "Rotes Fleisch, Linsen, Kürbiskerne, Spinat (Aufnahme mit Vitamin C steigern).",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "selen",
    name: "Selen",
    category: "Mineralstoffe",
    funktion: "Zellschutz vor oxidativem Stress, Schilddrüsenfunktion, Immunsystem.",
    mangel: "Schilddrüsenprobleme, geschwächte Abwehrkräfte, Nagel-Veränderungen.",
    tagesbedarf: "Ca. 60–70 µg (DGE)",
    quellen: "Paranüsse, Fisch, Eier, Pilze, Linsen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "jod",
    name: "Jod",
    category: "Mineralstoffe",
    funktion: "Essenziell für die Produktion von Schilddrüsenhormonen und Stoffwechsel.",
    mangel: "Schilddrüsenvergrößerung (Kropf/Kropfbildung), Müdigkeit, Gewichtszunahme.",
    tagesbedarf: "Ca. 180–200 µg (DGE)",
    quellen: "Jodiertes Speisesalz, Seefisch, Meeresalgen, Milchprodukte.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "kupfer",
    name: "Kupfer",
    category: "Mineralstoffe",
    funktion: "Beteiligt an Eisenaufnahme, Bindegewebsbildung und Nervensystem.",
    mangel: "Blutarmut, Pigmentstörungen von Haut/Haaren, Knochenschwäche.",
    tagesbedarf: "Ca. 1,0–1,5 mg (DGE)",
    quellen: "Innereien, Schalentiere, Nüsse, Kakao, Vollkorn.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "mangan",
    name: "Mangan",
    category: "Mineralstoffe",
    funktion: "Aktiviert Enzyme für Knorpel- und Knochenaufbau sowie Antioxidationsschutz.",
    mangel: "Sehr selten; Knorpelschäden, gestörter Fett- und Kohlenhydratstoffwechsel.",
    tagesbedarf: "Ca. 2,0–5,0 mg (DGE)",
    quellen: "Haferflocken, Vollkorn, Haselnüsse, schwarzer Tee.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "chrom",
    name: "Chrom",
    category: "Mineralstoffe",
    funktion: "Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels bei.",
    mangel: "Blutzuckerschwankungen, verringerte Glukosetoleranz.",
    tagesbedarf: "Ca. 30–100 µg (DGE)",
    quellen: "Bierhefe, Vollkorn, Fleisch, Nüsse, Brokkoli.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "molybdaen",
    name: "Molybdän",
    category: "Mineralstoffe",
    funktion: "Beteiligt am Abbau schwefelhaltiger Aminosäuren und Harnsäure.",
    mangel: "Sehr selten; Übelkeit, Herzrasen, Orientierungslosigkeit.",
    tagesbedarf: "Ca. 50–100 µg (DGE)",
    quellen: "Hülsenfrüchte, Nüsse, Getreide, rotblättriges Gemüse.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA/DGE)"
  },
  {
    id: "leucin",
    name: "L-Leucin (BCAA)",
    category: "Aminosäuren",
    funktion: "Stimuliert die Muskelproteinsynthese (mTOR-Pfad) und Muskelreparatur.",
    mangel: "Muskelabbau, verlangsamte Regeneration.",
    tagesbedarf: "Ca. 39 mg/kg Körpergewicht (WHO)",
    quellen: "Molkenprotein, Rindfleisch, Hähnchen, Linsen, Eier.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "isoleucin",
    name: "L-Isoleucin (BCAA)",
    category: "Aminosäuren",
    funktion: "Reguliert die Energieversorgung des Muskelgewebes und Blutzucker.",
    mangel: "Muskelverlust, Erschöpfung, Blutzuckerschwankungen.",
    tagesbedarf: "Ca. 20 mg/kg Körpergewicht (WHO)",
    quellen: "Fisch, Geflügel, Nüsse, Linsen, Käse.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "valin",
    name: "L-Valin (BCAA)",
    category: "Aminosäuren",
    funktion: "Wichtig für das Muskelwachstum, Gewebereparatur und Koordination.",
    mangel: "Gestörte Regeneration, Nervenempfindlichkeit.",
    tagesbedarf: "Ca. 26 mg/kg Körpergewicht (WHO)",
    quellen: "Eier, Milchprodukte, Erdnüsse, Haferflocken.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "glutamin",
    name: "L-Glutamin",
    category: "Aminosäuren",
    funktion: "Hauptenergiequelle für Darmzellen und Immunsystem, unterstützt Darmschleimhaut.",
    mangel: "Darmprobleme (Leaky Gut), erhöhte Infektanfälligkeit bei Belastung.",
    tagesbedarf: "Bedarf steigt bei Stress & intensivem Sport deutlich an.",
    quellen: "Quark, Eier, Fleisch, Sojabohnen, Dinkel.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "arginin",
    name: "L-Arginin",
    category: "Aminosäuren",
    funktion: "Vorstufe von Stickstoffmonoxid (NO), fördert Durchblutung und Gefäßweite.",
    mangel: "Bluthochdruck, Durchblutungsstörungen, verringerte Pumpleistung.",
    tagesbedarf: "Körpereigene Synthese, aber bei Belastung oft erhöht.",
    quellen: "Kürbiskerne, Erdnüsse, Putenbrust, Lachs.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "citrullin",
    name: "L-Citrullin",
    category: "Aminosäuren",
    funktion: "Wird im Körper zu Arginin umgewandelt und steigert die NO-Produktion nachhaltig.",
    mangel: "Reduzierte Ausdauer, verringerte Muskeldurchblutung.",
    tagesbedarf: "Synthese im Körper, als Supplement im Sport beliebt (3–6g).",
    quellen: "Wassermelone, Gurke, Kürbis.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "lysine",
    name: "L-Lysin",
    category: "Aminosäuren",
    funktion: "Baustein für Kollagensynthese, Immunsystem und Calciumabsorption.",
    mangel: "Wachstumsstörungen, Immunschwäche, Infektanfälligkeit (z.B. Herpes).",
    tagesbedarf: "Ca. 30 mg/kg Körpergewicht (WHO)",
    quellen: "Fleisch, Fisch, Eier, Tofu, Linsen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "carnitin",
    name: "L-Carnitin",
    category: "Aminosäuren",
    funktion: "Transportiert langkettige Fettsäuren in die Mitochondrien zur Verbrennung.",
    mangel: "Muskelschwäche, schnelle Ermüdung.",
    tagesbedarf: "Eigenherstellung aus Lysin/Methionin; Aufnahme über Nahrung.",
    quellen: "Rindfleisch, Lammfleisch, Wild.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "omega-3-epa",
    name: "Omega-3 EPA (Eicosapentaensäure)",
    category: "Fettsäuren",
    funktion: "Hemmt Entzündungen im Körper, unterstützt Herzgesundheit und Blutdruck.",
    mangel: "Erhöhte Entzündungswerte, trockenes Auge, Herz-Kreislauf-Risiko.",
    tagesbedarf: "Mind. 250 mg EPA + DHA kombiniert (EFSA)",
    quellen: "Lachs, Makrele, Hering, Algenöl.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "omega-3-dha",
    name: "Omega-3 DHA (Docosahexaensäure)",
    category: "Fettsäuren",
    funktion: "Zentraler Baustein für Gehirnstruktur, Sehfunktion und Nervenzellen.",
    mangel: "Konzentrationsschwäche, Sehstörungen, Stimmungsschwankungen.",
    tagesbedarf: "Mind. 250 mg EPA + DHA kombiniert (EFSA)",
    quellen: "Algenöl, fettreicher Seefisch, Krillöl.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "ala-omega-3",
    name: "Alpha-Linolensäure (ALA)",
    category: "Fettsäuren",
    funktion: "Pflanzliche Omega-3-Fettsäure; trägt zur Aufrechterhaltung normaler Cholesterinspiegel bei.",
    mangel: "Hautveränderungen, verlangsamtes Wachstum.",
    tagesbedarf: "Ca. 0,5 % der täglichen Energieaufnahme (DGE)",
    quellen: "Leinöl, Chia-Samen, Walnüsse, Rapsöl.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "mct-oel",
    name: "MCT-Fettsäuren (Mittelkettige Triglyceride)",
    category: "Fettsäuren",
    funktion: "Werden direkt in der Leber zu Ketonkörpern umgewandelt; schnelle Energie ohne Fettspeicherung.",
    mangel: "Kein klassischer Mangelzustand da nicht essenziell.",
    tagesbedarf: "Kein fester Richtwert; flexibel dosierbar.",
    quellen: "Kokosöl, Palmkernöl, reines MCT-Öl (Capryl-/Caprinsäure).",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "lecithin",
    name: "Lecithin (Phosphatidylcholin)",
    category: "Fettsäuren",
    funktion: "Zellmembran-Baustein, schützt die Leber und ist Vorstufe des Neurotransmitters Acetylcholin.",
    mangel: "Fettleber-Risiko, Gedächtnisseinbußen.",
    tagesbedarf: "Ca. 400 mg Cholin-Äquivalent (EFSA)",
    quellen: "Eigelb, Sojabohnen, Sonnenblumenkerne.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "coenzym-q10",
    name: "Coenzym Q10 (Ubiquinol)",
    category: "Pflanzenstoffe",
    funktion: "Schlüsselelement der Energieproduktion (ATP) in den Mitochondrien und Antioxidans.",
    mangel: "Abnehmende Eigenproduktion ab dem 30. Lebensjahr; Muskel- und Herzschwäche.",
    tagesbedarf: "Keine offizielle DGE-Empfehlung; oft 50–200 mg ergänzt.",
    quellen: "Innereien, Nüsse, fettiger Fisch, Hülsenfrüchte.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "curcumin",
    name: "Curcumin (Kurkuma-Extrakt)",
    category: "Pflanzenstoffe",
    funktion: "Stark entzündungshemmender Pflanzenstoff, unterstützt Gelenke und Verdauung.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Aufnahme am besten in Kombination mit Piperin (schwarzer Pfeffer).",
    quellen: "Kurkumawurzel, Curcumin-Extrakt.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "astaxanthin",
    name: "Astaxanthin",
    category: "Pflanzenstoffe",
    funktion: "Sehr starkes Carotinoid-Antioxidans, schützt Haut und Augen vor UV- und Oxidationsschäden.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Typische Dosierungen in Studien: 4–8 mg täglich.",
    quellen: "Blutregenalge (Haematococcus pluvialis), Lachs, Garnelen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "opc-traubenkern",
    name: "OPC (Oligomere Proanthocyanidine)",
    category: "Pflanzenstoffe",
    funktion: "Schützt Kollagenstrukturen in Gefäßen und Haut, starker Radikalfänger.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Kein fester DGE-Wert.",
    quellen: "Traubenkerne, Pinienrinde, rote Traubenschalen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "sulforaphan",
    name: "Sulforaphan",
    category: "Pflanzenstoffe",
    funktion: "Aktiviert körpereigene Entgiftungsenzyme (Nrf2-Pfad) und schützt Zellen.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Kein DGE-Wert.",
    quellen: "Brokkolisprossen, Brokkoli, Blumenkohl, Rucola.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "kreatin",
    name: "Kreatin-Monohydrat",
    category: "Performance",
    funktion: "Erhöht die körperliche Leistung bei schnellkraftbasiertem Training durch ATP-Regeneration.",
    mangel: "Geringere Schnellkraftreserven (vor allem bei vegetarischer Ernährung).",
    tagesbedarf: "3 g täglich für den nachgewiesenen positiven Effekt (EFSA Claim).",
    quellen: "Rindfleisch, Schweinefleisch, Hering, Kabeljau.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "beta-alanin",
    name: "Beta-Alanin",
    category: "Performance",
    funktion: "Vorstufe von Carnosin; puffert Milchsäure in den Muskeln ab und verzögert Muskelermüdung.",
    mangel: "Kein essenzieller Mangel; verringerte Übersäuerungstoleranz.",
    tagesbedarf: "Typische Einnahme: 3,2–6,4 g täglich über mehrere Wochen.",
    quellen: "Fleisch (besonders Geflügel), Fisch.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "kollagen-peptide",
    name: "Kollagen-Peptide",
    category: "Performance",
    funktion: "Strukturprotein für Bindegewebe, Gelenkknorpel, Haut, Sehnen und Bänder.",
    mangel: "Abnahme mit steigendem Alter; Faltenbildung, Gelenkverschleiß.",
    tagesbedarf: "Kein offizieller Wert; oft 5–15 g hydrolysiertes Kollagen studiert.",
    quellen: "Knochenbrühe, Gelatine, Kollagen-Hydrolysat.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "glucosamin",
    name: "Glucosaminsulfat",
    category: "Performance",
    funktion: "Natürlicher Bestandteil des Bindegewebes, der Knorpel und der Gelenkflüssigkeit.",
    mangel: "Gelenkverschleiß, steife Gelenke im Alter.",
    tagesbedarf: "Häufig 1200–1500 mg in Gelenkkomplexen.",
    quellen: "Krebstiere (Krabben- und Krabbenschalen).",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "probiotika",
    name: "Probiotische Kulturen",
    category: "Darmgesundheit",
    funktion: "Unterstützen eine ausgewogene Darmflora, Verdauung und die Immunabwehr im Darm.",
    mangel: "Dysbiose (Fehlbesiedlung des Darms, oft nach Antibiotika), Blähungen.",
    tagesbedarf: "Kein fester Wert; Dosierung in KBE (Koloniebildende Einheiten).",
    quellen: "Joghurt, Kefir, Sauerkraut, Kimchi, Kombucha.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "inulin",
    name: "Inulin (Präbiotikum)",
    category: "Darmgesundheit",
    funktion: "Löslicher Ballaststoff, dient nützlichen Darmbakterien (Bifidobakterien) als Nahrung.",
    mangel: "Träge Verdauung, verringerte Vielfalt der Darmflora.",
    tagesbedarf: "Teil der empfohlenen 30 g Ballaststoffe pro Tag (DGE).",
    quellen: "Zichorienwurzel, Topinambur, Knoblauch, Zwiebeln, Bananen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  },
  {
    id: "flohsamenschalen",
    name: "Flohsamenschalen (Psyllium)",
    category: "Darmgesundheit",
    funktion: "Quellfähige Ballaststoffe; regulieren die Stuhlconsistenz und fördern die Darmpassage.",
    mangel: "Verstopfung, unregelmäßiger Stuhlgang.",
    tagesbedarf: "10–20 g täglich mit reichlich Wasser (mind. 200 ml pro 5 g).",
    quellen: "Indische Flohsamenschalen.",
    pruefung: "Zuletzt fachlich geprüft: Oktober 2026 (EFSA)"
  }
];

const generalCaution = "Bei Arzneimitteln, Erkrankungen, Schwangerschaft, Stillzeit, Minderjährigen, Wechselwirkungen oder auffälligen Symptomen vor der Einnahme ärztlich oder pharmazeutisch Rücksprache halten.";

function mapCategoryNameToId(name) {
  const n = (name || "").toLowerCase();
  if (n.includes("vitamin")) return "vitamins";
  if (n.includes("mineral") || n.includes("mineralstoff") || n.includes("spurenelement")) return "minerals";
  if (n.includes("aminos") || n.includes("protein") || n.includes("amino")) return "macro";
  if (n.includes("fettsäure") || n.includes("fettsäuren") || n.includes("lipid")) return "lipids";
  if (n.includes("pflanzen") || n.includes("antioxidant")) return "plants";
  if (n.includes("performance") || n.includes("leistungs") || n.includes("gelenk")) return "performance";
  if (n.includes("darm") || n.includes("verdauung") || n.includes("mikrobiom")) return "microbiome";
  return "microbiome";
}

const substances = (nutrientsData || []).map((item) => {
  const catId = mapCategoryNameToId(item.category || item.categoryName || "");
  return {
    id: item.id,
    categoryId: catId,
    name: item.name,
    description: item.funktion || item.description || "",
    icon: item.icon || "🧾",
    effects: item.funktion ? [item.funktion] : [],
    benefits: [],
    sideEffects: item.mangel ? [item.mangel] : [],
    dosage: {
      kg: item.tagesbedarf || "",
      age: "",
      activity: ""
    },
    shop: {
      product: item.quellen || "Lebensmittel-/Quellenangabe",
      merchant: "",
      notice: item.pruefung || "",
      url: "#"
    }
  };
});

const main = document.getElementById("main");
let state = { view:"home", categoryId:null, substanceId:null, query:"" };

const escapeHTML = value => String(value).replace(/[&<>\"']/g, character => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[character]));
const categoryById = id => categoryData.find(category => category.id === id);
const substanceById = id => substances.find(substance => substance.id === id);

function pathFor(next) {
  if(next.view === "category") return "#kategorie/"+encodeURIComponent(next.categoryId);
  if(next.view === "detail") return "#stoff/"+encodeURIComponent(next.substanceId);
  if(next.view === "imprint") return "#impressum";
  return "#start";
}

function stateFromHash() {
  const hash = location.hash.slice(1);
  if(hash === "impressum") return {view:"imprint",categoryId:null,substanceId:null,query:""};
  const [kind, encoded] = hash.split("/");
  const id = encoded ? decodeURIComponent(encoded) : null;
  if(kind === "kategorie" && categoryById(id)) return {view:"category",categoryId:id,substanceId:null,query:""};
  if(kind === "stoff" && substanceById(id)) return {view:"detail",categoryId:substanceById(id).categoryId,substanceId:id,query:""};
  return {view:"home",categoryId:null,substanceId:null,query:""};
}

function navigate(next) {
  const hash = pathFor(next);
  if(location.hash !== hash) history.pushState(null,"",hash);
  state = {...next,query:""};
  render();
  window.scrollTo({top:0,behavior:"instant"});
  main.focus({preventScroll:true});
}

function breadcrumbs(category, substance) {
  return `<nav class="breadcrumb" aria-label="Brotkrumennavigation">
        <button class="crumb-button" type="button" data-nav="home">Startseite</button><span aria-hidden="true">/</span>
        ${category ? `<button class="crumb-button" type="button" data-nav="category" data-id="${escapeHTML(category.id)}">${escapeHTML(category.name)}</button><span aria-hidden="true">/</span>` : ""}
        ${substance ? `<span aria-current="page">${escapeHTML(substance.name)}</span>` : ""}
      </nav>`;
}

function backButton(target, id) {
  return `<button type="button" class="back" data-nav="${target}" ${id ? `data-id="${escapeHTML(id)}"` : ""}>← Zurück</button>`;
}

function categoryCard(category) {
  const fragment = document.getElementById("category-template").content.cloneNode(true);
  fragment.querySelector('[data-template-id="category-title"]').textContent = category.name;
  fragment.querySelector('[data-template-id="category-count"]').textContent = substances.filter(item => item.categoryId === category.id).length+" Stoffe";
  const btn = fragment.querySelector("button");
  btn.dataset.id = category.id;
  btn.dataset.nav = "category";
  return fragment;
}

function substanceCard(item) {
  const fragment = document.getElementById("substance-template").content.cloneNode(true);
  fragment.querySelector(".illustration").textContent = item.icon;
  fragment.querySelector('[data-template-id="substance-title"]').textContent = item.name;
  fragment.querySelector('[data-template-id="substance-description"]').textContent = item.description;
  const button = fragment.querySelector("button");
  button.dataset.id = item.id;
  button.dataset.nav = "detail";
  return fragment;
}

function appendCards(grid, items, builder) {
  const batch = document.createDocumentFragment();
  items.forEach(item => batch.appendChild(builder(item)));
  grid.appendChild(batch);
}

function showSearchResults() {
  const result = document.getElementById("search-results");
  if(!result) return;
  const query = state.query.trim().toLocaleLowerCase("de");
  document.getElementById("home-categories").hidden = !!query;
  result.hidden = !query;
  if(!query) return;
  const matches = substances.filter(item => item.name.toLocaleLowerCase("de").includes(query));
  result.replaceChildren();
  const heading = document.createElement("h2");
  heading.className = "section-heading";
  heading.textContent = "Suchergebnisse";
  result.appendChild(heading);
  if(!matches.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Keine Stoffe gefunden. Versuche einen anderen Suchbegriff.";
    result.appendChild(empty);
  } else {
    const grid = document.createElement("div");
    grid.className = "grid-substances";
    appendCards(grid,matches,substanceCard);
    result.appendChild(grid);
  }
}

function renderHome() {
  main.innerHTML = `
        <p class="eyebrow">Nährstoffe verstehen</p>
        <h1>Sieben Bereiche. Klare Orientierung.</h1>
        <p class="lead">Entdecke alle ${substances.length} Nährstoffe, transparent erklärt und mit geprüften Empfehlungen versehen.</p>
        <form id="search-form" class="toolbar" role="search">
          <input id="search-input" class="search-input" type="search" placeholder="Stoff suchen (z.B. Kreatin, Magnesium, Vitamin D) …" autocomplete="off">
        </form>
        <section id="home-categories" aria-label="Nährstoffkategorien"><div id="category-grid" class="grid-categories"></div></section>
        <section id="search-results" aria-label="Suchergebnisse" hidden></section>`;
  appendCards(document.getElementById("category-grid"),categoryData,categoryCard);
  const input = document.getElementById("search-input");
  input.value = state.query;
  input.addEventListener("input", event => { state.query = event.target.value; showSearchResults(); });
}

function renderCategory() {
  const category = categoryById(state.categoryId);
  if(!category) { navigate({view:"home"}); return; }
  main.innerHTML = `${breadcrumbs(category)}${backButton("home")}
        <p class="eyebrow">Kategorie · ${substances.filter(item => item.categoryId === category.id).length} Stoffe</p>
        <h1>${escapeHTML(category.name)}</h1>
        <p class="lead">${escapeHTML(category.intro)}</p>
        <section aria-label="Einzelne Stoffe" class="mt-8"><div id="substance-grid" class="grid-substances"></div></section>`;
  appendCards(document.getElementById("substance-grid"),substances.filter(item => item.categoryId === category.id),substanceCard);
}

function list(items) { return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`; }

function renderDetail() {
  const item = substanceById(state.substanceId);
  if(!item) { navigate({view:"home"}); return; }
  const category = categoryById(item.categoryId);
  main.innerHTML = `${breadcrumbs(category,item)}${backButton("category",category.id)}
        <p class="eyebrow">${escapeHTML(category.name)}</p>
        <h1>${escapeHTML(item.name)}</h1>
        <p class="lead">${escapeHTML(item.description)}</p>
        <div class="detail-grid">
          <section class="detail-card"><h2>Wirkung</h2>${list(item.effects)}</section>
          <section class="detail-card"><h2>Mögliche Vorteile</h2>${list(item.benefits)}</section>
          <section class="detail-card"><h2>Mögliche Nebenwirkungen</h2>${list(item.sideEffects)}</section>
          <section class="detail-card"><h2>Dosierungshinweise</h2>
            <div class="dose-row"><strong>Körpergewicht / pro kg</strong><p>${escapeHTML(item.dosage.kg)}</p></div>
            <div class="dose-row"><strong>Alter / Lebensphase</strong><p>${escapeHTML(item.dosage.age)}</p></div>
            <div class="dose-row"><strong>Aktivitätslevel</strong><p>${escapeHTML(item.dosage.activity)}</p></div>
            <p class="caution">Allgemeine Orientierungswerte, keine individuelle Therapie- oder Einnahmeanweisung. ${escapeHTML(generalCaution)}</p>
          </section>
          <section class="detail-card"><h2>Quellen / Hinweise</h2>
            <div class="shop-item">
              <strong>${escapeHTML(item.shop.product)}</strong>
              <span>${escapeHTML(item.shop.merchant)}</span>
              <span>${escapeHTML(item.shop.notice)}</span>
              <a href="${escapeHTML(item.shop.url)}" target="_blank" rel="noopener" class="action" style="text-decoration:none;">Zum Shop</a>
            </div>
          </section>
        </div>
        <p class="disclaimer">Diese Informationen ersetzen keine medizinische Beratung. Vor der Einnahme sollte die individuelle Situation geprüft werden.</p>
        <span class="review">Zuletzt fachlich geprüft</span>`;
}

function renderImprint() {
  main.innerHTML = `
        <button type="button" class="back" data-nav="home">← Zurück zur Startseite</button>
        <div class="imprint-box">
          <h1>Impressum</h1>
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>Nährstoffkompass Redaktion<br>Musterstraße 123<br>10115 Berlin</p>
          <p><strong>Kontakt:</strong><br>E-Mail: kontakt@naehrstoffkompass-beispiel.de</p>
          <p><strong>Haftungsausschluss (Disclaimer):</strong><br>Die bereitgestellten Inhalte des Nährstoffkompasses dienen ausschließlich der neutralen Information und allgemeinen Orientierung. Sie ersetzen keinesfalls eine fachliche medizinische oder pharmazeutische Beratung durch einen Arzt oder Apotheker.</p>
        </div>`;
}

function render() {
  if(state.view === "home") renderHome();
  else if(state.view === "category") renderCategory();
  else if(state.view === "imprint") renderImprint();
  else renderDetail();
}

document.getElementById("brand-button").addEventListener("click", () => navigate({view:"home"}));
document.getElementById("nav-home-btn").addEventListener("click", () => navigate({view:"home"}));
document.getElementById("nav-imprint-btn").addEventListener("click", () => navigate({view:"imprint"}));
document.getElementById("footer-imprint-link").addEventListener("click", () => navigate({view:"imprint"}));
document.getElementById("footer-home-link").addEventListener("click", () => navigate({view:"home"}));

main.addEventListener("click", event => {
  const button = event.target.closest("button[data-nav]");
  if(!button) return;
  if(button.dataset.nav === "home") navigate({view:"home"});
  if(button.dataset.nav === "category") navigate({view:"category",categoryId:button.dataset.id});
  if(button.dataset.nav === "detail") navigate({view:"detail",substanceId:button.dataset.id,categoryId:substanceById(button.dataset.id).categoryId});
});

window.addEventListener("popstate", () => { state = stateFromHash(); render(); });
window.addEventListener("hashchange", () => { state = stateFromHash(); render(); });
state = stateFromHash();
render();
