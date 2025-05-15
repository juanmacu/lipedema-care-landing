
import { Mail } from "lucide-react";

const FormHeader = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="section-title text-center mb-3">Valoración médica personalizada</h2>
      
      <p className="text-zambrano-gray text-center max-w-2xl mx-auto mb-5">
        Queremos conocer tu caso y acompañarte en cada paso. Completa este formulario para que nuestro equipo
        pueda brindarte la atención personalizada que mereces.
      </p>
      
      <div className="text-sm text-zambrano-gray italic text-center mb-10">
        Todos tus datos serán tratados con absoluta confidencialidad médica.
      </div>
    </div>
  );
};

export default FormHeader;
