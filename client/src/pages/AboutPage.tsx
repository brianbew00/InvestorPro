import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Lock, Award } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Thompson",
      title: "Chief Executive Officer",
      bio: "Former Goldman Sachs MD with 15+ years in structured products and real estate finance. MBA from Wharton.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Chen",
      title: "Chief Investment Officer", 
      bio: "Ex-BlackRock portfolio manager specializing in alternative investments. CFA charterholder with 12 years experience.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "David Rodriguez",
      title: "Chief Compliance Officer",
      bio: "Former SEC attorney with expertise in private fund regulation. JD from Stanford Law School.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">About HEI Strategies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the transformation of home equity investments through innovative financial structures and institutional-grade due diligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HEI Strategies bridges the gap between traditional real estate investment and modern financial innovation. We provide accredited investors with direct access to home equity investments before they're packaged and sold to institutional buyers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our proprietary underwriting process and risk management framework deliver consistent returns while maintaining the highest standards of regulatory compliance and investor protection.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-green">$500M+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-green">1,200+</div>
                  <div className="text-sm text-gray-600">Accredited Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-green">95%</div>
                  <div className="text-sm text-gray-600">On-Time Performance</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office building representing HEI Strategies headquarters" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-brand-navy text-center mb-12">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <img 
                    src={member.image} 
                    alt={`${member.name} headshot`} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-brand-navy mb-2">{member.name}</h4>
                  <p className="text-brand-green font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Compliance Badges */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-navy text-center mb-8">Trust & Compliance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-brand-green" />
                </div>
                <p className="text-sm font-semibold text-brand-navy">SEC Registered</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-brand-green" />
                </div>
                <p className="text-sm font-semibold text-brand-navy">FINRA Member</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-8 w-8 text-brand-green" />
                </div>
                <p className="text-sm font-semibold text-brand-navy">SOC 2 Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-brand-green" />
                </div>
                <p className="text-sm font-semibold text-brand-navy">AML Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
