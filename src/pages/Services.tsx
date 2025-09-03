import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Livraison Normal",
      subtitle: "Rapide & Fiable",
      description:
        "Service de livraison standard pour vos colis et documents. Nos coursiers expérimentés garantissent une livraison rapide et sécurisée dans tout le canton de Genève, jusqu'à Nyon.",
      features: [
        "Livraison en 1 heure au centre-ville",
        "Suivi en temps réel",
        "Preuve de livraison par e-mail (PDF)",
        "Historique archivé pendant un an",
      ],
      image: "rapide",
    },
    {
      title: "Livraison Rocket",
      subtitle: "Ultra-rapide & Efficace",
      description:
        "Service de livraison express pour vos envois urgents. Nos vélos et vélos-cargos, propulsés à la seule force des jambes, garantissent des livraisons rapides à faible impact environnemental.",
      features: [
        "Livraison en 30 minutes en moyenne",
        "Valable à Genève, Carouge, Acacias (1201-1209)",
        "Confirmation immédiate",
        "Service prioritaire",
      ],
      image: "rocket",
    },
    {
      title: "Livraison Cargo-Bike",
      subtitle: "Volumineux & Écologique",
      description:
        "Service de livraison pour vos colis volumineux. Nos vélos-cargos, avec une capacité allant jusqu'à 300 litres, permettent de transporter des charges importantes tout en préservant l'environnement.",
      features: [
        "Capacité jusqu'à 300 litres",
        "Sacs Bagaboo étanches",
        "Livraison dans tout le canton de Genève, jusqu'à Nyon",
        "Zéro émission carbone",
      ],
      image: "cargo",
    },
    {
      title: "Services aux Entreprises",
      subtitle: "Solutions sur Mesure",
      description:
        "Solutions logistiques personnalisées pour les entreprises. Avec plus de 80 ans d'expérience cumulée, nous connaissons Genève comme notre poche et nous adaptons à vos besoins spécifiques.",
      features: [
        "Facturation mensuelle claire",
        "Règlement sous 30 jours",
        "Paiement en espèces possible",
        "Livraisons hors canton via partenaire logistique",
      ],
      image: "sustainable",
    }
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Nos Services</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Rocket Courrier livre à vélo et vélo-cargo dans tout le canton de Genève, jusqu'à Nyon. 
            Vos colis, nos priorités : rapides, fiables, adaptés à vos besoins.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="w-full h-96 overflow-hidden rounded-lg">
                    <img
                      src={`/Rocket-Builder/img/${service.image}.jpeg`}
                      alt={`Service ${service.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Service Content */}
                <div className="lg:w-1/2">
                  <h2 className="font-asap font-extrabold text-section text-courier-dark mb-2">
                    {service.title}
                  </h2>
                  <h3 className="font-asap font-bold text-xl text-courier-dark mb-6 opacity-80">
                    {service.subtitle}
                  </h3>
                  <p className="font-asap text-courier-dark text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center font-asap text-courier-dark"
                      >
                        <div className="w-2 h-2 bg-courier-lime rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className="bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Services;
