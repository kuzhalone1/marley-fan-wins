import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Star, Download, Phone, MessageCircle, Eye, 
  Zap, Wind, Gauge, Weight, Settings, Award 
} from "lucide-react";
import type { FilterState, ProductModel } from "@/pages/Products";

interface ProductGridProps {
  filters: FilterState;
  comparedProducts: string[];
  onCompareToggle: (productId: string) => void;
  onShowComparison: () => void;
}

const products: ProductModel[] = [
  {
    id: "mgf-24-b5",
    name: "MGF-24 B5",
    badge: "Most Popular for Large Facilities",
    diameter: "24ft (7.3m)",
    motor: "1.5kW PMSM",
    airflow: "442,860 CFM",
    coverage: "20,000 sq ft",
    weight: "148kg",
    speed: "0-53 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Large manufacturing", "Warehouses", "Aircraft hangars"],
    startingPrice: "₹4,50,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.5kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "3.2A",
        "Power Factor": "0.99",
        "Efficiency": "92%",
        "Noise Level": "<45dB",
        "IP Rating": "IP55"
      },
      installation: ["Minimum ceiling height: 14ft", "Structural load: 200kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control", "Smartphone app", "Building automation"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star", "IGBC Certified"],
      warranty: "2 years comprehensive warranty with pan-India service",
      accessories: ["Remote control", "Wall mounting bracket", "Extension rod", "Safety cable"]
    }
  },
  {
    id: "mgf-20-b5",
    name: "MGF-20 B5",
    badge: "Best Value for Medium Facilities",
    diameter: "20ft (6.0m)",
    motor: "1.5kW PMSM",
    airflow: "379,610 CFM",
    coverage: "15,000 sq ft",
    weight: "140kg",
    speed: "0-60 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Medium manufacturing", "Distribution centers", "Assembly halls"],
    startingPrice: "₹3,80,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.5kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "3.2A",
        "Power Factor": "0.99",
        "Efficiency": "91%",
        "Noise Level": "<42dB",
        "IP Rating": "IP55"
      },
      installation: ["Minimum ceiling height: 12ft", "Structural load: 180kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control", "Smartphone app"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star"],
      warranty: "2 years comprehensive warranty",
      accessories: ["Remote control", "Wall mounting bracket", "Extension rod"]
    }
  },
  {
    id: "mgf-18-b5",
    name: "MGF-18 B5",
    badge: "Perfect for Commercial Spaces",
    diameter: "18ft (5.4m)",
    motor: "1.5kW PMSM",
    airflow: "356,573 CFM",
    coverage: "12,000 sq ft",
    weight: "136kg",
    speed: "0-60 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Showrooms", "Retail spaces", "Restaurants", "Gyms"],
    startingPrice: "₹3,20,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.5kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "3.2A",
        "Power Factor": "0.99",
        "Efficiency": "90%",
        "Noise Level": "<40dB",
        "IP Rating": "IP54"
      },
      installation: ["Minimum ceiling height: 12ft", "Structural load: 160kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control", "Smartphone app"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star"],
      warranty: "2 years comprehensive warranty",
      accessories: ["Remote control", "Wall mounting bracket"]
    }
  },
  {
    id: "mgf-16-b5",
    name: "MGF-16 B5",
    badge: "Reliable Workhorse",
    diameter: "16ft (4.9m)",
    motor: "1.1kW PMSM",
    airflow: "204,215 CFM",
    coverage: "10,000 sq ft",
    weight: "128kg",
    speed: "0-70 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Medium workshops", "Assembly lines", "Service centers"],
    startingPrice: "₹2,80,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.1kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "2.4A",
        "Power Factor": "0.98",
        "Efficiency": "89%",
        "Noise Level": "<38dB",
        "IP Rating": "IP54"
      },
      installation: ["Minimum ceiling height: 10ft", "Structural load: 140kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star"],
      warranty: "2 years comprehensive warranty",
      accessories: ["Remote control", "Wall mounting bracket"]
    }
  },
  {
    id: "mgf-14-b5",
    name: "MGF-14 B5",
    badge: "Space-Efficient Solution",
    diameter: "14ft (4.2m)",
    motor: "1.1kW PMSM",
    airflow: "169,978 CFM",
    coverage: "8,000 sq ft",
    weight: "118kg",
    speed: "0-70 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Smaller facilities", "Mezzanine areas", "Offices"],
    startingPrice: "₹2,40,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.1kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "2.4A",
        "Power Factor": "0.98",
        "Efficiency": "88%",
        "Noise Level": "<36dB",
        "IP Rating": "IP54"
      },
      installation: ["Minimum ceiling height: 10ft", "Structural load: 130kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star"],
      warranty: "2 years comprehensive warranty",
      accessories: ["Remote control", "Wall mounting bracket"]
    }
  },
  {
    id: "mgf-12-b5",
    name: "MGF-12 B5",
    badge: "Versatile & Efficient",
    diameter: "12ft (3.6m)",
    motor: "1.1kW PMSM",
    airflow: "152,746 CFM",
    coverage: "6,000 sq ft",
    weight: "106kg",
    speed: "0-98 RPM",
    energyRating: "5-star BEE",
    idealFor: ["Small workshops", "Offices", "Cafeterias", "Retail"],
    startingPrice: "₹2,00,000",
    image: "/placeholder.svg",
    specifications: {
      technical: {
        "Motor Type": "PMSM (Permanent Magnet Synchronous Motor)",
        "Power Rating": "1.1kW",
        "Voltage": "415V, 3-Phase, 50Hz",
        "Current": "2.4A",
        "Power Factor": "0.98",
        "Efficiency": "87%",
        "Noise Level": "<34dB",
        "IP Rating": "IP54"
      },
      installation: ["Minimum ceiling height: 9ft", "Structural load: 120kg", "Electrical: 3-phase supply"],
      controls: ["Manual wall switch", "Remote control"],
      certifications: ["CE Certified", "ISO 9001:2015", "BEE 5-Star"],
      warranty: "2 years comprehensive warranty",
      accessories: ["Remote control", "Wall mounting bracket"]
    }
  }
];

export const ProductGrid = ({ filters, comparedProducts, onCompareToggle, onShowComparison }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(null);

  const filteredProducts = products.filter(product => {
    // Apply filters logic here
    const coverageNumber = parseInt(product.coverage.replace(/[^0-9]/g, ''));
    if (coverageNumber < filters.coverageArea[0] || coverageNumber > filters.coverageArea[1]) {
      return false;
    }

    // Add more filter logic as needed
    return true;
  });

  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            {filteredProducts.length} HVLS Fan Models
          </h2>
          <p className="text-muted-foreground">
            Professional-grade industrial ceiling fans for every application
          </p>
        </div>
        
        {comparedProducts.length > 0 && (
          <Button onClick={onShowComparison} variant="outline">
            Compare ({comparedProducts.length})
          </Button>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="relative pb-2">
              {product.badge && (
                <Badge className="absolute -top-2 left-4 z-10 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              )}
              
              <div className="aspect-square bg-muted rounded-lg mb-4 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">(4.8)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={comparedProducts.includes(product.id)}
                    onCheckedChange={() => onCompareToggle(product.id)}
                    disabled={!comparedProducts.includes(product.id) && comparedProducts.length >= 3}
                  />
                  <label className="text-xs text-muted-foreground">Compare</label>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Key Specifications */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-primary" />
                  <span>{product.diameter}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>{product.motor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-primary" />
                  <span>{product.airflow}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Weight className="h-4 w-4 text-primary" />
                  <span>{product.coverage}</span>
                </div>
              </div>

              {/* Energy Rating */}
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Energy Rating</span>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-bold text-green-600">{product.energyRating}</span>
                </div>
              </div>

              {/* Ideal For */}
              <div>
                <span className="text-sm font-medium text-muted-foreground">Ideal for:</span>
                <p className="text-sm mt-1">{product.idealFor.join(", ")}</p>
              </div>

              {/* Pricing */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-bold text-primary">{product.startingPrice}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Get Custom Quote
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View Specs
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Get Quote
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Download className="h-3 w-3 mr-1" />
                    Download Specs
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Expert Chat
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProduct.name} - Detailed Specifications</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full aspect-square object-cover rounded-lg bg-muted"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technical Specifications</h3>
                  <div className="space-y-2">
                    {Object.entries(selectedProduct.specifications.technical).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Installation Requirements</h3>
                  <ul className="text-sm space-y-1">
                    {selectedProduct.specifications.installation.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Control Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.specifications.controls.map((control, index) => (
                      <Badge key={index} variant="secondary">{control}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.specifications.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4">{selectedProduct.specifications.warranty}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Custom Quote
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};