
import { useRef, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
    <section className="py-16 md:py-24 bg-white" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto reveal-section" ref={sectionRef}>
          <div className="flex flex-col items-center mb-12">
            <div className="mb-6 relative w-32 h-32">
              <div className="absolute inset-0 bg-zambrano-dark-blue rounded-full flex items-center justify-center">
                <Phone className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="section-title text-center mb-4">Contacto</h2>
            <p className="text-zambrano-gray text-center max-w-2xl">Estamos aquí para atenderte</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-zambrano-dark-blue mb-4">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-zambrano-light-blue" />
                  <span className="text-zambrano-gray">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-zambrano-light-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-zambrano-gray">contacto@drzambrano.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-zambrano-light-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-zambrano-gray">Lunes - Viernes: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-medium text-zambrano-dark-blue mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-zambrano-light-blue bg-opacity-10 rounded-full text-zambrano-dark-blue hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-zambrano-light-blue bg-opacity-10 rounded-full text-zambrano-dark-blue hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-zambrano-light-blue bg-opacity-10 rounded-full text-zambrano-dark-blue hover:bg-opacity-20 transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-zambrano-dark-blue mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Mensaje" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zambrano-light-blue"
                  ></textarea>
                </div>
                <Button className="w-full bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
