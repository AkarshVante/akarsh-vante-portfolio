import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { InteractiveDemos } from "@/components/InteractiveDemos";
import { Certificates } from "@/components/Certificates";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <InteractiveDemos />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
