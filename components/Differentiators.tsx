"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import styles from "./Differentiators.module.css";
import Image from "next/image";

// 13 items exactly as extracted from your image
const ITEMS = [
  { num: "1", name: "FAR-SIGHTED\nLEADERSHIP" },
  { num: "2", name: "STRONG\nCOSTOMER\nSUPPORT TEAMS" },
  { num: "3", name: "LOCAL MARKET\nINSIGHTS" },
  { num: "4", name: "NEED GAP\nANALYSIS" },
  { num: "5", name: "BUYER\nSENTIMENT\nINTELLIGENCE" },
  { num: "6", name: "VALUE BASED\nSEGMENTATION" },
  { num: "7", name: "COMPETITIVE\nPRICING" },
  { num: "8", name: "FINANCIAL\nOUTLAYS" },
  { num: "9", name: "CATEGORY PAIN\nPOINT SOLUTIONS" },
  { num: "10", name: "TECHNOLOGY\nNOUS" },
  { num: "11", name: "LEGAL\nCLEARANCE\nNORMS" },
  { num: "12", name: "GROWTH\nPOTENTIAL\nPATTERNS" },
  { num: "13", name: "INVESTMENT\nPAY-OFF\nPOTENTIAL" },
];

// Predefined positions (percentage based, relative to image container)
// Adjust these values to match your exact image layout
const POSITIONS = [
  { top: "-2%", left: "2%" },   // 01 – FARSIGHTED STRONG
  { top: "-2%", left: "19%" },  // 02 – LOCAL NEED GAP
  { top: "-2%", left: "36%" },  // 03 – LEADERSHIP CUSTOMER
  { top: "-2%", left: "53%" },  // 04 – MARKET ANALYSIS
  { top: "-2%", left: "70%" }, // 05 – SUPPORT INSIGHTS
  { top: "-2%", left: "87%" }, // 06 – TEAMS PROFILE
  { top: "26%", left: "19%" },  // 07 – BUYER SENTIMENT INTELLIGENCE
  { top: "26%", left: "36%" }, // 08 – VALUE BASED SEGMENTATION
  { top: "26%", left: "53%" }, // 09 – COMPETITIVE PRICING
  { top: "26%", left: "70%" },  // 10 – FINANCIAL OUTLAYS
  { top: "26%", left: "87%" }, // 11 – CATEGORY PAIN POINT SOLUTIONS
  { top: "55%", left: "70%" }, // 12 – TECHNOLOGY NOUS & LEGAL CLEARANCE
  { top: "55%", left: "87%" }, // 13 – GROWTH POTENTIAL PATTERNS & INVESTMENT
];

function DiffCard({ item, index, position }: { item: typeof ITEMS[0]; index: number; position: typeof POSITIONS[0] }) {
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
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)", // center the card on the coordinates
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        width: "clamp(140px, 18vw, 220px)", // responsive card size
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={cardInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "backOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >

      <motion.span className={styles.num} animate={{ y: hovered ? -4 : 0 }} transition={{ duration: 0.4 }}>{item.num}</motion.span>
      <motion.span className={styles.name} animate={{ y: hovered ? -2 : 0 }} transition={{ duration: 0.4, delay: 0.04 }}>
        {item.name.split("\n").map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </motion.span>
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
        <div style={{ overflow: "hidden" }}>
          <motion.h2 className={styles.title} initial={{ y: "100%", opacity: 0 }} animate={headerInView ? { y: "0%", opacity: 1 } : {}} transition={{ duration: 0.9 }}>
            Go-To Brand With<br />Key Differentiators
          </motion.h2>
        </div>
        {/* <div className={styles.headerRight}>
          <motion.p className={styles.desc} initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.9, delay: 0.2 }}>
            Homebuyers can rely on our entire gamut of systematic, wide ranging services. Right from our core, tested team of professionals, with decades of industry exposure, real-time market intelligence and property market information nuggets.
          </motion.p>
          <motion.p className={styles.desc} style={{ marginTop: "16px" }} initial={{ opacity: 0, y: 20, filter: "blur(6px)" }} animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}} transition={{ duration: 0.9, delay: 0.35 }}>
            We are armed with an enviable track record for delivering the impossible.
          </motion.p>
        </div> */}
      </div>

      {/* Image container with absolutely positioned cards */}
      <div className={styles.imageOverlayContainer}>
        <Image
          className={styles.backgroundImage}
          src="/images/differentiator-1.jpeg"
          alt="Brand differentiators illustration"
          loading="lazy"
          fill
        />
        <div className={styles.cardsContainer} style={{ width: "100%", height: "100%" }}>
          {ITEMS.map((item, i) => (
            <DiffCard key={item.num} item={item} index={i} position={POSITIONS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}