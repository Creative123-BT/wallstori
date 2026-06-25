"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./HomeBuying.module.css";

export default function HomeBuying() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const wireframeY = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);

  return (
    <section className={styles.section} id="homebuying" ref={sectionRef}>
      <motion.div className={styles.wireframe} style={{ y: wireframeY }} aria-hidden="true">
        <Image src="/images/home-buying.png" alt="House Wireframe" fill className={styles.wireframeImage} />
      </motion.div>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          SHAPING THE HOME BUYING<br />NEEDS OF THE NEW-GEN INDIAN
        </h2>
        <div className={styles.contentRow}>
          <p className={styles.desc}>
            We are poised to delight a new age homebuyer who seeks significant added value. Right from identifying the right land banks, to getting approvals and sanctions, to carefully planning and executing the residential/ housing, to interacting with our well-oiled, transparent, customer friendly teams, we ensure silken smooth tractions.
          </p>
        </div>
      </div>
    </section>
  );
}