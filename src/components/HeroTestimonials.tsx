import depoHero1 from "@/assets/depoimentos/depo-hero-1.webp";
import depoHero2 from "@/assets/depoimentos/depo-hero-2.webp";
import depoHero3 from "@/assets/depoimentos/depo-hero-3.webp";

const heroTestimonials = [depoHero1, depoHero2, depoHero3];

const HeroTestimonials = () => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 max-w-md flex flex-col gap-4">
        {heroTestimonials.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={img}
              alt={`Depoimento ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroTestimonials;
