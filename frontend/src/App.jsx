import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BeamCurve from "./components/BeamCurve/BeamCurve";

// 🛠️ Importa o novo módulo de Inteligência Artificial
import AIAssistant from "./ai";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg font-outfit selection:bg-neon-cyan selection:text-black relative overflow-x-hidden">
      {/* Curva 1: Sobe suavemente */}
      <BeamCurve
        color="#00e5ff" // Neon Cyan
        duration={8}
        delay={0}
        path="M-100 200 C 400 200, 600 100, 1600 100"
      />

      {/* Curva 2: Desce e sobe (Onda) */}
      <BeamCurve
        color="#00ffab" // Neon Green
        duration={12}
        delay={2}
        path="M-100 600 C 300 600, 800 800, 1600 500"
      />

      {/* Curva 3: Atravessa o meio com curva leve */}
      <BeamCurve
        color="#00e5ff"
        duration={10}
        delay={5}
        path="M-100 400 C 500 400, 900 450, 1600 450"
      />

      {/* Glows de Fundo mantidos para profundidade */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-cyan/5 blur-[140px] rounded-full pointer-events-none" />

      <Header />

      <main className="relative z-10">
        <section id="inicio">
          <Hero />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="projetos">
          <ProjectsGrid />
        </section>
        <section id="especialidades">
          <Skills />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />

      <AIAssistant />
    </div>
  );
}
