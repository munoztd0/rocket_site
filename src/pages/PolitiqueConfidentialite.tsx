import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen font-asap">
      <Header />
      
      <main className="container mx-auto px-4 py-20 mt-16">
        <h1 className="text-4xl font-bold text-courier-dark mb-12">Politique de Confidentialité</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-6">Protection des Données</h2>
          
          <div className="prose prose-lg max-w-none text-courier-dark">
            <p className="mb-4">
              Rocket Courrier s'engage à protéger la vie privée de ses clients et à traiter leurs données personnelles 
              conformément à la législation suisse sur la protection des données.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8">Collecte des Données</h3>
            <p className="mb-4">
              Nous collectons uniquement les données nécessaires à la fourniture de nos services de livraison :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nom et coordonnées des expéditeurs et destinataires</li>
              <li>Adresses de collecte et de livraison</li>
              <li>Numéros de téléphone pour la coordination des livraisons</li>
              <li>Informations de facturation pour les clients réguliers</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">Utilisation des Données</h3>
            <p className="mb-4">
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La réalisation des prestations de livraison</li>
              <li>La facturation des services</li>
              <li>L'amélioration de notre service client</li>
              <li>Le respect de nos obligations légales</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">Conservation des Données</h3>
            <p className="mb-6">
              Les données sont conservées uniquement pendant la durée nécessaire à la réalisation de nos services 
              et conformément aux obligations légales. Pour les clients réguliers, certaines données peuvent être 
              conservées pour faciliter les futures prestations, avec leur accord.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8">Sécurité des Données</h3>
            <p className="mb-6">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout 
              accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8">Vos Droits</h3>
            <p className="mb-4">
              Conformément à la loi, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit d'opposition au traitement de vos données</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 mt-8">Contact</h3>
            <p className="mb-6">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter à :
            </p>
            <p className="mb-2">📞 022 300 14 14</p>
            <p className="mb-6">✉️ info@rocket-courrier.ch</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
