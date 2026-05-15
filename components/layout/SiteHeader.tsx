import type { CoachPressKit } from "@/data/coachPressKit";

type SiteHeaderProps = {
  nav: CoachPressKit["nav"];
  name: string;
  ctaHref: string;
};

export function SiteHeader({ nav, name, ctaHref }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navigation principale">
        <a className="brand-mark" href="#" aria-label="Retour en haut">
          <span>{name}</span>
          <small>Coach de boxe</small>
        </a>

        <div className="nav-links">
          {nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-booking" href={ctaHref}>
            Booking
          </a>
        </div>
      </nav>
    </header>
  );
}
