
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Custom hook to fetch doctor images
const useDoctorImage = (type: string) => {
  return useQuery({
    queryKey: ['doctor-image', type],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('branding_assets')
        .select('*')
        .eq('type', type)
        .single();
      
      if (error) throw error;
      return data;
    }
  });
};

const IntegradaMeetDoctors = () => {
  const { data: doctorData, isLoading: doctorLoading } = useDoctorImage('foto-doctor');
  const { data: doctoraData, isLoading: doctoraLoading } = useDoctorImage('foto-doctora');

  return (
    <section id="doctors" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-section">
          <h2 className="text-3xl md:text-4xl font-light text-zambrano-dark-blue mb-4">
            Quiénes te acompañan
          </h2>
          <p className="text-xl text-zambrano-gray max-w-3xl mx-auto">
            Un equipo médico especializado en el diagnóstico y tratamiento del Lipedema, 
            comprometido con tu bienestar físico y emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Dr. Juan C. Zambrano */}
          <Card className="overflow-hidden border-none shadow-lg reveal-section">
            <div className="aspect-[4/3] overflow-hidden">
              {doctorLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              ) : (
                <img 
                  src={doctorData?.url || "/placeholder.svg"} 
                  alt={doctorData?.alt_text || "Dr. Juan C. Zambrano"} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-medium text-zambrano-dark-blue mb-2">Dr. Juan C. Zambrano</h3>
              <p className="text-zambrano-light-blue font-medium mb-4">Cirujano Plástico</p>
              <p className="text-gray-700 mb-4">
                Especialista en lipedema con más de 15 años de experiencia clínica, formado en prestigiosas universidades
                y dedicado al diagnóstico y tratamiento quirúrgico de esta enfermedad. El Dr. Zambrano ha desarrollado técnicas 
                especiales para el tratamiento de lipedema en todas sus etapas.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Lipedema
                </span>
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Liposucción WAL
                </span>
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Recuperación Asistida
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Dra. Jennifer Gaona */}
          <Card className="overflow-hidden border-none shadow-lg reveal-section">
            <div className="aspect-[4/3] overflow-hidden">
              {doctoraLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              ) : (
                <img 
                  src={doctoraData?.url || "/placeholder.svg"}
                  alt={doctoraData?.alt_text || "Dra. Jennifer Gaona"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-medium text-zambrano-dark-blue mb-2">Dra. Jennifer Gaona</h3>
              <p className="text-zambrano-light-blue font-medium mb-4">Cirujana Plástica</p>
              <p className="text-gray-700 mb-4">
                Especializada en el manejo integral y quirúrgico del lipedema con enfoque en el bienestar 
                emocional de las pacientes. La Dra. Gaona cuenta con estudios avanzados en técnicas modernas 
                para el tratamiento de esta condición, brindando atención personalizada para cada caso.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Acompañamiento Integral
                </span>
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Lipedema
                </span>
                <span className="bg-zambrano-light-blue/20 text-zambrano-dark-blue px-3 py-1 rounded-full text-sm">
                  Evaluación Personalizada
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center reveal-section">
          <h3 className="text-2xl text-zambrano-dark-blue mb-6">Nuestro compromiso</h3>
          <p className="text-lg text-zambrano-gray max-w-3xl mx-auto">
            Te guiamos en un recorrido personalizado para el diagnóstico y tratamiento de tu lipedema, con un 
            enfoque que integra salud física y bienestar emocional. Entendemos que cada paciente es única 
            y merece un tratamiento adecuado a sus necesidades específicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegradaMeetDoctors;
