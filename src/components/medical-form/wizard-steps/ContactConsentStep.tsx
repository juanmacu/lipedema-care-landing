
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone } from "lucide-react";
import { MedicalFormData } from "../FormTypes";

interface ContactConsentStepProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
}

const ContactConsentStep = ({ formData, handleChange, isSubmitting }: ContactConsentStepProps) => {
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
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold text-zambrano-dark-blue text-center mb-6">
        Un último detalle antes de enviar
      </h3>
      
      <div>
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail size={18} className="text-zambrano-dark-blue" />
          Email
        </Label>
        <Input 
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@email.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <p className="text-xs text-zambrano-gray mt-1">
          Enviaremos los detalles de tu valoración a este correo.
        </p>
      </div>
      
      <div>
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone size={18} className="text-zambrano-dark-blue" />
          Teléfono
        </Label>
        <Input 
          id="phone"
          name="phone"
          type="tel"
          placeholder="Tu número de contacto"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <p className="text-xs text-zambrano-gray mt-1">
          Solo lo usaremos para contactarte acerca de tu valoración.
        </p>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
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
      
      <div className="text-center mt-8">
        <p className="text-sm text-zambrano-gray">
          Al enviar el formulario, nuestro equipo médico revisará tu caso y te contactará en las próximas 24-48 horas.
        </p>
      </div>
    </div>
  );
};

export default ContactConsentStep;
