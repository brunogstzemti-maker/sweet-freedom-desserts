import depo1 from "@/assets/depoimentos/depo-1.webp";
import depo2 from "@/assets/depoimentos/depo-2.webp";
import depo3 from "@/assets/depoimentos/depo-3.webp";
import depo4 from "@/assets/depoimentos/depo-4.webp";
import depo5 from "@/assets/depoimentos/depo-5.webp";

const testimonials = [depo1, depo2, depo3, depo4, depo5];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Veja o que nossas alunas estão dizendo
        </h2>
        <p className="text-center text-muted-foreground font-body mb-12">
          Resultados reais de pessoas reais
        </p>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-4 animate-carousel-scroll">
            {[...testimonials, ...testimonials].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-52 md:w-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Depoimento ${(i % testimonials.length) + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
