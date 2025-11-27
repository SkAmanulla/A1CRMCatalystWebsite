import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const PowerUtilities = () => {
  const challenges = [
    {
      icon: '⚡',
      title: 'Grid Modernization',
      description: 'Upgrading aging power grid infrastructure to support renewable energy and smart grid technologies.'
    },
    {
      icon: '🌱',
      title: 'Renewable Integration',
      description: 'Integrating variable renewable energy sources while maintaining grid stability and reliability.'
    },
    {
      icon: '📊',
      title: 'Demand Management',
      description: 'Managing fluctuating energy demand and implementing demand response programs.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Navigating complex energy regulations and environmental compliance requirements.'
    },
    {
      icon: '💰',
      title: 'Rate Management',
      description: 'Balancing competitive rates with infrastructure investment and operational costs.'
    },
    {
      icon: '👥',
      title: 'Customer Engagement',
      description: 'Engaging customers in energy efficiency and distributed energy resource programs.'
    }
  ];

  const solutions = [
    {
      icon: '🏠',
      title: 'Customer Energy Management',
      description: 'Comprehensive customer service and energy management platform.',
      features: [
        'Usage analytics and insights',
        'Energy efficiency programs',
        'Demand response management',
        'Distributed energy resources'
      ]
    },
    {
      icon: '🔧',
      title: 'Asset & Grid Operations',
      description: 'Integrated asset management and grid operations platform.',
      features: [
        'Predictive maintenance',
        'Outage management',
        'Work order management',
        'Grid performance monitoring'
      ]
    },
    {
      icon: '📊',
      title: 'Energy Trading & Markets',
      description: 'Energy trading, market operations, and wholesale power management.',
      features: [
        'Market price forecasting',
        'Trading portfolio management',
        'Risk management',
        'Settlement and billing'
      ]
    },
    {
      icon: '🌍',
      title: 'Environmental Compliance',
      description: 'Comprehensive environmental monitoring and compliance management.',
      features: [
        'Emissions tracking',
        'Environmental reporting',
        'Compliance workflow management',
        'Sustainability program tracking'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Smart Grid Integration',
      description: 'Support smart grid technologies including AMI, distribution automation, and IoT integration.'
    },
    {
      title: 'Renewable Energy Management',
      description: 'Comprehensive management of renewable energy projects and integration.'
    },
    {
      title: 'Customer Programs',
      description: 'Manage energy efficiency, demand response, and customer engagement programs.'
    },
    {
      title: 'Regulatory Reporting',
      description: 'Automated regulatory reporting and compliance management capabilities.'
    },
    {
      title: 'Emergency Response',
      description: 'Comprehensive emergency response and business continuity management.'
    }
  ];

  const successStories = [
    {
      metric: '30%',
      title: 'Reduction in Outage Duration',
      description: 'Advanced outage management and grid automation reduced customer outage times.',
      company: 'Regional Electric Utility'
    },
    {
      metric: '45%',
      title: 'Increase in Customer Satisfaction',
      description: 'Enhanced customer portal and communication improved satisfaction scores.',
      company: 'Municipal Electric Utility'
    },
    {
      metric: '25%',
      title: 'Improvement in Asset Performance',
      description: 'Predictive maintenance programs improved asset reliability and performance.',
      company: 'Investor-Owned Utility'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Power Utilities"
      subtitle="Electric Power Generation & Distribution"
      description="Modernize your power utility operations with comprehensive solutions for grid management, customer engagement, and renewable energy integration."
      icon="⚡"
      category="Energy & Utilities Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default PowerUtilities;
