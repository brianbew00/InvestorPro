import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Briefcase, Home, TrendingUp, Check, Layers, Phone, BarChart } from "lucide-react";

export default function InvestorTypesPage() {
  const investorTypes = [
    {
      title: "Accredited Investor",
      description: "High-net-worth individuals seeking alternative real estate exposure",
      icon: User,
      color: "blue",
      features: [
        "Minimum $50K investment",
        "Quarterly reporting", 
        "Direct investor relations",
        "Educational resources"
      ]
    },
    {
      title: "Registered Investment Advisor",
      description: "Professional investment managers and wealth advisors",
      icon: Briefcase,
      color: "green",
      features: [
        "Wholesale pricing",
        "Client management tools",
        "Performance reporting",
        "Marketing support"
      ]
    },
    {
      title: "Family Office",
      description: "Ultra-high-net-worth family investment offices",
      icon: Home,
      color: "purple",
      features: [
        "Co-investment opportunities",
        "Custom structures",
        "Direct access to principals",
        "Exclusive deal flow"
      ]
    },
    {
      title: "Broker-Dealer",
      description: "Institutional distribution partners and platforms",
      icon: TrendingUp,
      color: "orange",
      features: [
        "Commission structures",
        "Due diligence packages",
        "Sales training materials",
        "Technology integration"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600 hover:bg-blue-700",
      green: "bg-brand-green hover:bg-green-600",
      purple: "bg-purple-600 hover:bg-purple-700",
      orange: "bg-orange-600 hover:bg-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Investor Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored investment solutions and microsites designed for different types of accredited investors and financial professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${getColorClasses(type.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-brand-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${getColorClasses(type.color)} text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm`}>
                    View Microsite
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Enhanced Features Section */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Tailored Investment Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-6 w-6 text-brand-green" />
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-3">Customized Portals</h4>
                <p className="text-gray-600 text-sm">Dedicated microsites with investor-specific content, documentation, and performance tracking.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-brand-green" />
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-3">Dedicated Support</h4>
                <p className="text-gray-600 text-sm">Specialized relationship managers and support teams for each investor category.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-brand-green" />
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-3">Enhanced Reporting</h4>
                <p className="text-gray-600 text-sm">Institutional-grade reporting and analytics tailored to professional investment standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
