
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MedicalFormData } from "./FormTypes";
import DoctorSelectionCard from "./DoctorSelectionCard";

interface MedicalDetailsFieldsProps {
  formData: MedicalFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const MedicalDetailsFields = ({ formData, handleChange, handleSelectChange }: MedicalDetailsFieldsProps) => {
  const doctors = [
    {
      value: "dr_zambrano",
      name: "Dr. Juan C. Zambrano",
      specialty: "Cirugía Plástica y Estética",
      description: "Especialista en Lipedema y Linfedema"
    },
    {
      value: "dra_gaona",
      name: "Dra. Jennifer Gaona",
      specialty: "Medicina Estética",
      description: "Especialista en tratamientos de Lipedema"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="weight">Peso (kg)</Label>
          <Input 
            id="weight"
            name="weight"
            type="number"
            placeholder="Ej: 70"
            value={formData.weight}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="height">Altura (cm)</Label>
          <Input 
            id="height"
            name="height"
            type="number"
            placeholder="Ej: 165"
            value={formData.height}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label className="text-base font-medium text-zambrano-dark-blue mb-4 block">
          Selecciona tu especialista preferido
        </Label>
        <div className="grid grid-cols-1 gap-3 mt-3">
          {doctors.map((doctor) => (
            <DoctorSelectionCard
              key={doctor.value}
              doctor={doctor}
              selected={formData.doctor === doctor.value}
              onSelect={(value) => handleSelectChange("doctor", value)}
            />
          ))}
        </div>
      </div>
      
      <div>
        <Label htmlFor="comments">Comentarios / Historia del caso</Label>
        <Textarea 
          id="comments"
          name="comments"
          placeholder="Describe tu caso, síntomas o dudas"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1"
          rows={4}
        />
      </div>
    </>
  );
};

export default MedicalDetailsFields;
