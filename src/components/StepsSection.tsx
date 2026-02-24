const StepsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          Receba o seu acesso em <span className="text-accent">2 passos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-xl font-bold text-accent">1</span>
            </div>
            <p className="font-body text-foreground font-medium">Clique no botão abaixo</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-xl font-bold text-accent">2</span>
            </div>
            <p className="font-body text-foreground font-medium">
              Digite seu melhor e-mail para receber todo o material
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a href="#oferta" className="btn-cta text-lg">
            QUERO APROVEITAR O DESCONTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
