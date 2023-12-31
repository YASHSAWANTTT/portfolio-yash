import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#708B75]/80">
      <title>Yash's Portfolio</title>

      <Header />
      {/* Hero */}

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* ABOUT */}

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* SKILLS */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* CONTACT ME */}

      <section id="contacts" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
       <footer className="sticky bottom-5 w-full cursor-pointer ">
        <div className="flex items-center justify-center">
          <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer " src="https://avatars.githubusercontent.com/u/137981875?v=4" alt="" />
        </div>
       </footer>
      </Link>
    </main>
  );
}
