import Nav from "@/components/layout/Nav"
import Hero from "@/components/layout/Hero"
import Skills from "@/components/layout/Skills"
import Projects from "@/components/layout/Projects/Projects"
import Contact from "@/components/layout/Contact"

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
