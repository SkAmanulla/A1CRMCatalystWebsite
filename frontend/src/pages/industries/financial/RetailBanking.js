import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const RetailBanking = () => {
  const challenges = [
    {
      icon: '📱',
      title: 'Digital Banking Expectations',
      description: 'Meeting customer demands for seamless digital banking experiences across all channels.'
    },
    {
      icon: '🏦',
      title: 'Fintech Competition',
      description: 'Competing with agile fintech companies and neo-banks offering innovative services.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & Fraud',
      description: 'Protecting customer data and preventing fraud while maintaining user convenience.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Navigating complex banking regulations and maintaining compliance across jurisdictions.'
    },
    {
      icon: '📊',
      title: 'Customer Acquisition',
      description: 'Acquiring new customers and deepening relationships in a competitive market.'
    },
    {
      icon: '👥',
      title: 'Personalized Services',
      description: 'Delivering personalized financial products and advisory services at scale.'
    }
  ];

  const solutions = [
    {
      icon: '👤',
      title: 'Customer 360 Banking',
      description: 'Complete customer view across all banking products, channels, and interactions.',
      features: [
        'Unified customer profiles',
        'Product relationship mapping',
        'Interaction history tracking',
        'Cross-sell recommendations'
      ]
    },
    {
      icon: '🏦',
      title: 'Branch & Digital Integration',
      description: 'Seamless integration between branch operations and digital banking channels.',
      features: [
        'Omnichannel customer service',
        'Branch appointment scheduling',
        'Digital account opening',
        'Mobile banking integration'
      ]
    },
    {
      icon: '💳',
      title: 'Lending & Credit Management',
      description: 'Comprehensive lending platform from application through loan servicing.',
      features: [
        'Digital loan applications',
        'Automated underwriting',
        'Credit risk assessment',
        'Loan portfolio management'
      ]
    },
    {
      icon: '📊',
      title: 'Financial Analytics',
      description: 'Advanced analytics for customer insights, risk management, and business intelligence.',
      features: [
        'Customer behavior analytics',
        'Risk modeling and scoring',
        'Performance dashboards',
        'Regulatory reporting'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Account Management',
      description: 'Comprehensive management of checking, savings, and investment accounts.'
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment processing and transaction management capabilities.'
    },
    {
      title: 'Wealth Management Integration',
      description: 'Integration with wealth management services for high-net-worth customers.'
    },
    {
      title: 'Mortgage & Home Lending',
      description: 'Complete mortgage origination and servicing platform integration.'
    },
    {
      title: 'Mobile & Digital Banking',
      description: 'Native mobile banking capabilities with advanced digital features.'
    }
  ];

  const successStories = [
    {
      metric: '40%',
      title: 'Increase in Digital Adoption',
      description: 'Enhanced digital banking platform drove significant increase in mobile banking usage.',
      company: 'Regional Community Bank'
    },
    {
      metric: '25%',
      title: 'Improvement in Customer Satisfaction',
      description: 'Omnichannel experience and personalized service improved customer satisfaction scores.',
      company: 'National Retail Bank'
    },
    {
      metric: '35%',
      title: 'Growth in Loan Portfolio',
      description: 'Streamlined lending processes and digital applications accelerated loan growth.',
      company: 'Credit Union'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Retail Banking & Credit Unions"
      subtitle="Consumer Banking & Financial Services"
      description="Transform your retail banking operations with comprehensive solutions for customer experience, digital banking, and financial services delivery."
      icon="🏦"
      category="Financial Services Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default RetailBanking;
