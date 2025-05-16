
import { ExternalLink, Heart, Mail, MapPin, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Custom hook to fetch logo from Supabase
const useLogo = () => {
  return useQuery({
    queryKey: ['branding-logo-footer'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('branding_assets')
        .select('*')
        .eq('type', 'logo')
        .single();
      
      if (error) throw error;
      return data;
    }
  });
};

const IntegradaFooter = () => {
  const { data: logoData, isLoading } = useLogo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zambrano-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              {isLoading ? (
                <div className="flex items-center">
                  <div className="mr-2">
                    <svg width="40" height="40" viewBox="0 0 146 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M73.5349 0C111.242 0 142.07 27.3537 146 61.3581C140.465 26.749 110.465 0 73.5349 0Z" fill="#96C8DC"/>
                      <path d="M73.5349 122C35.8279 122 5 94.6463 0 60.6419C6.60465 95.2509 36.6047 122 73.5349 122Z" fill="#96C8DC"/>
                      <path d="M0 60.6419C5 94.6463 35.8279 122 73.5349 122C110.465 122 140.465 95.251 146 60.642C146 60.642 73.5349 122 0 60.6419Z" fill="#FFFFFF"/>
                      <path d="M146 61.3581C142.07 27.3537 111.242 0 73.5349 0C36.6047 0 6.60465 26.749 0 61.358C0 61.358 73.5349 0 146 61.3581Z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-light">GAONA ZAMBRANO</div>
                    <div className="text-xs uppercase">CIRUJANOS PLÁSTICOS</div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <img 
                    src={logoData?.url || "/placeholder.svg"} 
                    alt={logoData?.alt_text || "GAONA ZAMBRANO CIRUJANOS PLÁSTICOS"} 
                    className="h-10 w-auto mr-2"
                  />
                  <div>
                    <div className="text-lg font-light">GAONA ZAMBRANO</div>
                    <div className="text-xs uppercase">CIRUJANOS PLÁSTICOS</div>
                  </div>
                </div>
              )}
            </div>
            <p className="mb-4 text-gray-300">
              Especialistas en el diagnóstico y tratamiento integral del Lipedema, enfocados en tu bienestar físico y emocional.
            </p>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-zambrano-light-blue" />
              <span className="text-sm text-gray-300">Cuidando de ti con empatía y profesionalismo</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a 
                  href="#lipedema" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Qué es el Lipedema</span>
                </a>
              </li>
              <li>
                <a 
                  href="#doctors" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Quiénes te acompañan</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonios" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Testimonios</span>
                </a>
              </li>
              <li>
                <a 
                  href="#valoracion" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Agenda tu valoración</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-zambrano-light-blue mt-1" />
                <span className="text-gray-300">Cll. 134 #7-83 Torre 3 Consultorio 633, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-zambrano-light-blue" />
                <a href="tel:+576013482668" className="text-gray-300 hover:text-white">+57 (601) 348-2668</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-zambrano-light-blue" />
                <a href="mailto:info@lipedemacare.com" className="text-gray-300 hover:text-white">info@lipedemacare.com</a>
              </li>
            </ul>
          </div>

          {/* Social media links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-2">Conoce más sobre el Lipedema:</p>
              <a href="https://www.lipedema.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zambrano-light-blue hover:underline">
                <span>Lipedema Foundation</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Gaona Zambrano Cirujanos Plásticos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default IntegradaFooter;
