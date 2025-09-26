import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <header className="w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-white/70 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2 md:gap-0">
          <button onClick={scrollToTop} className="text-xl font-bold text-gradient focus:outline-none bg-transparent border-0 cursor-pointer px-2 md:text-2xl">
            2W Agência
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-text-secondary hover:text-text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-text-secondary hover:text-text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-text-secondary hover:text-text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-text-secondary hover:text-text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </button>
          </nav>
          <Button 
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.', '_blank')}
            className="relative overflow-hidden bg-gradient-primary hover:shadow-glow text-white px-2 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-xs md:text-base min-w-[40px] md:min-w-[auto]"
          >
            <span className="relative z-10">Avaliação Gratuita</span>
            <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-white/30 blur-lg animate-light-move pointer-events-none" />
          </Button>
          <div className="md:hidden ml-1">
            <MobileMenu scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;