
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
      className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-br from-white via-white to-zambrano-light-blue/20 flex items-center pt-20"
    >
      {/* Elementos decorativos minimalistas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Líneas decorativas */}
        <div className="absolute top-20 left-12 w-32 h-1 bg-zambrano-light-blue/10 rounded-full"></div>
        <div className="absolute top-32 left-12 w-16 h-1 bg-zambrano-light-blue/10 rounded-full"></div>
        
        <div className="absolute bottom-20 right-12 w-32 h-1 bg-zambrano-light-blue/10 rounded-full"></div>
        <div className="absolute bottom-32 right-12 w-16 h-1 bg-zambrano-light-blue/10 rounded-full"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-40 right-40 w-6 h-6 border border-zambrano-light-blue/10 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 border border-zambrano-light-blue/20 rounded-full"></div>
        
        {/* Esquinas decorativas */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-zambrano-light-blue/10 rounded-tl-3xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-zambrano-light-blue/10 rounded-br-3xl"></div>
        
        {/* Círculos difuminados de fondo */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-zambrano-light-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-zambrano-dark-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-zambrano-dark-blue">
                Lipedema: una enfermedad silenciosa, pero no estás sola
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-quicksand animate-fade-in opacity-0 text-zambrano-gray tracking-wide" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Sabemos lo difícil que es obtener un diagnóstico claro de lipedema. Por eso, nuestro equipo liderado por la Dra. Jennifer Gaona y el Dr. Juan C. Zambrano te acompaña con un enfoque humano y especializado.
              </p>
              <Button 
                onClick={() => scrollToSection('valoracion')}
                size="lg"
                className="bg-zambrano-light-blue hover:bg-zambrano-light-blue/90 text-zambrano-dark-blue px-8 py-6 text-lg rounded-md flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in opacity-0"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <Heart className="mr-1" />
                <span className="relative">Agenda tu valoración médica</span>
                <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
              </Button>
              
              <p className="mt-6 text-zambrano-gray animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                Médicos especialistas en el diagnóstico y tratamiento del Lipedema
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              {/* Elementos decorativos en las esquinas */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/80 rounded-tl-lg z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/80 rounded-tr-lg z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/80 rounded-bl-lg z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/80 rounded-br-lg z-10"></div>
              
              {/* Hero image - collage of both doctors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
                <div className="aspect-square overflow-hidden bg-white">
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
                <div className="aspect-square overflow-hidden bg-white">
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
              <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4 bg-gradient-to-t from-zambrano-dark-blue/90 to-transparent">
                <p className="font-bold">Dra. Jennifer Gaona & Dr. Juan C. Zambrano</p>
                <p className="text-sm">Cirujanos plásticos especializados en Lipedema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('lipedema')} 
          className="text-zambrano-dark-blue hover:text-zambrano-light-blue transition-colors p-2"
          aria-label="Scroll to lipedema section"
        >
          <ArrowDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default IntegradaHero;
