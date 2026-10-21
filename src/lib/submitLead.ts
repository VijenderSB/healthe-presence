// Sends a lead straight to your email via Web3Forms (no database, no storage).
// The access key is public by design (it only permits sending to the single
// email address it's bound to) and is read from VITE_WEB3FORMS_ACCESS_KEY.
//
// Hardening: every field is validated and sanitized before leaving the
// browser, a honeypot field silently drops bot submissions, and a client-side
// rate limit blunts spam floods from a single browser.

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  clinic?: string;
  service?: string;
  message?: string;
  source?: string; // which form/page the lead came from
  botcheck?: string; // honeypot — humans never fill this
}

const RATE_KEY = "transess-lead-times";
const MIN_INTERVAL_MS = 30_000; // one submission per 30s
const MAX_PER_HOUR = 5;

/** Strip control chars, angle brackets, and collapse whitespace. */
function sanitize(value: string, maxLen: number): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ") // control characters
    .replace(/[<>]/g, "") // neutralize HTML/script injection
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

function looksLikeSpam(text: string): boolean {
  // Links, BBCode, or markdown-style URLs in name/clinic fields are a
  // near-certain spam signature on a lead form.
  return /https?:\/\/|www\.|\[url|\[link|<a\s/i.test(text);
}

function readTimes(): number[] {
  try {
    const now = Date.now();
    return (JSON.parse(sessionStorage.getItem(RATE_KEY) || "[]") as number[])
      .filter((t) => now - t < 3_600_000);
  } catch {
    return [];
  }
}

/** Throws if the per-browser rate limit is exceeded. Does NOT record. */
function checkRateLimit(): void {
  const times = readTimes();
  const now = Date.now();
  if (times.length >= MAX_PER_HOUR) {
    throw new Error("Too many submissions. Please try again later or email us directly.");
  }
  if (times.length > 0 && now - times[times.length - 1] < MIN_INTERVAL_MS) {
    throw new Error("Please wait a moment before submitting again.");
  }
}

/** Record a successful submission so only real sends count toward the limit. */
function recordSubmission(): void {
  const times = readTimes();
  times.push(Date.now());
  try {
    sessionStorage.setItem(RATE_KEY, JSON.stringify(times));
  } catch {
    /* storage blocked — proceed */
  }
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error("Web3Forms access key is not configured (VITE_WEB3FORMS_ACCESS_KEY).");
  }

  // Honeypot: silently succeed so bots don't learn they were caught.
  if (payload.botcheck) return;

  const name = sanitize(payload.name, 100);
  const email = sanitize(payload.email, 254);
  const phone = sanitize(payload.phone, 20);
  const clinic = sanitize(payload.clinic || "", 150);
  const service = sanitize(payload.service || "", 100);
  const message = sanitize(payload.message || "", 2000);
  const source = sanitize(payload.source || "Website", 100);

  if (name.length < 2) throw new Error("Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }
  if (!/^\+?[\d\s\-().]{7,20}$/.test(phone)) {
    throw new Error("Please enter a valid phone number.");
  }
  if (looksLikeSpam(name) || looksLikeSpam(clinic)) {
    throw new Error("Please remove links from the name field.");
  }

  checkRateLimit();

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `🏥 New Lead: ${name}${service ? " — " + service : ""}`,
      from_name: "Transess Website",
      replyto: email, // replies go straight to the lead
      name,
      email,
      phone,
      clinic: clinic || "Not provided",
      service: service || "Not specified",
      message,
      source,
    }),
  });

  const data = await res.json().catch(() => ({ success: false }));
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Lead submission failed");
  }

  recordSubmission(); // only count sends that actually succeeded
}
