import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const sans = localFont({
  src: "../public/fonts/sans.woff2",
  variable: "--font-inter",
  display: "swap",
});

const display = localFont({
  src: "../public/fonts/display.woff2",
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coach-momar.vercel.app"),
  title: "Coach Momar | Coach sportif & coach de boxe à Abidjan",
  description:
    "Coaching de boxe premium à domicile à Abidjan avec Coach Momar : boxe anglaise, française, thaïlandaise, remise en forme et préparation physique.",
  openGraph: {
    title: "Coach Momar | Coach sportif & coach de boxe à Abidjan",
    description:
      "Séances privées de boxe à domicile à Abidjan. Boxe anglaise, française, thaïlandaise. Coaching personnalisé adapté à tous les niveaux.",
    type: "website",
    locale: "fr_CI",
    siteName: "Coach Momar — Coach de boxe à Abidjan",
    images: [
      {
        url: "/images/bio-profile-momo.png",
        width: 1023,
        height: 1537,
        alt: "Coach Momar, coach de boxe à Abidjan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach Momar | Coach sportif & coach de boxe à Abidjan",
    description:
      "Séances privées de boxe à domicile à Abidjan. Coaching personnalisé, tous niveaux.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Coach Momar — Coach de boxe à Abidjan",
  description:
    "Coaching de boxe premium à domicile à Abidjan : boxe anglaise, française, thaïlandaise, remise en forme et préparation physique.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  telephone: "+221774870835",
  priceRange: "25 000 FCFA",
  knowsAbout: ["Boxe anglaise", "Boxe française", "Boxe thaïlandaise", "Coaching sportif"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
