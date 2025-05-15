
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import Logo from "@/components/Logo";

const EmotionalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Función para manejar scroll y cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Función para scroll suave
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('lipedema')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
              >
                ¿Qué es el Lipedema?
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('historias')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
              >
                Historias Reales
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('consulta')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
              >
                Agenda tu Cita
              </button>
            </li>
          </ul>
        </nav>
        
        <Button 
          onClick={() => scrollToSection('consulta')}
          className="hidden md:flex items-center gap-2 bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90"
        >
          <CalendarDays size={18} />
          <span>Solicita tu consulta</span>
        </Button>
        
        <button 
          className="md:hidden text-zambrano-dark-blue"
          aria-label="Mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default EmotionalHeader;
