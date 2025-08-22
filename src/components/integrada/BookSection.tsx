import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BookSection = () => {
  const handleBookClick = () => {
    window.open('https://a.co/d/hIRfOjn', '_blank');
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagen del libro */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-zambrano-light-blue/20 to-zambrano-dark-blue/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/Libro%20Lipedema.png"
                    alt="Manual de Lipedema del Dr. Juan C. Zambrano"
                    className="w-full max-w-48 mx-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Contenido del texto */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-zambrano-dark-blue" size={20} />
                <h3 className="text-xl md:text-2xl font-bold text-zambrano-dark-blue">
                  Manual de Lipedema
                </h3>
              </div>
              
              <p className="text-zambrano-gray leading-relaxed">
                Escrito por dos especialistas con amplia experiencia en el tratamiento del lipedema, este manual combina conocimiento científico con un profundo compromiso humano.
              </p>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-zambrano-gray">
                    <strong>Diagnóstico diferencial</strong> y criterios actualizados
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-zambrano-gray">
                    <strong>Tratamientos</strong> conservador y quirúrgico
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-zambrano-light-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-zambrano-gray">
                    <strong>Casos clínicos</strong> reales documentados
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <Button 
                  onClick={handleBookClick}
                  className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="flex items-center gap-2">
                    Ver en Amazon
                    <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;