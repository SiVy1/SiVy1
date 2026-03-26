import React, { useState } from "react";

const dict = {
  pl: {
    role: "Developer",
    bio: "Tworzę webowe aplikacje i automatyzacje. Prosty design, czysty kod.",
    projects: "Projekty",
    lang: "Tag:",
    repo: "Otwórz aplikację / projekt",
    contact: "Napisz do mnie"
  },
  en: {
    role: "Developer",
    bio: "I build web apps and automations. Simple design, clean code.",
    projects: "Projects",
    lang: "Tag:",
    repo: "Open app / repo",
    contact: "Contact me"
  }
};

const curatedProjects = [
  {
    id: "tsuki",
    name: "tsuki.com.pl",
    desc: {
      pl: "Mój projekt webowy związany ze społecznością anime.",
      en: "My web project built for the anime community."
    },
    language: "Web",
    url: "https://tsuki.com.pl"
  },
  {
    id: "sivycord",
    name: "sivycord",
    desc: {
      pl: "Rozbudowany klon Discorda",
      en: "Advanced Discord clone"
    },
    language: "TypeScript/Rust",
    url: "https://github.com/SiVy1/sivycord"
  },
  {
    id: "watchtogether",
    name: "WatchTogether",
    desc: {
      pl: "Rozszerzenie do przeglądarki umożliwiające synchroniczne oglądanie wideo ze znajomymi.",
      en: "Browser extension allowing synchronized video watching with friends."
    },
    language: "JavaScript",
    url: "https://github.com/SiVy1/WatchTogetherExtension"
  },
  {
    id: "seanime-skip",
    name: "seanime-skip-ext",
    desc: {
      pl: "Rozszerzenie pomijające automatycznie intro i outro (integracja z aplikacją Seanime).",
      en: "Extension that automatically skips intro and outro sequences (Seanime integration)."
    },
    language: "TypeScript",
    url: "https://github.com/SiVy1/seanime-anime-skip-ext"
  },
  {
    id: "anime-dl",
    name: "anime-downloader",
    desc: {
      pl: "Narzędzie automatyzujące pobieranie ulubionych serii z sieci.",
      en: "Automation tool for downloading favorite series from the web."
    },
    language: "TypeScript",
    url: "https://github.com/SiVy1/anime-downloader"
  },
  {
    id: "shop-react",
    name: "shop-react",
    desc: {
      pl: "Minimalistyczna aplikacja sklepu internetowego e-commerce.",
      en: "Minimalist e-commerce store application."
    },
    language: "React",
    url: "https://github.com/SiVy1/shop-react"
  }
];

export default function App() {
  const [lang, setLang] = useState("pl");
  const t = dict[lang];

  return (
    <div className="layout">
      {/* Header Panel */}
      <header className="panel header-panel">
        <div className="brand">SiVy1</div>
        <button 
          className="btn-toggle" 
          onClick={() => setLang(l => l === "pl" ? "en" : "pl")}
        >
          {lang === "pl" ? "EN" : "PL"}
        </button>
      </header>

      {/* Hero Panel */}
      <section className="panel hero-panel">
        <h1>SEWERYN</h1>
        <div className="badge">{t.role}</div>
        <p className="bio">{t.bio}</p>
        <div className="hero-links">
          <a href="https://github.com/SiVy1" target="_blank" rel="noreferrer" className="btn-outline">
            GitHub
          </a>
        </div>
      </section>

      {/* Projects Title Panel */}
      <div className="panel title-panel">
        <h2>{t.projects}</h2>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {curatedProjects.map((p) => (
          <article key={p.id} className="panel project-panel">
            <h3>{p.name}</h3>
            <p>{p.desc[lang]}</p>
            <div className="project-meta">
              <span>{t.lang} {p.language}</span>
            </div>
            <a href={p.url} target="_blank" rel="noreferrer" className="btn-solid">
              {t.repo}
            </a>
          </article>
        ))}
      </div>

      {/* Footer Panel */}
      <footer className="panel footer-panel">
        <a href="https://github.com/SiVy1" target="_blank" rel="noreferrer">
          {t.contact}
        </a>
      </footer>
    </div>
  );
}
