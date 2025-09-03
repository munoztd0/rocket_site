import { cn } from "@/lib/utils";

const ValuesSection = () => {
  return (
    <section className="bg-courier-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/Rocket-Builder/img/sustainable.jpeg" 
              alt="Our Values"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-courier-light">
            <h2 className="text-4xl font-bold mb-6">Nos Valeurs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Local et engagé</h3>
                <p>
                  Nous soutenons l'économie genevoise avec des partenaires locaux comme la Banque Alternative Suisse, 
                  deeps, Dr Paper & Mister Tee, et l'imprimerie Bahnhofstrasse.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Service client d'exception</h3>
                <p>
                  Rapidité, fiabilité et transparence sont nos priorités pour vous offrir
                  un service irréprochable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Un avenir plus durable</h3>
                <p>
                  Le vélo, c'est l'avenir des villes. Nos livraisons à vélo et vélo-cargo réduisent 
                  le bruit et la pollution à Genève.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
