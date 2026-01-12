import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicyFull = () => {
  const navigate = useNavigate();

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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated January 03, 2026
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-gray-50 border-l-4 border-[#2563eb] pl-6 py-4 rounded mb-10">
          <p className="text-gray-800 leading-relaxed">
            This Privacy Notice for <span className="font-bold text-black">RealtyBureau</span> ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services").
          </p>
        </div>

        {/* QUICK ACCESS */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Personal Information",
              "How We Process Information",
              "Information Sharing",
              "Cookies & Tracking",
              "Data Retention",
              "Your Privacy Rights",
              "Contact Information"
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border-l-4 border-[#2563eb] pl-4 py-3 rounded">
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SUMMARY SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#d4af37] mb-6">Summary of Key Points</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <span className="text-[#2563eb] font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-gray-800"><span className="font-semibold">What personal information do we collect?</span> We collect personal information that you voluntarily provide when you register, submit inquiries, or contact us.</p>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <span className="text-[#2563eb] font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-gray-800"><span className="font-semibold">Do we process sensitive information?</span> We do not process sensitive personal information.</p>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <span className="text-[#2563eb] font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-gray-800"><span className="font-semibold">Do we collect from third parties?</span> We do not collect any information from third parties.</p>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <span className="text-[#2563eb] font-bold text-xl flex-shrink-0">✓</span>
              <p className="text-gray-800"><span className="font-semibold">How do we keep your information safe?</span> We have organizational and technical security measures in place to protect your personal information.</p>
            </div>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">1. What Information Do We Collect?</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-4">Personal Information You Disclose</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us, participate in activities on the Services, or contact us.
            </p>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-semibold text-black mb-3">The personal information we collect may include:</p>
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Names</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Phone numbers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Email addresses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Usernames</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Passwords</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2563eb]">→</span>
                  <span className="text-gray-800">Contact information</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-4">Information Automatically Collected</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Some information is collected automatically when you visit our Services. This includes your IP address, browser and device characteristics, operating system, and usage data.
            </p>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-semibold text-black mb-3">This may include:</p>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb] font-bold">•</span>
                  <span>Log and usage data related to your activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb] font-bold">•</span>
                  <span>Device information and event data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563eb] font-bold">•</span>
                  <span>Location data based on IP address and GPS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">2. How Do We Process Your Information?</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We process your personal information for various reasons, including:
          </p>
          <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb] space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To facilitate account creation and authentication</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To respond to user inquiries and provide support</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To fulfill and manage your orders and payments</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To enable user-to-user communications</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To send marketing and promotional communications</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To evaluate and improve our Services</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#2563eb] font-bold">→</span>
              <span className="text-gray-800">To identify usage trends and marketing effectiveness</span>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">3. When and With Whom Do We Share Your Information?</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We may share your personal information in specific situations:
          </p>
          <div className="bg-blue-50 p-6 rounded border-l-4 border-[#2563eb]">
            <p className="text-gray-800"><span className="font-bold">Business Transfers:</span> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. We also use Google Analytics to track and analyze the use of the Services.
          </p>
          <div className="bg-yellow-50 p-6 rounded border-l-4 border-[#d4af37]">
            <p className="text-gray-800"><span className="font-bold">Opt-out:</span> To opt out of being tracked by Google Analytics, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#2563eb] hover:text-[#d4af37] underline">https://tools.google.com/dlpage/gaoptout</a></p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">5. Social Logins</h2>
          <p className="text-gray-800 leading-relaxed">
            If you choose to register using your social media account (Facebook, X, etc.), we may receive certain profile information about you from the social media provider, such as your name, email address, profile picture, and friends list. We do not control how your third-party social media provider uses your information.
          </p>
        </div>

        {/* SECTION 6 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">6. Data Retention</h2>
          <p className="text-gray-800 leading-relaxed">
            We keep your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
          </p>
        </div>

        {/* SECTION 7 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">7. Information Security</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process.
          </p>
          <div className="bg-yellow-50 p-6 rounded border-l-4 border-[#d4af37]">
            <p className="text-gray-800"><span className="font-bold">Important:</span> However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise that hackers or unauthorized third parties will not be able to defeat our security measures.</p>
          </div>
        </div>

        {/* SECTION 8 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">8. Children's Privacy</h2>
          <p className="text-gray-800 leading-relaxed">
            We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the Services, you represent that you are at least 18 years old. If we learn that personal information from users less than 18 has been collected, we will deactivate the account and promptly delete such data.
          </p>
        </div>

        {/* SECTION 9 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">9. Your Privacy Rights</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-bold text-black mb-2">Withdraw Consent</p>
              <p className="text-gray-800">You have the right to withdraw your consent at any time by contacting us.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-bold text-black mb-2">Opt Out of Marketing</p>
              <p className="text-gray-800">You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in emails or contacting us.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-bold text-black mb-2">Account Management</p>
              <p className="text-gray-800">You can review, change, or terminate your account at any time. Upon termination, we may retain some information to prevent fraud or comply with legal requirements.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-l-4 border-[#2563eb]">
              <p className="font-bold text-black mb-2">Cookie Management</p>
              <p className="text-gray-800">You can set your browser to remove or reject cookies. However, this could affect certain features of our Services.</p>
            </div>
          </div>
        </div>

        {/* SECTION 10 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">10. Do-Not-Track Features</h2>
          <p className="text-gray-800 leading-relaxed">
            Most web browsers include a Do-Not-Track (DNT) feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. We do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>
        </div>

        {/* SECTION 11 */}
        <div className="mb-10 border-t-4 border-[#d4af37] pt-8">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-4">11. Updates to This Notice</h2>
          <p className="text-gray-800 leading-relaxed">
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="border-t-4 border-[#d4af37] pt-8 bg-gradient-to-r from-[#2563eb] to-[#1e40af] rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6">12. Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-1 text-[#d4af37]">RealtyBureau</p>
              <p>5th Floor, Business Bureau</p>
              <p>Panampilly Nagar, Kochi</p>
              <p>Kerala 682036, India</p>
            </div>
            <div>
              <p className="font-bold text-[#d4af37] mb-2">Email</p>
              <a href="mailto:info.realtybureau@gmail.com" className="text-[#d4af37] hover:text-white underline">
                info.realtybureau@gmail.com
              </a>
            </div>
            <div className="pt-4 border-t border-blue-400">
              <p className="font-bold text-[#d4af37] mb-2">Data Request</p>
              <p className="text-sm">To request to review, update, or delete your personal information, please fill out and submit a data subject access request to the email above.</p>
            </div>
          </div>
        </div>

        {/* SPACING */}
        <div className="h-12"></div>
      </div>
    </div>
  );
};

export default PrivacyPolicyFull;