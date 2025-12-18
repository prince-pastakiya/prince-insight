import { AboutSection } from "./sections/AboutSection";
import { AchievementsSection } from "./sections/AchievementsSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}

export default PortfolioContent;
