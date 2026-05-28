"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";

function FloatingInput({ type = "text", label, name, value, onChange, maxLength }: any) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={styles.fieldWrap}>
      <input type={type} name={name} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={(e) => setFocused(false)} maxLength={maxLength} className={styles.input} autoComplete="off" />
      <label className={`${styles.floatLabel} ${focused || value ? styles.floatLabelActive : ""}`}>{label}</label>
      <motion.div className={styles.fieldLine} animate={{ scaleX: focused ? 1 : 0 }} transition={{ duration: 0.4 }} />
    </div>
  );
}

function FloatingTextarea({ label, name, value, onChange }: any) {
  const [focused, setFocused] = useState(false);
  return (
    <div className={styles.fieldWrap}>
      <textarea name={name} rows={4} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={styles.textarea} />
      <label className={`${styles.floatLabel} ${focused || value ? styles.floatLabelActive : ""}`}>{label}</label>
      <motion.div className={styles.fieldLine} animate={{ scaleX: focused ? 1 : 0 }} transition={{ duration: 0.4 }} />
    </div>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  const handleNewMessage = () => setSubmitted(false);

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <motion.div className={styles.wireframe} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1.5 }} aria-hidden="true" />
      <div className={styles.fade} aria-hidden="true" />
      <motion.div className={styles.orb} animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />
      <motion.div className={styles.floatingBlob} animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div className={styles.address} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }}>
          <p className={styles.companyName}>WALL STORI DEVELOPERS PVT. LTD.,</p><div className={styles.addressDivider} />
          <p className={styles.addressLines}>3B-120, WeWork Olympia Cyberspace,<br />SIDCO Industrial Estate, Guindy,<br />Chennai-600 032.</p>
          <p className={styles.email}>E: subramani.n@wallstori.in</p><p className={styles.phone}>CALL: 72007 00077</p>
          {/* <a href="https://www.wallstori.in" className={styles.website} target="_blank" rel="noopener noreferrer">www.wallstori.in ↗</a> */}
        </motion.div>

        <motion.div className={styles.formBlock} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>
          <h3 className={styles.formTitle}>Send Us a Message</h3>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" className={styles.successState} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                <motion.div className={styles.successIcon} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}>✓</motion.div>
                <p className={styles.successText}>Thank you. We&apos;ll be in touch shortly.</p>
                <button onClick={handleNewMessage} className={styles.newMessageBtn}>Send another message →</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className={styles.formGroup}>
                <FloatingInput label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                <FloatingInput label="Phone Number" name="phone" type="tel" maxLength={10} value={formData.phone} onChange={handleChange} />
                <FloatingTextarea label="Your Message" name="message" value={formData.message} onChange={handleChange} />
                <motion.button type="submit" className={styles.submit} disabled={submitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  {submitting ? <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>Sending…</motion.span> : "Send Message →"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div className={styles.footer} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}>
        <span className={styles.copy}>© {new Date().getFullYear()} Wall Stori Developers Pvt. Ltd. All rights reserved.</span>
      </motion.div>
    </section>
  );
}