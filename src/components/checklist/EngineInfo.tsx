import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const EngineInfo = () => {
  return (
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
};