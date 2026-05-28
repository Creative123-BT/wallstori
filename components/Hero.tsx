"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Satisfy } from "next/font/google";
import styles from "./Hero.module.css";
import LogoBlocks from "./LogoBlocks";


const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // ---------- SCROLL PARALLAX ----------
  // Content: moves up slightly + fades out slowly on scroll
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Blueprint: slides up slightly slower for depth
  const blueprintScrollY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  // ---------- MOUSE PARALLAX ----------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Mouse depth movements
  const contentMouseX = useTransform(springX, [-1, 1], [-8, 8]);
  const contentMouseY = useTransform(springY, [-1, 1], [-6, 6]);
  const blueprintMouseX = useTransform(springX, [-1, 1], [-20, 20]);
  const blueprintMouseY = useTransform(springY, [-1, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className={styles.hero}
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Pristine Light Grid Overlay (Subtle) */}
      <div className={styles.gridOverlay} aria-hidden="true" />



      {/* Blueprint Image on the Right */}
      <motion.div
        className={styles.blueprintContainer}
        style={{
          x: blueprintMouseX,
          y: blueprintMouseY,
          y: blueprintScrollY,
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/banner.png"
          alt="Luxury Architectural Blueprint"
          className={styles.blueprintImage}
        />
      </motion.div>

      {/* Foreground Content on the Left */}
      <motion.div
        className={styles.content}
        style={{
          x: contentMouseX,
          y: contentMouseY,
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* Wall Stori script branding */}
        <LogoBlocks variant="hero" />

        {/* Subtitle paragraph */}
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          Pioneering South India&apos;s real estate terrain with vision,
          innovation, and an indelible mark in the housing category
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <a href="#about" className={styles.btnDiscover}>
            Discover more
          </a>
          <a href="#contact" className={styles.btnGetInTouchHero}>
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Luxury Subtle Grain texture overlay */}
      <div className={styles.grainOverlay} aria-hidden="true" />
    </section>
  );
}