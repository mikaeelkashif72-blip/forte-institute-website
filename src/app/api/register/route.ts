import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface RegistrationPayload {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  parentPhone: string;
  school: string;
  hearAbout: string;
  program: string;
  session: string;
  subject: string;
}

const REQUIRED_FIELDS: (keyof RegistrationPayload)[] = [
  "firstName",
  "lastName",
  "email",
  "whatsapp",
  "parentPhone",
  "school",
  "program",
  "session",
  "subject",
];

const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL || "Forte Institute <onboarding@resend.dev>";
const NOTIFY_ADDRESS = process.env.FORTE_NOTIFY_EMAIL || "connectwithforte@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function institutionEmailHtml(data: RegistrationPayload) {
  const rows: [string, string][] = [
    ["Name", `${data.firstName} ${data.lastName}`],
    ["Email", data.email],
    ["WhatsApp", data.whatsapp],
    ["Parent Phone", data.parentPhone],
    ["School / Organization", data.school],
    ["Heard via", data.hearAbout || "—"],
    ["Program", data.program],
    ["Session", data.session],
    ["Subject(s)", data.subject],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px;color:#94a3b8;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 16px;color:#111111;font-size:14px;font-weight:600;">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;background:#f5f5f5;padding:32px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
        <div style="background:#111111;padding:24px 32px;">
          <h1 style="margin:0;color:#F5C518;font-size:18px;font-weight:700;">New Registration — Forte Institute</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      </div>
    </div>
  `;
}

function studentEmailHtml(data: RegistrationPayload) {
  return `
    <div style="font-family:'Segoe UI',Arial,sans-serif;background:#f5f5f5;padding:32px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5;">
        <div style="background:#111111;padding:32px;text-align:center;">
          <h1 style="margin:0;color:#F5C518;font-size:22px;font-weight:700;">Forte Institute</h1>
        </div>
        <div style="padding:32px;">
          <h2 style="margin:0 0 12px;color:#111111;font-size:20px;">Thank you, ${escapeHtml(data.firstName)}!</h2>
          <p style="margin:0 0 16px;color:#333333;font-size:14px;line-height:1.6;">
            We've received your registration for the <strong>${escapeHtml(data.program)}</strong> program,
            <strong>${escapeHtml(data.session)}</strong> session. Our team will reach out to you on WhatsApp
            (${escapeHtml(data.whatsapp)}) within 24 hours to confirm your enrollment and next steps.
          </p>
          <p style="margin:0 0 24px;color:#333333;font-size:14px;line-height:1.6;">
            <strong>Subject(s):</strong> ${escapeHtml(data.subject)}
          </p>
          <p style="margin:0;color:#666666;font-size:13px;line-height:1.6;">
            If you have any questions in the meantime, reply to this email or reach us at
            <a href="mailto:connectwithforte@gmail.com" style="color:#B98A00;">connectwithforte@gmail.com</a>
            or <a href="tel:+923253025031" style="color:#B98A00;">+92 325 302 5031</a>.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: RegistrationPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please contact us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: NOTIFY_ADDRESS,
      replyTo: payload.email,
      subject: `New Registration: ${payload.firstName} ${payload.lastName} — ${payload.program}`,
      html: institutionEmailHtml(payload),
    });

    await resend.emails.send({
      from: FROM_ADDRESS,
      to: payload.email,
      subject: "Thank you for registering — Forte Institute",
      html: studentEmailHtml(payload),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send registration emails", error);
    return NextResponse.json(
      { error: "Something went wrong sending your registration. Please try again." },
      { status: 502 }
    );
  }
}
