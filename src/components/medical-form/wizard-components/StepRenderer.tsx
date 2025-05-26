
import ContactInfoStep from "../wizard-steps/ContactInfoStep";
import SelfEvaluationStep from "../wizard-steps/SelfEvaluationStep";
import HealthDetailsStep from "../wizard-steps/HealthDetailsStep";
import PhotoUploadStep from "../wizard-steps/PhotoUploadStep";
import ConfirmationStep from "../wizard-steps/ConfirmationStep";
import SuccessStep from "../wizard-steps/SuccessStep";
import { MedicalFormData } from "../FormTypes";

interface StepRendererProps {
  currentStep: number;
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSymptomsChange: (symptom: string, value: boolean) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  onReset: () => void;
}

const StepRenderer = ({
  currentStep,
  formData,
  handleChange,
  handleSelectChange,
  handleFileChange,
  handleSymptomsChange,
  isSubmitting,
  isSubmitted,
  onReset
}: StepRendererProps) => {
  // Si el formulario fue enviado exitosamente, mostrar pantalla de éxito
  if (isSubmitted) {
    return <SuccessStep onReset={onReset} />;
  }

  switch(currentStep) {
    case 1:
      return (
        <ContactInfoStep 
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case 2:
      return (
        <SelfEvaluationStep 
          formData={formData}
          handleSymptomsChange={handleSymptomsChange}
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
        <ConfirmationStep
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
