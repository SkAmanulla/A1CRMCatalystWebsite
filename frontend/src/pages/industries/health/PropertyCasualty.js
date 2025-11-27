import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const PropertyCasualty = () => {
  const challenges = [
    {
      icon: '🌪️',
      title: 'Climate Risk Management',
      description: 'Managing increasing climate-related risks and catastrophic events affecting coverage.'
    },
    {
      icon: '💻',
      title: 'Digital Customer Expectations',
      description: 'Meeting customer demands for instant quotes, claims processing, and digital service.'
    },
    {
      icon: '🔍',
      title: 'Fraud Detection',
      description: 'Detecting and preventing insurance fraud while processing legitimate claims efficiently.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Pricing',
      description: 'Leveraging big data and analytics for accurate risk assessment and competitive pricing.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Complexity',
      description: 'Navigating varying state regulations and compliance requirements across markets.'
    },
    {
      icon: '🤝',
      title: 'Agent Network Management',
      description: 'Supporting and empowering agent networks while expanding digital channels.'
    }
  ];

  const solutions = [
    {
      icon: '⚡',
      title: 'Instant Quote & Bind',
      description: 'Provide instant quotes and binding capabilities for competitive advantage.',
      features: [
        'Real-time rating engines',
        'Automated underwriting',
        'Digital policy issuance',
        'Payment processing integration'
      ]
    },
    {
      icon: '📱',
      title: 'Claims Mobile Experience',
      description: 'Enable customers to report and track claims through mobile-first experiences.',
      features: [
        'Mobile claim reporting',
        'Photo and video submission',
        'Real-time claim status',
        'Digital adjuster scheduling'
      ]
    },
    {
      icon: '🤖',
      title: 'AI-Powered Underwriting',
      description: 'Leverage artificial intelligence for improved risk assessment and pricing.',
      features: [
        'Predictive risk modeling',
        'Automated risk scoring',
        'Dynamic pricing algorithms',
        'Portfolio optimization'
      ]
    },
    {
      icon: '🔐',
      title: 'Fraud Prevention Platform',
      description: 'Comprehensive fraud detection and investigation management system.',
      features: [
        'Anomaly detection algorithms',
        'Social network analysis',
        'Investigation case management',
        'Special investigation unit tools'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Line Product Management',
      description: 'Support auto, home, commercial, and specialty lines of business on one platform.'
    },
    {
      title: 'Catastrophe Management',
      description: 'Comprehensive catastrophe response and claims management capabilities.'
    },
    {
      title: 'Telematics Integration',
      description: 'Integrate telematics data for usage-based insurance and risk assessment.'
    },
    {
      title: 'Reinsurance Management',
      description: 'Manage reinsurance relationships and optimize risk transfer strategies.'
    },
    {
      title: 'Digital Distribution',
      description: 'Support multiple distribution channels including direct, agent, and broker sales.'
    }
  ];

  const successStories = [
    {
      metric: '60%',
      title: 'Faster Claims Processing',
      description: 'Automated workflows and AI reduced average claim processing time significantly.',
      company: 'Regional P&C Insurer'
    },
    {
      metric: '40%',
      title: 'Increase in Digital Sales',
      description: 'Enhanced digital experience drove substantial growth in online policy sales.',
      company: 'National Auto Insurer'
    },
    {
      metric: '30%',
      title: 'Reduction in Fraud Losses',
      description: 'Advanced fraud detection algorithms significantly reduced fraudulent claims.',
      company: 'Commercial Lines Insurer'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Property & Casualty"
      subtitle="Property & Casualty Insurance"
      description="Modernize your P&C operations with comprehensive solutions for digital customer experience, claims processing, and risk management."
      icon="🏠"
      category="Health & Insurance Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default PropertyCasualty;
