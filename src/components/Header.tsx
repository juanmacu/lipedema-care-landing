
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <div className="text-zambrano-dark-blue font-semibold text-xl">
              Dr. Juan C. Zambrano
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#lipedema" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
            >
              ¿Qué es el Lipedema?
            </a>
            <a 
              href="#diagnostico" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
            >
              Diagnóstico
            </a>
            <a 
              href="#valoracion" 
              className="text-zambrano-gray hover:text-zambrano-dark-blue transition-colors"
            >
              Agenda tu cita
            </a>
            <Button 
              onClick={() => scrollToSection('valoracion')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Solicita tu valoración
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-zambrano-dark-blue p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
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
              className="bg-green-500 hover:bg-green-600 text-white w-full"
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
