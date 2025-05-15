
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorIntro from "@/components/DoctorIntro";
import WhatIsLipedema from "@/components/WhatIsLipedema";
import Diagnostic from "@/components/Diagnostic";
import Testimonials from "@/components/Testimonials";
import MedicalForm from "@/components/MedicalForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-zambrano-light-blue py-2 text-center">
        <Link to="/emocional">
          <Button variant="link" className="text-zambrano-dark-blue font-medium hover:text-zambrano-dark-blue/80">
            Ver nuestra nueva landing emocional →
          </Button>
        </Link>
      </div>
      <main>
        <Hero />
        <DoctorIntro />
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
