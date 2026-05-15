export type HeroVariant = "classic" | "video";

export type HeroQuickInfo = {
  label: string;
  value: string;
};

export type VideoItem = {
  title: string;
  description: string;
  src?: string;
  poster?: string;
  duration: string;
  label: string;
};

export type OfferItem = {
  title: string;
  price: string;
  label: string;
  description: string;
  features: string[];
};

export type BoxingStyle = {
  name: string;
  label: string;
  description: string;
  image?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type CredibilityStat = {
  value: string;
  label: string;
  detail: string;
};

export type CoachHero = {
  name: string;
  baseline: string;
  eyebrow: string;
  badge: string;
  mediaLabel: string;
  heroImage: string;
  heroVideo?: string;
  heroFallbackImage?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  quickInfos: HeroQuickInfo[];
};

export type CoachPressKit = {
  heroVariant: HeroVariant;
  nav: Array<{
    label: string;
    href: string;
  }>;
  hero: CoachHero;
  socials: SocialLink[];
  credibility: CredibilityStat[];
  galleryImages: string[];
  bio: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
    quote: string;
    philosophie: {
      quote: string;
      text: string;
    };
  };
  videos: {
    title: string;
    subtitle: string;
    items: VideoItem[];
  };
  boxingStyles: {
    title: string;
    subtitle: string;
    items: BoxingStyle[];
  };
  offers: {
    title: string;
    subtitle: string;
    items: OfferItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    whatsapp: string;
    location: string;
    availability: string;
  };
};

export const coachPressKit: CoachPressKit = {
  // Change this value to switch between the split classic hero and the immersive video hero.
  // Empty media fields intentionally render premium placeholders until final assets arrive.
  heroVariant: "video",
  nav: [
    { label: "Bio", href: "#bio" },
    { label: "Boxes", href: "#boxes" },
    { label: "Videos", href: "#videos" },
    { label: "Offres", href: "#offres" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Momo Diop",
    baseline: "Coach sportif & coach de boxe",
    eyebrow: "Fight night standard",
    badge: "1:1 coaching privé",
    mediaLabel: "Media placeholder / assets coming soon",
    heroImage: "",
    heroVideo: "/videos/web/hero-coach-momo.mp4",
    heroFallbackImage: "/images/video-posters/coach-private.jpg",
    ctaLabel: "Réserver une séance",
    ctaHref: "#contact",
    secondaryCtaLabel: "Voir les offres",
    secondaryCtaHref: "#offres",
    quickInfos: [
      { label: "Ville", value: "Abidjan & coaching à domicile" },
      { label: "Expérience", value: "Plus de 10 ans" },
      { label: "Spécialités", value: "Boxe anglaise, française, thaïlandaise" },
    ],
  },
  socials: [
    { label: "WhatsApp", href: "https://wa.me/221774870835" },
    { label: "Instagram", href: "https://www.instagram.com/momarjr_/" },
    { label: "Email", href: "mailto:Momardiop992@gmail.com" },
  ],
  credibility: [
    {
      value: "10+",
      label: "ans dans la boxe",
      detail: "expérience terrain, technique et préparation physique",
    },
    {
      value: "1:1",
      label: "coaching personnalisé",
      detail: "chaque séance s'adapte au niveau et à l'objectif",
    },
    {
      value: "3",
      label: "disciplines proposées",
      detail: "anglaise, française et thaïlandaise",
    },
    {
      value: "Abidjan",
      label: "à domicile ou en salle",
      detail: "séances privées sur rendez-vous",
    },
  ],
  galleryImages: [],
  bio: {
    eyebrow: "Bio",
    title: "Un coach de boxe exigeant, humain et orienté résultats.",
    paragraphs: [
      "Passionné de sport et de dépassement de soi, Momo Diop évolue dans l'univers de la boxe depuis 2010. Son approche mélange technique, condition physique et mental de compétition.",
      "Il accompagne des débutants, intermédiaires et profils confirmés avec des séances personnalisées à domicile, adaptées au niveau, au rythme et aux objectifs de chacun.",
    ],
    highlights: [
      "Parcours compétitif et expérience terrain",
      "Formation de coach pour un accompagnement sécurisé",
      "Séances privées à domicile, en extérieur ou en salle",
    ],
    quote:
      "La boxe ne transforme pas seulement le corps, elle forge aussi la discipline, la confiance et le mental.",
    philosophie: {
      quote:
        "La boxe ne transforme pas seulement le corps, elle forge également le mental. Chaque entraînement est une occasion de devenir plus fort, plus discipliné et plus confiant.",
      text: "Momo Diop met un point d'honneur à transmettre la discipline, le respect, la motivation et la confiance à travers chaque entraînement.",
    },
  },
  videos: {
    title: "Ambiance entraînement",
    subtitle:
      "Extraits de séances, travail aux pattes d'ours, cardio boxing et coaching privé.",
    items: [
      {
        title: "Travail technique",
        description: "Précision des appuis, enchaînements et corrections en direct.",
        label: "Technique",
        src: "/videos/web/coach-technique.mp4",
        poster: "/images/video-posters/coach-technique.jpg",
        duration: "00:16",
      },
      {
        title: "Cardio boxing",
        description: "Une séance intense pour brûler, transpirer et progresser.",
        label: "Conditioning",
        src: "/videos/web/coach-cardio.mp4",
        poster: "/images/video-posters/coach-cardio.jpg",
        duration: "00:16",
      },
      {
        title: "Coaching privé",
        description: "Accompagnement personnalisé, rythme adapté et objectif clair.",
        label: "Private session",
        src: "/videos/web/coach-private.mp4",
        poster: "/images/video-posters/coach-private.jpg",
        duration: "00:16",
      },
    ],
  },
  boxingStyles: {
    title: "Types de boxe proposés",
    subtitle:
      "Trois disciplines pour construire une base technique solide, gagner en condition et progresser avec un cadre clair.",
    items: [
      {
        name: "Boxe anglaise",
        label: "Punching / appuis / défense",
        image: "/images/boxing-styles/boxe-anglaise.jpg",
        description:
          "Techniques de poings, déplacements, esquives, rythme et condition physique.",
      },
      {
        name: "Boxe française",
        label: "Savate / précision / coordination",
        image: "/images/boxing-styles/boxe-francaise.jpg",
        description:
          "Travail pieds-poings, distance, équilibre et enchaînements fluides.",
      },
      {
        name: "Boxe thaï",
        label: "Puissance / pieds / genoux",
        image: "/images/boxing-styles/boxe-thailandaise.jpg",
        description:
          "Techniques de poings, pieds, coudes et genoux pour un travail complet.",
      },
    ],
  },
  offers: {
    title: "Offres coaching",
    subtitle:
      "Des formats simples pour reprendre le contrôle, progresser en boxe et retrouver une condition physique solide.",
    items: [
      {
        title: "Séance découverte",
        price: "Gratuite",
        label: "Idéal pour commencer",
        description: "Un premier échange pour comprendre ton objectif, ton niveau et le format adapté.",
        features: [
          "Analyse de ton objectif",
          "Évaluation du niveau",
          "Conseils d'orientation",
          "Plan de démarrage clair",
        ],
      },
      {
        title: "Coaching à domicile",
        price: "25.000 FCFA",
        label: "Le plus demandé",
        description: "La séance privée personnalisée directement chez toi, adaptée à ton objectif.",
        features: [
          "Remise en forme",
          "Perte de poids",
          "Renforcement musculaire",
          "Initiation et perfectionnement boxe",
        ],
      },
      {
        title: "Pack transformation",
        price: "Sur devis",
        label: "Accompagnement complet",
        description: "Un accompagnement régulier pour installer discipline et résultats.",
        features: [
          "Programme structuré",
          "Suivi hebdomadaire",
          "Objectifs physiques et mentaux",
          "Priorités claires entre les séances",
        ],
      },
    ],
  },
  contact: {
    title: "Prêt à dépasser tes limites ?",
    subtitle:
      "Contacte Momo pour réserver une séance, parler de ton objectif et choisir le bon format.",
    phone: "+225 01 41 34 20 60",
    whatsapp: "https://wa.me/2250141342060",
    location: "Abidjan et alentours",
    availability: "Séances sur rendez-vous, à domicile ou en extérieur",
  },
};
