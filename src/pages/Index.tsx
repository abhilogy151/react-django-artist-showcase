import { useState } from "react";

import PiTest from "@/components/PiTest";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [piReady, setPiReady] = useState(false);
  const [piError, setPiError] = useState<string | null>(null);

  // ❌ If Pi fails, show error
  if (piError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{piError}</p>
      </div>
    );
  }

  // 🔒 While Pi Browser is authenticating
  if (!piReady) {
    return (
      <>
        <PiTest
          onReady={() => setPiReady(true)}
          onError={(msg) => setPiError(msg)}
        />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading Pi App…</p>
        </div>
      </>
    );
  }

  // ✅ ORIGINAL UI (unchanged)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
