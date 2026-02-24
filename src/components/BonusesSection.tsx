import { Gift } from "lucide-react";

const bonuses = [
  {
    title: "Tortas Doces",
    description: "Zero açúcar, zero glúten e zero lactose",
    originalPrice: "R$ 39,90",
  },
  {
    title: "Lanche da Tarde",
    description: "Zero açúcar, zero glúten e zero lactose",
    originalPrice: "R$ 29,90",
  },
  {
    title: "Geléias Caseiras",
    description: "Zero açúcar",
    originalPrice: "R$ 19,90",
  },
];

const BonusesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
          Você ainda ganha{" "}
          <span className="text-accent">+ 3 bônus</span> de presente!
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Exclusivos para quem aproveitar a oferta de hoje
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus) => (
            <div key={bonus.title} className="card-bonus text-center group hover:border-accent transition-colors aspect-square flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{bonus.title}</h3>
              <p className="text-muted-foreground font-body text-sm mb-4">{bonus.description}</p>
              <p className="price-old text-sm font-body">DE {bonus.originalPrice}</p>
              <span className="badge-free text-base mt-2">GRÁTIS</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
