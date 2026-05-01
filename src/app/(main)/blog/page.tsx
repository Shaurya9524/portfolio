"use client"

import Link from "next/link"
import { blogData } from "@/data/blog"
import { BlogPost } from "@/types/blog"
import { formatTwoDigits } from "@/lib/utils/format"
import styles from "./page.module.css"

const totalPosts = blogData.reduce((acc, group) => acc + group.posts.length, 0)

function BlogCard({ post, side, delay }: { post: BlogPost, side: "left" | "right", delay: number }) {
  return (
    <article className={`${styles.entry} ${styles[side]}`} style={{ "--delay": `${delay}s` } as React.CSSProperties}>
      {side === "right" && <div className={styles.entrySpacer} />}
      {side === "right" && (
        <div className={styles.entryNode}>
          <div className={styles.nodeDot} />
        </div>
      )}

      <div className={styles.cardInner}>
        <div className={styles.cardDate}>{post.date}</div>
        <div className={styles.cardTag}>{post.tag}</div>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <p className={styles.cardDesc}>{post.desc}</p>
        <div className={styles.cardTagsRow}>
          {post.tags.map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.readLink}>Read post →</span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>
      </div>

      {side === "left" && (
        <div className={styles.entryNode}>
          <div className={styles.nodeDot} />
        </div>
      )}
      {side === "left" && <div className={styles.entrySpacer} />}
    </article>
  )
}

export default function BlogsPage() {
  let animIndex = 0
  let postIndex = 0

  function renderBlogs() {
    return blogData.map((group) => {
      const yearDelay = animIndex++ * 0.08

      return (
        <div key={group.year}>
          <div
            className={styles.yearMarker}
            style={{ "--delay": `${yearDelay}s` } as React.CSSProperties}
          >
            <div className={styles.yearPill}>{group.year}</div>
          </div>

          {group.posts.map((post) => {
            const side = postIndex % 2 === 0 ? "left" : "right"
            const delay = animIndex++ * 0.08
            postIndex++
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <BlogCard post={post} side={side} delay={delay} />
              </Link>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className={styles.page}>
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>{"<-"} Back to Home</Link>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Blog<span style={{ color: "var(--blue)" }}>.</span>
          </h1>
          <div className={styles.count}>
            <span className={styles.countNum}>{formatTwoDigits(totalPosts)}</span>
            <span className={styles.countLabel}>posts</span>
          </div>
        </header>

        <section className={styles.timelineSection}>
          <div className={styles.timelineSpine} />
          {renderBlogs()}
          <div className={styles.timelineEnd}>
            <div className={styles.endLine} />
            <div className={styles.endDot} />
          </div>
        </section>
      </div>
    </div>
  )
}
