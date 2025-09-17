import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobeIcon, TargetIcon, SearchIcon, ArrowRightIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: GlobeIcon,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para conversão. Do design à implementação.",
    features: ["Design Responsivo", "Otimização SEO", "Integração com Analytics", "Manutenção Inclusa"],
  },
  {
    icon: TargetIcon,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads e Meta Ads para maximizar seu ROI.",
    features: ["Google Ads", "Meta Ads", "Relatórios Detalhados", "Otimização Contínua"],
  },
  {
    icon: SearchIcon,
    title: "SEO",
    description: "Posicionamento orgânico no Google para aumentar sua visibilidade online.",
    features: ["Auditoria SEO", "Otimização On-Page", "Link Building", "Monitoramento Rankings"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={100} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluções completas para transformar sua presença digital em uma máquina de vendas
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={200 + index * 100} direction="up">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <ArrowRightIcon className="text-primary mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
