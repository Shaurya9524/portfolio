import Nav from "@/components/layout/Nav"
import Hero from "@/components/home/Hero"
import Skills from "@/components/home/Skills"
import Projects from "@/components/home/Projects/Projects"
import Contact from "@/components/home/Contact"

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
