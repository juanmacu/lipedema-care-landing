
import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const TeAcompanamos = () => {
  const images = [
    {
      src: "https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/DSCF9701-2.jpg",
      alt: "Dr. Zambrano en consultorio",
      title: "Diagnóstico personalizado"
    },
    {
      src: "https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/DSCF9360-2.jpg",
      alt: "Dr. Zambrano en quirófano",
      title: "Tratamiento especializado"
    },
    {
      src: "https://thiqqlnlxkifyyncehmk.supabase.co/storage/v1/object/public/branding-assets/img%20web/educacion%20continua.png",
      alt: "Dr. Zambrano en entrevista",
      title: "Educación continua"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-zambrano-dark-blue text-center mb-3">Te Acompañamos</h2>
        <p className="text-zambrano-gray text-center max-w-2xl mx-auto mb-12">
          Nuestro compromiso es brindarte el apoyo que necesitas en cada etapa de tu tratamiento
        </p>
        
        <div className="relative mb-16 reveal-section">
          {/* Image collage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {images.map((image, index) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center staggered-item">
                  <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-3 hover-scale">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zambrano-dark-blue/40 to-transparent"></div>
                  </div>
                  <h3 className="text-xl text-zambrano-dark-blue font-medium">{image.title}</h3>
                </div>
                
                {/* Connecting lines - only between images */}
                {index < images.length - 1 && (
                  <div className="hidden md:block absolute" style={{
                    left: `${(index + 1) * 33 - 8}%`,
                    top: '30%',
                    width: '8%',
                    height: '2px',
                    background: 'linear-gradient(to right, #f5b6a7, #12303a)'
                  }}></div>
                )}
              </Fragment>
            ))}
          </div>
          
          {/* Quote testimonial */}
          <Card className="max-w-2xl mx-auto bg-white shadow-md hover:shadow-lg transition-all duration-300 reveal-section mt-12">
            <CardContent className="pt-6">
              <div className="flex">
                <QuoteIcon className="text-zambrano-light-blue h-8 w-8 mr-3 shrink-0" />
                <p className="italic text-zambrano-gray">
                  "Por primera vez sentí que alguien me entendía. Hoy tengo un plan claro para mi salud."
                  <span className="block mt-2 font-medium not-italic">– Paciente anónima</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeAcompanamos;
