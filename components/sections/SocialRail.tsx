import type { CoachPressKit } from "@/data/coachPressKit";

type SocialRailProps = {
  socials: CoachPressKit["socials"];
};

function SocialIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("whatsapp")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          d="M8.7 18.3l.72-2.55a6.26 6.26 0 1 1 2.62.57 6.46 6.46 0 0 1-1.55-.2L8.7 18.3Z"
          fill="#050505"
          opacity="0.22"
        />
        <path
          d="M15.8 13.9c-.2-.1-1.15-.57-1.33-.63-.18-.07-.31-.1-.44.1-.13.2-.5.63-.61.76-.11.13-.23.15-.42.05-.2-.1-.84-.31-1.61-.97-.6-.53-1-1.17-1.12-1.37-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.46-.16-.39-.32-.34-.44-.35h-.38c-.13 0-.35.05-.53.25-.18.2-.69.67-.69 1.63 0 .97.7 1.89.8 2.02.1.13 1.36 2.09 3.3 2.93.47.2.84.33 1.13.43.47.15.9.13 1.24.08.38-.06 1.16-.47 1.32-.92.16-.45.16-.84.11-.91-.04-.07-.17-.11-.37-.21Z"
          fill="#050505"
        />
      </svg>
    );
  }

  if (normalized.includes("instagram")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes("tiktok")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14.35 5.2c.36 1.18 1.18 2.2 2.26 2.77.58.31 1.22.48 1.89.52v2.5a6.2 6.2 0 0 1-3.67-1.18v4.56a4.74 4.74 0 1 1-4.74-4.74c.23 0 .45.02.67.05v2.59a2.2 2.2 0 1 0 1.56 2.1V5.2h2.03Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4.5 7 6.45 5.1a1.7 1.7 0 0 0 2.1 0L19.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function SocialRail({ socials }: SocialRailProps) {
  return (
    <section className="social-rail" aria-label="Liens rapides">
      <div>
        {socials.map((social) => (
          <a href={social.href} key={social.label} aria-label={social.label}>
            <SocialIcon label={social.label} />
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
