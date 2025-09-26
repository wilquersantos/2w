import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, BarChart3, Headphones } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Zap className="w-8 h-8 text-agency-blue" />,
      title: "Resultados Rápidos",
      description: "Implementamos estratégias que geram resultados em até 30 dias"
    },
    {
      icon: <Target className="w-8 h-8 text-agency-blue" />,
      title: "Estratégias Personalizadas", 
      description: "Cada projeto é único, desenvolvemos soluções sob medida para seu negócio"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-agency-blue" />,
      title: "Relatórios Claros",
      description: "Transparência total com relatórios detalhados e métricas que importam"
    },
    {
      icon: <Headphones className="w-8 h-8 text-agency-blue" />,
      title: "Suporte Próximo",
      description: "Atendimento humanizado e suporte contínuo para seu sucesso"
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-agency-purple/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-6 fade-in-up">
            Por que escolher a <span className="text-gradient">2W</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed fade-in-up-delay">
            Nossos diferenciais fazem toda a diferença no sucesso do seu projeto digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <Card key={index} className="glass-card border-2 border-white/30 hover-lift group text-center shadow-xl fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="mb-6 flex justify-center relative z-10">
                  <div className="p-4 bg-gradient-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {differential.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 relative z-10">
                  {differential.title}
                </h3>
                <p className="text-text-secondary leading-relaxed relative z-10">
                  {differential.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;