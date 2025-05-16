
import { Button } from "@/components/ui/button";

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const FormNavigation = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
  isSubmitting
}: FormNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 && (
        <Button 
          type="button" 
          variant="outline"
          onClick={onPrev}
          className="px-6 hover:bg-gray-50 transition-colors"
        >
          Atrás
        </Button>
      )}
      
      {currentStep < totalSteps ? (
        <Button 
          type="button" 
          onClick={onNext}
          className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 transition-all duration-300 hover:scale-[1.02] ml-auto px-6"
        >
          {currentStep === 4 ? "Último paso" : "Siguiente"}
        </Button>
      ) : (
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 transition-all duration-300 hover:scale-[1.02] ml-auto px-6"
        >
          {isSubmitting ? "Enviando..." : "Enviar valoración"}
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
