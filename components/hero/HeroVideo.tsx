import { HeroContent } from "@/components/hero/HeroContent";
import type { CoachHero } from "@/data/coachPressKit";

type HeroVideoProps = {
  hero: CoachHero;
};

export function HeroVideo({ hero }: HeroVideoProps) {
  const poster = hero.heroFallbackImage || hero.heroImage;
  const videoSrc = hero.heroVideo;

  return (
    <section className="hero hero-video" aria-label="Presentation video du coach">
      {videoSrc ? (
        <video
          className="hero-background hero-video-media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={`${hero.name} en entrainement`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="hero-background hero-video-placeholder">
          <span>{hero.mediaLabel}</span>
          <strong>Video coming soon</strong>
        </div>
      )}
      {poster ? <img className="hero-fallback" src={poster} alt="" aria-hidden="true" /> : null}
      <div className="hero-overlay" />
      <div className="hero-texture" />
<div className="hero-inner hero-video-inner">
        <HeroContent hero={hero} />
      </div>
    </section>
  );
}
