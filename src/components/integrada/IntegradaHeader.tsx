
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Menu, X } from "lucide-react";

const IntegradaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to handle scroll and change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Function for smooth scroll
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
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - aumentado 25% */}
          <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src="/images/branding/logo-dark.png" 
              alt="Logo Gaona Zambrano" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation - reorganizada y alineada a la derecha */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
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
                  onClick={() => scrollToSection('valoracion')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Valoración
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('doctors')}
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.link/r10i52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          
          <Button 
            onClick={() => scrollToSection('valoracion')}
            className="hidden md:flex items-center gap-2 bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90 transform transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <CalendarDays size={18} />
            <span>Agenda tu valoración</span>
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
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md text-center"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('valoracion')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md text-center"
              >
                Valoración
              </button>
              <button 
                onClick={() => scrollToSection('doctors')}
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md text-center"
              >
                Nosotros
              </button>
              <a 
                href="https://wa.link/r10i52"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors py-2 px-3 hover:bg-gray-50 rounded-md text-center block"
              >
                Contacto
              </a>
              <Button 
                onClick={() => scrollToSection('valoracion')}
                className="flex items-center gap-2 bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90 w-full justify-center"
              >
                <CalendarDays size={18} />
                <span>Agenda tu valoración</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default IntegradaHeader;
