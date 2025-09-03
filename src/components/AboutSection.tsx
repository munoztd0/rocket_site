import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-courier-dark">
            <h2 className="text-4xl font-bold mb-6">
              À Propos
            </h2>
            <div className="space-y-6">
              <p className="text-lg">
                Rocket Courrier a été fondée en 2023 par huit coursiers passionnés à Genève. 
                Notre équipe cumule plus de 80 ans d'expérience pour vous offrir un service 
                rapide, fiable et ancré dans le tissu local.
              </p>
              <p className="text-lg">
                Nos vélos et vélos-cargos, propulsés à la seule force des jambes, garantissent 
                des livraisons à faible impact environnemental. Nous livrons dans tout le canton 
                de Genève, jusqu'à Nyon.
              </p>
              <p className="text-lg">
                Avec Rocket Courrier, vos livraisons sont rapides, fiables et respectueuses 
                de vos valeurs. Contactez-nous dès aujourd'hui pour un service qui fait la 
                différence à Genève !
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/Rocket-Builder/img/messenger_portait.jpeg"
              alt="About Rocket Courrier"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
