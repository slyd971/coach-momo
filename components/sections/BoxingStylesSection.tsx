import type { CoachPressKit } from "@/data/coachPressKit";

type BoxingStylesSectionProps = {
  boxingStyles: CoachPressKit["boxingStyles"];
};

export function BoxingStylesSection({ boxingStyles }: BoxingStylesSectionProps) {
  return (
    <section className="section boxing-section" id="boxes">
      <div className="section-heading boxing-heading">
        <div>
          <p className="section-kicker">Disciplines</p>
          <h2>
            <span>Types de boxe</span>
            <em>proposes</em>
          </h2>
        </div>
        <p>{boxingStyles.subtitle}</p>
      </div>

      <div className="boxing-grid">
        {boxingStyles.items.map((style, index) => (
          <article className="boxing-card" key={style.name}>
            <span className="boxing-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="boxing-media" aria-hidden="true">
              {style.image ? (
                <img src={style.image} alt="" />
              ) : (
                <strong>{style.name.split(" ")[1]?.slice(0, 2) ?? "BX"}</strong>
              )}
            </div>
            <div className="boxing-body">
              <p>{style.label}</p>
              <h3>{style.name}</h3>
              <span>{style.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
