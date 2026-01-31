import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

Deno.serve(async (req) => {
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
