import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImg from "@assets/artcar-logo.png";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511947396500?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20ve%C3%ADculo.";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-12">
        <Link href="/" className="relative z-50 flex-shrink-0 mr-8">
          <img 
            src={logoImg} 
            alt="ArtCar Logo" 
            className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-secondary ${
                isScrolled ? "text-slate-800" : "text-white drop-shadow-md"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button 
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full px-6 shadow-lg shadow-green-500/20"
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
            data-testid="button-whatsapp-header"
          >
            <SiWhatsapp className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} /> 
            // Always dark in menu mode since overlay is white
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-display font-bold text-slate-900 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button 
            size="lg"
            className="mt-4 bg-[#25D366] text-white w-48 rounded-full"
            onClick={() => {
              window.open(WHATSAPP_LINK, '_blank');
              setIsMobileMenuOpen(false);
            }}
            data-testid="button-whatsapp-mobile"
          >
            <SiWhatsapp className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
