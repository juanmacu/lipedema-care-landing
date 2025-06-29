import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zambrano-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <img 
                  src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/logos/02.png" 
                  alt="Gaona Zambrano Cirujanos Plásticos" 
                  className="h-12"
                />
              </div>
              <p className="text-gray-300 mb-6">
                Especialistas en diagnóstico y tratamiento de Lipedema
              </p>
              <div className="space-y-2">
                <a href="tel:3108040097" className="flex items-center text-gray-300 hover:text-white">
                  <Phone size={18} className="mr-2" />
                  <span>310 804 0097</span>
                </a>
                <a href="mailto:jc.zambrano.b@gmail.com" className="flex items-center text-gray-300 hover:text-white">
                  <Mail size={18} className="mr-2" />
                  <span>jc.zambrano.b@gmail.com</span>
                </a>
                <a href="https://instagram.com/drjuanzambrano" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white">
                  <Instagram size={18} className="mr-2" />
                  <span>@drjuanzambrano</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 font-medium">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-300 hover:text-white">Inicio</a>
                </li>
                <li>
                  <a href="#lipedema" className="text-gray-300 hover:text-white">¿Qué es el Lipedema?</a>
                </li>
                <li>
                  <a href="#diagnostico" className="text-gray-300 hover:text-white">Diagnóstico</a>
                </li>
                <li>
                  <a href="#valoracion" className="text-gray-300 hover:text-white">Agenda tu cita</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 font-medium">Información legal</h3>
              <p className="text-gray-300 text-sm">
                La información proporcionada en este sitio web tiene fines informativos y no sustituye la consulta médica profesional.
              </p>
              <p className="text-gray-300 text-sm mt-4">
                © {new Date().getFullYear()} Dr. Juan C. Zambrano. Todos los derechos reservados.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
            <p>
              Tus datos personales son tratados con absoluta confidencialidad según la Ley de Protección de Datos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
