import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img 
              src={new URL('@/assets/tg-logo.svg', import.meta.url).href} 
              alt="TG Technology" 
              className="h-20 sm:h-24 md:h-28 w-auto mb-4"
            />
            <p className="text-white/70 leading-relaxed">
              Empowering the next generation with industry-aligned skills and
              real-world training programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+919108918437" className="text-white/70 hover:text-accent transition-colors">
                  +91 91089 18437
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  No 57, VV Layout, Malathahalli, Bangalore – 560056
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@tgtechnology.com" className="text-white/70 hover:text-accent transition-colors">
                  contact@tgtechnology.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © 2025 TG Technology – TavastaGuha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
