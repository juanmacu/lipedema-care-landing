
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

  const [currentStep, setCurrentStep] = useState(1);

  const {
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange
  } = useFormHandlers(formData, setFormData);

  const {
    totalSteps,
    nextStep,
    prevStep
  } = useFormNavigation(formData, currentStep, setCurrentStep);

  const {
    isSubmitting,
    isSubmitted,
    handleSubmit,
    resetForm
  } = useFormSubmission(formData, currentStep, setFormData, setCurrentStep);

  return {
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
  };
};
