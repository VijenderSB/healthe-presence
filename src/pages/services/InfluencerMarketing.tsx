import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Video,
  GraduationCap,
  Sparkles,
  Mic,
  Camera,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Play
} from "lucide-react";
import heroImage from "@/assets/hero-influencer.jpg";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/lib/constants";

const InfluencerMarketing = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Credible Professional Presence",
      description: "Present your qualifications, areas of practice, and professional interests clearly and factually, so the public can understand your expertise.",
    },
    {
      icon: Video,
      title: "Health-Education Content",
      description: "From scripting to filming to editing, our team helps you produce factual, easy-to-understand health-education content.",
    },
    {
      icon: Sparkles,
      title: "Explainers & Awareness Content",
      description: "Clear explainers on conditions, procedures and preventive care that support public health awareness.",
    },
    {
      icon: GraduationCap,
      title: "Thought Leadership",
      description: "Share your perspective through research-based writing and professional commentary grounded in genuine expertise and publications.",
    },
    {
      icon: Mic,
      title: "Talks & Lectures",
      description: "Support for lectures, talks and educational sessions that communicate medical knowledge to professional and public audiences.",
    },
    {
      icon: Users,
      title: "Multi-Platform Presence",
      description: "A consistent, factual presence across platforms such as LinkedIn, YouTube and Instagram where people look for health information.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Positioning",
      description: "We understand your specialty, professional interests and the health topics you want to help explain to the public.",
    },
    {
      step: "02",
      title: "Content Planning",
      description: "A content plan built around factual education, awareness topics and research-based themes.",
    },
    {
      step: "03",
      title: "Production & Filming",
      description: "Professional recording at your clinic or our studio, producing clear educational content that reflects your expertise.",
    },
    {
      step: "04",
      title: "Publishing & Education",
      description: "Thoughtful publishing, accurate information, and respectful engagement focused on public understanding.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Head>
        <title>Personal Branding & Public Health Education for Doctors | Transess India</title>
        <meta name="description" content="Personal branding and public health education for doctors: a credible professional presence, factual health-education content, explainers, talks and research-based thought leadership." />
        <meta name="keywords" content="doctor personal branding India, public health education, medical health awareness content, physician thought leadership, doctor educational content, medical lectures and talks" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/services/influencer-marketing`} />
        <meta property="og:title" content="Personal Branding & Public Health Education | Transess India" />
        <meta property="og:description" content="A credible professional presence and factual public health education content for doctors." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/services/influencer-marketing`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personal Branding & Public Health Education | Transess" />
        <meta name="twitter:description" content="Factual public health education and professional presence for doctors." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Personal Branding & Public Health Education",
            "provider": {
              "@type": "Organization",
              "name": "Transess",
              "url": SITE_CONFIG.BASE_URL
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Personal branding and public health education for doctors: a credible professional presence, factual health-education content, explainers, talks and research-based thought leadership.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Personal Branding" }]} />
      <PageHero
        badge="Personal Branding"
        title="Personal Branding & Public Health Education for Doctors"
        description="Build a credible professional presence and share factual, educational health content with the public, in line with NMC guidelines on ethical public communication."
        backgroundImage={heroImage}
        primaryCta={{ text: "Start a Conversation", link: "/contact" }}
      />

      {/* Why Personal Branding Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Why Personal Branding?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Help the Public <span className="text-gradient">Understand Health Better</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A clear, factual professional presence helps people find reliable health information and understand
                who you are as a medical professional. The focus is education and awareness, not self-promotion.
              </p>
              <div className="space-y-4">
                {[
                  "Present your qualifications and expertise accurately",
                  "Share factual, easy-to-understand health education",
                  "Support public awareness on conditions and prevention",
                  "Communicate as a trusted, research-based voice",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">Content That Educates</h3>
                    <p className="text-primary-foreground/80">Factual, accessible, helpful</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Video, label: "Reels & Shorts" },
                    { icon: Play, label: "Long-form Videos" },
                    { icon: MessageCircle, label: "Educational Posts" },
                    { icon: Sparkles, label: "Awareness Content" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-primary-foreground/10">
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Personal Branding & <span className="text-gradient">Education Package</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build a credible presence and share factual health education in your specialty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              How We <span className="text-gradient">Work Together</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-heading font-bold text-primary/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 border-t-2 border-dashed border-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Ready to Build Your <span className="text-gradient">Professional Presence?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build a credible, factual presence that helps the public understand your field
              and the health topics you care about.
            </p>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="/contact">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InfluencerMarketing;
