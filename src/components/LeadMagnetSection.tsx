import { Button } from "@/components/ui/button";
import { Calculator, FileText, TrendingUp, Users, Download, ArrowRight } from "lucide-react";

const LeadMagnetSection = () => {
  const leadMagnets = [
    {
      icon: Calculator,
      title: "Energy Savings Calculator",
      description: "Interactive tool showing potential cost reductions",
      preview: "Calculate ₹2.5L annual savings",
      cta: "Try Calculator",
      type: "interactive"
    },
    {
      icon: FileText,
      title: "HVLS Fan Selection Guide",
      description: "Comprehensive PDF guide with facility size inputs",
      preview: "Choose perfect fan for your facility",
      cta: "Download Guide",
      type: "download"
    },
    {
      icon: TrendingUp,
      title: "Case Study: 40% Cost Reduction",
      description: "Real success story from textile manufacturer",
      preview: "Real results from textile manufacturer",
      cta: "Read Case Study",
      type: "case-study"
    },
    {
      icon: Users,
      title: "Free Site Assessment",
      description: "On-site evaluation by certified engineers",
      preview: "Expert consultation & facility analysis",
      cta: "Book Assessment",
      type: "consultation"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your Free Industrial Cooling Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access proven resources that have helped 500+ companies reduce energy costs by up to 40%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadMagnets.map((magnet, index) => {
            const IconComponent = magnet.icon;
            return (
              <div key={index} className="industrial-card text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{magnet.title}</h3>
                <p className="text-muted-foreground mb-4">{magnet.description}</p>
                
                <div className="bg-accent/50 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-primary">
                    📊 {magnet.preview}
                  </p>
                </div>

                <Button 
                  className="w-full group-hover:bg-accent-orange group-hover:text-accent-orange-foreground transition-colors duration-300"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {magnet.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Progressive form hint */}
                <p className="text-xs text-muted-foreground mt-3">
                  📧 Email required • No spam guarantee
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure where to start? Get a personalized recommendation
          </p>
          <Button size="lg" className="btn-hero">
            <Users className="mr-2 h-5 w-5" />
            Talk to Energy Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;