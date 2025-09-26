import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-transparent to-agency-purple/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8 fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm text-agency-blue font-semibold mb-6 border border-white/30 shadow-lg animate-scale-in">
              <span className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></span>
              Agência Digital 2W
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-text-primary mb-8 leading-tight fade-in-up-delay tracking-tight">
            Transformamos sua{" "}
            <span className="text-gradient relative">
              presença digital
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-lg rounded-lg -z-10"></div>
            </span>{" "}
            em<br />
            <span className="text-gray-800">resultados reais</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-2 font-medium">
            Especialistas em criação de sites, tráfego pago e SEO.
            <br />
            <span className="text-text-primary">Levamos seu negócio para o próximo nível digital.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 fade-in-up-delay-2">
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5562982240790&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.', '_blank')}
              className="relative overflow-hidden bg-gradient-primary hover:shadow-glow text-white px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">Solicite uma avaliação Gratuita →</span>
              <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-white/30 blur-lg animate-light-move pointer-events-none" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-200 hover:border-primary hover:bg-primary-light/20 px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">Ver Nossos Cases</span>
              <span className="absolute left-[-60%] top-0 w-2/3 h-full bg-primary/20 blur-[10px] animate-light-move-white pointer-events-none" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto fade-in-up-delay-2">
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="text-5xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">+200</div>
                <div className="text-text-secondary font-semibold text-lg">Projetos Entregues</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="text-5xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-text-secondary font-semibold text-lg">Clientes Satisfeitos</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="text-5xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">4 Anos</div>
                <div className="text-text-secondary font-semibold text-lg">de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;