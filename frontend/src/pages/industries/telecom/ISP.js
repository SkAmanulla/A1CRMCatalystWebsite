import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const ISP = () => {
  const challenges = [
    {
      icon: '🌐',
      title: 'Bandwidth Demand Growth',
      description: 'Meeting exponential growth in bandwidth demand driven by streaming and remote work.'
    },
    {
      icon: '🏠',
      title: 'Last Mile Connectivity',
      description: 'Extending broadband access to rural and underserved communities cost-effectively.'
    },
    {
      icon: '💻',
      title: 'Network Infrastructure',
      description: 'Upgrading aging network infrastructure while maintaining service quality.'
    },
    {
      icon: '🎯',
      title: 'Service Differentiation',
      description: 'Differentiating services in commoditized broadband markets.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Navigating net neutrality, privacy, and telecommunications regulations.'
    },
    {
      icon: '🔧',
      title: 'Service Delivery',
      description: 'Optimizing field service operations and reducing truck rolls.'
    }
  ];

  const solutions = [
    {
      icon: '🏠',
      title: 'Customer Premises Management',
      description: 'Comprehensive management of customer installations and service delivery.',
      features: [
        'Installation scheduling',
        'Equipment inventory tracking',
        'Service activation workflows',
        'Technician dispatch optimization'
      ]
    },
    {
      icon: '📊',
      title: 'Network Operations Center',
      description: 'Centralized network monitoring and incident management platform.',
      features: [
        'Real-time network monitoring',
        'Proactive fault detection',
        'Service impact analysis',
        'Automated escalation workflows'
      ]
    },
    {
      icon: '💳',
      title: 'Customer Billing & Care',
      description: 'Integrated billing and customer care solutions for residential and business customers.',
      features: [
        'Usage-based billing',
        'Multi-service bundling',
        'Self-service portals',
        'Omnichannel support'
      ]
    },
    {
      icon: '🚀',
      title: 'Fiber & Broadband Expansion',
      description: 'Project management and customer acquisition for network expansion initiatives.',
      features: [
        'Construction project tracking',
        'Community outreach programs',
        'Pre-registration campaigns',
        'Service availability mapping'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Service Assurance',
      description: 'End-to-end service assurance from network performance to customer experience.'
    },
    {
      title: 'Wholesale & Partner Management',
      description: 'Manage wholesale services and partnerships with other service providers.'
    },
    {
      title: 'Residential & Business Services',
      description: 'Support both residential and business customer segments with tailored solutions.'
    },
    {
      title: 'Infrastructure Asset Management',
      description: 'Comprehensive management of network infrastructure and physical assets.'
    },
    {
      title: 'Regulatory Reporting',
      description: 'Automated regulatory reporting and compliance management capabilities.'
    }
  ];

  const successStories = [
    {
      metric: '35%',
      title: 'Reduction in Truck Rolls',
      description: 'Remote diagnostics and proactive monitoring reduced field service visits.',
      company: 'Regional Internet Provider'
    },
    {
      metric: '50%',
      title: 'Faster Service Installation',
      description: 'Optimized scheduling and inventory management accelerated new service installations.',
      company: 'Fiber Network Operator'
    },
    {
      metric: '22%',
      title: 'Increase in Customer Satisfaction',
      description: 'Improved service reliability and customer communication enhanced satisfaction scores.',
      company: 'Rural Broadband Provider'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Internet Service Providers"
      subtitle="Broadband & Internet Services"
      description="Optimize your ISP operations with comprehensive solutions for network management, customer service, and infrastructure expansion."
      icon="🌐"
      category="Telecommunication Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default ISP;
