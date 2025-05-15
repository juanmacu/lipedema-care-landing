
import { Droplet, Heart, FileText, User } from "lucide-react";

const EmotionalLipedema = () => {
  return (
    <section id="lipedema" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto reveal-section">
          <h2 className="section-title text-center mb-6">¿Qué es el Lipedema?</h2>
          <p className="text-center text-lg text-zambrano-gray mb-12 max-w-3xl mx-auto">
            El lipedema no es simplemente una acumulación de grasa, es una condición médica que afecta principalmente a mujeres. No es tu culpa y no es algo que puedas controlar con dietas o ejercicio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#F1F0FB] p-6 rounded-xl shadow-sm staggered-item">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                <Droplet className="text-zambrano-light-blue" size={30} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-zambrano-dark-blue">Inflamación y dolor</h3>
              <p className="text-zambrano-gray">
                El lipedema causa inflamación y dolor en las extremidades inferiores y brazos. Es una sensación constante que puede empeorar durante el día o en ciertas condiciones.
              </p>
            </div>
            
            <div className="bg-[#F1F0FB] p-6 rounded-xl shadow-sm staggered-item">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                <Heart className="text-zambrano-light-blue" size={30} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-zambrano-dark-blue">Cambios hormonales</h3>
              <p className="text-zambrano-gray">
                Los cambios hormonales suelen desencadenar o empeorar el lipedema. Pubertad, embarazo, menopausia son momentos clave donde la condición puede manifestarse o acentuarse.
              </p>
            </div>
            
            <div className="bg-[#F1F0FB] p-6 rounded-xl shadow-sm staggered-item">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                <User className="text-zambrano-light-blue" size={30} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-zambrano-dark-blue">Afecta la autoestima</h3>
              <p className="text-zambrano-gray">
                No es sólo físico. El lipedema puede afectar significativamente tu autoestima, generando inseguridad, ansiedad y en algunos casos, aislamiento social.
              </p>
            </div>
            
            <div className="bg-[#F1F0FB] p-6 rounded-xl shadow-sm staggered-item">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                <FileText className="text-zambrano-light-blue" size={30} />
              </div>
              <h3 className="text-xl font-medium mb-3 text-zambrano-dark-blue">Se puede tratar</h3>
              <p className="text-zambrano-gray">
                La buena noticia: existen tratamientos efectivos. Con un diagnóstico correcto y un enfoque personalizado, puedes mejorar significativamente tu calidad de vida.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center reveal-section">
            <p className="text-zambrano-dark-blue font-medium text-lg mb-4">
              No estás sola en este camino
            </p>
            <p className="text-zambrano-gray max-w-3xl mx-auto">
              El Dr. Juan C. Zambrano ha dedicado gran parte de su carrera a entender y tratar el lipedema desde un enfoque integral, combinando las técnicas quirúrgicas más avanzadas con un acompañamiento humano y empático.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalLipedema;
