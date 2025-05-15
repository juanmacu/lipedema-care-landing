
import { Button } from "@/components/ui/button";
import FormHeader from "./medical-form/FormHeader";
import PersonalInfoFields from "./medical-form/PersonalInfoFields";
import MedicalDetailsFields from "./medical-form/MedicalDetailsFields";
import PhotoUploadField from "./medical-form/PhotoUploadField";
import ConsentField from "./medical-form/ConsentField";
import { useMedicalForm } from "./medical-form/useMedicalForm";
import { CalendarDays, User, FileText, Heart } from "lucide-react";

const MedicalForm = () => {
  const {
    formData,
    isSubmitting,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSubmit,
  } = useMedicalForm();

  return (
    <section id="valoracion" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FormHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Lado izquierdo: Proceso de consulta */}
            <div className="reveal-section">
              <h3 className="text-2xl font-light text-zambrano-dark-blue mb-6">Nuestro proceso</h3>
              <div className="space-y-8 md:pr-6">
                <div className="flex items-start">
                  <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                    <span className="font-medium text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                      <CalendarDays className="mr-2" size={22} />
                      Agenda tu valoración
                    </h3>
                    <p className="text-zambrano-gray">
                      Completa el formulario con tus datos y fotografías para que podamos conocer mejor tu caso.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                    <span className="font-medium text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                      <User className="mr-2" size={22} />
                      Evaluación personalizada
                    </h3>
                    <p className="text-zambrano-gray">
                      Nuestros médicos evaluarán tu caso con atención, comprensión y empatía para ofrecerte un diagnóstico preciso.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                    <span className="font-medium text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                      <FileText className="mr-2" size={22} />
                      Plan de tratamiento
                    </h3>
                    <p className="text-zambrano-gray">
                      Diseñamos un plan completamente adaptado a tus necesidades específicas, considerando tus circunstancias únicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-zambrano-light-blue text-zambrano-dark-blue w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-md">
                    <span className="font-medium text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-zambrano-dark-blue flex items-center">
                      <Heart className="mr-2" size={22} />
                      Acompañamiento continuo
                    </h3>
                    <p className="text-zambrano-gray">
                      Te acompañamos durante todo el proceso para asegurar tu bienestar y resolver todas tus dudas en cada etapa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lado derecho: Formulario */}
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 animate-fade-in shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <PersonalInfoFields 
                  formData={formData}
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                />
                
                <MedicalDetailsFields 
                  formData={formData}
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                />
                
                <PhotoUploadField 
                  formData={formData}
                  handleFileChange={handleFileChange}
                />
                
                <ConsentField 
                  formData={formData}
                  handleChange={handleChange as any}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 hover:scale-[1.02] transition-all duration-300 py-6 text-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar valoración"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalForm;
