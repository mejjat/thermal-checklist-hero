import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, FileEdit, Trash2, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Checklist {
  id: string;
  date: string;
  type: string;
  engine: string;
}

const CompletedForms = () => {
  const { toast } = useToast();
  const [checklists] = useState<Checklist[]>([
    { id: '1', date: '2024-03-20', type: 'Réception', engine: 'T1 Bull D11' },
    { id: '2', date: '2024-03-19', type: 'Expédition', engine: '992K Loader' },
  ]);

  const handleEdit = (id: string) => {
    toast({
      title: "Modification en cours",
      description: "Cette fonctionnalité sera bientôt disponible.",
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Suppression",
      description: "Cette fonctionnalité sera bientôt disponible.",
    });
  };

  const handleView = (id: string) => {
    toast({
      title: "Visualisation",
      description: "Cette fonctionnalité sera bientôt disponible.",
    });
  };

  const handleDownloadPDF = (id: string) => {
    toast({
      title: "Téléchargement PDF",
      description: "Cette fonctionnalité sera bientôt disponible.",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-primary mb-8">Fiches Accomplies</h1>
      <div className="grid gap-4">
        {checklists.length === 0 ? (
          <Card className="p-6">
            <p className="text-muted-foreground">Aucune fiche accomplie disponible pour le moment.</p>
          </Card>
        ) : (
          checklists.map((checklist) => (
            <Card key={checklist.id} className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{checklist.engine}</h3>
                  <p className="text-sm text-muted-foreground">
                    {checklist.date} - {checklist.type}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleView(checklist.id)}
                    title="Voir"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(checklist.id)}
                    title="Modifier"
                  >
                    <FileEdit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(checklist.id)}
                    title="Supprimer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownloadPDF(checklist.id)}
                    title="Télécharger PDF"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default CompletedForms;