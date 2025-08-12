// src/app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name = "", email = "", message = "", website = "" } = body;

    if (website) return NextResponse.json({ ok: true }); // honeypot
    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.EMAIL_TO || "gyamjosherpa1@gmail.com";
    const from = process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
               <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
               <p><strong>Message:</strong></p>
               <p>${String(message).replace(/\n/g, "<br/>")}</p>
             </div>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
