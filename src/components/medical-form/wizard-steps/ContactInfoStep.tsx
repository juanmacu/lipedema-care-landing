
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
    <div className="space-y-4 md:space-y-8">
      <div className="text-center mb-4 md:mb-8">
        <h3 className="text-lg md:text-2xl lg:text-3xl font-medium text-zambrano-dark-blue leading-snug mb-2 md:mb-4 px-1">
          Queremos ayudarte de forma personalizada
        </h3>
        <p className="text-zambrano-gray text-sm md:text-lg leading-relaxed px-2">
          Comencemos por saber cómo podemos llamarte y contactarte.
        </p>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-sm md:text-lg font-medium text-zambrano-dark-blue mb-2 block">
            Nombre completo
          </Label>
          <Input 
            id="fullName"
            name="fullName"
            placeholder="Escribe tu nombre completo"
            value={formData.fullName}
            onChange={handleChange}
            className="h-10 md:h-14 text-sm md:text-lg border-2 border-gray-300 rounded-lg focus:border-zambrano-dark-blue"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm md:text-lg font-medium text-zambrano-dark-blue mb-2 block">
            Email
          </Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="ejemplo@email.com"
            value={formData.email}
            onChange={handleChange}
            className="h-10 md:h-14 text-sm md:text-lg border-2 border-gray-300 rounded-lg focus:border-zambrano-dark-blue"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="country" className="text-sm md:text-lg font-medium text-zambrano-dark-blue mb-2 block">
            País
          </Label>
          <Input 
            id="country"
            name="country"
            placeholder="País donde vives actualmente"
            value={formData.country}
            onChange={handleChange}
            className="h-10 md:h-14 text-sm md:text-lg border-2 border-gray-300 rounded-lg focus:border-zambrano-dark-blue"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm md:text-lg font-medium text-zambrano-dark-blue mb-2 block">
            Teléfono
          </Label>
          <Input 
            id="phone"
            name="phone"
            type="tel"
            placeholder="Tu número de contacto"
            value={formData.phone}
            onChange={handleChange}
            className="h-10 md:h-14 text-sm md:text-lg border-2 border-gray-300 rounded-lg focus:border-zambrano-dark-blue"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
