
import { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="ubicacion">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6 relative w-32 h-32">
              <div className="absolute inset-0 bg-zambrano-dark-blue rounded-full flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="section-title text-center mb-4">Ubicación</h2>
            <p className="text-zambrano-gray text-center max-w-2xl">¿Dónde encontrarnos?</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              {/* Here we would normally place a Google Map, but for this example we'll use a placeholder */}
              <div className="w-full h-full bg-zambrano-light-blue bg-opacity-20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-zambrano-dark-blue mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-zambrano-dark-blue">Mapa en esta ubicación</h3>
                  <p className="text-zambrano-gray">Aquí se integraría un mapa interactivo</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-zambrano-dark-blue mb-3">Clínica de Lipedema Dr. Zambrano</h3>
              <p className="text-zambrano-gray mb-4">Av. Paseo de la Reforma 483, Cuauhtémoc, 06500 Ciudad de México, CDMX</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-medium text-zambrano-dark-blue mb-2">Horario de atención</h4>
                  <ul className="text-zambrano-gray space-y-1">
                    <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                    <li>Sábado: 9:00 AM - 2:00 PM</li>
                    <li>Domingo: Cerrado</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-zambrano-dark-blue mb-2">Transporte</h4>
                  <ul className="text-zambrano-gray space-y-1">
                    <li>Metro: Estación Reforma</li>
                    <li>Estacionamiento disponible</li>
                    <li>Servicio de valet parking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
