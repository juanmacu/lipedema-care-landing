
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SelfEvaluationStepProps {
  formData: any;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
}

const SelfEvaluationStep = ({
  formData,
  handleSymptomsChange,
}: SelfEvaluationStepProps) => {
  const symptoms = [
    {
      id: "localizedFat",
      question: "¿Tienes grasa localizada en piernas o brazos que no mejora con dieta ni ejercicio?",
    },
    {
      id: "painSensitivity",
      question: "¿Sientes dolor o sensibilidad al tacto en esas zonas?",
    },
    {
      id: "frequentBruising",
      question: "¿Tienes moretones frecuentes sin causa clara?",
    },
    {
      id: "heavyLegs",
      question: "¿Sientes pesadez o tensión en las piernas?",
    },
    {
      id: "weightLoss",
      question: "¿Has perdido peso pero tus piernas siguen igual?",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Introducción emocional */}
      <div className="bg-white p-5 border border-gray-100 rounded-lg mb-6 shadow-sm">
        <p className="text-zambrano-dark-blue text-center leading-relaxed">
          ¿Te has sentido confundida con los síntomas en tus piernas o brazos?<br />
          Este pequeño paso te ayudará a saber si podrías estar viviendo con Lipedema.<br />
          No necesitas saber todo. Solo responde lo que sientas identificado.
        </p>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue">
          ¿Te identificas con estos síntomas?
        </h3>
        <p className="text-zambrano-gray mt-2">
          Muchas personas viven con síntomas de lipedema sin saberlo. Este paso te ayudará a reflexionar sobre tu situación.
        </p>
      </div>

      <div className="space-y-5">
        {symptoms.map((symptom) => (
          <div key={symptom.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-zambrano-dark-blue mb-3">{symptom.question}</p>
            <ToggleGroup
              type="single"
              value={formData.symptoms?.[symptom.id] === true ? "yes" : formData.symptoms?.[symptom.id] === false ? "no" : undefined}
              onValueChange={(value) => {
                if (value === "yes") {
                  handleSymptomsChange(symptom.id, true);
                } else if (value === "no") {
                  handleSymptomsChange(symptom.id, false);
                }
              }}
              className="flex justify-start gap-3"
            >
              <ToggleOption value="yes" selected={formData.symptoms?.[symptom.id] === true}>
                Sí
              </ToggleOption>
              <ToggleOption value="no" selected={formData.symptoms?.[symptom.id] === false}>
                No
              </ToggleOption>
            </ToggleGroup>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white border border-zambrano-light-blue rounded-lg text-center">
        <p className="text-zambrano-dark-blue font-medium">
          Si te identificas con varios de estos síntomas, no estás sola. Podemos ayudarte.
        </p>
      </div>
    </div>
  );
};

interface ToggleOptionProps {
  value: string;
  children: React.ReactNode;
  selected?: boolean;
}

const ToggleOption = ({ value, children, selected }: ToggleOptionProps) => {
  const isYes = value === "yes";
  
  return (
    <ToggleGroupItem
      value={value}
      className={cn(
        "min-w-24 px-4 py-2 rounded-md transition-all duration-200 ease-in-out border",
        selected && isYes ? "bg-zambrano-light-blue text-zambrano-dark-blue border-zambrano-dark-blue shadow-md transform scale-[1.02]" : 
        selected && !isYes ? "bg-gray-100 text-zambrano-dark-blue border-gray-300 shadow-md transform scale-[1.02]" :
        "bg-white border-gray-200 hover:bg-gray-50"
      )}
    >
      {children}
    </ToggleGroupItem>
  );
};

export default SelfEvaluationStep;
