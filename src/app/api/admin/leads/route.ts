import { NextResponse } from "next/server";
import { getAuditLeads } from "@/lib/audit-leads";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const leads = await getAuditLeads();

    return NextResponse.json({
      leads,
      total: leads.length,
    });
  } catch (error) {
    console.error("admin leads error:", error);

    return NextResponse.json(
      { error: "Erreur lors de la récupération des leads." },
      { status: 500 }
    );
  }
}
