import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: "60px auto", padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900 }}>CHUMP / Thiqah</h1>
      <p style={{ opacity: 0.8 }}>
        Demo (mock mode). We will add real Supabase + magic-link login after the demo is complete.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
        <Link href="/demo" style={{ padding: 12, border: "1px solid #ddd", borderRadius: 10 }}>
          Open Demo Login →
        </Link>
      </div>
    </div>
  );
}
