import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertTriangle } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      metric: "Initial Cost",
      hvls: "₹3-6L per fan",
      ac: "₹2-8L per unit",
      traditional: "₹5-20K per fan",
      exhaust: "₹20-80K per fan",
      winner: "traditional"
    },
    {
      metric: "Operating Cost/Year",
      hvls: "₹15-25K",
      ac: "₹80K-2L",
      traditional: "₹20-40K",
      exhaust: "₹30-60K",
      winner: "hvls"
    },
    {
      metric: "Maintenance Cost/Year",
      hvls: "₹5-10K",
      ac: "₹25-50K",
      traditional: "₹15-30K",
      exhaust: "₹20-40K",
      winner: "hvls"
    },
    {
      metric: "Coverage Area",
      hvls: "2000-3000 sq ft",
      ac: "300-500 sq ft",
      traditional: "100-200 sq ft",
      exhaust: "500-800 sq ft",
      winner: "hvls"
    },
    {
      metric: "Energy Efficiency",
      hvls: "95% (1.5 kW)",
      ac: "60% (3-5 kW)",
      traditional: "70% (75W each)",
      exhaust: "65% (1-2 kW)",
      winner: "hvls"
    },
    {
      metric: "Noise Level",
      hvls: "Low (<50 dB)",
      ac: "Medium (50-60 dB)",
      traditional: "High (60-70 dB)",
      exhaust: "High (65-75 dB)",
      winner: "hvls"
    },
    {
      metric: "Installation Complexity",
      hvls: "Medium",
      ac: "High",
      traditional: "Low",
      exhaust: "High",
      winner: "traditional"
    },
    {
      metric: "Cooling Effectiveness",
      hvls: "Excellent (8-10°C)",
      ac: "Excellent (Direct)",
      traditional: "Good (3-5°C)",
      exhaust: "Poor (Removal only)",
      winner: "tie"
    },
    {
      metric: "Air Circulation",
      hvls: "Excellent (Full area)",
      ac: "Poor (Localized)",
      traditional: "Good (Limited)",
      exhaust: "Poor (One direction)",
      winner: "hvls"
    },
    {
      metric: "Lifespan",
      hvls: "15-20 years",
      ac: "8-12 years",
      traditional: "3-5 years",
      exhaust: "8-10 years",
      winner: "hvls"
    }
  ];

  const getStatusIcon = (solution: string, winner: string, metric: string) => {
    if (winner === "tie" && (solution === "hvls" || solution === "ac")) {
      return <Check className="w-5 h-5 text-success" />;
    }
    if (winner === solution) {
      return <Check className="w-5 h-5 text-success" />;
    }
    if (metric === "Initial Cost" && solution !== "traditional") {
      return <AlertTriangle className="w-5 h-5 text-accent-orange" />;
    }
    return <X className="w-5 h-5 text-destructive" />;
  };

  const getCellClass = (solution: string, winner: string, metric: string) => {
    if (winner === "tie" && (solution === "hvls" || solution === "ac")) {
      return "bg-success/10 border-success/20";
    }
    if (winner === solution) {
      return "bg-success/10 border-success/20";
    }
    if (metric === "Initial Cost" && solution !== "traditional") {
      return "bg-accent-orange/10 border-accent-orange/20";
    }
    return "bg-destructive/10 border-destructive/20";
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Complete Comparison
          </Badge>
          <h2 className="text-3xl font-bold mb-4">See Why HVLS Fans Outperform Alternatives</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive comparison across all critical factors for industrial cooling solutions
          </p>
        </div>

        <Card className="industrial-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-semibold">Comparison Factor</th>
                  <th className="text-center p-4 font-semibold text-primary">
                    HVLS Fans
                    <Badge variant="default" className="ml-2">Recommended</Badge>
                  </th>
                  <th className="text-center p-4 font-semibold">Air Conditioning</th>
                  <th className="text-center p-4 font-semibold">Traditional Fans</th>
                  <th className="text-center p-4 font-semibold">Exhaust Fans</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-medium">{row.metric}</td>
                    <td className={`p-4 text-center border-l-2 ${getCellClass("hvls", row.winner, row.metric)}`}>
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon("hvls", row.winner, row.metric)}
                        <span className="font-medium">{row.hvls}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${getCellClass("ac", row.winner, row.metric)}`}>
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon("ac", row.winner, row.metric)}
                        <span>{row.ac}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${getCellClass("traditional", row.winner, row.metric)}`}>
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon("traditional", row.winner, row.metric)}
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${getCellClass("exhaust", row.winner, row.metric)}`}>
                      <div className="flex items-center justify-center gap-2">
                        {getStatusIcon("exhaust", row.winner, row.metric)}
                        <span>{row.exhaust}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="text-2xl font-bold text-success mb-2">7/10</div>
              <div className="text-sm text-muted-foreground">HVLS Wins</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-muted-foreground mb-2">1/10</div>
              <div className="text-sm text-muted-foreground">AC Wins</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-muted-foreground mb-2">2/10</div>
              <div className="text-sm text-muted-foreground">Traditional Wins</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-muted-foreground mb-2">0/10</div>
              <div className="text-sm text-muted-foreground">Exhaust Wins</div>
            </div>
          </div>

          <Button size="lg" className="btn-hero">
            Calculate Comparison for Your Facility
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;