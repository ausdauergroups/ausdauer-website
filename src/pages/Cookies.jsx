import React from 'react';
import LegalTemplate from './LegalTemplate';

const Cookies = ({ onBack }) => {
  const data = {
    title: "Cookie",
    subtitle: "Policy",
    lastUpdated: "29 DEC 2025",
    sections: [
      { 
        title: "Introduction", 
        content: "This Cookie Policy explains how AUSDAUER Groups uses cookies and similar technologies on its website. Cookies are small text files stored on your device that help enhance website functionality, performance, and user experience." 
      },
      { 
        title: "Cookie Usage", 
        content: "We use essential cookies to enable basic website operations, analytics cookies to understand visitor behavior and improve our services, and performance cookies to optimize website speed and usability. These cookies do not personally identify users." 
      },
      { 
        title: "Management & Consent", 
        content: "You can manage or disable cookies through your browser settings at any time. Please note that disabling cookies may affect certain features or functionality of the website. By continuing to use our website, you consent to the use of cookies as described in this policy." 
      }
    ]
  };
  return <LegalTemplate {...data} onBack={onBack} />;
};
export default Cookies;