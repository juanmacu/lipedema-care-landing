
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
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue">
          {formData.fullName 
            ? `${formData.fullName.split(' ')[0]}, gracias por tu confianza. Cuéntanos un poco más...` 
            : "Cuéntanos un poco más sobre ti"}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="age">Edad</Label>
          <Input 
            id="age"
            name="age"
            type="number"
            placeholder="Tu edad"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 border-gray-300"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="gender">Género</Label>
          <Select 
            name="gender" 
            onValueChange={(value) => handleSelectChange("gender", value)}
            value={formData.gender}
          >
            <SelectTrigger className="mt-1 border-gray-300">
              <SelectValue placeholder="Selecciona tu género" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="female">Femenino</SelectItem>
              <SelectItem value="male">Masculino</SelectItem>
              <SelectItem value="other">Otro</SelectItem>
              <SelectItem value="prefer_not_to_say">Prefiero no decirlo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
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
            className="mt-1 border-gray-300"
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
            className="mt-1 border-gray-300"
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="doctor">¿Con qué doctor deseas tu consulta?</Label>
        <Select 
          name="doctor" 
          onValueChange={(value) => handleSelectChange("doctor", value)}
          value={formData.doctor}
        >
          <SelectTrigger className="mt-1 border-gray-300">
            <SelectValue placeholder="Selecciona un especialista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dr_zambrano">Dr. Juan C. Zambrano</SelectItem>
            <SelectItem value="dra_gaona">Dra. Jennifer Gaona</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="comments">Comentarios sobre tu caso</Label>
        <Textarea 
          id="comments"
          name="comments"
          placeholder="Describe tu caso, síntomas o dudas que tengas"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1 border-gray-300"
          rows={4}
        />
      </div>
    </div>
  );
};

export default HealthDetailsStep;
