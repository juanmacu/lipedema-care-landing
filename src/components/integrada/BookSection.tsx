import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookSection = () => {
  const handleBookClick = () => {
    // Aquí pondremos el link de Amazon cuando lo tengas
    window.open('https://amazon.com', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-zambrano-light-blue/5 to-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-zambrano-dark-blue flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <h2 className="section-title mb-0">Manual Especializado</h2>
            </div>
            <p className="text-zambrano-gray text-lg max-w-2xl mx-auto">
              Guía completa del Dr. Juan C. Zambrano sobre el diagnóstico y tratamiento integral del Lipedema
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen del libro */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-zambrano-light-blue/20 to-zambrano-dark-blue/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/Libro%20Lipedema.png"
                    alt="Libro sobre Lipedema del Dr. Juan C. Zambrano"
                    className="w-full max-w-sm mx-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Contenido del texto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-zambrano-dark-blue mb-4">
                  "Manual de Lipedema"
                </h3>
                <p className="text-zambrano-gray text-lg leading-relaxed mb-6">
                  Una guía exhaustiva que aborda desde los fundamentos científicos hasta las técnicas más avanzadas 
                  en el tratamiento del Lipedema. Escrito por el Dr. Juan C. Zambrano, reconocido especialista 
                  en cirugía plástica y tratamiento de esta condición.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-zambrano-gray">
                    <strong>Diagnóstico diferencial</strong> y criterios clínicos actualizados
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-zambrano-gray">
                    <strong>Opciones de tratamiento</strong> conservador y quirúrgico
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-zambrano-gray">
                    <strong>Casos clínicos</strong> y experiencias reales de pacientes
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleBookClick}
                  className="bg-gradient-to-r from-zambrano-dark-blue to-zambrano-dark-blue/90 hover:from-zambrano-dark-blue/90 hover:to-zambrano-dark-blue text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="flex items-center gap-3">
                    Conseguir en Amazon
                    <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
                <p className="text-sm text-zambrano-gray mt-3">
                  Disponible en formato físico y digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;