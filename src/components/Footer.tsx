import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-courier-light">
      {/* Call to Action - Commented out
      <div className="py-20 text-center">
        <h2 className="font-asap font-extrabold text-courier-dark mb-8 leading-tight">
          <span className="block text-4xl md:text-6xl lg:text-hero">
            Demandez un
          </span>
          <span className="block text-4xl md:text-6xl lg:text-hero">
            compte gratuit
          </span>
        </h2>
        <Button
          size="lg"
          className="bg-courier-dark hover:bg-courier-dark/90 text-courier-light font-asap text-lg px-8 py-4"
        >
          Commencer maintenant
        </Button>
      </div>
      */}

      {/* Main Footer Content */}
      <div className="bg-courier-dark">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Logo & Description */}
            <div className="md:col-span-1">
              <Link to="/" className="block mb-4">
                <img
                  src="/Rocket-Builder/logo/logo_blanc.svg"
                  alt="Rocket Courrier"
                  className="h-12 w-auto mb-4"
                />
              </Link>
              <p className="font-asap text-courier-light text-sm leading-relaxed">
                Votre partenaire de livraison durable en ville de.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-asap font-bold text-courier-light text-lg mb-4">
                Liens Rapides
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors"
                  >
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors"
                  >
                    Passez commande
                  </Link>
                </li>
                <li>
                  <Link
                    to="/conditions-generales"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors"
                  >
                    Conditions Générales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/politique-de-confidentialite"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors"
                  >
                    Politique de Confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="font-asap font-bold text-courier-light text-lg mb-4">
                Contact
              </h4>
              <div className="space-y-2 font-asap text-courier-light text-sm">
                <p>Rue du Vélodrome 6</p>
                <p>1205 Genève</p>
                <p>Switzerland</p>
                <p>022 300 14 14</p>
                <p>Lun-Ven 8h – 18h</p>
              </div>
            </div>

            {/* Partner Logos - Commented Out */}
            {/* <div className="md:col-span-1">
              <h4 className="font-asap font-bold text-courier-light text-lg mb-4">
                Nos Partenaires
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-16 h-12 bg-gray-300 rounded flex items-center justify-center"
                  >
                    <span className="text-xs text-gray-600">Logo</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-courier-light/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="font-asap text-courier-light text-sm">
                  © 2024 Rocket Courrier. Tous droits réservés.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="/conditions-generales"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors text-sm"
                  >
                    Conditions générales
                  </Link>
                  <Link
                    to="/politique-de-confidentialite"
                    className="font-asap text-courier-light hover:text-courier-lime transition-colors text-sm"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </div>

              {/* Made with love */}
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-courier-light text-sm">
                  Made with love by David Munoz Tord
                </span>
                <a
                  href="https://github.com/munoztd0/Rocket-Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-courier-light hover:text-courier-lime transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
