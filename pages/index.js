import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const terminalWords = [
    "Coding",
    "Building",
    "Shipping",
    "Testing",
    "Iterating",
  ];
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % terminalWords.length);
    }, 1400);

    return () => clearInterval(timer);
  }, [terminalWords.length]);

  const services = [
    {
      title: "Web Development",
      icon: "01",
      details:
        "Modern websites, dashboards, SaaS frontends, and landing pages optimized for speed and conversion.",
    },
    {
      title: "Blockchain Development",
      icon: "02",
      details:
        "Smart contracts, dApps, wallets, and web3 integrations built with security-first architecture.",
    },
    {
      title: "Indie Game Development",
      icon: "03",
      details:
        "Game design, gameplay systems, and production pipelines using Godot and custom tooling.",
    },
    {
      title: "Mobile Apps and Game Apps",
      icon: "04",
      details:
        "Android-focused utility apps and mobile-first game experiences from prototype to release.",
    },
  ];

  const games = [
    {
      name: "Tomato Survivor",
      genre: "Shoot n Sauce",
      status: "Available now",
      stack: "GerStudio original",
      link: "https://www.gerstudio.com/tomato",
      cta: "View Details",
      cover:
        "https://www.gerstudio.com/_next/static/media/FeaturedImage-tomato.07f17528.png",
    },
    {
      name: "Ball Pit Blitz",
      genre: "Brick Breaker",
      status: "Available now",
      stack: "GerStudio original",
      link: "https://www.gerstudio.com/ballpitblitz",
      cta: "View Details",
      cover:
        "https://www.gerstudio.com/_next/static/media/ballpitblitzcover.4b0a335e.png",
    },
    {
      name: "RiverRush",
      genre: "Offline board game",
      status: "Available now",
      stack: "Mobile release",
      link: "https://play.google.com/store/apps/details?id=com.gerstudio.riverrush",
      cta: "Play Now",
      cover:
        "https://www.gerstudio.com/_next/static/media/riverrush-cover.641565f4.png",
    },
    {
      name: "Space Bird",
      genre: "Space Shooter",
      status: "Available now",
      stack: "GerStudio original",
      link: "https://www.gerstudio.com/spacebird",
      cta: "View Details",
      cover:
        "https://www.gerstudio.com/_next/static/media/spacebird-cover.1cd14864.png",
    },
    {
      name: "Last War Z",
      genre: "Zombie Survival Strategy",
      status: "Available now",
      stack: "GerStudio original",
      link: "https://www.gerstudio.com/lastwar-z",
      cta: "View Details",
      cover:
        "https://www.gerstudio.com/_next/static/media/Lastwar-z_Cover.60ab4e45.png",
    },
    {
      name: "Block Blast RPG",
      genre: "Puzzle RPG Adventure",
      status: "Available now",
      stack: "GerStudio original",
      link: "https://www.gerstudio.com/blockblastrpg",
      cta: "View Details",
      cover:
        "https://www.gerstudio.com/_next/static/media/blockblast-cover.c238890a.png",
    },
  ];

  const projects = [
    {
      title: "Chain Pay",
      text: "Crypto payment workflow redesign with smoother onboarding and clearer wallet state handling.",
      link: "https://chainpay.vercel.app",
    },
    {
      title: "Docxie",
      text: "A practical conversion utility focused on speed and low-friction usage patterns.",
      link: "https://docxie.click",
    },
    {
      title: "BrainLess UI",
      text: "Reusable component system for faster product shipping and consistent interaction patterns.",
      link: "https://brainless-ui.vercel.app",
    },
  ];

  return (
    <>
      <Head>
        <title>Mayank Meena | Developer Portfolio</title>
        <meta
          name="description"
          content="Mayank Meena developer portfolio: web dev, blockchain dev, indie game dev, and mobile app development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container-wrap home-flow">
        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />

        <section className="hero-panel hero-grid reveal-up">
          <div className="hero-copy">
            <p className="eyebrow">Mayank Meena · Developer Portfolio</p>
            <h1>
              Web Developer, Blockchain Developer, Indie Game Developer, and
              Mobile App Builder.
            </h1>
            <p>
              I am a solo developer building complete digital products across
              web, blockchain, games, and mobile. I handle strategy, UI,
              frontend, backend integration, and shipping.
            </p>
            <div className="stack-chips">
              <span>Next.js</span>
              <span>React</span>
              <span>Solidity</span>
              <span>Web3</span>
              <span>Godot</span>
              <span>Flutter</span>
              <span>Kotlin</span>
              <span>Mobile Apps</span>
            </div>
            <div className="hero-actions">
              <a className="btn" href="#contact">
                Start a Project
              </a>
              <a className="btn ghost" href="#games">
                Explore Games
              </a>
              <a
                className="btn ghost"
                href="https://www.gerstudio.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit GerStudio.com
              </a>
            </div>
          </div>
          <div className="hero-visual-wrap">
            <div className="hero-visual-card tilt-card">
              <Image
                src="https://www.gerstudio.com/_next/static/media/mayankProfile2.215b8e1d.png"
                alt="Mayank Meena"
                width={640}
                height={800}
                sizes="(max-width: 980px) 70vw, 340px"
              />
              <div className="hero-visual-meta">
                <h3>Mayank Meena</h3>
                <span className="hero-visual-role">Solo Dev Mode</span>
                <p>{terminalWords[activeWordIndex]}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="panel reveal-up reveal-delay-1">
          <h2>About Me</h2>
          <p>
            I am Mayank Meena, an independent developer. This is my personal
            portfolio. GerStudio is my game and creative studio, where I ship
            indie titles and experiments.
          </p>
          <div className="kpi-grid">
            <article>
              <h3>4 tracks</h3>
              <p>
                Web, blockchain, mobile apps, and game development in one
                coherent pipeline.
              </p>
            </article>
            <article>
              <h3>Solo full-stack execution</h3>
              <p>One accountable owner from strategy to maintenance.</p>
            </article>
            <article>
              <h3>Production mindset</h3>
              <p>Ship fast, iterate from feedback, and improve continuously.</p>
            </article>
          </div>
        </section>

        <section id="services" className="panel reveal-up reveal-delay-2">
          <h2>Services</h2>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="card tilt-card">
                <span className="card-index">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="games" className="panel reveal-up reveal-delay-3">
          <h2>Game Projects (from GerStudio)</h2>
          <p>
            These are real games from GerStudio that I built and published. You
            can explore each game directly from here.
          </p>
          <div className="card-grid">
            {games.map((game) => (
              <article key={game.name} className="card game-card tilt-card">
                <div className="game-cover-wrap">
                  <Image
                    src={game.cover}
                    alt={game.name}
                    width={800}
                    height={450}
                    sizes="(max-width: 760px) 92vw, (max-width: 980px) 46vw, 31vw"
                    className="game-cover"
                  />
                </div>
                <h3>{game.name}</h3>
                <p>{game.genre}</p>
                <p>{game.status}</p>
                <p>{game.stack}</p>
                <a href={game.link} target="_blank" rel="noreferrer">
                  {game.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <a
              className="btn ghost"
              href="https://www.gerstudio.com/#games"
              target="_blank"
              rel="noreferrer"
            >
              View Full Game Catalog
            </a>
          </div>
        </section>

        <section id="projects" className="panel reveal-up reveal-delay-4">
          <h2>Selected Work</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="card tilt-card">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Visit project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="panel cta-panel reveal-up reveal-delay-5"
        >
          <h2>Let us build your next product</h2>
          <p>
            Available for selected freelance and product collaborations in web,
            blockchain, mobile apps, and indie game development.
          </p>
          <div className="hero-actions">
            <a className="btn" href="mailto:dcryptoniun+folio@gmail.com">
              dcryptoniun+folio@gmail.com
            </a>
            <a
              className="btn ghost"
              href="https://www.fiverr.com/mayankmeena"
              target="_blank"
              rel="noreferrer"
            >
              Fiverr Profile
            </a>
            <a
              className="btn ghost"
              href="https://www.gerstudio.com"
              target="_blank"
              rel="noreferrer"
            >
              GerStudio.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
