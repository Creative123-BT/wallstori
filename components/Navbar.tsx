"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./Navbar.module.css";
import LogoBlocks from "./LogoBlocks";

const NAV_LINKS = [

  { label: "Philosophy", href: "#vision" },
  { label: "Profile", href: "#about" },
  { label: "Value Add", href: "#differentiators" },
  { label: "Process", href: "#homebuying" },
  { label: "Pillars", href: "#pillars" },
  { label: "Leadership", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Connect", href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
    // Update URL hash without jumping
    window.history.pushState(null, "", href);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={styles.navLink}
      style={{ x: springX }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => x.set(0)}
      onClick={handleClick}
    >
      <span className={styles.navLinkText}>{label}</span>
    </motion.a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show logo if scrolled past roughly the hero section (e.g., 500px)
    if (latest > 500) {
      if (!showLogo) setShowLogo(true);
    } else {
      if (showLogo) setShowLogo(false);
    }
  });

  return (
    <>
      <motion.header
        className={styles.navbar}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Desktop nav pill */}
        <nav className={styles.navLinks} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} />
        </button>

        {/* Mobile menu */}
        <motion.div
          className={styles.mobileMenu}
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20, pointerEvents: menuOpen ? "all" : "none" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
              transition={{ delay: menuOpen ? i * 0.07 : 0, duration: 0.4 }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
                }
                window.history.pushState(null, "", link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </motion.header>

      {/* Floating Logo - appears on scroll */}
      <motion.div
        className={styles.floatingLogo}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showLogo ? 1 : 0, scale: showLogo ? 1 : 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ pointerEvents: showLogo ? "auto" : "none" }}
      >
        <a href="#hero" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <LogoBlocks variant="mini" />
        </a>
      </motion.div>
    </>
  );
}