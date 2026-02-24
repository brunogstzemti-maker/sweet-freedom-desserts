import { Star } from "lucide-react";
import heroImg from "@/assets/hero-desserts.jpg";
import mockupImg from "@/assets/mockup-szero.webp";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sobremesas zero açúcar deliciosas"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <p className="text-warm-gold font-body text-sm md:text-base uppercase tracking-widest mb-4 font-semibold">
          Mais de 2.137 pessoas já aproveitaram
        </p>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-6 max-w-4xl mx-auto tracking-wider">
          <span className="inline bg-chocolate px-3 py-1 text-white">AGORA VOCÊ PODE COMER</span>
          <br />
          <span className="inline px-3 py-1 text-white" style={{ backgroundColor: 'hsl(340, 60%, 65%)' }}>SUA SOBREMESA FAVORITA</span>
          <br />
          <span className="text-white">DE DOMINGO A DOMINGO,</span>
          <br />
          <span className="text-white">SEM CULPA!</span>
        </h1>

        <p className="text-white font-body text-lg md:text-xl mb-2 max-w-2xl mx-auto">
          + de <strong className="text-yellow-400">300 Sobremesas</strong> Zero Açúcar, Glúten e Lactose
        </p>

        <p className="text-white font-body text-base mb-4">
          Por <strong className="text-yellow-400">Laura Menezes</strong> — Nutricionista
        </p>

        <div className="mt-6 mb-8 max-w-3xl mx-auto">
          <img
            src={mockupImg}
            alt="Mockup do ebook 300 Receitas de Sobremesas Zero com bônus"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-white text-sm font-body">
            (2.137) • <strong className="text-primary">97%</strong> de aprovação
          </span>
        </div>

        <a href="#oferta" className="btn-cta text-xl animate-pulse-glow">
          QUERO APROVEITAR O DESCONTO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
