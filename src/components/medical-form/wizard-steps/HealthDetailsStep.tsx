
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MedicalFormData } from "../FormTypes";

interface HealthDetailsStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const HealthDetailsStep = ({ formData, handleChange, handleSelectChange }: HealthDetailsStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold text-zambrano-dark-blue text-center mb-6">
        Cuéntanos sobre tu salud
      </h3>
      
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
            required
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
            required
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
        <Label htmlFor="comments">Comentarios / Síntomas</Label>
        <Textarea 
          id="comments"
          name="comments"
          placeholder="Describe tu caso, síntomas, dudas o cualquier detalle relevante sobre tu salud"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1"
          rows={4}
        />
      </div>
    </div>
  );
};

export default HealthDetailsStep;
