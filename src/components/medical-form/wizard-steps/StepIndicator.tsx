
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="py-4 px-8 bg-gray-50 border-b border-gray-100">
      {/* Progress bar */}
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm text-zambrano-dark-blue font-medium">
            Paso {currentStep} de {totalSteps}
          </div>
          <div className="text-sm text-zambrano-gray">
            {Math.round((currentStep / totalSteps) * 100)}% completado
          </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-zambrano-light-blue transition-all duration-500"
          ></div>
        </div>
      </div>

      {/* Step labels */}
      <div className="flex justify-between items-center mt-4">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep >= stepNumber;
          const isCurrentStep = currentStep === stepNumber;
          
          return (
            <div 
              key={index} 
              className="flex flex-col items-center w-1/5"
            >
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 transition-all",
                  isCurrentStep 
                    ? "bg-zambrano-light-blue text-zambrano-dark-blue border-2 border-zambrano-light-blue ring-4 ring-zambrano-light-blue/20" 
                    : isActive 
                      ? "bg-zambrano-light-blue text-zambrano-dark-blue" 
                      : "bg-gray-200 text-gray-500"
                )}
              >
                {stepNumber}
              </div>
              <span className={cn(
                "text-xs whitespace-nowrap",
                isActive ? "text-zambrano-dark-blue font-medium" : "text-gray-400"
              )}>
                {getStepName(stepNumber)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getStepName = (step: number): string => {
  switch(step) {
    case 1: return "Datos de contacto";
    case 2: return "Síntomas";
    case 3: return "Detalles de salud";
    case 4: return "Fotografías";
    case 5: return "Confirmación";
    default: return "";
  }
};

export default StepIndicator;
