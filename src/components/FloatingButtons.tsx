import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+918447314061";
const WHATSAPP_NUMBER = "918447314061";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20your%20medical%20digital%20marketing%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
      
      {/* Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
