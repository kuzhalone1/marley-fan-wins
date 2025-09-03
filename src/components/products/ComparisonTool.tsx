import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Download, Phone, CheckCircle } from "lucide-react";

interface ComparisonToolProps {
  productIds: string[];
  onClose: () => void;
  onClearComparison: () => void;
}

// Mock product data - in real app, this would come from props or context
const products = [
  {
    id: "mgf-24-b5",
    name: "MGF-24 B5",
    diameter: "24ft (7.3m)",
    motor: "1.5kW PMSM",
    airflow: "442,860 CFM",
    coverage: "20,000 sq ft",
    weight: "148kg",
    speed: "0-53 RPM",
    price: "₹4,50,000",
    efficiency: "92%",
    noiseLevel: "<45dB",
    powerFactor: "0.99"
  },
  {
    id: "mgf-20-b5",
    name: "MGF-20 B5",
    diameter: "20ft (6.0m)",
    motor: "1.5kW PMSM",
    airflow: "379,610 CFM",
    coverage: "15,000 sq ft",
    weight: "140kg",
    speed: "0-60 RPM",
    price: "₹3,80,000",
    efficiency: "91%",
    noiseLevel: "<42dB",
    powerFactor: "0.99"
  },
  {
    id: "mgf-18-b5",
    name: "MGF-18 B5",
    diameter: "18ft (5.4m)",
    motor: "1.5kW PMSM",
    airflow: "356,573 CFM",
    coverage: "12,000 sq ft",
    weight: "136kg",
    speed: "0-60 RPM",
    price: "₹3,20,000",
    efficiency: "90%",
    noiseLevel: "<40dB",
    powerFactor: "0.99"
  }
];

const comparisonAttributes = [
  { key: "diameter", label: "Diameter", type: "text" },
  { key: "motor", label: "Motor Type", type: "text" },
  { key: "airflow", label: "Airflow (CFM)", type: "number" },
  { key: "coverage", label: "Coverage Area", type: "number" },
  { key: "weight", label: "Weight", type: "text" },
  { key: "speed", label: "Speed Range", type: "text" },
  { key: "efficiency", label: "Motor Efficiency", type: "percentage" },
  { key: "noiseLevel", label: "Noise Level", type: "text" },
  { key: "powerFactor", label: "Power Factor", type: "percentage" },
  { key: "price", label: "Starting Price", type: "price" }
];

export const ComparisonTool = ({ productIds, onClose, onClearComparison }: ComparisonToolProps) => {
  const comparedProducts = products.filter(p => productIds.includes(p.id));

  const getBestValue = (attribute: string, products: any[]) => {
    switch (attribute) {
      case "airflow":
        return Math.max(...products.map(p => parseInt(p.airflow.replace(/[^0-9]/g, ''))));
      case "coverage":
        return Math.max(...products.map(p => parseInt(p.coverage.replace(/[^0-9]/g, ''))));
      case "efficiency":
        return Math.max(...products.map(p => parseFloat(p.efficiency)));
      case "powerFactor":
        return Math.max(...products.map(p => parseFloat(p.powerFactor)));
      case "price":
        return Math.min(...products.map(p => parseInt(p.price.replace(/[^0-9]/g, ''))));
      default:
        return null;
    }
  };

  const isHighlighted = (product: any, attribute: string) => {
    const bestValue = getBestValue(attribute, comparedProducts);
    if (!bestValue) return false;

    switch (attribute) {
      case "airflow":
        return parseInt(product.airflow.replace(/[^0-9]/g, '')) === bestValue;
      case "coverage":
        return parseInt(product.coverage.replace(/[^0-9]/g, '')) === bestValue;
      case "efficiency":
        return parseFloat(product.efficiency) === bestValue;
      case "powerFactor":
        return parseFloat(product.powerFactor) === bestValue;
      case "price":
        return parseInt(product.price.replace(/[^0-9]/g, '')) === bestValue;
      default:
        return false;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl">
            Compare HVLS Fan Models ({comparedProducts.length})
          </DialogTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onClearComparison}>
              Clear All
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Specifications</th>
                {comparedProducts.map((product) => (
                  <th key={product.id} className="text-center p-4 min-w-[200px]">
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <div className="aspect-square bg-muted rounded-lg">
                        <img 
                          src="/placeholder.svg" 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonAttributes.map((attr) => (
                <tr key={attr.key} className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium text-muted-foreground">
                    {attr.label}
                  </td>
                  {comparedProducts.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      <div className={`${
                        isHighlighted(product, attr.key) 
                          ? 'bg-green-100 text-green-800 font-bold px-2 py-1 rounded-md' 
                          : ''
                      }`}>
                        {product[attr.key as keyof typeof product]}
                        {isHighlighted(product, attr.key) && (
                          <CheckCircle className="h-4 w-4 inline ml-1" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Our Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparedProducts.map((product, index) => (
                <div key={product.id} className="text-center space-y-2">
                  <h4 className="font-semibold">{product.name}</h4>
                  <Badge variant={index === 0 ? "default" : "secondary"}>
                    {index === 0 ? "Best Overall" : index === 1 ? "Best Value" : "Most Efficient"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 && "Highest airflow and coverage for large facilities"}
                    {index === 1 && "Optimal balance of performance and cost"}
                    {index === 2 && "Most energy efficient with low noise"}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
          <Button className="flex-1" size="lg">
            <Phone className="h-4 w-4 mr-2" />
            Get Quotes for Selected Models
          </Button>
          <Button variant="outline" className="flex-1" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Download Comparison Report
          </Button>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground mb-2">
            Need help deciding? Our experts can guide you to the perfect choice.
          </p>
          <Button variant="link">
            Schedule Free Consultation →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};