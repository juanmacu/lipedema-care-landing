
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  // Create an array of step numbers
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  
  // Step titles
  const stepTitles = [
    "Datos personales",
    "Estado de salud",
    "Fotografías",
    "Confirmación"
  ];
  
  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step) => (
          <div key={step} className="flex flex-col items-center relative">
            <div 
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm
                ${step < currentStep 
                  ? 'bg-zambrano-dark-blue text-white' 
                  : step === currentStep 
                    ? 'bg-zambrano-light-blue text-zambrano-dark-blue border-2 border-zambrano-dark-blue' 
                    : 'bg-gray-200 text-gray-500'
                }
                transition-all duration-200
              `}
            >
              {step < currentStep ? <Check size={18} /> : step}
            </div>
            
            <span className={`
              text-xs mt-2 font-medium hidden md:block
              ${step === currentStep ? 'text-zambrano-dark-blue' : 'text-gray-500'}
            `}>
              {stepTitles[step - 1]}
            </span>
            
            {/* Connecting line */}
            {step < totalSteps && (
              <div className="hidden md:block absolute h-0.5 bg-gray-200 w-full top-5 left-1/2 -z-10">
                <div 
                  className={`h-full bg-zambrano-dark-blue transition-all duration-500 ease-in-out`}
                  style={{ width: step < currentStep ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4 md:hidden">
        <p className="text-sm font-medium text-zambrano-dark-blue">
          Paso {currentStep} de {totalSteps}: {stepTitles[currentStep - 1]}
        </p>
      </div>
    </div>
  );
};

export default StepIndicator;
