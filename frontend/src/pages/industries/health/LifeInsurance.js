import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const LifeInsurance = () => {
  const challenges = [
    {
      icon: '📈',
      title: 'Digital Transformation',
      description: 'Modernizing legacy systems and processes to meet evolving customer expectations.'
    },
    {
      icon: '🎯',
      title: 'Customer Acquisition',
      description: 'Acquiring new customers in a competitive market while reducing acquisition costs.'
    },
    {
      icon: '⏱️',
      title: 'Underwriting Speed',
      description: 'Accelerating underwriting processes while maintaining accuracy and risk assessment.'
    },
    {
      icon: '📱',
      title: 'Digital Experience',
      description: 'Providing seamless digital experiences for policy management and claims.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Navigating complex insurance regulations and maintaining compliance across jurisdictions.'
    },
    {
      icon: '🔍',
      title: 'Risk Assessment',
      description: 'Improving risk assessment accuracy using data analytics and predictive modeling.'
    }
  ];

  const solutions = [
    {
      icon: '👤',
      title: 'Customer Lifecycle Management',
      description: 'Manage the complete customer journey from lead generation through policy servicing.',
      features: [
        'Lead management and nurturing',
        'Quote generation and tracking',
        'Policy administration',
        'Claims processing workflow'
      ]
    },
    {
      icon: '🚀',
      title: 'Digital Underwriting Platform',
      description: 'Streamline underwriting processes with automated workflows and decision support.',
      features: [
        'Automated underwriting rules',
        'Medical data integration',
        'Risk scoring algorithms',
        'Exception handling workflows'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Leverage data analytics for better risk assessment and business intelligence.',
      features: [
        'Predictive risk modeling',
        'Customer behavior analysis',
        'Portfolio performance tracking',
        'Regulatory reporting'
      ]
    },
    {
      icon: '📞',
      title: 'Agent & Broker Portal',
      description: 'Empower your distribution network with comprehensive sales and service tools.',
      features: [
        'Commission management',
        'Sales performance tracking',
        'Training and certification',
        'Marketing resource library'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Channel Distribution',
      description: 'Support various distribution channels including agents, brokers, and direct sales.'
    },
    {
      title: 'Product Configuration',
      description: 'Flexible product configuration to support diverse life insurance offerings.'
    },
    {
      title: 'Claims Management',
      description: 'Comprehensive claims processing with fraud detection and investigation tools.'
    },
    {
      title: 'Policy Administration',
      description: 'Complete policy lifecycle management from issuance through termination.'
    },
    {
      title: 'Customer Self-Service',
      description: 'Empower customers with self-service portals for policy management and payments.'
    }
  ];

  const successStories = [
    {
      metric: '50%',
      title: 'Faster Underwriting Process',
      description: 'Automated workflows reduced underwriting time from weeks to days.',
      company: 'National Life Insurer'
    },
    {
      metric: '35%',
      title: 'Increase in Agent Productivity',
      description: 'Enhanced agent portal and tools improved sales productivity significantly.',
      company: 'Regional Life Insurance Company'
    },
    {
      metric: '25%',
      title: 'Improvement in Customer Satisfaction',
      description: 'Digital self-service capabilities improved customer experience scores.',
      company: 'Mutual Life Insurance Company'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Life Insurance"
      subtitle="Life Insurance & Annuities"
      description="Transform your life insurance operations with comprehensive Salesforce solutions that enhance customer experience, streamline underwriting, and drive growth."
      icon="🛡️"
      category="Health & Insurance Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default LifeInsurance;
