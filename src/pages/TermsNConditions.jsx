import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. OUR SERVICES",
      content: "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable."
    },
    {
      title: "2. INTELLECTUAL PROPERTY RIGHTS",
      content: "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services. Our Content and Marks are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws and treaties around the world. The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only."
    },
    {
      title: "3. USER REPRESENTATIONS",
      content: "By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside."
    },
    {
      title: "4. USER REGISTRATION",
      content: "You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable."
    },
    {
      title: "5. PRODUCTS",
      content: "We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason."
    },
    {
      title: "6. PURCHASES AND PAYMENT",
      content: "You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date. We reserve the right to refuse any order placed through the Services and to limit or cancel quantities purchased per person, per household, or per order."
    },
    {
      title: "7. RETURN POLICY",
      content: "All sales are final and no refund will be issued."
    },
    {
      title: "8. PROHIBITED ACTIVITIES",
      content: "You may not access or use the Services for any purpose other than that for which we make the Services available. You agree not to systematically retrieve data, trick or mislead users, circumvent security features, disparage the Services, use the platform for harassment, make improper use of support services, or engage in any unauthorized use of the system."
    },
    {
      title: "14. TERM AND TERMINATION",
      content: "These Legal Terms shall remain in full force and effect while you use the Services. We reserve the right, in our sole discretion and without notice or liability, to deny access to and use of the Services to any person for any reason or for no reason. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name or any fake name."
    },
    {
      title: "15. MODIFICATIONS AND INTERRUPTIONS",
      content: "We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors."
    },
    {
      title: "16. GOVERNING LAW",
      content: "These Legal Terms shall be governed by and defined following the laws of India. RealtyBureau and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms."
    },
    {
      title: "19. DISCLAIMER",
      content: "THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE."
    },
    {
      title: "20. LIMITATIONS OF LIABILITY",
      content: "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES."
    },
    {
      title: "25. CONTACT US",
      content: "RealtyBureau, 5th Floor, Business Bureau, Panampilly Nagar, Kochi, 682036, India. Email: info.realtybureau@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-[#2563eb] hover:text-white px-4 py-2 rounded-lg hover:bg-[#2563eb] transition-all duration-300 font-semibold text-sm"
        >
          ← Back to Home
        </button>

        {/* HEADER */}
        <div className="border-b-4 border-[#d4af37] pb-8 mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-4">
            Last updated January 03, 2026
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are <span className="font-bold text-black">RealtyBureau</span> ("Company," "we," "us," "our"), a company providing real estate listing and property management services. We operate the website <a href="https://realtybureau.in" className="text-[#2563eb] hover:text-[#d4af37] underline">https://realtybureau.in</a> and related services.
          </p>
        </div>

        {/* INTRODUCTION */}
        <div className="bg-gray-50 border-l-4 border-[#2563eb] pl-6 py-4 rounded mb-10">
          <p className="text-gray-800 leading-relaxed">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and RealtyBureau, concerning your access to and use of the Services. By accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
          </p>
          <p className="text-gray-700 mt-4 font-semibold">
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
        </div>

        {/* KEY INFORMATION */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-black mb-2">Age Requirement</h3>
              <p className="text-gray-700">The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-black mb-2">Contact Information</h3>
              <p className="text-gray-700">
                Email: <a href="mailto:info.realtybureau@gmail.com" className="text-[#2563eb] hover:text-[#d4af37]">info.realtybureau@gmail.com</a>
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-black mb-2">Governing Law</h3>
              <p className="text-gray-700">These Legal Terms shall be governed by and defined following the laws of India.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-black mb-2">Return Policy</h3>
              <p className="text-gray-700">All sales are final and no refund will be issued.</p>
            </div>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Terms Details</h2>
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex items-center justify-between text-left"
                >
                  <h3 className="font-bold text-black text-lg">{section.title}</h3>
                  <span className={`text-[#2563eb] text-2xl transition-transform duration-300 ${expandedSection === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedSection === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-300">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-yellow-50 border-4 border-[#d4af37] rounded-lg p-8 mb-10">
          <h3 className="text-xl font-bold text-[#d4af37] mb-4">⚠️ Important Disclaimer</h3>
          <p className="text-gray-800 leading-relaxed">
            The Services are provided on an "AS-IS" and "AS-AVAILABLE" basis. We disclaim all warranties, express or implied, in connection with the Services and your use thereof. We will not be liable for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the Services.
          </p>
        </div>

        {/* FOOTER */}
        <div className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Contact RealtyBureau</h3>
          <div className="space-y-2">
            <p><span className="font-bold">Address:</span> 5th Floor, Business Bureau, Panampilly Nagar, Kochi, 682036, India</p>
            <p><span className="font-bold">Email:</span> <a href="mailto:info.realtybureau@gmail.com" className="text-[#d4af37] hover:text-white underline">info.realtybureau@gmail.com</a></p>
          </div>
        </div>

        {/* SPACING */}
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default TermsAndConditions;