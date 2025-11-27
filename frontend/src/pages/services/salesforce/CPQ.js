import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const CPQ = () => {
  const serviceData = {
    title: "CPQ (Configure, Price, Quote)",
    subtitle: "Intelligent Quote Management",
    description: "Accelerate your sales cycle with Salesforce CPQ. Create accurate quotes faster, ensure pricing consistency, and close deals with confidence using intelligent configure-price-quote capabilities.",
    icon: "💰",
    category: "Salesforce Products",
    features: [
      {
        title: "Product Configuration",
        description: "Guide sales reps through complex product configurations with intelligent rules and recommendations.",
        icon: "⚙️"
      },
      {
        title: "Dynamic Pricing",
        description: "Apply pricing rules, discounts, and promotions automatically based on predefined criteria.",
        icon: "💲"
      },
      {
        title: "Quote Generation",
        description: "Generate professional, branded quotes and proposals with customizable templates.",
        icon: "📋"
      },
      {
        title: "Approval Workflows",
        description: "Route quotes through approval processes based on discount levels and business rules.",
        icon: "✅"
      },
      {
        title: "Contract Integration",
        description: "Seamlessly convert approved quotes into contracts and orders.",
        icon: "📄"
      },
      {
        title: "Revenue Recognition",
        description: "Ensure accurate revenue recognition with subscription and usage-based billing models.",
        icon: "📊"
      }
    ],
    benefits: [
      {
        title: "Faster Quote Turnaround",
        description: "Reduce quote generation time by up to 75% with automated configuration and pricing."
      },
      {
        title: "Improved Quote Accuracy", 
        description: "Eliminate pricing errors and ensure consistent quoting across all sales channels."
      },
      {
        title: "Higher Win Rates",
        description: "Increase deal closure rates with professional quotes and faster response times."
      },
      {
        title: "Better Margin Control",
        description: "Maintain healthy margins with intelligent pricing rules and approval workflows."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default CPQ;
