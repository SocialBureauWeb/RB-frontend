import React, { useState } from 'react'

const reasons = [
  {
    title: 'We protect your money with thorough verification',
    short: 'Physical checks, legal verification and value assessment for every plot.',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "We know Kochi’s land market inside out",
    short: 'Data-driven neighborhood trends and upcoming government projects.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6M12 3v4" />
      </svg>
    ),
  },
  {
    title: 'Transparent process with zero hidden fees',
    short: 'Clear pricing, documentation, risks, and future potential — up front.',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v4c0 1.105 1.343 2 3 2s3-.895 3-2v-4c0-1.105-1.343-2-3-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2" />
      </svg>
    ),
  },
  {
    title: 'Ideal for NRIs, first-time buyers, and seasoned investors',
    short: 'Personalized help whether buying a single plot or building a portfolio.',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H4v-2a3 3 0 013-3h2" />
        <circle cx="12" cy="7" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Strong ethical foundation',
    short: 'We present only plots we would buy ourselves.',
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-3.314-2.686-6-6-6S0 7.686 0 11s2.686 6 6 6 6-2.686 6-6z" />
      </svg>
    ),
  },
]

export default function WhyRealtyBureau() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="max-w-6xl mx-auto my-12 px-4 sm:px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Why RealtyBureau?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Buying land should never feel risky, confusing, or overwhelming. Here’s how we make it simple and safe.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-[1.02] focus-within:scale-[1.02]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full text-left p-5 flex items-start gap-4"
              >
                <div className="flex-none mt-1">{r.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{r.title}</h3>
                    <span className="ml-3 text-sm text-gray-500">{isOpen ? '−' : '+'}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{r.short}</p>
                </div>
              </button>

              <div className={`px-5 pb-4 transition-[max-height,opacity] duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}> 
                <div className="text-sm text-gray-700">
                  {i === 0 && (
                    <p>Each listing undergoes a site visit, title verification, and market valuation. We hold funds in escrow-ready processes until documents are clear.</p>
                  )}
                  {i === 1 && (
                    <p>We use local data on recent sales, micro-neighborhood trends and upcoming infrastructure so advice is grounded in facts.</p>
                  )}
                  {i === 2 && (
                    <p>All costs and potential risks are disclosed upfront — no surprise charges during or after purchase.</p>
                  )}
                  {i === 3 && (
                    <p>We guide NRIs through documentation, first-time buyers through process steps, and investors with portfolio-level insights.</p>
                  )}
                  {i === 4 && (
                    <p>We will only list plots we’d confidently buy ourselves — a simple but strong ethical filter.</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
