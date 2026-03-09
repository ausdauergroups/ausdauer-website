import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Cookie, Receipt, ArrowLeft, Mail } from 'lucide-react';

const Legal = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policies = {
    privacy: {
      title: "Privacy",
      subtitle: "Policy",
      icon: <ShieldCheck size={32} />,
      lastUpdated: "29 December 2025",
      intro: "AUSDAUER Groups is committed to protecting the privacy of its users and clients. This policy explains how we collect, use, store, and protect your personal information.",
      sections: [
        { h: "01. Data Collection", p: "We may collect personal information such as your name, email, phone number, business details, and payment information when you contact us or engage our services." },
        { h: "02. Information Usage", p: "Collected data is used to manage services, communicate updates, and improve our offerings. We do not sell, rent, or trade your personal data to third parties." },
        { h: "03. Security Standards", p: "We take reasonable technical measures to safeguard your data. While we strive for absolute security, no method of electronic storage is 100% secure." },
        { h: "04. Third-Party Services", p: "We use third-party providers for hosting and analytics. These parties operate under their own privacy policies." }
      ]
    },
    terms: {
      title: "Terms",
      subtitle: "& Conditions",
      icon: <FileText size={32} />,
      lastUpdated: "29 December 2025",
      intro: "By accessing this website or engaging with our services, you agree to be bound by these Terms and Conditions governed by Indian law.",
      sections: [
        { h: "01. Service Scope", p: "All services are governed by mutually agreed proposals. Work requested beyond the agreed scope may attract extra charges." },
        { h: "02. Intellectual Property", p: "All designs, logos, and assets are the property of AUSDAUER Groups. Usage rights are granted only after full payment is received." },
        { h: "03. Client Responsibility", p: "Clients must provide accurate info and timely inputs. We are not responsible for delays caused by incomplete client materials." },
        { h: "04. Liability & Jurisdiction", p: "We are not liable for incidental damages or third-party disruptions. Disputes are subject to the jurisdiction of Indian courts." }
      ]
    },
    cookies: {
      title: "Cookie",
      subtitle: "Policy",
      icon: <Cookie size={32} />,
      lastUpdated: "29 December 2025",
      intro: "Cookies are small text files that help enhance website functionality, performance, and user experience.",
      sections: [
        { h: "01. Essential Cookies", p: "Used to enable basic website operations and security features." },
        { h: "02. Analytics & Performance", p: "These cookies help us understand visitor behavior and optimize website speed without personally identifying users." },
        { h: "03. User Control", p: "You can manage or disable cookies through your browser settings, though this may affect certain website features." }
      ]
    },
    refund: {
      title: "Refund",
      subtitle: "& Cancellation",
      icon: <Receipt size={32} />,
      lastUpdated: "29 December 2025",
      intro: "AUSDAUER Groups follows a transparent and fair refund policy for all creative and technical engagements.",
      sections: [
        { h: "01. Non-Refundable Initiation", p: "Payments are generally non-refundable once work has commenced. Advance fees cover initial planning and resource allocation." },
        { h: "02. Cancellation Terms", p: "Clients may request cancellation in writing; however, all work completed up to that date will be billed accordingly." },
        { h: "03. Exceptional Circumstances", p: "Refunds are only processed in exceptional cases at the sole discretion of AUSDAUER Groups. No refunds for delays caused by lack of client input." }
      ]
    }
  };

  const active = policies[type] || policies.privacy;

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-40 px-6 md:px-12 w-full overflow-x-hidden relative selection:bg-white selection:text-black">
      <div className="bg-grid-white absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-gray-500 hover:text-white transition-all mb-16 group outline-none"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Return to Navigation</span>
        </button>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 border-l-2 border-white/20 pl-8 md:pl-12"
        >
          <div className="text-gray-600 mb-6">{active.icon}</div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            {active.title} <br />
            <span className="text-gray-600 italic font-serif lowercase font-light">{active.subtitle}.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-400 font-light italic leading-relaxed">
            {active.intro}
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {active.sections.map((section, idx) => (
              <section key={idx} className="space-y-6">
                <h2 className="text-[11px] uppercase tracking-[0.5em] text-white font-bold flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/20"></span> {section.h}
                </h2>
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {section.p}
                </p>
              </section>
            ))}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] sticky top-32">
              <div className="mb-10">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold mb-4">Last Updated</h3>
                <p className="text-white font-mono text-sm uppercase tracking-widest">{active.lastUpdated}</p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold mb-4">Official Inquiry</h3>
                <div className="flex items-center gap-3 text-white">
                  <Mail size={16} />
                  <span className="text-sm">legal@ausdauergroups.com</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-white/5 mb-8" />
              <p className="text-[10px] text-gray-600 leading-relaxed uppercase tracking-wider font-medium">
                © 2026 Ausdauer Groups. All digital assets are protected under the intellectual property laws of India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;