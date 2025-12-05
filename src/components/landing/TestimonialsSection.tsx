import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Orthopedic Surgeon",
      location: "Mumbai",
      image: "RS",
      quote: "Within 6 months, my patient appointments doubled. The video content they created positioned me as the go-to spine specialist in my city. Best investment for my practice.",
      result: "+127% New Patients",
    },
    {
      name: "Dr. Priya Menon",
      specialty: "Dermatologist",
      location: "Bangalore",
      image: "PM",
      quote: "I was skeptical about social media, but their team made it effortless. My Instagram went from 500 to 50K followers. Now patients come saying they've watched my skin care videos.",
      result: "50K+ Followers",
    },
    {
      name: "Dr. Amit Verma",
      specialty: "Cardiologist",
      location: "Delhi",
      image: "AV",
      quote: "The YouTube channel they built for me now gets 100K views monthly. Patients from other states are booking consultations. The ROI has been incredible.",
      result: "100K Monthly Views",
    },
    {
      name: "Dr. Sneha Patel",
      specialty: "IVF Specialist",
      location: "Ahmedabad",
      image: "SP",
      quote: "They understood the sensitivity of fertility treatments. Their patient education videos and reputation management turned our clinic into the most trusted IVF center in Gujarat.",
      result: "4.9★ Google Rating",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Doctors Who <span className="text-gradient">Transformed</span> Their Practice
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real healthcare professionals who trusted us with their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 md:p-8 rounded-2xl bg-card shadow-card border border-border"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Result Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-heading font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.specialty} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
