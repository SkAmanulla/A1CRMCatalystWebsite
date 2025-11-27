import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const OilGas = () => {
  const challenges = [
    {
      icon: '💹',
      title: 'Commodity Price Volatility',
      description: 'Managing business operations amid fluctuating oil and gas prices.'
    },
    {
      icon: '🌍',
      title: 'Environmental Compliance',
      description: 'Meeting stringent environmental regulations and sustainability requirements.'
    },
    {
      icon: '🔧',
      title: 'Asset Management',
      description: 'Maintaining aging infrastructure while optimizing asset performance and safety.'
    },
    {
      icon: '⚡',
      title: 'Digital Transformation',
      description: 'Modernizing operations with IoT, AI, and digital technologies.'
    },
    {
      icon: '🛡️',
      title: 'Safety & Risk Management',
      description: 'Ensuring worker safety and managing operational risks across global operations.'
    },
    {
      icon: '🔗',
      title: 'Supply Chain Complexity',
      description: 'Managing complex global supply chains and vendor relationships.'
    }
  ];

  const solutions = [
    {
      icon: '🏢',
      title: 'Asset Performance Management',
      description: 'Comprehensive asset lifecycle management and predictive maintenance.',
      features: [
        'Predictive maintenance scheduling',
        'Asset condition monitoring',
        'Maintenance work order management',
        'Equipment performance analytics'
      ]
    },
    {
      icon: '🌍',
      title: 'HSE Management Platform',
      description: 'Health, Safety, and Environmental compliance and incident management.',
      features: [
        'Incident reporting and tracking',
        'Safety audit management',
        'Environmental monitoring',
        'Regulatory compliance tracking'
      ]
    },
    {
      icon: '🚚',
      title: 'Supply Chain Optimization',
      description: 'End-to-end supply chain visibility and vendor relationship management.',
      features: [
        'Vendor performance tracking',
        'Contract management',
        'Procurement optimization',
        'Supply chain risk assessment'
      ]
    },
    {
      icon: '📊',
      title: 'Operations Analytics',
      description: 'Advanced analytics for operational optimization and decision support.',
      features: [
        'Production optimization',
        'Real-time operational dashboards',
        'Performance benchmarking',
        'Predictive analytics'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Upstream Operations Management',
      description: 'Comprehensive management of exploration, drilling, and production operations.'
    },
    {
      title: 'Midstream Infrastructure',
      description: 'Pipeline, storage, and transportation infrastructure management.'
    },
    {
      title: 'Downstream Operations',
      description: 'Refinery operations, distribution, and retail management capabilities.'
    },
    {
      title: 'Joint Venture Management',
      description: 'Manage complex joint ventures and partnership relationships.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance management for global regulatory requirements.'
    }
  ];

  const successStories = [
    {
      metric: '30%',
      title: 'Reduction in Unplanned Downtime',
      description: 'Predictive maintenance programs significantly reduced equipment failures.',
      company: 'Global Oil & Gas Company'
    },
    {
      metric: '25%',
      title: 'Improvement in Safety Performance',
      description: 'Enhanced HSE management reduced safety incidents and improved compliance.',
      company: 'Major Energy Producer'
    },
    {
      metric: '20%',
      title: 'Supply Chain Cost Savings',
      description: 'Optimized vendor management and procurement processes reduced costs.',
      company: 'Integrated Oil Company'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Oil & Gas"
      subtitle="Petroleum & Energy Production"
      description="Optimize your oil and gas operations with comprehensive solutions for asset management, safety compliance, and operational excellence."
      icon="⛽"
      category="Energy & Utilities Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default OilGas;
