"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <motion.div className={styles.wireframe} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} aria-hidden="true" />
      <div className={styles.fade} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div className={styles.address} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <p className={styles.companyName}>WALL STORI DEVELOPERS PVT. LTD.,</p>
          <div className={styles.addressDivider} />
          <p className={styles.addressLines}>3B-120, WeWork Olympia Cyberspace,<br />SIDCO Industrial Estate, Guindy,<br />Chennai-600 032.</p>
          <p className={styles.email}>E: subramani.n@wallstori.in</p>
          <p className={styles.phone}>CALL: 72007 00077</p>
        </motion.div>
      </div>

      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }}>
        <span className={styles.copy}>© {new Date().getFullYear()} Wall Stori Developers Pvt. Ltd. All rights reserved.</span>
      </motion.div>
    </section>
  );
}