import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formElement = e.target;
    const formData = new FormData(formElement);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // No files here, so JSON is perfect
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        alert("Transmission Successful: Your inquiry has been sent to our collective.");
        formElement.reset();
        setStatus("idle");
      } else {
        alert("Error: " + data.error);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not connect to the backend. Is your Express server running?");
      setStatus("idle");
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen bg-[#050505] overflow-x-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 border-l-2 border-white/10 pl-6 md:pl-8"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[9px] md:text-[10px] text-gray-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">
            Project Inquiries Open
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-tight">
          Contact Us<span className="text-gray-700">.</span>
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light">
          Have a vision? We have the expertise. Let’s discuss how we can <br className="hidden md:block"/>
          <span className="text-white font-medium italic font-serif">transform your business potential.</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        
        <div className="lg:col-span-4 space-y-4">
          {[
            { icon: <Mail size={20} />, label: "Email", val: "ausdauergroups@gmail.com" },
            { icon: <Phone size={20} />, label: "Call", val: "+91 98400 62410" },
            { icon: <MapPin size={20} />, label: "Office", val: "Chennai, Tamil Nadu, IN" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-3xl group transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10"
            >
              <div className="text-gray-500 group-hover:text-white transition-colors mb-4 md:mb-6">{item.icon}</div>
              <h3 className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-600 font-bold mb-1">{item.label}</h3>
              <p className="text-sm md:text-md text-gray-200 font-medium tracking-tight break-words">{item.val}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden"
        >
          {/* Note the onSubmit handler added to the form here */}
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold ml-1">Full Name</label>
                <input 
                  name="full_name"
                  required
                  type="text" 
                  placeholder="Steve Rogers"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold ml-1">Email Address</label>
                <input 
                  name="email"
                  required
                  type="email" 
                  placeholder="steve@avengers.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold ml-1">Phone Number</label>
                <input 
                  name="phone_number"
                  required
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold ml-1">Subject</label>
                <input 
                  name="subject"
                  required
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-800 text-sm md:text-base" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 font-bold ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows="4" 
                placeholder="Tell us about your project..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-white/40 focus:bg-white/[0.05] outline-none transition-all placeholder:text-gray-800 resize-none text-sm md:text-base"
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="group relative w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-gray-200 active:scale-95 shadow-xl disabled:opacity-50"
              >
                <span className="relative z-10 text-center flex items-center justify-center gap-3">
                  {status === "submitting" ? "Sending..." : "Send Message"} <Send size={14} />
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;