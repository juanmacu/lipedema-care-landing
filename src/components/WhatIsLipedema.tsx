
import { Check } from 'lucide-react';

const LipedemaFact = ({ title }: { title: string }) => (
  <div className="flex items-center mb-3">
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
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">¿Qué es el Lipedema?</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-zambrano-gray mb-6 leading-relaxed">
              El lipedema es una enfermedad crónica que afecta el tejido graso, causando
              dolor, hinchazón y cambios visibles en las piernas y brazos. No es resultado
              de obesidad ni de malos hábitos, y requiere un diagnóstico y tratamiento
              especializado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <LipedemaFact title="Dolor en las extremidades" />
                <LipedemaFact title="Hinchazón bilateral" />
                <LipedemaFact title="Sensación de pesadez" />
              </div>
              <div>
                <LipedemaFact title="Afecta principalmente a mujeres" />
                <LipedemaFact title="No responde a dietas convencionales" />
                <LipedemaFact title="Puede empeorar con el tiempo" />
              </div>
            </div>
          </div>
          
          <p className="text-center text-zambrano-gray text-lg">
            No es causado por malos hábitos. Requiere diagnóstico especializado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLipedema;
