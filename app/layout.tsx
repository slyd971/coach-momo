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
  title: "Momo Diop | Coach sportif & coach de boxe",
  description:
    "Coaching de boxe premium a domicile a Abidjan avec Momo Diop : boxe anglaise, francaise, thailandaise, remise en forme et preparation physique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
