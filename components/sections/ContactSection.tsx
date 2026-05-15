import type { CoachPressKit } from "@/data/coachPressKit";

type ContactSectionProps = {
  contact: CoachPressKit["contact"];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>{contact.title}</h2>
          <p>{contact.subtitle}</p>
          <p className="contact-reassurance">
            Réponse directe, format clair, séance adaptée au niveau réel.
          </p>
        </div>

        <div className="contact-panel">
          <dl>
            <div>
              <dt>Téléphone</dt>
              <dd>{contact.phone}</dd>
            </div>
            <div>
              <dt>Zone</dt>
              <dd>{contact.location}</dd>
            </div>
            <div>
              <dt>Disponibilité</dt>
              <dd>{contact.availability}</dd>
            </div>
          </dl>
          <a className="hero-cta hero-cta-primary" href={contact.whatsapp}>
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
