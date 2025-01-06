import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { GeneralInfo } from "./checklist/GeneralInfo";
import { Responsibles } from "./checklist/Responsibles";

export const ChecklistForm = () => {
  const [date, setDate] = useState<Date>();
  const [checklistType, setChecklistType] = useState("reception");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSave = () => {
    // Here you would typically save the form data
    toast({
      title: "Checklist enregistrée",
      description: "La checklist a été enregistrée avec succès.",
    });
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="checklist-container">
      <h1 className="text-2xl font-bold text-primary mb-8">
        Checklist des moteurs thermiques aux ACX
      </h1>

      <Card className="p-6">
        <GeneralInfo
          date={date}
          setDate={setDate}
          checklistType={checklistType}
          setChecklistType={setChecklistType}
        />
        <Responsibles />
        <EngineCategories />
        <EngineInfo />
        <SensorControl />
        <StartingCircuit />
        <WiringControl />
        <Notes />

        <div className="flex justify-end space-x-4 mt-8">
          <Button variant="outline" onClick={handleCancel}>
            Annuler
          </Button>
          <Button onClick={handleSave}>
            Enregistrer
          </Button>
        </div>
      </Card>

      <footer className="text-center py-8 text-sm text-gray-600">
        Made with ❤️ By MEJJAT
      </footer>
    </div>
  );
};

const EngineCategories = () => (
  <div className="form-group">
    <h2 className="section-title">Catégories d'engins/moteurs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CategorySection
        title="Bulls D11"
        items={["T1", "T2", "T3", "T4", "T5", "T6", "T7"]}
      />
      <CategorySection
        title="Loaders"
        items={["992K", "994F1", "994F2"]}
      />
      <CategorySection
        title="Drill"
        items={["SKF1", "SKF2", "DKS"]}
      />
      <CategorySection
        title="Auxiliaires (AUX)"
        items={["ARR CAT", "NIV5", "NIV6", "NIV7", "PAYKOM1", "PAYKOM2", "PAYKOM3"]}
      />
      <CategorySection
        title="Bulls D9"
        items={["R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11"]}
      />
    </div>
  </div>
);

const CategorySection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="border rounded-lg p-4">
    <h3 className="font-medium mb-2">{title}</h3>
    <div className="grid grid-cols-3 gap-2">
      {items.map((item) => (
        <Button
          key={item}
          variant="outline"
          className="text-sm"
          onClick={() => {}}
        >
          {item}
        </Button>
      ))}
    </div>
  </div>
);

const EngineInfo = () => (
  <div className="form-group">
    <h2 className="section-title">Informations spécifiques au moteur</h2>
    <div className="space-y-4">
      <div>
        <Label htmlFor="engine-serial">Numéro de série moteur</Label>
        <Input id="engine-serial" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="ecm-serial">Numéro de série ECM moteur</Label>
        <Input id="ecm-serial" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="hm-current">HM actuel de l'engin</Label>
        <Input id="hm-current" type="number" className="mt-1" />
      </div>
    </div>
  </div>
);

const SensorControl = () => {
  const sensors = [
    "Capteur de régime moteur",
    "Capteur de température liquide refroidissement",
    "Switch température d'eau",
    "Palpeur débit liquide refroidissement",
    "Capteur de pression d'huile moteur",
    // ... add all other sensors
  ];

  return (
    <div className="form-group">
      <h2 className="section-title">Contrôle des capteurs</h2>
      <div className="space-y-4">
        {sensors.map((sensor) => (
          <SensorItem key={sensor} name={sensor} />
        ))}
      </div>
    </div>
  );
};

const SensorItem = ({ name }: { name: string }) => (
  <div>
    <Label>{name}</Label>
    <div className="status-selector">
      <Button variant="outline" className="status-new">Neuf</Button>
      <Button variant="outline" className="status-good">Bon</Button>
      <Button variant="outline" className="status-bad">Mauvais</Button>
      <Button variant="outline" className="status-missing">Manquant</Button>
    </div>
  </div>
);

const StartingCircuit = () => (
  <div className="form-group">
    <h2 className="section-title">Contrôle du circuit de démarrage</h2>
    <div className="space-y-4">
      {[
        "Démarreur 1",
        "Démarreur 2",
        "Alternateur de charge",
        "Courroie d'alternateur de charge",
        "Tendeur de courroie",
        "État de tension courroie"
      ].map((item) => (
        <SensorItem key={item} name={item} />
      ))}
    </div>
  </div>
);

const WiringControl = () => (
  <div className="form-group">
    <h2 className="section-title">Contrôle branchement et câblage</h2>
    <div className="space-y-4">
      {[
        "Faisceau électrique du moteur thermique",
        "Branchement électrique des capteurs et switch",
        "Attachement et isolation du faisceau électrique"
      ].map((item) => (
        <SensorItem key={item} name={item} />
      ))}
    </div>
  </div>
);

const Notes = () => (
  <div className="form-group">
    <h2 className="section-title">Notes</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Les composants à remplacer après un certain nombre d'heures de marche :</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-medium">6000H :</span> niveau huile moteur, pression huile moteur, 
            Palpeur circulation eau, Démarreurs et alternateur de charge.
          </li>
          <li>
            <span className="font-medium">12000H :</span> Autres composants électriques.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
