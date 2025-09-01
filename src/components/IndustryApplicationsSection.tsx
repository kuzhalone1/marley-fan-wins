import { Button } from "@/components/ui/button";
import { Factory, Warehouse, Car, Shirt, UtensilsCrossed, Building, ArrowRight, FileText } from "lucide-react";

const IndustryApplicationsSection = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Reduce energy costs in production facilities",
      benefits: ["40% cooling cost reduction", "Improved equipment efficiency", "Better air quality"],
      caseStudy: "Automotive parts manufacturer saves ₹12L annually"
    },
    {
      icon: Warehouse,
      title: "Warehousing", 
      description: "Optimize storage and logistics environments",
      benefits: ["20,000+ sq ft coverage per fan", "Reduced humidity buildup", "Worker comfort"],
      caseStudy: "E-commerce warehouse cuts energy bills by 35%"
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Improve workshop comfort and efficiency",
      benefits: ["Heat dissipation from machinery", "Paint booth applications", "Assembly line cooling"],
      caseStudy: "Service center improves productivity by 25%"
    },
    {
      icon: Shirt,
      title: "Textile",
      description: "Control humidity and air quality",
      benefits: ["Fiber quality preservation", "Reduced static electricity", "Worker safety"],
      caseStudy: "Spinning mill achieves 30% energy savings"
    },
    {
      icon: UtensilsCrossed,
      title: "Food Processing",
      description: "Maintain hygienic cooling standards", 
      benefits: ["HACCP compliant airflow", "Temperature control", "Moisture management"],
      caseStudy: "Dairy facility reduces contamination risk"
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Create comfortable office environments",
      benefits: ["Open office cooling", "Reception area comfort", "Meeting room airflow"],
      caseStudy: "IT office saves ₹5L in AC costs"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proven Solutions Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From manufacturing to warehousing, our HVLS fans deliver measurable results in diverse industrial environments
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="industrial-card group cursor-pointer">
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                    <p className="text-muted-foreground text-sm">{industry.description}</p>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study Preview */}
                <div className="bg-accent/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-primary mb-2">📊 Success Story</p>
                  <p className="text-sm text-muted-foreground">{industry.caseStudy}</p>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  See Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Industry Expertise CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent-orange/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Industry-Specific Expertise</h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Our engineering team has 14+ years of experience designing HVLS solutions for diverse industrial applications. 
            We understand the unique challenges of each industry.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-primary mb-2">14+</div>
              <div className="text-sm text-muted-foreground">Years Industry Experience</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-accent-orange mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-success mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Industry Verticals</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Factory className="mr-2 h-5 w-5" />
              Get Industry-Specific Quote
            </Button>
            <Button size="lg" variant="outline">
              <FileText className="mr-2 h-5 w-5" />
              Download Industry Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplicationsSection;