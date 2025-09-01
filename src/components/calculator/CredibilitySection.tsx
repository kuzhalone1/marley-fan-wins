import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Clock, Award } from "lucide-react";

const CredibilitySection = () => {
  const caseStudies = [
    {
      company: "Textile Mill - Rajkot",
      industry: "Textile Manufacturing",
      facilitySize: "75,000 sq ft",
      prediction: "₹6.2L savings",
      actual: "₹6.8L savings",
      accuracy: "110%",
      description: "Large textile manufacturing facility with 24/7 operations. HVLS fans replaced 40 traditional ceiling fans and reduced AC load by 40%.",
      metrics: {
        energyReduction: "42%",
        paybackMonths: "16",
        fanCount: "8 x MGF-20 B5"
      }
    },
    {
      company: "Auto Component Plant - Chennai",
      industry: "Automotive Manufacturing",
      facilitySize: "120,000 sq ft",
      prediction: "18-month payback",
      actual: "16-month payback",
      accuracy: "112%",
      description: "High-precision automotive component manufacturing with strict temperature control requirements.",
      metrics: {
        energyReduction: "38%",
        paybackMonths: "16",
        fanCount: "12 x MGF-24 B5"
      }
    },
    {
      company: "Distribution Warehouse - Mumbai",
      industry: "Warehousing & Logistics",
      facilitySize: "200,000 sq ft",
      prediction: "38% energy reduction",
      actual: "42% energy reduction",
      accuracy: "105%",
      description: "Temperature-controlled warehouse for pharmaceutical and food distribution with multi-shift operations.",
      metrics: {
        energyReduction: "42%",
        paybackMonths: "20",
        fanCount: "15 x MGF-28 B5"
      }
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-4 h-4 mr-2" />
            Validated by Real Results
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Calculator Accuracy Proven in the Field</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our ROI calculator has been validated against actual installations across India. 
            See how our predictions compare to real-world results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="industrial-card h-full">
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{study.company}</h3>
                    <Badge variant="outline" className="text-success border-success">
                      {study.accuracy} Accurate
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{study.industry}</div>
                    <div>{study.facilitySize}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="text-xs text-red-600 font-medium">Calculator Predicted</div>
                      <div className="font-bold text-red-600">{study.prediction}</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-600 font-medium">Actual Result</div>
                      <div className="font-bold text-green-600">{study.actual}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-muted rounded">
                      <TrendingUp className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <div className="text-xs text-muted-foreground">Energy Saved</div>
                      <div className="font-bold text-sm">{study.metrics.energyReduction}</div>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-accent-orange" />
                      <div className="text-xs text-muted-foreground">Payback</div>
                      <div className="font-bold text-sm">{study.metrics.paybackMonths}m</div>
                    </div>
                    <div className="p-2 bg-muted rounded">
                      <CheckCircle className="w-4 h-4 mx-auto mb-1 text-success" />
                      <div className="text-xs text-muted-foreground">Fans Used</div>
                      <div className="font-bold text-xs">{study.metrics.fanCount}</div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {study.description}
                </p>

                <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <div className="text-sm font-medium text-primary">Customer Testimonial</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    "The calculator gave us confidence to proceed. Results exceeded expectations and payback was even faster than predicted."
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Validated Installations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;