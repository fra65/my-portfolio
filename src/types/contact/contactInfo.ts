import { Mail, Phone, MapPin } from "lucide-react";
import { ContactProps } from "./contactProps";

export const contactInfo: ContactProps[] = [
  {
    icon: Mail,
    label: "Email",
    value: "marco@example.com",
    href: "mailto:marco@example.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 123 456 7890",
    href: "tel:+39123456789",
  },
  {
    icon: MapPin,
    label: "Posizione",
    value: "Milano, Italia",
    href: "#",
  },
]