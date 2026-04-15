import { NextRequest, NextResponse } from "next/server";

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

    // Store lead in database
    const { Pool } = await import("pg");
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    // Create table if not exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS audit_leads (
        id SERIAL PRIMARY KEY,
        business_name TEXT NOT NULL,
        google_url TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(
      `INSERT INTO audit_leads (business_name, google_url, email, phone)
       VALUES ($1, $2, $3, $4)`,
      [businessName, googleUrl, email, phone || null]
    );

    await pool.end();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("audit-request error:", err);
    return NextResponse.json(
      { error: "Erreur interne" },
      { status: 500 }
    );
  }
}
