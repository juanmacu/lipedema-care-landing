
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type AssetType = 'logo' | 'banner' | 'collage' | 'foto-doctor' | 'foto-doctora';

// Custom hook to fetch branding assets
const useBrandingAssets = (type: AssetType) => {
  return useQuery({
    queryKey: ['branding-assets', type],
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

const IntegradaHero = () => {
  const { data: bannerData, isLoading: bannerLoading } = useBrandingAssets('banner');
  const { data: doctorData, isLoading: doctorLoading } = useBrandingAssets('foto-doctor');
  const { data: doctoraData, isLoading: doctoraLoading } = useBrandingAssets('foto-doctora');
  const { data: collageData, isLoading: collageLoading } = useBrandingAssets('collage');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-r from-white to-[#FFF5F2] flex items-center pt-20"
    >
      {/* Background image/collage with overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-15">
        {!collageLoading && collageData && (
          <img 
            src={collageData.url} 
            alt={collageData.alt_text} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-zambrano-dark-blue">
                Comprensión, experiencia y acompañamiento.
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-quicksand animate-fade-in opacity-0 text-zambrano-gray tracking-wide" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Estamos aquí para ayudarte a entender y tratar el Lipedema.
              </p>
              <Button 
                onClick={() => scrollToSection('valoracion')}
                size="lg"
                className="bg-zambrano-light-blue hover:bg-zambrano-light-blue/90 text-zambrano-dark-blue px-8 py-6 text-lg rounded-md flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in opacity-0"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <Heart className="mr-1" />
                <span className="relative">Agendar valoración</span>
                <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
              </Button>
              
              <p className="mt-6 text-zambrano-gray animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                Médicos especialistas en el diagnóstico y tratamiento del Lipedema
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              {/* Hero image - collage of both doctors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-zambrano-dark-blue/10">
                <div className="aspect-square overflow-hidden">
                  {doctorLoading ? (
                    <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                  ) : (
                    <img 
                      src={doctorData?.url || "/placeholder.svg"} 
                      alt={doctorData?.alt_text || "Dr. Juan C. Zambrano"} 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  )}
                </div>
                <div className="aspect-square overflow-hidden">
                  {doctoraLoading ? (
                    <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                  ) : (
                    <img 
                      src={doctoraData?.url || "/placeholder.svg"} 
                      alt={doctoraData?.alt_text || "Dra. Jennifer Gaona"} 
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-zambrano-dark-blue/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
                <p className="font-bold">Dra. Jennifer Gaona & Dr. Juan C. Zambrano</p>
                <p className="text-sm">Cirujanos plásticos especializados en Lipedema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('lipedema')} className="text-zambrano-dark-blue">
          <ArrowDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default IntegradaHero;
