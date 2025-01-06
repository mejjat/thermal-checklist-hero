import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-sidebar p-4 border-b">
      <div className="container mx-auto flex flex-wrap gap-4 justify-center md:justify-start">
        <Button
          variant={location.pathname === "/" ? "default" : "outline"}
          onClick={() => navigate("/")}
        >
          Liste des Checklists
        </Button>
        <Button
          variant={location.pathname === "/nouvelle" ? "default" : "outline"}
          onClick={() => navigate("/nouvelle")}
        >
          Nouvelle Checklist
        </Button>
        <Button
          variant={location.pathname === "/accomplies" ? "default" : "outline"}
          onClick={() => navigate("/accomplies")}
        >
          Fiches Accomplies
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;