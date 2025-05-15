
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
      scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-zambrano-dark-blue font-semibold text-xl">
              Dr. Juan C. Zambrano
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Inicio
            </a>
            <a 
              href="#lipedema" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              ¿Qué es el Lipedema?
            </a>
            <a 
              href="#diagnostico" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Diagnóstico
            </a>
            <a 
              href="#valoracion" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-zambrano-dark-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Agenda tu cita
            </a>
            <Button 
              onClick={() => scrollToSection('valoracion')}
              className="bg-green-500 hover:bg-green-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Solicita tu valoración
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-zambrano-dark-blue p-2 transition-transform active:scale-90"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fade-in">
            <a 
              href="#inicio" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#lipedema" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es el Lipedema?
            </a>
            <a 
              href="#diagnostico" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Diagnóstico
            </a>
            <a 
              href="#valoracion" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda tu cita
            </a>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection('valoracion');
              }}
            >
              Solicita tu valoración
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
