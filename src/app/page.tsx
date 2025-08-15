import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceEducationSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";


export default function Home() {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <HeroSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection/>
    </main>
  )
}
