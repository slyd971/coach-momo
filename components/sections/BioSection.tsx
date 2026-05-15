import type { CoachPressKit } from "@/data/coachPressKit";

type BioSectionProps = {
  bio: CoachPressKit["bio"];
};

export function BioSection({ bio }: BioSectionProps) {
  return (
    <section className="section section-split" id="bio">
      <div>
        <p className="section-kicker">{bio.eyebrow}</p>
        <h2>{bio.title}</h2>
      </div>

      <div className="bio-panel">
        {bio.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="check-list">
          {bio.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <blockquote>{bio.quote}</blockquote>
      </div>
    </section>
  );
}
