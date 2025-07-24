import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1A2B] via-[#1a2332] to-[#243040] text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
          <div className="grid lg:grid-cols-2 lg:gap-12 items-start h-full">
            <div className="lg:col-span-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Access Real Estate Alpha Before <span className="text-[#00A86B]">Wall Street Does</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                Invest in home equity contracts with high-yield potential and no landlord risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-[#00A86B] hover:bg-[#059669] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Request Access
                </Button>
                <Link href="/offerings">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A2B] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                    View Offerings
                  </Button>
                </Link>
              </div>
              
              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#00A86B] rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-white">High-Yield Returns</h3>
                  </div>
                  <p className="text-sm text-gray-300">Target returns of 8-15% annually with quarterly distributions</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#00A86B] rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-white">No Landlord Risk</h3>
                  </div>
                  <p className="text-sm text-gray-300">No tenant management, repairs, or vacancy concerns</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#00A86B] rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-white">Diversified Portfolio</h3>
                  </div>
                  <p className="text-sm text-gray-300">Access to multiple geographic markets and property types</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#00A86B] rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-white">SEC Compliant</h3>
                  </div>
                  <p className="text-sm text-gray-300">Fully regulated Reg D 506(c) private offerings</p>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="text-[#00A86B] mr-2">✓</span>
                  SEC Registered
                </div>
                <div className="flex items-center">
                  <span className="text-[#00A86B] mr-2">✓</span>
                  $50M+ Assets Under Management
                </div>
                <div className="flex items-center">
                  <span className="text-[#00A86B] mr-2">✓</span>
                  Accredited Investors Only
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-2 text-center text-white">Get Exclusive Access</h2>
                <p className="text-center text-gray-300 mb-6 text-sm">Join our network of sophisticated investors</p>
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HEI Strategies Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">
              Why Choose HEI Strategies?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide sophisticated investors with exclusive access to high-performing home equity investments through our proven strategy and rigorous due diligence process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A86B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">8-15%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Target Annual Returns</h3>
              <p className="text-gray-600">Consistent performance with quarterly distributions and capital appreciation potential.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A86B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">$50M+</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Assets Under Management</h3>
              <p className="text-gray-600">Proven track record managing substantial capital across diverse real estate markets.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00A86B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">0%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Landlord Responsibilities</h3>
              <p className="text-gray-600">Pure investment exposure without the operational complexities of traditional real estate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Platform Section */}
      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">
              Explore Our Investment Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive resources and detailed information about our investment opportunities and strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/offerings">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#00A86B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Current Offerings</h3>
                <p className="text-gray-600 mb-4">View available investment opportunities with detailed returns, terms, and market analysis.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Explore Offerings →</span>
              </div>
            </Link>
            
            <Link href="/how-it-works">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#0E1A2B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">?</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">How It Works</h3>
                <p className="text-gray-600 mb-4">Learn our step-by-step investment process and understand how home equity contracts generate returns.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Learn More →</span>
              </div>
            </Link>
            
            <Link href="/data-room">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#00A86B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Data Room Access</h3>
                <p className="text-gray-600 mb-4">Access detailed financial models, legal documents, and due diligence materials for qualified investors.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Request Access →</span>
              </div>
            </Link>
            
            <Link href="/investor-types">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#0E1A2B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Investor Types</h3>
                <p className="text-gray-600 mb-4">Understand accreditation requirements and which investment tier matches your profile and goals.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Find Your Tier →</span>
              </div>
            </Link>
            
            <Link href="/resources">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#00A86B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Resources & Insights</h3>
                <p className="text-gray-600 mb-4">Read market analysis, research reports, and educational content about home equity investments.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">View Resources →</span>
              </div>
            </Link>
            
            <Link href="/calendar">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B]">
                <div className="w-12 h-12 bg-[#0E1A2B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">Schedule Consultation</h3>
                <p className="text-gray-600 mb-4">Book a personalized consultation with our investment team to discuss your portfolio strategy.</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Schedule Now →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="bg-gradient-to-r from-[#0E1A2B] to-[#1a2332] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join sophisticated investors who are already generating consistent returns through our home equity investment platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00A86B] hover:bg-[#059669] text-white px-8 py-4 text-lg font-semibold">
              Request Access Today
            </Button>
            <Link href="/about">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A2B] px-8 py-4 text-lg font-semibold">
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">
              Our Investment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identifying, analyzing, and executing high-value home equity investment opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0E1A2B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-[#0E1A2B] mb-3">Market Analysis</h3>
              <p className="text-gray-600 text-sm">Comprehensive evaluation of local market conditions, appreciation trends, and demographic factors.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0E1A2B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-[#0E1A2B] mb-3">Property Selection</h3>
              <p className="text-gray-600 text-sm">Rigorous screening process focusing on location, condition, and growth potential of underlying assets.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0E1A2B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-[#0E1A2B] mb-3">Due Diligence</h3>
              <p className="text-gray-600 text-sm">Thorough financial analysis, legal review, and risk assessment by our experienced team.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0E1A2B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-[#0E1A2B] mb-3">Portfolio Management</h3>
              <p className="text-gray-600 text-sm">Active monitoring and optimization of investments with regular reporting to investors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Stack Section */}
      <section className="bg-gradient-to-br from-[#0E1A2B] via-[#1a2332] to-[#243040] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Investment Capital Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple investment tiers designed to meet different risk profiles and return objectives for accredited investors.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white/20 rounded-lg p-6 text-center">
                  <h3 className="text-white font-semibold mb-4">Capital Stack Structure</h3>
                  <div className="space-y-3">
                    <div className="bg-[#00A86B]/30 p-3 rounded border border-[#00A86B]/50">
                      <div className="text-[#00A86B] font-semibold">Senior Notes - 12%</div>
                    </div>
                    <div className="bg-yellow-500/30 p-3 rounded border border-yellow-500/50">
                      <div className="text-yellow-300 font-semibold">Preferred Equity - 10-15%</div>
                    </div>
                    <div className="bg-purple-500/30 p-3 rounded border border-purple-500/50">
                      <div className="text-purple-300 font-semibold">Co-Investment - 15%+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#00A86B]/20 p-4 rounded-lg border border-[#00A86B]/30">
                  <h4 className="font-semibold text-[#00A86B]">Senior Position</h4>
                  <p className="text-sm text-gray-200">Secured notes with 12% target returns</p>
                </div>
                <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold text-yellow-300">Preferred Equity</h4>
                  <p className="text-sm text-gray-200">10-15% preferred returns with upside participation</p>
                </div>
                <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-purple-300">Co-Investment</h4>
                  <p className="text-sm text-gray-200">Direct co-investment opportunities with family offices</p>
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