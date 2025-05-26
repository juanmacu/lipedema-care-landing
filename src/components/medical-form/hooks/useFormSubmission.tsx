
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MedicalFormData } from "../FormTypes";
import { useFormValidation } from "./useFormValidation";
import { supabase } from "@/integrations/supabase/client";

export const useFormSubmission = (
  formData: MedicalFormData,
  currentStep: number,
  setFormData: React.Dispatch<React.SetStateAction<MedicalFormData>>,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { validateStep } = useFormValidation();

  const uploadPhoto = async (file: File, type: string): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${type}-${Date.now()}.${fileExt}`;
      const filePath = `${formData.email}/${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('form_photos')
        .upload(filePath, file);

      if (uploadError) {
        console.error('Error uploading file:', uploadError);
        return null;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('form_photos')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error in upload process:', error);
      return null;
    }
  };

  const saveFormToDatabase = async () => {
    try {
      // Upload photos first if they exist
      let photoUrls: { [key: string]: string } = {};
      
      if (formData.images && formData.images.length > 0) {
        // Process each image according to the naming pattern
        for (let i = 0; i < formData.images.length; i++) {
          const file = formData.images[i];
          const fileName = file.name;
          
          // Determine photo type based on filename prefix
          if (fileName.startsWith('front-')) {
            const url = await uploadPhoto(file, 'frente');
            if (url) photoUrls.frente = url;
          } else if (fileName.startsWith('side-')) {
            const url = await uploadPhoto(file, 'perfil');
            if (url) photoUrls.perfil = url;
          } else if (fileName.startsWith('back-')) {
            const url = await uploadPhoto(file, 'espalda');
            if (url) photoUrls.espalda = url;
          }
        }
      }

      // Map form data to match the database schema
      const formSubmissionData = {
        full_name: formData.fullName,
        email: formData.email,
        country: formData.country,
        phone: formData.phone,
        
        // Map symptoms from object to individual fields
        symptom_dolor_piernas: formData.symptoms?.dolor_piernas || false,
        symptom_pesadez: formData.symptoms?.pesadez || false,
        symptom_hinchazon: formData.symptoms?.hinchazon || false,
        symptom_moretones: formData.symptoms?.moretones || false,
        symptom_grasa_simetrica: formData.symptoms?.grasa_simetrica || false,
        symptom_cascara_naranja: formData.symptoms?.cascara_naranja || false,
        symptom_frio_extremidades: formData.symptoms?.frio_extremidades || false,
        symptom_dolor_articulaciones: formData.symptoms?.dolor_articulaciones || false,
        
        age: parseInt(formData.age) || null,
        gender: formData.gender,
        weight_kg: parseFloat(formData.weight) || null,
        height_cm: parseFloat(formData.height) || null,
        selected_doctor: formData.doctor,
        case_comments: formData.comments,
        
        photo_urls: Object.keys(photoUrls).length > 0 ? photoUrls : null,
        
        consent_data_use: formData.consent,
        consent_newsletter: formData.newsletter || false
      };

      // Insert data into Supabase
      const { error } = await supabase
        .from('form_submissions_lipedema')
        .insert([formSubmissionData]);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep, formData)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const success = await saveFormToDatabase();
      
      if (success) {
        // Marcar como enviado exitosamente
        setIsSubmitted(true);
        
        // Mostrar toast centrado con mejor UX
        toast({
          title: "¡Valoración enviada correctamente!",
          description: "Recibimos tu información. En breve te contactaremos por correo o WhatsApp.",
          duration: 5000,
        });
        
        // No resetear el formulario inmediatamente, mantener la pantalla de éxito
      } else {
        toast({
          title: "Error al enviar el formulario",
          description: "Por favor intenta nuevamente o contáctanos directamente.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error al enviar el formulario",
        description: "Por favor intenta nuevamente o contáctanos directamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
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
    setIsSubmitted(false);
  };

  return {
    isSubmitting,
    isSubmitted,
    handleSubmit,
    resetForm
  };
};
