
import { useState } from "react";
import { CalendarDays, User, FileText, Heart } from "lucide-react";
import ConsultationForm from "./ConsultationForm";

const ConsultationProcess = () => {
  return (
    <section id="consulta" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-2">Agenda tu consulta</h2>
        <p className="text-center text-lg text-zambrano-gray mb-12 max-w-3xl mx-auto">
          El primer paso hacia tu bienestar
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Lado izquierdo: Proceso de consulta */}
          <div className="reveal-section">
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                    <CalendarDays className="mr-2" size={20} />
                    Agenda tu cita
                  </h3>
                  <p className="text-zambrano-gray">
                    Completa el formulario o llámanos al teléfono indicado. 
                    Responderemos en menos de 24 horas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                    <User className="mr-2" size={20} />
                    Evaluación inicial
                  </h3>
                  <p className="text-zambrano-gray">
                    El Dr. Zambrano evaluará tu caso con atención personalizada y realizará un diagnóstico detallado.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                    <FileText className="mr-2" size={20} />
                    Plan personalizado
                  </h3>
                  <p className="text-zambrano-gray">
                    Recibirás un plan de tratamiento completamente adaptado a tus necesidades y condiciones específicas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                  <span className="font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                    <Heart className="mr-2" size={20} />
                    Seguimiento
                  </h3>
                  <p className="text-zambrano-gray">
                    Acompañamiento constante durante todo el proceso para asegurar tu bienestar y completa recuperación.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lado derecho: Formulario */}
          <div className="reveal-section">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
