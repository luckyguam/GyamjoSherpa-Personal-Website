// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Force Node runtime (email libs don't love Edge) and avoid caching
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(v: unknown): v is string {
  return typeof v === "string" && EMAIL_RE.test(v);
}
function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}
function clip(s: string, max = 5000) {
  return s.length > max ? s.slice(0, max) + "…" : s;
}

// Simple GET so you can test in browser: /api/send-email
export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/send-email",
    hint: "POST JSON { name, email, message }",
  });
}

export async function POST(req: Request) {
  try {
    // Require JSON body
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid Content-Type. Use application/json." },
        { status: 415 }
      );
    }

    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    const {
      name = "",
      email = "",
      message = "",
      website = "", // honeypot
    } = body as Record<string, unknown>;

    // Honeypot (bots fill hidden field)
    if (isNonEmptyString(website)) {
      // Pretend success to avoid tipping off bots
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!isNonEmptyString(name) || !isValidEmail(email) || !isNonEmptyString(message)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Init Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    // Defaults:
    // - onboarding@resend.dev works without domain verification for testing
    const to = process.env.EMAIL_TO || "gyamjosherpa1@gmail.com";
    const from = process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";

    // Compose email (clip to keep emails small/safe)
    const safeName = clip(String(name).trim(), 256);
    const safeEmail = String(email).trim();
    const safeMsg = clip(String(message).trim(), 5000);

    const plain = `From: ${safeName} <${safeEmail}>\n\n${safeMsg}`;
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
        <p><strong>From:</strong> ${escapeHtml(safeName)} &lt;${escapeHtml(safeEmail)}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(safeMsg).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // 🔧 Resend SDK returns { data, error } — use reply_to (snake_case)
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: safeEmail,
      subject: `New message from ${safeName}`,
      text: plain,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      // Surface a concise error to the client
      return NextResponse.json(
        { error: error.message || "Email provider error" },
        { status: 502 }
      );
    }

    if (!data?.id) {
      console.error("Resend returned no id:", data);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (err: unknown) {
    console.error("send-email route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// --- helpers ---
// Very small HTML escaper to prevent accidental HTML injection in email
function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
