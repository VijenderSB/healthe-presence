import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Heart, TrendingUp, Globe, Smartphone, Video, Search, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/hero-about.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're dedicated to helping healthcare professionals reach more patients through effective digital marketing."
  },
  {
    icon: Users,
    title: "Patient-Centric",
    description: "Every strategy we create focuses on improving patient experience and healthcare accessibility."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of quality, creativity, and measurable results."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We believe in transparent, ethical marketing that builds genuine trust with patients."
  }
];

const reasons = [
  {
    icon: TrendingUp,
    stat: "77%",
    title: "Search Before Booking",
    description: "of patients research healthcare providers online before making an appointment."
  },
  {
    icon: Globe,
    stat: "5B+",
    title: "Daily Searches",
    description: "health-related searches are made on Google every single day."
  },
  {
    icon: Smartphone,
    stat: "60%",
    title: "Mobile First",
    description: "of patients use mobile devices to search for healthcare information."
  },
  {
    icon: Video,
    stat: "85%",
    title: "Video Impact",
    description: "of patients prefer watching a video about a doctor before booking."
  }
];

const differentiators = [
  {
    icon: Award,
    title: "Medical Marketing Specialists",
    description: "We exclusively focus on healthcare, understanding the unique challenges and regulations of medical marketing."
  },
  {
    icon: Video,
    title: "Video Production Experts",
    description: "In-house video production team specializing in medical content that educates and builds trust."
  },
  {
    icon: Search,
    title: "Data-Driven Strategies",
    description: "Every decision is backed by data and analytics to ensure maximum ROI for your practice."
  },
  {
    icon: BarChart,
    title: "Proven Results",
    description: "Track record of growing patient bases and online visibility for healthcare practices nationwide."
  }
];

const AboutUs = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>About Us | Transess - India's Leading Medical Digital Marketing Agency</title>
        <meta name="description" content="Learn about Transess - India's premier medical digital marketing agency. 500+ healthcare clients, 8+ years experience helping doctors and hospitals grow their practice." />
        <meta name="keywords" content="about Transess, medical marketing agency India, healthcare digital marketing company, doctor marketing experts" />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        <meta property="og:title" content="About Us | Transess - Medical Digital Marketing" />
        <meta property="og:description" content="India's leading medical marketing agency with 500+ healthcare clients and 8+ years experience." />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Transess" />
        <meta name="twitter:description" content="India's leading medical marketing agency with 500+ healthcare clients." />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      
      <PageHero
        badge="About Us"
        title="Your Partner in Medical Digital Excellence"
        description="We help healthcare professionals build powerful digital presences that attract patients and grow practices."
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
                Founded with a singular vision: to bridge the gap between exceptional healthcare and the patients who need it. We recognized that many brilliant doctors and healthcare facilities were invisible online, while patients struggled to find quality care.
              </p>
              <p className="mb-6">
                Our team combines deep expertise in digital marketing with a genuine passion for healthcare. We understand the unique challenges medical professionals face—from strict regulations to maintaining patient trust while building an online presence.
              </p>
              <p>
                Today, we're proud to be the trusted digital marketing partner for hundreds of healthcare providers, helping them connect with patients who need their expertise.
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

      {/* Why Digital Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Digital Presence Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In today's digital-first world, your online presence is often the first impression patients have of your practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{reason.stat}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
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

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Medical Clients" },
              { value: "10M+", label: "Patients Reached" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "8+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
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
            <Link to="/testimonials" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Client Testimonials</h3>
              <p className="text-muted-foreground mb-4">Hear from healthcare professionals who've worked with us.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Read Stories <ArrowRight className="w-4 h-4 ml-1" />
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
            Join hundreds of healthcare professionals who trust us with their digital marketing.
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
