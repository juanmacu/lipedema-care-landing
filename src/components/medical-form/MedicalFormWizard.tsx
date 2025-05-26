
import StepIndicator from "./wizard-steps/StepIndicator";
import FormNavigation from "./wizard-components/FormNavigation";
import StepRenderer from "./wizard-components/StepRenderer";
import { useMedicalFormWizard } from "./hooks/useMedicalFormWizard";
import WizardHeader from "./wizard-components/WizardHeader";
import WizardContainer from "./wizard-components/WizardContainer";
import FormContainer from "./wizard-components/FormContainer";

const MedicalFormWizard = () => {
  const {
    formData,
    currentStep,
    totalSteps,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange,
    nextStep,
    prevStep,
    handleSubmit,
    resetForm,
  } = useMedicalFormWizard();

  return (
    <WizardContainer>
      <WizardHeader />
      
      <FormContainer onSubmit={handleSubmit}>
        {/* Solo mostrar indicador de paso si no se ha enviado el formulario */}
        {!isSubmitted && (
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        )}
        
        <StepRenderer 
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleFileChange={handleFileChange}
          handleSymptomsChange={handleSymptomsChange}
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          onReset={resetForm}
        />
        
        {/* Solo mostrar navegación si no se ha enviado el formulario */}
        {!isSubmitted && (
          <FormNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrev={prevStep}
            onNext={nextStep}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </FormContainer>
    </WizardContainer>
  );
};

export default MedicalFormWizard;
