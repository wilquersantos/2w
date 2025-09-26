import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "E-commerce Fashion",
      text: "A 2W transformou completamente nossa presença digital. Em 3 meses, nossas vendas online aumentaram 300%!",
    },
    {
      name: "João Pereira",
      company: "Clínica Saúde+",
      text: "O site ficou incrível, moderno e rápido. Recebemos muitos elogios dos pacientes e aumentamos os agendamentos online.",
    },
    {
      name: "Ana Souza",
      company: "Restaurante Sabor Caseiro",
      text: "O trabalho de SEO e tráfego pago trouxe muito mais clientes para o restaurante. Recomendo a 2W de olhos fechados!",
    },
    {
      name: "Carlos Lima",
      company: "Startup TechNow",
      text: "Equipe ágil, criativa e muito profissional. O resultado superou nossas expectativas!",
    },
    {
      name: "Fernanda Torres",
      company: "Consultoria Financeira",
      text: "Aumentamos nossa captação de leads em 5x após o novo site e campanhas digitais. Atendimento excelente!",
    },
    {
      name: "Ricardo Alves",
      company: "Loja de Eletrônicos",
      text: "A equipe da 2W entendeu exatamente o que precisávamos. O site ficou lindo e converte muito mais!",
    },
    {
      name: "Patrícia Gomes",
      company: "Estúdio de Pilates",
      text: "O agendamento online facilitou muito para nossos clientes. O suporte da 2W é rápido e eficiente.",
    },
    {
      name: "Eduardo Martins",
      company: "Construtora Ideal",
      text: "A presença digital da nossa empresa nunca foi tão forte. Resultados visíveis em poucos meses!",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-secondary relative">
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-6 fade-in-up">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed fade-in-up-delay">
            Histórias reais de sucesso e transformação digital
          </p>
        </div>
        <div className="relative">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="px-2">
                  <Card className="glass-card border-2 border-white/30 shadow-2xl hover-lift fade-in-up">
                    <CardContent className="p-8 relative overflow-hidden flex flex-col items-center">
                      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-primary opacity-10 rounded-full -translate-x-8 -translate-y-8"></div>
                      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-primary opacity-5 rounded-full translate-x-10 translate-y-10"></div>
                      <blockquote className="text-xl md:text-2xl text-text-primary text-center font-bold mb-6 leading-relaxed relative z-10">
                        "{t.text}"
                      </blockquote>
                      <div className="text-center relative z-10">
                        <div className="font-bold text-lg text-text-primary mb-1">{t.name}</div>
                        <div className="text-text-secondary font-medium">{t.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;