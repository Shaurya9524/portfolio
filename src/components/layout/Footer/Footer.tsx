"use client"

import { ArrowUpIcon } from "@/components/ui/Icons"
import CursorToggle from "@/components/ui/Cursor/Toggle"
import { footerLinks, footerSocials } from "@/data/footer"
import styles from "./Footer.module.css"

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  function renderSocials() {
    return footerSocials.map(({ href, label, Icon }) => (
      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label={label}>
        <Icon size={15} />
      </a>
    ))
  }

  function renderLinks() {
    return footerLinks.map(({ category, links }) => (
      <div key={category} className={styles.col}>
        <div className={styles.colHead}>{category}</div>
        <ul className={styles.linksList}>
          {links.map(({ label, href, target }) => (
            <li key={label}>
              <a href={href} target={target} rel={target ? "noopener noreferrer" : undefined} className={styles.footLink}>
                <span className={styles.arrow}>{">"}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.eyebrow}>
              <span className={styles.ebar} />
              Full-Stack Developer
              <span className={styles.ebar} />
            </div>
            <div className={styles.name}>Shaurya Chauhan</div>
            <p className={styles.blurb}>
              I build applications that delight users.{"\n"}
              Clean code, good UX, and actually shipping.
            </p>
            <div className={styles.socials}>
              {renderSocials()}
            </div>
          </div>

          <div className={styles.cols}>
            {renderLinks()}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Shaurya Chauhan · Built with ❤️
          </p>
          <div className={styles.bottomActions}>
            <CursorToggle />
            <button className={styles.topBtn} onClick={scrollToTop}>
              <ArrowUpIcon /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
