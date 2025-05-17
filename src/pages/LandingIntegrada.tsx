
import { useState, useEffect } from "react";
import IntegradaHeader from "@/components/integrada/IntegradaHeader";
import IntegradaHero from "@/components/integrada/IntegradaHero";
import WhatIsLipedema from "@/components/WhatIsLipedema";
import TeAcompanamos from "@/components/emotional/TeAcompanamos";
import IntegradaMeetDoctors from "@/components/integrada/IntegradaMeetDoctors";
import MedicalFormWizard from "@/components/MedicalFormWizard";
import IntegradaFooter from "@/components/integrada/IntegradaFooter";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingIntegrada = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Effect for scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.reveal-section');
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const sectionVisible = sectionTop < windowHeight - 100;
        
        if (sectionVisible) {
          section.classList.add('active');
        }
      });

      // For elements with staggered animation
      const staggeredItems = document.querySelectorAll('.staggered-item');
      staggeredItems.forEach((item, index) => {
        const itemTop = (item as HTMLElement).getBoundingClientRect().top;
        const itemVisible = itemTop < windowHeight - 50;
        
        if (itemVisible) {
          setTimeout(() => {
            item.classList.add('visible');
          }, 150 * index);
        }
      });
      
      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <IntegradaHeader />
      <main>
        {/* Agregamos ID para scrolling */}
        <section id="inicio">
          <IntegradaHero />
        </section>
        <section id="lipedema">
          <WhatIsLipedema />
        </section>
        <section id="doctors">
          <IntegradaMeetDoctors />
        </section>
        <TeAcompanamos />
        <section id="valoracion" className="reveal-section">
          <MedicalFormWizard />
        </section>
      </main>
      <IntegradaFooter />
      
      {/* Back to top button */}
      <div className={`fixed bottom-6 right-6 transition-opacity duration-300 z-40 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Button 
          onClick={scrollToTop} 
          size="icon"
          className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Volver arriba"
        >
          <ArrowUp />
        </Button>
      </div>
      
      {/* Mobile Floating CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t border-gray-100 z-30">
        <Button 
          onClick={() => document.getElementById('valoracion')?.scrollIntoView({behavior: 'smooth'})}
          className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white py-3"
        >
          Agenda tu consulta
        </Button>
      </div>
    </div>
  );
};

export default LandingIntegrada;
