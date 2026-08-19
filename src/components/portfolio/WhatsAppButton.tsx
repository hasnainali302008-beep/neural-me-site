import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "+923155706565";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp at ${WHATSAPP_NUMBER}`}
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}