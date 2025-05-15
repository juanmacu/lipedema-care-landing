
import { useRef, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Agenda = () => {
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
    <section className="py-16 md:py-24 bg-white" id="agenda">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6 relative w-32 h-32">
              <div className="absolute inset-0 bg-zambrano-dark-blue rounded-full flex items-center justify-center">
                <Calendar className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="section-title text-center mb-4">Agenda tu Consulta</h2>
            <p className="text-zambrano-gray text-center max-w-2xl">El primer paso hacia tu bienestar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-zambrano-dark-blue mb-6">Proceso de consulta</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zambrano-light-blue bg-opacity-20 flex items-center justify-center mr-4">
                    <span className="text-zambrano-dark-blue font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zambrano-dark-blue">Agenda tu cita</h4>
                    <p className="text-zambrano-gray">Completa el formulario o llámanos para programar tu primera consulta.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zambrano-light-blue bg-opacity-20 flex items-center justify-center mr-4">
                    <span className="text-zambrano-dark-blue font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zambrano-dark-blue">Evaluación inicial</h4>
                    <p className="text-zambrano-gray">El Dr. Zambrano realizará una evaluación completa de tu caso.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zambrano-light-blue bg-opacity-20 flex items-center justify-center mr-4">
                    <span className="text-zambrano-dark-blue font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zambrano-dark-blue">Plan personalizado</h4>
                    <p className="text-zambrano-gray">Recibirás un plan de tratamiento adaptado a tus necesidades específicas.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zambrano-light-blue bg-opacity-20 flex items-center justify-center mr-4">
                    <span className="text-zambrano-dark-blue font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-zambrano-dark-blue">Seguimiento</h4>
                    <p className="text-zambrano-gray">Mantendremos un monitoreo constante de tu progreso para asegurar los mejores resultados.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium text-zambrano-dark-blue mb-4">Precios y cobertura</h3>
                <p className="text-zambrano-gray mb-2">Ofrecemos diferentes opciones de pago y trabajamos con las principales aseguradoras.</p>
                <p className="text-zambrano-gray">Consulta con nuestro equipo sobre planes de financiamiento disponibles.</p>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-zambrano-dark-blue">Solicita tu cita</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Nombre completo" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Teléfono" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue">
                        <option value="">Tipo de consulta</option>
                        <option value="primera">Primera consulta</option>
                        <option value="seguimiento">Consulta de seguimiento</option>
                        <option value="procedimiento">Información sobre procedimientos</option>
                      </select>
                    </div>
                    <div>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Mensaje o comentarios adicionales" 
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90">
                      Solicitar cita
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center">
                    <p className="text-zambrano-gray">¿Prefieres llamar?</p>
                    <p className="text-zambrano-dark-blue font-medium">+52 (55) 1234-5678</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
