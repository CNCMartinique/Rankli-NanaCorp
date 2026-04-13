import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rankli — Visibilité locale en Martinique",
  description: "Boostez la visibilité de votre entreprise locale en Martinique avec Rankli. Audit SEO gratuit, suivi de classement et optimisation Google Business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
