"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import styles from "./Pillars.module.css";

const PILLARS = [
  {
    id: "transparency",
    title: "Transparency",
    body: `"Transparency" is the catchword that we adhere to in every sphere of our operation and home-buying process`,
    color: "purple",
  },
  {
    id: "professional",
    title: "Professional Service",
    body: "Our empowered knowledge led staff strive hard to provide an unrivalled world class customer interaction experience",
    color: "coral",
  },
  {
    id: "quality",
    title: "Quality",
    body: "Our quality obsession is unmatched with a near zero tolerance policy. Every move of ours is aimed at improving the value proposition",
    color: "lime",
  },
  {
    id: "delivery",
    title: "On Time Delivery",
    body: "We ensure no client of ours ever experiences any breach of deadline promises",
    color: "orange",
  },
];

export default function Pillars() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const { scrollYProgress: introProgress } = useScroll({ target: introRef, offset: ["start start", "end start"] });
  const introY = useTransform(introProgress, [0, 1], ["0%", "-15%"]);
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-10%" });

  return (
    <section className={styles.section} id="pillars" ref={sectionRef}>
      <motion.div className={styles.intro} ref={introRef} style={{ y: introY, position: "sticky", top: 100 }}>
        <span className={styles.tag}>Our Foundation</span>
        <h2 className={styles.title}>Our <span className={styles.numCircle}>4</span> Concrete<br />Pillars That<br />Delight Homebuyers</h2>
        <p className={styles.sub}>We diligently concentrate on the most sought after missing ingredients in the realty market</p>
      </motion.div>
      <div className={styles.grid} ref={cardsRef}>
        {PILLARS.map((p, idx) => (
          <motion.div key={p.id} className={`${styles.card} ${styles[p.color]}`} initial={{ opacity: 0, y: 60 }} animate={cardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}>
            <div className={styles.divider} /><h3 className={styles.cardTitle}>{p.title}</h3><p className={styles.cardBody}>{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}