import { AotiSection } from "@/components/sections/AotiSection";
import { CommercialModelSection } from "@/components/sections/CommercialModelSection";
import { CrisisSection } from "@/components/sections/CrisisSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { DeveloperPlatformSection } from "@/components/sections/DeveloperPlatformSection";
import { FinalStatementSection } from "@/components/sections/FinalStatementSection";
import { GlobalMapSection } from "@/components/sections/GlobalMapSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { KotaSection } from "@/components/sections/KotaSection";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { ObservabilitySection } from "@/components/sections/ObservabilitySection";
import { OtccSection } from "@/components/sections/OtccSection";
import { ProtocolStackSection } from "@/components/sections/ProtocolStackSection";
import { ScenariosSection } from "@/components/sections/ScenariosSection";
import { SecurityDoctrineSection } from "@/components/sections/SecurityDoctrineSection";
import { StandardsSection } from "@/components/sections/StandardsSection";
import { TrustLifecycleSection } from "@/components/sections/TrustLifecycleSection";
import { WhitePapersLibrary } from "@/components/sections/WhitePapersLibrary";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NarrativeSection />
      <CrisisSection />
      <AotiSection />
      <KotaSection />
      <ProtocolStackSection />
      <StandardsSection />
      <SecurityDoctrineSection />
      <TrustLifecycleSection />
      <DeploymentSection />
      <OtccSection />
      <ObservabilitySection />
      <ScenariosSection />
      <GlobalMapSection />
      <WhitePapersLibrary />
      <DeveloperPlatformSection />
      <CommercialModelSection />
      <FinalStatementSection />
    </>
  );
}
