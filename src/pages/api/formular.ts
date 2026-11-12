// Receives the site's three forms (team competition, voucher interest, e-shop enquiry) and sends
// each one as an e-mail to the organisers. Runs as a Vercel Function; every other page stays static.
//
// Configuration (Vercel → Project → Settings → Environment Variables):
//   SMTP_HOST, SMTP_PORT (465 = SSL, 587 = STARTTLS), SMTP_USER, SMTP_PASS – the mailbox that sends
//   FORM_TO   – optional: overrides who receives the forms (formsTo in src/data/race.ts)
//   FORM_FROM – optional sender address, defaults to SMTP_USER
//
// A plain HTML post is answered with a redirect to /dekujeme/ or /odeslani-selhalo/. The page script
// sends `Accept: application/json` and gets { ok } back, so a failed send keeps what the visitor typed.
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { formsTo } from '../../data/race';

export const prerender = false;

interface Field {
  name: string;
  label: string;
  required?: boolean;
  email?: boolean;
  options?: string[];
  max?: number;
}

interface FormDef {
  title: string;
  subject: (data: Record<string, string>) => string;
  fields: Field[];
}

const FORMS: Record<string, FormDef> = {
  'soutez-tymu': {
    title: 'Soutěž týmů',
    subject: (d) => `Soutěž týmů: ${d['nazev-tymu']}`,
    fields: [
      { name: 'nazev-tymu', label: 'Název týmu', required: true },
      { name: 'zavod', label: 'Závod', required: true, options: ['Dlouhá trasa', 'Krátká trasa'] },
      ...[1, 2, 3, 4, 5, 6].map((n) => ({ name: `zavodnik-${n}`, label: `${n}. závodník`, required: n <= 3 })),
      { name: 'email', label: 'Kontaktní e-mail', required: true, email: true },
    ],
  },
  voucher: {
    title: 'Vouchery',
    subject: (d) => `Zájem o voucher: ${d.email}`,
    fields: [{ name: 'email', label: 'Kontaktní e-mail', required: true, email: true }],
  },
  'e-shop': {
    title: 'Poptávka z e-shopu',
    subject: (d) => `Poptávka z e-shopu: ${d.jmeno}`,
    fields: [
      { name: 'jmeno', label: 'Jméno a příjmení', required: true },
      { name: 'email', label: 'Kontaktní e-mail', required: true, email: true },
      { name: 'produkty', label: 'O jaké produkty má zájem', required: true, max: 5000 },
    ],
  },
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY = 64 * 1024;

const env = (key: string) => process.env[key]?.trim() || undefined;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;
  const reply = (ok: boolean, status: number) =>
    wantsJson ? Response.json({ ok }, { status }) : redirect(ok ? '/dekujeme/' : '/odeslani-selhalo/', 303);

  if (Number(request.headers.get('content-length') ?? 0) > MAX_BODY) return reply(false, 413);

  let body: FormData;
  try {
    body = await request.formData();
  } catch {
    return reply(false, 400);
  }

  // the hidden honeypot field: people never see it, bots fill it in. Pretend it went through.
  if (String(body.get('bot-field') ?? '').trim()) return reply(true, 200);

  const formName = String(body.get('form-name') ?? '');
  const form = FORMS[formName];
  if (!form) return reply(false, 400);

  const data: Record<string, string> = {};
  for (const field of form.fields) {
    const raw = body.get(field.name);
    const value = typeof raw === 'string' ? raw.trim() : '';
    const invalid =
      (field.required && !value) ||
      value.length > (field.max ?? 300) ||
      (value && field.email && !EMAIL.test(value)) ||
      (value && field.options && !field.options.includes(value));
    if (invalid) return reply(false, 422);
    data[field.name] = value;
  }

  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  const to = env('FORM_TO') ?? formsTo;
  if (!host || !user || !pass || !to) {
    console.error('formular: SMTP_HOST, SMTP_USER and SMTP_PASS must be set');
    return reply(false, 500);
  }
  const port = Number(env('SMTP_PORT') ?? 465);

  const lines = form.fields
    .filter((f) => data[f.name])
    .map((f) => (data[f.name].includes('\n') ? `${f.label}:\n${data[f.name]}\n` : `${f.label}: ${data[f.name]}`));
  const text = [
    `Nový formulář „${form.title}“ z webu krakonosuvcyklomaraton.cz`,
    '',
    ...lines,
    '',
    'Odpovědí na tento e-mail napíšete přímo odesílateli.',
  ].join('\n');

  try {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transport.sendMail({
      from: { name: 'Web Krakonošův cyklomaraton', address: env('FORM_FROM') ?? user },
      to,
      replyTo: data.email,
      subject: form.subject(data).replace(/\s+/g, ' '),
      text,
    });
  } catch (error) {
    console.error(`formular: sending "${formName}" failed`, error);
    return reply(false, 502);
  }

  return reply(true, 200);
};
