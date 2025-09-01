import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, Leaf } from "lucide-react";
import { CalculatorData } from "@/pages/ROICalculator";

interface ResultsPanelProps {
  results: {
    currentAnnualCost: number;
    hvlsAnnualCost: number;
    annualSavings: number;
    monthlySavings: number;
    paybackPeriod: number;
    fiveYearSavings: number;
    co2Reduction: number;
  };
  calculatorData: CalculatorData;
}

const ResultsPanel = ({ results, calculatorData }: ResultsPanelProps) => {
  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const getRecommendedFans = () => {
    const sizeMultiplier = {
      '<10K': 2,
      '10-25K': 4,
      '25-50K': 6,
      '50-100K': 10,
      '100K+': 15
    };
    
    return sizeMultiplier[calculatorData.facilitySize as keyof typeof sizeMultiplier] || 4;
  };

  return (
    <Card className="industrial-card">
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Live Calculation Results</h3>
          <p className="text-sm text-muted-foreground">Updates automatically as you enter data</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
            <span className="text-sm font-medium">Current Annual Costs:</span>
            <span className="text-red-600 font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {formatCurrency(results.currentAnnualCost)}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <span className="text-sm font-medium">HVLS Fan Costs:</span>
            <span className="text-green-600 font-bold text-lg flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              {formatCurrency(results.hvlsAnnualCost)}
            </span>
          </div>

          <div className="bg-accent-orange/10 rounded-lg p-4 border-2 border-accent-orange/20">
            <div className="text-center">
              <div className="text-sm text-accent-orange font-medium">Monthly Savings</div>
              <div className="text-2xl font-bold text-accent-orange">
                {formatCurrency(results.monthlySavings)}
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary/20">
            <div className="text-center">
              <div className="text-sm text-primary font-medium">Annual Savings</div>
              <div className="text-3xl font-bold text-primary">
                {formatCurrency(results.annualSavings)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-muted rounded-lg">
              <Clock className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">Payback Period</div>
              <div className="font-bold text-sm">{results.paybackPeriod} years</div>
            </div>
            
            <div className="text-center p-3 bg-muted rounded-lg">
              <Leaf className="w-5 h-5 mx-auto mb-2 text-success" />
              <div className="text-xs text-muted-foreground">CO₂ Reduction</div>
              <div className="font-bold text-sm text-success">{results.co2Reduction.toFixed(1)} tons/yr</div>
            </div>
          </div>

          <div className="p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="text-center">
              <div className="text-sm text-success font-medium">5-Year Total Savings</div>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(results.fiveYearSavings)}
              </div>
            </div>
          </div>

          {calculatorData.facilitySize && (
            <div className="p-4 bg-secondary/10 rounded-lg">
              <div className="text-center">
                <div className="text-sm font-medium mb-2">Recommended Solution</div>
                <Badge variant="secondary" className="mb-2">
                  MGF-20 B5 Series
                </Badge>
                <div className="text-sm text-muted-foreground">
                  {getRecommendedFans()} fans recommended for your facility
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            * Calculations based on industry averages and your inputs
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResultsPanel;