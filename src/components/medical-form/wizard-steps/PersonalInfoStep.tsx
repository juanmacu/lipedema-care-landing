
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MedicalFormData } from "../FormTypes";

interface PersonalInfoStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const PersonalInfoStep = ({ formData, handleChange, handleSelectChange }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold text-zambrano-dark-blue text-center mb-6">
        Empecemos con tus datos básicos
      </h3>
      
      <div>
        <Label htmlFor="fullName">Nombre completo</Label>
        <Input 
          id="fullName"
          name="fullName"
          placeholder="Escribe tu nombre completo"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="age">Edad</Label>
        <Input 
          id="age"
          name="age"
          type="number"
          placeholder="Tu edad"
          value={formData.age}
          onChange={handleChange}
          className="mt-1"
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
          <SelectTrigger className="mt-1">
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
      
      <div>
        <Label htmlFor="country">País de residencia</Label>
        <Input 
          id="country"
          name="country"
          placeholder="País donde vives actualmente"
          value={formData.country}
          onChange={handleChange}
          className="mt-1"
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
