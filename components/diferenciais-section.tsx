import { Card, CardContent } from "@/components/ui/card"
import { ZapIcon, UsersIcon, BarChart3Icon, HeadphonesIcon } from "@/components/icons"

const diferenciais = [
  {
    icon: ZapIcon,
    title: "Resultados Rápidos",
    description: "Implementamos estratégias que geram resultados em até 30 dias",
  },
  {
    icon: UsersIcon,
    title: "Estratégias Personalizadas",
    description: "Cada projeto é único, desenvolvemos soluções sob medida para seu negócio",
  },
  {
    icon: BarChart3Icon,
    title: "Relatórios Claros",
    description: "Transparência total com relatórios detalhados e métricas que importam",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Próximo",
    description: "Atendimento humanizado e suporte contínuo para seu sucesso",
  },
]

export function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Por que escolher a <span className="text-primary">2W</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nossos diferenciais fazem toda a diferença no sucesso do seu projeto digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((diferencial, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-fit group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <diferencial.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{diferencial.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{diferencial.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
