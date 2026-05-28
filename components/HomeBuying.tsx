"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HomeBuying.module.css";

export default function HomeBuying() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const wireframeY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section className={styles.section} id="homebuying" ref={sectionRef}>
      <motion.div className={styles.wireframe} style={{ y: wireframeY }} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.title}>Shaping The Home Buying Needs of The New-Gen Indian</h2>
        <p className={styles.desc}>We are poised to delight a new age homebuyer who seeks significant added value. Right from identifying the right land banks, to getting approvals and sanctions, to carefully planning and executing the residential/housing, to interacting with our well-oiled, transparent, customer friendly teams, we ensure silken smooth tractions.</p>
      </div>
    </section>
  );
}