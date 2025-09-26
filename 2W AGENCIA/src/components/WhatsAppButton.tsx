import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open('https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1!%20%20Venha%20atrav%C3%A9s%20do%20site.%20Me%20explica%20mais%20sobre%20o%20tr%C3%A1fego%20pago!', '_blank')}
        className="bg-whatsapp hover:bg-green-600 text-white p-5 rounded-2xl shadow-2xl animate-float transition-all duration-300 group hover:scale-110 shadow-glow"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-semibold shadow-lg">
          Precisa de ajuda?
          <div className="absolute top-1/2 left-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;