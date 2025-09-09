import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Phone, MessageCircle, Mail, 
  CheckCircle, Clock, Shield, Award 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const BottomConversion = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    facilitySize: "",
    ceilingHeight: "",
    currentCooling: "",
    budget: "",
    timeline: "",
    challenges: "",
    preferredContact: "",
    urgency: "",
    authority: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const webhookData = {
        ...formData,
        formType: 'expert-consultation-products',
        timestamp: new Date().toISOString(),
        source: 'Products Page'
      };

      const response = await fetch('https://sravanhyd.app.n8n.cloud/webhook-test/construction-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(webhookData),
      });

      toast({
        title: "Consultation Request Submitted!",
        description: "Our expert will contact you within 2 hours during business hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        facilitySize: "",
        ceilingHeight: "",
        currentCooling: "",
        budget: "",
        timeline: "",
        challenges: "",
        preferredContact: "",
        urgency: "",
        authority: ""
      });

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
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help Choosing the Right HVLS Fan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized recommendations from our technical experts. 
              We'll help you select the perfect fan for your specific requirements.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Book Your Free Expert Consultation
              </CardTitle>
              <div className="flex justify-center items-center gap-6 mt-4">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  30-min session
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  No obligation
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Expert guidance
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">
                      Contact Information
                    </h3>
                    
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="authority">Decision Authority</Label>
                      <Select onValueChange={(value) => handleInputChange("authority", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="decision-maker">Final Decision Maker</SelectItem>
                          <SelectItem value="influencer">Key Influencer</SelectItem>
                          <SelectItem value="researcher">Researcher/Evaluator</SelectItem>
                          <SelectItem value="consultant">Consultant/Advisor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">
                      Project Details
                    </h3>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="warehousing">Warehousing & Distribution</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="textile">Textile</SelectItem>
                          <SelectItem value="food-processing">Food Processing</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="facilitySize">Facility Size</Label>
                      <Select onValueChange={(value) => handleInputChange("facilitySize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select facility size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Under 10,000 sq ft</SelectItem>
                          <SelectItem value="medium">10,000 - 50,000 sq ft</SelectItem>
                          <SelectItem value="large">50,000 - 100,000 sq ft</SelectItem>
                          <SelectItem value="xlarge">Over 100,000 sq ft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ceilingHeight">Ceiling Height</Label>
                      <Select onValueChange={(value) => handleInputChange("ceilingHeight", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ceiling height" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">8-12 feet</SelectItem>
                          <SelectItem value="medium">12-20 feet</SelectItem>
                          <SelectItem value="high">20-30 feet</SelectItem>
                          <SelectItem value="very-high">Over 30 feet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget-1">₹2-5 Lakhs</SelectItem>
                          <SelectItem value="budget-2">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="budget-3">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="budget-4">₹25-50 Lakhs</SelectItem>
                          <SelectItem value="budget-5">Over ₹50 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Implementation Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you plan to implement?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                          <SelectItem value="short">1-3 months</SelectItem>
                          <SelectItem value="medium">3-6 months</SelectItem>
                          <SelectItem value="long">6+ months</SelectItem>
                          <SelectItem value="planning">Just exploring options</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="challenges">Current Challenges & Requirements</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => handleInputChange("challenges", e.target.value)}
                    placeholder="Describe your current cooling challenges, specific requirements, or any questions you have..."
                    rows={4}
                  />
                </div>

                {/* Contact Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select onValueChange={(value) => handleInputChange("preferredContact", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How should we contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="video">Video Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Project Urgency</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this project?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent - Need solution ASAP</SelectItem>
                        <SelectItem value="high">High - Within 2-4 weeks</SelectItem>
                        <SelectItem value="medium">Medium - 1-2 months</SelectItem>
                        <SelectItem value="low">Low - Just gathering information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="agreement" required />
                  <Label htmlFor="agreement" className="text-sm text-muted-foreground">
                    I agree to receive communication from MGF HVLS and understand that my information 
                    will be used to provide personalized recommendations and follow-up support.
                  </Label>
                </div>

                {/* Submit Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    <Calendar className="h-4 w-4 mr-2" />
                    {isLoading ? "Submitting..." : "Book Free Consultation"}
                  </Button>
                  
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Expert Now
                  </Button>
                  
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Query
                  </Button>
                </div>
              </form>

              {/* Guarantee */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">
                      100% Perfect Fan Recommendation Guarantee
                    </h4>
                    <p className="text-sm text-green-700">
                      If our recommended HVLS fan doesn't meet your performance expectations, 
                      we'll replace it or refund your money within 90 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Need immediate assistance? Contact us directly:
                </p>
                <div className="flex justify-center items-center gap-6 text-sm">
                  <a href="tel:+919030034982" className="flex items-center gap-2 text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    +91 90300 34982
                  </a>
                  <a href="mailto:info@mgfhvls.com" className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="h-4 w-4" />
                    info@mgfhvls.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};