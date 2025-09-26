import { useState } from "react";

const MobileMenu = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menu"
      >
        <span className={`block w-7 h-0.5 bg-primary mb-1.5 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-primary mb-1.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {open && (
        <div className="absolute right-4 top-16 bg-white border border-border/30 rounded-xl shadow-xl py-4 px-6 z-50 flex flex-col gap-4 animate-fade-in-up w-56">
          <button onClick={() => { setOpen(false); scrollToSection('servicos'); }} className="text-text-primary text-lg text-left">Nossos Serviços</button>
          <button onClick={() => { setOpen(false); scrollToSection('depoimentos'); }} className="text-text-primary text-lg text-left">Avaliações</button>
          <button onClick={() => { setOpen(false); scrollToSection('contato'); }} className="text-text-primary text-lg text-left">Contato</button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
