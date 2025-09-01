import { ArrowRight, TrendingDown, TrendingUp, Zap, Wind, Users, Settings } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "High Electricity Bills",
      description: "₹5L+/month cooling costs draining profits",
      impact: "Up to 60% of facility energy costs"
    },
    {
      icon: Wind,
      title: "Poor Air Circulation", 
      description: "Stagnant air creating hot spots and humidity",
      impact: "Reduced equipment efficiency"
    },
    {
      icon: Users,
      title: "Worker Discomfort",
      description: "Heat stress affecting productivity and safety",
      impact: "20% productivity loss in summer"
    },
    {
      icon: Settings,
      title: "High Maintenance Costs",
      description: "Multiple small fans breaking down frequently",
      impact: "Constant repair and replacement"
    }
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: "40% Energy Savings",
      description: "Guaranteed reduction in cooling costs",
      benefit: "ROI within 12-18 months"
    },
    {
      icon: Wind,
      title: "Uniform Air Distribution",
      description: "Complete coverage with minimal energy use",
      benefit: "20,000+ sq ft per fan"
    },
    {
      icon: Users,
      title: "Improved Productivity",
      description: "Comfortable working environment year-round",
      benefit: "Measurable output increase"
    },
    {
      icon: Zap,
      title: "99.5% Uptime",
      description: "Reliable operation with minimal maintenance",
      benefit: "5-year comprehensive warranty"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Facility's Energy Efficiency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From energy waste to energy savings - see how HVLS fans solve your biggest operational challenges
          </p>
        </div>

        {/* Problems vs Solutions Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problems Side */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-destructive mb-4">
                Current Challenges
              </h3>
              <p className="text-muted-foreground">
                Common issues faced by manufacturing and warehousing facilities
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div key={index} className="bg-white/70 rounded-lg p-6 border border-destructive/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{problem.description}</p>
                        <p className="text-destructive text-sm font-medium">
                          💸 {problem.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-primary rounded-full p-4 shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Solutions Side */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-success mb-4">
                HVLS Fan Solutions
              </h3>
              <p className="text-muted-foreground">
                Proven results delivered by Marley's industrial-grade fans
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 border border-success/20 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{solution.description}</p>
                        <p className="text-success text-sm font-medium">
                          ✅ {solution.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h3>
            <p className="text-muted-foreground mb-6">
              Get a customized energy savings analysis for your facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg">
                Calculate My Savings
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary-action px-8 py-3 rounded-full font-semibold">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;