import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialSection from "@/components/DifferentialSection";
import ChatWidget from "@/components/ChatWidget";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground font-body">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DifferentialSection />
    <ChatWidget />
  </div>
);

export default Index;
