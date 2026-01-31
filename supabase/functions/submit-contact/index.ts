import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Allowed origins for CORS - restrict to known domains
const allowedOrigins = [
  "https://www.transess.com",
  "https://transess.com",
  "https://healthe-presence.lovable.app", // Keep for staging
  "http://localhost:8080",
  "http://localhost:5173",
  /^https:\/\/[a-z0-9-]+\.lovableproject\.com$/, // Lovable preview URLs
  /^https:\/\/id-preview--[a-z0-9-]+\.lovable\.app$/, // Lovable ID preview URLs
];

// Check if origin matches allowed origins (supports both strings and RegExp)
function isAllowedOrigin(origin: string): boolean {
  return allowedOrigins.some((allowed) => {
    if (typeof allowed === "string") {
      return allowed === origin;
    }
    return allowed.test(origin);
  });
}

// Get CORS headers based on request origin
function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") || "";
  // Use the origin if it's allowed, otherwise fall back to the primary domain
  const allowedOrigin = isAllowedOrigin(origin) ? origin : "https://www.transess.com";
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

// HTML entity encoding for safe email content
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m] || m);
}

// Sanitize input to prevent XSS and injection
function sanitizeInput(input: string): string {
  if (!input) return "";
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>'"&]/g, "") // Remove dangerous characters
    .trim()
    .slice(0, 2000); // Limit length
}

// Validate Indian mobile number (10 digits starting with 6-9)
function isValidIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, "").slice(-10);
  return /^[6-9]\d{9}$/.test(cleaned);
}

// Normalize phone to 10 digits
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "").slice(-10);
}

// Get service label from value
function getServiceLabel(value: string): string {
  const services: Record<string, string> = {
    website: "Medical Website Design",
    social: "Social Media Management",
    video: "Video Production",
    youtube: "YouTube Management",
    seo: "SEO & Google Visibility",
    branding: "Branding & Creatives",
    engagement: "Patient Engagement",
    complete: "Complete 360° Solution",
  };
  return services[value] || value || "Not specified";
}

// Send email notification via Resend
async function sendEmailNotification(data: {
  name: string;
  email: string;
  phone: string;
  clinic: string;
  service: string;
  message: string;
}): Promise<void> {
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured, skipping email notification");
    return;
  }

  // Apply HTML entity encoding to all user-controlled data
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeClinic = escapeHtml(data.clinic || "Not provided");
  const safeService = escapeHtml(getServiceLabel(data.service));
  const safeMessage = escapeHtml(data.message);

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0A9396; border-bottom: 2px solid #0A9396; padding-bottom: 10px;">
        🏥 New Lead from Transess Website
      </h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 12px; background: #f8f9fa; font-weight: bold; width: 140px;">Name:</td>
          <td style="padding: 12px; background: #f8f9fa;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold;">Email:</td>
          <td style="padding: 12px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; background: #f8f9fa; font-weight: bold;">Phone:</td>
          <td style="padding: 12px; background: #f8f9fa;">
            <a href="tel:+91${safePhone}">+91 ${safePhone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold;">Clinic/Hospital:</td>
          <td style="padding: 12px;">${safeClinic}</td>
        </tr>
        <tr>
          <td style="padding: 12px; background: #f8f9fa; font-weight: bold;">Service Interest:</td>
          <td style="padding: 12px; background: #f8f9fa;">${safeService}</td>
        </tr>
      </table>
      
      ${safeMessage ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
          <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #0A9396; white-space: pre-wrap;">
            ${safeMessage}
          </div>
        </div>
      ` : ""}
      
      <div style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 8px;">
        <strong>⏰ Submitted:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      </div>
      
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        This lead was submitted through the Transess website contact form.
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Transess Leads <leads@transess.com>",
        to: ["info@transess.com"],
        subject: `🏥 New Lead: ${safeName} - ${safeService}`,
        html: emailHtml,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
    } else {
      console.log("Email notification sent successfully");
    }
  } catch (error) {
    console.error("Failed to send email notification:", error);
  }
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, clinic, service, message, website, formLoadTime } = body;

    // SPAM CHECK 1: Honeypot field (bots fill hidden fields)
    if (website && website.length > 0) {
      console.log("Spam detected: honeypot triggered");
      // Return success to not alert bots
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // SPAM CHECK 2: Time-based validation (humans take at least 3 seconds)
    const submissionTime = Date.now();
    const timeDiff = submissionTime - (formLoadTime || 0);
    if (timeDiff < 3000) {
      console.log("Spam detected: form submitted too quickly", timeDiff);
      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Name, email, and phone are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate Indian mobile
    if (!isValidIndianMobile(phone)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid 10-digit Indian mobile number" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(name).slice(0, 100),
      email: sanitizeInput(email).toLowerCase().slice(0, 255),
      phone: normalizePhone(phone),
      clinic: sanitizeInput(clinic || "").slice(0, 200),
      service: sanitizeInput(service || "").slice(0, 100),
      message: sanitizeInput(message || "").slice(0, 2000),
    };

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // SPAM CHECK 3: 24-hour cooldown per phone
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { data: recentSubmission } = await supabase
      .from("contact_submissions")
      .select("id, created_at")
      .eq("phone", sanitizedData.phone)
      .gte("created_at", twentyFourHoursAgo)
      .limit(1)
      .single();

    if (recentSubmission) {
      const nextAllowedTime = new Date(
        new Date(recentSubmission.created_at).getTime() + 24 * 60 * 60 * 1000
      );
      const hoursRemaining = Math.ceil(
        (nextAllowedTime.getTime() - Date.now()) / (1000 * 60 * 60)
      );
      
      return new Response(
        JSON.stringify({
          error: `You've already submitted a request. Please wait ${hoursRemaining} hour${hoursRemaining > 1 ? "s" : ""} before submitting again.`,
          cooldown: true,
        }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate IP hash for additional tracking (privacy-preserving)
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const ipHash = await crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(clientIP + Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")))
      .then((hash) =>
        Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("")
          .slice(0, 16)
      );

    // Insert into database
    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      clinic: sanitizedData.clinic || null,
      service: sanitizedData.service || null,
      message: sanitizedData.message || null,
      ip_hash: ipHash,
    });

    if (insertError) {
      console.error("Database insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to submit form. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email notification (don't block response on email)
    sendEmailNotification(sanitizedData).catch((err) => {
      console.error("Email notification failed:", err);
    });

    console.log("Contact form submitted successfully:", sanitizedData.email);

    return new Response(
      JSON.stringify({ success: true, message: "Thank you! We'll get back to you within 24 hours." }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
