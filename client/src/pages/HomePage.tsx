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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Access Real Estate Alpha Before <span className="text-[#00A86B]">Wall Street Does</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
                Invest in home equity contracts with high-yield potential and no landlord risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-[#00A86B] hover:bg-[#059669] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Request Access
                </Button>
                <Link href="/offerings">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0E1A2B] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                    View Offerings
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>

        {/* Capital Stack Diagram Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Investment Capital Stack</h2>
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
