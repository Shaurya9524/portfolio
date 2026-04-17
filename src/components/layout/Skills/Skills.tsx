import { skills } from "@/data/skills"
import styles from "./Skills.module.css"

export default function Skills() {
  function renderSkills() {
    return skills.map((category) => (
      <div key={category.title} className={styles.card}>
        <div className={styles.cardBar} />
        <div className={styles.cardTitle}>{category.title}</div>
        <div className={styles.chips}>
          {category.chips.map((chip) => (
            <span key={chip.label} className={`${styles.chip} ${chip.highlighted ? styles.chipHighlighted : ""}`}>
              <span className={styles.dot} />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div>
            <div className={styles.stag}>Skills</div>
            <h2 className={styles.heading}>Tech Stack</h2>
          </div>
          <p className={styles.blurb}>
            Focused on the TypeScript ecosystem, from Next.js frontends
            to Node.js backends, real-time sockets, and scalable data layers.
          </p>
        </div>

        <div className={styles.grid}>
          {renderSkills()}
        </div>
      </div>
    </section>
  )
}
