
import { useRef, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
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
    <section className="py-16 md:py-24 bg-white" id="preguntas">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6 relative w-32 h-32">
              <div className="absolute inset-0 bg-zambrano-dark-blue rounded-full flex items-center justify-center">
                <MessageSquare className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="section-title text-center mb-4">Preguntas Frecuentes</h2>
            <p className="text-zambrano-gray text-center max-w-2xl mb-12">Resolvemos tus dudas sobre el lipedema</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-zambrano-dark-blue font-medium">
                ¿Qué es el lipedema?
              </AccordionTrigger>
              <AccordionContent className="text-zambrano-gray">
                El lipedema es un trastorno crónico que afecta principalmente a mujeres y se caracteriza por una acumulación anormal de grasa en las extremidades, especialmente en las piernas y a veces en los brazos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-zambrano-dark-blue font-medium">
                ¿Cómo sé si tengo lipedema?
              </AccordionTrigger>
              <AccordionContent className="text-zambrano-gray">
                Los síntomas más comunes incluyen hinchazón simétrica en las piernas, dolor a la presión, facilidad para desarrollar hematomas y desproporcionalidad entre la parte superior e inferior del cuerpo. Un diagnóstico profesional es necesario.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-zambrano-dark-blue font-medium">
                ¿El lipedema tiene cura?
              </AccordionTrigger>
              <AccordionContent className="text-zambrano-gray">
                El lipedema no tiene cura definitiva, pero existen tratamientos efectivos para aliviar los síntomas y mejorar la calidad de vida, como la liposucción especializada, terapia de compresión y manejo del estilo de vida.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-zambrano-dark-blue font-medium">
                ¿La dieta y el ejercicio pueden curar el lipedema?
              </AccordionTrigger>
              <AccordionContent className="text-zambrano-gray">
                La dieta y el ejercicio pueden ayudar a manejar los síntomas y prevenir la progresión, pero no pueden curar el lipedema. Un enfoque integral que incluya estos hábitos junto con tratamientos médicos es lo recomendado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
