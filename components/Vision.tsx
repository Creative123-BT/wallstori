"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Vision.module.css";

export default function Vision() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className={styles.vision} id="vision" ref={sectionRef}>
      <motion.div className={styles.watermark} style={{ y: watermarkY }} aria-hidden="true">Wall Stori</motion.div>
      <div className={styles.inner}>
        <div className={styles.left}><h2 className={styles.heading}>Wall Stori</h2></div>
        <div className={styles.right}><blockquote className={styles.quote}>&quot;We aspire to be a thought led pioneer and an alternative challenger brand in the Real Estate Terrain of South India. We promise to reimagine, innovate, strive hard to cater to discerning progressive buyers and leave behind an indelible imprint in the housing category&quot;</blockquote></div>
      </div>
    </section>
  );
}