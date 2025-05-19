
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MedicalFormData } from "../FormTypes";
import { Camera, ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoUploadStepProps {
  formData: MedicalFormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type PhotoType = "front" | "side" | "back";

const PhotoUploadStep = ({ formData, handleFileChange }: PhotoUploadStepProps) => {
  const [photoPreview, setPhotoPreview] = useState<{
    front: string | null;
    side: string | null;
    back: string | null;
  }>({
    front: null,
    side: null,
    back: null
  });

  const handleIndividualPhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>, 
    type: PhotoType
  ) => {
    if (e.target.files && e.target.files[0]) {
      // Create a preview
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setPhotoPreview(prev => ({
          ...prev,
          [type]: event.target?.result as string
        }));
      };
      fileReader.readAsDataURL(e.target.files[0]);
      
      // Use the existing handler but transfer the selected file
      // to a new FileList-like object containing all photos
      const existingFiles = formData.images || new DataTransfer().files;
      const newFileList = new DataTransfer();
      
      // Add existing files except any previous file of this type
      // This approach allows replacing individual photos
      if (existingFiles) {
        Array.from(existingFiles).forEach(file => {
          // Skip files that match the current type's naming pattern
          if (!file.name.startsWith(`${type}-`)) {
            newFileList.items.add(file);
          }
        });
      }
      
      // Add the new file with type prefix to identify it
      const newFile = e.target.files[0];
      // Create a new file with the type as prefix to identify it later
      const renamedFile = new File(
        [newFile], 
        `${type}-${newFile.name}`, 
        { type: newFile.type }
      );
      newFileList.items.add(renamedFile);
      
      // Create an event-like object to pass to the parent handler
      const syntheticEvent = {
        target: {
          name: "images",
          files: newFileList.files
        }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      
      handleFileChange(syntheticEvent);
    }
  };

  const triggerFileInput = (type: PhotoType) => {
    const input = document.getElementById(`${type}-photo-input`);
    input?.click();
  };

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
          {/* Front Photo */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <Input 
              id="front-photo-input"
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => handleIndividualPhotoUpload(e, "front")}
              className="hidden"
            />
            
            {photoPreview.front ? (
              <div className="relative w-full h-32 mb-2">
                <img 
                  src={photoPreview.front} 
                  alt="Vista frontal" 
                  className="w-full h-full object-cover rounded-md"
                />
                <Button 
                  size="icon" 
                  variant="outline"
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"
                  onClick={() => triggerFileInput("front")}
                >
                  <Upload size={12} />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                className="w-full h-32 flex flex-col gap-2" 
                onClick={() => triggerFileInput("front")}
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <ImageIcon size={20} className="text-zambrano-dark-blue" />
                </div>
                <span className="text-sm font-medium">Frente</span>
                <span className="text-xs text-zambrano-gray">Click para subir</span>
              </Button>
            )}
          </div>
          
          {/* Side Photo */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <Input 
              id="side-photo-input"
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => handleIndividualPhotoUpload(e, "side")}
              className="hidden"
            />
            
            {photoPreview.side ? (
              <div className="relative w-full h-32 mb-2">
                <img 
                  src={photoPreview.side} 
                  alt="Vista de perfil" 
                  className="w-full h-full object-cover rounded-md"
                />
                <Button 
                  size="icon" 
                  variant="outline"
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"
                  onClick={() => triggerFileInput("side")}
                >
                  <Upload size={12} />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                className="w-full h-32 flex flex-col gap-2" 
                onClick={() => triggerFileInput("side")}
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <ImageIcon size={20} className="text-zambrano-dark-blue" />
                </div>
                <span className="text-sm font-medium">Perfil</span>
                <span className="text-xs text-zambrano-gray">Click para subir</span>
              </Button>
            )}
          </div>
          
          {/* Back Photo */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <Input 
              id="back-photo-input"
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => handleIndividualPhotoUpload(e, "back")}
              className="hidden"
            />
            
            {photoPreview.back ? (
              <div className="relative w-full h-32 mb-2">
                <img 
                  src={photoPreview.back} 
                  alt="Vista de espalda" 
                  className="w-full h-full object-cover rounded-md"
                />
                <Button 
                  size="icon" 
                  variant="outline"
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"
                  onClick={() => triggerFileInput("back")}
                >
                  <Upload size={12} />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                className="w-full h-32 flex flex-col gap-2" 
                onClick={() => triggerFileInput("back")}
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <ImageIcon size={20} className="text-zambrano-dark-blue" />
                </div>
                <span className="text-sm font-medium">Espalda</span>
                <span className="text-xs text-zambrano-gray">Click para subir</span>
              </Button>
            )}
          </div>
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
