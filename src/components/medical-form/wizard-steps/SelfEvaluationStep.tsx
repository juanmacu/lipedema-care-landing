
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MedicalFormData } from "../FormTypes";

interface SelfEvaluationStepProps {
  formData: MedicalFormData;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
}

const SelfEvaluationStep = ({ formData, handleSymptomsChange }: SelfEvaluationStepProps) => {
  const symptoms = [
    { id: "legPain", label: "Dolor en las piernas al tocarlas" },
    { id: "heaviness", label: "Sensación de pesadez en las piernas" },
    { id: "swelling", label: "Hinchazón que no se reduce con el reposo" },
    { id: "bruising", label: "Moretones que aparecen con facilidad" },
    { id: "symmetricFat", label: "Grasa simétrica en ambos lados del cuerpo" },
    { id: "orangePeel", label: "Piel con apariencia de 'cáscara de naranja'" },
    { id: "coldness", label: "Sensación de frío en las extremidades" },
    { id: "jointPain", label: "Dolor en las articulaciones" }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium mb-2">¿Te identificas con estos síntomas?</h3>
        <p className="text-gray-600">
          Muchas personas viven con síntomas de lipedema sin saberlo. Este paso te ayudará a
          reflexionar sobre tu situación.
        </p>
      </div>
      
      <div className="space-y-4">
        {symptoms.map((symptom) => (
          <div key={symptom.id} className="flex items-center justify-between border-b pb-3">
            <Label htmlFor={symptom.id} className="flex-grow cursor-pointer">
              {symptom.label}
            </Label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-medium">No</span>
              <Switch 
                id={symptom.id}
                checked={formData.symptoms?.[symptom.id] || false}
                onCheckedChange={(checked) => handleSymptomsChange(symptom.id, checked)}
              />
              <span className="text-sm text-gray-500 font-medium">Sí</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-center text-gray-500 italic mt-6">
        Esta autoevaluación no sustituye un diagnóstico profesional.
      </div>
    </div>
  );
};

export default SelfEvaluationStep;
