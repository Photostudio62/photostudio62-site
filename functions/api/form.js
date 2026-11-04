// Cloudflare Pages Function: ontvangt de formulieren van de site en stuurt ze per e-mail naar de studio.
// Vereist in Cloudflare Pages (Settings > Variables and Secrets):
//   RESEND_API_KEY  (secret)  API-sleutel van resend.com
//   FORM_TO         (optioneel) ontvanger, standaard info@photostudio62.nl
//   FORM_FROM       (optioneel) afzender, standaard "Photostudio62 <formulier@photostudio62.nl>"
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const clean = (v, n) => String(v == null ? "" : v).replace(/[\r\n]+/g, " ").trim().slice(0, n);

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("origin");
  if (origin) { try { if (new URL(origin).host !== new URL(request.url).host) return json({ ok: false }, 403); } catch (e) { return json({ ok: false }, 403); } }
  let d;
  try { d = await request.json(); } catch (e) { return json({ ok: false }, 400); }
  if (d.website) return json({ ok: true }); // honeypot: bots vullen dit veld
  const replyTo = clean(d.replyTo, 200), subject = clean(d.subject, 200), name = clean(d.name, 120);
  const body = String(d.body == null ? "" : d.body).slice(0, 12000);
  const en = d.lang === "en";
  if (!EMAIL.test(replyTo) || !subject || !body || !name) return json({ ok: false, error: "invalid" }, 400);
  if (!env.RESEND_API_KEY) return json({ ok: false, error: "not-configured" }, 500);

  const to = env.FORM_TO || "info@photostudio62.nl";
  const from = env.FORM_FROM || "Photostudio62 <formulier@photostudio62.nl>";
  const send = (payload) => fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "authorization": "Bearer " + env.RESEND_API_KEY, "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const adminMail = { from, to: [to], reply_to: replyTo, subject, text: body };
  const att = d.attachment;
  if (att && att.content && att.filename) adminMail.attachments = [{ filename: clean(att.filename, 150), content: String(att.content) }];
  // meerdere bijlagen (albumfoto's): maximaal 40 stuks en ca. 38 MB in totaal
  if (Array.isArray(d.attachments)) {
    let total = 0; const list = [];
    for (const a of d.attachments.slice(0, 40)) {
      if (!a || !a.content || !a.filename) continue;
      total += String(a.content).length; if (total > 38 * 1024 * 1024) break;
      list.push({ filename: clean(a.filename, 150), content: String(a.content) });
    }
    if (list.length) adminMail.attachments = (adminMail.attachments || []).concat(list);
  }

  const r = await send(adminMail);
  if (!r.ok) return json({ ok: false, error: "send-failed" }, 502);

  // bevestiging (kopie) naar de klant; mislukt dit, dan blijft de aanvraag gewoon geldig
  const intro = en
    ? "Thank you for your request at Photostudio62. We have received it and will contact you via WhatsApp within 24 hours to go through everything. A request is not yet a booking.\n\nYour details:\n\n"
    : "Bedankt voor je aanvraag bij Photostudio62. We hebben hem ontvangen en nemen binnen 24 uur via WhatsApp contact met je op om alles door te nemen. Een aanvraag is nog geen boeking.\n\nJouw gegevens:\n\n";
  try {
    await send({ from, to: [replyTo], reply_to: to, subject: (en ? "We received your request: " : "We hebben je aanvraag ontvangen: ") + subject, text: intro + body.replace(" (als bijlage meegestuurd)", "") });
  } catch (e) {}
  return json({ ok: true });
}

export const onRequest = () => json({ ok: false }, 405);
