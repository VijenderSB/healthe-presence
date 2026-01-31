import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroContact from "@/assets/hero-contact.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinic: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Contact Transess | Free Medical Marketing Consultation | Call +91 8447314061</title>
        <meta name="description" content="Get FREE consultation for your medical practice! Contact India's leading healthcare marketing agency. Call +91 8447314061, email info@transess.com or fill our form. We respond within 24 hours." />
        <meta name="keywords" content="contact Transess, medical marketing consultation, free healthcare consultation, doctor marketing agency contact, hospital marketing quote" />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <meta property="og:title" content="Contact Transess | Free Medical Marketing Consultation" />
        <meta property="og:description" content="Get free consultation for your practice. Call +91 8447314061 or fill our form!" />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Transess | Free Consultation" />
        <meta name="twitter:description" content="Get free medical marketing consultation. We respond in 24 hours!" />
      </Helmet>
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
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="doctor@clinic.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Clinic/Hospital Name</label>
                    <Input
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleChange}
                      placeholder="Your clinic name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Medical Website Design</option>
                    <option value="social">Social Media Management</option>
                    <option value="video">Video Production</option>
                    <option value="youtube">YouTube Management</option>
                    <option value="seo">SEO & Google Visibility</option>
                    <option value="branding">Branding & Creatives</option>
                    <option value="engagement">Patient Engagement</option>
                    <option value="complete">Complete 360° Solution</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your practice and goals..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" variant="cta" size="xl" className="w-full">
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>We typically respond within 24 hours</span>
              </div>
            </div>
            
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
                  <Link to="/testimonials" className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors">
                    <span>Client Testimonials</span>
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
