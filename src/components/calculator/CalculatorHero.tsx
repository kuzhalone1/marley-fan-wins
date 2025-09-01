import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CalculatorHero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator-steps');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Calculate Your HVLS Fan Energy Savings in 
              <span className="text-accent-orange"> 60 Seconds</span>
            </h1>
            
            <p className="text-xl text-white/90">
              See exactly how much money you'll save and when you'll break even
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">500+</div>
                <div className="text-sm text-white/80">Facility Managers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">35%</div>
                <div className="text-sm text-white/80">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">18</div>
                <div className="text-sm text-white/80">Months Payback</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-4"
                onClick={scrollToCalculator}
              >
                Start Free Calculation
              </Button>
              <p className="text-sm text-white/80">
                No email required to start - get instant results
              </p>
            </div>
          </div>
          
          <div className="lg:block hidden">
            <Card className="industrial-card bg-white/10 backdrop-blur-sm border-white/20">
              <div className="p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white">Sample Results Preview</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Current Annual Costs:</span>
                    <span className="text-red-400 font-bold">₹8,50,000</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">With HVLS Fans:</span>
                    <span className="text-green-400 font-bold">₹5,50,000</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Annual Savings:</span>
                      <span className="text-accent-orange font-bold text-2xl">₹2,50,000</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-white/80 text-sm">Payback Period</div>
                      <div className="text-white font-bold text-xl">2.1 Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorHero;