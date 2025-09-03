import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Rico",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
  {
      name: "Imman",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
 {
      name: "Gus",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
     {
      name: "Theo",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
    {
      name: "Kristian",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
        {
      name: "Elliot",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
        {
      name: "Albus",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    },
        {
      name: "JC",
      role: "Fondateurs & Coursiers",
      description:
        "-",
      image: "rapide",
    }
  ];

  const stats = [
    { number: "80+", label: "Années d'Expérience Cumulée" },
    { number: "8", label: "Coursiers" },
    { number: "300L", label: "Capacité Max. Vélos-Cargos" },
    { number: "0", label: "Émission Carbone" },
    { number: "20'000", label: "Km parcouru" },
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">À Propos</span>
          </h1>
          <p className="font-asap text-courier-dark text-xl max-w-3xl mx-auto">
            Une coopérative de cyclistes dévoués, engagée dans la livraison urbaine
            durable et un service client exceptionnel.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-courier-dark font-asap text-lg">
                <p>
                  Lancée en 2023 par une équipe de huit coursiers chevronnés, Rocket Courrier 
                  allie passion du vélo et expertise logistique. Notre organisation horizontale, 
                  avec des décisions prises collectivement, garantit une équipe motivée et un 
                  service irréprochable.
                </p>
                <p>
                  Avec plus de 80 ans d'expérience cumulée, nous connaissons Genève comme notre poche. 
                  Nous bâtissons des relations de confiance avec nos clients grâce à des livraisons 
                  rapides et un service soigné, tout en restant fidèles à nos valeurs de durabilité et de respect.
                </p>
                <p>
                  La sécurité est non négociable. Nos coursiers, tous passionnés de vélo, portent 
                  obligatoirement un casque et bénéficient d'une couverture accident semi-privée en plus 
                  de la SUVA. Leur engagement ? Offrir un service d'excellence tout en respectant la planète.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <img
                  src="/Rocket-Builder/img/messenger_portait_4.jpeg"
                  alt="Notre Histoire en Images"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-courier-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-asap font-extrabold text-section text-courier-light text-center mb-12">
            En Chiffres
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-asap font-extrabold text-4xl lg:text-5xl text-courier-lime mb-2">
                  {stat.number}
                </div>
                <div className="font-asap text-courier-light text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
              Notre Mission & Nos Valeurs
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              Rocket Courrier a été fondée en 2023 par huit coursiers chevronnés à Genève. Notre équipe cumule plus de 80 ans d'expérience pour vous offrir un service rapide, fiable et ancré dans le tissu local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Local et Engagé
                </h3>
                <p className="font-asap text-courier-dark">
                  Nous soutenons l'économie genevoise avec des partenaires locaux comme la Banque Alternative Suisse, 
                  <a href="https://www.deeps.ch/" target="_blank" rel="noopener noreferrer" className="text-courier-dark underline"> deeps</a>,
                  <a href="http://www.dpmt.ch/" target="_blank" rel="noopener noreferrer" className="text-courier-dark underline"> Dr Paper & Mister Tee</a>,
                  et <a href="https://www.bahnhofstrasse.ink/" target="_blank" rel="noopener noreferrer" className="text-courier-dark underline"> l'imprimerie Bahnhofstrasse</a>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Équipement Premium
                </h3>
                <p className="font-asap text-courier-dark">
                  Nos sacs Bagaboo étanches protègent vos envois, même sous la pluie. 
                  Contenance jusqu'à 300 litres pour les vélos-cargos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-courier-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                </div>
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Service Client d'Exception
                </h3>
                <p className="font-asap text-courier-dark">
                  Rapidité, fiabilité et transparence sont nos priorités pour vous offrir
                  un service irréprochable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Future Section */}
      <section className="py-20 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
                Un Avenir Plus Durable
              </h2>
              <div className="space-y-6 text-courier-dark font-asap text-lg">
                <p>
                  Le vélo, c'est l'avenir des villes. Nos livraisons à vélo et vélo-cargo réduisent 
                  le bruit et la pollution à Genève. Nos vélos et vélos-cargos, propulsés à la seule 
                  force des jambes, garantissent des livraisons à faible impact environnemental.
                </p>
                <p>
                  Besoin d'envoyer un colis hors canton ? Nous collaborons avec un partenaire 
                  logistique fiable pour des livraisons partout en Suisse, avec des dépôts 
                  sécurisés dans des wagons CFF dédiés.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="w-full h-96 overflow-hidden rounded-lg">
                <img
                  src="/Rocket-Builder/img/sustainable.jpeg"
                  alt="Livraison Écologique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-courier-accent">
        <div className="container mx-auto px-4">
          <h2 className="font-asap font-extrabold text-section text-courier-dark text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-courier-light border-2 border-courier-dark"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={`/Rocket-Builder/img/${member.image}.jpeg`}
                      alt={`${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-asap font-bold text-lg text-courier-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="font-asap font-semibold text-courier-dark mb-3 opacity-80">
                    {member.role}
                  </p>
                  <p className="font-asap text-courier-dark text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-asap font-extrabold text-section text-courier-dark mb-6">
              Nos Services
            </h2>
            <p className="font-asap text-courier-dark text-xl">
              Rocket Courrier livre à vélo et vélo-cargo dans tout le canton de Genève, jusqu'à Nyon. 
              Vos colis, nos priorités : rapides, fiables, adaptés à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8">
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Délais de livraison
                </h3>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span><strong>Normal :</strong> Livré en 1 heure* au centre-ville.</span>
                  </li>
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span><strong>Rocket :</strong> Ultra-rapide, livré en 30 minutes* en moyenne.</span>
                  </li>
                </ul>
                <p className="font-asap text-courier-dark text-sm italic">
                  *Valable à Genève, Carouge, Acacias (codes postaux 1201 à 1209).
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8">
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Suivi en temps réel
                </h3>
                <p className="font-asap text-courier-dark mb-4">
                  Chaque livraison inclut une preuve de livraison gratuite par e-mail (PDF) avec :
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span>Type de prestation ;</span>
                  </li>
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span>Heure d'enlèvement ;</span>
                  </li>
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span>Heure de livraison ;</span>
                  </li>
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span>Nom et signature du destinataire.</span>
                  </li>
                </ul>
                <p className="font-asap text-courier-dark text-sm italic">
                  Votre historique de livraisons est archivé pendant un an, accessible sur demande.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto mt-8">
            <Card className="border-2 border-courier-dark">
              <CardContent className="p-8">
                <h3 className="font-asap font-bold text-xl text-courier-dark mb-4">
                  Facturation simple
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span><strong>Facture mensuelle :</strong> Récapitulatif clair, règlement sous 30 jours.</span>
                  </li>
                  <li className="flex items-start font-asap text-courier-dark">
                    <div className="w-2 h-2 bg-courier-lime rounded-full mr-3 mt-2"></div>
                    <span><strong>Paiement en espèces :</strong> Directement avec le coursier.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default About;
