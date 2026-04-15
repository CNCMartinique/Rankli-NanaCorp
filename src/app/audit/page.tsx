"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuditPage() {
  const [form, setForm] = useState({
    businessName: "",
    googleUrl: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/audit-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSuccess(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
            Rankli
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1">
            ← Retour au site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-14 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase">
            Audit Express Gratuit
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Obtenez votre Score de Visibilité Google{" "}
            <span className="text-emerald-600">GRATUIT</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Notre IA analyse votre fiche Google en quelques secondes et vous envoie 3 recommandations personnalisées
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: "🔒", label: "100% gratuit" },
              { icon: "⚡", label: "Résultat sous 24h" },
              { icon: "🌴", label: "Pour les entreprises martiniquaises" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-sm px-3 py-1.5 rounded-full shadow-sm"
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 px-4">
        <div className="max-w-lg mx-auto">
          {success ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✅
              </div>
              <h2 className="text-xl font-bold text-emerald-800 mb-2">Demande reçue !</h2>
              <p className="text-emerald-700">
                Merci ! Votre audit est en cours d&apos;analyse. Vous recevrez votre score dans les prochaines heures.
              </p>
              <Link
                href="/"
                className="inline-block mt-6 text-sm text-emerald-600 hover:text-emerald-700 font-medium underline underline-offset-2"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nom de l&apos;entreprise <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Restaurant Chez Marie"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    URL Google Maps ou nom de la fiche <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="googleUrl"
                    required
                    value={form.googleUrl}
                    onChange={handleChange}
                    placeholder="https://maps.google.com/... ou Le Petit Bistrot Fort-de-France"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                  <p className="text-xs text-gray-400 mt-1">Pour recevoir votre rapport d&apos;audit</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Téléphone <span className="text-gray-400 font-normal">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+596 696 XX XX XX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white py-3.5 rounded-lg font-semibold text-base hover:bg-emerald-700 active:bg-emerald-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Analyse en cours…
                    </>
                  ) : (
                    "Analyser ma fiche gratuitement →"
                  )}
                </button>

                <p className="text-center text-sm text-gray-400">
                  Résultat envoyé par email sous 24h. 100% gratuit.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
