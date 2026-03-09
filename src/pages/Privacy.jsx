import React from 'react';
import LegalTemplate from './LegalTemplate';

const Privacy = ({ onBack }) => {
  const data = {
    title: "Privacy",
    subtitle: "Policy",
    lastUpdated: "29 DEC 2025",
    sections: [
      { 
        title: "Introduction", 
        content: "AUSDAUER Groups is committed to protecting the privacy of its users and clients. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website or services." 
      },
      { 
        title: "Information Collection", 
        content: "We may collect personal information such as your name, email address, phone number, business details, payment information, and website usage data. This information is collected when you contact us, engage our services, submit forms, or interact with our website." 
      },
      { 
        title: "Usage of Information", 
        content: "The information collected is used to provide and manage our services, communicate project updates, respond to inquiries, improve our website and offerings, and comply with legal or regulatory obligations. We do not sell, rent, or trade your personal data to third parties." 
      },
      { 
        title: "Data Security", 
        content: "We take reasonable technical and organizational measures to safeguard your data and restrict access to authorized personnel only. While we strive to protect your information, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security." 
      },
      { 
        title: "Third-Party Services", 
        content: "We may use third-party service providers such as hosting platforms, analytics tools, and payment gateways to support our operations. These third parties operate under their own privacy policies, and AUSDAUER Groups is not responsible for their practices." 
      },
      { 
        title: "Your Rights & Compliance", 
        content: "You have the right to request access to, correction of, or deletion of your personal data, subject to applicable legal requirements. This Privacy Policy complies with relevant Indian data protection laws and regulations." 
      }
    ]
  };
  return <LegalTemplate {...data} onBack={onBack} />;
};
export default Privacy;