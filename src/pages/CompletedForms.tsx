import { Card } from "@/components/ui/card";

const CompletedForms = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-primary mb-8">Fiches Accomplies</h1>
      <div className="grid gap-4">
        <Card className="p-6">
          <p className="text-muted-foreground">Aucune fiche accomplie disponible pour le moment.</p>
        </Card>
      </div>
    </div>
  );
};

export default CompletedForms;