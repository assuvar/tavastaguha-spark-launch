import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919108918437"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 text-secondary group animate-glow"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
