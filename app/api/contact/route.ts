import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// POST /api/contact
// Sends enquiry email via Resend (https://resend.com).
// Requires RESEND_API_KEY env var.
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, business, email, needs, message } = body as Record<
    string,
    string | undefined
  >;

  // Basic server-side validation
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const RESEND_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_KEY) {
    console.error("Missing RESEND_API_KEY env var");
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    );
  }

  const TO = process.env.CONTACT_EMAIL || "miguel@zyradigital.org";

  const html = [
    `<h2>New enquiry from zyradigital.org</h2>`,
    `<p><strong>Name:</strong> ${esc(name)}</p>`,
    business ? `<p><strong>Business:</strong> ${esc(business)}</p>` : "",
    `<p><strong>Email:</strong> ${esc(email)}</p>`,
    needs ? `<p><strong>Needs:</strong> ${esc(needs)}</p>` : "",
    message
      ? `<p><strong>Message:</strong><br/>${esc(message).replace(/\n/g, "<br/>")}</p>`
      : "",
  ].join("\n");

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ZYRA DIGITAL <onboarding@resend.dev>",
        to: [TO],
        reply_to: email,
        subject: `New enquiry from ${esc(name)}`,
        html,
      }),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unexpected error." },
      { status: 500 },
    );
  }
}

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
