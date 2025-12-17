import React from 'react'
import { motion } from "framer-motion";

export const HomeSection = () => {
 const services = [
    {
      title: "Verified Land Sourcing",
      desc: "We shortlist only the finest plots across Kochi and Kerala — vetted for location quality, road access, development potential, and future value.",
    },
    {
      title: "End-to-End Land Advisory",
      desc: "From identifying the ideal plot to documentation, valuation, negotiation, measurements, and registration — we guide you with total transparency.",
    },
    {
      title: "Legal & Documentation Support",
      desc: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Title deed verification</li>
          <li>Tax receipts & encumbrance certificate</li>
          <li>Boundary clarification</li>
          <li>Conversion & zoning checks</li>
          <li>Risk assessment for future development</li>
        </ul>
      ),
    },
    {
      title: "Investor-Focused Research & Insights",
      desc: "We offer market projections, appreciation potential, and neighbourhood growth insights so you can invest with confidence.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2b55a2ee] mb-4">
          What We Do
        </h2>
        <p className="text-gray-600 text-lg">
          A complete land-buying ecosystem, designed to protect your investment.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              group bg-[#2b55a2ee] border border-[#2b55a2ee] p-8 rounded-2xl
              shadow-sm hover:shadow-xl transition-all duration-300
              hover:bg-white hover:border-[#2b55a2ee]
            "
          >
            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#2b55a2ee]">
              {item.title}
            </h3>
            <div className="text-gray-300 leading-relaxed text-[15.5px] group-hover:text-[#2b55a2ee]">
              {item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}