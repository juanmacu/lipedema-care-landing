
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

type AssetType = 'logo' | 'banner' | 'collage' | 'foto-doctor' | 'foto-doctora';

const IntegradaHero = () => {
  // Custom hook moved inside the component
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

  const { data: bannerData, isLoading: bannerLoading } = useBrandingAssets('banner');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-br from-zambrano-light-blue/30 via-white to-zambrano-light-blue/50 flex items-center pt-16 md:pt-20 overflow-hidden"
    >
      {/* Elementos decorativos inspirados en la portada del libro */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Siluetas femeninas estilizadas */}
        <div className="absolute top-10 left-8 opacity-10">
          <svg width="120" height="200" viewBox="0 0 120 200" className="text-zambrano-dark-blue">
            <path d="M60 20 C50 25, 45 35, 50 50 C52 70, 48 90, 45 110 C42 130, 40 150, 45 170 C50 185, 55 190, 60 195 C65 190, 70 185, 75 170 C80 150, 78 130, 75 110 C72 90, 68 70, 70 50 C75 35, 70 25, 60 20 Z" fill="currentColor"/>
            <circle cx="60" cy="15" r="8" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-12 opacity-4 transform rotate-12">
          <svg width="100" height="180" viewBox="0 0 100 180" className="text-zambrano-dark-blue">
            <path d="M50 15 C42 20, 38 30, 42 45 C44 65, 40 85, 37 105 C34 125, 32 145, 37 165 C42 175, 47 180, 50 180 C53 180, 58 175, 63 165 C68 145, 66 125, 63 105 C60 85, 56 65, 58 45 C62 30, 58 20, 50 15 Z" fill="currentColor"/>
            <circle cx="50" cy="10" r="6" fill="currentColor"/>
          </svg>
        </div>

        {/* Elementos florales y decorativos */}
        <div className="absolute top-1/4 right-1/4 opacity-15">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-zambrano-light-blue">
            <path d="M30 10 C35 15, 40 20, 35 25 C30 30, 25 25, 20 20 C15 15, 20 10, 30 10 Z" fill="currentColor"/>
            <path d="M30 30 C35 35, 40 40, 35 45 C30 50, 25 45, 20 40 C15 35, 20 30, 30 30 Z" fill="currentColor"/>
            <circle cx="30" cy="25" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 opacity-12">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-zambrano-light-blue">
            <path d="M40 10 L45 25 L60 25 L48 35 L53 50 L40 42 L27 50 L32 35 L20 25 L35 25 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Hojas y elementos naturales */}
        <div className="absolute top-20 right-20 opacity-10 transform -rotate-45">
          <svg width="40" height="60" viewBox="0 0 40 60" className="text-zambrano-dark-blue">
            <path d="M20 5 C30 10, 35 20, 30 35 C25 50, 15 55, 10 50 C5 40, 10 25, 15 15 C18 10, 20 5, 20 5 Z" fill="currentColor"/>
            <path d="M20 5 L20 55" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-20 opacity-8 transform rotate-30">
          <svg width="50" height="30" viewBox="0 0 50 30" className="text-zambrano-light-blue">
            <path d="M5 15 C10 5, 20 5, 25 15 C30 5, 40 5, 45 15 C40 25, 30 25, 25 15 C20 25, 10 25, 5 15 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Elementos geométricos suaves */}
        <div className="absolute top-1/2 left-10 opacity-6">
          <div className="w-24 h-24 rounded-full border-2 border-zambrano-light-blue"></div>
        </div>
        
        <div className="absolute top-1/3 right-1/3 opacity-8">
          <div className="w-16 h-16 rounded-full bg-zambrano-light-blue/20"></div>
        </div>

        {/* Líneas orgánicas */}
        <div className="absolute top-32 left-1/3 opacity-10">
          <svg width="200" height="100" viewBox="0 0 200 100" className="text-zambrano-dark-blue">
            <path d="M10 50 Q50 20, 90 50 T170 50" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M20 60 Q60 30, 100 60 T180 60" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Círculos difuminados de fondo mejorados */}
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-zambrano-light-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-zambrano-dark-blue/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zambrano-light-blue/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 leading-tight text-zambrano-dark-blue">
                Lipedema: una enfermedad silenciosa, pero no estás sola
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-quicksand animate-fade-in opacity-0 text-zambrano-gray tracking-wide" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Sabemos lo difícil que es obtener un diagnóstico claro de lipedema. Por eso, nuestro equipo liderado por la Dra. Jennifer Gaona y el Dr. Juan C. Zambrano te acompaña con un enfoque humano y especializado.
              </p>
              <Button 
                onClick={() => scrollToSection('valoracion')}
                size="lg"
                className="bg-zambrano-light-blue hover:bg-zambrano-light-blue/90 text-zambrano-dark-blue px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in opacity-0 w-full md:w-auto justify-center"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <Heart className="mr-1" />
                <span className="relative">Agenda tu valoración médica</span>
              </Button>
              
              <p className="mt-4 md:mt-6 text-zambrano-gray animate-fade-in opacity-0 text-center md:text-left" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                Médicos especialistas en el diagnóstico y tratamiento del Lipedema
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in opacity-0 w-full max-w-sm md:max-w-none" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              {/* Elementos decorativos en las esquinas mejorados */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/90 rounded-tl-lg z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/90 rounded-tr-lg z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/90 rounded-bl-lg z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/90 rounded-br-lg z-10"></div>
              
              {/* Aura suave alrededor de la imagen */}
              <div className="absolute -inset-2 bg-gradient-to-r from-zambrano-light-blue/20 to-zambrano-dark-blue/20 rounded-3xl blur-lg"></div>
              
              {/* Before and After Lipedema images */}
              <div className="grid grid-cols-2 gap-0.5 relative">
                <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-white relative">
                  <img 
                    src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/lipedema_64cbb4cc_1200x1200.jpg" 
                    alt="Lipedema antes del tratamiento" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-zambrano-dark-blue/80 text-white px-2 py-1 rounded text-xs font-medium">
                    Antes
                  </div>
                </div>
                <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-white relative">
                  <img 
                    src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/lipedema_retouch_suave_intenso.jpg" 
                    alt="Lipedema después del tratamiento" 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-zambrano-light-blue/90 text-zambrano-dark-blue px-2 py-1 rounded text-xs font-bold">
                    Después
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-center text-white p-3 md:p-4 bg-gradient-to-t from-zambrano-dark-blue/90 to-transparent">
                <p className="font-bold text-sm md:text-base">Resultados reales de nuestros tratamientos</p>
                <p className="text-xs md:text-sm">Transformación integral del lipedema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegradaHero;
