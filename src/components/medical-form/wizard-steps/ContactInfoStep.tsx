
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MedicalFormData } from "../FormTypes";

interface ContactInfoStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const ContactInfoStep = ({ formData, handleChange }: ContactInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-zambrano-dark-blue">
          Queremos ayudarte de forma personalizada
        </h3>
        <p className="text-zambrano-gray mt-2">
          Comencemos por saber cómo podemos llamarte y contactarte.
        </p>
      </div>
      
      <div>
        <Label htmlFor="fullName">Nombre completo</Label>
        <Input 
          id="fullName"
          name="fullName"
          placeholder="Escribe tu nombre completo"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 border-gray-300"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 border-gray-300"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="country">País</Label>
        <Input 
          id="country"
          name="country"
          placeholder="País donde vives actualmente"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 border-gray-300"
          required
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
          className="mt-1 border-gray-300"
          required
        />
      </div>
    </div>
  );
};

export default ContactInfoStep;
