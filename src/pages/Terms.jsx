import React from 'react';
import LegalTemplate from './LegalTemplate';

const Terms = ({ onBack }) => {
  const data = {
    title: "Terms",
    subtitle: "Conditions",
    lastUpdated: "29 DEC 2025",
    sections: [
      { 
        title: "Engagement & Eligibility", 
        content: "Welcome to AUSDAUER Groups. By accessing this website or engaging with our services, you agree to be bound by these Terms and Conditions. AUSDAUER Groups is a Creative & Business Development Agency based in India, offering services including web development, branding, UI/UX design, digital marketing, content creation, and technical support. These Terms apply to all visitors, users, and clients of our website and services. By using our website or services, you confirm that you are at least 18 years of age and legally capable of entering into a binding agreement under Indian law. If you do not agree with any part of these Terms, you must discontinue using our website and services immediately." 
      },
      { 
        title: "Service Scope", 
        content: "All services provided by AUSDAUER Groups are governed by mutually agreed proposals, written communications, or contracts. The scope, timelines, deliverables, and pricing of services may vary depending on the project. Any work requested beyond the agreed scope will be considered additional and may attract extra charges. AUSDAUER Groups reserves the right to modify service offerings at its discretion." 
      },
      { 
        title: "Intellectual Property", 
        content: "All intellectual property displayed on this website, including but not limited to designs, graphics, logos, text, and digital assets, is the property of AUSDAUER Groups unless otherwise stated. Clients are granted usage rights to final deliverables only after full payment has been received, unless agreed otherwise in writing. Unauthorized copying, reproduction, or distribution of any content is strictly prohibited." 
      },
      {
        title: "Payment Terms",
        content: "Payments must be made in accordance with the agreed milestones or invoice terms. Failure to make timely payments may result in suspension or termination of services. All fees are exclusive of applicable taxes unless explicitly mentioned."
      },
      {
        title: "Client Obligations",
        content: "Clients are responsible for providing accurate information, timely inputs, and necessary approvals required to complete the project. AUSDAUER Groups shall not be held responsible for delays or issues arising from incomplete, incorrect, or delayed client inputs, or from the use of illegal, infringing, or inappropriate materials supplied by the client."
      },
      { 
        title: "Liability & Disclaimer", 
        content: "AUSDAUER Groups shall not be liable for any indirect, incidental, or consequential damages, including but not limited to business losses, data loss, or reputational harm. We are also not responsible for failures or disruptions caused by third-party platforms, hosting providers, software tools, or circumstances beyond our reasonable control." 
      },
      {
        title: "Termination & Governing Law",
        content: "We reserve the right to suspend or terminate services if there is a violation of these Terms, non-payment of dues, misuse of services, or unethical or unlawful conduct. These Terms shall be governed by and interpreted in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of Indian courts. AUSDAUER Groups may update these Terms periodically, and continued use of the website implies acceptance of the revised Terms."
      }
    ]
  };
  return <LegalTemplate {...data} onBack={onBack} />;
};
export default Terms;