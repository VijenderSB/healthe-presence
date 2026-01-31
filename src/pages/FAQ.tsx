import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroFaq from "@/assets/hero-faq.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What makes your agency different from other marketing agencies?",
        answer: "We specialize exclusively in healthcare and medical marketing. Our team understands the unique challenges, regulations, and patient psychology involved in medical marketing. We don't take a generic approach—every strategy is tailored specifically for healthcare professionals.",
        relatedService: null
      },
      {
        question: "Do you work with individual doctors or only hospitals?",
        answer: "We work with healthcare providers of all sizes—from individual practitioners and small clinics to large multispecialty hospitals and healthcare chains. Our solutions are scalable and customized based on your practice size and goals.",
        relatedService: null
      },
      {
        question: "How long does it take to see results?",
        answer: "Results timeline varies by service. Social media engagement can improve within weeks, while SEO typically takes 3-6 months for significant ranking improvements. We set realistic expectations during our initial consultation and provide regular progress reports.",
        relatedService: null
      }
    ]
  },
  {
    category: "Services",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer a complete 360° medical digital marketing solution including: website design, social media management, video production, YouTube channel management, SEO & Google visibility, branding & creatives, and patient engagement tools.",
        relatedService: "services"
      },
      {
        question: "Can I choose individual services or do I need the complete package?",
        answer: "You can choose individual services based on your needs and budget. However, we often recommend a combination of services for the best results, as digital marketing works best as an integrated strategy. We'll help you prioritize based on your goals.",
        relatedService: "services"
      },
      {
        question: "Do you handle medical content creation?",
        answer: "Yes! We have a team of medical content specialists who create accurate, engaging content. All medical content is reviewed for accuracy and compliance with healthcare advertising guidelines.",
        relatedService: "social-media"
      },
      {
        question: "How does your SEO service work?",
        answer: "Our SEO service includes local SEO optimization, technical SEO audits, keyword research specific to medical terms, content optimization, link building from healthcare websites, and monthly performance reporting. We focus on ranking for terms that bring in actual patients.",
        relatedService: "seo"
      },
      {
        question: "What kind of videos do you produce?",
        answer: "We produce doctor introduction videos, procedure explainers, patient education content, testimonial videos, facility tours, and short-form content for social media. All videos are shot professionally and optimized for the platforms where they'll be shared.",
        relatedService: "video-production"
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on your specific needs, practice size, and goals. We offer flexible packages starting from basic monthly retainers to comprehensive enterprise solutions. Contact us for a free consultation and personalized quote.",
        relatedService: "contact"
      },
      {
        question: "Do you require long-term contracts?",
        answer: "We typically recommend a minimum 6-month commitment for services like SEO that require time to show results. However, we offer flexible arrangements and month-to-month options for certain services. Our goal is to earn your business through results, not contracts.",
        relatedService: null
      },
      {
        question: "What is your payment structure?",
        answer: "We offer monthly retainer packages with payment due at the beginning of each month. For large projects like website development, we typically structure payments as 50% upfront and 50% upon completion.",
        relatedService: null
      }
    ]
  },
  {
    category: "Process",
    questions: [
      {
        question: "How do we get started?",
        answer: "Getting started is easy: 1) Schedule a free consultation through our website or phone, 2) We'll discuss your goals and current digital presence, 3) We'll provide a customized strategy and proposal, 4) Upon approval, we begin onboarding and implementation.",
        relatedService: "contact"
      },
      {
        question: "How much of my time will be required?",
        answer: "We understand doctors are busy. We handle all the heavy lifting. Typically, you'll need 2-4 hours for initial onboarding, then just 1-2 hours per month for approvals and feedback. We can work with whatever time you have available.",
        relatedService: null
      },
      {
        question: "How do you report on progress and results?",
        answer: "You'll receive comprehensive monthly reports covering all key metrics, insights, and recommendations. We also schedule quarterly strategy calls to review performance and adjust strategies as needed.",
        relatedService: null
      }
    ]
  },
  {
    category: "Compliance",
    questions: [
      {
        question: "Do you ensure compliance with medical advertising regulations?",
        answer: "Absolutely. We're well-versed in healthcare advertising guidelines and ensure all content complies with relevant regulations. We never make unsubstantiated claims and always prioritize patient safety and trust in our messaging.",
        relatedService: null
      },
      {
        question: "How do you handle patient privacy and HIPAA compliance?",
        answer: "Patient privacy is paramount. We never access patient data directly. Any testimonials or case studies are obtained with proper consent. Our website solutions are built with security best practices, and we can integrate HIPAA-compliant forms if needed.",
        relatedService: "website-design"
      }
    ]
  }
];

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>FAQ | Transess - Medical Digital Marketing Questions Answered</title>
        <meta name="description" content="Frequently asked questions about medical digital marketing services. Learn about pricing, process, timeline, and compliance for doctor and hospital marketing." />
        <meta name="keywords" content="medical marketing FAQ, healthcare digital marketing questions, doctor marketing pricing, hospital SEO FAQ" />
        <link rel="canonical" href={`${BASE_URL}/faq`} />
        <meta property="og:title" content="FAQ | Transess - Medical Digital Marketing" />
        <meta property="og:description" content="Find answers to common questions about our medical digital marketing services." />
        <meta property="og:url" content={`${BASE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Transess" />
        <meta name="twitter:description" content="Answers to common medical marketing questions." />
      </Helmet>
      <Navbar />
      
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our medical digital marketing services."
        backgroundImage={heroFaq}
        primaryCta={{ text: "Still Have Questions? Contact Us", link: "/contact" }}
      />

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${sectionIndex}-${index}`}
                      className="border border-border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        <p className="mb-4">{faq.answer}</p>
                        {faq.relatedService && (
                          <Link 
                            to={faq.relatedService === "contact" ? "/contact" : faq.relatedService === "services" ? "/services" : `/services/${faq.relatedService}`}
                            className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                          >
                            {faq.relatedService === "contact" ? "Contact Us" : "Learn More About This Service"} <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore More
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/services" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Services</h3>
              <p className="text-sm text-muted-foreground mb-3">View all our offerings</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/case-studies" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground mb-3">See our results</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                View <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/testimonials" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Testimonials</h3>
              <p className="text-sm text-muted-foreground mb-3">Hear from clients</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Read <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/about" className="group p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">About Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Our story & values</p>
              <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* Still Have Questions */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQ;
