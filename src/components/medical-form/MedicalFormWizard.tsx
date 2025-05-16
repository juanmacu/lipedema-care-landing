
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { MedicalFormData } from "./FormTypes";
import PersonalInfoStep from "./wizard-steps/PersonalInfoStep";
import HealthDetailsStep from "./wizard-steps/HealthDetailsStep";
import PhotoUploadStep from "./wizard-steps/PhotoUploadStep";
import ContactConsentStep from "./wizard-steps/ContactConsentStep";
import SelfEvaluationStep from "./wizard-steps/SelfEvaluationStep";
import StepIndicator from "./wizard-steps/StepIndicator";

const MedicalFormWizard = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<MedicalFormData>({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    country: "",
    weight: "",
    height: "",
    doctor: "",
    comments: "",
    images: null,
    consent: false,
    symptoms: {},
  });

  const totalSteps = 5;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, images: e.target.files });
    }
  };

  const handleSymptomsChange = (symptom: string, value: boolean) => {
    setFormData({
      ...formData,
      symptoms: {
        ...formData.symptoms,
        [symptom]: value
      }
    });
  };

  const validateStep = (step: number): boolean => {
    switch(step) {
      case 1:
        // No validation for self-evaluation
        return true;
      case 2:
        // Validate personal info
        if (!formData.fullName || !formData.age || !formData.gender || !formData.country) {
          toast({
            title: "Campos incompletos",
            description: "Por favor completa todos los campos obligatorios.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      case 3:
        // Validate health details
        if (!formData.weight || !formData.height || !formData.doctor) {
          toast({
            title: "Campos incompletos",
            description: "Por favor completa todos los campos obligatorios.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      case 4:
        // Validate photo upload
        if (!formData.images || formData.images.length < 1) {
          toast({
            title: "Fotografías requeridas",
            description: "Por favor sube al menos 3 fotografías.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      case 5:
        // Validate contact and consent
        if (!formData.email || !formData.phone || !formData.consent) {
          toast({
            title: "Campos incompletos",
            description: "Por favor completa todos los campos y acepta el consentimiento.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) {
      return;
    }

    setIsSubmitting(true);
    
    // In a real app, we would send this data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Valoración enviada correctamente",
        description: "Gracias por tu solicitud. Te contactaremos pronto para tu valoración.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        country: "",
        weight: "",
        height: "",
        doctor: "",
        comments: "",
        images: null,
        consent: false,
        symptoms: {},
      });
      
      setCurrentStep(1);
      setIsSubmitting(false);
    }, 1500);
  };

  const renderStep = () => {
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
              {renderStep()}
              
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={prevStep}
                    className="px-6"
                  >
                    Atrás
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 transition-all duration-300 hover:scale-[1.02] ml-auto px-6"
                  >
                    {currentStep === 4 ? "Último paso" : "Siguiente"}
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 transition-all duration-300 hover:scale-[1.02] ml-auto px-6"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar valoración"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFormWizard;
