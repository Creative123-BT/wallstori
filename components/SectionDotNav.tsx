"use client";

import { useEffect, useState } from "react";
import styles from "./SectionDotNav.module.css";

const SECTIONS = [
  { id: "hero",            label: "Top" },
  { id: "vision",          label: "Philosophy" },
  { id: "about",           label: "Profile" },
  { id: "differentiators", label: "Value Add" },
  { id: "homebuying",      label: "Process" },
  { id: "pillars",         label: "Pillars" },
  { id: "team",            label: "Leadership" },
  { id: "partners",        label: "Partners" },
  { id: "contact",         label: "Connect" },
];

export default function SectionDotNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Detect active section when it is in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Standard smooth scroll which triggers Lenis
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.dotNav} aria-label="Section navigation">
      <ul className={styles.list}>
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <li key={sec.id} className={styles.item}>
              <a
                href={`#${sec.id}`}
                onClick={(e) => handleClick(e, sec.id)}
                className={`${styles.dotLink} ${isActive ? styles.active : ""}`}
                aria-label={`Scroll to ${sec.label}`}
              >
                <span className={styles.dot} />
                <span className={styles.tooltip}>{sec.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
