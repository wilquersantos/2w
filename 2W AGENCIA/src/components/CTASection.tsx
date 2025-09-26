import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Avaliação 100% Gratuita",
    "Sem Compromisso", 
    "Análise Personalizada"
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-transparent to-agency-purple/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-6 fade-in-up">
            Pronto para <span className="text-gradient">transformar</span> seu negócio?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed fade-in-up-delay">
            Agende uma consultoria gratuita e descubra como podemos acelerar seus resultados digitais
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up-delay">
          <Button 
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20agendar%20um%20reuni%C3%A3o.', '_blank')}
            className="bg-gradient-primary hover:shadow-colored text-white px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Agende sua Reunião</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('tel:+5562982240790', '_blank')}
            className="border-2 border-gray-200 hover:border-primary hover:bg-primary-light/20 px-12 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
          >
            <span className="relative z-10">Fale Conosco</span>
            <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-primary/20 blur-[10px] animate-light-move-white pointer-events-none" />
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto fade-in-up-delay-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-text-secondary font-semibold text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;