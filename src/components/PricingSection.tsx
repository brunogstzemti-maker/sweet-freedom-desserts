import { Check, ShieldCheck } from "lucide-react";

const included = [
  "+300 receitas de sobremesas zero",
  "Tortas Doces (BÔNUS)",
  "Lanche da Tarde (BÔNUS)",
  "Geléias Caseiras (BÔNUS)",
  "Acesso IMEDIATO e VITALÍCIO",
  "7 dias de garantia",
];

const PricingSection = () => {
  return (
    <section id="oferta" className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Tudo o que você receberá
        </h2>
        <p className="text-center text-white/70 font-body mb-10">
          Aproveitando a oferta de hoje
        </p>

        <div className="bg-background rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-accent">
          <div className="text-center mb-8">
            <p className="price-old text-lg font-body">DE R$ 97,00</p>
            <div className="flex items-baseline justify-center gap-2 mt-1">
              <span className="text-muted-foreground font-body text-lg">POR</span>
              <span className="price-new text-6xl md:text-7xl font-bold">R$ 9,90</span>
            </div>
            <p className="text-accent font-body font-semibold text-sm mt-2 uppercase tracking-wider">
              ⚡ Somente hoje
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-body text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://checkout.ofertapremiumsite.com.br/VCCL1O8SCTJB"
            className="btn-cta w-full text-center text-sm py-3 animate-pulse-glow block"
          >
            QUERO APROVEITAR O DESCONTO
          </a>

          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-body text-xs">Compra segura • 7 dias de garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
