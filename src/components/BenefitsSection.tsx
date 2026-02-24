import { Check } from "lucide-react";

const benefits = [
  "Controlar a compulsão por açúcar",
  "Controlar sua glicemia sem abrir mão do prazer de comer doces",
  "Garantir digestão leve e confortável após comer sua sobremesa",
  "Perder peso comendo seus doces favoritos na versão fit, com o mesmo sabor dos tradicionais",
  "Manter uma rotina de alimentação saudável mesmo quando quiser comer um docinho",
  "Garantir que seu filho tenha uma alimentação equilibrada enquanto curte os sabores da infância",
  "Ter sabores inéditos e saudáveis para experimentar por anos",
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 section-warm">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Baixando agora, você vai:
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Mais de 300 receitas para transformar sua alimentação
        </p>

        <div className="space-y-5">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center mt-0.5">
                <Check className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="font-body text-foreground text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-background border border-border text-center">
          <p className="font-body text-muted-foreground text-base">
            🍴 <strong className="text-foreground">Não tem muita experiência na cozinha?</strong> São receitas MUITO fáceis de fazer, com ingredientes que todo mundo tem em casa!
          </p>
        </div>

        <div className="text-center mt-10">
          <a href="#oferta" className="btn-cta text-lg">
            QUERO APROVEITAR O DESCONTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
