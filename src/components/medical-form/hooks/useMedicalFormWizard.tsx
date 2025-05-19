
import { useState } from "react";
import { MedicalFormData } from "../FormTypes";
import { useFormHandlers } from "./useFormHandlers";
import { useFormNavigation } from "./useFormNavigation";
import { useFormSubmission } from "./useFormSubmission";

export const useMedicalFormWizard = () => {
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
    newsletter: false,
    symptoms: {},
  });

  const {
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange
  } = useFormHandlers(formData, setFormData);

  const {
    currentStep,
    totalSteps,
    nextStep,
    prevStep
  } = useFormNavigation(formData);

  const {
    isSubmitting,
    handleSubmit
  } = useFormSubmission(formData, currentStep, setFormData, (step) => currentStep !== step && prevStep());

  return {
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
  };
};
