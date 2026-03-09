import React from 'react';
import GlowCard from '../components/ui/GlowCard';

const Solutions = () => {
  const solutions = [
    { title: "Operational Durability", desc: "Stress-testing business models against market volatility." },
    { title: "Tech Stack Longevity", desc: "Ensuring your infrastructure can scale for the next decade." },
    { title: "AI Integration", desc: "Automating redundancy to improve systemic stamina." },
    { title: "Risk Forecasting", desc: "Predictive analytics for long-horizon threats." },
  ];

  return (
    <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Solutions</h1>
      <p className="text-xl text-gray-400 max-w-2xl mb-16">Building systems that last isn't about speed; it's about resilience. Here is how we forge endurance.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((sol, index) => (
          <GlowCard key={index} delay={index * 0.1}>
            <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
            <p className="text-gray-400">{sol.desc}</p>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default Solutions;