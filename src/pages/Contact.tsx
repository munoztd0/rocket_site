import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      title: "Téléphone",
      details: "022 300 14 14",
      icon: "📞",
    },
    {
      title: "Email",
      details: "info@rocket-courrier.ch",
      icon: "✉️",
    },
    {
      title: "Adresse",
      details: "13 bvd du pont d'arve\n1205 Genève\nSwitzerland",
      icon: "📍",
    },
    {
      title: "Horaires",
      details: "Lun-Ven: 8h – 18h\n",
      icon: "🕒",
    },
  ];

  return (
    <div className="min-h-screen font-asap">
      <Header />

      {/* Hero Section */}
      <section className="bg-courier-accent pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-asap font-extrabold text-courier-dark mb-6">
            <span className="block text-4xl md:text-6xl">Contactez-nous</span>
          </h1>
          <p className="text-courier-light text-lg md:text-xl max-w-2xl mx-auto">
            Vous avez besoin que quelque chose soit livré quelque part tout de suite ?
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-courier-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Commandez votre course</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/info@rocket-courrier.ch"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://rocket-courrier.ch/merci" />
                <input type="hidden" name="_subject" value="Nouvelle demande de course" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                {/* Billing Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Information de facturation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Nom de l'entreprise</Label>
                      <Input
                        id="company"
                        name="Nom de l'entreprise"
                        placeholder="Nom qui sera sur votre facture"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-email">Email de facturation</Label>
                      <Input
                        id="billing-email"
                        name="Email de facturation"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Où allons-nous chercher l'envoie ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup-name">Nom</Label>
                      <Input id="pickup-name" name="Nom pickup" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-company">Nom de l'entreprise</Label>
                      <Input id="pickup-company" name="Nom de l'entreprise pickup" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-phone">Téléphone</Label>
                      <Input id="pickup-phone" name="Téléphone pickup" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-address">Adresse (rue, numéro)</Label>
                      <Input id="pickup-address" name="Adresse pickup" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-postal">Code postal</Label>
                      <Input id="pickup-postal" name="code postal pickup" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-info">Information supplémentaire</Label>
                      <Input id="pickup-info" name="Information supplémentaire: Pickup" />
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Où va-t-il ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="delivery-name">Nom</Label>
                      <Input id="delivery-name" name="Nom drop" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-company">Nom de l'entreprise</Label>
                      <Input id="delivery-company" name="Nom de l'entreprise drop" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-phone">Téléphone</Label>
                      <Input id="delivery-phone" name="Téléphone drop" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-address">Adresse (rue, numéro)</Label>
                      <Input id="delivery-address" name="Adresse drop" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-postal">Code postal</Label>
                      <Input id="delivery-postal" name="code postal drop" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-info">Information supplémentaire</Label>
                      <Input id="delivery-info" name="Information supplémentaire: drop" />
                    </div>
                  </div>
                </div>

                {/* Package Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Que devrions-nous savoir de plus ?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Poids (en kg)</Label>
                      <Input id="weight" name="poids (en kg)" type="number" step="0.1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions (L x l x H en cm)</Label>
                      <Input id="dimensions" name="dimensions" placeholder="30 x 20 x 15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickup-time">Prêt à partir de</Label>
                      <Input id="pickup-time" name="Prêt à partir de" type="datetime-local" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="delivery-time">Heure de livraison maximum souhaitée</Label>
                      <Input id="delivery-time" name="Heure de livraison maximum souhaitée" type="datetime-local" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Autre chose à noter</Label>
                    <Textarea
                      id="notes"
                      name="autre"
                      placeholder="Fragile ? Un retour ?"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" name="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte les{" "}
                      <Link to="/conditions-generales" className="text-courier-dark hover:underline">
                        conditions générales
                      </Link>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
