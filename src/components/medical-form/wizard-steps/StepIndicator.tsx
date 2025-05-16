
import { cn } from "@/lib/utils";
import { 
  CheckCircle2, 
  Circle, 
  ClipboardList, 
  UserRound, 
  FileHeart, 
  ImageIcon, 
  Mail 
} from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const steps = [
    { name: "Autoevaluación", icon: ClipboardList },
    { name: "Información personal", icon: UserRound },
    { name: "Detalles de salud", icon: FileHeart },
    { name: "Fotografías", icon: ImageIcon },
    { name: "Contacto", icon: Mail },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 py-4 px-6 border-b border-gray-100 overflow-x-auto">
      <div className="flex items-center">
        {steps.slice(0, totalSteps).map((step, index) => {
          const StepIcon = step.icon;
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;

          return (
            <div key={index} className="flex items-center">
              {/* Step icon and name */}
              <div className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    isActive && "bg-zambrano-light-blue text-zambrano-dark-blue",
                    isCompleted && "bg-zambrano-dark-blue text-white",
                    !isActive && !isCompleted && "bg-gray-200 text-gray-500"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <StepIcon size={20} />
                  )}
                </div>
                <span className={cn(
                  "text-xs mt-1 whitespace-nowrap",
                  isActive && "text-zambrano-dark-blue font-medium",
                  isCompleted && "text-zambrano-dark-blue font-medium",
                  !isActive && !isCompleted && "text-gray-500"
                )}>
                  {step.name}
                </span>
              </div>

              {/* Connector line */}
              {index < totalSteps - 1 && (
                <div className={cn(
                  "w-12 h-px mx-1",
                  isCompleted ? "bg-zambrano-dark-blue" : "bg-gray-300"
                )} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
