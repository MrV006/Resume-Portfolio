import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans-en bg-[#050a14] text-slate-200">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5 rounded-b-2xl mx-auto max-w-[98%] mt-2 left-0 right-0">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-extrabold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-cyan-300 transition-all cursor-pointer"
            >
                Mr.V
            </span>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
                <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors tracking-wide">HOME</a>
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-cyan-400 transition-colors tracking-wide">SKILLS</a>
                <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-cyan-400 transition-colors tracking-wide">PROJECTS</a>
            </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;