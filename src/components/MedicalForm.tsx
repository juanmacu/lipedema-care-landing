
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, FileImage } from "lucide-react";

const MedicalForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    weight: "",
    height: "",
    doctor: "",
    comments: "",
    images: null as FileList | null,
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, images: e.target.files });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const requiredFields = [
      'fullName', 'email', 'phone', 'gender', 'country', 
      'weight', 'height', 'doctor', 'consent'
    ];
    
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
    
    // In a real app, we would send this data to a server
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Solicitud enviada",
        description: "Gracias por tu solicitud. Te contactaremos pronto.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        weight: "",
        height: "",
        doctor: "",
        comments: "",
        images: null,
        consent: false,
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="valoracion" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">Agenda tu valoración médica con el Dr. Zambrano</h2>
          
          <p className="text-zambrano-gray text-center mb-8">
            Queremos conocer tu caso y acompañarte con empatía y profesionalismo. Completa este formulario para
            que nuestro equipo revise tu situación.
          </p>
          
          <div className="text-sm text-zambrano-gray text-center mb-12">
            Tus datos serán tratados con absoluta confidencialidad médica.
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="bg-zambrano-light-blue text-zambrano-dark-blue p-2 rounded-full mr-3">
                <Mail size={20} />
              </div>
              <h3 className="text-xl text-zambrano-dark-blue">
                Formulario de valoración
              </h3>
            </div>
            
            <p className="text-sm text-zambrano-gray mb-8">
              Completa los campos para solicitar tu consulta médica.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
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
                
                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="images">Fotografías</Label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          className="text-zambrano-dark-blue hover:bg-zambrano-light-blue/20"
                        >
                          <FileImage className="mr-1 h-4 w-4" /> Ver instrucciones
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Instrucciones para fotografías</DialogTitle>
                          <DialogDescription>
                            Para una valoración médica efectiva, necesitamos fotografías específicas.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-6 py-4">
                          <div>
                            <h4 className="font-medium mb-2 text-zambrano-dark-blue">Se requieren 3 fotografías:</h4>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                              <li><span className="font-medium">Vista frontal:</span> De pie, brazos ligeramente separados del cuerpo.</li>
                              <li><span className="font-medium">Vista lateral:</span> Perfil completo, posición natural.</li>
                              <li><span className="font-medium">Vista posterior:</span> De espaldas, brazos a los lados.</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2 text-zambrano-dark-blue">Recomendaciones importantes:</h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-sm">
                              <li>Fondo neutro (preferiblemente pared blanca o clara)</li>
                              <li>Buena iluminación (luz natural si es posible)</li>
                              <li>Evitar selfies (pedir ayuda o usar temporizador)</li>
                              <li>Usar ropa que permita ver las áreas afectadas</li>
                              <li>Fotografía de cuerpo completo</li>
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <p className="text-sm text-zambrano-gray mb-3">
                    Por favor, envía tres fotografías: de frente, perfil y espalda. Fondo neutro, no selfies.
                  </p>
                  <Input 
                    id="images"
                    name="images"
                    type="file"
                    multiple
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">Sube tus fotografías (JPG, PNG, PDF)</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => handleChange(e as any)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm">
                    Autorizo el tratamiento de estos datos para fines médicos según la Ley de Protección de Datos
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 hover:scale-[1.02] transition-all duration-300"
                >
                  {isSubmitting ? "Enviando..." : "Enviar valoración"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalForm;
