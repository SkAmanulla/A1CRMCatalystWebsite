import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const ServiceCloud = () => {
  const serviceData = {
    title: "Service Cloud",
    subtitle: "Customer Service & Support Solutions",
    description: "Deliver exceptional customer service with Salesforce Service Cloud. Provide personalized support across every channel and turn service into a competitive advantage.",
    icon: "🛠️",
    category: "Salesforce Products",
    features: [
      {
        title: "Case Management",
        description: "Track, prioritize, and resolve customer issues efficiently with comprehensive case management.",
        icon: "📋"
      },
      {
        title: "Knowledge Base",
        description: "Create and maintain a searchable knowledge base for agents and customers.",
        icon: "📚"
      },
      {
        title: "Omnichannel Routing",
        description: "Route customer inquiries to the right agent across phone, email, chat, and social media.",
        icon: "🔄"
      },
      {
        title: "Field Service",
        description: "Manage field service operations with scheduling, dispatching, and mobile workforce tools.",
        icon: "🚚"
      },
      {
        title: "Live Chat",
        description: "Provide real-time support with embedded chat widgets and intelligent bot integration.",
        icon: "💬"
      },
      {
        title: "Service Analytics",
        description: "Monitor service performance and customer satisfaction with detailed analytics and reporting.",
        icon: "📊"
      }
    ],
    benefits: [
      {
        title: "Faster Case Resolution",
        description: "Resolve customer issues 38% faster with intelligent case routing and automation."
      },
      {
        title: "Higher Customer Satisfaction", 
        description: "Increase CSAT scores with personalized service and omnichannel support."
      },
      {
        title: "Improved Agent Efficiency",
        description: "Boost agent productivity with unified workspace and knowledge management tools."
      },
      {
        title: "Reduced Support Costs",
        description: "Lower operational costs through self-service options and automated workflows."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default ServiceCloud;
