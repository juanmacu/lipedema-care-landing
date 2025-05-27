
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Calendar } from "lucide-react";

interface SuccessStepProps {
  onReset: () => void;
}

const SuccessStep = ({ onReset }: SuccessStepProps) => {
  return (
    <div className="text-center py-8 md:py-16">
      {/* Animación de éxito mejorada */}
      <div className="relative mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Círculo de fondo animado */}
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse"></div>
            {/* Ícono principal con animación de escala */}
            <CheckCircle 
              size={80} 
              className="text-green-500 relative z-10 animate-bounce" 
              style={{ animationDuration: '1s', animationIterationCount: '3' }}
            />
          </div>
        </div>
        
        {/* Efecto de confeti visual */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-zambrano-light-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="absolute top-6 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-8 left-1/3 w-1 h-1 bg-zambrano-dark-blue rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-10 right-1/3 w-1 h-1 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-light text-zambrano-dark-blue mb-4">
        ¡Formulario enviado exitosamente! ✅
      </h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-green-600 mr-2" size={24} />
          <span className="text-green-800 font-medium">¡Gracias por confiar en nosotros!</span>
        </div>
        <p className="text-green-700 leading-relaxed">
          Hemos recibido tu información y nos pondremos en contacto contigo muy pronto para agendar tu valoración médica. 
          Nuestro equipo especializado revisará tu caso con el cuidado y la atención que mereces.
        </p>
      </div>

      <div className="bg-zambrano-light-blue/10 border border-zambrano-light-blue/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="text-zambrano-dark-blue mr-2" size={24} />
          <span className="text-zambrano-dark-blue font-medium">Próximos pasos</span>
        </div>
        <div className="space-y-3 text-zambrano-gray text-sm md:text-base">
          <p className="flex items-start">
            <span className="inline-block w-6 h-6 bg-zambrano-dark-blue text-white rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0">1</span>
            Revisaremos tu información médica detalladamente
          </p>
          <p className="flex items-start">
            <span className="inline-block w-6 h-6 bg-zambrano-dark-blue text-white rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0">2</span>
            Te contactaremos para coordinar tu cita de valoración
          </p>
          <p className="flex items-start">
            <span className="inline-block w-6 h-6 bg-zambrano-dark-blue text-white rounded-full text-xs flex items-center justify-center mr-3 mt-0.5 shrink-0">3</span>
            Tendrás tu consulta personalizada con nuestros especialistas
          </p>
        </div>
      </div>

      <Button 
        onClick={onReset}
        variant="outline"
        className="border-zambrano-dark-blue text-zambrano-dark-blue hover:bg-zambrano-dark-blue hover:text-white"
      >
        Enviar otra consulta
      </Button>
    </div>
  );
};

export default SuccessStep;
