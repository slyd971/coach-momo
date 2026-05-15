import type { CoachPressKit } from "@/data/coachPressKit";

type BioSectionProps = {
  bio: CoachPressKit["bio"];
};

export function BioSection({ bio }: BioSectionProps) {
  return (
    <section className="section bio-section" id="bio">
      <div className="bio-left">
        <p className="section-kicker">{bio.eyebrow}</p>
        <h2>{bio.title}</h2>

        {bio.paragraphs.map((paragraph) => (
          <p key={paragraph} className="bio-paragraph">{paragraph}</p>
        ))}

        <ul className="check-list">
          {bio.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="bio-philosophie">
          <p className="section-kicker">Philosophie</p>
          <blockquote className="bio-philosophie-quote">{bio.philosophie.quote}</blockquote>
          <p className="bio-philosophie-text">{bio.philosophie.text}</p>
        </div>
      </div>

      <figure className="bio-portrait">
        <img src="/images/bio-profile-momo.png" alt="Coach Momar, coach de boxe à Abidjan" />
      </figure>
    </section>
  );
}
