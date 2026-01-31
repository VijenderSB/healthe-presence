import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCasestudies from "@/assets/hero-casestudies.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const caseStudies = [
  {
    title: "Dr. Sharma's Cardiology Practice",
    category: "Cardiology",
    challenge: "Low online visibility despite 20+ years of experience. Patients choosing younger doctors with better digital presence.",
    solution: "Complete 360° digital makeover including website redesign, social media management, and YouTube channel creation.",
    results: [
      { metric: "300%", label: "Increase in patient inquiries" },
      { metric: "1st", label: "Page ranking for 'cardiologist Mumbai'" },
      { metric: "50K", label: "YouTube subscribers in 6 months" }
    ],
    services: ["website-design", "social-media", "youtube-management"],
    image: "bg-gradient-to-br from-primary/20 to-secondary/20"
  },
  {
    title: "Smile Dental Clinic Chain",
    category: "Dental",
    challenge: "Multi-location dental chain struggling to maintain consistent branding and patient flow across locations.",
    solution: "Unified branding, location-specific SEO, patient engagement system, and video content for each treatment.",
    results: [
      { metric: "150%", label: "Increase in bookings" },
      { metric: "45%", label: "Reduction in no-shows" },
      { metric: "4.8/5", label: "Average Google rating" }
    ],
    services: ["branding", "seo", "patient-engagement"],
    image: "bg-gradient-to-br from-accent/20 to-primary/20"
  },
  {
    title: "HealthFirst Multispecialty Hospital",
    category: "Hospital",
    challenge: "New hospital facing stiff competition from established names. Needed to build brand awareness and trust quickly.",
    solution: "Comprehensive digital strategy including department-specific content, doctor profiles, and patient testimonial videos.",
    results: [
      { metric: "10x", label: "Website traffic growth" },
      { metric: "500+", label: "Video testimonials" },
      { metric: "40%", label: "Increase in OPD footfall" }
    ],
    services: ["website-design", "video-production", "social-media"],
    image: "bg-gradient-to-br from-secondary/20 to-accent/20"
  },
  {
    title: "Dr. Patel's Dermatology & Aesthetics",
    category: "Dermatology",
    challenge: "Premium dermatology practice unable to convey expertise and justify premium pricing through generic marketing.",
    solution: "High-end branding, before-after case documentation, educational video series, and influencer collaborations.",
    results: [
      { metric: "200%", label: "Increase in procedure revenue" },
      { metric: "100K+", label: "Instagram followers" },
      { metric: "60%", label: "Patients from social media" }
    ],
    services: ["branding", "video-production", "social-media"],
    image: "bg-gradient-to-br from-purple-500/20 to-primary/20"
  },
  {
    title: "OrthoCare Sports Medicine",
    category: "Orthopedics",
    challenge: "Sports medicine practice wanted to attract athletes and younger demographic who prefer digital-first interactions.",
    solution: "Athletic-focused branding, YouTube fitness content, TikTok presence, and athlete testimonial campaigns.",
    results: [
      { metric: "400%", label: "Increase in young patient segment" },
      { metric: "2M+", label: "Views on athlete content" },
      { metric: "35", label: "Professional athlete endorsements" }
    ],
    services: ["youtube-management", "social-media", "branding"],
    image: "bg-gradient-to-br from-green-500/20 to-primary/20"
  },
  {
    title: "MindWell Psychiatry Clinic",
    category: "Psychiatry",
    challenge: "Mental health practice needed to destigmatize services and reach patients who might be hesitant to seek help.",
    solution: "Thoughtful content strategy focusing on education, anonymous success stories, and accessible mental health tips.",
    results: [
      { metric: "180%", label: "Increase in first-time consultations" },
      { metric: "5M+", label: "Mental health content reach" },
      { metric: "92%", label: "Patient retention rate" }
    ],
    services: ["social-media", "video-production", "patient-engagement"],
    image: "bg-gradient-to-br from-orange-500/20 to-secondary/20"
  }
];

const serviceLabels: Record<string, string> = {
  "website-design": "Website Design",
  "video-production": "Video Production",
  "seo": "SEO",
  "social-media": "Social Media",
  "youtube-management": "YouTube",
  "patient-engagement": "Patient Engagement",
  "branding": "Branding"
};

const CaseStudies = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Medical Marketing Case Studies | 300%+ Growth Results | Transess India</title>
        <meta name="description" content="Real case studies: 300% patient growth, first-page rankings, 100K+ YouTube subscribers. See how cardiologists, dentists & hospitals grew with Transess digital marketing." />
        <meta name="keywords" content="medical marketing case studies, healthcare success stories, doctor marketing results, hospital digital marketing ROI, patient growth case study" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/case-studies`} />
        <meta property="og:title" content="Medical Marketing Case Studies | Transess" />
        <meta property="og:description" content="Real results: 300%+ patient growth. See how doctors transformed their practice." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/case-studies`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Transess Medical Marketing" />
        <meta name="twitter:description" content="Real healthcare marketing results - 300%+ growth!" />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      
      <PageHero
        badge="Case Studies"
        title="Real Results for Real Medical Practices"
        description="Explore how we've helped healthcare professionals across specialties grow their practices through strategic digital marketing."
        backgroundImage={heroCasestudies}
        primaryCta={{ text: "Get Similar Results", link: "/contact" }}
        secondaryCta={{ text: "Read Testimonials", link: "/testimonials" }}
      />

      {/* Stats Bar */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "500+", label: "Clients Served" },
              { icon: TrendingUp, value: "250%", label: "Average Growth" },
              { icon: Eye, value: "50M+", label: "Patient Impressions" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-48 ${study.image} flex items-center justify-center`}>
                  <span className="px-4 py-2 bg-background/90 rounded-full text-sm font-medium text-foreground">
                    {study.category}
                  </span>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, i) => (
                      <Link 
                        key={i}
                        to={`/services/${service}`}
                        className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-muted/80 transition-colors"
                      >
                        {serviceLabels[service]}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">All Services</h3>
              <p className="text-muted-foreground mb-4">See our complete range of solutions.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Services <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/testimonials" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Client Testimonials</h3>
              <p className="text-muted-foreground mb-4">Hear from our satisfied clients.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Read Testimonials <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/about" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">About Us</h3>
              <p className="text-muted-foreground mb-4">Learn about our approach and values.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can achieve similar results for your practice.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudies;
