
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MedicalFormData } from "../FormTypes";
import { useFormValidation } from "./useFormValidation";

export const useFormSubmission = (
  formData: MedicalFormData,
  currentStep: number,
  setFormData: React.Dispatch<React.SetStateAction<MedicalFormData>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { validateStep } = useFormValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep, formData)) {
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
        newsletter: false,
        symptoms: {},
      });
      
      setCurrentStep(1);
      setIsSubmitting(false);
    }, 1500);
  };

  return {
    isSubmitting,
    handleSubmit
  };
};
