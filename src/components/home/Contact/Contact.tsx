"use client"

import ContactForm from "./ContactForm"
import { contactLinks } from "@/data/contact"
import styles from "./Contact.module.css"

export default function Contact() {
  function renderContactLinks() {
    return contactLinks.map((link) => (
      <a key={link.label} href={link.href} target={link.target} className={styles.link}>
        <div className={styles.icon}>
          <link.Icon width={32} height={32} />
        </div>
        <div>
          <div className={styles.linkLabel}>{link.label}</div>
          <div className={styles.linkValue}>{link.value}</div>
        </div>
      </a>
    ))
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.info}>
          <div className={styles.stag}>Contact</div>
          <h2 className={styles.heading}>
            Got a project<br />in <span className={styles.headingGradient}>mind?</span>
          </h2>
          <p className={styles.blurb}>
            Open to freelance work, collaborations, and full-time opportunities.
            I typically respond within 24 hours.
          </p>
          <div className={styles.links}>
            {renderContactLinks()}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
