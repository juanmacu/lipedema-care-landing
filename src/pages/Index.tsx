
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsLipedema from "@/components/WhatIsLipedema";
import Diagnostic from "@/components/Diagnostic";
import Testimonials from "@/components/Testimonials";
import MedicalForm from "@/components/MedicalForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatIsLipedema />
        <Diagnostic />
        <Testimonials />
        <MedicalForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
