
import { Mail } from "lucide-react";

const FormHeader = () => {
  return (
    <>
      <h2 className="section-title text-center">Agenda tu valoración médica con el Dr. Zambrano</h2>
      
      <p className="text-zambrano-gray text-center mb-8">
        Queremos conocer tu caso y acompañarte con empatía y profesionalismo. Completa este formulario para
        que nuestro equipo revise tu situación.
      </p>
      
      <div className="text-sm text-zambrano-gray text-center mb-12">
        Tus datos serán tratados con absoluta confidencialidad médica.
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 md:p-8 animate-fade-in">
        <div className="flex items-center mb-6">
          <div className="bg-zambrano-light-blue text-zambrano-dark-blue p-2 rounded-full mr-3">
            <Mail size={20} />
          </div>
          <h3 className="text-xl text-zambrano-dark-blue">
            Formulario de valoración
          </h3>
        </div>
        
        <p className="text-sm text-zambrano-gray mb-8">
          Completa los campos para solicitar tu consulta médica.
        </p>
      </div>
    </>
  );
};

export default FormHeader;
