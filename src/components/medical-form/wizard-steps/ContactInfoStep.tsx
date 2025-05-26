
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
    <div className="space-y-4 md:space-y-6">
      <div className="text-center mb-4 md:mb-6 px-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-zambrano-dark-blue leading-tight mb-2 md:mb-3">
          Queremos ayudarte de forma personalizada
        </h3>
        <p className="text-zambrano-gray mt-2 text-sm md:text-base leading-relaxed">
          Comencemos por saber cómo podemos llamarte y contactarte.
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-sm md:text-base font-medium">Nombre completo</Label>
          <Input 
            id="fullName"
            name="fullName"
            placeholder="Escribe tu nombre completo"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-2 border-gray-300 h-12 text-base"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm md:text-base font-medium">Email</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@email.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 border-gray-300 h-12 text-base"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="country" className="text-sm md:text-base font-medium">País</Label>
          <Input 
            id="country"
            name="country"
            placeholder="País donde vives actualmente"
            value={formData.country}
            onChange={handleChange}
            className="mt-2 border-gray-300 h-12 text-base"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm md:text-base font-medium">Teléfono</Label>
          <Input 
            id="phone"
            name="phone"
            type="tel"
            placeholder="Tu número de contacto"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 border-gray-300 h-12 text-base"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
