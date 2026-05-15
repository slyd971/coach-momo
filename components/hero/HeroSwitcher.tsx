import { HeroClassic } from "@/components/hero/HeroClassic";
import { HeroVideo } from "@/components/hero/HeroVideo";
import type { CoachPressKit } from "@/data/coachPressKit";

type HeroSwitcherProps = {
  config: CoachPressKit;
};

export function HeroSwitcher({ config }: HeroSwitcherProps) {
  if (config.heroVariant === "video") {
    return <HeroVideo hero={config.hero} />;
  }

  return <HeroClassic hero={config.hero} />;
}
