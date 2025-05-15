
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "./FormTypes";

interface ConsentFieldProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConsentField = ({ formData, handleChange }: ConsentFieldProps) => {
  return (
    <div className="flex items-start space-x-2 p-3 border border-gray-200 rounded bg-gray-50">
      <input 
        type="checkbox" 
        id="consent"
        name="consent"
        checked={formData.consent}
        onChange={handleChange}
        className="mt-1"
      />
      <Label htmlFor="consent" className="text-sm">
        Autorizo el tratamiento de estos datos para fines médicos según la Ley de Protección de Datos
      </Label>
    </div>
  );
};

export default ConsentField;
