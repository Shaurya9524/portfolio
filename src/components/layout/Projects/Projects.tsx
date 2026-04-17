import { projects } from "@/data/projects"
import styles from "./Projects.module.css"

const statusClass: Record<string, string> = {
  live: styles.statusLive,
  ongoing: styles.statusOngoing,
  npm: styles.statusNpm
}

export default function Projects() {
  function renderProjects() {
    return projects.map((project) => (
      <a key={project.name} href={project.href} className={styles.card}>
        <div className={styles.meta}>
          <span className={styles.num}>{project.num}</span>
          <span className={`${styles.status} ${statusClass[project.status.type]}`}>
            {project.status.label}
          </span>
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.foot}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <span className={styles.link}>Details {"->"}</span>
        </div>
      </a>
    ))
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div>
            <div className={styles.stag}>Work</div>
            <h2 className={styles.heading}>Featured Projects</h2>
          </div>
          <a href="#projects" className={styles.viewAll}>View all {"->"}</a>
        </div>

        <div className={styles.grid}>
          {renderProjects()}
        </div>
      </div>
    </section>
  )
}
