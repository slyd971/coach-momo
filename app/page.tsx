import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSwitcher } from "@/components/hero/HeroSwitcher";
import { BioSection } from "@/components/sections/BioSection";
import { BoxingStylesSection } from "@/components/sections/BoxingStylesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { OfferSection } from "@/components/sections/OfferSection";
import { SocialRail } from "@/components/sections/SocialRail";
import { VideoSection } from "@/components/sections/VideoSection";
import { coachPressKit } from "@/data/coachPressKit";

export default function HomePage() {
  return (
    <main>
      <SiteHeader
        nav={coachPressKit.nav}
        name={coachPressKit.hero.name}
        ctaHref={coachPressKit.hero.ctaHref}
      />
      <HeroSwitcher config={coachPressKit} />
      <SocialRail socials={coachPressKit.socials} />
      <CredibilitySection stats={coachPressKit.credibility} />
      <BioSection bio={coachPressKit.bio} />
      <BoxingStylesSection boxingStyles={coachPressKit.boxingStyles} />
      <VideoSection videos={coachPressKit.videos} />
      <OfferSection offers={coachPressKit.offers} ctaHref={coachPressKit.hero.ctaHref} />
      <ContactSection contact={coachPressKit.contact} />
    </main>
  );
}
