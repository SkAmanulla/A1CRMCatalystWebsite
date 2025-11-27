import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const MobileOperators = () => {
  const challenges = [
    {
      icon: '📶',
      title: '5G Network Deployment',
      description: 'Managing the complex transition to 5G while maintaining existing network performance.'
    },
    {
      icon: '💰',
      title: 'Revenue Pressure',
      description: 'Combating declining ARPU while increasing network investment requirements.'
    },
    {
      icon: '🏃‍♂️',
      title: 'Customer Churn',
      description: 'Reducing customer churn in highly competitive markets with increasing customer expectations.'
    },
    {
      icon: '📱',
      title: 'Digital Experience',
      description: 'Delivering seamless digital experiences across all customer touchpoints and devices.'
    },
    {
      icon: '🔒',
      title: 'Network Security',
      description: 'Protecting network infrastructure and customer data from evolving cyber threats.'
    },
    {
      icon: '🌐',
      title: 'IoT & Enterprise Services',
      description: 'Scaling IoT and enterprise services while managing complex B2B relationships.'
    }
  ];

  const solutions = [
    {
      icon: '👤',
      title: 'Customer 360 Platform',
      description: 'Complete customer view across all touchpoints, devices, and service interactions.',
      features: [
        'Unified customer profiles',
        'Multi-device tracking',
        'Usage analytics',
        'Personalized offers'
      ]
    },
    {
      icon: '🚀',
      title: 'Digital Customer Experience',
      description: 'Seamless omnichannel experience from acquisition through ongoing service.',
      features: [
        'Self-service portals',
        'Mobile app integration',
        'AI-powered chatbots',
        'Video customer service'
      ]
    },
    {
      icon: '📈',
      title: 'Revenue Optimization',
      description: 'Maximize revenue through intelligent pricing, upselling, and retention strategies.',
      features: [
        'Dynamic pricing models',
        'Churn prediction',
        'Cross-sell recommendations',
        'Loyalty program management'
      ]
    },
    {
      icon: '🏢',
      title: 'Enterprise & B2B Solutions',
      description: 'Comprehensive B2B relationship management and enterprise service delivery.',
      features: [
        'Account-based management',
        'IoT device management',
        'Enterprise billing',
        'SLA monitoring'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Network Performance Management',
      description: 'Monitor and optimize network performance with integrated customer impact analysis.'
    },
    {
      title: 'Device Lifecycle Management',
      description: 'Manage device inventory, upgrades, and support across all customer segments.'
    },
    {
      title: 'Billing & Revenue Management',
      description: 'Comprehensive billing solutions supporting complex pricing models and convergent billing.'
    },
    {
      title: 'Partner Ecosystem Management',
      description: 'Manage relationships with device manufacturers, content providers, and technology partners.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with telecommunications regulations and data protection requirements.'
    }
  ];

  const successStories = [
    {
      metric: '25%',
      title: 'Reduction in Customer Churn',
      description: 'Predictive analytics and personalized retention offers significantly reduced churn.',
      company: 'Major Mobile Operator'
    },
    {
      metric: '40%',
      title: 'Increase in Digital Adoption',
      description: 'Enhanced self-service capabilities drove significant increase in digital channel usage.',
      company: 'Regional Wireless Carrier'
    },
    {
      metric: '18%',
      title: 'Improvement in ARPU',
      description: 'Targeted upselling and cross-selling programs improved average revenue per user.',
      company: 'National Mobile Network'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Mobile Network Operators"
      subtitle="Wireless & Mobile Communications"
      description="Transform your mobile network operations with comprehensive solutions for customer experience, network management, and revenue optimization."
      icon="📱"
      category="Telecommunication Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default MobileOperators;
