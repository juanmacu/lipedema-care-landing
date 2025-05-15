
import { Button } from "@/components/ui/button";
import FormHeader from "./medical-form/FormHeader";
import PersonalInfoFields from "./medical-form/PersonalInfoFields";
import MedicalDetailsFields from "./medical-form/MedicalDetailsFields";
import PhotoUploadField from "./medical-form/PhotoUploadField";
import ConsentField from "./medical-form/ConsentField";
import { useMedicalForm } from "./medical-form/useMedicalForm";

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
        <div className="max-w-3xl mx-auto">
          <FormHeader />
          
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 animate-fade-in">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
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
