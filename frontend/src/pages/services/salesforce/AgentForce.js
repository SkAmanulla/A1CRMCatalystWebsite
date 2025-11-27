import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const AgentForce = () => {
  const serviceData = {
    title: "Agent Force",
    subtitle: "AI-Powered Customer Service Automation",
    description: "Transform your customer service with Salesforce's AI-powered Agent Force. Deliver personalized, intelligent support that scales with your business and exceeds customer expectations.",
    icon: "🤖",
    category: "Salesforce Products",
    features: [
      {
        title: "AI-Powered Automation",
        description: "Leverage advanced AI to automate routine customer service tasks and provide instant responses.",
        icon: "🧠"
      },
      {
        title: "Omnichannel Support",
        description: "Deliver consistent customer experiences across all channels - chat, email, phone, and social media.",
        icon: "📱"
      },
      {
        title: "Smart Routing",
        description: "Intelligently route customer inquiries to the right agent or automated solution based on context.",
        icon: "🎯"
      },
      {
        title: "Real-time Analytics",
        description: "Get insights into customer interactions and agent performance with comprehensive analytics.",
        icon: "📊"
      },
      {
        title: "Self-Service Portal",
        description: "Enable customers to find answers and resolve issues independently with AI-powered self-service.",
        icon: "🔍"
      },
      {
        title: "Integration Ready",
        description: "Seamlessly integrate with existing Salesforce products and third-party systems.",
        icon: "🔗"
      }
    ],
    benefits: [
      {
        title: "Reduce Response Time",
        description: "Cut customer wait times by up to 80% with intelligent automation and routing."
      },
      {
        title: "Increase Agent Productivity", 
        description: "Free up agents to focus on complex issues while AI handles routine inquiries."
      },
      {
        title: "Improve Customer Satisfaction",
        description: "Deliver faster, more accurate responses that exceed customer expectations."
      },
      {
        title: "Scale Efficiently",
        description: "Handle increasing customer volumes without proportionally increasing staff."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default AgentForce;
