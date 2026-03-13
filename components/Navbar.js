import Link from "next/link";
import Image from "next/image";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#games", label: "Games" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "https://www.gerstudio.com", label: "GerStudio" },
  ];

  return (
    <header className="site-nav">
      <div className="container-wrap nav-inner">
        <Link href="/" className="brand-mark" aria-label="Mayank Meena home">
          <Image
            src="/logo-mark.png"
            alt="Mayank Meena logo"
            width={42}
            height={42}
            priority
          />
        </Link>
        <ul className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a className="btn ghost" href="#contact">
            Work With Me
          </a>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
