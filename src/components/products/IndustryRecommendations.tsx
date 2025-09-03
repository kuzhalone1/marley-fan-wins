import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, Warehouse, Car, Shirt, 
  ChefHat, Building, TrendingUp, Users 
} from "lucide-react";

const industries = [
  {
    id: "manufacturing",
    name: "Manufacturing Plants",
    icon: Factory,
    description: "High-ceiling production floors, assembly lines, and heavy machinery areas",
    recommendedModels: ["MGF-20 B5", "MGF-24 B5"],
    coverage: "15,000 - 20,000 sq ft per fan",
    benefits: ["Reduces AC load by 40%", "Improves worker comfort", "Lower maintenance costs"],
    caseStudy: {
      company: "ABC Auto Components",
      savings: "₹8.2L annually",
      payback: "16 months",
      improvement: "Enhanced productivity by 15%"
    },
    applications: ["Production floors", "Assembly lines", "Quality control areas", "Tool rooms"]
  },
  {
    id: "warehouses",
    name: "Warehouses & Distribution",
    icon: Warehouse,
    description: "Large storage areas, loading docks, and distribution centers",
    recommendedModels: ["MGF-18 B5", "MGF-20 B5"],
    coverage: "12,000 - 15,000 sq ft per fan",
    benefits: ["Prevents condensation", "Maintains product quality", "Energy-efficient cooling"],
    caseStudy: {
      company: "XYZ Logistics Hub",
      savings: "₹6.5L annually",
      payback: "18 months",
      improvement: "Reduced spoilage by 25%"
    },
    applications: ["Storage areas", "Loading docks", "Picking zones", "Cross-docking areas"]
  },
  {
    id: "automotive",
    name: "Automotive Workshops",
    icon: Car,
    description: "Service bays, paint booths, and vehicle assembly areas",
    recommendedModels: ["MGF-16 B5", "MGF-18 B5"],
    coverage: "10,000 - 12,000 sq ft per fan",
    benefits: ["Fume extraction assistance", "Temperature control", "Noise reduction"],
    caseStudy: {
      company: "Elite Service Center",
      savings: "₹4.8L annually",
      payback: "20 months",
      improvement: "Better air quality standards"
    },
    applications: ["Service bays", "Paint booths", "Assembly lines", "Parts storage"]
  },
  {
    id: "food-processing",
    name: "Food Processing",
    icon: ChefHat,
    description: "Hygienic environments with strict temperature and humidity control",
    recommendedModels: ["MGF-14 B5", "MGF-16 B5"],
    coverage: "8,000 - 10,000 sq ft per fan",
    benefits: ["Hygienic design", "Easy cleaning", "Humidity control"],
    caseStudy: {
      company: "Fresh Foods Ltd",
      savings: "₹5.2L annually",
      payback: "19 months",
      improvement: "Improved food safety compliance"
    },
    applications: ["Processing areas", "Packaging zones", "Cold storage areas", "Quality labs"]
  },
  {
    id: "textile",
    name: "Textile Mills",
    icon: Shirt,
    description: "Spinning, weaving, dyeing, and finishing areas with high humidity",
    recommendedModels: ["MGF-18 B5", "MGF-20 B5"],
    coverage: "12,000 - 15,000 sq ft per fan",
    benefits: ["Humidity control", "Dust management", "Thread quality improvement"],
    caseStudy: {
      company: "Premium Textiles",
      savings: "₹7.8L annually",
      payback: "17 months",
      improvement: "Reduced thread breakage by 30%"
    },
    applications: ["Spinning halls", "Weaving sheds", "Dyeing areas", "Finishing sections"]
  },
  {
    id: "commercial",
    name: "Commercial Spaces",
    icon: Building,
    description: "Offices, retail spaces, restaurants, and public buildings",
    recommendedModels: ["MGF-12 B5", "MGF-14 B5"],
    coverage: "6,000 - 8,000 sq ft per fan",
    benefits: ["Energy savings", "Quiet operation", "Aesthetic appeal"],
    caseStudy: {
      company: "Metro Mall",
      savings: "₹3.5L annually",
      payback: "22 months",
      improvement: "Enhanced customer comfort"
    },
    applications: ["Office spaces", "Retail stores", "Restaurants", "Exhibition halls"]
  }
];

export const IndustryRecommendations = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Recommended HVLS Fans by Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the optimal HVLS fan solution for your specific industry needs, 
            backed by real-world case studies and proven ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Card key={industry.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {industry.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Recommended Models */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Recommended Models</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.recommendedModels.map((model) => (
                        <Badge key={model} variant="secondary">{model}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Coverage */}
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Coverage Area</h4>
                    <p className="text-sm text-muted-foreground">{industry.coverage}</p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Benefits</h4>
                    <ul className="text-sm space-y-1">
                      {industry.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Case Study */}
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      Success Story
                    </h4>
                    <div className="text-sm space-y-1">
                      <p><strong>{industry.caseStudy.company}</strong></p>
                      <p className="text-green-600 font-medium">{industry.caseStudy.savings}</p>
                      <p className="text-muted-foreground">
                        {industry.caseStudy.payback} payback • {industry.caseStudy.improvement}
                      </p>
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Ideal Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.applications.map((app, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full mt-4">
                    Get Industry-Specific Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our application engineers have experience across 50+ industries. 
                Get a custom recommendation for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Schedule Expert Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View All Applications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};