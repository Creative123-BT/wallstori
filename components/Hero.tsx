"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./Hero.module.css";
import LogoBlocks from "./LogoBlocks";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // ---------- MOUSE PARALLAX ----------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  // Mouse depth movements
  const blueprintMouseX = useTransform(springX, [-1, 1], [-20, 20]);
  const blueprintMouseY = useTransform(springY, [-1, 1], [-12, 12]);

  const logoMouseX = useTransform(springX, [-1, 1], [-10, 10]);
  const logoMouseY = useTransform(springY, [-1, 1], [-6, 6]);

  const textMouseX = useTransform(springX, [-1, 1], [-5, 5]);
  const textMouseY = useTransform(springY, [-1, 1], [-3, 3]);

  // ---------- COMBINED PARALLAX Y ----------
  const combinedBlueprintY = useTransform(
    [springY, scrollYProgress],
    ([latestSpringY, latestScrollY]: number[]) => {
      const mouseYVal = latestSpringY * 12;
      const scrollYVal = latestScrollY <= 0.5 ? (latestScrollY / 0.5) * -80 : -80;
      return mouseYVal + scrollYVal;
    }
  );

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
      {/* Top Right Text */}


      {/* Blueprint Image Full Screen Background */}
      <motion.div
        className={styles.blueprintContainer}
        style={{
          x: blueprintMouseX,
          y: combinedBlueprintY,
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src="/images/banner.png" alt="Luxury Architectural Blueprint" className={styles.blueprintImage} fill priority />
      </motion.div>

      {/* Center Logo */}
      <motion.div
        className={styles.centerLogo}
        style={{
          x: logoMouseX,
          y: logoMouseY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <LogoBlocks variant="hero" />
      </motion.div>

      <motion.div
        className={styles.topRightText}
        style={{
          x: textMouseX,
          y: textMouseY,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        WE ARE COMMITTED TO CHAMPIONING HOME BUYER DREAMS<br />
        AND REDEFINING INDUSTRY BENCHMARKS
      </motion.div>
    </section>
  );
}