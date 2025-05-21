
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
  // Button text based on current step
  const getNextButtonText = () => {
    switch(currentStep) {
      case 1:
        return "Continuar con mi autoevaluación";
      case 2:
        return "Continuar con mis datos de salud";
      case 3:
        return "Continuar con mis fotografías";
      case 4:
        return "Último paso";
      case 5:
        return "Enviar mi valoración";
      default:
        return "Siguiente";
    }
  };

  return (
    <div className="flex justify-center mt-8 gap-4">
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
          className={`transition-all duration-300 hover:scale-[1.02] hover:shadow-md px-6 ${
            currentStep === 2 
              ? "bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90" 
              : "bg-zambrano-dark-blue hover:bg-zambrano-dark-blue/90 text-white"
          }`}
        >
          {getNextButtonText()}
        </Button>
      ) : (
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-zambrano-light-blue text-zambrano-dark-blue hover:bg-zambrano-light-blue/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-md px-6"
        >
          {isSubmitting ? "Enviando..." : "Enviar mi valoración"}
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
