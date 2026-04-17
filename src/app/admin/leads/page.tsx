import Link from "next/link";
import type { Metadata } from "next";
import { getAuditLeads } from "@/lib/audit-leads";

export const metadata: Metadata = {
  title: "Admin Leads | Rankli",
};

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatDate(value: Date) {
  return dateFormatter.format(new Date(value));
}

function getGoogleMapsHref(value: string) {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `https://www.google.com/search?q=${encodeURIComponent(value)}`;
}

export default async function AdminLeadsPage() {
  try {
    const leads = await getAuditLeads();

    return (
      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Admin
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-gray-900">
                Demandes d&apos;audit
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                {leads.length} lead{leads.length > 1 ? "s" : ""} au total
              </p>
            </div>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-emerald-200 hover:text-emerald-700"
            >
              Ouvrir le formulaire /audit
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {leads.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-gray-500">
                Aucun lead enregistré pour le moment.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left">
                  <thead className="bg-gray-50">
                    <tr className="text-sm text-gray-600">
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold">
                        Nom entreprise
                      </th>
                      <th className="px-6 py-4 font-semibold">Email</th>
                      <th className="px-6 py-4 font-semibold">Téléphone</th>
                      <th className="px-6 py-4 font-semibold">
                        URL Google Maps
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-700">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="align-top">
                        <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                          {formatDate(lead.created_at)}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {lead.business_name}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-emerald-700 underline decoration-emerald-200 underline-offset-2"
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {lead.phone || "—"}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={getGoogleMapsHref(lead.google_url)}
                            target="_blank"
                            rel="noreferrer"
                            className="break-all text-emerald-700 underline decoration-emerald-200 underline-offset-2"
                          >
                            {lead.google_url}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("admin leads page error:", error);

    return (
      <main className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-600">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-900">
            Demandes d&apos;audit
          </h1>
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Impossible de charger les leads. Vérifiez la connexion PostgreSQL et
            la variable `DATABASE_URL`.
          </p>
        </div>
      </main>
    );
  }
}
