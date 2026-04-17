"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import styles from "./not-found.module.css"

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className={styles.root}>
      <main className={styles.scene}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={styles.dotGrid} />

        <div className={styles.glitchWrap}>
          <div className={styles.fourOhFour}>
            404
            <span className={styles.fill} aria-hidden="true">404</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.eyebrow}>Page Not Found</div>
          <h1 className={styles.title}>Lost in the void</h1>
          <p className={styles.desc}>
            This route does not exist or was never deployed. Check the URL or
            head back using one of the links below.
          </p>
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalBar} />
          <div className={styles.terminalHead}>
            <span className={`${styles.dot} ${styles.dotR}`} />
            <span className={`${styles.dot} ${styles.dotY}`} />
            <span className={`${styles.dot} ${styles.dotG}`} />
            <span className={styles.terminalTitle}>bash -- portfolio</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.tLine}>
              <span className={styles.tPrompt}>~/portfolio $</span>
              <span className={styles.tCmd}>GET {pathname}</span>
            </div>
            <div className={styles.tLine}>
              <span className={styles.tPrompt} style={{ opacity: 0 }}>~</span>
              <span className={styles.tErr}>Error 404: route not found</span>
            </div>
            <div className={styles.tLine}>
              <span className={styles.tPrompt} style={{ opacity: 0 }}>~</span>
              <span className={styles.tSug}>
                try <Link href="/">/home</Link> or{" "}
                <Link href="/#projects">/projects</Link>
              </span>
            </div>
            <div className={`${styles.tLine} ${styles.tGap}`}>
              <span className={styles.tPrompt}>~/portfolio $</span>
              <span className={styles.tCursor} />
            </div>
          </div>
        </div>

        <div className={styles.btns}>
          <Link href="/" className={styles.btnBlue}>{"<-"} Back to home</Link>
          <Link href="/#projects" className={styles.btnGhost}>View projects</Link>
        </div>
      </main>
    </div>
  )
}
