import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import type { FilterState } from "@/pages/Products";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const industries = [
    "Manufacturing", "Warehousing", "Automotive", "Textile", 
    "Food Processing", "Commercial", "Pharmaceutical", "Agriculture"
  ];

  const diameterSizes = [
    "12ft (3.6m)", "14ft (4.2m)", "16ft (4.9m)", 
    "18ft (5.4m)", "20ft (6.0m)", "24ft (7.3m)"
  ];

  const specialFeatures = [
    "Remote Control", "Variable Speed", "Explosion Proof", 
    "Smartphone App", "BEE 5-Star", "Low Noise", "IP55 Rating"
  ];

  const handleIndustryChange = (industry: string, checked: boolean) => {
    const newIndustries = checked 
      ? [...filters.industries, industry]
      : filters.industries.filter(i => i !== industry);
    onFilterChange({ industries: newIndustries });
  };

  const handleDiameterChange = (diameter: string, checked: boolean) => {
    const newDiameters = checked
      ? [...filters.diameterSize, diameter]
      : filters.diameterSize.filter(d => d !== diameter);
    onFilterChange({ diameterSize: newDiameters });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...filters.specialFeatures, feature]
      : filters.specialFeatures.filter(f => f !== feature);
    onFilterChange({ specialFeatures: newFeatures });
  };

  const clearAllFilters = () => {
    onFilterChange({
      coverageArea: [1000, 25000],
      powerConsumption: [],
      industries: [],
      budgetRange: "",
      diameterSize: [],
      specialFeatures: []
    });
  };

  const getActiveFilterCount = () => {
    return (
      filters.powerConsumption.length +
      filters.industries.length +
      (filters.budgetRange ? 1 : 0) +
      filters.diameterSize.length +
      filters.specialFeatures.length +
      (filters.coverageArea[0] !== 1000 || filters.coverageArea[1] !== 25000 ? 1 : 0)
    );
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters ({getActiveFilterCount()})
        </Button>
      </div>

      {/* Filter Content */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <Card className="sticky top-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Smart Filters
            </CardTitle>
            {getActiveFilterCount() > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="text-xs"
              >
                Clear All
              </Button>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Coverage Area */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Coverage Area (sq ft)
              </Label>
              <div className="px-3">
                <Slider
                  value={filters.coverageArea}
                  onValueChange={(value) => onFilterChange({ coverageArea: value as [number, number] })}
                  min={1000}
                  max={25000}
                  step={1000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{filters.coverageArea[0].toLocaleString()}</span>
                  <span>{filters.coverageArea[1].toLocaleString()}+</span>
                </div>
              </div>
            </div>

            {/* Power Consumption */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Power Consumption
              </Label>
              <RadioGroup 
                value={filters.powerConsumption[0] || ""}
                onValueChange={(value) => onFilterChange({ powerConsumption: value ? [value] : [] })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="power-low" />
                  <Label htmlFor="power-low" className="text-sm">Below 1kW</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="power-medium" />
                  <Label htmlFor="power-medium" className="text-sm">1kW - 1.5kW</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="power-high" />
                  <Label htmlFor="power-high" className="text-sm">Above 1.5kW</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Industry Application */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Industry Application
              </Label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox
                      id={`industry-${industry}`}
                      checked={filters.industries.includes(industry)}
                      onCheckedChange={(checked) => 
                        handleIndustryChange(industry, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`industry-${industry}`} 
                      className="text-sm"
                    >
                      {industry}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Budget Range
              </Label>
              <Select 
                value={filters.budgetRange} 
                onValueChange={(value) => onFilterChange({ budgetRange: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50k-1l">₹50K - ₹1L</SelectItem>
                  <SelectItem value="1l-2l">₹1L - ₹2L</SelectItem>
                  <SelectItem value="2l-5l">₹2L - ₹5L</SelectItem>
                  <SelectItem value="5l+">₹5L+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Diameter Size */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Diameter Size
              </Label>
              <div className="space-y-2">
                {diameterSizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`diameter-${size}`}
                      checked={filters.diameterSize.includes(size)}
                      onCheckedChange={(checked) => 
                        handleDiameterChange(size, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`diameter-${size}`} 
                      className="text-sm"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Features */}
            <div>
              <Label className="text-sm font-medium mb-3 block">
                Special Features
              </Label>
              <div className="space-y-2">
                {specialFeatures.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={`feature-${feature}`}
                      checked={filters.specialFeatures.includes(feature)}
                      onCheckedChange={(checked) => 
                        handleFeatureChange(feature, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={`feature-${feature}`} 
                      className="text-sm"
                    >
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Filters Display */}
            {getActiveFilterCount() > 0 && (
              <div className="pt-4 border-t">
                <Label className="text-sm font-medium mb-2 block">
                  Active Filters
                </Label>
                <div className="flex flex-wrap gap-2">
                  {filters.industries.map((industry) => (
                    <Badge key={industry} variant="secondary" className="text-xs">
                      {industry}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => handleIndustryChange(industry, false)}
                      />
                    </Badge>
                  ))}
                  {filters.diameterSize.map((size) => (
                    <Badge key={size} variant="secondary" className="text-xs">
                      {size.split(' ')[0]}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => handleDiameterChange(size, false)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};