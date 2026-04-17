import { Pool } from "pg";

export type AuditLead = {
  id: number;
  business_name: string;
  google_url: string;
  email: string;
  phone: string | null;
  created_at: Date;
};

type CreateAuditLeadInput = {
  businessName: string;
  googleUrl: string;
  email: string;
  phone?: string | null;
};

declare global {
  // eslint-disable-next-line no-var
  var auditLeadsPool: Pool | undefined;
}

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!globalThis.auditLeadsPool) {
    globalThis.auditLeadsPool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  return globalThis.auditLeadsPool;
}

async function ensureAuditLeadsTable() {
  const pool = getPool();

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
}

export async function createAuditLead(input: CreateAuditLeadInput) {
  await ensureAuditLeadsTable();

  const pool = getPool();

  await pool.query(
    `INSERT INTO audit_leads (business_name, google_url, email, phone)
     VALUES ($1, $2, $3, $4)`,
    [input.businessName, input.googleUrl, input.email, input.phone || null]
  );
}

export async function getAuditLeads(): Promise<AuditLead[]> {
  await ensureAuditLeadsTable();

  const pool = getPool();
  const result = await pool.query<AuditLead>(
    `SELECT id, business_name, google_url, email, phone, created_at
     FROM audit_leads
     ORDER BY created_at DESC`
  );

  return result.rows;
}
