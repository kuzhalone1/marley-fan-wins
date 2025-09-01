import { useState } from "react";
import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorSteps from "@/components/calculator/CalculatorSteps";
import ResultsPanel from "@/components/calculator/ResultsPanel";
import LeadCaptureGateway from "@/components/calculator/LeadCaptureGateway";
import CredibilitySection from "@/components/calculator/CredibilitySection";
import ComparisonSection from "@/components/calculator/ComparisonSection";
import FAQSection from "@/components/calculator/FAQSection";
import FinalConversion from "@/components/calculator/FinalConversion";

export interface CalculatorData {
  facilitySize: string;
  industryType: string;
  ceilingHeight: number;
  currentVentilation: string;
  monthlyBill: number;
  operatingHours: number;
  electricityRate: number;
  peakDemandCharges: boolean;
  acUnits: number;
  traditionalFans: number;
  maintenanceCost: number;
  efficiencyRating: string;
}

const ROICalculator = () => {
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    facilitySize: "",
    industryType: "",
    ceilingHeight: 20,
    currentVentilation: "",
    monthlyBill: 0,
    operatingHours: 12,
    electricityRate: 6.5,
    peakDemandCharges: false,
    acUnits: 0,
    traditionalFans: 0,
    maintenanceCost: 0,
    efficiencyRating: ""
  });

  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const updateCalculatorData = (field: keyof CalculatorData, value: any) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateResults = () => {
    const { monthlyBill, operatingHours, electricityRate, acUnits, traditionalFans, maintenanceCost } = calculatorData;
    
    // Simplified calculation logic
    const currentAnnualCost = (monthlyBill * 12) + maintenanceCost;
    const hvlsAnnualCost = currentAnnualCost * 0.65; // 35% savings
    const annualSavings = currentAnnualCost - hvlsAnnualCost;
    const monthlySavings = annualSavings / 12;
    const paybackPeriod = 2.5; // years
    const fiveYearSavings = annualSavings * 5;
    const co2Reduction = annualSavings * 0.0007; // tons CO2 per rupee saved
    
    return {
      currentAnnualCost,
      hvlsAnnualCost,
      annualSavings,
      monthlySavings,
      paybackPeriod,
      fiveYearSavings,
      co2Reduction
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <CalculatorHero />
      
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CalculatorSteps 
              calculatorData={calculatorData}
              updateCalculatorData={updateCalculatorData}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setShowLeadCapture={setShowLeadCapture}
            />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ResultsPanel 
                results={calculateResults()}
                calculatorData={calculatorData}
              />
            </div>
          </div>
        </div>
      </div>

      {showLeadCapture && (
        <LeadCaptureGateway 
          results={calculateResults()}
          onClose={() => setShowLeadCapture(false)}
        />
      )}

      <CredibilitySection />
      <ComparisonSection />
      <FAQSection />
      <FinalConversion />
    </div>
  );
};

export default ROICalculator;