'use client'

import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { ExperienceEducationSection } from '@/components/sections/experience-section'
import { HeroSection } from '@/components/sections/hero'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ServicesSection } from '@/components/sections/services-section'
import { SkillsSection } from '@/components/sections/skills-section'
import React from 'react'

const PageContainer = () => {
  return (
    <main className="w-full px-[10rem] min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

export default PageContainer