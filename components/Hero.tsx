"use client";

import { motion, Variants } from "framer-motion";
import LogoBlocks from "./LogoBlocks";
import styles from "./Hero.module.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Wireframe grid overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.wireframe} 
        aria-hidden="true" 
      />
      <div className={styles.wireframeFade} aria-hidden="true" />

      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <LogoBlocks variant="hero" />
        </motion.div>

        <motion.div className={styles.brandBlock} variants={itemVariants}>
          <span className={styles.brandName}>WALL STORI</span>
          <span className={styles.brandSub}>DEVELOPERS</span>
        </motion.div>

        <motion.div className={styles.divider} variants={itemVariants} />

        <motion.p className={styles.tagline} variants={itemVariants}>
          Pioneering South India&apos;s real estate terrain with vision,
          innovation, and an indelible mark in the housing category.
        </motion.p>

        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#about" className={styles.btnPrimary}>Discover More</a>
          <a href="#contact" className={styles.btnGhost}>Get In Touch</a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className={styles.scrollCue} 
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  );
}
