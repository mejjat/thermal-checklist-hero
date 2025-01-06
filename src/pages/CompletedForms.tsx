import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, FileEdit, Trash2, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Checklist {
  id: string;
  date: string;
  type: string;
  engine: string;
  engineSerial: string;
  ecmSerial: string;
  hmCurrent: string;
}

const CompletedForms = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [checklists] = useState<Checklist[]>([
    { 
      id: '1', 
      date: '2024-03-20', 
      type: 'Réception', 
      engine: 'T1 Bull D11',
      engineSerial: 'ENG123',
      ecmSerial: 'ECM456',
      hmCurrent: '5000'
    },
    { 
      id: '2', 
      date: '2024-03-19', 
      type: 'Expédition', 
      engine: '992K Loader',
      engineSerial: 'ENG789',
      ecmSerial: 'ECM012',
      hmCurrent: '3500'
    },
  ]);

  const handleEdit = (id: string) => {
    navigate(`/nouvelle?edit=${id}`);
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Fiche supprimée",
      description: `La fiche ${id} a été supprimée avec succès.`,
    });
  };

  const handleView = (id: string) => {
    navigate(`/view/${id}`);
  };

  const handleDownloadPDF = (id: string) => {
    toast({
      title: "Téléchargement PDF",
      description: `Le PDF de la fiche ${id} est en cours de téléchargement.`,
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
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="font-medium">{checklist.engine}</h3>
                  <p className="text-sm text-muted-foreground">
                    {checklist.date} - {checklist.type}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Série moteur: {checklist.engineSerial}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    HM: {checklist.hmCurrent}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap md:flex-nowrap">
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