import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Bot, Sparkles, Search, Globe, ArrowRight, CheckCircle2, XCircle, TrendingUp, Zap, FileText, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroGeo from "@/assets/hero-geo.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const geoServices = [
  {
    icon: Brain,
    title: "AI Answer Optimization",
    description: "Optimize your medical content to appear as the recommended answer in ChatGPT, Google AI Overviews, and Perplexity responses."
  },
  {
    icon: MessageSquare,
    title: "Conversational Content Strategy",
    description: "Create Q&A-style content that mirrors how patients ask AI assistants about symptoms, treatments, and doctors."
  },
  {
    icon: Bot,
    title: "AI Chatbot Visibility",
    description: "Ensure your practice is cited by AI chatbots when patients ask about medical specialties in your area."
  },
  {
    icon: Shield,
    title: "E-E-A-T Authority Building",
    description: "Build Experience, Expertise, Authoritativeness & Trustworthiness signals that AI engines prioritize for medical content."
  },
  {
    icon: FileText,
    title: "Structured Data & Schema",
    description: "Implement advanced schema markup that helps AI engines understand and cite your medical expertise accurately."
  },
  {
    icon: BarChart3,
    title: "AI Visibility Tracking",
    description: "Monitor how often your practice appears in AI-generated answers across ChatGPT, Gemini, Copilot, and more."
  }
];

const seoVsGeo = [
  {
    aspect: "Goal",
    seo: "Rank on Google search results page",
    geo: "Get cited in AI-generated answers"
  },
  {
    aspect: "Target",
    seo: "Search engine crawlers & algorithms",
    geo: "Large Language Models (LLMs) & AI agents"
  },
  {
    aspect: "Content Style",
    seo: "Keyword-optimized pages & blog posts",
    geo: "Conversational, Q&A-driven, authoritative content"
  },
  {
    aspect: "User Behavior",
    seo: "User clicks a link from search results",
    geo: "User gets answer directly from AI — your name is cited"
  },
  {
    aspect: "Metrics",
    seo: "Rankings, CTR, organic traffic",
    geo: "AI citations, brand mentions, referral from AI platforms"
  },
  {
    aspect: "Trust Signals",
    seo: "Backlinks, domain authority, page speed",
    geo: "E-E-A-T, structured data, source credibility, freshness"
  }
];

const processSteps = [
  { step: "01", title: "AI Visibility Audit", desc: "We analyze how your practice currently appears (or doesn't) across ChatGPT, Google AI Overviews, Perplexity, and other AI platforms." },
  { step: "02", title: "Content Restructuring", desc: "Rewrite and create content in conversational, citation-friendly formats that AI engines prefer to reference." },
  { step: "03", title: "Authority Amplification", desc: "Build E-E-A-T signals through doctor profiles, credentials, publications, and patient testimonials." },
  { step: "04", title: "Monitor & Optimize", desc: "Track AI citations, adjust strategy based on which queries surface your practice, and stay ahead of algorithm changes." }
];

const GEO = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Generative Engine Optimization (GEO) for Doctors | AI Search Visibility | Transess</title>
        <meta name="description" content="Get your medical practice cited by ChatGPT, Google AI Overviews & Perplexity. GEO is the future of healthcare marketing — go beyond traditional SEO with AI-optimized content." />
        <meta name="keywords" content="generative engine optimization, GEO for doctors, AI search optimization healthcare, ChatGPT medical marketing, AI visibility for hospitals, doctor AI search, GEO vs SEO" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/geo`} />
        <meta property="og:title" content="GEO for Doctors | AI-Powered Visibility | Transess" />
        <meta property="og:description" content="Future-proof your practice. Get cited by AI engines like ChatGPT, Gemini & Perplexity with Generative Engine Optimization." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/geo`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generative Engine Optimization for Healthcare | Transess" />
        <meta name="twitter:description" content="Be the answer. Get your practice recommended by AI assistants patients are already using." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Generative Engine Optimization (GEO) for Healthcare",
            "provider": { "@type": "Organization", "name": "Transess" },
            "description": "AI search optimization service that helps doctors and hospitals get cited by ChatGPT, Google AI Overviews, Perplexity, and other generative AI platforms.",
            "areaServed": "India",
            "serviceType": "Generative Engine Optimization"
          })}
        </script>
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Generative Engine Optimization (GEO)" }]} />

      <PageHero
        badge="🚀 The Future of Medical Marketing"
        title="Generative Engine Optimization (GEO)"
        description="Patients are no longer just Googling — they're asking ChatGPT, Gemini, and Perplexity. Is your practice showing up in AI-generated answers? GEO ensures it does."
        backgroundImage={heroGeo}
        primaryCta={{ text: "Get AI-Ready Now", link: "/contact" }}
        secondaryCta={{ text: "See How It Works", link: "#geo-vs-seo" }}
      />

      {/* What is GEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Beyond Traditional SEO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Generative Engine Optimization?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GEO is the practice of optimizing your digital presence so that <strong className="text-foreground">AI-powered search engines cite your practice</strong> when patients ask health-related questions. While SEO gets you ranked on Google's link list, GEO gets you <strong className="text-foreground">mentioned by name</strong> in AI-generated answers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI-First Discovery</h3>
              <p className="text-muted-foreground">40% of Gen Z uses TikTok & ChatGPT instead of Google. The shift to AI search is already here.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Zero-Click Future</h3>
              <p className="text-muted-foreground">AI Overviews answer queries directly — users may never scroll to traditional results. You need to be IN the answer.</p>
            </div>
            <div className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">First-Mover Advantage</h3>
              <p className="text-muted-foreground">Most doctors haven't heard of GEO yet. Early adopters will dominate AI search results in their specialty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO vs SEO Comparison */}
      <section id="geo-vs-seo" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-semibold rounded-full mb-4">
              Key Differences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              GEO vs SEO — What's the Difference?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SEO isn't dead — but it's no longer enough. GEO complements SEO to cover the new AI-driven search landscape.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
              <div className="p-4 text-center">Aspect</div>
              <div className="p-4 text-center flex items-center justify-center gap-2"><Search className="w-4 h-4" /> Traditional SEO</div>
              <div className="p-4 text-center flex items-center justify-center gap-2"><Brain className="w-4 h-4" /> GEO</div>
            </div>
            {seoVsGeo.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}`}>
                <div className="p-4 font-semibold text-foreground border-r border-border">{row.aspect}</div>
                <div className="p-4 text-muted-foreground border-r border-border text-sm">{row.seo}</div>
                <div className="p-4 text-foreground text-sm font-medium">{row.geo}</div>
              </div>
            ))}
          </div>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground">Traditional SEO</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm italic">"Best cardiologist in Mumbai"</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>Your website appears on page 1 of Google</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                  <span>User must click your link to learn about you</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="w-4 h-4 mt-0.5 text-destructive shrink-0" />
                  <span>Competing with 10+ other results on the page</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-primary/5 rounded-xl border-2 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">GEO</h3>
              </div>
              <p className="text-muted-foreground mb-4 text-sm italic">"Who's the best cardiologist in Mumbai?"</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span><strong>AI directly recommends your name</strong> in its response</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>Patient sees your credentials & expertise instantly</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <span>You're the featured recommendation — no competition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our GEO Services for Healthcare
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to making your practice visible in the AI-powered search era.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {geoServices.map((service, index) => (
              <div key={index} className="group p-8 bg-card rounded-xl border border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our GEO Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 4-step framework to get your practice recommended by AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 bg-card rounded-xl border border-border">
                <span className="text-5xl font-black text-primary/10 absolute top-4 right-4">{step.step}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "1B+", label: "Weekly ChatGPT users globally" },
              { stat: "40%", label: "Gen Z prefers AI over Google" },
              { stat: "60%", label: "AI Overviews reduce clicks to sites" },
              { stat: "Early", label: "First-mover advantage is NOW" }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">{item.stat}</div>
                <p className="text-primary-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Works Best With</h2>
            <p className="text-muted-foreground">GEO delivers maximum impact when combined with these services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "SEO & Google", desc: "Cover both traditional and AI search results.", href: "/services/seo" },
              { title: "Website Design", desc: "A technically sound site is the foundation for AI visibility.", href: "/services/website-design" },
              { title: "Social Media", desc: "Social signals boost your authority in AI models.", href: "/services/social-media" }
            ].map((service, index) => (
              <Link key={index} to={service.href} className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{service.desc}</p>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Don't Wait for AI to Leave You Behind
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            The doctors who optimize for AI search today will own the patient pipeline of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get GEO Strategy Call</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/services/seo">Compare with SEO</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GEO;
