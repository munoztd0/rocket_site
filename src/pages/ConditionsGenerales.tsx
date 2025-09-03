import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ConditionsGenerales = () => {
  return (
    <div className="min-h-screen font-asap">
      <Header />

      <main className="container mx-auto px-4 py-20 mt-16">
        <h1 className="text-4xl font-bold text-courier-dark mb-12">Conditions Générales</h1>

        {/* 1. Rocket courrier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">1. Rocket courrier</h2>
          <p className="mb-4">
            Ci-après dénommés « le transporteur », proposent un service de livraison par coursier à vélo en Suisse. 
            Les présentes conditions générales (CG) régissent la relation entre le transporteur et l'expéditeur (client ou mandant) 
            pour toute commande de transport national. En passant commande, l'expéditeur accepte ces CG. 
            Le contrat est conclu dès l'acceptation de la commande par le transporteur et reste valable jusqu'à la livraison de l'envoi.
          </p>
        </section>

        {/* 2. Commande, adressage et emballage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">2. Commande, adressage et emballage</h2>
          <p className="mb-4">
            La commande doit être effectuée par téléphone ou par écrit (y compris par voie électronique) et inclure toutes les informations 
            nécessaires à la livraison, notamment les consignes relatives aux marchandises réglementées (ex. : matières dangereuses), 
            fragiles, de grande valeur ou nécessitant une manipulation particulière. L'expéditeur est responsable de l'exactitude, 
            de la complétude et de la lisibilité des informations d'adressage. Les marchandises doivent être protégées par un emballage adapté. 
            Le transporteur peut facturer des frais supplémentaires pour les envois nécessitant un traitement particulier ou en cas de non-conformité.
          </p>
        </section>

        {/* 3. Prise en charge */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">3. Prise en charge</h2>
          <p className="mb-4">
            L'envoi doit être remis dans un état permettant son transport. Le transporteur se réserve le droit de refuser les envois 
            non conformes aux indications fournies lors de la commande. Les coûts découlant d'un refus ou d'un traitement supplémentaire 
            sont facturés à l'expéditeur.
          </p>
        </section>

        {/* 4. Responsabilité du transporteur */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">4. Responsabilité du transporteur</h2>
          <p className="mb-4">
            Le transporteur est responsable des dommages survenus entre la prise en charge et la livraison, sous réserve de son droit 
            de refuser une commande. La responsabilité est exclue dans les cas suivants :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Dégâts dus à un emballage insuffisant ou inapproprié ;</li>
            <li>Dommages ou carences des marchandises dans des caisses, cartons ou conteneurs dont l'état n'a pas pu être vérifié à la prise en charge ;</li>
            <li>Cas de force majeure ;</li>
            <li>Transport d'objets précieux (or, argent, bijoux, montres, pierres précieuses, chèques) ;</li>
            <li>Dommages électriques ou magnétiques, destruction ou dégâts aux disques magnétiques, supports électroniques ou photographiques ;</li>
            <li>Envois déposés sans signature à la demande expresse de l'expéditeur ;</li>
            <li>Dégâts indirects.</li>
          </ul>
          <p className="mb-4">
            Sans indication écrite de la valeur des marchandises, la responsabilité pour perte ou dommage est limitée à la valeur réelle 
            de l'objet, avec un maximum de CHF 500.- par commande.
          </p>
        </section>

        {/* 5. Assurance de transport */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">5. Assurance de transport</h2>
          <p className="mb-4">
            L'expéditeur peut souscrire une assurance pour les dommages ou pertes, à condition d'en faire la demande écrite avant la prise en charge.
            La valeur assurable maximale est de CHF 20'000.- par envoi*. 
            Les marchandise peuvent uniquement être assurées du lundi au vendredi entre 08:00 et 18:00 heure.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Ne peuvent être assurés les espèces, les titres et les chèques au porteur. Il en va de même pour les bons d'achat.</li>
            <li>Pour les bijoux, seules les montres peuvent être assurées, pas les pierres précieuses, bagues, colliers, bracelets et autres bijoux.</li>
          </ul>
          <p className="mb-4">
            Des frais supplémentaires s'appliquent lors d'une couverture d'assurance spéciale.
          </p>
          <p className="mb-4">
            Sans cette demande, la responsabilité reste limitée comme stipulé à l'article 4.
          </p>
        </section>

        {/* 6. Dépassement du délai de livraison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">6. Dépassement du délai de livraison</h2>
          <p className="mb-4">
            Les dommages dus à un retard de livraison ne sont indemnisés que si la responsabilité a été préalablement convenue. 
            L'indemnisation est limitée à la moitié du prix du transport convenu, sous réserve de justification du dommage.
          </p>
        </section>

        {/* 7. Contrôle et acceptation de la livraison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">7. Contrôle et acceptation de la livraison</h2>
          <p className="mb-4">
            Les réclamations pour dommages ou marchandises manquantes doivent être signalées immédiatement sur le bulletin de livraison 
            en présence du coursier ou, pour les dommages non visibles, par écrit dans les 8 jours suivant la livraison 
            (art. 452, Code des obligations suisse). Les réclamations doivent être envoyées à info@rocket-courrier.ch. 
            Toute personne présente au domicile ou au siège du destinataire est autorisée à réceptionner l'envoi. 
            Le refus d'acceptation n'est possible qu'en cas de remise personnelle.
          </p>
        </section>

        {/* 8. Interdiction de compensation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">8. Interdiction de compensation</h2>
          <p className="mb-4">
            L'imputation des dommages sur le montant de la commande est exclue.
          </p>
        </section>

        {/* 9. Obligation de paiement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">9. Obligation de paiement</h2>
          <p className="mb-4">
            À la prise en charge, l'expéditeur s'engage à payer la livraison au tarif en vigueur ou garantit le paiement par le destinataire 
            ou un tiers. Les factures, émises en fin de mois, doivent être réglées sous 30 jours. En cas de retard, des frais supplémentaires 
            peuvent être facturés.
          </p>
        </section>

        {/* 10. Annulation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">10. Annulation</h2>
          <p className="mb-4">
            L'annulation d'une commande avant prise en charge entraîne le paiement de 50% du tarif. Après prise en charge, le montant total est dû.
          </p>
        </section>

        {/* 11. Envois non distribuables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">11. Envois non distribuables</h2>
          <p className="mb-4">
            Sont considérés comme non distribuables les envois dont le destinataire est introuvable ou qui sont refusés. 
            Ces envois sont retournés à l'expéditeur à ses frais, sans remboursement du prix initial.
          </p>
        </section>

        {/* 12. Sous-traitance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">12. Sous-traitance</h2>
          <p className="mb-4">
            Le transporteur peut recourir à des tiers pour exécuter ses prestations, en informant l'expéditeur du mode de transport.
          </p>
        </section>

        {/* 13. Modification des conditions générales */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">13. Modification des conditions générales</h2>
          <p className="mb-4">
            Le transporteur se réserve le droit de modifier ces CG à tout moment.
          </p>
        </section>

        {/* 14. Caractère dissociable des dispositions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">14. Caractère dissociable des dispositions</h2>
          <p className="mb-4">
            L'invalidité d'une disposition n'affecte pas la validité des autres.
          </p>
        </section>

        {/* 15. Droit applicable et for */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">15. Droit applicable et for</h2>
          <p className="mb-4">
            Ces CG sont régies par le droit suisse. Le for juridique est Genève.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-courier-dark mb-4">Contact</h2>
          <p className="mb-2">Pour toute question :</p>
          <p className="mb-1">📞 022 300 14 14</p>
          <p className="mb-4">✉️ info@rocket-courrier.ch</p>
        </section>

        <p className="text-center text-courier-dark italic">
          Merci de faire confiance à Rocket Courrier — votre partenaire logistique de proximité.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsGenerales;
