import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rankli — Optimisation Google Business Profile en Martinique",
  description:
    "Rankli automatise le SEO local pour les entreprises de Martinique. Audit GBP gratuit, optimisation Google Maps, monitoring mensuel avec IA. Démarrez gratuitement.",
  keywords:
    "SEO local Martinique, Google Business Profile Martinique, fiche Google Martinique, référencement local",
  openGraph: {
    title: "Rankli — SEO Local Automatisé en Martinique",
    description:
      "Boostez votre visibilité sur Google Maps. Audit gratuit, Starter 149€, Boost 99€/mois.",
    url: "https://rankli-nana-corp.vercel.app",
    siteName: "Rankli",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
