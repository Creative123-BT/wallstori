"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import styles from "./Differentiators.module.css";

const ITEMS = [ /* same as yours */ ];

function DiffCard({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };
  const cardInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div className={styles.borderTrace} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }} />
      <motion.div className={styles.cardGlow} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
      <motion.span className={styles.num} animate={{ y: hovered ? -4 : 0 }} transition={{ duration: 0.4 }}>{item.num}</motion.span>
      <motion.span className={styles.name} animate={{ y: hovered ? -2 : 0 }} transition={{ duration: 0.4, delay: 0.04 }}>{item.name.split("\n").map((line, i, arr) => (<span key={i}>{line}{i < arr.length - 1 && <br />}</span>))}</motion.span>
    </motion.div>
  );
}

export default function Differentiators() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const sectionRef = useRef(null);

  return (
    <section className={styles.section} id="differentiators" ref={sectionRef}>
      <motion.div className={styles.ambientGrid} initial={{ opacity: 0 }} animate={headerInView ? { opacity: 0.08 } : {}} transition={{ duration: 1.5 }} aria-hidden="true" />
      <div className={styles.header} ref={headerRef}>
        <div style={{ overflow: "hidden" }}><motion.h2 className={styles.title} initial={{ y: "100%", opacity: 0 }} animate={headerInView ? { y: "0%", opacity: 1 } : {}} transition={{ duration: 0.9 }}>Go-To Brand With<br />Key Differentiators</motion.h2></div>
        <div className={styles.headerRight}>
          <motion.p className={styles.desc} initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={headerInView ? { opacity: 0.8, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.9, delay: 0.2 }}>Homebuyers can rely on our entire gamut of systematic, wide ranging services. Right from our core, tested team of professionals, with decades of industry exposure, real-time market intelligence and property market information nuggets.</motion.p>
          <motion.p className={styles.desc} style={{ marginTop: "16px" }} initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={headerInView ? { opacity: 0.8, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.9, delay: 0.35 }}>We are armed with an enviable track record for delivering the impossible.</motion.p>
        </div>
      </div>
      <div className={styles.grid} style={{ perspective: "1000px" }}>
        {ITEMS.map((item, i) => (<DiffCard key={item.num} item={item} index={i} />))}
      </div>
    </section>
  );
}