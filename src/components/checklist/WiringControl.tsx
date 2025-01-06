import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface WiringItemProps {
  name: string;
}

const WiringItem = ({ name }: WiringItemProps) => {
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

export const WiringControl = () => {
  const items = [
    "Faisceau électrique du moteur thermique",
    "Branchement électrique des capteurs et switch",
    "Attachement et isolation du faisceau électrique"
  ];

  return (
    <div className="form-group">
      <h2 className="section-title">Contrôle branchement et câblage</h2>
      <div className="space-y-6">
        {items.map((item) => (
          <WiringItem key={item} name={item} />
        ))}
      </div>
    </div>
  );
};