const STRIPE_PAYMENT_URL = "https://buy.stripe.com/fZu28sa5Cg1pgXgakPeOo2r";

const plans = [
  {
    name: "Audit Express",
    price: "Gratuit",
    period: "",
    description: "Découvrez votre score de visibilité locale en 2 minutes",
    features: [
      "Audit Google Business Profile",
      "Score de visibilité locale",
      "3 recommandations prioritaires",
      "Rapport PDF téléchargeable",
    ],
    cta: "Commencer gratuitement",
    href: "/audit",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "149€",
    period: "une fois",
    description: "Optimisation complète de votre présence locale",
    features: [
      "Tout de l'Audit Express",
      "Optimisation Google Business Profile",
      "Création / correction des fiches annuaires",
      "Rapport détaillé avec plan d'action",
      "1 mois de suivi des positions",
      "Support par email",
    ],
    cta: "Choisir Starter",
    href: STRIPE_PAYMENT_URL,
    highlighted: true,
  },
  {
    name: "Boost",
    price: "99€",
    period: "/mois",
    description: "Dominez les recherches locales en continu",
    features: [
      "Tout du Starter",
      "Suivi mensuel des positions",
      "Optimisation continue du contenu",
      "Gestion des avis clients",
      "Rapports mensuels détaillés",
      "Support prioritaire",
      "Appel mensuel de 30 min",
    ],
    cta: "Démarrer Boost",
    href: STRIPE_PAYMENT_URL,
    highlighted: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-600">Rankli</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#comment" className="hover:text-gray-900">Comment ça marche</a>
            <a href="#tarifs" className="hover:text-gray-900">Tarifs</a>
            <a href="/blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="/audit" className="hover:text-emerald-600 font-medium text-emerald-600">Audit Gratuit</a>
          </nav>
          <a
            href="/audit"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Audit Express Gratuit
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            🌴 Spécialiste SEO local en Martinique
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Votre entreprise mérite d&apos;être trouvée{" "}
            <span className="text-emerald-600">en premier</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rankli aide les commerces et prestataires martiniquais à apparaître en tête des recherches Google locales. Plus de visibilité, plus de clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/audit"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-lg"
            >
              Audit gratuit en 2 minutes
            </a>
            <a
              href="#tarifs"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="comment" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Audit de votre visibilité",
                desc: "On analyse votre présence sur Google Maps, votre fiche Google Business et vos positions actuelles.",
              },
              {
                step: "2",
                title: "Plan d'action personnalisé",
                desc: "On identifie les points bloquants et on vous fournit un plan d'action clair et priorisé.",
              },
              {
                step: "3",
                title: "Mise en œuvre et suivi",
                desc: "On optimise votre présence et on suit vos positions mois après mois pour garantir les résultats.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Nos offres
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Des solutions adaptées à chaque étape de votre développement
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  plan.highlighted
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-200 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="mb-4">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-emerald-200" : "text-gray-500"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-emerald-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 ${
                          plan.highlighted ? "text-emerald-200" : "text-emerald-600"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          plan.highlighted ? "text-emerald-50" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-white text-emerald-700 hover:bg-emerald-50"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 px-4 bg-emerald-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à attirer plus de clients locaux ?
          </h2>
          <p className="text-emerald-100 mb-8">
            Commencez par un audit gratuit de votre visibilité locale. Résultats immédiats, aucune carte bancaire requise.
          </p>
          <a
            href="/audit"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-lg"
          >
            Demander mon audit gratuit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© 2024 Rankli — SEO local en Martinique. Tous droits réservés.</p>
        <p className="mt-1">
          <a href="mailto:contact@rankli.fr" className="hover:text-white">
            contact@rankli.fr
          </a>
        </p>
      </footer>
    </main>
  );
}
