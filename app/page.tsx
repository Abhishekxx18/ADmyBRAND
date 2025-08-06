import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import Faq from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Faq />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
