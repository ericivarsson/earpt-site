(function () {
  const dict = {
    en: {
      navProduct: "The gym",
      navWhy: "Why ears",
      navSound: "The sound",
      navSupport: "Support",
      langBtn: "Svenska",
      kicker: "The Personal trainer for your ear",
      heroTitle: "Five minutes. Then you hear more.",
      heroLede: "A daily ear workout that meets you where you are — beginner to pro, simple intervals to advanced harmony. You train on sampled grand piano and acoustic guitar, not a toy synth. Five minutes that close the gap between what you hear in your head and what you play.",
      heroArtCredit: "AI-generated image.",
      heroBy: "Built by musicians for musicians.",
      ctaSupport: "Support & feedback",
      ctaWhy: "Why this matters",
      todayKicker: "Today's set",
      todayTitle: "It picks you up where you are.",
      todayLede: "A short level check sets the floor. You stay in the room until it's clean, then the next one opens. Same gym from the first fifth to altered dominants.",
      card1t: "From intervals to harmony",
      card1p: "Simple interval work when that's the job. Advanced harmony when the ear is ready. Never a waiting room, never a cliff.",
      card2t: "The level moves with you",
      card2p: "Beginner or pro — the app adapts. Fast if you're clean. Longer if you're on the edge. That's the work.",
      card3t: "Real sampled instruments",
      card3p: "A grand piano and a mic'd archtop. Organic color, so the ear trains on wood and wire — not a square wave.",
      soundKicker: "The sound",
      soundTitle: "Organic notes. Real instruments.",
      soundLede: "Ear training is only as good as what you hear. EarPT plays a sampled grand and a microphone-recorded archtop — the color of wood and string, not a toy synth.",
      sound1t: "Grand piano",
      sound1p: "Sampled keys, one voice per note. Warm enough to live with for five minutes a day.",
      sound2t: "Acoustic guitar",
      sound2p: "A mic'd archtop. Switch in Settings when you want the room to sound like strings.",
      metaDescription: "Daily ear training on real sampled piano and guitar. Intervals, chords, melody — five minutes that close the gap between what you hear and what you play.",
      whyKicker: "Why ear training",
      whyTitle: "Hear it. Then you can play it.",
      whyLede: "Ear training is learning to recognize pitches, intervals, chords, and rhythm by ear. It closes the gap between what you hear in your head and what you play or sing — so you learn songs faster, catch mistakes as they happen, and improvise without guessing.",
      w1t: "Mind to hands",
      w1p: "What you hear inside gets a name. Then you can put it on the instrument, without hunting.",
      w2t: "Songs land faster",
      w2p: "A line you hear is a line you can take. Less transcribing in the dark. More tunes in your hands.",
      w3t: "Freedom to improvise",
      w3p: "When the color is clear you don't have to guess. You can leave the scale — and find your way back.",
      quote: "A trained ear is musical freedom.",
      footLegal: "Privacy",
      footTerms: "Terms",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Tell us what's broken — or what you need.",
      supportLede: "Feedback, a stuck session, a purchase question. Write to us. We read the mail.",
      supportIdeas: "Got ideas for how EarPT could get better? We gratefully take your feedback.",
      supportNote: "Purchases and refunds are handled by Apple first.",
      supportSecurity: "Security report: same address, put SECURITY in the subject line.",
      supportPeriod: "Security updates: at least five years from the EU App Store release. The end date will be posted here when 1.0 is live.",
      privacyTitle: "Privacy policy",
      termsTitle: "Terms of use",
      updated: "Last updated 18 August 2026"
    },
    sv: {
      navProduct: "Gymmet",
      navWhy: "Varför gehör",
      navSound: "Ljudet",
      navSupport: "Support",
      langBtn: "English",
      kicker: "Den personliga tränaren för ditt öra",
      heroTitle: "Fem minuter. Sen hör du mer.",
      heroLede: "Ett dagligt gehörspass som möter dig där du är — nybörjare till proffs, enkla intervall till avancerad harmonik. Du tränar på sampled flygel och akustisk gitarr, inte en leksakssynth. Fem minuter som sluter gapet mellan det du hör i huvudet och det du spelar.",
      heroArtCredit: "AI-genererad bild.",
      heroBy: "Byggt av musiker för musiker.",
      ctaSupport: "Support och feedback",
      ctaWhy: "Varför det spelar roll",
      todayKicker: "Dagens pass",
      todayTitle: "Den plockar upp dig där du är.",
      todayLede: "Ett kort nivåtest sätter våningen. Du stannar i rummet tills det är rent, sen öppnas nästa. Samma gym från första kvinten till alt-dominanter.",
      card1t: "Från intervall till harmoni",
      card1p: "Enkla intervall när det är jobbet. Avancerad harmonik när örat är redo. Aldrig väntrum, aldrig stup.",
      card2t: "Nivån följer dig",
      card2p: "Nybörjare eller proffs — appen anpassar sig. Snabbt om du är ren. Längre om du är på gränsen. Det är jobbet.",
      card3t: "Riktiga sampled-instrument",
      card3p: "Flygel och en mikrofoninspelad archtop. Organisk klang, så örat tränar på trä och sträng — inte en fyrkantsvåg.",
      soundKicker: "Ljudet",
      soundTitle: "Organiska toner. Riktiga instrument.",
      soundLede: "Gehör är bara så bra som det du hör. EarPT spelar sampled flygel och en mikrofoninspelad archtop — färgen av trä och sträng, inte en leksakssynth.",
      sound1t: "Flygel",
      sound1p: "Samplade tangenter, en röst per ton. Varm nog att leva med fem minuter om dagen.",
      sound2t: "Akustisk gitarr",
      sound2p: "En mikrofoninspelad archtop. Byt i inställningarna när rummet ska låta som strängar.",
      metaDescription: "Ett dagligt gehörspass på riktiga sampled-instrument. Piano och gitarr — organiskt ljud, så örat tränar på det du faktiskt spelar.",
      whyKicker: "Varför gehör",
      whyTitle: "Hör det. Sen kan du spela det.",
      whyLede: "Gehör är att känna igen toner, intervall, ackord och rytm med örat. Det sluter gapet mellan det du hör i huvudet och det du spelar eller sjunger — så du lär låtar fortare, rättar fel i stunden och improviserar utan att gissa.",
      w1t: "Huvudet och händerna",
      w1p: "Det du hör inuti får ett namn. Sen kan du ta det på instrumentet, utan att famla.",
      w2t: "Låtarna landar fortare",
      w2p: "En följd du hör är en följd du kan ta. Mindre transkription i blindo. Fler låtar i händerna.",
      w3t: "Frihet att improvisera",
      w3p: "När klangen är tydlig behöver du inte gissa. Du kan lämna skalan — och komma tillbaka.",
      quote: "Ett tränat öra är musikalisk frihet.",
      footLegal: "Integritet",
      footTerms: "Villkor",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Säg vad som är trasigt — eller vad du behöver.",
      supportLede: "Feedback, ett fastnat pass, en köpfråga. Skriv till oss. Vi läser mejlen.",
      supportIdeas: "Har du idéer på hur EarPT kan bli bättre? Vi tar tacksamt emot din feedback.",
      supportNote: "Köp och återbetalningar sköts av Apple i första hand.",
      supportSecurity: "Säkerhetsrapport: samma adress, skriv SECURITY i ämnesraden.",
      supportPeriod: "Säkerhetsuppdateringar: minst fem år från att versionen släpps på App Store i EU. Slutdatum publiceras här när 1.0 är live.",
      privacyTitle: "Integritetspolicy",
      termsTitle: "Användarvillkor",
      updated: "Senast uppdaterad 18 augusti 2026"
    },
    de: {
      navProduct: "Das Gym",
      navWhy: "Warum Gehör",
      navSound: "Der Klang",
      navSupport: "Support",
      kicker: "Der Personal Trainer für dein Ohr",
      heroTitle: "Fünf Minuten. Dann hörst du mehr.",
      heroLede: "Ein tägliches Gehörtraining, das dich abholt — Anfänger bis Profi, einfache Intervalle bis fortgeschrittene Harmonie. Du trainierst an sampled Flügel und Akustikgitarre, nicht an einem Spielzeugsynth. Fünf Minuten, die die Lücke schließen zwischen dem, was du im Kopf hörst, und dem, was du spielst.",
      heroArtCredit: "KI-generiertes Bild.",
      heroBy: "Von Musikern für Musiker.",
      ctaSupport: "Support & Feedback",
      ctaWhy: "Warum das zählt",
      todayKicker: "Heutiges Set",
      todayTitle: "Sie holt dich dort ab, wo du bist.",
      todayLede: "Ein kurzer Levelcheck setzt die Etage. Du bleibst im Raum, bis es sauber ist — dann öffnet sich der nächste. Dasselbe Gym von der ersten Quinte bis zu alterierten Dominanten.",
      card1t: "Von Intervallen zur Harmonie",
      card1p: "Einfache Intervalle, wenn das die Aufgabe ist. Fortgeschrittene Harmonie, wenn das Ohr soweit ist. Nie Wartezimmer, nie Abgrund.",
      card2t: "Das Level geht mit",
      card2p: "Anfänger oder Profi — die App passt sich an. Schnell, wenn du sauber bist. Länger, wenn du an der Kante bist. Das ist die Arbeit.",
      card3t: "Echte Sample-Instrumente",
      card3p: "Ein Flügel und eine mikrofonierte Archtop. Organischer Klang, damit das Ohr an Holz und Saite trainiert — nicht an einer Rechteckwelle.",
      soundKicker: "Der Klang",
      soundTitle: "Organische Töne. Echte Instrumente.",
      soundLede: "Gehörbildung ist nur so gut wie das, was du hörst. EarPT spielt einen gesampelten Flügel und eine mikrofonierte Archtop — die Farbe von Holz und Saite, kein Spielzeugsynth.",
      sound1t: "Flügel",
      sound1p: "Gesampelte Tasten, eine Stimme pro Ton. Warm genug für fünf Minuten am Tag.",
      sound2t: "Akustikgitarre",
      sound2p: "Eine mikrofonierte Archtop. Wechsle in den Einstellungen, wenn der Raum nach Saiten klingen soll.",
      metaDescription: "Tägliches Gehörtraining an echten Sample-Instrumenten. Klavier und Gitarre — organischer Klang, damit das Ohr an dem trainiert, was du wirklich spielst.",
      whyKicker: "Warum Gehörbildung",
      whyTitle: "Hör es. Dann kannst du es spielen.",
      whyLede: "Gehörbildung heißt, Töne, Intervalle, Akkorde und Rhythmus mit dem Ohr zu erkennen. Sie schließt die Lücke zwischen dem, was du im Kopf hörst, und dem, was du spielst oder singst — damit Songs schneller sitzen, Fehler im Moment auffallen und du improvisierst, ohne zu raten.",
      w1t: "Kopf und Hände",
      w1p: "Was du innen hörst, bekommt einen Namen. Dann kannst du es aufs Instrument bringen, ohne zu suchen.",
      w2t: "Stücke landen schneller",
      w2p: "Eine Linie, die du hörst, ist eine Linie, die du nehmen kannst. Weniger transkribieren im Dunkeln. Mehr Stücke in den Händen.",
      w3t: "Freiheit zu improvisieren",
      w3p: "Wenn die Farbe klar ist, musst du nicht raten. Du kannst die Tonleiter verlassen — und den Weg zurückfinden.",
      quote: "Ein trainiertes Ohr ist musikalische Freiheit.",
      footLegal: "Datenschutz",
      footTerms: "Nutzungsbedingungen",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Sag uns, was kaputt ist — oder was du brauchst.",
      supportLede: "Feedback, eine hängende Session, eine Kauffrage. Schreib uns. Wir lesen die Mail.",
      supportIdeas: "Hast du Ideen, wie EarPT besser werden kann? Wir nehmen Feedback gern entgegen.",
      supportNote: "Käufe und Erstattungen laufen zuerst über Apple.",
      supportSecurity: "Sicherheitsmeldung: dieselbe Adresse, Betreff SECURITY.",
      supportPeriod: "Sicherheitsupdates: mindestens fünf Jahre ab EU-App-Store-Release. Das Enddatum steht hier, sobald 1.0 live ist.",
      privacyTitle: "Datenschutz",
      termsTitle: "Nutzungsbedingungen",
      updated: "Zuletzt aktualisiert 18. August 2026"
    },
    es: {
      navProduct: "El gym",
      navWhy: "Por qué el oído",
      navSound: "El sonido",
      navSupport: "Soporte",
      kicker: "El entrenador personal para tu oído",
      heroTitle: "Cinco minutos. Luego oyes más.",
      heroLede: "Un entrenamiento diario de oído que te encuentra donde estás — de principiante a pro, de intervalos simples a armonía avanzada. Entrenas con piano de cola y guitarra acústica sampleados, no un sinte de juguete. Cinco minutos que cierran la brecha entre lo que oyes en la cabeza y lo que tocas.",
      heroArtCredit: "Imagen generada con IA.",
      heroBy: "Hecho por músicos para músicos.",
      ctaSupport: "Soporte y feedback",
      ctaWhy: "Por qué importa",
      todayKicker: "La sesión de hoy",
      todayTitle: "Te recoge donde estás.",
      todayLede: "Un breve test de nivel fija el piso. Te quedas en la sala hasta que quede limpio; entonces se abre la siguiente. El mismo gym desde la primera quinta hasta dominantes alterados.",
      card1t: "De intervalos a armonía",
      card1p: "Intervalos simples cuando ese es el trabajo. Armonía avanzada cuando el oído está listo. Nunca sala de espera, nunca un precipicio.",
      card2t: "El nivel te sigue",
      card2p: "Principiante o pro — la app se adapta. Rápido si estás limpio. Más largo si estás al límite. Ese es el trabajo.",
      card3t: "Instrumentos sampleados de verdad",
      card3p: "Un piano de cola y una archtop con micrófono. Color orgánico, para que el oído entrene con madera y cuerda — no con una onda cuadrada.",
      soundKicker: "El sonido",
      soundTitle: "Notas orgánicas. Instrumentos reales.",
      soundLede: "El oído solo es tan bueno como lo que escuchas. EarPT toca un piano de cola sampleado y una archtop grabada con micrófono — el color de la madera y la cuerda, no un sinte de juguete.",
      sound1t: "Piano de cola",
      sound1p: "Teclas sampleadas, una voz por nota. Cálido para convivir cinco minutos al día.",
      sound2t: "Guitarra acústica",
      sound2p: "Una archtop con micrófono. Cambia en Ajustes cuando la sala deba sonar a cuerdas.",
      metaDescription: "Entrenamiento diario de oído con piano y guitarra sampleados. Color orgánico, para que el oído entrene con lo que realmente tocas.",
      whyKicker: "Por qué entrenar el oído",
      whyTitle: "Óyelo. Luego puedes tocarlo.",
      whyLede: "El entrenamiento auditivo es aprender a reconocer alturas, intervalos, acordes y ritmo de oído. Cierra la brecha entre lo que oyes en la cabeza y lo que tocas o cantas — así aprendes canciones más rápido, pillas los fallos al momento e improvisas sin adivinar.",
      w1t: "Cabeza y manos",
      w1p: "Lo que oyes dentro recibe un nombre. Luego puedes llevarlo al instrumento, sin buscar a ciegas.",
      w2t: "Las canciones llegan antes",
      w2p: "Una línea que oyes es una línea que puedes tomar. Menos transcribir a oscuras. Más temas en las manos.",
      w3t: "Libertad para improvisar",
      w3p: "Cuando el color está claro no tienes que adivinar. Puedes salir de la escala — y volver.",
      quote: "Un oído entrenado es libertad musical.",
      footLegal: "Privacidad",
      footTerms: "Términos",
      footSupport: "Soporte",
      supportKicker: "Soporte",
      supportTitle: "Dinos qué está roto — o qué necesitas.",
      supportLede: "Feedback, un pase trabado, una pregunta de compra. Escríbenos. Leemos el correo.",
      supportIdeas: "¿Tienes ideas para que EarPT sea mejor? Recibimos tu feedback con gusto.",
      supportNote: "Compras y reembolsos los gestiona Apple primero.",
      supportSecurity: "Informe de seguridad: la misma dirección, asunto SECURITY.",
      supportPeriod: "Actualizaciones de seguridad: al menos cinco años desde el lanzamiento en App Store en la UE. La fecha final se publicará aquí cuando 1.0 esté en vivo.",
      privacyTitle: "Política de privacidad",
      termsTitle: "Términos de uso",
      updated: "Última actualización 18 de agosto de 2026"
    },
    fr: {
      navProduct: "Le gym",
      navWhy: "Pourquoi l’oreille",
      navSound: "Le son",
      navSupport: "Support",
      kicker: "Le personal trainer de ton oreille",
      heroTitle: "Cinq minutes. Ensuite tu entends plus.",
      heroLede: "Un entraînement d’oreille quotidien qui te rejoint là où tu es — débutant à pro, intervalles simples à harmonie avancée. Tu travailles sur un piano à queue et une guitare acoustique samplés, pas un synthé jouet. Cinq minutes qui ferment l’écart entre ce que tu entends dans ta tête et ce que tu joues.",
      heroArtCredit: "Image générée par IA.",
      heroBy: "Fait par des musiciens pour des musiciens.",
      ctaSupport: "Support et retours",
      ctaWhy: "Pourquoi ça compte",
      todayKicker: "La séance du jour",
      todayTitle: "Elle te reprend là où tu es.",
      todayLede: "Un court test de niveau pose l’étage. Tu restes dans la salle jusqu’à ce que ce soit propre, puis la suivante s’ouvre. Le même gym de la première quinte aux dominantes altérées.",
      card1t: "Des intervalles à l’harmonie",
      card1p: "Des intervalles simples quand c’est le travail. L’harmonie avancée quand l’oreille est prête. Jamais de salle d’attente, jamais de précipice.",
      card2t: "Le niveau te suit",
      card2p: "Débutant ou pro — l’app s’adapte. Vite si tu es propre. Plus long si tu es sur le fil. C’est le travail.",
      card3t: "Vrais instruments samplés",
      card3p: "Un piano à queue et une archtop microphonée. Une couleur organique, pour que l’oreille s’entraîne sur le bois et la corde — pas une onde carrée.",
      soundKicker: "Le son",
      soundTitle: "Des notes organiques. De vrais instruments.",
      soundLede: "L’oreille n’est aussi bonne que ce que tu entends. EarPT joue un piano à queue samplé et une archtop enregistrée au micro — la couleur du bois et de la corde, pas un synthé jouet.",
      sound1t: "Piano à queue",
      sound1p: "Des touches samplées, une voix par note. Assez chaud pour cinq minutes par jour.",
      sound2t: "Guitare acoustique",
      sound2p: "Une archtop microphonée. Change dans Réglages quand la salle doit sonner comme des cordes.",
      metaDescription: "Entraînement d’oreille quotidien sur piano et guitare samplés. Un son organique, pour que l’oreille s’entraîne sur ce que tu joues vraiment.",
      whyKicker: "Pourquoi l’oreille",
      whyTitle: "Entends-le. Ensuite tu peux le jouer.",
      whyLede: "L’oreille musicale, c’est reconnaître hauteurs, intervalles, accords et rythme. Ça ferme l’écart entre ce que tu entends dans ta tête et ce que tu joues ou chantes — pour apprendre les morceaux plus vite, attraper les fautes sur le moment et improviser sans deviner.",
      w1t: "La tête et les mains",
      w1p: "Ce que tu entends dedans reçoit un nom. Ensuite tu peux le poser sur l’instrument, sans chercher.",
      w2t: "Les morceaux arrivent plus vite",
      w2p: "Une ligne que tu entends est une ligne que tu peux prendre. Moins de transcription dans le noir. Plus de morceaux dans les mains.",
      w3t: "Liberté d’improviser",
      w3p: "Quand la couleur est claire, tu n’as pas à deviner. Tu peux quitter la gamme — et retrouver le chemin.",
      quote: "Une oreille entraînée, c’est la liberté musicale.",
      footLegal: "Confidentialité",
      footTerms: "Conditions",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Dis-nous ce qui est cassé — ou ce dont tu as besoin.",
      supportLede: "Un retour, une séance bloquée, une question d’achat. Écris-nous. On lit le mail.",
      supportIdeas: "Des idées pour que EarPT soit meilleur ? On prend tes retours avec plaisir.",
      supportNote: "Achats et remboursements passent d’abord par Apple.",
      supportSecurity: "Signalement sécurité : la même adresse, objet SECURITY.",
      supportPeriod: "Mises à jour de sécurité : au moins cinq ans à compter de la sortie App Store dans l’UE. La date de fin sera indiquée ici quand 1.0 sera en ligne.",
      privacyTitle: "Politique de confidentialité",
      termsTitle: "Conditions d’utilisation",
      updated: "Dernière mise à jour 18 août 2026"
    }
  };

  function currentLang() {
    const stored = localStorage.getItem("earpt-lang");
    if (["sv", "en", "de", "es", "fr"].includes(stored)) return stored;
    const n = (navigator.language || "").toLowerCase();
    if (n.startsWith("sv")) return "sv";
    if (n.startsWith("de")) return "de";
    if (n.startsWith("es")) return "es";
    if (n.startsWith("fr")) return "fr";
    return "en";
  }

  function apply(langCode) {
    const t = Object.assign({}, dict.en, dict[langCode] || {});
    document.documentElement.lang = langCode;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    const meta = document.querySelector('meta[name="description"]');
    if (meta && t.metaDescription) meta.setAttribute("content", t.metaDescription);
    document.querySelectorAll("[data-lang-only]").forEach((el) => {
      const legal = langCode === "sv" ? "sv" : "en";
      el.hidden = el.getAttribute("data-lang-only") !== legal;
    });
    syncLangPicker(langCode);
  }

  const langs = [
    { id: "sv", label: "Svenska" },
    { id: "en", label: "English" },
    { id: "de", label: "Deutsch" },
    { id: "es", label: "Español" },
    { id: "fr", label: "Français" }
  ];

  function syncLangPicker(langCode) {
    const root = document.querySelector("[data-lang]");
    if (!root) return;
    const current = langs.find((l) => l.id === langCode) || langs[1];
    const btn = root.querySelector("[data-lang-current]");
    if (btn) btn.textContent = current.label;
    root.querySelectorAll("[data-lang-opt]").forEach((opt) => {
      opt.setAttribute("aria-selected", opt.getAttribute("data-lang-opt") === langCode ? "true" : "false");
    });
  }

  function initLangPicker() {
    const root = document.querySelector("[data-lang]");
    if (!root) return;
    root.innerHTML =
      '<button class="lang-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Language">' +
      '<span data-lang-current></span><span class="lang-caret" aria-hidden="true"></span></button>' +
      '<ul class="lang-menu" hidden role="listbox">' +
      langs.map((l) => '<li><button type="button" role="option" data-lang-opt="' + l.id + '">' + l.label + "</button></li>").join("") +
      "</ul>";
    const btn = root.querySelector(".lang-btn");
    const menu = root.querySelector(".lang-menu");

    function setOpen(open) {
      menu.hidden = !open;
      root.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpen(menu.hidden);
    });
    menu.addEventListener("click", (e) => {
      const opt = e.target.closest("[data-lang-opt]");
      if (!opt) return;
      e.preventDefault();
      e.stopPropagation();
      window.earptLang = opt.getAttribute("data-lang-opt");
      localStorage.setItem("earpt-lang", window.earptLang);
      setOpen(false);
      apply(window.earptLang);
    });
    document.addEventListener("pointerdown", (e) => {
      if (!root.classList.contains("open")) return;
      if (root.contains(e.target)) return;
      setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  window.earptLang = currentLang();
  initLangPicker();
  apply(window.earptLang);

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
