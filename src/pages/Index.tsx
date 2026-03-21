import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyChooseSection from "@/components/landing/WhyChooseSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
