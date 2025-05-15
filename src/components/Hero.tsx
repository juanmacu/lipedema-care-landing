
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
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            El Lipedema no es obesidad. Es una enfermedad. Y sí, tiene solución.
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-quicksand">
            Te escuchamos, te entendemos, y te acompañamos en tu recuperación.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2"
          >
            Agenda tu consulta médica
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
