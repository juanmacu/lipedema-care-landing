
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "../FormTypes";

interface SelfEvaluationStepProps {
  formData: MedicalFormData;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
}

const SelfEvaluationStep = ({ formData, handleSymptomsChange }: SelfEvaluationStepProps) => {
  const symptoms = [
    { id: "dolor_piernas", label: "Dolor en piernas" },
    { id: "pesadez", label: "Sensación de pesadez en piernas" },
    { id: "hinchazon", label: "Hinchazón que no mejora con elevación" },
    { id: "moretones", label: "Moretones o hematomas con facilidad" },
    { id: "grasa_simetrica", label: "Acumulación de grasa simétrica en piernas/brazos" },
    { id: "cascara_naranja", label: "Piel con apariencia de 'cáscara de naranja'" },
    { id: "frio_extremidades", label: "Frío en extremidades" },
    { id: "dolor_articulaciones", label: "Dolor en articulaciones" },
  ];
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue mb-2">
          ¿Qué síntomas has experimentado?
        </h3>
        <p className="text-zambrano-gray">
          Selecciona todos los síntomas que has notado durante los últimos meses. Esta información 
          ayudará a nuestros médicos a evaluar tu caso.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {symptoms.map((symptom) => (
            <div key={symptom.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md">
              <Checkbox 
                id={symptom.id}
                checked={formData.symptoms?.[symptom.id] || false}
                onCheckedChange={(checked) => 
                  handleSymptomsChange(symptom.id, checked === true)
                }
                className="mt-1 data-[state=checked]:bg-zambrano-light-blue data-[state=checked]:border-zambrano-dark-blue"
              />
              <Label 
                htmlFor={symptom.id}
                className="cursor-pointer font-medium text-zambrano-dark-blue"
              >
                {symptom.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfEvaluationStep;
