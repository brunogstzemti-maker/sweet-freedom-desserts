import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As receitas são realmente sem açúcar, glúten e lactose?",
    answer: "Sim! Todas as mais de 300 receitas foram desenvolvidas sem açúcar, sem glúten e sem lactose, mantendo o sabor das sobremesas tradicionais.",
  },
  {
    question: "Preciso ter experiência na cozinha?",
    answer: "Não! As receitas são simples e práticas, feitas para qualquer pessoa preparar em casa, mesmo sem experiência.",
  },
  {
    question: "Como vou receber o material?",
    answer: "Após a confirmação do pagamento, você receberá o acesso completo no seu e-mail em poucos minutos.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício! Você pode acessar as receitas quando e quantas vezes quiser.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O material pode ser acessado de qualquer dispositivo: celular, tablet ou computador.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Dúvidas <span style={{ color: 'hsl(340, 70%, 45%)' }}>Frequentes</span>
        </h2>
        <p className="text-center text-muted-foreground font-body mb-10">
          Tire suas dúvidas antes de garantir o seu acesso
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="font-display font-bold text-foreground text-left text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
