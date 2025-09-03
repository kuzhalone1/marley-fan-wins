import { useState } from "react";
import { ProductsHeader } from "@/components/products/ProductsHeader";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ComparisonTool } from "@/components/products/ComparisonTool";
import { IndustryRecommendations } from "@/components/products/IndustryRecommendations";
import { BottomConversion } from "@/components/products/BottomConversion";

export interface FilterState {
  coverageArea: [number, number];
  powerConsumption: string[];
  industries: string[];
  budgetRange: string;
  diameterSize: string[];
  specialFeatures: string[];
}

export interface ProductModel {
  id: string;
  name: string;
  badge: string;
  diameter: string;
  motor: string;
  airflow: string;
  coverage: string;
  weight: string;
  speed: string;
  energyRating: string;
  idealFor: string[];
  startingPrice: string;
  image: string;
  specifications: {
    technical: Record<string, string>;
    installation: string[];
    controls: string[];
    certifications: string[];
    warranty: string;
    accessories: string[];
  };
}

const Products = () => {
  const [filters, setFilters] = useState<FilterState>({
    coverageArea: [1000, 25000],
    powerConsumption: [],
    industries: [],
    budgetRange: "",
    diameterSize: [],
    specialFeatures: []
  });

  const [comparedProducts, setComparedProducts] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleCompareToggle = (productId: string) => {
    setComparedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else if (prev.length < 3) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ProductsHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar 
              filters={filters} 
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <ProductGrid 
              filters={filters}
              comparedProducts={comparedProducts}
              onCompareToggle={handleCompareToggle}
              onShowComparison={() => setShowComparison(true)}
            />
          </div>
        </div>

        <IndustryRecommendations />
        <BottomConversion />
      </div>

      {showComparison && comparedProducts.length > 0 && (
        <ComparisonTool 
          productIds={comparedProducts}
          onClose={() => setShowComparison(false)}
          onClearComparison={() => setComparedProducts([])}
        />
      )}
    </div>
  );
};

export default Products;