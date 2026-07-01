"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import LogoBlocks from "./LogoBlocks";
import styles from "./About.module.css";

function WordReveal({ lines, className }: { lines: string[]; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  let globalWordIndex = 0;

  return (
    <p ref={ref} className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ");
        return (
          <span key={lineIdx} style={{ display: "block", overflow: "hidden" }}>
            {words.map((word, i) => {
              const delayIndex = globalWordIndex++;
              return (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.3em" }}>
                  <motion.span
                    style={{ display: "inline-block" }}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={inView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: delayIndex * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 0.98]);
  const labelY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-10%" });

  const paragraph1 = [
    "Wall Stori aspires and promises to be a",
    "shining pioneer, lead innovator and tangible",
    "impact driven player in the realty industry.",
    "The long term goal is to be a shining beacon",
    "in the industry and later become an",
    "undeniable force to reckon in South India's",
    "real estate market."
  ];

  // const paragraph2 = [
  //   "We aspire to be the go to brand that will",
  //   "help land/homebuyers rely on for all their",
  //   "housing needs. We will achieve this with",
  //   "optimal ground presence, carefully curated",
  //   "land banks, secure investments and",
  //   "intelligently harness the power of leading",
  //   "edge technology to cater to micro needs of",
  //   "homebuyers."
  // ];

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.labelCol}>
        <motion.h2 className={styles.label} style={{ y: labelY }}>About</motion.h2>
      </div>
      <div className={styles.imageCol}>
        <motion.div className={styles.imageBg} style={{ y: imageY, scale: imageScale }} />
        {/* <div className={styles.imageOverlay} /> */}
        <motion.p className={styles.imageCaption} initial={{ opacity: 0, x: -30 }} animate={textInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>When it comes to a<br />prime piece of land or<br />an aspirational home<br />who else but us?</motion.p>
      </div>
      <div className={styles.textCol} ref={textRef}>
        <motion.div className={styles.logoLockup} initial={{ opacity: 0, x: 30 }} animate={textInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
          {/* <LogoBlocks variant="mini" /> */}
          {/* <div><span className={styles.brandName}>WALL STORI</span><span className={styles.brandSub}>DEVELOPERS</span></div> */}
        </motion.div>
        <WordReveal lines={paragraph1} className={styles.body} />
        {/* <motion.div className={styles.statsRow} initial={{ opacity: 0, y: 24 }} animate={textInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
          {[{ val: "South", label: "India Focus" }, { val: "100%", label: "Transparency" }, { val: "New-Gen", label: "Homebuyers" }].map((stat) => (
            <div key={stat.label} className={styles.stat}><span className={styles.statVal}>{stat.val}</span><span className={styles.statLabel}>{stat.label}</span></div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}