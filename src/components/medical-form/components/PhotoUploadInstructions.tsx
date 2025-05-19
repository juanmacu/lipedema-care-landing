
import { Camera } from "lucide-react";

const PhotoUploadInstructions = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Camera size={24} className="text-zambrano-dark-blue" />
        <h4 className="text-lg font-medium text-zambrano-dark-blue">Fotografías para valoración médica</h4>
      </div>
      
      <p className="text-zambrano-gray mb-6">
        Para poder evaluar correctamente tu caso, necesitamos que subas 3 fotografías: 
        <span className="font-medium"> de frente, de perfil y de espalda</span>.
      </p>
      
      {/* Photo upload cards will be inserted here by the parent component */}
      
      <p className="text-xs text-zambrano-gray mt-3">
        Usa fondo neutro y evita selfies para una mejor valoración médica.
        <br />
        Formatos aceptados: JPG, PNG
      </p>
    </div>
  );
};

export default PhotoUploadInstructions;
