
import SelfEvaluationStep from "../wizard-steps/SelfEvaluationStep";
import PersonalInfoStep from "../wizard-steps/PersonalInfoStep";
import HealthDetailsStep from "../wizard-steps/HealthDetailsStep";
import PhotoUploadStep from "../wizard-steps/PhotoUploadStep";
import ContactConsentStep from "../wizard-steps/ContactConsentStep";
import { MedicalFormData } from "../FormTypes";

interface StepRendererProps {
  currentStep: number;
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
  isSubmitting: boolean;
}

const StepRenderer = ({
  currentStep,
  formData,
  handleChange,
  handleSelectChange,
  handleFileChange,
  handleSymptomsChange,
  isSubmitting
}: StepRendererProps) => {
  switch(currentStep) {
    case 1:
      return (
        <SelfEvaluationStep 
          formData={formData}
          handleSymptomsChange={handleSymptomsChange}
        />
      );
    case 2:
      return (
        <PersonalInfoStep 
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case 3:
      return (
        <HealthDetailsStep 
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case 4:
      return (
        <PhotoUploadStep 
          formData={formData}
          handleFileChange={handleFileChange}
        />
      );
    case 5:
      return (
        <ContactConsentStep
          formData={formData}
          handleChange={handleChange}
          isSubmitting={isSubmitting}
        />
      );
    default:
      return null;
  }
};

export default StepRenderer;
