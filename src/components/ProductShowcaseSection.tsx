import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, Zap, ArrowRight, Eye, Calculator } from "lucide-react";

const ProductShowcaseSection = () => {
  const products = [
    {
      model: "MGF-24 B5",
      coverage: "20,000 sq ft",
      cfm: "442,860 CFM",
      power: "1.5kW",
      price: "₹XX,XXX",
      badge: "Most Popular",
      badgeVariant: "default" as const,
      description: "Ideal for large manufacturing facilities and warehouses"
    },
    {
      model: "MGF-20 B5", 
      coverage: "15,000 sq ft",
      cfm: "379,610 CFM",
      power: "1.5kW",
      price: "₹XX,XXX",
      badge: "Best Value",
      badgeVariant: "secondary" as const,
      description: "Perfect balance of coverage and efficiency"
    },
    {
      model: "MGF-16 B5",
      coverage: "10,000 sq ft",
      cfm: "204,215 CFM", 
      power: "1.1kW",
      price: "₹XX,XXX",
      badge: null,
      badgeVariant: null,
      description: "Compact solution for smaller facilities"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Industrial-Grade HVLS Fans for Every Facility Size
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for maximum efficiency and reliability in demanding industrial environments
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="industrial-card relative group cursor-pointer">
              {/* Badge */}
              {product.badge && (
                <Badge 
                  variant={product.badgeVariant}
                  className="absolute -top-3 left-6 z-10 bg-accent-orange text-white px-3 py-1"
                >
                  {product.badge}
                </Badge>
              )}

              {/* Product Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-muted/50 to-muted rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <Wind className="h-16 w-16 text-primary opacity-50" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.model}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-accent/20 rounded p-3">
                    <div className="font-medium">Coverage</div>
                    <div className="text-primary font-bold">{product.coverage}</div>
                  </div>
                  <div className="bg-accent/20 rounded p-3">
                    <div className="font-medium">Air Flow</div>
                    <div className="text-primary font-bold">{product.cfm}</div>
                  </div>
                  <div className="bg-accent/20 rounded p-3">
                    <div className="font-medium">Power</div>
                    <div className="text-success font-bold">{product.power}</div>
                  </div>
                  <div className="bg-accent/20 rounded p-3">
                    <div className="font-medium">Price</div>
                    <div className="text-accent-orange font-bold">{product.price}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Details
                  </Button>
                  <Button size="sm" className="flex-1 btn-hero">
                    <Calculator className="h-4 w-4 mr-2" />
                    Quote
                  </Button>
                </div>

                {/* Quick Quote Overlay */}
                <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <h4 className="font-bold mb-2">Quick Quote for {product.model}</h4>
                    <p className="text-sm text-muted-foreground mb-4">Get pricing in 30 seconds</p>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Facility size (sq ft)" 
                        className="w-full px-3 py-2 border rounded text-sm"
                      />
                      <input 
                        type="text" 
                        placeholder="Your email" 
                        className="w-full px-3 py-2 border rounded text-sm"
                      />
                      <Button size="sm" className="w-full btn-hero">
                        Get Instant Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-muted/50 to-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Explore Our Complete Range</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer 6 different models to match any facility size and budget. From 8ft to 24ft diameter options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-secondary-action">
                <Wind className="mr-2 h-5 w-5" />
                View All 6 Models
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Zap className="mr-2 h-5 w-5" />
                Compare Specifications
              </Button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-success">5 Years</div>
            <div className="text-sm text-muted-foreground">Comprehensive Warranty</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">99.5%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-accent-orange">40%</div>
            <div className="text-sm text-muted-foreground">Energy Savings</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Technical Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;