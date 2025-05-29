
import { ExternalLink, Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";
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
                  <span>+57 323 234 8414</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-zambrano-light-blue mt-1" />
                <span className="text-gray-300">Calle 127 A N° 7-53 Edificio INO, Consultorio 7001 Bogotá - Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-zambrano-light-blue" />
                <div className="text-gray-300">
                  <a href="tel:+573232348414" className="hover:text-white">+57 323 234 8414</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+573002160774" className="hover:text-white">300 216 0774</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-zambrano-light-blue" />
                <a href="mailto:info@gaonazambrano.com" className="text-gray-300 hover:text-white">info@gaonazambrano.com</a>
              </li>
              <li>
                <p className="text-sm text-gray-300 mt-4">
                  Conoce más sobre el Lipedema:
                </p>
                <a href="https://www.lipedema.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-zambrano-light-blue hover:underline">
                  <span>Lipedema Foundation</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
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
