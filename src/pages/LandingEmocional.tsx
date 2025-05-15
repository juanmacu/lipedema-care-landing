
import { useState, useEffect } from "react";
import EmotionalHeader from "@/components/emotional/EmotionalHeader";
import EmotionalHero from "@/components/emotional/EmotionalHero";
import EmotionalLipedema from "@/components/emotional/EmotionalLipedema";
import EmotionalStories from "@/components/emotional/EmotionalStories";
import ConsultationProcess from "@/components/emotional/ConsultationProcess";
import EmotionalFooter from "@/components/emotional/EmotionalFooter";

const LandingEmocional = () => {
  // Efecto para scroll animations
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

      // Para elementos con animación escalonada
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
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <EmotionalHeader />
      <main>
        <EmotionalHero />
        <EmotionalLipedema />
        <EmotionalStories />
        <ConsultationProcess />
      </main>
      <EmotionalFooter />
    </div>
  );
};

export default LandingEmocional;
