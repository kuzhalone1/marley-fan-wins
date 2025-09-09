import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Mail, MessageCircle, MapPin, Building, DollarSign, Clock, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FinalConversion = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    name: '',
    email: '',
    phone: '',
    title: '',
    authority: '',
    
    // Company Information
    company: '',
    industry: '',
    companySize: '',
    location: '',
    revenue: '',
    
    // Project Information
    facilityDimensions: '',
    currentSetup: '',
    timeline: '',
    budgetApproved: '',
    
    // Preferences
    contactTime: '',
    communicationMethod: '',
    urgency: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const webhookData = {
        ...formData,
        formType: 'free-assessment-calculator',
        timestamp: new Date().toISOString(),
        source: 'ROI Calculator - Final Conversion'
      };

      const response = await fetch('https://sravanhyd.app.n8n.cloud/webhook-test/construction-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(webhookData),
      });

      setSubmitted(true);
      toast({
        title: "Assessment Scheduled!",
        description: "Our expert will contact you within 24 hours to schedule your free facility assessment.",
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

  if (submitted) {
    return (
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Assessment Scheduled Successfully!</h2>
            <p className="text-xl text-white/90">
              Our technical expert will contact you within 24 hours to schedule your free facility assessment.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-white/10 rounded-lg">
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Next: Phone Consultation</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Then: Site Assessment</div>
              </div>
              <div className="p-4 bg-white/10 rounded-lg">
                <DollarSign className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Finally: Custom Quote</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-primary to-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Calendar className="w-4 h-4 mr-2" />
            Ready to Start Saving?
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Get Your Free Facility Assessment</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our technical experts will visit your facility, validate calculations, and provide a customized implementation plan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="industrial-card bg-white/10 backdrop-blur-sm border-white/20">
              <div className="p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white">What You Get:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-orange mt-1" />
                    <div>
                      <div className="font-medium text-white">On-Site Technical Assessment</div>
                      <div className="text-sm text-white/80">Complete facility analysis by certified engineers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calculator className="w-5 h-5 text-accent-orange mt-1" />
                    <div>
                      <div className="font-medium text-white">Validated ROI Calculations</div>
                      <div className="text-sm text-white/80">Precise energy savings and payback projections</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-accent-orange mt-1" />
                    <div>
                      <div className="font-medium text-white">Custom Installation Plan</div>
                      <div className="text-sm text-white/80">Optimal fan placement and configuration design</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-accent-orange mt-1" />
                    <div>
                      <div className="font-medium text-white">Financing Options</div>
                      <div className="text-sm text-white/80">Flexible payment plans and government incentives</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-orange">FREE</div>
                <div className="text-sm text-white/80">Assessment Cost</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-orange">24hrs</div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-orange">500+</div>
                <div className="text-sm text-white/80">Completed Projects</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Alternative Contact Methods:</h3>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start text-white border-white/30 hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-3" />
                  Call Expert: +91 90300 34982
                </Button>
                <Button variant="outline" className="justify-start text-white border-white/30 hover:bg-white/10">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  WhatsApp Now
                </Button>
                <Button variant="outline" className="justify-start text-white border-white/30 hover:bg-white/10">
                  <Mail className="w-4 h-4 mr-3" />
                  Email Inquiry
                </Button>
              </div>
            </div>
          </div>

          <Card className="industrial-card bg-white">
            <div className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Schedule Your Free Assessment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b pb-2">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Plant Manager"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Decision Making Authority</Label>
                    <Select value={formData.authority} onValueChange={(value) => handleInputChange('authority', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your authority level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="final-decision">Final decision maker</SelectItem>
                        <SelectItem value="recommend">Can recommend solutions</SelectItem>
                        <SelectItem value="influence">Can influence decisions</SelectItem>
                        <SelectItem value="research">Researching options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b pb-2">Company Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Industry Type</Label>
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
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company Size</Label>
                      <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (1-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-500 employees)</SelectItem>
                          <SelectItem value="large">Large (500+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        placeholder="City, State"
                        required
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b pb-2">Project Details</h4>
                  <div className="space-y-2">
                    <Label htmlFor="facility-dimensions">Facility Dimensions</Label>
                    <Input
                      id="facility-dimensions"
                      placeholder="e.g., 200ft x 150ft x 25ft height"
                      value={formData.facilityDimensions}
                      onChange={(e) => handleInputChange('facilityDimensions', e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Implementation Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                          <SelectItem value="short">Short term (1-3 months)</SelectItem>
                          <SelectItem value="medium">Medium term (3-6 months)</SelectItem>
                          <SelectItem value="long">Long term (6+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Budget Status</Label>
                      <Select value={formData.budgetApproved} onValueChange={(value) => handleInputChange('budgetApproved', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">Budget approved</SelectItem>
                          <SelectItem value="pending">Budget pending approval</SelectItem>
                          <SelectItem value="exploring">Exploring options</SelectItem>
                          <SelectItem value="need-quote">Need quote for budget</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Communication Preferences */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b pb-2">Communication Preferences</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Best Contact Time</Label>
                      <Select value={formData.contactTime} onValueChange={(value) => handleInputChange('contactTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9-12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12-5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5-8 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Method</Label>
                      <Select value={formData.communicationMethod} onValueChange={(value) => handleInputChange('communicationMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="video">Video call</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Any specific requirements, concerns, or questions..."
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <Button type="submit" size="lg" className="btn-hero" disabled={isLoading}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {isLoading ? "Submitting..." : "Book Free Assessment"}
                  </Button>
                  <Button type="button" size="lg" variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                  <Button type="button" size="lg" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalConversion;