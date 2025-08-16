import { Mail, Phone, MapPin } from "lucide-react";
import { ContactProps } from "./contactProps";

export const contactInfo: ContactProps[] = [
  {
    icon: Mail,
    label: "Email",
    value: "me.francesco.villani@gmail.com",
    href: "mailto:me.francesco.villani@gmail.com",
    key: "email",
    translateValue: false
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 327 717 9141",
    href: "tel:+393277179141",
    key: "phone",
    translateValue: false
  },
  {
    icon: MapPin,
    label: "Posizione",
    value: "placeContent",
    href: "#",
    key: "place",
    translateValue: true
  },
]