import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Merci = () => {
  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Merci !</span>
          </h1>
          <p className="text-courier-light text-lg md:text-xl max-w-2xl mx-auto">
            Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 bg-courier-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Votre commande est en cours de traitement</h2>
            <p className="mb-6">
              Nous avons bien reçu votre demande et nous allons la traiter dans les plus brefs délais.
              Un membre de notre équipe vous contactera prochainement pour confirmer les détails de votre livraison.
            </p>
            <p className="mb-8">
              Si vous avez des questions ou besoin d'informations supplémentaires, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap px-8 py-2 rounded-md inline-flex items-center justify-center h-11"
              >
                Retour à l'accueil
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="bg-courier-light hover:bg-courier-light/90 text-courier-dark font-asap px-8"
                onClick={() => window.location.href = 'tel:+41223001414'}
              >
                022 300 14 14
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Merci;