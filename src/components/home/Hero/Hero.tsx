"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { github } from "@/config/constants"
import { GitHubIcon } from "@/components/ui/Icons"
import styles from "./Hero.module.css"

const phrases = [
  "I develop applications that delight users.",
  "I write about what I build on my blog.",
  "I turn ideas into production-ready code."
]

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let pi = 0
    let ci = 0
    let deleting = false
    let pause = 0
    let timerId: ReturnType<typeof setTimeout>

    function typeLoop() {
      const el = typedRef.current
      if (!el) return

      const phrase = phrases[pi]

      if (pause > 0) {
        pause--
        timerId = setTimeout(typeLoop, 50)
        return
      }

      if (!deleting) {
        el.textContent = phrase.slice(0, ++ci)
        if (ci === phrase.length) {
          pause = 40
          deleting = true
        }
        timerId = setTimeout(typeLoop, 62)
      } else {
        el.textContent = phrase.slice(0, --ci)
        if (ci === 0) {
          deleting = false
          pi = (pi + 1) % phrases.length
          pause = 10
        }
        timerId = setTimeout(typeLoop, 32)
      }
    }

    typeLoop()
    return () => clearTimeout(timerId)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={styles.dotGrid} />

      <div className={styles.heroInner}>
        <div className={styles.heroEyebrow}>
          <span className={styles.ebar} />
          Full-Stack Developer
          <span className={styles.ebar} />
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.t1}>Hello, I am</span>
          <span className={styles.t2}>Shaurya Chauhan</span>
        </h1>

        <p className={styles.heroTw}>
          <span className={styles.twPrefix}>{"// "}</span>
          <span ref={typedRef} className={styles.twText} />
          <span className={styles.twCur} />
        </p>

        <p className={styles.heroDesc}>
          {`I like building things I'd use myself: clean code, good UX, and actually shipping.
          You can count on me for your next project. I write about what I build on my`}
          <Link href="/blog" className={styles.heroDescLink}> blog.</Link>
        </p>

        <div className={styles.heroBtns}>
          <a href="#projects" className={styles.btnBlue}>View my work {"->"}</a>
          <a href="#contact" className={styles.btnGhost}>Get in touch</a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`${styles.btnGhost} ${styles.btnIcon}`}
            title="GitHub"
            style={{ width: "3rem", height: "3rem", padding: "0.8rem" }}
          >
            <GitHubIcon style={{ width: 20, height: 20 }} />
          </a>
        </div>
      </div>

      <div className={styles.heroScrollInd}>
        scroll
        <div className={styles.scrollBar} />
      </div>
    </section>
  )
}
