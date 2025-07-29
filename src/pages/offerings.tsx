import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Users, Check } from "lucide-react";
import { Link } from "wouter";

export default function OfferingsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Investment Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified home equity investment opportunities designed for sophisticated investors seeking alternative real estate exposure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 12% Secured Notes */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">12% Secured Notes</h3>
                <p className="text-lg font-semibold text-blue-600">Senior Position</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  First lien position on underlying assets
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Fixed 12% annual returns
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Quarterly distributions
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  24-36 month terms
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  $50K minimum investment
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Request Information
              </Button>
            </div>

            {/* 10-15% Preferred Equity */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 shadow-lg relative">
              <div className="absolute top-4 right-4">
                <span className="bg-brand-green text-white px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">10–15% Preferred Equity</h3>
                <p className="text-lg font-semibold text-brand-green">Growth Position</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Preferred returns with upside participation
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Target 10-15% IRR
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Semi-annual distributions
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  36-48 month terms
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  $100K minimum investment
                </li>
              </ul>
              <Button className="w-full bg-brand-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Request Information
              </Button>
            </div>

            {/* Co-Investments */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Co-Investments</h3>
                <p className="text-lg font-semibold text-purple-600">Family Office Partnership</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Direct co-investment opportunities
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Partnership with family offices
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Customized structures available
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  Flexible terms and exits
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-brand-green mr-3" />
                  $500K minimum investment
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Request Information
              </Button>
            </div>
          </div>

          {/* Enhanced Capital Stack Diagram */}
          <div className="bg-brand-gray rounded-xl p-8">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Capital Stack Structure</h3>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="stack-diagram.png" 
                  alt="Detailed Capital Stack Diagram" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">Risk-Adjusted Returns</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Senior Notes</span>
                      <span className="font-semibold text-blue-600">12% Fixed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Preferred Equity</span>
                      <span className="font-semibold text-brand-green">10-15% IRR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Co-Investment</span>
                      <span className="font-semibold text-purple-600">15%+ IRR</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/data-room">
                    <Button className="bg-brand-green hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
                      View Data Room
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-2 border-brand-navy text-black bg-white hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Request Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
