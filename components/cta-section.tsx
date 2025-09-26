import { CustomButton } from "@/components/custom-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon, CalendarIcon, PhoneIcon } from "@/components/icons"

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Pronto para transformar seu negócio?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Agende uma consultoria gratuita e descubra como podemos acelerar seus resultados digitais
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <CustomButton
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-gray-100 relative z-10"
                style={{ backgroundColor: "oklch(1 0 0)", color: "oklch(0.35 0.15 264)", borderColor: "oklch(1 0 0)" }}
              >
                <CalendarIcon className="mr-2" size={20} /><a href="https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20agendar%20um%20reuni%C3%A3o.">Agende sua Reunião</a>
                
                <ArrowRightIcon className="ml-2" size={20} />
              </CustomButton>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent relative z-10"
              >
                <PhoneIcon className="mr-2" size={20} /><a href="tel:+5562982240790"> Fale Conosco</a>
                
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center opacity-90">
              <div>
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm">Avaliação 100% Gratuita</div>
              </div>
              <div>
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm">Sem Compromisso</div>
              </div>
              <div>
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm">Análise Personalizada</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
