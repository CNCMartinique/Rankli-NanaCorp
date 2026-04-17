import { NextRequest, NextResponse } from "next/server";
import { createAuditLead } from "@/lib/audit-leads";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, googleUrl, email, phone } = body;

    if (!businessName || !googleUrl || !email) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    await createAuditLead({ businessName, googleUrl, email, phone });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("audit-request error:", err);
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
