import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.wireframe}  aria-hidden="true" />
      <div className={styles.fade}       aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.address}>
          <p className={styles.companyName}>WALL STORI DEVELOPERS PVT. LTD.,</p>
          <p className={styles.addressLines}>
            3B-120, WeWork Olympia Cyberspace,<br />
            SIDCO Industrial Estate, Guindy,<br />
            Chennai-600 032.
          </p>
          <p className={styles.email}>E: subramani.n@wallstori.in</p>

          <p className={styles.phone}>CALL: 72007 00077</p>

          <a href="https://www.wallstori.in" className={styles.website} target="_blank" rel="noopener noreferrer">
            www.wallstori.in
          </a>
        </div>

        {/* Optional: quick contact form */}
        <div className={styles.formBlock}>
          <h3 className={styles.formTitle}>Send Us a Message</h3>
          <div className={styles.formGroup}>
            <input type="text"        placeholder="Your Name"  className={styles.input} />
            <input type="email"       placeholder="Email"      className={styles.input} />
            <input type="tel"         placeholder="Phone"      className={styles.input} />
            <textarea rows={4}        placeholder="Message"    className={styles.textarea} />
            <button className={styles.submit}>Send Message</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.copy}>© {new Date().getFullYear()} Wall Stori Developers Pvt. Ltd. All rights reserved.</span>
      </div>
    </section>
  );
}
