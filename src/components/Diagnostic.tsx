
import { useState, useEffect } from 'react';

const DiagnosticCard = ({ 
  title, 
  description, 
  delay 
}: { 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`p-4 rounded-lg bg-gray-50 transform transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-zambrano-dark-blue text-xl mb-2 font-quicksand">{title}</div>
      <p className="text-sm text-zambrano-gray">{description}</p>
    </div>
  );
};

const Diagnostic = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('diagnostico');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="diagnostico" className="bg-zambrano-beige py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`section-title text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>Diagnóstico</h2>
          
          <div className={`bg-white rounded-lg p-8 shadow-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`} style={{ transitionDelay: "200ms" }}>
            <p className="text-zambrano-gray mb-6 leading-relaxed text-center">
              El diagnóstico de lipedema es clínico y requiere una valoración médica
              especializada. Analizamos tus síntomas, antecedentes y realizamos una
              exploración física detallada para diferenciarlo de otras condiciones.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <DiagnosticCard 
                title="Evaluación clínica" 
                description="Análisis detallado de síntomas y signos físicos"
                delay={500}
              />
              
              <DiagnosticCard 
                title="Historia médica" 
                description="Revisión de antecedentes personales y familiares"
                delay={700}
              />
              
              <DiagnosticCard 
                title="Plan personalizado" 
                description="Enfoque terapéutico adaptado a tu caso particular"
                delay={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
