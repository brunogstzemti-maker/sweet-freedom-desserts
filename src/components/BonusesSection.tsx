import { Gift } from "lucide-react";
import bonusTortasImg from "@/assets/bonus-tortas.webp";
import bonusLancheImg from "@/assets/bonus-lanche.webp";
import bonusGeleiaImg from "@/assets/bonus-geleia.webp";

const bonuses = [
  {
    title: "Tortas Doces",
    description: "Zero açúcar, zero glúten e zero lactose",
    originalPrice: "R$ 39,90",
    image: bonusTortasImg,
  },
  {
    title: "Lanche da Tarde",
    description: "Zero açúcar, zero glúten e zero lactose",
    originalPrice: "R$ 29,90",
    image: bonusLancheImg,
  },
  {
    title: "Geléias Caseiras",
    description: "Zero açúcar",
    originalPrice: "R$ 19,90",
    image: bonusGeleiaImg,
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
            <div key={bonus.title} className="card-bonus bg-primary/20 text-center group hover:border-accent transition-colors aspect-square flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-t-lg mb-3">
                <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover" />
              </div>
              <div className="px-3 pb-3 flex flex-col items-center">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{bonus.title}</h3>
                <p className="text-muted-foreground font-body text-xs mb-2">{bonus.description}</p>
                <p className="price-old text-sm font-body">DE {bonus.originalPrice}</p>
                <span className="badge-free text-base mt-1">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
