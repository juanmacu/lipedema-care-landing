
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Upload } from "lucide-react";
import { PhotoType } from "../types/photoTypes";

interface PhotoUploadCardProps {
  type: PhotoType;
  preview: string | null;
  onPhotoUpload: (e: React.ChangeEvent<HTMLInputElement>, type: PhotoType) => void;
  triggerFileInput: (type: PhotoType) => void;
  label: string;
}

const PhotoUploadCard = ({ 
  type,
  preview,
  onPhotoUpload,
  triggerFileInput,
  label
}: PhotoUploadCardProps) => {
  return (
    <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
      <Input 
        id={`${type}-photo-input`}
        type="file"
        accept="image/jpeg,image/png"
        onChange={(e) => onPhotoUpload(e, type)}
        className="hidden"
      />
      
      {preview ? (
        <div className="relative w-full h-32 mb-2">
          <img 
            src={preview} 
            alt={`Vista de ${label}`} 
            className="w-full h-full object-cover rounded-md"
          />
          <Button 
            size="icon" 
            variant="outline"
            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"
            onClick={() => triggerFileInput(type)}
          >
            <Upload size={12} />
          </Button>
        </div>
      ) : (
        <Button 
          variant="ghost" 
          className="w-full h-32 flex flex-col gap-2" 
          onClick={() => triggerFileInput(type)}
        >
          <div className="bg-gray-100 rounded-full p-3">
            <ImageIcon size={20} className="text-zambrano-dark-blue" />
          </div>
          <span className="text-sm font-medium">{label}</span>
          <span className="text-xs text-zambrano-gray">Click para subir</span>
        </Button>
      )}
    </div>
  );
};

export default PhotoUploadCard;
