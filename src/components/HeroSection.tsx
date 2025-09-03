import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-industrial-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Industrial facility with HVLS ceiling fans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="trust-metric">₹2 Crore+</span>
              <span className="opacity-90">Energy Savings Generated</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="trust-metric">14+</span>
              <span className="opacity-90">Years Experience</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="trust-metric">Pan-India</span>
              <span className="opacity-90">Service</span>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            India's <span className="text-accent-orange">#1 HVLS Fans</span>
            <br />
            Save 40% Energy Costs
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto">
            Trusted by 500+ Manufacturing & Warehousing Companies Across India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="btn-hero w-full sm:w-auto text-lg px-8 py-4 rounded-full font-semibold group"
            >
              Get Free Energy Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="btn-secondary-action text-lg px-8 py-4 rounded-full font-semibold"
                onClick={() => navigate('/roi-calculator')}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Your Savings
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 rounded-full font-semibold border-white text-white hover:bg-white hover:text-primary"
                onClick={() => navigate('/products')}
              >
                View All Products
              </Button>
            </div>
            
            <Button 
              size="lg" 
              className="btn-whatsapp w-full sm:w-auto text-lg px-8 py-4 rounded-full font-semibold"
              asChild
            >
              <a 
                href="https://wa.me/919030034982?text=Hi, I'm interested in HVLS fans for my facility"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Quote
              </a>
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Support: +91 90300 34982</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div>Response within 2 hours guaranteed</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;