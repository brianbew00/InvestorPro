import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Legal & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive regulatory disclosures, investor protections, and compliance information in accordance with federal securities laws.
            </p>
          </div>

          <div className="space-y-8">
            {/* SEC Reg D 506(c) Disclosure */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">SEC Regulation D 506(c) Disclosure</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important Legal Notice:</strong> The securities offered on this website have not been registered under the Securities Act of 1933, as amended (the "Securities Act"), or under the securities laws of any state or other jurisdiction. The securities are being offered and sold in reliance on exemptions from the registration requirements of the Securities Act and such state securities laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The securities are being offered and sold: (i) in the United States only to "accredited investors" (as defined in Rule 501(a) under the Securities Act) pursuant to the exemption from registration provided by Rule 506(c) promulgated under the Securities Act, and (ii) outside the United States only to non-U.S. persons pursuant to the exemption from registration provided by Regulation S under the Securities Act.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Each prospective investor will be required to provide such information as HEI Strategies may request to determine such prospective investor's eligibility to invest and suitability for the investment offered, and each prospective investor will be required to represent that it is an "accredited investor" and provide verification thereof.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Investment Risk Warning</h4>
                  <p className="text-red-700 text-sm leading-relaxed">
                    <strong>THESE SECURITIES INVOLVE A HIGH DEGREE OF RISK AND MAY RESULT IN THE COMPLETE LOSS OF YOUR INVESTMENT.</strong> 
                    These securities should only be purchased by persons who can afford to lose their entire investment. 
                    See "Risk Factors" in the applicable offering memorandum for a detailed discussion of risks.
                  </p>
                </div>
              </div>
            </div>

            {/* Accredited Investor Requirements */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Accredited Investor Definition</h3>
              <p className="text-gray-700 mb-6">
                Under federal securities laws, a company that offers or sells its securities must register the securities with the SEC or find an exemption from the registration requirements. An "accredited investor" includes any person who:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Individual Qualifications</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Has individual income exceeding $200,000 in each of the two most recent years</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Has joint income with spouse exceeding $300,000 in each of those years</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Has net worth exceeding $1 million (excluding primary residence)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Holds certain professional certifications or credentials</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Entity Qualifications</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Bank, insurance company, investment company, or business development company</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Employee benefit plan with assets exceeding $5 million</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Trust with assets exceeding $5 million</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">Entity with assets exceeding $5 million</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Legal Notices */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Additional Legal Notices</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">Forward-Looking Statements</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This website contains forward-looking statements that involve risks and uncertainties. Actual results may differ materially from those projected. 
                    Past performance does not guarantee future results. All investments involve risk of loss.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">No Offer or Solicitation</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The information on this website does not constitute an offer to sell or a solicitation of an offer to buy securities. 
                    Any such offer or solicitation will be made only through definitive offering documents.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-3">Jurisdiction Limitations</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The securities described herein are not being offered in any jurisdiction where such offer would be prohibited by law. 
                    This website is not directed to any person in any country where the publication or availability of this website is prohibited.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy and Terms */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Privacy Policy & Terms of Use</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Privacy Policy</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    We are committed to protecting your privacy and maintaining the confidentiality of your personal information. 
                    Our Privacy Policy describes how we collect, use, and protect your information.
                  </p>
                  <a href="/privacy-policy" className="text-brand-green hover:text-green-600 text-sm font-medium">
                    Read Full Privacy Policy →
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy mb-4">Terms of Use</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    By accessing this website, you agree to be bound by our Terms of Use, which govern your use of this website 
                    and any materials contained herein.
                  </p>
                  <a href="/terms-of-use" className="text-brand-green hover:text-green-600 text-sm font-medium">
                    Read Terms of Use →
                  </a>
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
