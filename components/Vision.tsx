"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./Vision.module.css";

export default function Vision() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className={styles.vision} id="vision" ref={sectionRef}>
      <motion.div className={styles.watermark} aria-hidden="true">
        <Image src="/images/watermark.png" alt="Watermark" fill className={styles.watermarkImage} />
      </motion.div>
      <div className={styles.bannerOverlay}>
        <Image src="/images/vision-banner.png" alt="Vision Banner" fill className={styles.bannerImage} />
      </div>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>Wall Stori</h2>
        </div>
        <div className={styles.right}>
          <blockquote className={styles.quote}>&quot;We aspire to be a thought led pioneer and <br /> an alternative challenger brand in the <br /> Real Estate Terrain of South India. <br /> We promise to reimagine, innovate, <br /> strive hard to cater to discerning <br /> progressive buyers and leave behind <br /> an indelible imprint in the housing category&quot;</blockquote>
        </div>
      </div>
    </section>
  );
}