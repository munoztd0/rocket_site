import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import ValuesSection from "@/components/ValuesSection";
// import CTASection from "@/components/CTASection"; // Commented out as CTA is now in Hero
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-asap">
      <Header />
      <Hero />
      <ServicesSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ValuesSection />
      {/* <CTASection /> */} {/* Commented out as CTA is now in Hero */}
      <Footer />
    </div>
  );
};

export default Index;
