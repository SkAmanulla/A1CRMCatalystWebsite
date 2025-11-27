import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const MarketingCloud = () => {
  const serviceData = {
    title: "Marketing Cloud",
    subtitle: "Digital Marketing Automation Platform",
    description: "Create personalized customer journeys and drive engagement with Salesforce Marketing Cloud. Connect with customers across every touchpoint with intelligent, data-driven marketing.",
    icon: "🎯",
    category: "Salesforce Products",
    features: [
      {
        title: "Journey Builder",
        description: "Create personalized customer journeys across email, mobile, social, and web channels.",
        icon: "🗺️"
      },
      {
        title: "Email Studio",
        description: "Design, personalize, and optimize email campaigns with drag-and-drop tools.",
        icon: "✉️"
      },
      {
        title: "Social Studio",
        description: "Manage social media presence, engage with customers, and measure social ROI.",
        icon: "📱"
      },
      {
        title: "Mobile Studio",
        description: "Deliver targeted SMS, push notifications, and in-app messaging campaigns.",
        icon: "📲"
      },
      {
        title: "Advertising Studio",
        description: "Create targeted digital advertising campaigns across Google, Facebook, and other platforms.",
        icon: "📺"
      },
      {
        title: "Einstein AI",
        description: "Leverage AI-powered insights for predictive analytics and intelligent personalization.",
        icon: "🧠"
      }
    ],
    benefits: [
      {
        title: "Increase Engagement",
        description: "Boost customer engagement rates by up to 65% with personalized messaging."
      },
      {
        title: "Improve ROI", 
        description: "Achieve better marketing ROI through data-driven insights and optimization."
      },
      {
        title: "Scale Personalization",
        description: "Deliver 1:1 personalized experiences at scale across all customer touchpoints."
      },
      {
        title: "Unified Customer View",
        description: "Connect marketing data with sales and service for a complete customer picture."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default MarketingCloud;
