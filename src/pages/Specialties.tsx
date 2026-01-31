import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import { Link } from "react-router-dom";
import { specialties } from "@/data/specialties";
import { ArrowRight, Stethoscope } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";

const Specialties = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <PageHero
        badge="Medical Specialties"
        title="360° Digital Marketing for Every Medical Specialty"
        description="From eye care to home healthcare, we provide specialized digital marketing solutions tailored to your medical practice. Choose your specialty below."
        backgroundImage={heroDoctor}
        primaryCta={{ text: "Get Free Consultation", link: "/contact" }}
        secondaryCta={{ text: "View Services", link: "/services" }}
      />

      {/* Specialties Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              All Specialties
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Medical Specialty
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve healthcare providers across 33+ medical specialties with customized digital marketing strategies
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <Link 
                key={specialty.id}
                to={`/${specialty.slug}`}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {specialty.h2}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">33+</div>
              <div className="text-primary-foreground/80">Medical Specialties</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Healthcare Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">10M+</div>
              <div className="text-primary-foreground/80">Patient Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">8+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      <Footer />
    </main>
  );
};

export default Specialties;
