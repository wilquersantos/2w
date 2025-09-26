import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, MapPinIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer id="contato" className="bg-muted/50 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">2W Agência</div>
            <p className="text-muted-foreground mb-6 max-w-md text-pretty">
              Agência digital especializada em transformar sua presença online em resultados reais. Sites, tráfego pago
              e SEO que convertem.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <InstagramIcon size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <LinkedinIcon size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <FacebookIcon size={20} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  SEO
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <MailIcon size={16} className="mr-2 text-primary" />
                <a href="mailto:2wagenciamkt@gmail.com" className="hover:text-primary transition-colors">
                  2wagenciamkt@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={16} className="mr-2 text-primary" />
                <a href="tel:+5562982240790" className="hover:text-primary transition-colors">
                  (62) 98224-0790
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={16} className="mr-2 text-primary mt-1" />
                <span>Goiânia, GO</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 2W - Agência Digital. Todos os direitos reservados.</p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7oes%20de%20marketing%20e%20sites.%20"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 animate-pulse hover:animate-none"
        >
          <div className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"
                fill="currentColor"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <span className="font-medium text-sm whitespace-nowrap">Precisa de ajuda?</span>
        </a>
      </div>
    </footer>
  )
}
