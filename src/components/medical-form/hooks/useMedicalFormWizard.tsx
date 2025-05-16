
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MedicalFormData } from "../FormTypes";

export const useMedicalFormWizard = () => {
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
        // Validate contact info
        if (!formData.fullName || !formData.email || !formData.phone || !formData.country) {
          toast({
            title: "Campos incompletos",
            description: "Por favor completa todos los campos obligatorios.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      case 2:
        // No validation for self-evaluation
        return true;
      case 3:
        // Validate health details
        if (!formData.age || !formData.gender || !formData.weight || !formData.height || !formData.doctor) {
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
        if (!formData.images || formData.images.length < 3) {
          toast({
            title: "Fotografías requeridas",
            description: "Por favor sube al menos 3 fotografías.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      case 5:
        // Validate consent
        if (!formData.consent) {
          toast({
            title: "Consentimiento requerido",
            description: "Por favor acepta el consentimiento para continuar.",
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
        description: "Recibimos tu información. En breve te contactaremos por correo o WhatsApp.",
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

  return {
    formData,
    currentStep,
    totalSteps,
    isSubmitting,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange,
    validateStep,
    nextStep,
    prevStep,
    handleSubmit,
  };
};
