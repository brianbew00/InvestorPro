import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">HEI Strategies</h3>
              <p className="text-blue-200">
                Institutional-grade home equity investments for accredited investors seeking alternative real estate exposure with superior risk-adjusted returns.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/hei-strategies" className="text-blue-200 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/hei_strategies" className="text-blue-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Investors</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="/offerings" target="_self" rel="noopener" className="hover:text-white transition-colors">Investment Offerings</a></li>
              <li><a href="/dataroom" target="_self" rel="noopener" className="hover:text-white transition-colors">Data Room</a></li>
              <li><a href="/resources" target="_self" rel="noopener" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="/calendar" target="_self" rel="noopener" className="hover:text-white transition-colors">Schedule Call</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="/about" target="_self" rel="noopener" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/howitworks" target="_self" rel="noopener" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/compliance" target="_self" rel="noopener" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="/careers" target="_self" rel="noopener" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-blue-800 pt-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-red-200 mb-3">SEC Regulation D 506(c) Notice</h4>
            <p className="text-red-100 text-sm leading-relaxed">
              <strong>Securities offered through this website are offered solely to accredited investors pursuant to Rule 506(c) of Regulation D under the Securities Act of 1933.</strong> 
              These securities have not been registered with the SEC and involve significant risk including possible loss of principal. 
              Past performance does not guarantee future results. This communication is not an offer to sell securities.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 HEI Strategies. All rights reserved. Licensed investment advisor.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" target="_self" rel="noopener" className="text-blue-200 hover:text-white text-sm">Privacy Policy</a>
              <a href="/terms-of-use" target="_self" rel="noopener" className="text-blue-200 hover:text-white text-sm">Terms of Use</a>
              <a href="/compliance" target="_self" rel="noopener" className="text-blue-200 hover:text-white text-sm">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}