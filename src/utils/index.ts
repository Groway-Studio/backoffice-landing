import { ServicesOfInterest } from "../interfaces";

export const types_of_business: { text: string; value: string }[] = [
  { text: "- Seleccione -", value: "select1" },
  { text: "startup", value: "startup" },
  { text: "empresa pequeña", value: "empresa pequeña" },
  { text: "freelancer", value: "freelancer" },
  { text: "personal", value: "personal" },
];

export const monthly_income: { text: string; value: string }[] = [
  { text: "- Seleccione -", value: "select2" },
  { text: "0 - 5000 soles", value: "0 - 5000 soles" },
  { text: "5000 - 10000 soles", value: "5000 - 10000 soles" },
  { text: "10000 o más", value: "10000 o más" },
];

export const services_of_interest: ServicesOfInterest[] = [
  { name: "asistente virtual", active: true },
  { name: "contabilidad", active: true },
  { name: "asesoría legal", active: false },
];
