import { Project } from "@/types/project"
import { projects } from "@/data/projects"
import { formatTwoDigits } from "@/lib/utils/format"
import styles from "./Projects.module.css"

export default function Projects() {
  function renderProjects() {
    return projects.slice(0, 4).map((project) => (
      <ProjectCard key={project.index} project={project}/>
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
          <a href="/projects" className={styles.viewAll}>View all {"->"}</a>
        </div>

        <div className={styles.grid}>
          {renderProjects()}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a key={project.index} href={project.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.index}>{formatTwoDigits(project.index)} / 04</span>
        <span
          className={styles.status}
          style={{
            backgroundColor: `rgba(${project.accentRgb}, 0.1)`,
            color: `rgb(${project.accentRgb})`,
            border: `1px solid rgb(${project.accentRgb})`
          }}
        >
          {project.statusLabel}
        </span>
      </div>
      <h3 className={styles.name}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.foot}>
        <div className={styles.tags}>
          {
            project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))
          }
        </div>
        <span className={styles.link}>Details {"->"}</span>
      </div>
    </a>
  )
}
