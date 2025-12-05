import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-secondary border-t border-secondary-foreground/10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">M</span>
              </div>
              <span className="font-heading font-semibold text-lg text-secondary-foreground">MedDigital</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              360° Medical Digital Marketing Solutions for doctors, clinics, and hospitals. 
              Building powerful digital presence since 2018.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@meddigital.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">YouTube Management</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">SEO & Visibility</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>© 2024 MedDigital. All rights reserved.</p>
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
