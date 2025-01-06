import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Responsibles = () => {
  return (
    <div className="form-group">
      <h2 className="section-title">Responsables</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="resp-electric">Responsable électrique Engin</Label>
          <Input id="resp-electric" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="resp-atelier">Responsable Atelier Engin (S/E)</Label>
          <Input id="resp-atelier" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="resp-inspector">Inspecteur Bureau de Méthode</Label>
          <Input id="resp-inspector" className="mt-1" />
        </div>
      </div>
    </div>
  );
};