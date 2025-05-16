
import { ArrowDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmotionalHero = () => {
  const scrollToConsultation = () => {
    const section = document.getElementById('consulta');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] md:min-h-[85vh] bg-gradient-to-r from-[#E5DEFF] to-[#F1F0FB] flex items-center"
    >
      {/* Silueta médica sutil en grafito como fondo */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/752b0d58-8e44-46da-8425-13111f67d9f6.png')] bg-center bg-no-repeat bg-contain opacity-[0.06] mix-blend-multiply"></div>
      
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-center bg-cover opacity-15"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-zambrano-dark-blue">
                Te entendemos. El lipedema no define quién eres.
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-quicksand animate-fade-in opacity-0 text-zambrano-gray tracking-wide" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                Juntas podemos encontrar el camino hacia tu bienestar.
              </p>
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in opacity-0"
                style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
              >
                <Heart className="mr-1" />
                <span className="relative">Agendar valoración</span>
                <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
              </Button>
              
              <p className="mt-6 text-zambrano-gray animate-fade-in opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
                Miles de mujeres viven con Lipedema sin saberlo. No estás sola.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zambrano-dark-blue/30"></div>
              <img 
                src="/placeholder.svg" 
                alt="Doctor consultando paciente con lipedema" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#lipedema" className="text-zambrano-dark-blue">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default EmotionalHero;
