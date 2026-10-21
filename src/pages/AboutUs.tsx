import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Heart, Video, Search, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/hero-about.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We help healthcare professionals communicate with patients through factual, ethical digital marketing."
  },
  {
    icon: Users,
    title: "Patient-Centric",
    description: "Every strategy we create focuses on clear, accurate information that supports patients and healthcare accessibility."
  },
  {
    icon: Award,
    title: "Compliance-First",
    description: "We hold ourselves to healthcare advertising guidelines, keeping all communication accurate and verifiable."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We believe in transparent, ethical marketing that builds genuine trust with patients."
  }
];

const differentiators = [
  {
    icon: Award,
    title: "Medical Marketing Specialists",
    description: "We focus on healthcare, understanding the unique challenges and regulations of medical marketing."
  },
  {
    icon: Video,
    title: "In-House Video Production",
    description: "A video production team that creates factual, educational medical content."
  },
  {
    icon: Search,
    title: "Data-Informed Strategies",
    description: "Our decisions are informed by data and analytics to support clear, measurable communication for your practice."
  },
  {
    icon: BarChart,
    title: "Ethical, Compliant Approach",
    description: "We align every campaign with healthcare advertising guidelines and avoid unsubstantiated claims."
  }
];

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>About Transess | Ethical Medical Digital Marketing Agency</title>
        <meta name="description" content="Transess is a medical digital marketing agency for doctors, clinics & hospitals. We deliver ethical, compliant digital marketing built on accurate, factual communication." />
        <meta name="keywords" content="about Transess, medical marketing agency India, healthcare digital marketing company, ethical medical marketing, doctor marketing, hospital marketing" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/about`} />
        <meta property="og:title" content="About Transess | Ethical Medical Marketing Agency" />
        <meta property="og:description" content="A medical digital marketing agency for doctors, clinics & hospitals, built on ethical, compliant and factual communication." />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Transess | Medical Marketing Agency" />
        <meta name="twitter:description" content="A medical digital marketing agency for doctors, clinics and hospitals." />
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      
      <PageHero
        badge="About Us"
        title="Your Partner in Medical Digital Excellence"
        description="We help healthcare professionals build a clear, factual and NMC-compliant digital presence that helps patients find accurate information."
        backgroundImage={heroAbout}
        primaryCta={{ text: "Work With Us", link: "/contact" }}
        secondaryCta={{ text: "Explore Services", link: "/services" }}
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                We founded Transess to help doctors, clinics and hospitals communicate with patients online in a way that is accurate, ethical and compliant with healthcare advertising guidelines.
              </p>
              <p className="mb-6">
                Our team combines expertise in digital marketing with an understanding of healthcare. We know the unique challenges medical professionals face, from advertising regulations to maintaining patient trust while building an online presence.
              </p>
              <p>
                We work as a digital marketing partner for healthcare providers, helping them share factual information about their services with the patients who are looking for them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from generic marketing agencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore More
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/case-studies" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Work</h3>
              <p className="text-muted-foreground mb-4">See examples of the healthcare projects we've worked on.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Work <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/case-studies" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Case Studies</h3>
              <p className="text-muted-foreground mb-4">Detailed breakdowns of our successful projects.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Cases <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/careers" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Join Our Team</h3>
              <p className="text-muted-foreground mb-4">Explore career opportunities with us.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Openings <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with a medical digital marketing agency that keeps your communication accurate and compliant.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
