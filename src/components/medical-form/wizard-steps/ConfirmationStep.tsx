
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MedicalFormData } from "../FormTypes";

interface ConfirmationStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
}

const ConfirmationStep = ({ formData, handleChange, isSubmitting }: ConfirmationStepProps) => {
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
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm space-y-4">
        <div className="flex items-start space-x-2 mb-6">
          <div className="mt-1">
            <Checkbox 
              id="consent" 
              name="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => {
                const e = {
                  target: {
                    name: "consent",
                    type: "checkbox",
                    checked: checked === true
                  }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChange(e);
              }}
            />
          </div>
          <div>
            <Label 
              htmlFor="consent" 
              className="font-normal text-sm text-zambrano-dark-blue"
            >
              Autorizo el tratamiento de mis datos personales para fines médicos según la Ley de Protección de Datos.
            </Label>
          </div>
        </div>
        
        <p className="text-zambrano-gray text-sm">
          Al enviar este formulario, aceptas que nuestros médicos especialistas evalúen tu caso con la información proporcionada. Te contactaremos para los siguientes pasos en tu valoración médica.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationStep;
