import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Checklist {
  id: string;
  date: string;
  type: string;
  engine: string;
  status: "En cours" | "Terminé";
}

const ChecklistList = () => {
  const navigate = useNavigate();
  const [checklists] = useState<Checklist[]>([
    { 
      id: '1', 
      date: '2024-03-20', 
      type: 'Réception', 
      engine: 'T1 Bull D11',
      status: "En cours"
    },
    { 
      id: '2', 
      date: '2024-03-19', 
      type: 'Expédition', 
      engine: '992K Loader',
      status: "Terminé"
    },
  ]);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Liste des Checklists</h1>
        <Button onClick={() => navigate("/nouvelle")}>
          Nouvelle Checklist
        </Button>
      </div>
      <div className="grid gap-4">
        {checklists.length === 0 ? (
          <Card className="p-6">
            <p className="text-muted-foreground">Aucune checklist disponible pour le moment.</p>
          </Card>
        ) : (
          checklists.map((checklist) => (
            <Card key={checklist.id} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-medium">{checklist.engine}</h3>
                  <p className="text-sm text-muted-foreground">
                    {checklist.date} - {checklist.type}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    checklist.status === "Terminé" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {checklist.status}
                  </span>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => navigate(`/nouvelle?edit=${checklist.id}`)}
                >
                  Continuer
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ChecklistList;