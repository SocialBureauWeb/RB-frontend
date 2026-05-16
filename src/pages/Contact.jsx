// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const Contact = () => {
//     const contactInfo = [
//         {
//             title: 'Email Us',
//             value: 'info@realtybureau.com',
//             icon: (
//                 <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//             ),
//             link: 'mailto:info@realtybureau.com'
//         },
//         {
//             title: 'Call Us',
//             value: '+91 98765 43210',
//             icon: (
//                 <svg className="w-10 h-10 text-[#2b54a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//             ),
//             link: 'tel:+919876543210'
//         },
//         {
//             title: 'Visit Us',
//             value: 'Kochi, Kerala, India',
//             icon: (
//                 <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//             ),
//             link: '#'
//         }
//     ]

//     const officeHours = [
//         { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
//         { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
//         { day: 'Sunday', time: 'By Appointment Only' }
//     ]

//     const servicesContact = [
//         'Residential Property Inquiry',
//         'Commercial Leasing',
//         'Investment Advisory',
//         'Property Valuation',
//         'Legal & Documentation Support',
//         'International Real Estate'
//     ]

//     return (
//         <div className="min-h-screen bg-white font-sans text-slate-800">
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f8faff]">
//                 <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#2b54a2]/5 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#d4a73b]/5 rounded-full blur-3xl"></div>

//                 <div className="max-w-7xl mx-auto px-6 relative z-10">
//                     <div className="grid lg:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2b54a2]/10 shadow-sm mb-6 animate-fadeIn">
//                                 <span className="w-2 h-2 rounded-full bg-[#d4a73b]"></span>
//                                 <span className="text-sm font-semibold tracking-wide text-[#2b54a2] uppercase">Get In Touch</span>
//                             </div>
//                             <h1 className="text-5xl md:text-7xl font-black text-[#2b54a2] mb-8 leading-[1.05]">
//                                 Let's Start <br />
//                                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b54a2] to-[#d4a73b]">A Conversation</span>
//                             </h1>
//                             <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
//                                 Whether you're buying, selling, leasing, or exploring investment opportunities, our team is ready to guide you. Reach out for personalized real estate solutions.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 <button className="px-8 py-4 bg-[#2b54a2] text-white rounded-2xl font-bold transition-all hover:bg-[#234381] hover:shadow-xl hover:shadow-[#2b54a2]/20">
//                                     Schedule a Call
//                                 </button>
//                                 <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4">
//                                     <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#d4a73b] font-bold">24/7</div>
//                                     <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Quick Response</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <div className="aspect-square rounded-[3rem] overflow-hidden border-[16px] border-white shadow-2xl">
//                                 <img
//                                     src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
//                                     alt="Contact Us"
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                             <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 max-w-[280px]">
//                                 <p className="text-slate-500 italic text-lg leading-relaxed">
//                                     "Your real estate journey begins with a simple conversation."
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Info & Form */}
//             <section className="py-24 px-6 bg-white overflow-hidden">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="grid lg:grid-cols-2 gap-20 items-start">
//                         {/* Contact Form */}
//                         <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl">
//                             <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Send Us a Message</h2>
//                             <h3 className="text-4xl font-black text-[#2b54a2] mb-10 leading-tight">Get in Touch</h3>

//                             <form className="space-y-8">
//                                 <div className="grid md:grid-cols-2 gap-8">
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">First Name *</label>
//                                         <input
//                                             type="text"
//                                             required
//                                             className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
//                                             placeholder="John"
//                                         />
//                                     </div>
//                                     <div className="space-y-2">
//                                         <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Last Name *</label>
//                                         <input
//                                             type="text"
//                                             required
//                                             className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
//                                             placeholder="Doe"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="space-y-2">
//                                     <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address *</label>
//                                     <input
//                                         type="email"
//                                         required
//                                         className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
//                                         placeholder="john@example.com"
//                                     />
//                                 </div>

//                                 <div className="space-y-2">
//                                     <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Phone Number</label>
//                                     <input
//                                         type="tel"
//                                         className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
//                                         placeholder="+91 98765 43210"
//                                     />
//                                 </div>

//                                 <div className="space-y-2">
//                                     <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Service Interest</label>
//                                     <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all">
//                                         <option value="">Select a service</option>
//                                         <option value="residential">Residential Property Sales</option>
//                                         <option value="commercial">Commercial Leasing</option>
//                                         <option value="investment">Investment Advisory</option>
//                                         <option value="international">International Real Estate</option>
//                                         <option value="other">Other Inquiry</option>
//                                     </select>
//                                 </div>

//                                 <div className="space-y-2">
//                                     <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Message *</label>
//                                     <textarea
//                                         rows={6}
//                                         required
//                                         className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all resize-none"
//                                         placeholder="Tell us about your real estate needs..."
//                                     ></textarea>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="w-full px-8 py-5 bg-gradient-to-r from-[#2b54a2] to-[#d4a73b] text-white rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#2b54a2]/20 hover:scale-[1.02]"
//                                 >
//                                     Send Message
//                                 </button>
//                             </form>
//                         </div>

//                         {/* Contact Info & Details */}
//                         <div className="space-y-16">
//                             {/* Contact Methods */}
//                             <div>
//                                 <h3 className="text-4xl font-black text-[#2b54a2] mb-10 leading-tight">Contact Information</h3>
//                                 <div className="space-y-8">
//                                     {contactInfo.map((info, idx) => (
//                                         <a
//                                             key={idx}
//                                             href={info.link}
//                                             className="flex items-start gap-6 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border hover:border-slate-100 transition-all group"
//                                         >
//                                             <div className="flex-none w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
//                                                 {info.icon}
//                                             </div>
//                                             <div>
//                                                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{info.title}</p>
//                                                 <p className="text-xl font-bold text-[#2b54a2] group-hover:text-[#d4a73b] transition-colors">{info.value}</p>
//                                             </div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Office Hours */}
//                             <div className="bg-[#f8faff] rounded-[2.5rem] p-10 border border-slate-100">
//                                 <h4 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Office Hours</h4>
//                                 <div className="space-y-6">
//                                     {officeHours.map((hour, idx) => (
//                                         <div key={idx} className="flex justify-between items-center pb-6 border-b border-slate-100 last:border-0 last:pb-0">
//                                             <span className="font-bold text-slate-700">{hour.day}</span>
//                                             <span className="font-bold text-[#2b54a2]">{hour.time}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services We Can Help With */}
//             <section className="py-24 px-6 bg-[#fafbfc]">
//                 <div className="max-w-7xl mx-auto">
//                     <div className="text-center mb-20">
//                         <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-4">How We Can Help</h2>
//                         <h3 className="text-4xl lg:text-5xl font-black text-[#2b54a2]">Services You Can Inquire About</h3>
//                     </div>

//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {servicesContact.map((service, idx) => (
//                             <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#2b54a2]/20 hover:shadow-xl transition-all duration-500">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-12 h-12 rounded-xl bg-[#2b54a2]/5 flex items-center justify-center group-hover:bg-[#d4a73b]/10 transition-all">
//                                         <svg className="w-6 h-6 text-[#2b54a2] group-hover:text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-lg font-bold text-[#2b54a2] group-hover:text-[#d4a73b] transition-colors">{service}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-24 px-6 bg-gradient-to-br from-[#2b54a2] to-[#1a3a7a] text-white text-center overflow-hidden">
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a73b]/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>

//                 <div className="max-w-4xl mx-auto relative z-10">
//                     <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Ready to Begin?</h2>
//                     <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
//                         Let's Find Your Perfect <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">Real Estate Solution</span>
//                     </h3>
//                     <p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto">
//                         Connect with our expert advisors today for a personalized consultation and discover how we can help you achieve your real estate goals.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6">
//                         <button className="px-10 py-5 bg-white text-[#2b54a2] rounded-2xl font-bold text-lg transition-all hover:bg-amber-50 hover:shadow-2xl">
//                             Book a Consultation
//                         </button>
//                         <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg transition-all hover:bg-white/10">
//                             Download Brochure
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             <Footer />

//             <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1s ease-out forwards;
//         }
//       `}</style>
//         </div>
//     )
// }

// export default Contact


import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const contactInfo = [
        {
            title: 'Email Us',
            value: 'info@realtybureau.com',
            icon: (
                <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: 'mailto:info@realtybureau.com'
        },
        {
            title: 'Call Us',
            value: '+91 98765 43210',
            icon: (
                <svg className="w-10 h-10 text-[#2b54a2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            link: 'tel:+919876543210'
        },
        {
            title: 'WhatsApp Us',
            value: '+91 98765 43210',
            icon: (
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            link: 'https://wa.me/919876543210'
        },
        {
            title: 'Visit Us',
            value: 'Pillar no :965, chakkalakkal metro, near petta metro station, Upasana Nagar, Maradu, Kochi, Ernakulam, Kerala 682038',
            icon: (
                <svg className="w-10 h-10 text-[#d4a73b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            link: '#'
        }
    ]

    const officeHours = [
        { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', time: 'By Appointment Only' }
    ]

    const servicesContact = [
        'Residential Property Inquiry',
        'Commercial Leasing',
        'Investment Advisory',
        'Property Valuation',
        'Legal & Documentation Support',
        'International Real Estate'
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields')
            return
        }

        setIsSubmitting(true)

        // Create WhatsApp message
        const message = ` Contact Form Submission - Realty Bureau\n\n` +
            ` Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Service: ${formData.service || 'General Inquiry'}\n\n` +
            `Message:\n${formData.message}\n\n` +
            `Submitted on: ${new Date().toLocaleDateString()}`

        const encodedMessage = encodeURIComponent(message)

        // Open WhatsApp with pre-filled message
        window.open(
            `https://wa.me/919876543210?text=${encodedMessage}`,
            "_blank"
        )

        // Reset form and show success
        setTimeout(() => {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            })
            setSubmitStatus('success')
            setIsSubmitting(false)

            // Auto-hide success message after 5 seconds
            setTimeout(() => setSubmitStatus(''), 5000)
        }, 1000)
    }

    const quickWhatsAppMessage = () => {
        const quickMessage = encodeURIComponent("Hi! I'd like to get in touch with Realty Bureau for a real estate consultation.")
        window.open(`https://wa.me/919876543210?text=${quickMessage}`, "_blank")
    }

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
                                <span className="text-sm font-semibold tracking-wide text-[#2b54a2] uppercase">Get In Touch</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-[#2b54a2] mb-8 leading-[1.05]">
                                Let's Start <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b54a2] to-[#d4a73b]">A Conversation</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                Whether you're buying, selling, leasing, or exploring investment opportunities, our team is ready to guide you. Reach out for personalized real estate solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-[#2b54a2] text-white rounded-2xl font-bold transition-all hover:bg-[#234381] hover:shadow-xl hover:shadow-[#2b54a2]/20">
                                    Schedule a Call
                                </button>
                                <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#d4a73b] font-bold">24/7</div>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Quick Response</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden border-[16px] border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                                    alt="Contact Us"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 max-w-[280px]">
                                <p className="text-slate-500 italic text-lg leading-relaxed">
                                    "Your real estate journey begins with a simple conversation."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Contact Form */}
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl">
                            <h2 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Send Us a Message</h2>
                            <h3 className="text-4xl font-black text-[#2b54a2] mb-10 leading-tight">Get in Touch</h3>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                                    Message sent! We've opened WhatsApp for you to send the message.
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Service Interest</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Property Sales</option>
                                        <option value="commercial">Commercial Leasing</option>
                                        <option value="investment">Investment Advisory</option>
                                        <option value="international">International Real Estate</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-widest">Message *</label>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:border-[#2b54a2] focus:ring-2 focus:ring-[#2b54a2]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us about your real estate needs..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-5 bg-gradient-to-r from-[#2b54a2] to-[#d4a73b] text-white rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#2b54a2]/20 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send via WhatsApp
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <div className="text-center pt-4">
                                    <button
                                        type="button"
                                        onClick={quickWhatsAppMessage}
                                        className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center justify-center gap-2 mx-auto"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                                        </svg>
                                        Quick WhatsApp Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info & Details */}
                        <div className="space-y-16">
                            {/* Contact Methods */}
                            <div>
                                <h3 className="text-4xl font-black text-[#2b54a2] mb-10 leading-tight">Contact Information</h3>
                                <div className="space-y-8">
                                    {contactInfo.map((info, idx) => (
                                        <a
                                            key={idx}
                                            href={info.link}
                                            target={info.link.includes('http') ? "_blank" : "_self"}
                                            rel={info.link.includes('http') ? "noopener noreferrer" : ""}
                                            className="flex items-start gap-6 p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border hover:border-slate-100 transition-all group"
                                        >
                                            <div className="flex-none w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{info.title}</p>
                                                <p className="text-xl font-bold text-[#2b54a2] group-hover:text-[#d4a73b] transition-colors">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-[#f8faff] rounded-[2.5rem] p-10 border border-slate-100">
                                <h4 className="text-[#d4a73b] font-black uppercase tracking-[0.3em] text-sm mb-6">Office Hours</h4>
                                <div className="space-y-6">
                                    {officeHours.map((hour, idx) => (
                                        <div key={idx} className="flex justify-between items-center pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                                            <span className="font-bold text-slate-700">{hour.day}</span>
                                            <span className="font-bold text-[#2b54a2]">{hour.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services We Can Help With */}
            <section className="py-24 px-6 bg-[#fafbfc]">
                {/* ... (services section remains the same) ... */}
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-[#2b54a2] to-[#1a3a7a] text-white text-center overflow-hidden">
                {/* ... (CTA section remains the same) ... */}
            </section>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
                    title="Chat with us on WhatsApp"
                >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.826 9.826 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                    </svg>
                </a>
            </div>

            <Footer />
        </div>
    )
}

export default Contact