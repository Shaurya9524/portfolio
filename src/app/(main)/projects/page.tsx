"use client"

import Link from "next/link"
import { useState } from "react"
import Nav from "@/components/layout/Nav"
import { Project } from "@/types/project"
import { projects } from "@/data/projects"
import { formatTwoDigits } from "@/lib/utils/format"
import { ExternalLinkIcon } from "@/components/ui/Icons"
import styles from "./page.module.css"

interface ProjectEntryProps {
  project: Project
  isHovered: boolean,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  function renderProjects() {
    return projects.map((project) => (
      <ProjectEntry
        key={project.index}
        project={project}
        isHovered={hoveredId === project.index}
        onMouseEnter={() => setHoveredId(project.index)}
        onMouseLeave={() => setHoveredId(null)}
      />
    ))
  }

  return (
    <>
      <Nav />
      <div className={styles.page}>
        <div className={styles.dotGrid} aria-hidden="true" />
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>{"<-"} Back to Home</Link>
          <header className={styles.header}>
            <h1 className={styles.title}>
              Projects<span style={{ color: "var(--blue)" }}>.</span>
            </h1>
            <div className={styles.count}>
              <span className={styles.countNum}>{formatTwoDigits(projects.length)}</span>
              <span className={styles.countLabel}>projects</span>
            </div>
          </header>

          <div className={styles.list} role="list">
            {renderProjects()}
          </div>
        </div>
      </div>
    </>
  )
}

function ProjectEntry({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectEntryProps) {
  function renderTechStack() {
    return project.tech.map((t) => (
      <span key={t} className={styles.techItem}>
        <span className={styles.bullet} aria-hidden="true">▸</span>
        {t}
      </span>
    ))
  }

  function renderLinks() {
    return Object.entries(project.links).map(([label, url]) => (
      <a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} ${label === "GitHub" ? styles.linkAccent : ""}`}
      >
        {label} <ExternalLinkIcon />
      </a>
    ))
  }

  return (
    <article
      className={`${styles.entry} ${isHovered ? ` ${styles.hovered}` : ""}`}
      role="listitem"
      style={{
        "--accent": `rgb(${project.accentRgb})`,
        "--accent-rgb": project.accentRgb,
        "--delay": `${project.index * 0.08}s`,
      } as React.CSSProperties}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.entryBar} aria-hidden="true" />

      <div className={styles.sidebar}>
        <div className={styles.index}>{formatTwoDigits(project.index)}</div>
        <div className={styles.meta}>
          <span>{project.category}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h2 className={styles.entryTitle}>{project.title}</h2>
          <p className={styles.desc}>{project.description}</p>
          <div className={styles.tech} aria-label="Technologies used">{renderTechStack()}</div>
          <div className={styles.links}>{renderLinks()}</div>
        </div>

        <div className={styles.echo} aria-hidden="true">{formatTwoDigits(project.index)}</div>
      </div>
    </article>
  )
}
