import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const DevOpsCenter = () => {
  const serviceData = {
    title: "DevOps Center",
    subtitle: "Native Salesforce DevOps Tools",
    description: "Leverage Salesforce's native DevOps Center for seamless development lifecycle management. Built specifically for Salesforce, it provides integrated tools for modern development practices.",
    icon: "🏢",
    category: "DevOps",
    features: [
      {
        title: "Native Integration",
        description: "Fully integrated with Salesforce platform for seamless development workflows.",
        icon: "⚡"
      },
      {
        title: "Change Management",
        description: "Track and manage changes across your Salesforce development lifecycle.",
        icon: "📝"
      },
      {
        title: "Branch Management",
        description: "Create and manage development branches with built-in version control.",
        icon: "🌿"
      },
      {
        title: "Work Item Tracking",
        description: "Link development work to business requirements and user stories.",
        icon: "📋"
      },
      {
        title: "Automated Sync",
        description: "Automatically sync changes between development environments and version control.",
        icon: "🔄"
      },
      {
        title: "Release Pipeline",
        description: "Manage release pipelines with visual workflow and approval processes.",
        icon: "🚀"
      }
    ],
    benefits: [
      {
        title: "Simplified Workflow",
        description: "Streamline development with native Salesforce tools and familiar interfaces."
      },
      {
        title: "Better Traceability", 
        description: "Maintain complete traceability from business requirements to deployed features."
      },
      {
        title: "Reduced Complexity",
        description: "Minimize tool complexity with an all-in-one native solution."
      },
      {
        title: "Improved Governance",
        description: "Enhance governance with built-in approval processes and audit trails."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default DevOpsCenter;
