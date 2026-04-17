"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import styles from "./Nav.module.css"

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      navRef.current?.classList.toggle(styles.solid, window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav ref={navRef} className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <h1>
          Shaurya
        </h1>
      </Link>

      <ul className={styles.links}>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li>
          <Link href="#contact" className={styles.cta}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
