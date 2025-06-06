import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cosmic-dark text-white relative">
      <ParticleBackground />
     
<div className="w-full flex justify-center">
  <div className="mr-28">
    <Navigation />
  </div>
</div>



      
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-cosmic-purple/20 py-8 border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Vittesh Arora. Crafted with 
            <span className="text-red-500 mx-1">❤️</span>
            and cutting-edge tech.
          </p>
        </div>
      </footer>
    </div>
  );
}
