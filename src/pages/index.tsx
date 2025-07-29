import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1A2B] via-[#1a2332] to-[#243040] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Header Content */}
            <div className="order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Access Real Estate Alpha Before <span className="text-[#00A86B]">Wall Street Does</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Invest in home equity contracts with high-yield potential and no landlord risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-[#00A86B] hover:bg-[#059669] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Request Access
                </Button>
                <a href="/offerings" target="_self" rel="noopener">
                  <Button variant="outline" className="border-2 border-white text-black bg-white hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                    View Offerings
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="order-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-2 text-center text-white">Get Exclusive Access</h2>
                <p className="text-center text-gray-300 mb-6 text-sm">Join our network of investors</p>
                <LeadCaptureForm />
              </div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="mt-16 pt-16 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Benefit cards */}
              {[
                { title: "High-Yield Returns", desc: "Target returns of 8-15% annually with quarterly distributions" },
                { title: "No Landlord Risk", desc: "No tenant management, repairs, or vacancy concerns" },
                { title: "Diversified Portfolio", desc: "Access to multiple geographic markets and property types" },
                { title: "SEC Compliant", desc: "Fully regulated Reg D 506(c) private offerings" },
              ].map((b, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#00A86B] rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-white">{b.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {["SEC Registered", "$50M+ Assets Under Management", "Accredited Investors Only"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-[#00A86B] mr-2">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HEI Strategies */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">Why Choose HEI Strategies?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We provide accredited and institutional investors with exclusive access to high-performing home equity investments through our proven strategy and rigorous due diligence process.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Strategy cards */}
            {[
              { icon: "8-15%", title: "Target Annual Returns", desc: "Consistent performance with quarterly distributions and capital appreciation potential." },
              { icon: "$50M+", title: "Assets Under Management", desc: "Proven track record managing substantial capital across diverse real estate markets." },
              { icon: "0%", title: "Landlord Responsibilities", desc: "Pure investment exposure without the operational complexities of traditional real estate." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#00A86B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Platform */}
      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">Explore Our Investment Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover comprehensive resources and detailed information about our investment opportunities and strategies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              ["/offerings", "$", "Current Offerings", "View available investment opportunities..."],
              ["/howitworks", "?", "How It Works", "Learn our step-by-step investment process..."],
              ["/dataroom", "📊", "Data Room Access", "Access detailed financial models..."],
              ["/investortypes", "👥", "Investor Types", "Understand accreditation requirements..."],
              ["/resources", "📚", "Resources & Insights", "Read market analysis and educational content..."],
              ["/calendar", "📅", "Schedule Consultation", "Book a personalized consultation..."]
            ].map(([href, icon, title, desc], i) => (
              <a key={i} href={href} target="_self" rel="noopener" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 hover:border-[#00A86B] block">
                <div className="w-12 h-12 bg-[#00A86B] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl font-bold">{icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A2B] mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <span className="text-[#00A86B] font-semibold hover:underline">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="bg-gradient-to-r from-[#0E1A2B] to-[#1a2332] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Building Wealth?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join investors who are already generating consistent returns through our home equity investment platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#00A86B] hover:bg-[#059669] text-white px-8 py-4 text-lg font-semibold">
              Request Access Today
            </Button>
            <a href="/about" target="_self" rel="noopener">
              <Button variant="outline" className="border-2 border-white text-black bg-white hover:bg-gray-200 px-8 py-4 text-lg font-semibold transition-all duration-300">
                Learn About Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E1A2B] mb-4">Our Investment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A systematic approach to identifying, analyzing, and executing high-value home equity investment opportunities.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {["Market Analysis", "Property Selection", "Due Diligence", "Portfolio Management"].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[#0E1A2B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#0E1A2B] mb-3">{step}</h3>
                <p className="text-gray-600 text-sm">
                  {[
                    "Comprehensive evaluation of local market conditions...",
                    "Rigorous screening process focusing on location...",
                    "Thorough financial analysis, legal review, and risk assessment...",
                    "Active monitoring and optimization with regular reporting..."
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Stack */}
      <section className="bg-gradient-to-br from-[#0E1A2B] via-[#1a2332] to-[#243040] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Investment Capital Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Multiple investment tiers designed to meet different risk profiles and return objectives for accredited investors.
          </p>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/20 rounded-lg p-6 text-center space-y-3">
              <h3 className="text-white font-semibold mb-4">Capital Stack Structure</h3>
              <div className="bg-[#00A86B]/30 p-3 rounded border border-[#00A86B]/50 text-[#00A86B] font-semibold">Senior Notes - 12%</div>
              <div className="bg-yellow-500/30 p-3 rounded border border-yellow-500/50 text-yellow-300 font-semibold">Preferred Equity - 10-15%</div>
              <div className="bg-purple-500/30 p-3 rounded border border-purple-500/50 text-purple-300 font-semibold">Co-Investment - 15%+</div>
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
      </section>

      <Footer />
    </div>
  );
}
