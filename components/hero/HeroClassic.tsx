import { HeroContent } from "@/components/hero/HeroContent";
import type { CoachHero } from "@/data/coachPressKit";

type HeroClassicProps = {
  hero: CoachHero;
};

export function HeroClassic({ hero }: HeroClassicProps) {
  return (
    <section className="hero hero-classic" aria-label="Presentation du coach">
      {hero.heroImage ? (
        <img className="hero-background" src={hero.heroImage} alt="" aria-hidden="true" />
      ) : null}
      <div className="hero-overlay" />
      <div className="hero-texture" />
      <div className="hero-editorial-frame" aria-hidden="true">
        <span>01 / private coaching</span>
        <span>Abidjan</span>
        <span>media slot</span>
      </div>

      <div className="hero-inner hero-classic-inner">
        <div className="hero-portrait-frame">
          {hero.heroImage ? (
            <img src={hero.heroImage} alt={hero.name} />
          ) : (
            <div className="media-placeholder media-placeholder-portrait">
              <span>{hero.mediaLabel}</span>
              <strong>BOXING</strong>
              <small>Portrait / action photo</small>
            </div>
          )}
        </div>
        <HeroContent hero={hero} />
      </div>
    </section>
  );
}
