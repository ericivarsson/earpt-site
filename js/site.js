(function () {
  const dict = {
    en: {
      navProduct: "The gym",
      navWhy: "Why ears",
      navSupport: "Support",
      langBtn: "Svenska",
      kicker: "Ear Personal Trainer",
      heroTitle: "Five minutes. Then you hear more.",
      heroLede: "A daily ear workout that meets you where you are — beginner to pro, simple intervals to advanced harmony. Five minutes that make it easier to sit in, pick up a tune, and improvise with other people.",
      ctaSupport: "Support & feedback",
      ctaWhy: "Why this matters",
      todayKicker: "Today's set",
      todayTitle: "It picks you up where you are.",
      todayLede: "A short level check sets the floor. You stay in the room until it's clean, then the next one opens. Same gym from the first fifth to altered dominants.",
      card1t: "From intervals to harmony",
      card1p: "Simple interval work when that's the job. Advanced harmony when the ear is ready. Never a waiting room, never a cliff.",
      card2t: "The level moves with you",
      card2p: "Beginner or pro — the app adapts. Fast if you're clean. Longer if you're on the edge. That's the work.",
      card3t: "Built for players",
      card3p: "Piano or steel-string. Steps or functions. Swedish or English. The pad talks like a musician.",
      whyKicker: "With other people",
      whyTitle: "A stronger ear is for the bandstand.",
      whyLede: "Sit in faster. Pick up a progression. Improvise without guessing. Confidence, freedom, and joy when you play with others — that's what the ear buys you.",
      w1t: "You hang on",
      w1p: "The form has a name. You join on the one, not two bars late. The room feels you arrive.",
      w2t: "You improvise",
      w2p: "When you hear the changes, you can leave them. Less scale-running. More sentences.",
      w3t: "You play freer",
      w3p: "Less panic in rehearsal. More “that's a ii–V.” The band feels the calm, and so do you.",
      w4t: "You enjoy it more",
      w4p: "Hearing is not a test. It's the difference between surviving the tune and actually being in it.",
      quote: "Show up for five minutes. Playing with people gets lighter.",
      footLegal: "Privacy",
      footTerms: "Terms",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Tell us what's broken — or what you need.",
      supportLede: "Feedback, a stuck session, a billing question. Write to us. We read the mail.",
      supportNote: "Subscriptions and refunds are handled by Apple first.",
      privacyTitle: "Privacy policy",
      termsTitle: "Terms of use",
      updated: "Last updated 17 August 2026"
    },
    sv: {
      navProduct: "Gymmet",
      navWhy: "Varför gehör",
      navSupport: "Support",
      langBtn: "English",
      kicker: "Ear Personal Trainer",
      heroTitle: "Fem minuter. Sen hör du mer.",
      heroLede: "Ett dagligt gehörspass som möter dig där du är — nybörjare till proffs, enkla intervall till avancerad harmonik. Fem minuter som gör det lättare att hänga på, plocka upp och improvisera med andra.",
      ctaSupport: "Support och feedback",
      ctaWhy: "Varför det spelar roll",
      todayKicker: "Dagens pass",
      todayTitle: "Den plockar upp dig där du är.",
      todayLede: "Ett kort nivåtest sätter våningen. Du stannar i rummet tills det är rent, sen öppnas nästa. Samma gym från första kvinten till alt-dominanter.",
      card1t: "Från intervall till harmoni",
      card1p: "Enkla intervall när det är jobbet. Avancerad harmonik när örat är redo. Aldrig väntrum, aldrig stup.",
      card2t: "Nivån följer dig",
      card2p: "Nybörjare eller proffs — appen anpassar sig. Snabbt om du är ren. Längre om du är på gränsen. Det är jobbet.",
      card3t: "Byggt för spelare",
      card3p: "Piano eller stålsträng. Steg eller funktioner. Svenska eller engelska. Padet pratar som en musiker.",
      whyKicker: "Med andra",
      whyTitle: "Ett starkare gehör är till för bandet.",
      whyLede: "Häng på fortare. Plocka upp en följd. Improvisera utan att gissa. Trygghet, frihet och glädje när du spelar med andra — det är vad örat köper dig.",
      w1t: "Du hänger på",
      w1p: "Formen har ett namn. Du kommer in på ettan, inte två takter sent. Rummet känner att du är där.",
      w2t: "Du improviserar",
      w2p: "När du hör följden kan du lämna den. Mindre skalor på räls. Fler meningar.",
      w3t: "Du spelar friare",
      w3p: "Mindre panik på repetitionen. Mer “det är en ii–V.” Bandet känner lugnet, och det gör du också.",
      w4t: "Du har roligare",
      w4p: "Att höra är inte ett prov. Det är skillnaden mellan att överleva låten och att faktiskt vara i den.",
      quote: "Fem minuter om dagen. Att spela med folk blir lättare.",
      footLegal: "Integritet",
      footTerms: "Villkor",
      footSupport: "Support",
      supportKicker: "Support",
      supportTitle: "Säg vad som är trasigt — eller vad du behöver.",
      supportLede: "Feedback, ett fastnat pass, en fakturafråga. Skriv till oss. Vi läser mejlen.",
      supportNote: "Prenumerationer och återbetalningar sköts av Apple i första hand.",
      privacyTitle: "Integritetspolicy",
      termsTitle: "Användarvillkor",
      updated: "Senast uppdaterad 17 augusti 2026"
    }
  };

  function currentLang() {
    const stored = localStorage.getItem("earpt-lang");
    if (stored === "sv" || stored === "en") return stored;
    return (navigator.language || "").toLowerCase().startsWith("sv") ? "sv" : "en";
  }

  function apply(langCode) {
    const t = dict[langCode] || dict.en;
    document.documentElement.lang = langCode;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    const btn = document.querySelector("[data-lang-toggle]");
    if (btn) btn.textContent = t.langBtn;
    document.querySelectorAll("[data-lang-only]").forEach((el) => {
      el.hidden = el.getAttribute("data-lang-only") !== langCode;
    });
  }

  window.earptLang = currentLang();
  apply(window.earptLang);

  document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
    window.earptLang = window.earptLang === "sv" ? "en" : "sv";
    localStorage.setItem("earpt-lang", window.earptLang);
    apply(window.earptLang);
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
