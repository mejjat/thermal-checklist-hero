import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const GeneralInfo = ({ 
  date, 
  setDate, 
  checklistType, 
  setChecklistType 
}: { 
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  checklistType: string;
  setChecklistType: (type: string) => void;
}) => {
  return (
    <div className="form-group">
      <h2 className="section-title">Informations générales</h2>
      
      <div className="mb-4">
        <Label htmlFor="control-date">Date du contrôle</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Sélectionner une date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="mb-4">
        <Label>Type de Checklist</Label>
        <RadioGroup
          defaultValue="reception"
          onValueChange={setChecklistType}
          className="flex space-x-4 mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="reception" id="reception" />
            <Label htmlFor="reception">Réception</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="expedition" id="expedition" />
            <Label htmlFor="expedition">Expédition</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};