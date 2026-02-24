import { Star } from "lucide-react";
import heroImg from "@/assets/hero-desserts.jpg";

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

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto">
          Agora você pode comer sua sobremesa favorita{" "}
          <span className="text-warm-gold">de domingo a domingo</span>, sem culpa!
        </h1>

        <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-2 max-w-2xl mx-auto">
          + de <strong className="text-primary-foreground">300 Sobremesas</strong> Zero Açúcar, Glúten e Lactose
        </p>

        <p className="text-primary-foreground/70 font-body text-base mb-4">
          Por <strong className="text-primary-foreground">Amanda Ballis</strong> — Nutricionista
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex star-rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-primary-foreground/80 text-sm font-body">
            (2.137) • <strong className="text-warm-gold">97%</strong> de aprovação
          </span>
        </div>

        <a href="#oferta" className="btn-cta text-xl animate-pulse-glow">
          🍫 QUERO APROVEITAR O DESCONTO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
