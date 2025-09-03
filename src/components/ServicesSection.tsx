import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const services = [
    {
      title: "Rocket",
      stats: [
        "Livraison en 30 minutes",
        "Prix : dès 34.- CHF*",
      ],
      description: "Service de livraison express pour vos envois urgents",
      image: "rocket",
    },
    {
      title: "Normal",
      stats: [
        "Livraison en 1 heure au centre-ville",
        "Prix : dès 17.- CHF*",
      ],
      description: "Service de livraison standard pour vos colis",
      image: "rapide",
    },
    {
      title: "Cargo",
      stats: [
        "Capacité jusqu'à 300 litres",
        "Prix : dès 34.- CHF*",
      ],
      description: "Pour vos colis volumineux dans tout le canton de Genève, jusqu'à Nyon",
      image: "cargo",
    },
  ];

  return (
    <section className="bg-courier-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-courier-dark text-center mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Service Image */}
              <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={`/Rocket-Builder/img/${service.image}.jpeg`}
                  alt={`Service ${service.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="text-courier-dark">
                <h3 className="font-asap font-bold text-3xl mb-4">
                  {service.title}
                </h3>
                <p className="font-asap text-base mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left mb-4">
                  {service.stats.map((stat, idx) => (
                    <li key={idx} className="font-asap text-base">
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-courier-dark/70 font-asap text-sm">
          * Prix de base valable à Genève, Carouge, Acacias (1201-1209). Des suppléments peuvent s'appliquer selon le poids ou la distance.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
