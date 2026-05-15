import type { CoachHero } from "@/data/coachPressKit";

type HeroContentProps = {
  hero: CoachHero;
};

export function HeroContent({ hero }: HeroContentProps) {
  return (
    <div className="hero-copy">
      <h1>{hero.name}</h1>
      <p className="hero-baseline">{hero.baseline}</p>

      <div className="hero-actions" aria-label="Actions principales">
        <a className="hero-cta hero-cta-primary" href={hero.ctaHref}>
          {hero.ctaLabel}
        </a>
        <a className="hero-cta hero-cta-secondary" href={hero.secondaryCtaHref}>
          {hero.secondaryCtaLabel}
        </a>
      </div>
    </div>
  );
}
