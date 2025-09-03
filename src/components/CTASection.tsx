import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-courier-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-asap font-extrabold text-section text-courier-light mb-6">
          Passez à l'action !
        </h2>
        <p className="font-asap text-courier-light text-xl mb-8 max-w-3xl mx-auto">
          Avec Rocket Courrier, vos livraisons sont rapides, fiables et respectueuses de vos valeurs. 
          Contactez-nous dès aujourd'hui - par téléphone au 022/ 300.14.14 ou par mail à 
          info@rocket-courrier.ch - pour un service qui fait la différence à Genève !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-courier-light text-courier-light hover:bg-courier-light hover:text-courier-dark font-asap px-8"
          >
            Mail
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-courier-light text-courier-light hover:bg-courier-light hover:text-courier-dark font-asap px-8"
          >
            022 300 14 14
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;