import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Check, Play } from "lucide-react";

export default function ResourcesPage() {
  const whitepapers = [
    {
      title: "Home Equity Investment Market Analysis 2024",
      description: "Comprehensive analysis of the $8.1 trillion home equity market and investment opportunities for accredited investors.",
      date: "March 2024"
    },
    {
      title: "Risk-Adjusted Returns in Alternative Real Estate",
      description: "Comparative study of home equity investments vs. traditional real estate and other alternative assets.",
      date: "February 2024"
    },
    {
      title: "Regulatory Framework for Home Equity Investments",
      description: "Legal and compliance considerations for accredited investors in home equity investment structures.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Investment Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational materials, research insights, and market analysis to help you make informed investment decisions.
            </p>
          </div>

          {/* Whitepapers Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Research & Whitepapers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {whitepapers.map((paper) => (
                <div key={paper.title} className="bg-brand-gray rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-brand-green mr-3" />
                    <span className="bg-brand-green text-white px-2 py-1 rounded text-xs font-semibold">PDF</span>
                  </div>
                  <h4 className="text-xl font-semibold text-brand-navy mb-3">{paper.title}</h4>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{paper.date}</span>
                    <Button className="bg-brand-green hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Webinar Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Educational Webinars</h3>
            <div className="bg-brand-gray rounded-xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450" 
                      alt="Webinar presenter discussing investment strategies" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 transition-colors">
                        <Play className="h-12 w-12 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-brand-navy mb-4">Home Equity Investment Masterclass</h4>
                  <p className="text-gray-600 mb-6">Join our investment team for an in-depth exploration of home equity investment strategies, risk management, and portfolio construction. This 60-minute session covers:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-brand-green mr-3" />
                      Market opportunity and sizing
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-brand-green mr-3" />
                      Investment structures and returns
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-brand-green mr-3" />
                      Risk mitigation strategies
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-brand-green mr-3" />
                      Live Q&A session
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button className="bg-brand-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Register Now
                    </Button>
                    <Button variant="outline" className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      View Recording
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glossary and Educational Content */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-navy mb-8 text-center">Investment Glossary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">Home Equity Investment</h5>
                  <p className="text-gray-600 text-sm">A financial arrangement where investors provide capital in exchange for a share of future property appreciation, without traditional lending structures.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">Capital Stack</h5>
                  <p className="text-gray-600 text-sm">The layered structure of different types of capital used to finance an investment, ranked by seniority and risk profile.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">Preferred Returns</h5>
                  <p className="text-gray-600 text-sm">A minimum threshold return that must be achieved before other investors receive distributions, providing downside protection.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">Reg D 506(c)</h5>
                  <p className="text-gray-600 text-sm">SEC regulation allowing private placements to accredited investors with general solicitation, subject to verification requirements.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">IRR (Internal Rate of Return)</h5>
                  <p className="text-gray-600 text-sm">A metric used to measure the profitability of an investment, representing the annualized effective compounded return rate.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h5 className="font-semibold text-brand-navy mb-2">LTV (Loan-to-Value)</h5>
                  <p className="text-gray-600 text-sm">The ratio of the investment amount to the appraised value of the property, used to assess risk exposure.</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-brand-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Complete Glossary
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
