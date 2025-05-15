
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "./FormTypes";
import PhotoUploadDialog from "./PhotoUploadDialog";

interface PhotoUploadFieldProps {
  formData: MedicalFormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploadField = ({ formData, handleFileChange }: PhotoUploadFieldProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Label htmlFor="images">Fotografías</Label>
        <PhotoUploadDialog />
      </div>
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
      <p className="text-xs text-gray-500 mt-1">Sube tus fotografías (JPG, PNG, PDF)</p>
    </div>
  );
};

export default PhotoUploadField;
