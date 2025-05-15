
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MedicalFormData } from "./FormTypes";

interface ConsentFieldProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConsentField = ({ formData, handleChange }: ConsentFieldProps) => {
  // Create a custom handler for the shadcn Checkbox
  const handleCheckboxChange = (checked: boolean) => {
    // Create a synthetic event object that mimics the structure expected by handleChange
    const syntheticEvent = {
      target: {
        name: "consent",
        type: "checkbox",
        checked
      }
    } as React.ChangeEvent<HTMLInputElement>;
    
    handleChange(syntheticEvent);
  };
  
  return (
    <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm">
      <div className="flex items-start space-x-3">
        <Checkbox 
          id="consent"
          checked={formData.consent}
          onCheckedChange={handleCheckboxChange}
          className="mt-1 data-[state=checked]:bg-zambrano-dark-blue data-[state=checked]:border-zambrano-dark-blue"
        />
        <Label htmlFor="consent" className="text-sm text-zambrano-gray">
          Autorizo el tratamiento de mis datos personales para fines médicos según la Ley de Protección de Datos. 
          Entiendo que esta información será utilizada exclusivamente para mi valoración médica.
        </Label>
      </div>
    </div>
  );
};

export default ConsentField;
