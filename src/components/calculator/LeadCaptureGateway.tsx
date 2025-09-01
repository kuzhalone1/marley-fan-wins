import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Download, FileText, Users, Calendar, CreditCard, Wrench } from "lucide-react";

interface LeadCaptureGatewayProps {
  results: {
    annualSavings: number;
    paybackPeriod: number;
  };
  onClose: () => void;
}

const LeadCaptureGateway = ({ results, onClose }: LeadCaptureGatewayProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-bold">Report Sent Successfully!</h3>
            <p className="text-muted-foreground">
              Your detailed 10-page savings report has been sent to your email. 
              Our expert will contact you within 24 hours.
            </p>
            <Button onClick={onClose} className="btn-secondary-action">
              Continue Exploring
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get Your Detailed 10-Page Savings Report</h2>
              <p className="text-muted-foreground">
                Unlock comprehensive analysis based on your facility's data
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold mb-3 text-primary">Your Potential Savings</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Annual Savings:</span>
                    <span className="font-bold text-primary">{formatCurrency(results.annualSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Payback Period:</span>
                    <span className="font-bold">{results.paybackPeriod} years</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Your Report Will Include:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm">Facility-specific energy analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-primary" />
                    <span className="text-sm">Recommended fan models & placement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm">Installation timeline & process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="text-sm">Financing options & ROI breakdown</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Maintenance schedule & support</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent-orange/10 rounded-lg border border-accent-orange/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-accent-orange" />
                  <span className="text-sm font-medium text-accent-orange">Join 500+ Companies</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Who have used this calculator to make informed decisions
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
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

              <Button type="submit" className="w-full btn-hero text-lg py-3">
                Send My Complete Report
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Basic PDF Summary Instead
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LeadCaptureGateway;