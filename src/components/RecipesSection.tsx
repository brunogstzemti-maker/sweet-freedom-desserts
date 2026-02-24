import brownieImg from "@/assets/brownie.jpg";
import manjarImg from "@/assets/manjar.jpg";
import doceDeLeiteImg from "@/assets/doce-de-leite.jpg";
import paveImg from "@/assets/pave.jpg";
import pudimImg from "@/assets/pudim.jpg";

const recipes = [
  { name: "Brownie", image: brownieImg },
  { name: "Manjar", image: manjarImg },
  { name: "Doce de Leite", image: doceDeLeiteImg },
  { name: "Pavê", image: paveImg },
  { name: "Pudim", image: pudimImg },
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
            <div key={recipe.name} className="card-recipe group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{recipe.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <span key={tag} className="badge-tag text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Sim! São mais de <span className="text-accent">300 receitas!</span>
          </p>
          <p className="text-muted-foreground font-body">
            Zero Açúcar, Zero Glúten e Zero Lactose com o sabor das tradicionais!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
