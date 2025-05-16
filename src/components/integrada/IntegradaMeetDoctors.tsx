
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type AssetType = 'logo' | 'banner' | 'collage' | 'foto-doctor' | 'foto-doctora';

// Custom hook to fetch doctor images
const useDoctorImage = (type: AssetType) => {
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
              <h3 className="text-2xl font-medium text-zambrano-dark-blue mb-2">Dr. Juan Carlos Zambrano</h3>
              <p className="text-zambrano-light-blue font-medium mb-4">Cirujano Plástico</p>
              <p className="text-gray-700 mb-4">
                Cirujano plástico especializado en el tratamiento del lipedema y estética facial. Mi enfoque no solo busca 
                realzar la belleza, sino también mejorar el bienestar físico y emocional de las personas que enfrentan el 
                lipedema. Con más de 15 años de experiencia y una formación avanzada en prestigiosas instituciones, me dedico 
                a ofrecer soluciones quirúrgicas seguras y personalizadas.
              </p>
              <p className="text-gray-700 mb-4">
                Además de mi experiencia en el tratamiento del lipedema, cuento con una sólida formación en estética facial, 
                lo que me permite ofrecer un enfoque integral que combina el bienestar corporal con la belleza natural. Cada 
                tratamiento que realizo está diseñado para cuidar y restaurar la confianza, siempre respetando las proporciones 
                únicas y la individualidad de cada paciente.
              </p>
              <p className="text-gray-700 font-medium">
                Juntos trabajaremos para mejorar tu salud y tu calidad de vida.
              </p>
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
                Cirujana plástica con formación especializada en cirugía corporal femenina y experiencia en el abordaje 
                quirúrgico del lipedema. Mi enfoque va más allá de lo estético: entiendo el impacto físico, emocional 
                y social que genera esta condición en la vida de las mujeres.
              </p>
              <p className="text-gray-700 mb-4">
                He dedicado mi práctica a ofrecer soluciones seguras y personalizadas a través de técnicas avanzadas 
                como la liposucción especializada en lipedema. Trabajo contigo para aliviar síntomas como el dolor, 
                la pesadez y la inflamación, mientras buscamos restaurar tu bienestar y devolverle armonía a tu cuerpo.
              </p>
              <p className="text-gray-700 font-medium">
                Desde el primer contacto, te acompaño con empatía y compromiso para que sientas confianza en cada paso del camino.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegradaMeetDoctors;
