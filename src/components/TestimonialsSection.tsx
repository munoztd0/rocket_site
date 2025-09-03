import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Service excellent. Rapidité et fiabilité des livraisons, personnel professionnel et courtois. Je recommande vivement !",
      author: "Anne G.",
      company: "Boutique Locale",
    },
    {
      text: "Une solution de livraison vraiment écologique et efficace. L'équipe est très réactive et le suivi en temps réel est un vrai plus.",
      author: "Michel J.",
      company: "Restaurant",
    },
    {
      text: "Parfait pour nos besoins de livraison quotidiens. Service client exceptionnel et délais toujours respectés.",
      author: "Rachel K.",
      company: "E-commerce",
    },
    {
      text: "La meilleure option de livraison durable en ville. Fier de travailler avec une entreprise qui partage nos valeurs écologiques.",
      author: "Luc M.",
      company: "Entreprise Durable",
    },
  ];

  return (
    <section className="bg-courier-accent py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-asap font-extrabold text-section text-courier-dark text-center mb-12">
          Ce que disent nos clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-courier-light border-2 border-courier-dark rounded-full p-6 hover:shadow-lg transition-shadow"
              style={{ borderBottomWidth: "6px" }}
            >
              <CardContent className="p-6 text-center">
                <p className="font-asap text-courier-dark mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="mt-4">
                  <p className="font-asap font-bold text-courier-dark text-lg">
                    {testimonial.author}
                  </p>
                  <p className="font-asap text-courier-dark text-sm opacity-80">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
