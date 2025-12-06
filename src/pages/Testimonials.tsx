import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist",
    location: "Mumbai",
    image: "RS",
    quote: "Since partnering with them, my patient inquiries have increased by 300%. Their understanding of medical marketing is exceptional—they know exactly how to communicate complex cardiac procedures in a way that builds patient trust.",
    result: "300% increase in patient inquiries"
  },
  {
    name: "Dr. Priya Patel",
    specialty: "Dermatologist",
    location: "Delhi",
    image: "PP",
    quote: "The video content they created for my clinic has been transformative. Patients now come in already familiar with our procedures and more confident in their decision to choose us.",
    result: "2x increase in procedure bookings"
  },
  {
    name: "Dr. Arun Kumar",
    specialty: "Orthopedic Surgeon",
    location: "Bangalore",
    image: "AK",
    quote: "Their SEO work put us on the first page of Google for 'orthopedic surgeon Bangalore.' The quality of patient leads has improved dramatically—we're seeing more surgical cases.",
    result: "First page Google ranking"
  },
  {
    name: "Dr. Meera Reddy",
    specialty: "Pediatrician",
    location: "Hyderabad",
    image: "MR",
    quote: "As a pediatrician, trust is everything. Their social media strategy has helped me build a community of parents who actively engage with health content and recommend our clinic.",
    result: "50K+ engaged social followers"
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "Plastic Surgeon",
    location: "Chennai",
    image: "VS",
    quote: "The before-after content strategy and YouTube channel they built for my practice has become my primary source of new patients. The production quality rivals the best in the industry.",
    result: "100K+ YouTube subscribers"
  },
  {
    name: "Dr. Anita Desai",
    specialty: "Gynecologist",
    location: "Pune",
    image: "AD",
    quote: "They transformed our online presence completely. Our website now ranks for dozens of women's health keywords, and the patient education content has positioned me as a thought leader.",
    result: "5x increase in website traffic"
  },
  {
    name: "Apollo Multispecialty Hospital",
    specialty: "Hospital",
    location: "Mumbai",
    image: "AH",
    quote: "Managing digital marketing for a multispecialty hospital is complex, but they handled everything—from department-specific content to reputation management across all our doctors.",
    result: "40% increase in appointments"
  },
  {
    name: "Dr. Suresh Menon",
    specialty: "Ophthalmologist",
    location: "Kochi",
    image: "SM",
    quote: "The patient engagement system they implemented reduced our no-shows by 60% and increased our review ratings. Patients feel more connected to our practice than ever.",
    result: "60% reduction in no-shows"
  }
];

const Testimonials = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Success Stories from Healthcare Professionals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hear directly from doctors and healthcare providers who have transformed their practices with our digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  {testimonial.result}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "10M+", label: "Patients Reached" },
              { value: "4.9/5", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare professionals who have transformed their practices.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
