import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCasestudies from "@/assets/hero-casestudies.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const caseStudies = [
  {
    title: "Cardiology Practice",
    category: "Cardiology",
    challenge: "An established cardiologist wanted a clearer, more accessible online presence to help patients find reliable information about the practice.",
    solution: "We redesigned the website, organised factual educational content across social media, and set up a YouTube channel for condition explainers.",
    services: ["website-design", "social-media", "youtube-management"],
    image: "bg-gradient-to-br from-primary/20 to-secondary/20"
  },
  {
    title: "Multi-Location Dental Clinic",
    category: "Dental",
    challenge: "A multi-location dental group needed consistent branding and clear, accurate information across all of its sites.",
    solution: "We developed unified branding, location-specific information pages, a patient communication system, and educational treatment videos.",
    services: ["branding", "seo", "patient-engagement"],
    image: "bg-gradient-to-br from-accent/20 to-primary/20"
  },
  {
    title: "Multispecialty Hospital",
    category: "Hospital",
    challenge: "A new hospital needed to introduce itself and provide clear, factual information about its departments and doctors.",
    solution: "We built a department-wise website, factual doctor profiles, and public health education videos explaining services and procedures.",
    services: ["website-design", "video-production", "social-media"],
    image: "bg-gradient-to-br from-secondary/20 to-accent/20"
  },
  {
    title: "Dermatology Clinic",
    category: "Dermatology",
    challenge: "A dermatology practice wanted to communicate its areas of expertise accurately and professionally.",
    solution: "We created clear branding and an educational video series explaining common skin conditions and preventive care.",
    services: ["branding", "video-production", "social-media"],
    image: "bg-gradient-to-br from-purple-500/20 to-primary/20"
  },
  {
    title: "Sports Medicine Practice",
    category: "Orthopedics",
    challenge: "A sports medicine practice wanted to share injury-prevention and recovery information with a digital-first audience.",
    solution: "We produced factual YouTube and short-form content on injury prevention and rehabilitation, supported by clear branding.",
    services: ["youtube-management", "social-media", "branding"],
    image: "bg-gradient-to-br from-green-500/20 to-primary/20"
  },
  {
    title: "Psychiatry Clinic",
    category: "Psychiatry",
    challenge: "A mental health practice wanted to share accurate information and reduce stigma for patients who may hesitate to seek help.",
    solution: "We shaped an education-focused content strategy with accessible, factual mental health information and patient communication tools.",
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
      <Head>
        <title>Medical Marketing Case Studies | Our Work | Transess India</title>
        <meta name="description" content="Examples of our work with cardiologists, dentists, hospitals and clinics: websites, factual educational content, video production and patient communication." />
        <meta name="keywords" content="medical marketing case studies, healthcare marketing examples, doctor digital marketing, hospital website design, medical content production" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/case-studies`} />
        <meta property="og:title" content="Medical Marketing Case Studies | Transess" />
        <meta property="og:description" content="Examples of our work across medical specialties and healthcare organisations." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/case-studies`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Transess Medical Marketing" />
        <meta name="twitter:description" content="Examples of our work across medical specialties." />
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Case Studies" }]} />
      
      <PageHero
        badge="Our Work"
        title="Our Work with Medical Practices"
        description="Examples of how we've worked with healthcare professionals across specialties on websites, factual educational content, and patient communication."
        backgroundImage={heroCasestudies}
        primaryCta={{ text: "Start a Conversation", link: "/contact" }}
      />

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
                  
                  <div className="flex flex-wrap gap-2">
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
            
            <Link to="/case-studies" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Work</h3>
              <p className="text-muted-foreground mb-4">Explore examples of our work across specialties.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Our Work <ArrowRight className="w-4 h-4 ml-1" />
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
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your practice with compliant, factual digital marketing.
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
