
import { MedicalFormData } from "../FormTypes";
import { useToast } from "@/hooks/use-toast";

export const useFormValidation = () => {
  const { toast } = useToast();

  const countRequiredPhotoTypes = (images: FileList | null) => {
    if (!images) return 0;
    
    const hasUniqueFront = Array.from(images).some(file => 
      file.name.startsWith('front-')
    );
    
    const hasUniqueSide = Array.from(images).some(file => 
      file.name.startsWith('side-')
    );
    
    const hasUniqueBack = Array.from(images).some(file => 
      file.name.startsWith('back-')
    );
    
    return (hasUniqueFront ? 1 : 0) + (hasUniqueSide ? 1 : 0) + (hasUniqueBack ? 1 : 0);
  };

  const validateStep = (step: number, formData: MedicalFormData): boolean => {
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
        // Validate photo upload - using our approach with labeled photos
        const photoCount = countRequiredPhotoTypes(formData.images);
        
        if (photoCount < 3) {
          toast({
            title: "Fotografías incompletas",
            description: `Por favor sube las 3 fotografías requeridas. Faltan ${3 - photoCount} fotos.`,
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

  return { validateStep };
};
