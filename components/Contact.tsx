"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section className={`${styles.section} ${montserrat.className}`} id="contact" ref={sectionRef}>
      <motion.div className={styles.wireframe} initial={{ opacity: 0 }} animate={inView ? { opacity: 0.75 } : {}} transition={{ duration: 1.5 }} aria-hidden="true">
        <Image src="/images/banner.png" alt="Blueprint" fill className={styles.bannerImage} />
      </motion.div>
      <div className={styles.inner}>
        <motion.div className={styles.address} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <p className={styles.companyName}>WALL STORI DEVELOPERS PVT. LTD.,</p>
          <p className={styles.addressLines}>
            3B-120, WeWork Olympia Cyberspace,<br />
            SIDCO Industrial Estate, Guindy, Chennai-600 032.<br />
            E: subramani.n@wallstori.in
          </p>
          <p className={styles.phone}>CALL: 72007 00077</p>
        </motion.div>
      </div>

      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }}>
        <span className={styles.copy}>© {new Date().getFullYear()} Wall Stori Developers Pvt. Ltd. All rights reserved.</span>
      </motion.div>
    </section>
  );
}