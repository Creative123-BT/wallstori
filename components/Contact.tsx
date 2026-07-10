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
      <motion.div className={styles.wireframe} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} aria-hidden="true">
        <Image src="/images/footer.png" alt="Blueprint" fill className={styles.bannerImage} />
      </motion.div>
      <div className={styles.inner}>
        <motion.div className={styles.address} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
          <p className={styles.companyName}>WALL STORI DEVELOPERS PVT., LTD.,</p>
          <a href="https://maps.app.goo.gl/yKF3U5vdLVtMpW448" target="_blank" rel="noopener noreferrer" className={styles.addressLines} style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> */}
            <div>
              3B-120, WeWork Olympia Cyberspace,<br />
              SIDCO Industrial Estate, Guindy, Chennai-600 032.
            </div>
          </a>
          <a href="tel:7200700077" className={styles.phone} style={{ textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            72007 00077
          </a>
          <a href="mailto:subramani.n@wallstori.in" className={styles.email} style={{ textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            subramani.n@wallstori.in
          </a>
        </motion.div>
      </div>

      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4 }}>
        <span className={styles.copy}>© {new Date().getFullYear()} Wall Stori Developers Pvt. Ltd. All rights reserved.</span>
      </motion.div>
    </section>
  );
}