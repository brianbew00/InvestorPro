import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-navy shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-white text-xl font-bold">
              HEI Strategies
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-white hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="/offerings" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Offerings
              </a>
              <a href="/howitworks" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="/resources" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Resources
              </a>
              <a href="/dataroom" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Data Room
              </a>
              <a href="/investortypes" className="text-gray-300 hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Investor Types
              </a>
              <a href="/calendar" className="bg-brand-green hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Schedule Call
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-navy border-t border-gray-700">
              <a href="/" className="text-white hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                About
              </a>
              <a href="/offerings" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Offerings
              </a>
              <a href="/howitworks" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                How It Works
              </a>
              <a href="/resources" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Resources
              </a>
              <a href="/dataroom" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Data Room
              </a>
              <a href="/investortypes" className="text-gray-300 hover:text-brand-green block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Investor Types
              </a>
              <a href="/calendar" className="bg-brand-green hover:bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Schedule Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
