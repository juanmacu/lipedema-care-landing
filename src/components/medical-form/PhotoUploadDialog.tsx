
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileImage } from "lucide-react";

const PhotoUploadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          type="button" 
          variant="outline" 
          size="sm"
          className="text-zambrano-dark-blue hover:bg-zambrano-light-blue/20"
        >
          <FileImage className="mr-1 h-4 w-4" /> Ver instrucciones
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Instrucciones para fotografías</DialogTitle>
          <DialogDescription>
            Para una valoración médica efectiva, necesitamos fotografías específicas.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div>
            <h4 className="font-medium mb-2 text-zambrano-dark-blue">Se requieren 3 fotografías:</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><span className="font-medium">Vista frontal:</span> De pie, brazos ligeramente separados del cuerpo.</li>
              <li><span className="font-medium">Vista lateral:</span> Perfil completo, posición natural.</li>
              <li><span className="font-medium">Vista posterior:</span> De espaldas, brazos a los lados.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-zambrano-dark-blue">Recomendaciones importantes:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Fondo neutro (preferiblemente pared blanca o clara)</li>
              <li>Buena iluminación (luz natural si es posible)</li>
              <li>Evitar selfies (pedir ayuda o usar temporizador)</li>
              <li>Usar ropa que permita ver las áreas afectadas</li>
              <li>Fotografía de cuerpo completo</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoUploadDialog;
