import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import transessLogo from "@/assets/transess-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-secondary border-t border-secondary-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={transessLogo} alt="Transess" className="h-12 w-auto" />
            </Link>
            <p className="text-secondary-foreground/70 mb-6 text-sm">
              360° Medical Digital Marketing Solutions for doctors, clinics, and hospitals.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@transess.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 8447314061
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 8826134489
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Noida, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/services/website-design" className="hover:text-secondary-foreground transition-colors">Website Design</Link></li>
              <li><Link to="/services/social-media" className="hover:text-secondary-foreground transition-colors">Social Media</Link></li>
              <li><Link to="/services/video-production" className="hover:text-secondary-foreground transition-colors">Video Production</Link></li>
              <li><Link to="/services/youtube-management" className="hover:text-secondary-foreground transition-colors">YouTube Management</Link></li>
              <li><Link to="/services/seo" className="hover:text-secondary-foreground transition-colors">SEO & Visibility</Link></li>
              <li><Link to="/services/branding" className="hover:text-secondary-foreground transition-colors">Branding & Creatives</Link></li>
              <li><Link to="/services/patient-engagement" className="hover:text-secondary-foreground transition-colors">Patient Engagement</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/about" className="hover:text-secondary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-secondary-foreground transition-colors">Testimonials</Link></li>
              <li><Link to="/case-studies" className="hover:text-secondary-foreground transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-secondary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-secondary-foreground transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-secondary-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/contact" className="hover:text-secondary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary-foreground transition-colors">All Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-secondary-foreground transition-colors">View Our Work</Link></li>
              <li><Link to="/faq" className="hover:text-secondary-foreground transition-colors">Common Questions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>© 2024 Transess. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
