import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const CLM = () => {
  const serviceData = {
    title: "Contract Lifecycle Management",
    subtitle: "Streamlined Contract Management",
    description: "Simplify your contract processes with Salesforce CLM. Automate contract creation, negotiation, approval, and renewal processes to reduce risk and accelerate business.",
    icon: "📄",
    category: "Salesforce Products",
    features: [
      {
        title: "Contract Generation",
        description: "Create contracts automatically using approved templates and customer data from Salesforce.",
        icon: "⚡"
      },
      {
        title: "Approval Workflows",
        description: "Streamline contract approvals with automated routing and notification workflows.",
        icon: "✅"
      },
      {
        title: "Digital Signatures",
        description: "Enable secure electronic signatures with DocuSign and Adobe Sign integration.",
        icon: "✍️"
      },
      {
        title: "Contract Repository",
        description: "Store and organize all contracts in a centralized, searchable repository.",
        icon: "🗃️"
      },
      {
        title: "Renewal Management",
        description: "Track contract renewals and get automated alerts before expiration dates.",
        icon: "🔄"
      },
      {
        title: "Compliance Tracking",
        description: "Ensure contract compliance with automated monitoring and reporting.",
        icon: "🛡️"
      }
    ],
    benefits: [
      {
        title: "Faster Contract Cycles",
        description: "Reduce contract cycle time by up to 50% with automated workflows and templates."
      },
      {
        title: "Reduced Risk", 
        description: "Minimize legal and compliance risks with standardized contract processes."
      },
      {
        title: "Improved Visibility",
        description: "Gain complete visibility into contract status and performance metrics."
      },
      {
        title: "Cost Savings",
        description: "Lower administrative costs through automation and improved efficiency."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default CLM;
