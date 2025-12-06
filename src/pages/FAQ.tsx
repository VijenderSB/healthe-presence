import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What makes your agency different from other marketing agencies?",
        answer: "We specialize exclusively in healthcare and medical marketing. Our team understands the unique challenges, regulations, and patient psychology involved in medical marketing. We don't take a generic approach—every strategy is tailored specifically for healthcare professionals."
      },
      {
        question: "Do you work with individual doctors or only hospitals?",
        answer: "We work with healthcare providers of all sizes—from individual practitioners and small clinics to large multispecialty hospitals and healthcare chains. Our solutions are scalable and customized based on your practice size and goals."
      },
      {
        question: "How long does it take to see results?",
        answer: "Results timeline varies by service. Social media engagement can improve within weeks, while SEO typically takes 3-6 months for significant ranking improvements. We set realistic expectations during our initial consultation and provide regular progress reports."
      }
    ]
  },
  {
    category: "Services",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer a complete 360° medical digital marketing solution including: website design, social media management, video production, YouTube channel management, SEO & Google visibility, branding & creatives, and patient engagement tools."
      },
      {
        question: "Can I choose individual services or do I need the complete package?",
        answer: "You can choose individual services based on your needs and budget. However, we often recommend a combination of services for the best results, as digital marketing works best as an integrated strategy. We'll help you prioritize based on your goals."
      },
      {
        question: "Do you handle medical content creation?",
        answer: "Yes! We have a team of medical content specialists who create accurate, engaging content. All medical content is reviewed for accuracy and compliance with healthcare advertising guidelines."
      }
    ]
  },
  {
    category: "Pricing",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on your specific needs, practice size, and goals. We offer flexible packages starting from basic monthly retainers to comprehensive enterprise solutions. Contact us for a free consultation and personalized quote."
      },
      {
        question: "Do you require long-term contracts?",
        answer: "We typically recommend a minimum 6-month commitment for services like SEO that require time to show results. However, we offer flexible arrangements and month-to-month options for certain services. Our goal is to earn your business through results, not contracts."
      },
      {
        question: "What is your payment structure?",
        answer: "We offer monthly retainer packages with payment due at the beginning of each month. For large projects like website development, we typically structure payments as 50% upfront and 50% upon completion."
      }
    ]
  },
  {
    category: "Process",
    questions: [
      {
        question: "How do we get started?",
        answer: "Getting started is easy: 1) Schedule a free consultation through our website or phone, 2) We'll discuss your goals and current digital presence, 3) We'll provide a customized strategy and proposal, 4) Upon approval, we begin onboarding and implementation."
      },
      {
        question: "How much of my time will be required?",
        answer: "We understand doctors are busy. We handle all the heavy lifting. Typically, you'll need 2-4 hours for initial onboarding, then just 1-2 hours per month for approvals and feedback. We can work with whatever time you have available."
      },
      {
        question: "How do you report on progress and results?",
        answer: "You'll receive comprehensive monthly reports covering all key metrics, insights, and recommendations. We also schedule quarterly strategy calls to review performance and adjust strategies as needed."
      }
    ]
  },
  {
    category: "Compliance",
    questions: [
      {
        question: "Do you ensure compliance with medical advertising regulations?",
        answer: "Absolutely. We're well-versed in healthcare advertising guidelines and ensure all content complies with relevant regulations. We never make unsubstantiated claims and always prioritize patient safety and trust in our messaging."
      },
      {
        question: "How do you handle patient privacy and HIPAA compliance?",
        answer: "Patient privacy is paramount. We never access patient data directly. Any testimonials or case studies are obtained with proper consent. Our website solutions are built with security best practices, and we can integrate HIPAA-compliant forms if needed."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our medical digital marketing services.
            </p>
          </div>
        </div>
      </section>

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
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

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
