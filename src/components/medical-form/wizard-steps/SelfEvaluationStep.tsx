
import { MedicalFormData } from "../FormTypes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface SelfEvaluationStepProps {
  formData: MedicalFormData;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
}

const symptoms = [
  {
    id: "pain",
    label: "Dolor en las piernas al tocarlas"
  },
  {
    id: "heaviness",
    label: "Sensación de pesadez en las piernas"
  },
  {
    id: "swelling",
    label: "Hinchazón que no se reduce con el reposo"
  },
  {
    id: "bruising",
    label: "Moretones que aparecen con facilidad"
  },
  {
    id: "symmetric",
    label: "Grasa simétrica en ambos lados del cuerpo"
  },
  {
    id: "nodules",
    label: "Piel con apariencia de 'cáscara de naranja'"
  },
  {
    id: "coldness",
    label: "Sensación de frío en las extremidades"
  },
  {
    id: "jointpain",
    label: "Dolor en las articulaciones"
  }
];

const SelfEvaluationStep = ({ formData, handleSymptomsChange }: SelfEvaluationStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue">
          ¿Te identificas con estos síntomas?
        </h3>
        <p className="mt-2 text-zambrano-gray">
          Muchas personas viven con síntomas de lipedema sin saberlo. Este paso te ayudará a reflexionar sobre tu situación.
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="space-y-4">
          {symptoms.map((symptom) => (
            <div 
              key={symptom.id} 
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Label htmlFor={`symptom-${symptom.id}`} className="cursor-pointer">{symptom.label}</Label>
              <Switch 
                id={`symptom-${symptom.id}`}
                checked={formData.symptoms?.[symptom.id] || false}
                onCheckedChange={(checked) => handleSymptomsChange(symptom.id, checked)}
              />
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-sm text-zambrano-gray text-center italic">
        Esta autoevaluación no sustituye un diagnóstico profesional.
      </p>
    </div>
  );
};

export default SelfEvaluationStep;
