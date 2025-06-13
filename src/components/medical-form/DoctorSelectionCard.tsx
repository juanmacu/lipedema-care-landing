import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface Doctor {
  value: string;
  name: string;
  specialty: string;
  description: string;
}

interface DoctorSelectionCardProps {
  doctor: Doctor;
  selected: boolean;
  onSelect: (value: string) => void;
}

const DoctorSelectionCard = ({ doctor, selected, onSelect }: DoctorSelectionCardProps) => {
  return (
    <Card 
      className={cn(
        "p-4 cursor-pointer transition-all duration-300 hover:shadow-md border-2",
        selected 
          ? "border-zambrano-light-blue bg-zambrano-light-blue/10 shadow-md" 
          : "border-gray-200 hover:border-zambrano-light-blue/50"
      )}
      onClick={() => onSelect(doctor.value)}
    >
      <div className="flex items-center space-x-4">
        {/* Avatar placeholder */}
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
          selected 
            ? "bg-zambrano-light-blue text-zambrano-dark-blue" 
            : "bg-gray-100 text-gray-600"
        )}>
          <User size={24} />
        </div>
        
        {/* Doctor info */}
        <div className="flex-1">
          <h4 className="font-medium text-zambrano-dark-blue text-lg">
            {doctor.name}
          </h4>
          <div className="flex items-center gap-1 text-zambrano-gray text-sm mt-1">
            <Stethoscope size={14} />
            <span>{doctor.specialty}</span>
          </div>
          <p className="text-zambrano-gray text-sm mt-1">
            {doctor.description}
          </p>
        </div>
        
        {/* Selection indicator */}
        <div className={cn(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
          selected 
            ? "border-zambrano-light-blue bg-zambrano-light-blue" 
            : "border-gray-300"
        )}>
          {selected && (
            <div className="w-3 h-3 rounded-full bg-zambrano-dark-blue" />
          )}
        </div>
      </div>
    </Card>
  );
};

export default DoctorSelectionCard;