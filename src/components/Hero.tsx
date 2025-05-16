
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    const section = document.getElementById('valoracion');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[85vh] md:min-h-[80vh] bg-gradient-to-r from-zambrano-dark-blue to-zambrano-light-blue text-white flex items-center"
    >
      {/* Silueta médica sutil en grafito como fondo */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/752b0d58-8e44-46da-8425-13111f67d9f6.png')] bg-center bg-no-repeat bg-contain opacity-[0.08] mix-blend-multiply"></div>
      
      {/* Overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            El Lipedema no es obesidad. Es una enfermedad. Y sí, tiene solución.
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-quicksand animate-fade-in opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            Te escuchamos, te entendemos, y te acompañamos en tu recuperación.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <span className="relative">Agenda tu consulta médica</span>
            <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
