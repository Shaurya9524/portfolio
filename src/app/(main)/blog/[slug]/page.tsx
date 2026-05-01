import Link from "next/link"
import { blogData } from "@/data/blog"
import { notFound } from "next/navigation"
import ProgressBar from "@/components/ui/ProgressBar"
import styles from "./page.module.css"

async function getPostContent(slug: string) {
  try {
    const { default: Content } = await import(`@/content/blog/${slug}.mdx`)
    return Content
  } catch {
    return null
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = blogData.flatMap((g) => g.posts).find((p) => p.slug === slug)
  if (!post) notFound()
  const Content = await getPostContent(slug)

  return (
    <div className={styles.page}>
      <ProgressBar />
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>{"<-"} Back to Blog</Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>{post.tag}</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.metaDot}>·</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>

          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.techTag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className={styles.divider} />

        <article className={styles.content}>
          {Content ? <Content /> : (
            <div className={styles.comingSoon}>
              <div className={styles.comingSoonLabel}>Coming Soon</div>
              <p>This post is still being written. Check back later.</p>
            </div>
          )}
        </article>

        <div className={styles.footer}>
          <Link href="/blog" className={styles.footerBack}>{"<-"} All posts</Link>
          <Link href="/#contact" className={styles.footerContact}>Get in touch {"->"}</Link>
        </div>
      </div>
    </div>
  )
}
