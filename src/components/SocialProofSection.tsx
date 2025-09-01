import { Button } from "@/components/ui/button";
import { Star, Play, Quote, TrendingUp, Users, Award } from "lucide-react";

const SocialProofSection = () => {
  const customerLogos = [
    { name: "Tata", logo: "TATA" },
    { name: "Mahindra", logo: "MAHINDRA" },
    { name: "L&T", logo: "L&T" },
    { name: "Godrej", logo: "GODREJ" },
    { name: "Wipro", logo: "WIPRO" },
    { name: "Tech Mahindra", logo: "TECH MAHINDRA" }
  ];

  const testimonials = [
    {
      name: "Ashish Gautam",
      title: "Production Manager",
      company: "ABC Manufacturing",
      testimonial: "Marley HVLS fans delivered exactly what they promised. We saw 35% energy cost reduction in the first month itself. The installation was professional and the fans run so quietly.",
      metric: "35% energy cost reduction",
      image: "AG"
    },
    {
      name: "Pitta Rajesh",
      title: "Facility Manager", 
      company: "XYZ Logistics",
      testimonial: "The improvement in air circulation was immediate. Our workers are more comfortable, and we've measured a 20% increase in productivity. Best investment we've made.",
      metric: "20% productivity increase",
      image: "PR"
    },
    {
      name: "Ravi Kumar",
      title: "Plant Head",
      company: "DEF Textiles",
      testimonial: "₹8.5L annual savings with just 14-month payback period. The ROI speaks for itself. Marley's engineering team provided excellent support throughout the project.",
      metric: "₹8.5L annual savings",
      image: "RK"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why 500+ Companies Choose Marley Fans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join India's most trusted manufacturers and warehouses in their energy efficiency journey
          </p>
        </div>

        {/* Customer Logos Carousel */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {customerLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-16 bg-muted/50 rounded-lg flex items-center justify-center font-bold text-muted-foreground hover:text-primary transition-colors">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="industrial-card">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Metric Highlight */}
              <div className="bg-accent-orange/10 rounded-lg p-3 mb-6">
                <p className="text-accent-orange font-bold text-center">
                  <TrendingUp className="inline h-4 w-4 mr-1" />
                  {testimonial.metric}
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-accent-orange/5 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Watch Real Customer Success Stories</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See how manufacturing and warehousing companies like yours achieved massive energy savings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Play className="mr-2 h-5 w-5" />
              Watch Success Stories
            </Button>
            <Button size="lg" variant="outline">
              <Award className="mr-2 h-5 w-5" />
              View All Case Studies
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-orange mb-2">₹2Cr+</div>
            <div className="text-muted-foreground">Energy Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">99.5%</div>
            <div className="text-muted-foreground">Uptime Record</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">14+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;