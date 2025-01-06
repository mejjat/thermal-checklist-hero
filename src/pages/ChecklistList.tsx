import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ChecklistList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-primary mb-8">Liste des Checklists</h1>
      <div className="grid gap-4">
        <Card className="p-6">
          <p className="text-muted-foreground">Aucune checklist disponible pour le moment.</p>
        </Card>
      </div>
    </div>
  );
};

export default ChecklistList;