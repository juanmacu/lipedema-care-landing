
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  doctor: string;
  date: Date | undefined;
  comments: string;
}

const ConsultationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: undefined,
    comments: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, date }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validar campos
    const requiredFields = ['fullName', 'email', 'phone', 'doctor'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulamos envío (en un caso real, enviaríamos a una API)
    setTimeout(() => {
      toast({
        title: "Solicitud enviada",
        description: "Gracias por tu solicitud. Te contactaremos pronto.",
      });
      
      // Resetear formulario
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        doctor: "",
        date: undefined,
        comments: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="bg-[#F1F0FB] rounded-xl p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <div className="bg-white text-zambrano-dark-blue p-2 rounded-full mr-3">
          <CalendarIcon size={20} />
        </div>
        <h3 className="text-xl text-zambrano-dark-blue">
          Solicita tu cita
        </h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="doctor">Especialista</Label>
            <Select 
              name="doctor" 
              onValueChange={(value) => handleSelectChange("doctor", value)}
              value={formData.doctor}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Selecciona especialista" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr_zambrano">Dr. Juan C. Zambrano</SelectItem>
                <SelectItem value="dra_gaona">Dra. Jennifer Gaona</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="date">Fecha tentativa</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full mt-1 justify-start text-left font-normal",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? (
                    format(formData.date, "PPP", { locale: es })
                  ) : (
                    <span>Selecciona una fecha</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={handleDateChange}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div>
          <Label htmlFor="comments">Comentario adicional</Label>
          <Textarea 
            id="comments"
            name="comments"
            placeholder="¿Quieres compartir algún detalle importante sobre tu caso?"
            value={formData.comments}
            onChange={handleChange}
            className="mt-1"
            rows={3}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 hover:scale-[1.02] transition-all duration-300"
        >
          {isSubmitting ? "Enviando..." : "Solicitar cita"}
        </Button>
      </form>
    </div>
  );
};

export default ConsultationForm;
