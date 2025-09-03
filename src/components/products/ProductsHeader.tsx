import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Shield, Wrench, MapPin } from "lucide-react";

export const ProductsHeader = () => {
  return (
    <div className="bg-muted/30 border-b">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>HVLS Ceiling Fans</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Range of Industrial HVLS Fans
            <span className="block text-2xl md:text-3xl text-primary mt-2">
              Built for Performance
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Choose from India's most comprehensive selection of energy-efficient ceiling fans 
            with expert guidance and proven performance in industrial environments.
          </p>

          {/* Key Benefits Bar */}
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
              <Wrench className="h-4 w-4" />
              Free Installation Consultation
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
              <Shield className="h-4 w-4" />
              2-Year Comprehensive Warranty
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm">
              <MapPin className="h-4 w-4" />
              Pan-India Service Support
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};