
import { MedicalFormData } from "../FormTypes";
import PhotoUploadCard from "../components/PhotoUploadCard";
import { usePhotoUpload } from "../hooks/usePhotoUpload";
import PhotoUploadInstructions from "../components/PhotoUploadInstructions";

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
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Camera size={24} className="text-zambrano-dark-blue" />
          <h4 className="text-lg font-medium text-zambrano-dark-blue">Fotografías para valoración médica</h4>
        </div>
        
        <p className="text-zambrano-gray mb-6">
          Para poder evaluar correctamente tu caso, necesitamos que subas 3 fotografías: 
          <span className="font-medium"> de frente, de perfil y de espalda</span>.
        </p>
        
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
        
        <p className="text-xs text-zambrano-gray mt-3">
          Usa fondo neutro y evita selfies para una mejor valoración médica.
          <br />
          Formatos aceptados: JPG, PNG
        </p>
      </div>
    </div>
  );
};

export default PhotoUploadStep;
