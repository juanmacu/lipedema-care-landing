
import { useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Procedures = () => {
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
    <section className="py-16 md:py-24 bg-gray-50" id="procedimientos">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6 relative w-32 h-32">
              <div className="absolute inset-0 bg-zambrano-dark-blue rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="section-title text-center mb-4">Procedimientos</h2>
            <p className="text-zambrano-gray text-center max-w-2xl">Tratamientos especializados para el lipedema</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-zambrano-dark-blue">Liposucción WAL</CardTitle>
                <CardDescription>Water-Assisted Liposuction</CardDescription>
              </CardHeader>
              <CardContent className="text-zambrano-gray">
                <p>Técnica avanzada que utiliza un fino chorro de agua para desprender células grasas. Es menos traumática que la liposucción tradicional, reduciendo el tiempo de recuperación y permitiendo extraer mayor cantidad de grasa afectada por lipedema.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-zambrano-dark-blue">Terapia de Compresión</CardTitle>
                <CardDescription>Manejo conservador del lipedema</CardDescription>
              </CardHeader>
              <CardContent className="text-zambrano-gray">
                <p>El uso de prendas de compresión médica ayuda a reducir la hinchazón, mejora el flujo linfático y proporciona alivio del dolor. Es una parte esencial del tratamiento conservador del lipedema.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-zambrano-dark-blue">Drenaje Linfático Manual</CardTitle>
                <CardDescription>Técnica especializada</CardDescription>
              </CardHeader>
              <CardContent className="text-zambrano-gray">
                <p>Masaje suave y rítmico que estimula el sistema linfático para reducir la acumulación de líquido en los tejidos. Ayuda a disminuir la hinchazón y el malestar asociados con el lipedema.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-zambrano-dark-blue">Programa Integral</CardTitle>
                <CardDescription>Enfoque multidisciplinario</CardDescription>
              </CardHeader>
              <CardContent className="text-zambrano-gray">
                <p>Combinamos cirugía, terapia física y asesoramiento nutricional para tratar el lipedema de manera holística. Nuestro enfoque personalizado aborda todos los aspectos de la enfermedad para lograr resultados óptimos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;
