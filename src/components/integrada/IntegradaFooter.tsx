
import { ExternalLink, Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Custom WhatsApp SVG Icon component
const WhatsAppIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 13.9 2.5 15.6 3.35 17.05L2.05 21.9L7 20.65C8.35 21.4 10.1 21.9 12 21.9C17.52 21.9 22 17.42 22 11.9C22 6.38 17.52 2 12 2ZM17 15.5C16.8 16.1 15.9 16.6 15.2 16.75C14.7 16.85 14 16.95 11.8 15.95C9.1 14.75 7.3 11.95 7.15 11.75C7 11.55 6 10.2 6 8.8C6 7.4 6.7 6.7 7 6.35C7.25 6.05 7.6 5.95 7.8 5.95C8 5.95 8.2 5.95 8.4 5.95C8.6 5.95 8.9 5.85 9.2 6.55C9.5 7.25 10.2 8.65 10.3 8.75C10.4 8.85 10.5 9.05 10.35 9.25C10.2 9.45 10.15 9.6 10.05 9.7C9.95 9.8 9.75 10.05 9.65 10.15C9.55 10.25 9.45 10.4 9.6 10.7C9.75 11 10.4 12.15 11.45 13.05C12.75 14.15 13.8 14.5 14.15 14.6C14.5 14.7 14.7 14.65 14.8 14.5C14.9 14.35 15.55 13.6 15.7 13.25C15.85 12.9 16 12.95 16.2 13.05C16.4 13.15 17.8 13.85 18 13.95C18.2 14.05 18.35 14.1 18.4 14.2C18.4 14.4 18.2 14.9 17 15.5Z" 
      fill="currentColor"
    />
  </svg>
);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1">
            <div className="mb-6">
              <img 
                src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/logos/02.png" 
                alt="Gaona Zambrano Cirujanos Plásticos" 
                className="h-24 w-auto"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <h3 className="text-lg font-medium mb-4">Dres. Gaona Zambrano – Cirujanos Plásticos</h3>
            <p className="mb-4 text-gray-300">
              Especialistas en el diagnóstico y tratamiento integral del Lipedema, enfocados en tu bienestar físico y emocional.
            </p>
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-zambrano-light-blue" />
              <span className="text-sm text-gray-300">Cuidando de ti con empatía y profesionalismo</span>
            </div>
          </div>

          {/* Dr. Juan C. Zambrano social links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Dr. Juan C. Zambrano</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.instagram.com/drjuanzambrano" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  <span>@drjuanzambrano</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:jc.zambrano.b@gmail.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>jc.zambrano.b@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+573108040097" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+57 310 804 0097</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Dra. Jennifer Gaona social links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Dra. Jennifer Gaona</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.instagram.com/jennifergaona" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  <span>@jennifergaona</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:jennifergaonaplastic@gmail.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>jennifergaonaplastic@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+573232348414" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+57 3232348414</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact information and links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
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
                <WhatsAppIcon />
                <a 
                  href="https://wa.link/r10i52" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-zambrano-light-blue" />
                <a href="mailto:info@lipedemacare.com" className="text-gray-300 hover:text-white">info@lipedemacare.com</a>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300 mb-2">Enlaces importantes:</p>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="https://www.lipedema.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-zambrano-light-blue hover:underline">
                  <span>Lipedema Foundation</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Dres. Gaona Zambrano – Cirujanos Plásticos. Todos los derechos reservados.</p>
          <p className="mt-2">
            Tus datos personales son tratados con absoluta confidencialidad según la Ley de Protección de Datos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default IntegradaFooter;
