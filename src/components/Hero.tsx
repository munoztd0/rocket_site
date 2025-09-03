import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/Rocket-Builder/img/hero-background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-courier-dark/70 z-10" />

      {/* Hero Text */}
      <div className="text-center px-4 max-w-4xl mx-auto z-20">
        {<h1 className="font-asap font-bold text-courier-light leading-tight mb-8">
          <span className="block text-4xl md:text-6xl lg:text-hero">
            Rocket Courrier
          </span>
        </h1> }

        <p className="text-courier-light text-lg md:text-xl font-asap max-w-2xl mx-auto mb-8">
          Avec Rocket, vos livraisons sont rapides, fiables et respectueuses de vos valeurs. Contactez-nous dès aujourd’hui!
        </p>

        {/* CTA Section incorporated */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-courier-light hover:bg-courier-light/90 text-courier-dark font-asap px-8"
            onClick={() => window.location.href = '/Rocket-Builder/contact'}
          >
            Passez commande
          </Button>
          <Button
            variant="outline"
            size="lg"
            ClassName="bg-courier-light hover:bg-courier-light/90 text-courier-dark font-asap px-8"
            onClick={() => window.location.href = 'tel:+41223001414'}
          >
            022 300 14 14
          </Button>
        </div>
      </div>

      {/* Floating elements for visual interest - made more subtle */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-courier-lime rounded-full opacity-30 animate-pulse z-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-courier-lime rounded-full opacity-20 animate-pulse delay-300 z-20"></div>
    </section>
  );
};

export default Hero;
