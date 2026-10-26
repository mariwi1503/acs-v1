import { company, whatsappDefaultMessage } from "@/app/content/site";

export function whatsappUrl(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
