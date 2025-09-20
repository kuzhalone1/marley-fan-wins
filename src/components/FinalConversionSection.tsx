import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, Phone, Mail, MessageCircle, Calculator, Users, FileText } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FinalConversionSection = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    facilitySize: '',
    location: '',
    currentCooling: '',
    timeline: '',
    budget: '',
    requirements: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const webhookData = {
        ...formData,
        formType: 'free-assessment-homepage',
        timestamp: new Date().toISOString(),
        source: 'Homepage Final Conversion'
      };

      // Send to original webhook
      const response = await fetch('https://sravanhyd.app.n8n.cloud/webhook-test/construction-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(webhookData),
      });

      // Send to custom webhook
      try {
        const customWebhookData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          facilitySize: formData.facilitySize,
          location: formData.location,
          currentCooling: formData.currentCooling,
          timeline: formData.timeline,
          budget: formData.budget,
          requirements: formData.requirements,
          timestamp: new Date().toISOString(),
          formType: 'free-assessment'
        };

        const response = await fetch('https://premboddu.app.n8n.cloud/webhook/3c97c29b-e5ad-4324-a288-86e73d5f3f66', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(customWebhookData),
        });

        if (!response.ok) {
          throw new Error(`Webhook failed with status: ${response.status}`);
        }

        console.log('Webhook data sent successfully:', customWebhookData);
      } catch (customWebhookError) {
        console.error('Custom webhook failed:', customWebhookError);
        // Don't throw error to prevent form submission failure
      }

      toast({
        title: "Assessment Request Submitted!",
        description: "Our expert will contact you within 2 hours during business hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        facilitySize: '',
        location: '',
        currentCooling: '',
        timeline: '',
        budget: '',
        requirements: ''
      });
      setCurrentStep(1);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at +91 90300 34982",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent-orange/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Cut Your Energy Costs by 40%?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 500+ companies saving millions with Marley HVLS fans. Get your customized assessment today.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Trust Signals & Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Companies Trust Marley Fans</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Risk-Free Assessment</h4>
                      <p className="text-muted-foreground text-sm">Free consultation with no obligation. Our certified engineers analyze your facility at no cost.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response Within 2 Hours</h4>
                      <p className="text-muted-foreground text-sm">Quick turnaround guaranteed. Get your customized proposal within 24 hours of site assessment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Guaranteed ROI</h4>
                      <p className="text-muted-foreground text-sm">40% energy savings or we'll make it right. Most customers see payback within 12-18 months.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Alternatives */}
              <div className="bg-white rounded-lg p-6 border">
                <h4 className="font-semibold mb-4">Prefer to Talk First?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Call Direct</div>
                      <div className="text-sm text-muted-foreground">+91 90300 34982</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Instant response</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent-orange" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">info@marleyfans.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Progressive Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Get Your Free Assessment</h3>
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of 3
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Basic Information</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          required 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@company.com" 
                          required 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          placeholder="+91 XXXXX XXXXX" 
                          required 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input 
                          id="company" 
                          placeholder="Your company" 
                          required 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Facility Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Facility Details</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry Type</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
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
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="size">Facility Size (sq ft)</Label>
                        <Input 
                          id="size" 
                          placeholder="e.g., 50,000" 
                          value={formData.facilitySize}
                          onChange={(e) => handleInputChange('facilitySize', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Location (City)</Label>
                        <Input 
                          id="location" 
                          placeholder="Enter city" 
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cooling">Current Cooling System</Label>
                        <Select value={formData.currentCooling} onValueChange={(value) => handleInputChange('currentCooling', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select current system" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ac">Air Conditioning</SelectItem>
                            <SelectItem value="fans">Exhaust Fans</SelectItem>
                            <SelectItem value="natural">Natural Ventilation</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Info */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Project Information</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Implementation Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (1-2 months)</SelectItem>
                            <SelectItem value="quarter">This Quarter</SelectItem>
                            <SelectItem value="half">Next 6 months</SelectItem>
                            <SelectItem value="planning">Planning phase</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">₹5-10 Lakhs</SelectItem>
                            <SelectItem value="medium">₹10-25 Lakhs</SelectItem>
                            <SelectItem value="large">₹25-50 Lakhs</SelectItem>
                            <SelectItem value="enterprise">₹50+ Lakhs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea 
                        id="requirements" 
                        placeholder="Tell us about your cooling challenges, energy goals, or any specific requirements..."
                        rows={3}
                        value={formData.requirements}
                        onChange={(e) => handleInputChange('requirements', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-4">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  
                  {currentStep < 3 ? (
                    <Button 
                      type="button" 
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex-1 btn-secondary-action"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <div className="flex-1 space-y-3">
                      <Button type="submit" className="w-full btn-hero" disabled={isLoading}>
                        <Users className="mr-2 h-5 w-5" />
                        {isLoading ? "Submitting..." : "Get Free Assessment"}
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button type="submit" variant="outline" size="sm">
                          <Calculator className="mr-1 h-4 w-4" />
                          Calculate ROI
                        </Button>
                        <Button type="submit" variant="outline" size="sm">
                          <FileText className="mr-1 h-4 w-4" />
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Trust Signals */}
                <div className="text-center pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    🔒 Your information is secure • 📞 Response within 2 hours • ✅ No spam guarantee
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalConversionSection;