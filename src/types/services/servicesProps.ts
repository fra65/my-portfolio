// types/service.ts
import { LucideIcon } from "lucide-react";

export interface ServicesProps {
  icon: LucideIcon;         // Componente icona di lucide-react
  title: string;            // Nome del servizio
  description: string;      // Descrizione breve
  featured: boolean;        // Evidenziato sì/no
  technologies: string[];   // Elenco tecnologie usate
}
