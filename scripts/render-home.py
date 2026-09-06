#!/usr/bin/env python3
"""Render language homepages and js/site.js from i18n.json."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSS_V = "29"
JS_V = "23"
APP_ID = "6805772784"
STORE = f"https://apps.apple.com/app/id{APP_ID}"
GA = """  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J50DV6ZXMS"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J50DV6ZXMS');
  </script>"""

HREFLANG = """  <link rel="alternate" hreflang="en" href="https://earpt.com/" />
  <link rel="alternate" hreflang="sv" href="https://earpt.com/sv/" />
  <link rel="alternate" hreflang="de" href="https://earpt.com/de/" />
  <link rel="alternate" hreflang="es" href="https://earpt.com/es/" />
  <link rel="alternate" hreflang="fr" href="https://earpt.com/fr/" />
  <link rel="alternate" hreflang="x-default" href="https://earpt.com/" />"""


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def t(d: dict, key: str) -> str:
    return esc(d[key])


def schema(d: dict) -> str:
    faqs = []
    for i in range(1, 9):
        faqs.append(
            {
                "@type": "Question",
                "name": d[f"faq{i}q"],
                "acceptedAnswer": {"@type": "Answer", "text": d[f"faq{i}a"]},
            }
        )
    payload = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "EarPT",
                "alternateName": "Ear Personal Trainer",
                "applicationCategory": "MusicApplication",
                "applicationSubCategory": "Ear training",
                "operatingSystem": "iOS 17",
                "url": d["canonical"],
                "downloadUrl": STORE,
                "installUrl": STORE,
                "screenshot": "https://earpt.com/assets/hear-tones.jpg",
                "image": "https://earpt.com/assets/og.jpg",
                "inLanguage": d["htmlLang"],
                "description": d["metaDescription"],
                "featureList": [
                    "Interval identification in a key",
                    "Chord quality recognition",
                    "Melody dictation on the staff",
                    "Chord progressions",
                    "Adaptive gym of floors and rooms",
                    "Sampled grand piano",
                    "Microphone-recorded acoustic guitar",
                    "Spot me and Break it down hints",
                    "English, Swedish, German, Spanish, French",
                ],
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Download",
                        "price": "0",
                        "priceCurrency": "USD",
                    },
                    {
                        "@type": "Offer",
                        "name": "Unlock the gym",
                        "price": "9.99",
                        "priceCurrency": "USD",
                        "description": "One-time in-app purchase. Not a subscription.",
                    },
                ],
            },
            {
                "@type": "WebPage",
                "name": d["metaTitle"],
                "url": d["canonical"],
                "inLanguage": d["htmlLang"],
                "dateModified": "2026-09-06",
                "isPartOf": {
                    "@type": "WebSite",
                    "name": "EarPT",
                    "url": "https://earpt.com/",
                },
            },
            {"@type": "FAQPage", "mainEntity": faqs},
        ],
    }
    return json.dumps(payload, ensure_ascii=False, indent=2)


def page(lang: str, d: dict) -> str:
    brand = d["home"]
    return f"""<!doctype html>
<html lang="{esc(d['htmlLang'])}" data-page-lang="{esc(lang)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
{GA}
  <title>{t(d, 'metaTitle')}</title>
  <meta name="description" content="{t(d, 'metaDescription')}" />
  <link rel="canonical" href="{esc(d['canonical'])}" />
{HREFLANG}
  <link rel="alternate" type="text/markdown" href="https://earpt.com/product.md" title="EarPT product facts" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="EarPT" />
  <meta property="og:locale" content="{esc(d['ogLocale'])}" />
  <meta property="og:title" content="{t(d, 'metaTitle')}" />
  <meta property="og:description" content="{t(d, 'metaDescription')}" />
  <meta property="og:url" content="{esc(d['canonical'])}" />
  <meta property="og:image" content="https://earpt.com/assets/og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{t(d, 'altHero')}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{t(d, 'metaTitle')}" />
  <meta name="twitter:description" content="{t(d, 'metaDescription')}" />
  <meta name="twitter:image" content="https://earpt.com/assets/og.jpg" />
  <meta name="theme-color" content="#12110f" />
  <meta name="apple-itunes-app" content="app-id={APP_ID}" />
  <link rel="apple-touch-icon" href="/assets/icon.jpg" />
  <link rel="icon" href="/assets/icon.jpg" />
  <link rel="stylesheet" href="/css/site.css?v={CSS_V}" />
  <script type="application/ld+json">
{schema(d)}
  </script>
</head>
<body>
  <a class="skip" href="#main">{t(d, 'skip')}</a>
  <div class="wrap">
    <nav class="nav">
      <a class="brand" href="{esc(brand)}"><img src="/assets/icon.jpg" alt="" /> EarPT</a>
      <div class="nav-links">
        <a href="#gym" data-i18n="navGym">{t(d, 'navGym')}</a>
        <a href="#app" data-i18n="navApp">{t(d, 'navApp')}</a>
        <a href="#faq" data-i18n="navFaq">{t(d, 'navFaq')}</a>
        <a href="/support.html" data-i18n="navSupport">{t(d, 'navSupport')}</a>
      </div>
      <div class="lang" data-lang></div>
    </nav>

    <main id="main">
      <header class="hero">
        <div class="hero-photo" role="img" aria-hidden="true"></div>
        <div class="hero-copy">
          <h1 data-i18n="heroTitle">{t(d, 'heroTitle')}</h1>
          <p class="lede" data-i18n="heroLede">{t(d, 'heroLede')}</p>
          <p class="price" data-i18n="heroPrice">{t(d, 'heroPrice')}</p>
          <div class="actions">
            <a class="store-badge" href="{STORE}">
              <img src="{esc(d['badge'])}" alt="{t(d, 'storeAlt')}" width="120" height="40" />
            </a>
            <a class="btn btn-ghost" href="#gym" data-i18n="ctaGym">{t(d, 'ctaGym')}</a>
          </div>
        </div>
        <figure class="hero-visual">
          <img class="hero-phone" src="/assets/hear-tones.jpg" width="800" height="1740" alt="{t(d, 'altHero')}" fetchpriority="high" />
        </figure>
      </header>

      <section class="section" id="gym">
        <h2 data-i18n="todayTitle">{t(d, 'todayTitle')}</h2>
        <p class="sub" data-i18n="todayLede">{t(d, 'todayLede')}</p>
        <div class="grid-3">
          <article class="card">
            <h3 data-i18n="card1t">{t(d, 'card1t')}</h3>
            <p data-i18n="card1p">{t(d, 'card1p')}</p>
          </article>
          <article class="card">
            <h3 data-i18n="card2t">{t(d, 'card2t')}</h3>
            <p data-i18n="card2p">{t(d, 'card2p')}</p>
          </article>
          <article class="card">
            <h3 data-i18n="card3t">{t(d, 'card3t')}</h3>
            <p data-i18n="card3p">{t(d, 'card3p')}</p>
          </article>
        </div>
      </section>

      <section class="facts" aria-label="{t(d, 'footFacts')}">
        <dl>
          <div>
            <dt data-i18n="factPlatformT">{t(d, 'factPlatformT')}</dt>
            <dd data-i18n="factPlatformD">{t(d, 'factPlatformD')}</dd>
          </div>
          <div>
            <dt data-i18n="factSkillsT">{t(d, 'factSkillsT')}</dt>
            <dd data-i18n="factSkillsD">{t(d, 'factSkillsD')}</dd>
          </div>
          <div>
            <dt data-i18n="factSoundT">{t(d, 'factSoundT')}</dt>
            <dd data-i18n="factSoundD">{t(d, 'factSoundD')}</dd>
          </div>
          <div>
            <dt data-i18n="factPriceT">{t(d, 'factPriceT')}</dt>
            <dd data-i18n="factPriceD">{t(d, 'factPriceD')}</dd>
          </div>
        </dl>
      </section>

      <section class="section" id="app">
        <h2 data-i18n="appTitle">{t(d, 'appTitle')}</h2>
        <p class="sub" data-i18n="appLede">{t(d, 'appLede')}</p>
        <p class="work-split" data-i18n="workSimple">{t(d, 'workSimple')}</p>
        <div class="shots">
          <article class="shot">
            <img src="/assets/hear-tones.jpg" width="800" height="1740" alt="{t(d, 'altHero')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="work1t">{t(d, 'work1t')}</h3>
              <p data-i18n="work1p">{t(d, 'work1p')}</p>
            </div>
          </article>
          <article class="shot">
            <img src="/assets/hear-chords.jpg" width="800" height="1740" alt="{t(d, 'altChords')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="work2t">{t(d, 'work2t')}</h3>
              <p data-i18n="work2p">{t(d, 'work2p')}</p>
            </div>
          </article>
          <article class="shot">
            <img src="/assets/progress.jpg" width="800" height="1740" alt="{t(d, 'altProgress')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="workProgt">{t(d, 'workProgt')}</h3>
              <p data-i18n="workProgp">{t(d, 'workProgp')}</p>
            </div>
          </article>
        </div>
        <p class="work-split" data-i18n="workReady">{t(d, 'workReady')}</p>
        <div class="shots">
          <article class="shot">
            <img src="/assets/place-phrase.jpg" width="800" height="1740" alt="{t(d, 'altStaff')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="workStafft">{t(d, 'workStafft')}</h3>
              <p data-i18n="workStaffp">{t(d, 'workStaffp')}</p>
            </div>
          </article>
          <article class="shot">
            <img src="/assets/hear-melody.jpg" width="800" height="1740" alt="{t(d, 'altMelody')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="work3t">{t(d, 'work3t')}</h3>
              <p data-i18n="work3p">{t(d, 'work3p')}</p>
            </div>
          </article>
          <article class="shot">
            <img src="/assets/gym-map.jpg" width="800" height="1738" alt="{t(d, 'altMap')}" loading="lazy" />
            <div class="shot-body">
              <h3 data-i18n="workMapt">{t(d, 'workMapt')}</h3>
              <p data-i18n="workMapp">{t(d, 'workMapp')}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section" id="how">
        <h2 data-i18n="howTitle">{t(d, 'howTitle')}</h2>
        <div class="prose-block">
          <p data-i18n="howP1">{t(d, 'howP1')}</p>
          <p data-i18n="howP2">{t(d, 'howP2')}</p>
        </div>
      </section>

      <section class="section" id="sound">
        <div class="sound-row">
          <div>
            <h2 data-i18n="soundTitle">{t(d, 'soundTitle')}</h2>
            <p class="sub" data-i18n="soundP">{t(d, 'soundP')}</p>
          </div>
          <figure class="feel">
            <img src="/assets/feel-play.jpg" width="1400" height="1400" alt="{t(d, 'feelAlt')}" loading="lazy" />
            <figcaption data-i18n="feelCap">{t(d, 'feelCap')}</figcaption>
          </figure>
        </div>
      </section>

      <section class="section" id="compare">
        <h2 data-i18n="compareTitle">{t(d, 'compareTitle')}</h2>
        <div class="prose-block">
          <p data-i18n="compareP">{t(d, 'compareP')}</p>
          <p data-i18n="compareP2">{t(d, 'compareP2')}</p>
        </div>
      </section>

      <section class="section" id="faq">
        <h2 data-i18n="faqTitle">{t(d, 'faqTitle')}</h2>
        <div class="faq">
          <details>
            <summary data-i18n="faq1q">{t(d, 'faq1q')}</summary>
            <p data-i18n="faq1a">{t(d, 'faq1a')}</p>
          </details>
          <details>
            <summary data-i18n="faq2q">{t(d, 'faq2q')}</summary>
            <p data-i18n="faq2a">{t(d, 'faq2a')}</p>
          </details>
          <details>
            <summary data-i18n="faq3q">{t(d, 'faq3q')}</summary>
            <p data-i18n="faq3a">{t(d, 'faq3a')}</p>
          </details>
          <details>
            <summary data-i18n="faq4q">{t(d, 'faq4q')}</summary>
            <p data-i18n="faq4a">{t(d, 'faq4a')}</p>
          </details>
          <details>
            <summary data-i18n="faq5q">{t(d, 'faq5q')}</summary>
            <p data-i18n="faq5a">{t(d, 'faq5a')}</p>
          </details>
          <details>
            <summary data-i18n="faq6q">{t(d, 'faq6q')}</summary>
            <p data-i18n="faq6a">{t(d, 'faq6a')}</p>
          </details>
          <details>
            <summary data-i18n="faq7q">{t(d, 'faq7q')}</summary>
            <p data-i18n="faq7a">{t(d, 'faq7a')}</p>
          </details>
          <details>
            <summary data-i18n="faq8q">{t(d, 'faq8q')}</summary>
            <p data-i18n="faq8a">{t(d, 'faq8a')}</p>
          </details>
        </div>
      </section>
    </main>

    <footer>
      <div>© <span data-year></span> EarPT</div>
      <div>
        <a href="/privacy.html" data-i18n="footLegal">{t(d, 'footLegal')}</a>
        · <a href="/terms.html" data-i18n="footTerms">{t(d, 'footTerms')}</a>
        · <a href="/support.html" data-i18n="footSupport">{t(d, 'footSupport')}</a>
        · <a href="/product.md" data-i18n="footFacts">{t(d, 'footFacts')}</a>
      </div>
    </footer>
  </div>
  <script src="/js/site.js?v={JS_V}"></script>
</body>
</html>
"""


JS_RUNTIME = r"""
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
    const badge = document.querySelector(".store-badge img");
    if (badge && t.badge) {
      badge.setAttribute("src", t.badge);
      if (t.storeAlt) badge.setAttribute("alt", t.storeAlt);
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
"""


def js_dict_value(v: str) -> str:
    return json.dumps(v, ensure_ascii=False)


def write_site_js(i18n: dict) -> None:
    skip = {
        "htmlLang",
        "ogLocale",
        "home",
        "canonical",
    }
    parts = ["(function () {\n  const dict = {"]
    for lang, d in i18n.items():
        parts.append(f"    {lang}: {{")
        keys = [k for k in d if k not in skip]
        for i, k in enumerate(keys):
            comma = "," if i < len(keys) - 1 else ""
            parts.append(f"      {k}: {js_dict_value(d[k])}{comma}")
        comma = "," if lang != list(i18n.keys())[-1] else ""
        parts.append(f"    }}{comma}")
    parts.append("  };")
    (ROOT / "js" / "site.js").write_text("\n".join(parts) + JS_RUNTIME, encoding="utf-8")


def main() -> None:
    i18n = json.loads((ROOT / "i18n.json").read_text(encoding="utf-8"))
    for lang, d in i18n.items():
        html = page(lang, d)
        if lang == "en":
            path = ROOT / "index.html"
        else:
            path = ROOT / lang / "index.html"
            path.parent.mkdir(exist_ok=True)
        path.write_text(html, encoding="utf-8")
        print("wrote", path.relative_to(ROOT))
    write_site_js(i18n)
    print("wrote js/site.js")


if __name__ == "__main__":
    main()
