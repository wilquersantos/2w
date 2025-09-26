"use client"

import { useState, useEffect } from "react"
import { CustomButton } from "@/components/custom-button"
import { MenuIcon, XIcon } from "@/components/icons"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary"> <a href="#">2W Agência</a></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </a>
            <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors font-medium">
              Diferenciais
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <CustomButton className="animate-pulse-glow relative z-10"> <><a href="https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.">Avaliação Gratuita</a></></CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 touch-manipulation text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t border-border bg-background shadow-lg rounded-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <a
                href="#servicos"
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#diferenciais"
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Diferenciais
              </a>
              <a
                href="#depoimentos"
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <CustomButton className="w-full mt-2 relative z-10"> <><a href="https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.">Avaliação Gratuita</a></></CustomButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
