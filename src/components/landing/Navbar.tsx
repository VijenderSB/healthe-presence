import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import transessLogo from "@/assets/transess-header-logo.png";
import { specialties } from "@/data/specialties";
import { cities } from "@/data/cities";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  const topCities = cities.filter(c => c.tier === 1).slice(0, 8);

  const services = [
    { label: "Personal Branding & Health Education", href: "/services/influencer-marketing", featured: true },
    { label: "Generative Engine Optimization (GEO)", href: "/services/geo", featured: true },
    { label: "Website Design", href: "/services/website-design" },
    { label: "Social Media", href: "/services/social-media" },
    { label: "Video Production", href: "/services/video-production" },
    { label: "YouTube Management", href: "/services/youtube-management" },
    { label: "SEO & Google", href: "/services/seo" },
    { label: "Branding", href: "/services/branding" },
    { label: "Patient Engagement", href: "/services/patient-engagement" },
  ];

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={transessLogo}
            alt="Transess - Medical Digital Marketing Agency"
            className="h-24 md:h-28 w-auto max-w-[180px] md:max-w-[220px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <Link to="/services" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium">
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[240px]">
                {services.map((service) => (
                  <Link 
                    key={service.label} 
                    to={service.href} 
                    className={`block px-4 py-2 transition-colors ${
                      service.featured 
                        ? 'bg-primary/10 text-primary font-semibold hover:bg-primary/20' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {service.featured && <span className="mr-2">⭐</span>}
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Specialties Dropdown */}
          <div className="relative group">
            <Link to="/specialties" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium">
              Specialties <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[280px] max-h-[400px] overflow-y-auto">
                {specialties.slice(0, 12).map((specialty) => (
                  <Link 
                    key={specialty.id} 
                    to={`/${specialty.slug}`}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {specialty.name}
                  </Link>
                ))}
                <Link 
                  to="/specialties"
                  className="block px-4 py-2 text-primary font-semibold hover:bg-primary/10 transition-colors border-t border-border mt-2"
                >
                  View All Specialties →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Cities Dropdown */}
          <div className="relative group">
            <Link to="/cities" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium">
              Cities <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[260px]">
                {topCities.map((city) => (
                  <Link 
                    key={city.id} 
                    to={`/${city.slug}`}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
                <Link 
                  to="/cities"
                  className="block px-4 py-2 text-primary font-semibold hover:bg-primary/10 transition-colors border-t border-border mt-2"
                >
                  View All Cities →
                </Link>
              </div>
            </div>
          </div>

          {navLinks.slice(0, 2).map((link) => (
            <Link key={link.label} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="cta" size="default" asChild>
            <Link to="/contact">Book Free Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container py-4 flex flex-col gap-2">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {services.map((service) => (
                  <Link 
                    key={service.label} 
                    to={service.href} 
                    className={`transition-colors py-1 ${
                      service.featured 
                        ? 'text-primary font-semibold' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`} 
                    onClick={() => setIsOpen(false)}
                  >
                    {service.featured && <span className="mr-2">⭐</span>}
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
            
            <button onClick={() => setSpecialtiesOpen(!specialtiesOpen)} className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              Specialties <ChevronDown className={`w-4 h-4 transition-transform ${specialtiesOpen ? 'rotate-180' : ''}`} />
            </button>
            {specialtiesOpen && (
              <div className="pl-4 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {specialties.slice(0, 12).map((specialty) => (
                  <Link 
                    key={specialty.id} 
                    to={`/${specialty.slug}`}
                    className="transition-colors py-1 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {specialty.name}
                  </Link>
                ))}
                <Link 
                  to="/specialties"
                  className="transition-colors py-1 text-primary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  View All Specialties →
                </Link>
              </div>
            )}
            
            <button onClick={() => setCitiesOpen(!citiesOpen)} className="flex items-center justify-between text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              Cities <ChevronDown className={`w-4 h-4 transition-transform ${citiesOpen ? 'rotate-180' : ''}`} />
            </button>
            {citiesOpen && (
              <div className="pl-4 flex flex-col gap-2 max-h-[200px] overflow-y-auto">
                {topCities.map((city) => (
                  <Link 
                    key={city.id} 
                    to={`/${city.slug}`}
                    className="transition-colors py-1 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {city.name}
                  </Link>
                ))}
                <Link 
                  to="/cities"
                  className="transition-colors py-1 text-primary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  View All Cities →
                </Link>
              </div>
            )}

            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button variant="cta" className="mt-2" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Book Free Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
