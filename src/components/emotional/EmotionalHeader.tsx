
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const EmotionalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    setMobileMenuOpen(false);
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lipedema')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  ¿Qué es el Lipedema?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('historias')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Historias Reales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('consulta')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Agenda tu Cita
                </button>
              </li>
            </ul>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('consulta')}
            className="hidden md:flex items-center gap-2 bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <CalendarDays size={18} />
            <span>Solicita tu consulta</span>
          </Button>
          
          <button 
            className="md:hidden text-zambrano-dark-blue p-1"
            aria-label="Mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('lipedema')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                ¿Qué es el Lipedema?
              </button>
              <button 
                onClick={() => scrollToSection('historias')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Historias Reales
              </button>
              <button 
                onClick={() => scrollToSection('consulta')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md"
              >
                Agenda tu Cita
              </button>
              <Button 
                onClick={() => scrollToSection('consulta')}
                className="flex items-center gap-2 bg-zambrano-dark-blue text-white hover:bg-zambrano-dark-blue/90 w-full justify-center"
              >
                <CalendarDays size={18} />
                <span>Solicita tu consulta</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EmotionalHeader;
