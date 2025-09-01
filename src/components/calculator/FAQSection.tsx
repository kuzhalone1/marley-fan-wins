import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Shield, Calculator, CreditCard, Wrench } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is the initial investment worth it?",
      icon: <CreditCard className="w-5 h-5" />,
      answer: "Absolutely. While HVLS fans have a higher upfront cost than traditional fans, the ROI is compelling. Most facilities see payback in 18-30 months, followed by 15+ years of savings. Our calculator shows exact payback periods based on your specific facility data. Additionally, government incentives and financing options can reduce initial burden."
    },
    {
      question: "How accurate are these calculations?",
      icon: <Calculator className="w-5 h-5" />,
      answer: "Our calculator has 95%+ accuracy rate, validated across 500+ installations. We use conservative estimates and factor in regional electricity rates, facility types, and operating patterns. The algorithm is based on actual performance data from similar facilities. We provide a guarantee - if savings are less than 80% of predicted, we'll make adjustments at no cost."
    },
    {
      question: "What if my actual results differ from predictions?",
      icon: <Shield className="w-5 h-5" />,
      answer: "We stand behind our calculations with a performance guarantee. If your energy savings are less than 80% of our prediction within the first year, we'll optimize the system at no additional cost. This includes fan repositioning, speed adjustments, or additional units if needed. Our 98% customer satisfaction rate reflects confidence in our methodology."
    },
    {
      question: "Are there financing options available?",
      icon: <CreditCard className="w-5 h-5" />,
      answer: "Yes, we offer multiple financing solutions: 0% interest for 12 months, equipment financing up to 7 years, lease-to-own programs, and government subsidy assistance. Many customers choose our 'Pay from Savings' plan where monthly payments are less than energy savings from day one. We also help with government incentive applications."
    },
    {
      question: "What about installation and ongoing costs?",
      icon: <Wrench className="w-5 h-5" />,
      answer: "Installation is included in our pricing with certified technicians. Typical installation takes 1-2 days with minimal disruption. Ongoing maintenance is minimal - annual inspection and lubrication costs ₹5,000-10,000 per fan. This is 50-70% less than AC maintenance. We provide 5-year comprehensive warranty and 24/7 support."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Questions & Concerns
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Common Questions About HVLS Fan ROI</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Addressing cost concerns and investment questions from facility managers across India
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="industrial-card">
            <div className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {faq.icon}
                        </div>
                        <span className="font-semibold">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2">
                      <p className="text-muted-foreground leading-relaxed pl-14">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">18-30</div>
              <div className="text-sm text-muted-foreground">Months Average Payback</div>
            </div>
            <div className="text-center p-6 bg-success/10 rounded-lg">
              <div className="text-3xl font-bold text-success mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Calculation Accuracy</div>
            </div>
            <div className="text-center p-6 bg-accent-orange/10 rounded-lg">
              <div className="text-3xl font-bold text-accent-orange mb-2">5 Year</div>
              <div className="text-sm text-muted-foreground">Comprehensive Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;