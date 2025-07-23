import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, FileText, DollarSign, RefreshCw, AlertTriangle, ShieldCheck } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">How HEI Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process transforms home equity into institutional-grade investment opportunities through rigorous underwriting and risk management.
            </p>
          </div>

          {/* Process Flow */}
          <div className="mb-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <Search className="h-10 w-10 text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Origination</h3>
                <p className="text-gray-600">Identify and source qualified home equity opportunities through our proprietary network of partners and direct channels.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <FileText className="h-10 w-10 text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Underwriting</h3>
                <p className="text-gray-600">Comprehensive due diligence including credit analysis, property valuation, and legal review using institutional standards.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <DollarSign className="h-10 w-10 text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Payout</h3>
                <p className="text-gray-600">Fund approved home equity contracts and begin generating returns for investors through structured payment schedules.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <RefreshCw className="h-10 w-10 text-white" />
                  <span className="absolute -top-2 -right-2 bg-brand-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Settlement</h3>
                <p className="text-gray-600">Execute contract terms through sale or refinancing events, distributing returns to investors according to waterfall structures.</p>
              </div>
            </div>
          </div>

          {/* Contract Lifecycle Visual */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Contract Lifecycle</h3>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                  alt="Investment lifecycle timeline visualization" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-brand-navy mb-2">Origination (Months 1-2)</h4>
                  <p className="text-gray-600 text-sm">Source and screen opportunities, preliminary underwriting, term sheet negotiation</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-brand-navy mb-2">Investment Period (Months 3-36)</h4>
                  <p className="text-gray-600 text-sm">Active monitoring, quarterly reporting, interim distributions as applicable</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-brand-navy mb-2">Exit Event (Months 24-48)</h4>
                  <p className="text-gray-600 text-sm">Property sale, refinancing, or contract maturity with full return of capital plus gains</p>
                </div>
              </div>
            </div>
          </div>

          {/* Risks and Mitigations */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Risk Management Framework</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-brand-navy mb-4">Key Risks</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Market Risk</h5>
                      <p className="text-gray-600 text-sm">Property value fluctuations affecting underlying collateral</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Credit Risk</h5>
                      <p className="text-gray-600 text-sm">Homeowner default or inability to fulfill contract terms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Liquidity Risk</h5>
                      <p className="text-gray-600 text-sm">Limited secondary market for home equity investments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-navy mb-4">Risk Mitigations</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-brand-green mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Geographic Diversification</h5>
                      <p className="text-gray-600 text-sm">Portfolio spread across multiple MSAs and property types</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-brand-green mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Conservative LTV Ratios</h5>
                      <p className="text-gray-600 text-sm">Maximum 70% LTV with stress-tested valuations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-brand-green mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-800">Active Monitoring</h5>
                      <p className="text-gray-600 text-sm">Continuous portfolio surveillance and early warning systems</p>
                    </div>
                  </div>
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
