import React from 'react';
import LegalTemplate from './LegalTemplate';

const Refund = ({ onBack }) => {
  const data = {
    title: "Refund",
    subtitle: "Cancellation",
    lastUpdated: "29 DEC 2025",
    sections: [
      { 
        title: "General Policy", 
        content: "AUSDAUER Groups follows a transparent and fair refund and cancellation policy. Payments made for project-based services are generally non-refundable once work has commenced, as resources, time, and expertise are allocated immediately upon project initiation." 
      },
      { 
        title: "Advance Payments & Cancellation", 
        content: "Advance payments or booking fees are strictly non-refundable and are used to cover initial planning, onboarding, and resource allocation. Clients may request cancellation of services by providing written notice; however, all work completed up to the date of cancellation will be billed accordingly." 
      },
      { 
        title: "Exclusions & Discretion", 
        content: "No refunds will be issued in cases where delays or project issues arise due to lack of client communication, delayed approvals, or failure to provide required inputs. Any refunds, if applicable, will be processed only in exceptional circumstances and at the sole discretion of AUSDAUER Groups." 
      },
      { 
        title: "Contact Information", 
        content: "For refund or cancellation-related queries, clients must contact AUSDAUER Groups through the official communication channels listed on the website." 
      }
    ]
  };
  return <LegalTemplate {...data} onBack={onBack} />;
};
export default Refund;