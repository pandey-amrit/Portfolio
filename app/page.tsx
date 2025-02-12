import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

