import type { CoachPressKit } from "@/data/coachPressKit";

type OfferSectionProps = {
  offers: CoachPressKit["offers"];
  ctaHref: string;
};

export function OfferSection({ offers, ctaHref }: OfferSectionProps) {
  return (
    <section className="section" id="offres">
      <div className="section-heading">
        <p className="section-kicker">Programmes</p>
        <h2>{offers.title}</h2>
        <p>{offers.subtitle}</p>
      </div>

      <div className="offer-grid">
        {offers.items.map((offer, index) => (
          <article className={index === 1 ? "offer-card offer-card-featured" : "offer-card"} key={offer.title}>
            <span className="offer-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="offer-label">{offer.label}</p>
              <h3>{offer.title}</h3>
              <p className="offer-price">{offer.price}</p>
              <p>{offer.description}</p>
            </div>
            <ul className="check-list">
              {offer.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="hero-cta hero-cta-primary" href={ctaHref}>
              Choisir ce format
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
