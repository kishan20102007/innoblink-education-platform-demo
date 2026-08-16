import nodemailer from 'nodemailer';

function transporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE) === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

function baseTemplate(title, body) {
  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#f5f8ff;padding:28px">
      <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:22px;padding:28px;border:1px solid #e8eef8">
        <h1 style="color:#0f4aad;margin:0 0 8px;font-size:28px">Edu<span style="color:#08a7a5">Enrich</span></h1>
        <p style="margin:0 0 24px;color:#64748b;font-weight:700;letter-spacing:1.5px">EMPOWERING STUDENTS ENRICHING TUTORS</p>
        <h2 style="color:#101828;margin:0 0 16px">${title}</h2>
        <div style="color:#334155;line-height:1.7">${body}</div>
        <p style="margin-top:28px;color:#64748b">EduEnrich Team<br/>innoblink2026@gmail.com</p>
      </div>
    </div>
  `;
}

function detailsList(payload) {
  return Object.entries(payload)
    .filter(([, value]) => value)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${Array.isArray(value) ? value.join(', ') : String(value)}</p>`)
    .join('');
}

export async function sendLeadEmails({ type, lead, customerEmail = lead.email }) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP is not configured. Skipping email send.');
    return;
  }

  const mailer = transporter();
  const companyEmail = process.env.COMPANY_EMAIL || 'innoblink2026@gmail.com';
  const from = process.env.MAIL_FROM || `InnoBlink <${companyEmail}>`;
  const noReplyEmail = process.env.NO_REPLY_EMAIL || 'innoblink2026@gmail.com';

  await Promise.all([
    mailer.sendMail({
      from,
      to: companyEmail,
      subject: `New EduEnrich ${type}`,
      html: baseTemplate(`New ${type}`, detailsList(lead))
    }),
    mailer.sendMail({
      from,
      to: customerEmail,
      replyTo: noReplyEmail,
      subject: `EduEnrich received your ${type}`,
      html: baseTemplate(
        `Thank you for contacting EduEnrich`,
        `<p>Dear ${lead.name || 'Learner'},</p><p>We have received your ${type.toLowerCase()} and our team will contact you soon.</p><p>Your request is important to us, and we will guide you with the right academic next step.</p><p><strong>This is an automated email. Please do not reply.</strong></p>`
      )
    })
  ]);
}
