import brownieImg from "@/assets/brownie.webp";
import manjarImg from "@/assets/manjar.webp";
import doceDeLeiteImg from "@/assets/doce-de-leite.webp";
import paveImg from "@/assets/pave.webp";
import pudimImg from "@/assets/pudim.webp";
import tortaMorangoCardImg from "@/assets/torta-morango.webp";

import quindimImg from "@/assets/carousel/quindim.webp";
import tortaChocolateImg from "@/assets/carousel/torta-chocolate.webp";
import tortaMorangoImg from "@/assets/carousel/torta-morango.webp";
import forrobodoImg from "@/assets/carousel/forrobodo.webp";
import beijinhoImg from "@/assets/carousel/beijinho.webp";
import mousseMaracujaImg from "@/assets/carousel/mousse-maracuja.webp";
import pudimCarImg from "@/assets/carousel/pudim.webp";
import paveCarImg from "@/assets/carousel/pave.webp";
import doceDeLeiteCarImg from "@/assets/carousel/doce-de-leite.webp";
import manjarCarImg from "@/assets/carousel/manjar.webp";

const recipes = [
  { name: "Brownie", image: brownieImg },
  { name: "Manjar", image: manjarImg },
  { name: "Doce de Leite", image: doceDeLeiteImg },
  { name: "Pavê", image: paveImg },
  { name: "Pudim", image: pudimImg },
  { name: "Torta de Morango", image: tortaMorangoCardImg },
];

const carouselImages = [
  { src: quindimImg, alt: "Quindim" },
  { src: tortaChocolateImg, alt: "Torta de Chocolate" },
  { src: tortaMorangoImg, alt: "Torta de Morango" },
  { src: forrobodoImg, alt: "Forrobodó" },
  { src: beijinhoImg, alt: "Beijinho" },
  { src: mousseMaracujaImg, alt: "Mousse de Maracujá" },
  { src: pudimCarImg, alt: "Pudim" },
  { src: paveCarImg, alt: "Pavê" },
  { src: doceDeLeiteCarImg, alt: "Doce de Leite" },
  { src: manjarCarImg, alt: "Manjar" },
];

const tags = ["Sem Açúcar", "Sem Lactose", "Sem Glúten", "Sabor do Original"];

const RecipesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-accent font-semibold font-body uppercase tracking-wider text-sm mb-3">
          O que você vai poder comer
        </p>
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-3xl mx-auto">
          Com ingredientes acessíveis e + de 300 receitas simples
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12 max-w-2xl mx-auto">
          Qualquer pessoa pode preparar sobremesas deliciosas sem sair da dieta.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {recipes.map((recipe) => (
            <div key={recipe.name} className="card-recipe group cursor-pointer bg-primary/20">
              <div className="aspect-square overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-display font-bold text-foreground text-sm mb-1">{recipe.name}</h3>
                <div className="flex flex-wrap gap-1 justify-center">
                  {tags.map((tag) => (
                    <span key={tag} className="badge-tag text-[8px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="gradient-hero rounded-2xl py-12 px-4 mt-16">
          <div className="text-center mb-8">
            <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Sim! São mais de <span className="text-yellow-400">300 receitas!</span>
            </p>
            <p className="text-white/80 font-body mb-8">
              Zero Açúcar, Zero Glúten e Zero Lactose com o sabor das tradicionais!
            </p>
          </div>

          {/* Infinite auto-scroll carousel */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(340,35%,30%)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(340,35%,30%)] to-transparent z-10" />
            <div className="flex gap-4 animate-carousel-scroll">
              {[...carouselImages, ...carouselImages].map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
