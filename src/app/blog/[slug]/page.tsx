import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://rankli.nanocorp.app/blog/${post.slug}`,
      siteName: "Rankli",
      locale: "fr_FR",
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

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

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-4 py-4 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-700">
          Accueil
        </Link>
        {" / "}
        <Link href="/blog" className="hover:text-gray-700">
          Blog
        </Link>
        {" / "}
        <span className="text-gray-700">{post.title.substring(0, 40)}...</span>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 pb-16">
        {/* Article header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.keywords.slice(0, 3).map((kw) => (
              <span
                key={kw}
                className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
            <time dateTime={post.date}>
              Publié le{" "}
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime} de lecture</span>
            <span>·</span>
            <span>Par l&apos;équipe Rankli</span>
          </div>
        </header>

        {/* Table of contents */}
        {post.sections.filter((s) => s.heading).length > 0 && (
          <nav className="bg-emerald-50 rounded-xl p-5 mb-10">
            <p className="font-semibold text-gray-900 mb-3 text-sm">
              Sommaire
            </p>
            <ol className="space-y-1.5">
              {post.sections
                .filter((s) => s.heading)
                .map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
            </ol>
          </nav>
        )}

        {/* Article content */}
        <div className="prose-custom">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              {section.heading && section.level === 2 && (
                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
                  {section.heading}
                </h2>
              )}
              {section.heading && section.level === 3 && (
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                  {section.heading}
                </h3>
              )}
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {section.listItems.map((item, i) => {
                    const colonIndex = item.indexOf(" : ");
                    const hasBold = colonIndex !== -1;
                    const boldPart = hasBold ? item.substring(0, colonIndex) : null;
                    const restPart = hasBold ? item.substring(colonIndex + 3) : item;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-gray-700 text-base leading-relaxed">
                          {hasBold ? (
                            <>
                              <strong className="text-gray-900">{boldPart}</strong>
                              {" : "}
                              {restPart}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Obtenez votre audit gratuit maintenant
          </h2>
          <p className="text-emerald-100 mb-6 max-w-lg mx-auto">
            Découvrez en 2 minutes le score de visibilité locale de votre
            entreprise et les 3 actions prioritaires pour apparaître en tête
            des résultats Google en Martinique.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-lg"
          >
            Demander mon audit gratuit →
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Retour au blog
          </Link>
        </div>
      </article>

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
