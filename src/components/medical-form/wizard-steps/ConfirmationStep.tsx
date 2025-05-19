
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MedicalFormData } from "../FormTypes";
import { Info } from "lucide-react";

interface ConfirmationStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

const ConfirmationStep = ({ formData, handleChange, isSubmitting }: ConfirmationStepProps) => {
  // Create a custom handler for the shadcn Checkbox
  const handleCheckboxChange = (name: string, checked: boolean) => {
    // Create a synthetic event object that mimics the structure expected by handleChange
    const syntheticEvent = {
      target: {
        name: name,
        type: "checkbox",
        checked
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    handleChange(syntheticEvent);
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue mb-4">
          Gracias por confiar en nosotros
        </h3>
        <p className="text-zambrano-gray">
          Tu caso será revisado por nuestro equipo médico. Te contactaremos pronto para agendar tu valoración presencial en Bogotá.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm space-y-5">
        <div className="flex items-start space-x-2">
          <div className="mt-1">
            <Checkbox 
              id="consent" 
              name="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => 
                handleCheckboxChange("consent", checked === true)
              }
            />
          </div>
          <div>
            <Label 
              htmlFor="consent" 
              className="font-medium text-sm text-zambrano-dark-blue"
            >
              Autorizo el tratamiento de mis datos personales para fines médicos según la Ley de Protección de Datos.
            </Label>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <div className="mt-1">
            <Checkbox 
              id="newsletter" 
              name="newsletter"
              checked={!!formData.newsletter}
              onCheckedChange={(checked) => 
                handleCheckboxChange("newsletter", checked === true)
              }
            />
          </div>
          <div>
            <Label 
              htmlFor="newsletter" 
              className="font-normal text-sm text-zambrano-gray"
            >
              Deseo recibir boletines informativos, comunicaciones y noticias relevantes sobre lipedema.
            </Label>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md flex items-start space-x-3 mt-2">
          <Info size={18} className="text-zambrano-dark-blue mt-0.5 flex-shrink-0" />
          <p className="text-zambrano-gray text-sm">
            Al enviar este formulario, aceptas que nuestros médicos especialistas evalúen tu caso con la información proporcionada. Te contactaremos para los siguientes pasos en tu valoración médica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
