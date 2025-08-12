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

    // Compose email
    const plain = `From: ${name} <${email}>\n\n${String(message).trim()}`;
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(String(message)).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      replyTo: String(email),
      subject: `New message from ${name}`,
      text: plain,
      html,
    });

    // Resend returns { id } on success; expose minimal info to client
    if (!("id" in result) || !result.id) {
      console.error("Resend send error:", result);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    // Log detailed error server-side; keep client message concise
    console.error("send-email route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// --- helpers ---

// Very small HTML escaper to prevent accidental HTML injection in email
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
