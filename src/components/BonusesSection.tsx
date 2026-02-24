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
            <div key={bonus.title} className="rounded-lg overflow-hidden text-center" style={{ backgroundColor: 'hsl(340, 60%, 70%)' }}>
              <div className="px-6 pt-6">
                <div className="rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-4 py-5 flex flex-col items-center">
                <h3 className="font-display text-xl font-bold text-white mb-1">{bonus.title}</h3>
                <p className="text-white/80 font-body text-sm mb-3">{bonus.description}</p>
                <p className="line-through text-white/60 text-lg font-body mb-1">DE {bonus.originalPrice}</p>
                <span className="text-red-500 font-display text-3xl font-bold">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
