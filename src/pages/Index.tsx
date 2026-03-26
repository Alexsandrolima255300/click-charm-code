import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import DifferentialSection from "@/components/DifferentialSection";
import ContactSection from "@/components/ContactSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground font-body">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <DifferentialSection />
    <ContactSection />
    <ChatWidget />
  </div>
);

export default Index;
