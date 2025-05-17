
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type AssetType = 'logo' | 'banner' | 'collage' | 'foto-doctor' | 'foto-doctora';

const IntegradaMeetDoctors = () => {
  const [expandedZambrano, setExpandedZambrano] = useState(false);
  const [expandedGaona, setExpandedGaona] = useState(false);

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
              <img 
                src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/DSCF9142.JPG" 
                alt="Dr. Juan C. Zambrano" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <h3 className="text-2xl font-medium text-zambrano-dark-blue">Dr. Juan Carlos Zambrano</h3>
                <Badge className="bg-zambrano-light-blue text-zambrano-dark-blue">Cirugía Lipedema</Badge>
              </div>
              <p className="text-zambrano-light-blue font-medium mb-4">Cirujano Plástico</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-gray-50">Experto en Lipedema</Badge>
                <Badge variant="outline" className="bg-gray-50">Estética Facial</Badge>
                <Badge variant="outline" className="bg-gray-50">Empatía Clínica</Badge>
              </div>
              
              <div className={`relative ${!expandedZambrano ? 'max-h-28 overflow-hidden' : ''}`}>
                <p className="text-gray-700 mb-4">
                  Cirujano plástico especializado en el tratamiento del lipedema y estética facial. Mi enfoque no solo busca 
                  realzar la belleza, sino también mejorar el bienestar físico y emocional de las personas que enfrentan el 
                  lipedema.
                </p>
                
                {expandedZambrano && (
                  <>
                    <p className="text-gray-700 mb-4">
                      Con más de 15 años de experiencia y una formación avanzada en prestigiosas instituciones, me dedico 
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
                  </>
                )}
                
                {!expandedZambrano && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                )}
              </div>
              
              <button 
                onClick={() => setExpandedZambrano(!expandedZambrano)}
                className="mt-2 text-zambrano-dark-blue hover:text-zambrano-light-blue font-medium transition-colors"
              >
                {expandedZambrano ? 'Ver menos' : 'Ver más'}
              </button>
            </CardContent>
          </Card>

          {/* Dra. Jennifer Gaona */}
          <Card className="overflow-hidden border-none shadow-lg reveal-section">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/DSCF9200-2.jpg"
                alt="Dra. Jennifer Gaona"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <h3 className="text-2xl font-medium text-zambrano-dark-blue">Dra. Jennifer Gaona</h3>
                <Badge className="bg-zambrano-light-blue text-zambrano-dark-blue">Cirugía Corporal</Badge>
              </div>
              <p className="text-zambrano-light-blue font-medium mb-4">Cirujana Plástica</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-gray-50">Experta en Lipedema</Badge>
                <Badge variant="outline" className="bg-gray-50">Cirugía Corporal</Badge>
                <Badge variant="outline" className="bg-gray-50">Acompañamiento Terapéutico</Badge>
              </div>
              
              <div className={`relative ${!expandedGaona ? 'max-h-28 overflow-hidden' : ''}`}>
                <p className="text-gray-700 mb-4">
                  Cirujana plástica con formación especializada en cirugía corporal femenina y experiencia en el abordaje 
                  quirúrgico del lipedema. Mi enfoque va más allá de lo estético: entiendo el impacto físico, emocional 
                  y social que genera esta condición en la vida de las mujeres.
                </p>
                
                {expandedGaona && (
                  <>
                    <p className="text-gray-700 mb-4">
                      He dedicado mi práctica a ofrecer soluciones seguras y personalizadas a través de técnicas avanzadas 
                      como la liposucción especializada en lipedema. Trabajo contigo para aliviar síntomas como el dolor, 
                      la pesadez y la inflamación, mientras buscamos restaurar tu bienestar y devolverle armonía a tu cuerpo.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Desde el primer contacto, te acompaño con empatía y compromiso para que sientas confianza en cada paso del camino.
                    </p>
                  </>
                )}
                
                {!expandedGaona && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                )}
              </div>
              
              <button 
                onClick={() => setExpandedGaona(!expandedGaona)}
                className="mt-2 text-zambrano-dark-blue hover:text-zambrano-light-blue font-medium transition-colors"
              >
                {expandedGaona ? 'Ver menos' : 'Ver más'}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegradaMeetDoctors;
