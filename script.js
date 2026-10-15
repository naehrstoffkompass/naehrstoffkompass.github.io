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

const raw = {
  macro: [
    ["Whey Protein","Schnell verdauliches Molkenprotein mit hoher biologischer Wertigkeit.","Liefert schnell essenzielle Aminosäuren ins Blut.","Effektiver Muskelaufbau und rasche Regeneration nach dem Training.","Kann bei starker Laktoseintoleranz Magen-Darm-Beschwerden verursachen.","protein","🥛"],
    ["Kasein Protein","Langsam resorbierbares Milchprotein für eine langanhaltende Versorgung.","Versorgt den Körper über viele Stunden kontinuierlich mit Aminosäuren. Ideal als Abendprotein.","Schützt vor muskulärem Abbau in langen Fastenphasen.","Enthält Milcheiweiß; bei Allergien meiden.","protein","🥣"],
    ["Pflanzliches Protein","Kombinierte Proteine aus Erbsen, Reis, Hanf oder Soja.","Deckt das vollständige Aminosäurenprofil auf pflanzlicher Basis ab.","Hervorragende Verträglichkeit für Veganer und Personen mit Laktoseunverträglichkeit.","Kann je nach Rohstoff leicht sandig schmecken oder Allergene (Soja) enthalten.","protein","🌱"],
    ["BCAAs","Die drei verzweigtkettigen Aminosäuren Leucin, Isoleucin und Valin.","Werden direkt im Muskelgewebe verstoffwechselt.","Unterstützen den Muskelschutz während intensiver Diät- oder Trainingsphasen.","Überflüssig bei ausreichender Aufnahme von normalem Gesamteiweiß.","uncertain","🫘"],
    ["EAAs","Das vollständige Set aller 9 essenziellen Aminosäuren.","Der Körper kann sie nicht selbst herstellen; sie müssen zugeführt werden.","Optimale Grundlage für die körpereigene Proteinbiosynthese.","Kein Wundermittel bei unausgewogener Gesamternährung.","uncertain","🧩"],
    ["L-Glutamin","Die im menschlichen Körper am häufigsten vorkommende freie Aminosäure.","Dient den Zellen der Darmschleimhaut und des Immunsystems als Hauptenergiequelle.","Fördert die Regeneration nach extremen körperlichen Belastungen.","Bei Nieren- oder Lebererkrankungen nicht unkontrolliert hochdosieren.","uncertain","🌾"],
    ["L-Arginin","Eine semi-essenzielle Aminosäure und direkte Vorstufe von Stickstoffmonoxid (NO).","Erweitert die Blutgefäße und verbessert die Mikrozirkulation.","Kann den Blutfluss und die muskuläre Versorgung beim Sport optimieren.","Kann den Blutdruck senken; Vorsicht bei gleichzeitiger Einnahme von Blutdruckmedikamenten.","uncertain","🫘"],
    ["L-Citrullin","Eine Aminosäure, die im Körper effizient in Arginin umgewandelt wird.","Erhöht den Argininspiegel im Blut nachhaltiger als reines Arginin.","Fördert die Ausdauerleistung und reduziert Muskelermüdung.","Gelegentlich leichte Magen-Darm-Verstimmung bei hoher Dosierung.","uncertain","🍉"],
    ["L-Carnitin","Eine vitaminähnliche Verbindung, die Fettsäuren in die Mitochondrien transportiert.","Spielt eine zentrale Rolle im zellulären Energiestoffwechsel.","Wird zur Unterstützung der Fettverbrennung diskutiert.","Hohe Dosen können zu leichtem Unwohlsein führen.","uncertain","🥑"],
    ["Beta-Alanin","Eine Aminosäure, die den Carnosinspiegel im Muskel anhebt.","Puffert die Übersäuerung (Laktatbildung) im Muskel bei harten Belastungen ab.","Erhöht die Kraftausdauer im Bereich von 1 bis 4 Minuten Belastung.","Verursacht völlig harmloses, temporäres Kribbeln auf der Haut.","uncertain","⚡"],
    ["Taurin","Eine organische Säure, die in Herzmuskel, Gehirn und Netzhaut konzentriert ist.","Wirkt als Antioxidans und reguliert den Elektrolythaushalt in Zellen.","Unterstützt die Herzfunktion und wirkt beruhigend auf das Nervensystem.","Keine nennenswerten Nebenwirkungen bei normalen Mengen.","uncertain","💧"]
  ],
  vitamins: [
    ["Vitamin A","Fettlösliches Retinol und Beta-Carotin für Sehkraft und Gewebe.","Erhält die normale Sehkraft im Dunkeln und schützt Schleimhäute.","Sorgt für gesunde Haut und unterstützt das Immunsystem.","Überdosierung von Retinol in der Schwangerschaft schädlich.","medical","🥕"],
    ["Vitamin D3","Das sogenannte ‚Sonnenvitamin‘, das im Körper selbst gebildet werden kann.","Steuert die Aufnahme und den Einbau von Calcium in die Knochen.","Stärkt das Immunsystem und unterstützt die Muskelfunktion.","Überdosierung kann zu gefährlicher Calcium-Einlagerung führen.","medical","☀️"],
    ["Vitamin K2","Fettlösliches Vitamin, steuert den Calcium-Transport im Körper.","Sorgt dafür, dass Calcium dorthin gelangt, wo es gebraucht wird (Knochen).","Schützt die Gefäße vor Verkalkung in Kombination mit Vitamin D3.","Wechselwirkung mit blutverdünnenden Medikamenten beachten.","medical","🥬"],
    ["Vitamin C","Wasserlösliches Antioxidans (Ascorbinsäure).","Schützt Zellen vor oxidativem Stress und bildet Kollagen für Gelenke.","Verstärkt die Eisenaufnahme aus pflanzlichen Quellen.","Sehr hohe Dosen können zu Durchfall führen.","medical","🍋"],
    ["Vitamin B-Komplex","Die acht essenziellen B-Vitamine als Team.","Steuern den Energiestoffwechsel, die Nervenfunktion und die Blutbildung.","Sorgt für mentale Energie, Nervenstärke und Konzentration.","Sehr hohe Vitamin-B6-Dosen können zu Nervenschäden führen.","medical","🌾"],
    ["Vitamin E","Fettlösliches Zellschutz-Vitamin.","Fängt aggressive Sauerstoffradikale im Körper ab.","Schützt Zellmembranen vor vorzeitiger Alterung.","Extrem hohe Dosen können die Blutgerinnung hemmen.","medical","🥜"]
  ],
  minerals: [
    ["Magnesium","Essenzielles Mineral für über 300 enzymatische Reaktionen.","Reguliert die Entspannung von Muskeln und Nerven.","Beugt Muskelkrämpfen vor und unterstützt die Schlafqualität.","Zu viel Magnesium führt zu abführender Wirkung.","medical","🌰"],
    ["Zink","Unverzichtbares Spurenelement für das Immunsystem.","Aktiviert zahlreiche Enzyme für Zellwachstum und Wundheilung.","Fördert gesunde Haare, Nägel und eine reine Haut.","Dauerhaft sehr hohe Dosen können die Aufnahme von Kupfer blockieren.","medical","🫘"],
    ["Eisen","Zentrales Spurenelement für den Sauerstofftransport im Blut.","Bestandteil des Blutfarbstoffs Hämoglobin in den roten Blutkörperchen.","Verhindert Erschöpfung, Müdigkeit und Blutarmut.","Nicht blind einnehmen! Zuviel Eisen schädigt Organe.","medical","🥬"],
    ["Calcium","Häufigstes Mineral im menschlichen Körper.","Baustein für stabile Knochen, Zähne und wichtig für Muskelkontraktion.","Sichert die mechanische Stabilität des Skeletts.","Kann bei Überversorgung zu Nierensteinen führen.","medical","🥛"],
    ["Kalium","Wichtiger Elektrolyt im Zellinneren.","Reguliert den Blutdruck, den Flüssigkeitshaushalt und Nerven.","Schützt das Herz-Kreislauf-System vor Überlastung.","Gefährlich bei Nierenschwäche; nur nach ärztlichem Rat einnehmen.","medical","🍌"],
    ["Elektrolyt-Komplex","Mischung aus Natrium, Kalium, Magnesium und Calcium.","Gleicht Verluste durch starkes Schwitzen unmittelbar aus.","Verhindert Leistungseinbrüche, Krämpfe und Dehydration.","Hoher Natriumgehalt (Salz); bei Bluthochdruck beachten.","medical","💦"],
    ["Selen","Spurenelement mit stark antioxidantiver Wirkung.","Unterstützt die Schilddrüse bei der Hormonproduktion.","Stärkt die Immunabwehr.","Sehr enger Bereich zwischen Bedarf und toxischer Überdosierung.","medical","🌰"],
    ["Jod","Spurenelement, das direkt von der Schilddrüse benötigt wird.","Essenziell für die Bildung der Schilddrüsenhormone.","Regelt den gesamten Grundumsatz und Energiestoffwechsel.","Bei Schilddrüsenerkrankungen nur nach ärztlicher Absprache.","medical","🌊"],
    ["Kupfer","Spurenelement für die Eisenverwertung und das Bindegewebe.","Unterstützt die Bildung roter Blutkörperchen.","Trägt zur normalen Funktion des Nervensystems bei.","Überdosierung ist leberschädlich.","medical","🫘"]
  ],
  lipids: [
    ["Omega-3 (EPA/DHA)","Die marinen Omega-3-Fettsäuren Eicosapentaensäure und Docosahexaensäure.","Unterstützen normale Herzfunktion, Gehirnleistung und Sehkraft.","Wirken stark entzündungshemmend im gesamten Organismus.","Kann bei extrem hohen Dosen die Blutungszeit verlängern.","medical","🐟"],
    ["Alpha-Linolensäure (ALA)","Pflanzliche Omega-3-Fettsäure (z.B. in Leinöl).","Dient als Ausgangsstoff für EPA/DHA im Körper.","Unterstützt die kardiovaskuläre Gesundheit als Teil der Ernährung.","Kein voller Ersatz für marine Omega-3-Quellen.","food","🌻"],
    ["Omega-6 (GLA)","Gamma-Linolensäure aus Nachtkerzen- oder Borretschöl.","Dient der Bildung von Gewebshormonen (Prostaglandinen).","Wird oft zur Linderung von Hauttrockenheit genutzt.","Bei Entzündungen im Übermaß kontraproduktiv.","uncertain","🌼"],
    ["MCT-Öl","Mittelkettige Triglyceride (meist aus Kokosöl).","Werden extrem schnell in Energie umgewandelt.","Schnelle Energiequelle für Gehirn und Muskeln.","Zu große Mengen können Magenkrämpfe auslösen.","uncertain","🥥"]
  ],
  performance: [
    ["Kreatin","Einer der best-beforschten Sportergänzungsstoffe.","Erhöht die ATP-Speicher (Zellenergie) in der Muskulatur.","Steigert die Leistung bei Schnellkrafttraining.","Führt zu unschädlicher Wassereinlagerung in den Muskeln.","creatine","🏋️"],
    ["Ashwagandha","Traditionelle ayurvedische Heilpflanze (Adaptogen).","Hilft dem Körper, besser mit Stress umzugehen (senkt Cortisol).","Kann die Schlafqualität verbessern und Ängste mildern.","Bei Autoimmunerkrankungen oder Schwangerschaft meiden.","medical","🌿"],
    ["L-Theanin","Entspannende Aminosäure aus Teeblättern.","Passiert die Blut-Hirn-Schranke und fördert Ruhe ohne Müdigkeit.","Sorgt in Kombination mit Koffein für fokussierten Tunnelblick.","Keine nennenswerten Nebenwirkungen.","uncertain","🍵"],
    ["Koffein","Weltweit bekanntes zentralnervöses Stimulanz.","Blockiert Adenosinrezeptoren im Gehirn und vertreibt Müdigkeit.","Steigert Wachheit, Konzentration und Ausdauer.","Kann Herzrasen und Schlafstörungen auslösen.","caffeine","☕"],
    ["Ginkgo Biloba","Extrakt aus den Blättern des Ginkgobaums.","Fördert die Durchblutung und Mikrozirkulation im Gewebe.","Unterstützt die geistige Leistungsfähigkeit.","Hemmt die Blutgerinnung; nicht mit Blutverdünnern nutzen.","medical","🍂"],
    ["Rhodiola Rosea","Rosenwurz-Extrakt, ebenfalls ein Adaptogen.","Hilft bei mentaler Erschöpfung und Stress.","Steigert die mentale Belastbarkeit in stressigen Phasen.","Kann bei Einnahme am Abend leicht anregend wirken.","uncertain","🌱"],
    ["Melatonin","Körpereigenes Hormon der Zirbeldrüse.","Steuert den biologischen Schlaf-Wach-Rhythmus.","Verkürzt nachweislich die Einschlafzeit.","Kann am nächsten Morgen zu leichter Benommenheit führen.","medical","🌙"]
  ],
  plants: [
    ["Curcumin","Der bioaktive Hauptwirkstoff der Kurkumawurzel.","Besitzt stark entzündungshemmende Eigenschaften.","Unterstützt die Gelenkgesundheit und die Verdauung.","Schlecht bioverfügbar (ideal mit Schwarzem Pfeffer).","uncertain","🟠"],
    ["OPC (Traubenkernextrakt)","Oligomere Proanthocyanidine aus Weintraubenkernen.","Starkes pflanzliches Antioxidans.","Schützt Gefäße und Gewebe vor freien Radikalen.","Kann in hoher Dosis die Eisenresorption mindern.","uncertain","🍇"],
    ["Grüntee-Extrakt (EGCG)","Polyphenol aus grünem Tee.","Fördert den Fettstoffwechsel und wirkt antioxidativ.","Unterstützt den zellulären Schutz.","Hochdosiert auf nüchternen Magen nicht leberfreundlich.","medical","🍵"],
    ["Coenzym Q10","Essenzieller Kofaktor in den Mitochondrien.","Zuständig für die zelluläre Energiegewinnung.","Unterstützt die Herzgesundheit.","Kann schwach mit Blutverdünnern interagieren.","uncertain","⚙️"],
    ["Sulforaphan","Pflanzenstoff aus Brokkolisprossen.","Aktiviert körpereigene Entgiftungsenzyme.","Gilt als vielversprechender Schutzfaktor für Zellen.","Frisch zubereitet oder als Extrakt am wirksamsten.","uncertain","🥦"],
    ["Resveratrol","Polyphenol aus roten Weintrauben.","Wird in der Langlebigkeits-Forschung intensiv untersucht.","Wirkt antioxidativ und schützt das Herz-Kreislauf-System.","In hoher Dosis sind Magenprobleme möglich.","uncertain","🍇"],
    ["Quercetin","Weit verbreitetes Bioflavonoid.","Besitzt natürliche entzündungshemmende Eigenschaften.","Wird oft in Allergie-Saisonphasen genutzt.","Wechselwirkungen mit Medikamenten möglich.","uncertain","🧅"]
  ],
  microbiome: [
    ["Probiotika","Präparate mit lebenden Mikroorganismen.","Besiedeln den Darm und unterstützen die Darmflora.","Fördern eine gesunde Verdauung und stärken die Abwehr.","Bei schwerer Immunschwäche vorher ärztlich abklären.","medical","🫙"],
    ["Prebiotika (Flohsamenschalen)","Lösliche Ballaststoffe aus Flohsamenschalen.","Binden Wasser im Darm und quellen auf.","Regulieren sanft die Verdauung und ernähren gute Bakterien.","Unbedingt mit reichlich Wasser einnehmen!","uncertain","🌾"],
    ["Kollagen-Peptide","Enzymatisch gespaltene Kollagen-Eiweiße.","Liefern Bausteine für Gelenke, Sehnen und Haut.","Unterstützen Hautelastizität und Gelenke.","Aus tierischer Herkunft (Rind oder Fisch).","uncertain","🧶"],
    ["Hyaluronsäure","Natürlich im Bindegewebe vorkommendes Molekül.","Kann enorme Mengen Wasser binden.","Sorgt für geschmeidige Gelenke und straffe Haut.","Wirkung oraler Präparate wird weiter beforscht.","uncertain","💧"],
    ["MSM (Organischer Schwefel)","Methylsulfonylmethan als bioaktive Schwefelquelle.","Liefert Schwefel für Knorpel, Gelenke und Haare.","Wird oft bei Gelenkbelastung eingesetzt.","Kann anfangs leichten weichen Stuhl verursachen.","uncertain","🪨"]
  ]
};

const generalCaution = "Bei Arzneimitteln, Erkrankungen, Schwangerschaft, Stillzeit, Minderjährigen, Wechselwirkungen oder auffälligen Symptomen vor der Einnahme ärztlich oder pharmazeutisch Rücksprache halten.";
const doseGuides = {
  protein: {
    kg:"Für gesunde Erwachsene werden etwa 0,8 g bis 2,0 g pro kg Körpergewicht empfohlen (je nach sportlicher Aktivität).",
    age:"Jugendliche: Bedarf an das Wachstum anpassen. Erwachsene: Gesamtaufnahme im Blick behalten. Senioren: Erhöhter Bedarf zum Muskelerhalt.",
    activity:"Wenig aktiv: 0,8–1,0 g/kg. Regelmäßig aktiv: 1,2–1,5 g/kg. Intensives Krafttraining: 1,6–2,0 g/kg."
  },
  creatine: {
    kg:"Keine Berechnung nach Körpergewicht nötig. Standardempfehlung liegt bei ca. 3 bis 5 Gramm täglich dauerhaft.",
    age:"Ab dem 18. Lebensjahr uneingeschränkt empfohlen. Jugendliche nur in Absprache mit Sportarzt.",
    activity:"Unabhängig vom Aktivitätslevel täglich einzunehmen, um die Muskelspeicher gefüllt zu halten."
  },
  caffeine: {
    kg:"Untersuchte Richtwerte für Sport: ca. 1 bis 3 mg pro kg Körpergewicht ca. 45 Minuten vor dem Training.",
    age:"Für Kinder und Jugendliche nicht empfohlen. Erwachsene sollten persönliche Toleranzgrenze beachten.",
    activity:"Vor mental anstrengenden Phasen oder intensiven Trainingseinheiten gezielt einsetzen."
  },
  food: {
    kg:"Keine spezifische Angabe nach Körpergewicht erforderlich; richtet sich nach der täglichen Ernährung.",
    age:"Für alle Altersgruppen als Nahrungsergänzung oder über vollwertige Lebensmittel geeignet.",
    activity:"Kann unabhängig von der sportlichen Belastung in die tägliche Routine integriert werden."
  },
  uncertain: {
    kg:"Keine fixen Dosierungsangaben pro kg Körpergewicht wissenschaftlich standardisiert.",
    age:"Erwachsene Zielgruppe; bei Einnahme durch Jugendliche ärztlichen Rat einholen.",
    activity:"Kann unabhängig vom Trainingszustand verwendet werden; Packungsanweisung des Herstellers beachten."
  },
  medical: {
    kg:"Keine pauschale Angabe pro kg Körpergewicht möglich; richtet sich nach dem individuellen Blutwert oder Bedarf.",
    age:"Dosierung variiert je nach Lebensphase und ärztlicher Empfehlung stark.",
    activity:"Bei erhöhtem körperlichen Stress oder sportlicher Belastung kann der Bedarf variieren."
  }
};

const substances = Object.entries(raw).flatMap(([categoryId, rows]) =>
  rows.map(([name, description, role, benefit, warning, doseType, icon], index) => ({
    id:categoryId+"-"+index, categoryId, name, description, icon,
    effects:[role],
    benefits:[benefit],
    sideEffects:[warning],
    dosage:{...doseGuides[doseType]},
    shop:{product:"Geprüftes Markenprodukt", merchant:"Empfohlener Online-Shop", notice:"Sicherer Händler mit laborgeprüfter Qualität", url:"#"}
  }))
);

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
          <section class="detail-card"><h2>Geprüfte Shop-Empfehlungen</h2>
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
