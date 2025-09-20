import React from 'react';
import { Wrench, Settings, Zap, Shield, Clock, Award, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-[#df2f18]" />,
      title: "Engine Repair & Maintenance",
      description: "Complete engine diagnostics, repair, and maintenance services to keep your vehicle running smoothly.",
      features: ["Engine Diagnostics", "Timing Belt Replacement", "Engine Rebuilds", "Performance Tuning"],
      price: "Starting from $150"
    },
    {
      icon: <Shield className="w-12 h-12 text-[#df2f18]" />,
      title: "Brake System Service",
      description: "Professional brake inspection, repair, and replacement services for your safety on the road.",
      features: ["Brake Pad Replacement", "Rotor Resurfacing", "Brake Fluid Change", "ABS System Repair"],
      price: "Starting from $120"
    },
    {
      icon: <Settings className="w-12 h-12 text-[#df2f18]" />,
      title: "Transmission Service",
      description: "Expert transmission repair and maintenance to ensure smooth gear shifting and optimal performance.",
      features: ["Transmission Flush", "Clutch Replacement", "Gear Box Repair", "Fluid Changes"],
      price: "Starting from $200"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#df2f18]" />,
      title: "Electrical System",
      description: "Complete electrical system diagnostics and repair for all your vehicle's electronic components.",
      features: ["Battery Testing", "Alternator Repair", "Starter Replacement", "Wiring Diagnostics"],
      price: "Starting from $100"
    },
    {
      icon: <Clock className="w-12 h-12 text-[#df2f18]" />,
      title: "Quick Oil Change",
      description: "Fast and professional oil change service with high-quality oils and filters.",
      features: ["Synthetic Oil Options", "Filter Replacement", "Fluid Top-offs", "Multi-point Inspection"],
      price: "Starting from $45"
    },
    {
      icon: <Award className="w-12 h-12 text-[#df2f18]" />,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance packages to prevent costly repairs and extend vehicle life.",
      features: ["Scheduled Maintenance", "Inspection Services", "Fluid Changes", "Belt & Hose Checks"],
      price: "Starting from $80"
    }
  ];

  const whyChooseUs = [
    "Certified ASE Technicians",
    "State-of-the-art Equipment",
    "Warranty on All Services",
    "Competitive Pricing",
    "Quick Turnaround Time",
    "Customer Satisfaction Guarantee"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Auto <span className="text-[#df2f18]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert automotive repair and maintenance services you can trust. Quality workmanship guaranteed.
          </p>
          <button className="bg-[#df2f18] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
            Schedule Service
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#df2f18]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive automotive services to keep your vehicle running at its best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#df2f18]">{service.price}</span>
                    <button className="bg-[#df2f18] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-[#df2f18]">AutoPartsPro</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of experience in automotive repair and maintenance, we're your trusted partner for all vehicle needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="bg-[#df2f18] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 mr-4">
                  Get Quote
                </button>
                <button className="border-2 border-[#df2f18] text-[#df2f18] hover:bg-[#df2f18] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Now
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Auto Service" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#df2f18] text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#df2f18] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Service Your Vehicle?
          </h2>
          <p className="text-xl text-white mb-8">
            Schedule your appointment today and experience professional automotive care
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-[#df2f18] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Schedule Online
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#df2f18] px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;