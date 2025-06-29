
import { Check } from 'lucide-react';

const LipedemaFact = ({ title }: { title: string }) => (
  <div className="flex items-center mb-3 staggered-item">
    <div className="bg-zambrano-dark-blue rounded-full p-1 mr-3 text-white">
      <Check size={16} />
    </div>
    <span className="text-zambrano-gray">{title}</span>
  </div>
);

const WhatIsLipedema = () => {
  return (
    <section id="lipedema" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-2">¿Qué es el Lipedema?</h2>
          <p className="text-center text-zambrano-gray max-w-2xl mx-auto mb-10">
            Una condición crónica que afecta principalmente a mujeres y requiere un diagnóstico especializado
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bloque 1: Síntomas */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 reveal-section border border-gray-100">
              <div className="mb-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-zambrano-light-blue flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zambrano-dark-blue">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zambrano-dark-blue">Síntomas</h3>
              </div>
              <p className="text-zambrano-gray mb-4">
                El lipedema se manifiesta con estos signos característicos:
              </p>
              <div className="space-y-2">
                <LipedemaFact title="Dolor en las extremidades" />
                <LipedemaFact title="Hinchazón bilateral" />
                <LipedemaFact title="Sensibilidad al tacto" />
                <LipedemaFact title="Sensación de pesadez" />
              </div>
            </div>
            
            {/* Bloque 2: ¿Por qué ocurre? */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 reveal-section border border-gray-100" style={{ animationDelay: "0.2s" }}>
              <div className="mb-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-zambrano-light-blue flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zambrano-dark-blue">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4.5 17v-2.31a2.5 2.5 0 0 1 .09-.59" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 19.5 17v-2.31a2.5 2.5 0 0 0-.09-.59" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zambrano-dark-blue">¿Por qué ocurre?</h3>
              </div>
              <p className="text-zambrano-gray mb-4">
                El lipedema tiene factores contribuyentes:
              </p>
              <div className="space-y-2">
                <LipedemaFact title="Predisposición genética" />
                <LipedemaFact title="Cambios hormonales" />
                <LipedemaFact title="Metabolismo alterado" />
                <LipedemaFact title="Inflamación crónica" />
              </div>
            </div>
            
            {/* Bloque 3: ¿Qué no es? */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 reveal-section border border-gray-100" style={{ animationDelay: "0.4s" }}>
              <div className="mb-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-zambrano-light-blue flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zambrano-dark-blue">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-zambrano-dark-blue">¿Qué no es?</h3>
              </div>
              <p className="text-zambrano-gray mb-4">
                Es importante aclarar estos conceptos erróneos:
              </p>
              <div className="space-y-2">
                <LipedemaFact title="No es obesidad" />
                <LipedemaFact title="No es falta de ejercicio" />
                <LipedemaFact title="No es retención de líquidos normal" />
                <LipedemaFact title="No es culpa de la paciente" />
              </div>
            </div>
          </div>
          
          <p className="text-center text-zambrano-gray text-lg mt-10 max-w-xl mx-auto reveal-section" style={{ animationDelay: "0.6s" }}>
            El lipedema requiere un diagnóstico especializado y un tratamiento personalizado para cada paciente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLipedema;
