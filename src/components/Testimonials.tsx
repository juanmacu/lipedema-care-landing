
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

type TestimonialProps = {
  name: string;
  age: number;
  title: string;
  comment: string;
  icon: React.ReactNode;
  delay: number;
};

const TestimonialCard = ({ name, age, title, comment, icon, delay }: TestimonialProps) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
      style={{ 
        animationDelay: `${delay}ms`, 
        opacity: 0, 
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="text-zambrano-light-blue mb-4">{icon}</div>
      <div className="mb-2 text-zambrano-gray">
        {name}, {age} años
      </div>
      <h3 className="text-xl font-medium text-zambrano-dark-blue mb-2">{title}</h3>
      <p className="text-zambrano-gray">{comment}</p>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <h2 className="section-title text-center mb-12 text-zambrano-dark-blue">¿Qué opinan nuestros clientes?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="María"
              age={38}
              title="Recibí apoyo real"
              comment="Por primera vez sentí que alguien entendía mi dolor. El Dr. Zambrano y su equipo me acompañaron en todo el proceso."
              icon={<Star className="w-6 h-6" />}
              delay={100}
            />
            
            <TestimonialCard 
              name="Ana"
              age={44}
              title="Mejor calidad de vida"
              comment="El diagnóstico fue claro y el tratamiento personalizado. Hoy tengo menos dolor y más confianza."
              icon={<Star className="w-6 h-6" />}
              delay={300}
            />
            
            <TestimonialCard 
              name="Laura"
              age={29}
              title="Atención humana"
              comment="El trato fue cálido y profesional. Recomiendo al Dr. Zambrano a todas las mujeres que buscan respuestas."
              icon={<Star className="w-6 h-6" />}
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
