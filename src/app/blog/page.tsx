import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog SEO Local Martinique | Rankli",
  description:
    "Conseils et guides pour améliorer votre référencement local en Martinique. Google Business Profile, Google Maps, avis clients... Devenez visible sur Google.",
  keywords: "blog SEO Martinique, référencement local Martinique, Google Maps Martinique",
  openGraph: {
    title: "Blog SEO Local Martinique | Rankli",
    description:
      "Conseils et guides pour améliorer votre référencement local en Martinique.",
    url: "https://rankli.nanocorp.app/blog",
    siteName: "Rankli",
    locale: "fr_FR",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Rankli
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/#comment" className="hover:text-gray-900">
              Comment ça marche
            </Link>
            <Link href="/#tarifs" className="hover:text-gray-900">
              Tarifs
            </Link>
            <Link href="/blog" className="hover:text-emerald-600 font-medium text-emerald-600">
              Blog
            </Link>
            <Link
              href="/audit"
              className="hover:text-emerald-600 font-medium text-emerald-600"
            >
              Audit Gratuit
            </Link>
          </nav>
          <Link
            href="/audit"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Audit Express Gratuit
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            🌴 Ressources SEO local
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Le blog SEO de Rankli
          </h1>
          <p className="text-xl text-gray-600">
            Guides pratiques pour améliorer votre visibilité sur Google en Martinique.
            Des conseils concrets, adaptés au marché local.
          </p>
        </div>
      </section>

      {/* Articles list */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime} de lecture</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.slice(0, 2).map((kw) => (
                      <span
                        key={kw}
                        className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1"
                  >
                    Lire l&apos;article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Prêt à appliquer ces conseils ?
            </h2>
            <p className="text-emerald-100 mb-6">
              Commencez par un audit gratuit de votre visibilité locale. Obtenez
              votre score et vos recommandations prioritaires en 2 minutes.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
            >
              Demander mon audit gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2025 Rankli — SEO local en Martinique. Tous droits réservés.</p>
        <p className="mt-1">
          <a href="mailto:contact@rankli.fr" className="hover:text-white">
            contact@rankli.fr
          </a>
        </p>
      </footer>
    </main>
  );
}
