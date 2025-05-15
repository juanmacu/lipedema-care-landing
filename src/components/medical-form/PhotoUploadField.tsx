
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "./FormTypes";
import PhotoUploadDialog from "./PhotoUploadDialog";
import { Camera } from "lucide-react";

interface PhotoUploadFieldProps {
  formData: MedicalFormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploadField = ({ formData, handleFileChange }: PhotoUploadFieldProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="images" className="flex items-center">
          <Camera size={18} className="mr-2 text-zambrano-dark-blue" />
          Fotografías
        </Label>
        <PhotoUploadDialog />
      </div>
      <div className="p-4 border border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
        <p className="text-sm text-zambrano-gray mb-3">
          Por favor, envía tres fotografías: de frente, perfil y espalda. Fondo neutro, no selfies.
        </p>
        <Input 
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/jpeg,image/png,application/pdf"
          onChange={handleFileChange}
          className="mt-1"
        />
        <p className="text-xs text-gray-500 mt-2">Sube tus fotografías (JPG, PNG, PDF)</p>
      </div>
    </div>
  );
};

export default PhotoUploadField;
