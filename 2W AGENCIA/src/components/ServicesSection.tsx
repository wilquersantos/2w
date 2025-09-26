import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Criação de Sites",
      description: "Sites modernos, responsivos e otimizados para conversão. Do design à implementação.",
      features: [
        "Design Responsivo",
        "Otimização SEO", 
        "Integração com Analytics",
        "Manutenção Inclusa"
      ],
      whatsappMsg: "Olá! Tenho interesse em Criação de Sites e gostaria de tirar algumas dúvidas."
    },
    {
      title: "Tráfego Pago",
      description: "Campanhas estratégicas no Google Ads e Meta Ads para maximizar seu ROI.",
      features: [
        "Google Ads",
        "Meta Ads",
        "Relatórios Detalhados", 
        "Otimização Contínua"
      ],
      whatsappMsg: "Olá! Tenho dúvidas sobre Tráfego Pago e gostaria de saber mais sobre as soluções."
    },
    {
      title: "SEO",
      description: "Posicionamento orgânico no Google para aumentar sua visibilidade online.",
      features: [
        "Auditoria SEO",
        "Otimização On-Page",
        "Link Building",
        "Monitoramento Rankings"
      ],
      whatsappMsg: "Olá! Gostaria de saber mais sobre SEO e como pode ajudar meu negócio."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-secondary relative">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-6 fade-in-up">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed fade-in-up-delay">
            Soluções completas para transformar sua presença digital em uma máquina de vendas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`glass-card border-2 border-white/30 hover-lift group shadow-xl fade-in-up ${index === 1 ? 'md:scale-105' : ''}`}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-8 text-lg leading-relaxed relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-text-secondary font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=5562982240790&text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary text-primary hover:bg-gradient-primary hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 relative z-10 overflow-hidden"
                  >
                    <span className="relative z-10">Saiba Mais</span>
                    <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-primary/20 blur-[10px] animate-light-move-white pointer-events-none" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;