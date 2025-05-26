
import { useFormValidation } from "./useFormValidation";
import { MedicalFormData } from "../FormTypes";

export const useFormNavigation = (
  formData: MedicalFormData,
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const { validateStep } = useFormValidation();
  
  const totalSteps = 5;

  const nextStep = () => {
    if (validateStep(currentStep, formData) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Smooth scroll to top of form
      document.getElementById('form-wizard')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Smooth scroll to top of form
      document.getElementById('form-wizard')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return {
    totalSteps,
    nextStep,
    prevStep
  };
};
