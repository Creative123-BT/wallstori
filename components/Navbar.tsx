"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import LogoBlocks from "./LogoBlocks";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Profile",    href: "#about" },
  { label: "Philosophy", href: "#vision" },
  { label: "Value Add",  href: "#differentiators" },
  { label: "Partners",   href: "#partners" },
  { label: "Connect",    href: "#contact" },
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

  return (
    <motion.a
      ref={ref}
      href={href}
      className={styles.navLink}
      style={{ x: springX }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => x.set(0)}
    >
      <span className={styles.navLinkText}>{label}</span>
      <motion.span
        className={styles.navLinkLine}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left: Logo Wrap */}
      <a href="#hero" className={styles.logoWrap}>
        <LogoBlocks variant="nav" />
        <div className={styles.logoText}>
          <span className={styles.logoName}>WALL STORI</span>
          <span className={styles.logoSub}>DEVELOPERS</span>
        </div>
      </a>

      {/* Middle: Desktop nav */}
      <nav className={styles.navLinks} aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>

      {/* Right: CTA Actions Group */}
      <div className={styles.actionsGroup}>
        <a href="#contact" className={styles.btnConsultation}>
          Get Consultation
        </a>
        <a href="#contact" className={styles.btnGetInTouch}>
          GET IN TOUCH
        </a>
      </div>

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
        <a href="#contact" className={styles.mobileCtaPill} onClick={() => setMenuOpen(false)}>
          Get Consultation
        </a>
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
            transition={{ delay: menuOpen ? i * 0.07 : 0, duration: 0.4 }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
        <a href="#contact" className={styles.mobileCtaBox} onClick={() => setMenuOpen(false)}>
          GET IN TOUCH
        </a>
      </motion.div>
    </motion.header>
  );
}