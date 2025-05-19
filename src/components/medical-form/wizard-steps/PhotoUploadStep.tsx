
import { MedicalFormData } from "../FormTypes";
import PhotoUploadCard from "../components/PhotoUploadCard";
import { usePhotoUpload } from "../hooks/usePhotoUpload";
import PhotoUploadInstructions from "../components/PhotoUploadInstructions";
import { Camera } from "lucide-react";

interface PhotoUploadStepProps {
  formData: MedicalFormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploadStep = ({ formData, handleFileChange }: PhotoUploadStepProps) => {
  const { photoPreview, handleIndividualPhotoUpload, triggerFileInput } = usePhotoUpload(
    formData, 
    handleFileChange
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue">
          Adjunta tus fotografías para una mejor valoración
        </h3>
      </div>
      
      <PhotoUploadInstructions />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <PhotoUploadCard 
          type="front"
          preview={photoPreview.front}
          onPhotoUpload={handleIndividualPhotoUpload}
          triggerFileInput={triggerFileInput}
          label="Frente"
        />
        
        <PhotoUploadCard 
          type="side"
          preview={photoPreview.side}
          onPhotoUpload={handleIndividualPhotoUpload}
          triggerFileInput={triggerFileInput}
          label="Perfil"
        />
        
        <PhotoUploadCard 
          type="back"
          preview={photoPreview.back}
          onPhotoUpload={handleIndividualPhotoUpload}
          triggerFileInput={triggerFileInput}
          label="Espalda"
        />
      </div>
    </div>
  );
};

export default PhotoUploadStep;
