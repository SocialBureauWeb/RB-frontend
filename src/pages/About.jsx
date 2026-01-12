import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    const services = [
        {
            title: 'Residential and commercial property sales',
            icon: (
                <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            title: 'Leasing and rental advisory',
            icon: (
                <svg className="w-10 h-10 text-[#2b54a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Investment-focused property advisory',
            icon: (
                <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2v4c0 1.105 1.343 2 3 2s3-.895 3-2v-4c0-1.105-1.343-2-3-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v2m0 14v2m9-9h-2M5 12H3" />
                </svg>
            ),
        },
        {
            title: 'International real estate opportunities',
            icon: (
                <svg className="w-10 h-10 text-[#2b54a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9" />
                </svg>
            ),
        },
        {
            title: 'Market research and property due diligence',
            icon: (
                <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            title: 'End-to-end transaction and documentation support',
            icon: (
                <svg className="w-10 h-10 text-[#2b54a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                </svg>
            ),
        }
    ]

    const approachSteps = [
        {
            title: 'Understanding Objectives',
            text: 'We begin by understanding each client’s objective, budget, and timeline.'
        },
        {
            title: 'Curation',
            text: 'Based on this, we curate verified property options and provide honest, data-backed advice.'
        },
        {
            title: 'Guidance',
            text: 'Our role is to guide decisions, highlight risks and opportunities, and ensure a smooth, professional experience from start to closure.'
        }
    ]

    const whyReasons = [
        'Transparent and ethical practices',
        'Verified listings and structured advisory',
        'Personalized solutions, not push sales',
        'Global perspective with local market understanding',
        'Focus on long-term value creation'
    ]

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f8faff]">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#2b54a2]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#d4a73b]/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2b54a2]/10 shadow-sm mb-6 animate-fadeIn">
                                <span className="w-2 h-2 rounded-full bg-[#d4a73b]"></span>
                                <span className="text-sm font-semibold tracking-wide text-[#2b54a2] uppercase">About RealtyBureau</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-[#2b54a2] mb-8 leading-[1.05]">
                                Real Estate <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b54a2] to-[#d4a73b]">Without Boundaries</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                RealtyBureau is a professional real estate advisory and brokerage firm offering end-to-end property services across residential, commercial, and investment segments. We work with individuals, investors, and businesses to help them make clear, confident, and well-informed real estate decisions—locally and internationally.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-[#2b54a2] text-white rounded-2xl font-bold transition-all hover:bg-[#234381] hover:shadow-xl hover:shadow-[#2b54a2]/20">
                                    Our Services
                                </button>
                                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#d4a73b] font-bold">Kochi</div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Outlook</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden border-[16px] border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                    alt="Modern Architecture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 max-w-[280px]">
                                <p className="text-slate-500 italic text-lg leading-relaxed">
                                    "Reliable real estate solutions with market intelligence and transparent processes."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-12">
                                    <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Property" />
                                    </div>
                                    <div className="h-40 rounded-3xl bg-[#2b54a2] p-6 flex flex-col justify-between text-white">
                                        <div className="w-8 h-8 rounded-lg bg-white/20"></div>
                                        <p className="font-bold text-xl leading-tight">Clarity & Credibility</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-40 rounded-3xl bg-[#d4a73b] p-6 flex flex-col justify-between text-white">
                                        <p className="font-bold text-xl leading-tight">Research Driven</p>
                                        <div className="w-8 h-8 rounded-lg bg-white/20 mt-auto"></div>
                                    </div>
                                    <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Consultation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Who We Are</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-[#2b54a2] mb-8 leading-tight">Powered by Research, <br />Ethics & Integrity.</h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    We are a team of real estate professionals driven by research, ethics, and client-first advisory. In an industry often influenced by speculation, RealtyBureau stands for clarity and credibility.
                                </p>
                                <p>
                                    Every property we recommend is evaluated for market relevance, legal clarity, and future potential. Our focus is not just on transactions, but on long-term value, trust, and strategic guidance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 px-6 bg-[#fafbfc]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-4">What We Do</h2>
                        <h3 className="text-4xl lg:text-5xl font-black text-[#2b54a2]">The Complete Real Estate Journey</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#d4a73b]/20 hover:shadow-2xl transition-all duration-500">
                                <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
                                    {s.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#2b54a2] leading-tight mb-4 group-hover:text-[#d4a73b] transition-colors">{s.title}</h4>
                                <div className="w-10 h-1 bg-slate-100 group-hover:w-full group-hover:bg-[#d4a73b]/20 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Our Approach</h2>
                            <h3 className="text-4xl lg:text-5xl font-black text-[#2b54a2] mb-10 leading-tight">Personalized, Honest & <br />Data-Backed Advice.</h3>
                            <div className="space-y-12">
                                {approachSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="flex-none flex flex-col items-center">
                                            <div className="w-4 h-4 rounded-full border-2 border-[#d4a73b] group-hover:bg-[#d4a73b] transition-colors"></div>
                                            {idx !== approachSteps.length - 1 && <div className="w-px flex-1 bg-slate-100 my-2"></div>}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#2b54a2] mb-3">{step.title}</h4>
                                            <p className="text-slate-600 text-lg leading-relaxed">{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#2b54a2] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Why RealtyBureau</h3>
                            <ul className="space-y-8 relative z-10">
                                {whyReasons.map((reason, idx) => (
                                    <li key={idx} className="flex items-start gap-4 group">
                                        <div className="flex-none w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1 group-hover:bg-[#d4a73b] transition-all">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-xl font-medium text-blue-50 leading-tight">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="py-24 px-6 bg-[#fafbfc] text-center border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-10">Our Commitment</h2>
                    <div className="relative">
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[12rem] font-black text-slate-100/50 select-none pointer-events-none z-0">Integrity</span>
                        <p className="text-3xl md:text-4xl font-black text-[#2b54a2] relative z-10 leading-tight mb-8">
                            At RealtyBureau, we believe real estate decisions should be strategic and stress-free. We are committed to protecting client interests, maintaining professional integrity, and delivering value at every stage of the process.
                        </p>
                    </div>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Whether you are buying a home, leasing a commercial space, or exploring international property investments, RealtyBureau is your trusted real estate partner.
                    </p>
                    <div className="inline-block px-10 py-5 bg-white border-2 border-[#2b54a2] rounded-2xl shadow-xl">
                        <p className="text-2xl font-black text-[#2b54a2] tracking-tighter uppercase mb-1">RealtyBureau</p>
                        <p className="text-[#d4a73b] font-bold text-xs uppercase tracking-[0.3em]">Real Estate Without Boundaries</p>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
        </div>
    )
}

export default About
