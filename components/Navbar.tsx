"use client";

import { useState, useEffect } from "react";
import LogoBlocks from "./LogoBlocks";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About",       href: "#about" },
  { label: "Why Us",      href: "#differentiators" },
  { label: "Homebuying",  href: "#homebuying" },
  { label: "Pillars",     href: "#pillars" },
  { label: "Team",        href: "#team" },
  { label: "Partners",    href: "#partners" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          <LogoBlocks variant="nav" />
          <div className={styles.logoText}>
            <span className={styles.brandName}>WALL STORI</span>
            <span className={styles.brandSub}>DEVELOPERS</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className={styles.cta}>
          Get In Touch
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={handleLinkClick}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={handleLinkClick}>
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
