import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, Shield, FileText, Users, CheckSquare, Calendar, Phone, Mail } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">Schedule a Consultation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a confidential consultation with our investment team to discuss your portfolio needs and explore HEI investment opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">30-Minute Discovery Call</h4>
                    <p className="text-gray-600 text-sm">Initial conversation to understand your investment objectives, risk tolerance, and portfolio requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Confidential Discussion</h4>
                    <p className="text-gray-600 text-sm">All conversations are strictly confidential and covered by our privacy policy and non-disclosure agreements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Custom Investment Proposals</h4>
                    <p className="text-gray-600 text-sm">Receive tailored investment recommendations based on your specific needs and accreditation status.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2">Meet the Team</h4>
                    <p className="text-gray-600 text-sm">Connect with our investment professionals, compliance officers, and relationship managers.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-gray rounded-lg">
                <h4 className="text-lg font-semibold text-brand-navy mb-3">Preparation Checklist</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckSquare className="h-4 w-4 text-brand-green mr-3" />
                    Review your current portfolio allocation
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="h-4 w-4 text-brand-green mr-3" />
                    Confirm your accredited investor status
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="h-4 w-4 text-brand-green mr-3" />
                    Prepare questions about our investment process
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="h-4 w-4 text-brand-green mr-3" />
                    Consider your risk tolerance and return expectations
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-brand-gray rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-brand-navy mb-6 text-center">Book Your Consultation</h3>
                
                {/* Embedded Calendar Placeholder */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                  <div className="text-center text-gray-500 py-12">
                    <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium mb-2">Calendar Integration</p>
                    <p className="text-sm mb-6">Select your preferred time slot</p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded text-left">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Tuesday, March 19, 2024</span>
                          <span className="text-brand-green text-sm">Available</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          10:00 AM, 2:00 PM, 4:30 PM
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded text-left">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Wednesday, March 20, 2024</span>
                          <span className="text-brand-green text-sm">Available</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          9:30 AM, 11:00 AM, 3:00 PM
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded text-left">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Thursday, March 21, 2024</span>
                          <span className="text-brand-green text-sm">Available</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          1:00 PM, 3:30 PM, 5:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-brand-navy mb-4">Alternative Contact Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-green" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-green" />
                      <span className="text-gray-700">investors@heistrategies.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-brand-green" />
                      <span className="text-gray-700">Mon-Fri, 9:00 AM - 6:00 PM EST</span>
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
