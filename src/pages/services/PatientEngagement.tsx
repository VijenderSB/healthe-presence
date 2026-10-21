import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Bell, Heart, Calendar, Shield, ArrowRight, Globe, Search } from "lucide-react";
import { Link } from "react-router-dom";
import heroEngagement from "@/assets/hero-engagement.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
  {
    icon: MessageSquare,
    title: "Automated Communication",
    description: "SMS, email, and WhatsApp automation for appointment reminders, follow-ups, and health tips."
  },
  {
    icon: Bell,
    title: "Appointment Reminders",
    description: "Automated appointment reminders delivered across multiple channels."
  },
  {
    icon: Heart,
    title: "Patient Education",
    description: "Share factual health information, preventive-care tips and condition explainers to keep patients informed between visits."
  },
  {
    icon: Calendar,
    title: "Follow-up Messages",
    description: "Automated post-visit follow-up messages that support continuity of care."
  },
  {
    icon: Users,
    title: "Newsletters & Health Tips",
    description: "Keep patients informed through newsletters, health tips, and educational content."
  },
  {
    icon: Shield,
    title: "Consent-Based Messaging",
    description: "Privacy-conscious communication that respects patient consent and preferences across every channel."
  }
];

const PatientEngagement = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Patient Engagement India | Appointment Reminders & WhatsApp Automation | Transess</title>
        <meta name="description" content="Patient communication tools: WhatsApp automation, appointment reminders, follow-up messages and patient education, delivered with consent and respect for privacy." />
        <meta name="keywords" content="patient engagement India, healthcare communication, WhatsApp automation doctors, appointment reminder system, patient education, follow-up messages" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/patient-engagement`} />
        <meta property="og:title" content="Patient Engagement Solutions | Transess India" />
        <meta property="og:description" content="Appointment reminders, WhatsApp automation and patient communication tools." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/patient-engagement`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patient Engagement | Transess" />
        <meta name="twitter:description" content="Patient retention & engagement solutions for doctors." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Patient Engagement Solutions",
            "provider": {
              "@type": "Organization",
              "name": "Transess",
              "url": SITE_CONFIG.BASE_URL
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Patient communication tools: WhatsApp automation, appointment reminders, follow-up messages and patient education.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Patient Engagement" }]} />
      
      <PageHero
        badge="Patient Engagement"
        title="Patient Communication & Engagement Tools"
        description="Appointment reminders, follow-up messages, WhatsApp automation and patient education to help you stay in touch with your patients."
        backgroundImage={heroEngagement}
        primaryCta={{ text: "Get Started", link: "/contact" }}
        secondaryCta={{ text: "Our Work", link: "/case-studies" }}
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Engagement Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep patients engaged and build loyalty.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Patient Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we keep patients engaged at every touchpoint.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Pre-Visit", desc: "Appointment reminders and preparation tips" },
              { step: "02", title: "Visit Day", desc: "Seamless check-in and wait-time updates" },
              { step: "03", title: "Post-Visit", desc: "Follow-up care and feedback collection" },
              { step: "04", title: "Ongoing", desc: "Health tips, reminders, and re-engagement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-500/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete the Patient Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Pair patient engagement with these services for full-circle care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Link to="/services/website-design" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Website Design</h3>
              <p className="text-muted-foreground mb-4">A patient-friendly website with online booking.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/geo" className="group p-6 bg-primary/5 rounded-xl border-2 border-primary hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">GEO (AI Search) 🚀</h3>
              <p className="text-muted-foreground mb-4">Get recommended by AI when patients search for care.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/social-media" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Social Media</h3>
              <p className="text-muted-foreground mb-4">Stay connected with patients between visits.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/services/seo" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">SEO & Visibility</h3>
              <p className="text-muted-foreground mb-4">Attract new patients to engage with.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Improve Patient Retention?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's build a patient engagement system that keeps your practice thriving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/case-studies">Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PatientEngagement;
