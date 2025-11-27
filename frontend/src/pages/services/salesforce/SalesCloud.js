import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const SalesCloud = () => {
  const serviceData = {
    title: "Sales Cloud",
    subtitle: "Complete Sales Management Platform",
    description: "Accelerate your sales with Salesforce Sales Cloud. Manage leads, opportunities, and customer relationships with powerful tools that help your team close more deals faster.",
    icon: "💼",
    category: "Salesforce Products",
    features: [
      {
        title: "Lead Management",
        description: "Capture, track, and nurture leads through every stage of the sales funnel.",
        icon: "🎯"
      },
      {
        title: "Opportunity Tracking",
        description: "Monitor deal progress and forecast revenue with advanced opportunity management.",
        icon: "📈"
      },
      {
        title: "Contact Management",
        description: "Maintain comprehensive customer profiles with interaction history and preferences.",
        icon: "👥"
      },
      {
        title: "Sales Analytics",
        description: "Get real-time insights into sales performance with customizable dashboards and reports.",
        icon: "📊"
      },
      {
        title: "Mobile Access",
        description: "Access your CRM data anywhere with native mobile apps for iOS and Android.",
        icon: "📱"
      },
      {
        title: "Email Integration",
        description: "Sync emails automatically and track customer communications within Salesforce.",
        icon: "✉️"
      }
    ],
    benefits: [
      {
        title: "Increase Sales Productivity",
        description: "Boost sales team efficiency by 41% with streamlined processes and automation."
      },
      {
        title: "Improve Win Rates", 
        description: "Close more deals with better visibility into your sales pipeline and customer insights."
      },
      {
        title: "Accelerate Sales Cycle",
        description: "Reduce the time from lead to close with automated workflows and intelligent routing."
      },
      {
        title: "Better Forecasting",
        description: "Make accurate revenue predictions with AI-powered forecasting and pipeline analysis."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default SalesCloud;
