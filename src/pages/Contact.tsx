import { Head } from "vite-react-ssg";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroContact from "@/assets/hero-contact.jpg";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 8447314061", "+91 8826134489"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@transess.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Noida, India"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Contact Transess | Free Medical Marketing Consultation | Call +91 8447314061</title>
        <meta name="description" content="Get a FREE consultation for your medical practice. Contact Transess, a medical digital marketing agency. Call +91 8447314061, email info@transess.com or fill our form. We respond within 24 hours." />
        <meta name="keywords" content="contact Transess, medical marketing consultation, free healthcare consultation, doctor marketing agency contact, hospital marketing quote" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/contact`} />
        <meta property="og:title" content="Contact Transess | Free Medical Marketing Consultation" />
        <meta property="og:description" content="Get free consultation for your practice. Call +91 8447314061 or fill our form!" />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Transess | Free Consultation" />
        <meta name="twitter:description" content="Get free medical marketing consultation. We respond in 24 hours!" />
      </Head>
      <Navbar />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      
      <PageHero
        badge="Contact Us"
        title="Let's Grow Your Practice Together"
        description="Ready to transform your digital presence? Get in touch with our team for a free consultation."
        backgroundImage={heroContact}
      />

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ContactForm />
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Why Contact Us */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  {[
                    "We'll schedule a free 30-minute consultation",
                    "Discuss your goals and current digital presence",
                    "Provide a customized strategy recommendation",
                    "Share a detailed proposal with pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link to="/services" className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/case-studies" className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/faq" className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Frequently Asked Questions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/case-studies" className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Our Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
