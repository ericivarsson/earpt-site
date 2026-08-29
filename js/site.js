(function () {
  const dict = {
    en: {
      navProduct: "The gym",
      navWhy: "Why ears",
      navSound: "The sound",
      navSupport: "Support",
      langBtn: "Svenska",
      kicker: "Ear training for musicians",
      heroTitle: "Five minutes. Then you hear more.",
      heroLede: "A daily ear workout that meets you where you are — beginner to pro, simple intervals to advanced harmony. You train on sampled grand piano and acoustic guitar, not a toy synth. Five minutes that close the gap between what you hear in your head and what you play.",
      heroArtCredit: "AI-generated image.",
      phoneArtCredit: "AI-generated image. The app on the bench.",
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
      metaDescription: "Daily ear training on sampled grand piano and acoustic guitar. Intervals, chords, melody — five minutes, most days.",
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
      metaTitle: "EarPT — Ear training for musicians",
      ctaStore: "Coming to the App Store.",
      navFaq: "FAQ",
      faqKicker: "FAQ",
      faqTitle: "Ear training, short.",
      faq1q: "What is ear training?",
      faq1a: "Ear training is learning to recognize pitches, intervals, chords, and rhythm by ear. It closes the gap between what you hear in your head and what you play or sing.",
      faq2q: "How does EarPT work?",
      faq2a: "Open the app. Do a session or two. A short level check sets the floor. You stay in the room until it's clean. Five minutes, most days.",
      faq3q: "Piano or guitar?",
      faq3a: "A sampled grand piano and a mic'd archtop. Organic color — wood and string, not a toy synth. Switch in Settings.",
      faq4q: "Is it on iPhone?",
      faq4a: "EarPT is an iOS app. It's on its way to the App Store.",
      faq5q: "Is it a subscription?",
      faq5a: "No. Ten workouts are free. Then a one-time unlock. Not a subscription.",
      updated: "Last updated 18 August 2026"
    },
    sv: {
      navProduct: "Gymmet",
      navWhy: "Varför gehör",
      navSound: "Ljudet",
      navSupport: "Support",
      langBtn: "English",
      kicker: "Gehörsträning för musiker",
      heroTitle: "Fem minuter. Sen hör du mer.",
      heroLede: "Ett dagligt gehörspass som möter dig där du är — nybörjare till proffs, enkla intervall till avancerad harmonik. Du tränar på sampled flygel och akustisk gitarr, inte en leksakssynth. Fem minuter som sluter gapet mellan det du hör i huvudet och det du spelar.",
      heroArtCredit: "AI-genererad bild.",
      phoneArtCredit: "AI-genererad bild. Appen på pallen.",
      heroBy: "Byggt av musiker för musiker.",
      ctaSupport: "Support och feedback",
      ctaWhy: "Varför det spelar roll",
      todayKicker: "Dagens pass",
      todayTitle: "Den plockar upp dig där du är.",
      todayLede: "Ett kort nivåtest sätter golvet. Du stannar i rummet tills det är rent, sen öppnas nästa. Samma gym från första kvinten till alt-dominanter.",
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
      metaDescription: "Daglig gehörsträning på sampled flygel och akustisk gitarr. Intervall, ackord, melodi — fem minuter, de flesta dagar.",
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
      metaTitle: "EarPT — Gehörsträning för musiker",
      ctaStore: "Kommer till App Store.",
      navFaq: "Frågor",
      faqKicker: "Frågor",
      faqTitle: "Gehörsträning, kort.",
      faq1q: "Vad är gehörsträning?",
      faq1a: "Gehörsträning är att känna igen toner, intervall, ackord och rytm med örat. Det sluter gapet mellan det du hör i huvudet och det du spelar eller sjunger.",
      faq2q: "Hur funkar EarPT?",
      faq2a: "Öppna appen. Kör ett pass, eller två. Ett kort nivåtest sätter golvet. Du stannar i rummet tills det är rent. Fem minuter, de flesta dagar.",
      faq3q: "Piano eller gitarr?",
      faq3a: "Sampled flygel och en mikrofoninspelad archtop. Organisk klang — trä och sträng, inte en leksakssynth. Byt i inställningarna.",
      faq4q: "Finns den till iPhone?",
      faq4a: "EarPT är en iOS-app. Den är på väg till App Store.",
      faq5q: "Är det en prenumeration?",
      faq5a: "Nej. Tio pass är fria. Sen ett engångsköp som låser upp resten. Inte ett abonnemang.",
      updated: "Senast uppdaterad 18 augusti 2026"
    },
    de: {
      navProduct: "Das Gym",
      navWhy: "Warum Gehör",
      navSound: "Der Klang",
      navSupport: "Support",
      kicker: "Gehörbildung für Musiker",
      heroTitle: "Fünf Minuten. Dann hörst du mehr.",
      heroLede: "Ein tägliches Gehörtraining, das dich abholt — Anfänger bis Profi, einfache Intervalle bis fortgeschrittene Harmonie. Du trainierst an sampled Flügel und Akustikgitarre, nicht an einem Spielzeugsynth. Fünf Minuten, die die Lücke schließen zwischen dem, was du im Kopf hörst, und dem, was du spielst.",
      heroArtCredit: "KI-generiertes Bild.",
      phoneArtCredit: "KI-generiertes Bild. Die App auf der Bank.",
      heroBy: "Von Musikern für Musiker.",
      ctaSupport: "Support & Feedback",
      ctaWhy: "Warum das zählt",
      todayKicker: "Heutiges Set",
      todayTitle: "Sie holt dich dort ab, wo du bist.",
      todayLede: "Ein kurzer Levelcheck setzt das Level. Du bleibst im Raum, bis es sauber ist — dann öffnet sich der nächste. Dasselbe Gym von der ersten Quinte bis zu alterierten Dominanten.",
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
      metaTitle: "EarPT — Gehörbildung für Musiker",
      ctaStore: "Kommt in den App Store.",
      navFaq: "Fragen",
      faqKicker: "Fragen",
      faqTitle: "Gehörbildung, kurz.",
      faq1q: "Was ist Gehörbildung?",
      faq1a: "Gehörbildung heißt, Töne, Intervalle, Akkorde und Rhythmus mit dem Ohr zu erkennen. Sie schließt die Lücke zwischen dem, was du im Kopf hörst, und dem, was du spielst oder singst.",
      faq2q: "Wie funktioniert EarPT?",
      faq2a: "App öffnen. Eine Session, oder zwei. Ein kurzer Levelcheck setzt das Level. Du bleibst im Raum, bis es sauber ist. Fünf Minuten, die meisten Tage.",
      faq3q: "Klavier oder Gitarre?",
      faq3a: "Ein gesampelter Flügel und eine mikrofonierte Archtop. Organischer Klang — Holz und Saite, kein Spielzeugsynth. Wechsel in den Einstellungen.",
      faq4q: "Gibt’s die fürs iPhone?",
      faq4a: "EarPT ist eine iOS-App. Sie ist auf dem Weg in den App Store.",
      faq5q: "Ist das ein Abo?",
      faq5a: "Nein. Zehn Sessions sind frei. Dann ein einmaliger Kauf, der den Rest freischaltet. Kein Abonnement.",
      updated: "Zuletzt aktualisiert 18. August 2026"
    },
    es: {
      navProduct: "El gym",
      navWhy: "Por qué el oído",
      navSound: "El sonido",
      navSupport: "Soporte",
      kicker: "Entrenamiento auditivo para músicos",
      heroTitle: "Cinco minutos. Luego oyes más.",
      heroLede: "Un entrenamiento diario de oído que te encuentra donde estás — de principiante a pro, de intervalos simples a armonía avanzada. Entrenas con piano de cola y guitarra acústica sampleados, no un sinte de juguete. Cinco minutos que cierran la brecha entre lo que oyes en la cabeza y lo que tocas.",
      heroArtCredit: "Imagen generada con IA.",
      phoneArtCredit: "Imagen generada con IA. La app en el banco.",
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
      metaTitle: "EarPT — Entrenamiento auditivo para músicos",
      ctaStore: "Próximamente en el App Store.",
      navFaq: "Preguntas",
      faqKicker: "Preguntas",
      faqTitle: "Entrenamiento auditivo, corto.",
      faq1q: "¿Qué es el entrenamiento auditivo?",
      faq1a: "El entrenamiento auditivo es aprender a reconocer alturas, intervalos, acordes y ritmo de oído. Cierra la brecha entre lo que oyes en la cabeza y lo que tocas o cantas.",
      faq2q: "¿Cómo funciona EarPT?",
      faq2a: "Abre la app. Haz una sesión, o dos. Un breve test de nivel fija el piso. Te quedas en la sala hasta que quede limpio. Cinco minutos, la mayoría de los días.",
      faq3q: "¿Piano o guitarra?",
      faq3a: "Un piano de cola sampleado y una archtop con micrófono. Color orgánico — madera y cuerda, no un sinte de juguete. Cambia en Ajustes.",
      faq4q: "¿Está en el iPhone?",
      faq4a: "EarPT es una app de iOS. Está de camino al App Store.",
      faq5q: "¿Es una suscripción?",
      faq5a: "No. Diez sesiones son gratis. Luego una compra única que desbloquea el resto. No es una suscripción.",
      updated: "Última actualización 18 de agosto de 2026"
    },
    fr: {
      navProduct: "Le gym",
      navWhy: "Pourquoi l’oreille",
      navSound: "Le son",
      navSupport: "Support",
      kicker: "Oreille musicale pour musiciens",
      heroTitle: "Cinq minutes. Ensuite tu entends plus.",
      heroLede: "Un entraînement d’oreille quotidien qui te rejoint là où tu es — débutant à pro, intervalles simples à harmonie avancée. Tu travailles sur un piano à queue et une guitare acoustique samplés, pas un synthé jouet. Cinq minutes qui ferment l’écart entre ce que tu entends dans ta tête et ce que tu joues.",
      heroArtCredit: "Image générée par IA.",
      phoneArtCredit: "Image générée par IA. L’app sur le banc.",
      heroBy: "Fait par des musiciens pour des musiciens.",
      ctaSupport: "Support et retours",
      ctaWhy: "Pourquoi ça compte",
      todayKicker: "La séance du jour",
      todayTitle: "Elle te reprend là où tu es.",
      todayLede: "Un court test de niveau pose le niveau. Tu restes dans la salle jusqu’à ce que ce soit propre, puis la suivante s’ouvre. Le même gym de la première quinte aux dominantes altérées.",
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
      metaTitle: "EarPT — Oreille musicale pour musiciens",
      ctaStore: "Bientôt sur l’App Store.",
      navFaq: "FAQ",
      faqKicker: "FAQ",
      faqTitle: "Oreille musicale, court.",
      faq1q: "Qu’est-ce que l’oreille musicale ?",
      faq1a: "L’oreille musicale, c’est reconnaître hauteurs, intervalles, accords et rythme. Ça ferme l’écart entre ce que tu entends dans ta tête et ce que tu joues ou chantes.",
      faq2q: "Comment marche EarPT ?",
      faq2a: "Ouvre l’app. Fais une séance, ou deux. Un court test de niveau pose le niveau. Tu restes dans la salle jusqu’à ce que ce soit propre. Cinq minutes, la plupart des jours.",
      faq3q: "Piano ou guitare ?",
      faq3a: "Un piano à queue samplé et une archtop microphonée. Couleur organique — bois et corde, pas un synthé jouet. Change dans Réglages.",
      faq4q: "C’est sur iPhone ?",
      faq4a: "EarPT est une app iOS. Elle est en route vers l’App Store.",
      faq5q: "C’est un abonnement ?",
      faq5a: "Non. Dix séances sont libres. Puis un achat unique qui débloque le reste. Pas un abonnement.",
      updated: "Dernière mise à jour 18 août 2026"
    }
  };

  function pageLang() {
    return document.documentElement.getAttribute("data-page-lang") || "";
  }

  function homeFor(lang) {
    if (lang === "en") return "/";
    return "/" + lang + "/";
  }

  function pathIsLangHome(pathname, lang) {
    const home = homeFor(lang);
    if (lang === "en") {
      return pathname === "/" || pathname === "/index.html";
    }
    return pathname === home || pathname === "/" + lang || pathname === home + "index.html";
  }

  function currentLang() {
    const stored = localStorage.getItem("earpt-lang");
    if (["sv", "en", "de", "es", "fr"].includes(stored)) return stored;
    const page = pageLang();
    if (["sv", "en", "de", "es", "fr"].includes(page)) return page;
    const htmlLang = (document.documentElement.lang || "").slice(0, 2);
    if (["sv", "en", "de", "es", "fr"].includes(htmlLang)) return htmlLang;
    return "en";
  }

  function setMeta(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  }

  function apply(langCode) {
    const t = Object.assign({}, dict.en, dict[langCode] || {});
    document.documentElement.lang = langCode;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    if (t.metaTitle) {
      document.title = t.metaTitle;
      setMeta('meta[property="og:title"]', "content", t.metaTitle);
      setMeta('meta[name="twitter:title"]', "content", t.metaTitle);
    }
    if (t.metaDescription) {
      setMeta('meta[name="description"]', "content", t.metaDescription);
      setMeta('meta[property="og:description"]', "content", t.metaDescription);
      setMeta('meta[name="twitter:description"]', "content", t.metaDescription);
    }
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
      if (!pathIsLangHome(location.pathname, window.earptLang)) {
        location.assign(homeFor(window.earptLang) + location.hash);
        return;
      }
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

  const storedLang = localStorage.getItem("earpt-lang");
  const htmlPageLang = pageLang();
  if (
    ["en", "sv", "de", "es", "fr"].includes(storedLang) &&
    htmlPageLang &&
    storedLang !== htmlPageLang
  ) {
    location.replace(homeFor(storedLang) + location.hash);
    return;
  }
  window.earptLang = currentLang();
  initLangPicker();
  apply(window.earptLang);

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
