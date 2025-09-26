import { CustomButton } from "@/components/custom-button"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, SparklesIcon } from "@/components/icons"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-12">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100} direction="fade">
            <div className="flex items-center justify-center mb-6">
              <SparklesIcon className="text-primary mr-2" size={24} />
              <span className="text-primary font-semibold text-lg">Agência Digital 2W</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance text-foreground leading-tight">
              Transformamos sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                presença digital
              </span>{" "}
              em resultados reais
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300} direction="up">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Especialistas em criação de sites, tráfego pago e SEO. Levamos seu negócio para o próximo nível digital.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CustomButton size="lg" className="animate-pulse-glow relative z-10">
               <a href="https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.">Solicite uma avaliação Gratuita</a>
                <ArrowRightIcon className="ml-2" size={20} />
              </CustomButton>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-foreground hover:bg-primary hover:text-primary-foreground bg-background relative z-10"
              ><a href="#depoimentos">
                Ver Nossos Cases
              </a></Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500} direction="up">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">+200</div>
                <div className="text-muted-foreground">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4 Anos</div>
                <div className="text-muted-foreground">de Experiência</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}
