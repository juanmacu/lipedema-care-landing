
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="py-3 sm:py-4 md:py-6 px-3 sm:px-6 md:px-8 bg-gray-50 border-b border-gray-100">
      {/* Progress bar */}
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm sm:text-base text-zambrano-dark-blue font-medium">
            Paso {currentStep} de {totalSteps}
          </div>
          <div className="text-sm sm:text-base text-zambrano-gray">
            {Math.round((currentStep / totalSteps) * 100)}%
          </div>
        </div>
        <div className="overflow-hidden h-2 sm:h-3 text-xs flex rounded bg-gray-200">
          <div
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-zambrano-light-blue transition-all duration-500"
          ></div>
        </div>
      </div>

      {/* Step labels - Mobile optimized layout */}
      <div className="mt-4 sm:mt-6">
        {/* Mobile: Stack current step info */}
        <div className="block sm:hidden">
          <div className="text-center">
            <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-medium">
              {currentStep}
            </div>
            <div className="text-sm font-medium text-zambrano-dark-blue leading-tight px-2">
              {getStepName(currentStep)}
            </div>
          </div>
          
          {/* Progress dots for mobile */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => {
              const stepNumber = index + 1;
              const isActive = currentStep >= stepNumber;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    isActive ? "bg-zambrano-light-blue" : "bg-gray-300"
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden sm:flex justify-between items-center">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep >= stepNumber;
            const isCurrentStep = currentStep === stepNumber;
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center flex-1"
              >
                <div 
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-medium mb-2 transition-all",
                    isCurrentStep 
                      ? "bg-zambrano-light-blue text-zambrano-dark-blue border-2 border-zambrano-light-blue ring-2 ring-zambrano-light-blue/20" 
                      : isActive 
                        ? "bg-zambrano-light-blue text-zambrano-dark-blue" 
                        : "bg-gray-200 text-gray-500"
                  )}
                >
                  {stepNumber}
                </div>
                <span className={cn(
                  "text-xs md:text-sm text-center leading-tight px-1",
                  isActive ? "text-zambrano-dark-blue font-medium" : "text-gray-400"
                )}>
                  {getStepNameShort(stepNumber)}
                </span>
              </div>
            );
          })}
        </div>
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

const getStepNameShort = (step: number): string => {
  switch(step) {
    case 1: return "Contacto";
    case 2: return "Síntomas";
    case 3: return "Salud";
    case 4: return "Fotos";
    case 5: return "Confirmar";
    default: return "";
  }
};

export default StepIndicator;
