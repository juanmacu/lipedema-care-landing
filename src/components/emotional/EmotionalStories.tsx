
import { useState } from "react";

// Definir tipos para los testimonios
interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  location: string;
}

const EmotionalStories = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "María C.",
      age: 42,
      text: "Después de 15 años sufriendo, por fin alguien me entendió. El Dr. Zambrano me dio esperanza cuando ya había perdido toda fe.",
      location: "Bogotá"
    },
    {
      id: 2,
      name: "Ana L.",
      age: 38,
      text: "Pasé años escuchando que sólo necesitaba dieta y ejercicio. La cirugía con el Dr. Zambrano cambió mi vida completamente.",
      location: "Medellín"
    },
    {
      id: 3,
      name: "Carolina T.",
      age: 45,
      text: "El equipo médico me acompañó en todo el proceso con empatía y profesionalismo. Me devolvieron mi confianza.",
      location: "Cali"
    }
  ]);

  return (
    <section id="historias" className="py-16 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section">
          <h2 className="section-title text-center mb-2">Historias Reales</h2>
          <p className="text-center text-lg text-zambrano-gray mb-12">
            Miles de mujeres han recuperado su bienestar y calidad de vida
          </p>
          
          <div className="mt-12 relative">
            {/* Collage estilo Ali Abdaal con líneas conectoras */}
            <div className="hidden md:block absolute inset-0 z-0">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,150 C300,120 500,280 600,250" stroke="#E5DEFF" strokeWidth="3" strokeDasharray="5,5" />
                <path d="M250,300 C350,350 450,100 550,150" stroke="#E5DEFF" strokeWidth="3" strokeDasharray="5,5" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="relative staggered-item">
                <div className="rounded-xl overflow-hidden shadow-lg h-64 mb-4 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Consultorio del Dr. Zambrano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-zambrano-gray italic text-center">
                  "Cada paciente tiene una historia única que merece ser escuchada"
                </p>
              </div>
              
              <div className="relative staggered-item" style={{ animationDelay: "100ms" }}>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 mb-4 bg-gray-100 transform md:translate-y-10">
                  <img 
                    src="/placeholder.svg" 
                    alt="Dr. Zambrano en quirófano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-zambrano-gray italic text-center">
                  "La cirugía es solo una parte del viaje hacia la recuperación"
                </p>
              </div>
              
              <div className="relative staggered-item" style={{ animationDelay: "200ms" }}>
                <div className="rounded-xl overflow-hidden shadow-lg h-64 mb-4 bg-gray-100">
                  <img 
                    src="/placeholder.svg" 
                    alt="Dr. Zambrano en entrevista"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-zambrano-gray italic text-center">
                  "Educación y concientización son fundamentales para combatir el lipedema"
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className="bg-white p-6 rounded-xl shadow-sm staggered-item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-xl font-medium text-zambrano-dark-blue">{testimonial.name}</span>
                        <span className="text-sm text-zambrano-gray ml-2">{testimonial.age} años</span>
                      </div>
                      <span className="text-sm text-zambrano-light-blue">{testimonial.location}</span>
                    </div>
                    <p className="text-zambrano-gray italic">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalStories;
