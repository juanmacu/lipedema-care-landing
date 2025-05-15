
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DoctorIntro from "@/components/DoctorIntro";
import WhatIsLipedema from "@/components/WhatIsLipedema";
import Diagnostic from "@/components/Diagnostic";
import Testimonials from "@/components/Testimonials";
import MedicalForm from "@/components/MedicalForm";
import FAQ from "@/components/FAQ";
import Procedures from "@/components/Procedures";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Agenda from "@/components/Agenda";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <DoctorIntro />
        <WhatIsLipedema />
        <Diagnostic />
        <Procedures />
        <Testimonials />
        <FAQ />
        <Location />
        <Contact />
        <Agenda />
        <MedicalForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
