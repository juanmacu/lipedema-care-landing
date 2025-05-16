
import { useState } from "react";
import StepIndicator from "./wizard-steps/StepIndicator";
import FormNavigation from "./wizard-components/FormNavigation";
import StepRenderer from "./wizard-components/StepRenderer";
import { useMedicalFormWizard } from "./hooks/useMedicalFormWizard";

const MedicalFormWizard = () => {
  const {
    formData,
    currentStep,
    totalSteps,
    isSubmitting,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange,
    nextStep,
    prevStep,
    handleSubmit,
  } = useMedicalFormWizard();

  return (
    <section id="valoracion" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-center mb-3">Valoración médica personalizada</h2>
            
            <p className="text-zambrano-gray text-center max-w-2xl mx-auto mb-5">
              Queremos conocer tu caso y acompañarte en cada paso. Completa este formulario para que nuestro equipo
              pueda brindarte la atención personalizada que mereces.
            </p>
            
            <div className="text-sm text-zambrano-gray italic text-center mb-8">
              Todos tus datos serán tratados con absoluta confidencialidad médica.
            </div>
          </div>
          
          <div id="form-wizard" className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <StepRenderer 
                currentStep={currentStep}
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                handleFileChange={handleFileChange}
                handleSymptomsChange={handleSymptomsChange}
                isSubmitting={isSubmitting}
              />
              
              <FormNavigation
                currentStep={currentStep}
                totalSteps={totalSteps}
                onPrev={prevStep}
                onNext={nextStep}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFormWizard;
