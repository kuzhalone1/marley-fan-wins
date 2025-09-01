import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { CalculatorData } from "@/pages/ROICalculator";

interface CalculatorStepsProps {
  calculatorData: CalculatorData;
  updateCalculatorData: (field: keyof CalculatorData, value: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setShowLeadCapture: (show: boolean) => void;
}

const CalculatorSteps = ({ 
  calculatorData, 
  updateCalculatorData, 
  currentStep, 
  setCurrentStep,
  setShowLeadCapture 
}: CalculatorStepsProps) => {
  
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowLeadCapture(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return calculatorData.facilitySize && calculatorData.industryType && calculatorData.currentVentilation;
      case 2:
        return calculatorData.monthlyBill > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div id="calculator-steps" className="space-y-8">
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                step <= currentStep
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {step}
            </div>
            {step < 3 && (
              <div className={`w-16 h-1 ${step < currentStep ? 'bg-primary' : 'bg-muted'}`} />
            )}
          </div>
        ))}
      </div>

      <Card className="industrial-card">
        <div className="p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Step 1: Facility Basics</h2>
                <p className="text-muted-foreground">Tell us about your facility to get accurate calculations</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="facility-size">Facility Size</Label>
                  <Select value={calculatorData.facilitySize} onValueChange={(value) => updateCalculatorData('facilitySize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select facility size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<10K">Less than 10,000 sq ft</SelectItem>
                      <SelectItem value="10-25K">10,000 - 25,000 sq ft</SelectItem>
                      <SelectItem value="25-50K">25,000 - 50,000 sq ft</SelectItem>
                      <SelectItem value="50-100K">50,000 - 100,000 sq ft</SelectItem>
                      <SelectItem value="100K+">100,000+ sq ft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry-type">Industry Type</Label>
                  <Select value={calculatorData.industryType} onValueChange={(value) => updateCalculatorData('industryType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="warehousing">Warehousing</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="food">Food Processing</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ceiling Height: {calculatorData.ceilingHeight} feet</Label>
                <Slider
                  value={[calculatorData.ceilingHeight]}
                  onValueChange={(value) => updateCalculatorData('ceilingHeight', value[0])}
                  max={40}
                  min={12}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>12 ft</span>
                  <span>40 ft</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Current Ventilation System</Label>
                <RadioGroup
                  value={calculatorData.currentVentilation}
                  onValueChange={(value) => updateCalculatorData('currentVentilation', value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ac-only" id="ac-only" />
                    <Label htmlFor="ac-only">AC only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fans-ac" id="fans-ac" />
                    <Label htmlFor="fans-ac">Traditional fans + AC</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fans-only" id="fans-only" />
                    <Label htmlFor="fans-only">Fans only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Step 2: Energy Costs</h2>
                <p className="text-muted-foreground">Help us understand your current energy expenses</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="monthly-bill">Monthly Electricity Bill (₹)</Label>
                  <Input
                    id="monthly-bill"
                    type="number"
                    placeholder="e.g., 85000"
                    value={calculatorData.monthlyBill || ''}
                    onChange={(e) => updateCalculatorData('monthlyBill', Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">Small facility: ₹30K, Medium: ₹80K, Large: ₹200K+</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="electricity-rate">Electricity Rate (₹/kWh)</Label>
                  <Input
                    id="electricity-rate"
                    type="number"
                    step="0.1"
                    value={calculatorData.electricityRate}
                    onChange={(e) => updateCalculatorData('electricityRate', Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">India average: ₹6.50/kWh</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Operating Hours per Day: {calculatorData.operatingHours} hours</Label>
                <Slider
                  value={[calculatorData.operatingHours]}
                  onValueChange={(value) => updateCalculatorData('operatingHours', value[0])}
                  max={24}
                  min={8}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>8 hours (1 shift)</span>
                  <span>24 hours (3 shifts)</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <Label htmlFor="peak-demand">Peak Demand Charges</Label>
                  <p className="text-sm text-muted-foreground">Additional charges during peak hours</p>
                </div>
                <Switch
                  id="peak-demand"
                  checked={calculatorData.peakDemandCharges}
                  onCheckedChange={(checked) => updateCalculatorData('peakDemandCharges', checked)}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Step 3: Current Cooling Setup</h2>
                <p className="text-muted-foreground">Details about your existing cooling equipment</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="ac-units">Number of AC Units</Label>
                  <Input
                    id="ac-units"
                    type="number"
                    value={calculatorData.acUnits || ''}
                    onChange={(e) => updateCalculatorData('acUnits', Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">Include all air conditioning units</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="traditional-fans">Traditional Fan Count</Label>
                  <Input
                    id="traditional-fans"
                    type="number"
                    value={calculatorData.traditionalFans || ''}
                    onChange={(e) => updateCalculatorData('traditionalFans', Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">Ceiling, wall, and pedestal fans</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="maintenance-cost">Annual Maintenance Cost (₹)</Label>
                  <Input
                    id="maintenance-cost"
                    type="number"
                    value={calculatorData.maintenanceCost || ''}
                    onChange={(e) => updateCalculatorData('maintenanceCost', Number(e.target.value))}
                  />
                  <p className="text-sm text-muted-foreground">Typical: ₹50K-₹200K per year</p>
                </div>

                <div className="space-y-2">
                  <Label>Energy Efficiency Rating</Label>
                  <Select value={calculatorData.efficiencyRating} onValueChange={(value) => updateCalculatorData('efficiencyRating', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-star">1 Star (Low efficiency)</SelectItem>
                      <SelectItem value="2-star">2 Star</SelectItem>
                      <SelectItem value="3-star">3 Star (Average)</SelectItem>
                      <SelectItem value="4-star">4 Star</SelectItem>
                      <SelectItem value="5-star">5 Star (High efficiency)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {isStepComplete(currentStep) && (
                <Badge variant="default" className="bg-success text-success-foreground">
                  Complete
                </Badge>
              )}
            </div>

            <Button
              onClick={nextStep}
              disabled={!isStepComplete(currentStep)}
              className="flex items-center gap-2 btn-secondary-action"
            >
              {currentStep === 3 ? 'Get Detailed Report' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CalculatorSteps;