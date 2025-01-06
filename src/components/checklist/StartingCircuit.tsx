import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CircuitItemProps {
  name: string;
}

const CircuitItem = ({ name }: CircuitItemProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      <Label>{name}</Label>
      <div className="flex flex-wrap gap-2">
        {["Neuf", "Bon", "Mauvais", "Manquant"].map((status) => (
          <Button
            key={status}
            variant={selectedStatus === status ? "default" : "outline"}
            onClick={() => setSelectedStatus(status)}
            className="flex-1 min-w-[100px]"
          >
            {status}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const StartingCircuit = () => {
  const items = [
    "Démarreur 1",
    "Démarreur 2",
    "Alternateur de charge",
    "Courroie d'alternateur de charge",
    "Tendeur de courroie",
    "État de tension courroie"
  ];

  return (
    <div className="form-group">
      <h2 className="section-title">Contrôle du circuit de démarrage</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <CircuitItem key={item} name={item} />
        ))}
      </div>
    </div>
  );
};