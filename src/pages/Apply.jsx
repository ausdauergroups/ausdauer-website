import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, FileText, ChevronDown, Check, X, Bell } from 'lucide-react';

const Apply = ({ onBack }) => {
  const [activeModal, setActiveModal] = useState(null); 
  const [showToast, setShowToast] = useState(false);
  
  // Renamed from formData to avoid conflicts with JS FormData
  const [customSelections, setCustomSelections] = useState({
    degree: "--Select--",
    year: "--Select--",
    domain: "--Select--",
    jobType: "Full-time"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToCareers = () => {
    onBack();
    setTimeout(() => {
      const careersSection = document.getElementById('careers');
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 50);
  };

  // The REAL Backend Connection
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formElement = e.target;
    const formData = new FormData(formElement);

    // Manually add the custom dropdown/button selections to the form payload
    formData.append("degree_type", customSelections.degree);
    formData.append("year_of_study", customSelections.year);
    formData.append("domain", customSelections.domain);
    formData.append("employment_type", customSelections.jobType);

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData, // Sending as FormData because of the PDF file
      });

      const data = await response.json();

      if (data.success) {
        // Only show toast if the backend actually saved it to Supabase
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        formElement.reset(); // Clear form after success
      } else {
        alert("Server Error: " + data.error);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not connect to the backend. Is your Express server running on port 5000?");
    }
  };

  const domains = [
    "Fullstack Developer", "Backend Developer", "Frontend Developer", 
    "UI/UX Expert", "Database Administrator", "Data Analyst", 
    "Research Analyst", "Sales & marketing", "SEO specialist", 
    "Social Media manager", "Content Writer/ Strategist", 
    "Graphic Designer", "Media Production", "HR/Public relations", 
    "Communication specialist"
  ];

  const degrees = ["Bachelor", "Arts", "PG"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Passout"];

  const CustomSelect = ({ label, value, options, type }) => (
    <div className="space-y-3 relative">
      <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">{label}</label>
      <div 
        onClick={() => setActiveModal(activeModal === type ? null : type)}
        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white flex justify-between items-center cursor-pointer hover:border-white/20 transition-all h-[54px] md:h-[58px]"
      >
        <span className={`text-sm md:text-base ${value.includes("--") ? "text-gray-700" : "text-white"}`}>{value}</span>
        <ChevronDown size={18} className={`text-gray-500 transition-transform ${activeModal === type ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {activeModal === type && (
          <>
            <div className="fixed inset-0 z-[90]" onClick={() => setActiveModal(null)} />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute z-[100] left-0 right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-[250px] overflow-y-auto custom-scrollbar"
            >
              {options.map((opt, i) => (
                <div 
                  key={i}
                  onClick={() => {
                    setCustomSelections({...customSelections, [type]: opt});
                    setActiveModal(null);
                  }}
                  className="px-6 py-4 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all flex justify-between items-center cursor-pointer border-b border-white/5 last:border-0"
                >
                  {opt} {customSelections[type] === opt && <Check size={14} className="text-white" />}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 max-w-[1200px] mx-auto min-h-screen bg-[#050505] overflow-x-hidden">
      
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 right-6 md:bottom-10 md:right-10 md:left-auto z-[1000] md:min-w-[320px]"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white flex-shrink-0">
                  <Bell size={20} className="animate-bounce" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-1">System Update</h4>
                  <p className="text-[11px] md:text-xs text-gray-500 font-light">Application transmission successful. Our collective will review your credentials.</p>
                </div>
                <button onClick={() => setShowToast(false)} className="text-gray-700 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[2px] bg-white/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={handleBackToCareers} className="flex items-center gap-3 text-gray-400 hover:text-white transition-all mb-12 md:mb-16 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold">Return to Careers</span>
      </button>

      <div className="mb-12 md:mb-20 border-l-2 border-white/20 pl-6 md:pl-8">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[1.1]">
          Application <br/> <span className="italic font-serif font-light text-gray-500">Portal</span><span className="text-gray-400">.</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed">
          Provide your professional data. We value precision and relentless innovation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8 md:gap-y-12">
        <div className="md:col-span-12">
           <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold mb-6 md:mb-8 flex items-center gap-4">
             <span className="w-6 md:w-8 h-[1px] bg-white/10"></span> Personal Details
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div className="md:col-span-1 space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Full Name</label>
                <input name="full_name" required type="text" placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Age (18+)</label>
                <input name="age" required type="number" min="18" placeholder="21" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Mail ID</label>
                <input name="email" required type="email" placeholder="email@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
              <div className="md:col-span-1 space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Phone Number</label>
                <input name="phone_number" required type="tel" placeholder="+91 00000 00000" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
           </div>
        </div>

        <div className="md:col-span-12">
           <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold mb-6 md:mb-8 flex items-center gap-4">
             <span className="w-6 md:w-8 h-[1px] bg-white/10"></span> Academic Details
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div className="md:col-span-2 space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">College Name</label>
                <input name="college_name" required type="text" placeholder="University Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
              
              <CustomSelect label="Year of Study" value={customSelections.year} options={years} type="year" />
              
              <div className="space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Passout Year</label>
                <input name="passout_year" type="number" placeholder="2024" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>

              <CustomSelect label="Degree Type" value={customSelections.degree} options={degrees} type="degree" />

              <div className="md:col-span-2 space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Field of Degree</label>
                <input name="field_of_degree" required type="text" placeholder="e.g. B.E Computer Science" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" />
              </div>
           </div>
        </div>

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4 space-y-3">
            <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Employment Type</label>
            <div className="flex bg-white/[0.03] border border-white/10 rounded-2xl p-1">
              {["Full-time", "Internship"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCustomSelections({...customSelections, jobType: type})}
                  className={`flex-1 py-3 rounded-xl text-[9px] md:text-[10px] uppercase tracking-widest font-bold transition-all ${customSelections.jobType === type ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <CustomSelect label="Choose Domain" value={customSelections.domain} options={domains} type="domain" />
          </div>
        </div>

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           <div className="space-y-3">
            <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Portfolio / LinkedIn Link</label>
            <input name="portfolio_link" required type="url" placeholder="https://..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 md:px-6 py-4 text-white focus:border-white outline-none transition-all h-[54px] md:h-[58px] placeholder:text-gray-700 text-sm md:text-base" />
          </div>
          <div className="space-y-3">
            <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold ml-1">Attach Resume</label>
            <div className="relative group border-2 border-dashed border-white/10 rounded-2xl px-6 flex items-center justify-between bg-white/[0.02] hover:border-white/20 transition-all cursor-pointer h-[54px] md:h-[58px]">
              <div className="flex items-center gap-4">
                <FileText size={18} className="text-gray-500" />
                <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Attach PDF Resume</span>
              </div>
              <input name="resume" required type="file" accept=".pdf" className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="md:col-span-12 flex justify-center pt-8 md:pt-16">
          <button type="submit" className="group relative w-full md:w-auto px-16 md:px-24 py-5 md:py-6 bg-white text-black rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10 flex items-center justify-center gap-4">
              Submit Application <Send size={14} />
            </span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;