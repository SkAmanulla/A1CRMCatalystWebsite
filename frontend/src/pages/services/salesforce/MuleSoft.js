import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const MuleSoft = () => {
  const serviceData = {
    title: "MuleSoft",
    subtitle: "Integration Platform for Connecting Systems",
    description: "Connect your applications, data, and devices with MuleSoft's Anypoint Platform. Build a connected enterprise with API-led connectivity and unlock the value of your digital assets.",
    icon: "🔗",
    category: "Salesforce Products",
    features: [
      {
        title: "API Management",
        description: "Design, build, and manage APIs with comprehensive lifecycle management tools.",
        icon: "🔧"
      },
      {
        title: "Data Integration",
        description: "Connect and synchronize data across cloud and on-premises systems in real-time.",
        icon: "🔄"
      },
      {
        title: "Application Networks",
        description: "Build reusable application networks that make integration assets discoverable and self-service.",
        icon: "🌐"
      },
      {
        title: "Pre-built Connectors",
        description: "Leverage hundreds of pre-built connectors for popular systems and protocols.",
        icon: "🔌"
      },
      {
        title: "Runtime Management",
        description: "Deploy, manage, and monitor integrations across hybrid and multi-cloud environments.",
        icon: "☁️"
      },
      {
        title: "Security & Governance",
        description: "Ensure enterprise-grade security and governance across all integration touchpoints.",
        icon: "🛡️"
      }
    ],
    benefits: [
      {
        title: "Faster Time to Market",
        description: "Accelerate project delivery by up to 50% with reusable integration assets."
      },
      {
        title: "Reduced Integration Costs", 
        description: "Lower total cost of ownership with platform-based approach to integration."
      },
      {
        title: "Improved Agility",
        description: "Enable business agility with self-service integration capabilities."
      },
      {
        title: "Better Data Quality",
        description: "Ensure data consistency and quality across all connected systems."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default MuleSoft;
