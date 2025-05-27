
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, MessageCircle } from "lucide-react";

interface SuccessStepProps {
  onReset: () => void;
}

const SuccessStep = ({ onReset }: SuccessStepProps) => {
  return (
    <div className="text-center space-y-6 py-8">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-2xl md:text-3xl font-medium text-zambrano-dark-blue">
          ¡Valoración enviada correctamente!
        </h3>
        <p className="text-zambrano-gray text-lg max-w-md mx-auto">
          Recibimos tu información. En breve te contactaremos por correo o WhatsApp.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Revisa tu correo</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">O espera nuestro WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={onReset}
          variant="outline"
          className="hover:bg-gray-50"
        >
          Enviar otra valoración
        </Button>
      </div>
    </div>
  );
};

export default SuccessStep;
