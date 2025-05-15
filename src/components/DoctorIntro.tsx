
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const DoctorIntro = () => {
  const scrollToForm = () => {
    const section = document.getElementById('valoracion');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title mb-6">Dr. Juan C. Zambrano</h2>
              <p className="text-zambrano-gray mb-6">
                Especialista en tratamiento de Lipedema, con más de 15 años de experiencia ayudando a mujeres a 
                recuperar su calidad de vida mediante diagnóstico preciso y tratamientos personalizados.
              </p>
              <p className="text-zambrano-gray mb-8">
                Mi objetivo es establecer una relación médico-paciente basada en la empatía y la confianza, 
                para que te sientas escuchada y acompañada durante todo el proceso.
              </p>
              <Button 
                onClick={scrollToForm}
                className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Calendar size={18} />
                <span>Agenda tu consulta</span>
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 duration-300">
                <img 
                  src="/lovable-uploads/e23778b1-ecf9-4f80-ad1f-3d0a0d90ca15.png" 
                  alt="Dr. Juan C. Zambrano atendiendo a una paciente" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;
