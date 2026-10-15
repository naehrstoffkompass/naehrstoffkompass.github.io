const nutrientsData = [
  // --- 1. MAKRONÄHRSTOFFE & AMINOSÄUREN (11 Stoffe) ---
  {
    id: "protein",
    name: "Protein (Eiweiß)",
    category: "Makronährstoffe",
    funktion: "Hauptbaustein für Muskeln, Gewebe, Enzyme, Hormone und Immunsystem.",
    mangel: "Muskelabbau, Wundheilungsstörungen, geschwächtes Immunsystem.",
    tagesbedarf: "Ca. 0,8 g bis 2,0 g pro kg Körpergewicht.",
    quellen: "Hähnchenbrust, Rindfleisch, Magerquark, Eier, Linsen, Sojabohnen, Mandeln."
  },
  {
    id: "kohlenhydrate",
    name: "Komplexe Kohlenhydrate",
    category: "Makronährstoffe",
    funktion: "Hauptenergieträger für Muskeln und Gehirn.",
    mangel: "Leistungsabfall, Müdigkeit, Konzentrationsschwäche.",
    tagesbedarf: "Ca. 45–55 % der täglichen Kalorienmenge.",
    quellen: "Haferflocken, Vollkornbrot, Kartoffeln, Quinoa, brauner Reis."
  },
  {
    id: "ballaststoffe",
    name: "Ballaststoffe",
    category: "Makronährstoffe",
    funktion: "Fördern eine gesunde Verdauung, Sättigung und gesunde Darmbakterien.",
    mangel: "Verstopfung, träge Verdauung, Blutzuckerschwankungen.",
    tagesbedarf: "Mindestens 30 g pro Tag (DGE).",
    quellen: "Leinsamen, Flohsamenschalen, Vollkornprodukte, Bohnen, Brokkoli."
  },
  {
    id: "leucin",
    name: "L-Leucin (BCAA)",
    category: "Makronährstoffe",
    funktion: "Stimuliert die Muskelproteinsynthese (mTOR-Pfad) und Muskelreparatur.",
    mangel: "Muskelabbau, verlangsamte Regeneration.",
    tagesbedarf: "Ca. 39 mg/kg Körpergewicht (WHO).",
    quellen: "Molkenprotein, Rindfleisch, Hähnchen, Linsen, Eier."
  },
  {
    id: "isoleucin",
    name: "L-Isoleucin (BCAA)",
    category: "Makronährstoffe",
    funktion: "Reguliert die Energieversorgung des Muskelgewebes und Blutzucker.",
    mangel: "Muskelverlust, Erschöpfung, Blutzuckerschwankungen.",
    tagesbedarf: "Ca. 20 mg/kg Körpergewicht (WHO).",
    quellen: "Fisch, Geflügel, Nüsse, Linsen, Käse."
  },
  {
    id: "valin",
    name: "L-Valin (BCAA)",
    category: "Makronährstoffe",
    funktion: "Wichtig für Muskelwachstum, Gewebereparatur und Koordination.",
    mangel: "Gestörte Regeneration, Nervenempfindlichkeit.",
    tagesbedarf: "Ca. 26 mg/kg Körpergewicht (WHO).",
    quellen: "Eier, Milchprodukte, Erdnüsse, Haferflocken."
  },
  {
    id: "glutamin",
    name: "L-Glutamin",
    category: "Makronährstoffe",
    funktion: "Haupttreibstoff für Magen-Darm-Zellen und Immunsystem.",
    mangel: "Darmprobleme, verlangsamte Regeneration.",
    tagesbedarf: "Erhöhter Bedarf bei intensivem Sport und Stress.",
    quellen: "Magerquark, Eier, Sojabohnen, Rindfleisch."
  },
  {
    id: "arginin",
    name: "L-Arginin",
    category: "Makronährstoffe",
    funktion: "Fördert die Gefäßerweiterung, Durchblutung und Nährstoffversorgung.",
    mangel: "Durchblutungsstörungen, hoher Blutdruck.",
    tagesbedarf: "Ca. 2–5 g bei sportlicher Belastung.",
    quellen: "Kürbiskerne, Erdnüsse, Hähnchenbrust, Walnüsse."
  },
  {
    id: "citrullin",
    name: "L-Citrullin",
    category: "Makronährstoffe",
    funktion: "Wird im Körper zu Arginin umgewandelt und steigert die Durchblutung nachhaltig.",
    mangel: "Reduzierte Ausdauer, verringerte Muskeldurchblutung.",
    tagesbedarf: "3–6 g vor dem Training.",
    quellen: "Wassermelone, Gurke, Kürbis."
  },
  {
    id: "lysine",
    name: "L-Lysin",
    category: "Makronährstoffe",
    funktion: "Baustein für Kollagensynthese, Immunsystem und Calciumabsorption.",
    mangel: "Wachstumsstörungen, Immunschwäche, Infektanfälligkeit.",
    tagesbedarf: "Ca. 30 mg/kg Körpergewicht.",
    quellen: "Fleisch, Fisch, Eier, Tofu, Linsen."
  },
  {
    id: "carnitin",
    name: "L-Carnitin",
    category: "Makronährstoffe",
    funktion: "Transportiert Fettsäuren in die Muskelzellen zur Fettverbrennung.",
    mangel: "Muskelschwäche, schnelle Erschöpfung.",
    tagesbedarf: "Körpereigene Synthese; Aufnahme über Nahrung.",
    quellen: "Rindfleisch, Lammfleisch, Wild, Dorsch."
  },

  // --- 2. VITAMINE (13 Stoffe) ---
  {
    id: "vitamin-a",
    name: "Vitamin A (Retinol)",
    category: "Vitamine",
    funktion: "Unterstützt Sehkraft, Immunsystem, Zellwachstum sowie Haut.",
    mangel: "Nachtblindheit, trockene Haut, erhöhte Infektanfälligkeit.",
    tagesbedarf: "Ca. 700–850 µg RAE pro Tag.",
    quellen: "Rinderleber, Karotten (Beta-Carotin), Süßkartoffeln, Spinat, Eigelb."
  },
  {
    id: "vitamin-b1",
    name: "Vitamin B1 (Thiamin)",
    category: "Vitamine",
    funktion: "Unerlässlich für Kohlenhydratstoffwechsel und Nervenfunktion.",
    mangel: "Müdigkeit, Reizbarkeit, Gedächtnisstörungen.",
    tagesbedarf: "Ca. 1,0–1,3 mg pro Tag.",
    quellen: "Vollkornprodukte, Schweinefleisch, Sonnenblumenkerne."
  },
  {
    id: "vitamin-b2",
    name: "Vitamin B2 (Riboflavin)",
    category: "Vitamine",
    funktion: "Beteiligt an Energiegewinnung, Zellschutz und Hautgesundheit.",
    mangel: "Einrisse an den Mundwinkeln, Hautentzündungen.",
    tagesbedarf: "Ca. 1,1–1,4 mg pro Tag.",
    quellen: "Milchprodukte, Eier, Fleisch, Mandeln, Champignons."
  },
  {
    id: "vitamin-b3",
    name: "Vitamin B3 (Niacin)",
    category: "Vitamine",
    funktion: "Wichtig für Energiestoffwechsel, DNA-Reparatur und Nervensystem.",
    mangel: "Hautveränderungen, Durchfall, Demenz-Symptome.",
    tagesbedarf: "Ca. 12–16 mg NE pro Tag.",
    quellen: "Geflügel, Fisch, Erdnüsse, Pilze, Vollkorn."
  },
  {
    id: "vitamin-b5",
    name: "Vitamin B5 (Pantothensäure)",
    category: "Vitamine",
    function: "Wichtig für Hormonsynthese, Energiestoffwechsel und Regeneration.",
    mangel: "Sehr selten; Taubheitsgefühl in den Zehen.",
    tagesbedarf: "Ca. 5 mg pro Tag.",
    quellen: "Leber, Eier, Nüsse, Avocados, Haferflocken."
  },
  {
    id: "vitamin-b6",
    name: "Vitamin B6 (Pyridoxin)",
    category: "Vitamine",
    funktion: "Zentral für Aminosäurestoffwechsel, Nerven und Hämoglobinbildung.",
    mangel: "Anämie, Nervenstörungen, Hautveränderungen.",
    tagesbedarf: "Ca. 1,4–1,6 mg pro Tag.",
    quellen: "Lachs, Hähnchen, Bananen, Kartoffeln, Walnüsse."
  },
  {
    id: "vitamin-b7",
    name: "Vitamin B7 (Biotin)",
    category: "Vitamine",
    funktion: "Essenziell für Stoffwechsel von Fett & Eiweiß, Haare und Haut.",
    mangel: "Haarausfall, brüchige Nägel, Hautausschläge.",
    tagesbedarf: "Ca. 40 µg pro Tag.",
    quellen: "Eigelb, Haferflocken, Nüsse, Sojabohnen."
  },
  {
    id: "vitamin-b9",
    name: "Vitamin B9 (Folsäure)",
    category: "Vitamine",
    funktion: "Unerlässlich für Zellteilung, Blutbildung und Gewebewachstum.",
    mangel: "Blutarmut, erhöhtes Risiko in der Schwangerschaft.",
    tagesbedarf: "Ca. 300 µg (Schwangere 550 µg) pro Tag.",
    quellen: "Grünes Blattgemüse, Hülsenfrüchte, Orangen."
  },
  {
    id: "vitamin-b12",
    name: "Vitamin B12 (Cobalamin)",
    category: "Vitamine",
    funktion: "Essenziell für Blutbildung, Nervensystem und DNA-Synthese.",
    mangel: "Müdigkeit, Kribbeln in Händen/Füßen, Anämie.",
    tagesbedarf: "Ca. 4,0 µg pro Tag.",
    quellen: "Rindfleisch, Lachs, Eier, Käse (für Veganer als Supplement)."
  },
  {
    id: "vitamin-c",
    name: "Vitamin C (Ascorbinsäure)",
    category: "Vitamine",
    funktion: "Starkes Antioxidans, stärkt Immunsystem und Kollagensynthese.",
    mangel: "Infektanfälligkeit, Zahnfleischbluten, langsame Wundheilung.",
    tagesbedarf: "Ca. 95–110 mg pro Tag.",
    quellen: "Rote Paprika, schwarze Johannisbeeren, Zitrusfrüchte, Brokkoli."
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 (Cholecalciferol)",
    category: "Vitamine",
    funktion: "Reguliert Kalziumaufnahme, Knochendichte, Muskeln und Immunsystem.",
    mangel: "Knochenerweichung, erhöhte Infektanfälligkeit, Muskelschwäche.",
    tagesbedarf: "Ca. 20 µg (800 IE) bei fehlender Sonnenbestrahlung.",
    quellen: "Sonnenlicht (UVB), Lachs, Makrele, Eigelb."
  },
  {
    id: "vitamin-e",
    name: "Vitamin E (Tocopherol)",
    category: "Vitamine",
    funktion: "Wichtigstes fettlösliches Antioxidans zum Schutz der Zellmembranen.",
    mangel: "Nervenstörungen, Muskelschwäche.",
    tagesbedarf: "Ca. 12–15 mg pro Tag.",
    quellen: "Weizenkeimöl, Sonnenblumenöl, Nüsse, Mandeln."
  },
  {
    id: "vitamin-k2",
    name: "Vitamin K2 (Menachinon)",
    category: "Vitamine",
    funktion: "Steuert die Verwertung von Kalzium in Knochen und schützt Gefäße.",
    mangel: "Erhöhte Blutungsneigung, geschwächte Knochen.",
    tagesbedarf: "Ca. 60–80 µg pro Tag.",
    quellen: "Fermentierte Speisen (Natto), Hartkäse, Eigelb, Butter."
  },

  // --- 3. MINERALSTOFFE & SPURENELEMENTE (11 Stoffe) ---
  {
    id: "magnesium",
    name: "Magnesium",
    category: "Mineralstoffe",
    funktion: "Cofaktor für >300 Enzymreaktionen, Muskel- und Nervenfunktion.",
    mangel: "Muskelkrämpfe, Innere Unruhe, Kopfschmerzen.",
    tagesbedarf: "Ca. 300–400 mg pro Tag.",
    quellen: "Kürbiskerne, Mandeln, Zartbitterschokolade, Haferflocken, Bohnen."
  },
  {
    id: "kalzium",
    name: "Kalzium",
    category: "Mineralstoffe",
    funktion: "Hauptbaustein für Stabilität von Knochen und Zähnen.",
    mangel: "Osteoporose, Muskelkrämpfe, brüchige Nägel.",
    tagesbedarf: "Ca. 1000 mg pro Tag.",
    quellen: "Käse, Milch, Grünkohl, Brokkoli, Mineralwasser."
  },
  {
    id: "kalium",
    name: "Kalium",
    category: "Mineralstoffe",
    funktion: "Reguliert Flüssigkeitshaushalt, Blutdruck und Herzfunktion.",
    mangel: "Muskelschwäche, Herzrhythmusstörungen, Verstopfung.",
    tagesbedarf: "Ca. 4000 mg pro Tag.",
    quellen: "Bananen, Kartoffeln mit Schale, Tomatenmark, Trockenobst."
  },
  {
    id: "zink",
    name: "Zink",
    category: "Mineralstoffe",
    funktion: "Unerlässlich für Immunsystem, Wundheilung, Haut und Testosteronspiegel.",
    mangel: "Infektanfälligkeit, Haarausfall, brüchige Nägel.",
    tagesbedarf: "Ca. 8–14 mg pro Tag.",
    quellen: "Austern, Rindfleisch, Kürbiskerne, Linsen, Eier."
  },
  {
    id: "eisen",
    name: "Eisen",
    category: "Mineralstoffe",
    funktion: "Sauerstofftransport im Blut und zelluläre Energiegewinnung.",
    mangel: "Blässe, ständige Müdigkeit, Atemnot bei Belastung.",
    tagesbedarf: "Ca. 10–15 mg pro Tag.",
    quellen: "Rotes Fleisch, Linsen, Kürbiskerne, Sesam, Spinat."
  },
  {
    id: "selen",
    name: "Selen",
    category: "Mineralstoffe",
    funktion: "Schützt Zellen vor oxidativem Stress, unterstützt die Schilddrüse.",
    mangel: "Schilddrüsenstörungen, geschwächte Abwehrkräfte.",
    tagesbedarf: "Ca. 60–70 µg pro Tag.",
    quellen: "Paranüsse, Steinpilze, Fisch, Eier, Linsen."
  },
  {
    id: "jod",
    name: "Jod",
    category: "Mineralstoffe",
    funktion: "Essenziell für die Produktion von Schilddrüsenhormonen.",
    mangel: "Schilddrüsenvergrößerung (Kropf), Müdigkeit, Gewichtszunahme.",
    tagesbedarf: "Ca. 180–200 µg pro Tag.",
    quellen: "Jodiertes Speisesalz, Seefisch, Meeresalgen, Milch."
  },
  {
    id: "kupfer",
    name: "Kupfer",
    category: "Mineralstoffe",
    funktion: "Beteiligt an Eisenaufnahme, Bindegewebsbildung und Nervensystem.",
    mangel: "Blutarmut, Pigmentstörungen, Knochenschwäche.",
    tagesbedarf: "Ca. 1,0–1,5 mg pro Tag.",
    quellen: "Innereien, Schalentiere, Nüsse, Kakao, Vollkorn."
  },
  {
    id: "mangan",
    name: "Mangan",
    category: "Mineralstoffe",
    funktion: "Aktiviert Enzyme für Knorpel- und Knochenaufbau.",
    mangel: "Knorpelschäden, gestörter Fett- und Kohlenhydratstoffwechsel.",
    tagesbedarf: "Ca. 2,0–5,0 mg pro Tag.",
    quellen: "Haferflocken, Vollkorn, Haselnüsse, schwarzer Tee."
  },
  {
    id: "chrom",
    name: "Chrom",
    category: "Mineralstoffe",
    funktion: "Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels bei.",
    mangel: "Blutzuckerschwankungen, verringerte Glukosetoleranz.",
    tagesbedarf: "Ca. 30–100 µg pro Tag.",
    quellen: "Bierhefe, Vollkorn, Fleisch, Nüsse, Brokkoli."
  },
  {
    id: "molybdaen",
    name: "Molybdän",
    category: "Mineralstoffe",
    funktion: "Beteiligt am Abbau schwefelhaltiger Aminosäuren und Harnsäure.",
    mangel: "Übelkeit, Herzrasen, Orientierungslosigkeit.",
    tagesbedarf: "Ca. 50–100 µg pro Tag.",
    quellen: "Hülsenfrüchte, Nüsse, Getreide, rotblättriges Gemüse."
  },

  // --- 4. FETTSÄUREN & LIPIDE (5 Stoffe) ---
  {
    id: "omega-3-epa",
    name: "Omega-3 EPA (Eicosapentaensäure)",
    category: "Fettsäuren",
    funktion: "Hemmt Entzündungen im Körper, unterstützt Herzgesundheit.",
    mangel: "Erhöhte Entzündungswerte, trockenes Auge, Herz-Risiko.",
    tagesbedarf: "Mind. 250 mg EPA + DHA kombiniert.",
    quellen: "Lachs, Makrele, Hering, Algenöl."
  },
  {
    id: "omega-3-dha",
    name: "Omega-3 DHA (Docosahexaensäure)",
    category: "Fettsäuren",
    funktion: "Zentraler Baustein für Gehirnstruktur und Sehkraft.",
    mangel: "Konzentrationsschwäche, Sehstörungen.",
    tagesbedarf: "Mind. 250 mg EPA + DHA kombiniert.",
    quellen: "Algenöl, fettreicher Seefisch, Krillöl."
  },
  {
    id: "ala-omega-3",
    name: "Alpha-Linolensäure (ALA)",
    category: "Fettsäuren",
    funktion: "Pflanzliche Omega-3-Fettsäure für normale Cholesterinspiegel.",
    mangel: "Hautveränderungen, verlangsamtes Wachstum.",
    tagesbedarf: "Ca. 0,5 % der täglichen Energieaufnahme.",
    quellen: "Leinöl, Chia-Samen, Walnüsse, Rapsöl."
  },
  {
    id: "mct-oel",
    name: "MCT-Fettsäuren",
    category: "Fettsäuren",
    funktion: "Wird direkt in der Leber zu Ketonkörpern umgewandelt; schnelle Energie.",
    mangel: "Kein klassischer Mangelzustand.",
    tagesbedarf: "Flexibel dosierbar.",
    quellen: "Kokosöl, Palmkernöl, reines MCT-Öl."
  },
  {
    id: "lecithin",
    name: "Lecithin (Phosphatidylcholin)",
    category: "Fettsäuren",
    funktion: "Zellmembran-Baustein, schützt Leber und Gehirn.",
    mangel: "Fettleber-Risiko, Gedächtnisseinbußen.",
    tagesbedarf: "Ca. 400 mg Cholin-Äquivalent.",
    quellen: "Eigelb, Sojabohnen, Sonnenblumenkerne."
  },

  // --- 5. PFLANZENSTOFFE & ANTIOXIDANTIEN (5 Stoffe) ---
  {
    id: "coenzym-q10",
    name: "Coenzym Q10 (Ubiquinol)",
    category: "Pflanzenstoffe",
    funktion: "Schlüsselelement der zellulären Energieproduktion (Mitochondrien).",
    mangel: "Muskel- und Herzschwäche (Abnahme ab 30 J.).",
    tagesbedarf: "Häufig 50–200 mg ergänzt.",
    quellen: "Innereien, Nüsse, fettiger Fisch, Hülsenfrüchte."
  },
  {
    id: "curcumin",
    name: "Curcumin (Kurkuma-Extrakt)",
    category: "Pflanzenstoffe",
    funktion: "Stark entzündungshemmender Pflanzenstoff für Gelenke & Verdauung.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Am besten kombiniert mit schwarzem Pfeffer (Piperin).",
    quellen: "Kurkumawurzel, Curcumin-Extrakt."
  },
  {
    id: "astaxanthin",
    name: "Astaxanthin",
    category: "Pflanzenstoffe",
    funktion: "Starkes Antioxidans, schützt Haut und Augen vor UV-Schäden.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Typische Einnahme: 4–8 mg täglich.",
    quellen: "Blutregenalge, Lachs, Garnelen."
  },
  {
    id: "opc-traubenkern",
    name: "OPC (Traubenkernextrakt)",
    category: "Pflanzenstoffe",
    funktion: "Schützt Kollagenstrukturen in Gefäßen und Haut.",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "150–300 mg Tagesdosis.",
    quellen: "Trauberkerne, Pinienrinde, rote Traubenschalen."
  },
  {
    id: "sulforaphan",
    name: "Sulforaphan",
    category: "Pflanzenstoffe",
    funktion: "Aktiviert körpereigene Entgiftungsenzyme (Nrf2-Pfad).",
    mangel: "Kein essenzieller Nährstoff.",
    tagesbedarf: "Aufnahme über Senföl-haltiges Gemüse.",
    quellen: "Brokkolisprossen, Brokkoli, Blumenkohl, Rucola."
  },

  // --- 6. PERFORMANCE & SPORT (4 Stoffe) ---
  {
    id: "kreatin",
    name: "Kreatin-Monohydrat",
    category: "Performance",
    funktion: "Steigert die Schnellkraft und Muskelenergie bei intensiven Workouts.",
    mangel: "Geringere Schnellkraftreserven.",
    tagesbedarf: "3–5 g täglich für volle Wirkung.",
    quellen: "Rindfleisch, Schweinefleisch, Hering, Lachs."
  },
  {
    id: "beta-alanin",
    name: "Beta-Alanin",
    category: "Performance",
    funktion: "Puffert Milchsäure in den Muskeln ab und verzögert Muskelermüdung.",
    mangel: "Verringerte Übersäuerungstoleranz.",
    tagesbedarf: "3,2–6,4 g täglich über mehrere Wochen.",
    quellen: "Fleisch (besonders Geflügel), Fisch."
  },
  {
    id: "kollagen-peptide",
    name: "Kollagen-Peptide",
    category: "Performance",
    funktion: "Strukturprotein für Bindegewebe, Gelenkknorpel, Sehnen und Bänder.",
    mangel: "Faltenbildung, Gelenkverschleiß im Alter.",
    tagesbedarf: "5–15 g hydrolysiertes Kollagen.",
    quellen: "Knochenbrühe, Gelatine, Kollagen-Hydrolysat."
  },
  {
    id: "glucosamin",
    name: "Glucosaminsulfat",
    category: "Performance",
    funktion: "Natürlicher Bestandteil des Bindegewebes und der Gelenkflüssigkeit.",
    mangel: "Gelenkverschleiß, steife Gelenke.",
    tagesbedarf: "1200–1500 mg täglich.",
    quellen: "Krebstiere (Krabben- und Garnelenschalen)."
  },

  // --- 7. DARM & VERDAUUNG (3 Stoffe) ---
  {
    id: "probiotika",
    name: "Probiotische Kulturen",
    category: "Darmgesundheit",
    funktion: "Unterstützen eine ausgewogene Darmflora und die Immunabwehr im Darm.",
    mangel: "Fehlbesiedlung des Darms (z. B. nach Antibiotika), Blähungen.",
    tagesbedarf: "Dosierung in KBE (Koloniebildende Einheiten).",
    quellen: "Joghurt, Kefir, Sauerkraut, Kimchi, Kombucha."
  },
  {
    id: "inulin",
    name: "Inulin (Präbiotikum)",
    category: "Darmgesundheit",
    funktion: "Nahrung für nützliche Darmbakterien, unterstützt eine gesunde Darmflora.",
    mangel: "Träge Verdauung, verringerte Mikrobiom-Vielfalt.",
    tagesbedarf: "Teil der empfohlenen 30 g Ballaststoffe.",
    quellen: "Zichorienwurzel, Topinambur, Knoblauch, Zwiebeln."
  },
  {
    id: "flohsamenschalen",
    name: "Flohsamenschalen (Psyllium)",
    category: "Darmgesundheit",
    funktion: "Quellfähige Ballaststoffe; regulieren die Stuhlconsistenz und Darmpassage.",
    mangel: "Verstopfung, unregelmäßiger Stuhlgang.",
    tagesbedarf: "10–20 g täglich mit reichlich Wasser.",
    quellen: "Indische Flohsamenschalen."
  }
];
