
import { useState } from "react";
import { MedicalFormData } from "../FormTypes";

export const useFormHandlers = (formData: MedicalFormData, setFormData: React.Dispatch<React.SetStateAction<MedicalFormData>>) => {
  
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

  return {
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSymptomsChange
  };
};
