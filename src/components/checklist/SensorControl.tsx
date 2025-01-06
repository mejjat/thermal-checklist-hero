import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface SensorItemProps {
  name: string;
}

const SensorItem = ({ name }: SensorItemProps) => {
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

export const SensorControl = () => {
  const sensors = [
    "Capteur de régime moteur",
    "Capteur de température liquide refroidissement",
    "Switch température d'eau",
    "Palpeur débit liquide refroidissement",
    "Capteur de pression d'huile moteur",
    "Capteur de niveau d'huile moteur",
    "Capteur de pression collecteur d'admission",
    "Capteur de température d'air collecteur admission",
    "Capteur de température d'échappement droit",
    "Capteur de température d'échappement gauche",
    "Capteur de température d'air ambiant",
    "Capteur de pression de gasoil",
    "Switch de pression de gasoil",
    "Capteur de pression Carter (Crankcase)",
    "Switch de pression huile moteur",
    "Capteur de régime primaire (Timing)",
    "Capteur de régime secondaire (Calibration)",
    "Capteur de vitesse convertisseur",
    "Capteur de température convertisseur",
    "Capteur de pression atmosphérique"
  ];

  return (
    <div className="form-group">
      <h2 className="section-title">Contrôle des capteurs</h2>
      <div className="space-y-6">
        {sensors.map((sensor) => (
          <SensorItem key={sensor} name={sensor} />
        ))}
      </div>
    </div>
  );
};