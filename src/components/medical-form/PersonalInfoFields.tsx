
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MedicalFormData } from "./FormTypes";

interface PersonalInfoFieldsProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const PersonalInfoFields = ({ formData, handleChange, handleSelectChange }: PersonalInfoFieldsProps) => {
  return (
    <>
      <div>
        <Label htmlFor="fullName">Nombre completo</Label>
        <Input 
          id="fullName"
          name="fullName"
          placeholder="Escribe tu nombre completo"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@email.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input 
            id="phone"
            name="phone"
            type="tel"
            placeholder="Tu número de contacto"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="country">País</Label>
          <Input 
            id="country"
            name="country"
            placeholder="País de residencia"
            value={formData.country}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfoFields;
