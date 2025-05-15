
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "../FormTypes";
import { Camera, ImageIcon } from "lucide-react";

interface PhotoUploadStepProps {
  formData: MedicalFormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoUploadStep = ({ formData, handleFileChange }: PhotoUploadStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold text-zambrano-dark-blue text-center mb-6">
        Ayúdanos a conocer mejor tu caso
      </h3>
      
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
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-100 rounded-full p-3 mb-2">
              <ImageIcon size={20} className="text-zambrano-dark-blue" />
            </div>
            <span className="text-sm font-medium">Frente</span>
          </div>
          
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-100 rounded-full p-3 mb-2">
              <ImageIcon size={20} className="text-zambrano-dark-blue" />
            </div>
            <span className="text-sm font-medium">Perfil</span>
          </div>
          
          <div className="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-100 rounded-full p-3 mb-2">
              <ImageIcon size={20} className="text-zambrano-dark-blue" />
            </div>
            <span className="text-sm font-medium">Espalda</span>
          </div>
        </div>
        
        <div className="p-4 border border-dashed border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
          <Input 
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/jpeg,image/png,application/pdf"
            onChange={handleFileChange}
            className="mt-1"
            required
          />
          <p className="text-xs text-zambrano-gray mt-3">
            Por favor, usa fondo neutro y evita selfies para una mejor valoración médica.
            <br />
            Formatos aceptados: JPG, PNG, PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoUploadStep;
