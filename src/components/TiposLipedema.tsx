
import { Button } from "@/components/ui/button";

const TiposLipedema = () => {
  const scrollToForm = () => {
    const section = document.getElementById('valoracion');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-zambrano-light-blue/20 to-rose-50/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-zambrano-dark-blue mb-6">
            Tipos de Lipedema
          </h2>
          <p className="text-lg md:text-xl text-zambrano-gray/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Existen diferentes manifestaciones del lipedema. Conoce las más comunes para identificar si puedes estar viviendo con alguno de estos síntomas.
          </p>
          
          <div className="mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto bg-white p-4 md:p-8">
              <img 
                src="/lovable-uploads/b321d883-c705-451a-85d9-4c3d6955fa1f.png" 
                alt="Infografía médica: Tipos de Lipedema - Manifestaciones progresivas de la enfermedad" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white px-8 py-4 text-lg rounded-md flex items-center gap-2 mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Agenda tu valoración médica
            </Button>
            <p className="mt-4 text-zambrano-gray/80 text-sm">
              Nuestros especialistas pueden ayudarte a identificar y tratar el lipedema
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiposLipedema;
