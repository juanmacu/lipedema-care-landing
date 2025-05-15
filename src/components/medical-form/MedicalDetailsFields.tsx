
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MedicalFormData } from "./FormTypes";

interface MedicalDetailsFieldsProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const MedicalDetailsFields = ({ formData, handleChange, handleSelectChange }: MedicalDetailsFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="weight">Peso (kg)</Label>
          <Input 
            id="weight"
            name="weight"
            type="number"
            placeholder="Ej: 70"
            value={formData.weight}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="height">Altura (cm)</Label>
          <Input 
            id="height"
            name="height"
            type="number"
            placeholder="Ej: 165"
            value={formData.height}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="doctor">Selecciona el doctor</Label>
        <Select 
          name="doctor" 
          onValueChange={(value) => handleSelectChange("doctor", value)}
          value={formData.doctor}
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Elige un especialista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dr_zambrano">Dr. Juan C. Zambrano</SelectItem>
            <SelectItem value="dra_gaona">Dra. Jennifer Gaona</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="comments">Comentarios / Historia del caso</Label>
        <Textarea 
          id="comments"
          name="comments"
          placeholder="Describe tu caso, síntomas o dudas"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1"
          rows={4}
        />
      </div>
    </>
  );
};

export default MedicalDetailsFields;
