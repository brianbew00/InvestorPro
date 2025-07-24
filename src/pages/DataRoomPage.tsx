import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DataRoomForm from "@/components/DataRoomForm";
import { Lock, FileText, BarChart2, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function DataRoomPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Secure Data Room</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Access comprehensive due diligence materials, private placement memorandums, and term sheets. Verification required for accredited investor status.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-brand-green" />
                    <span>Private Placement Memorandums (PPM)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart2 className="h-5 w-5 text-brand-green" />
                    <span>Historical Performance Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-brand-green" />
                    <span>Risk Assessment Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-brand-green" />
                    <span>Market Analysis & Projections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-brand-green" />
                    <span>Management Team Backgrounds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green" />
                    <span>Compliance & Legal Documentation</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-200">
                    <strong>Note:</strong> All materials are confidential and subject to non-disclosure agreements. Access is limited to verified accredited investors only.
                  </p>
                </div>
              </div>
              <div>
                <DataRoomForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
