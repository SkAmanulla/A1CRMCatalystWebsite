import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const Payers = () => {
  const challenges = [
    {
      icon: '💰',
      title: 'Cost Management',
      description: 'Rising healthcare costs and the need for efficient cost containment while maintaining quality care.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Managing vast amounts of member data and generating actionable insights for better outcomes.'
    },
    {
      icon: '🤝',
      title: 'Member Engagement',
      description: 'Building stronger relationships with members and improving satisfaction across all touchpoints.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Keeping up with changing healthcare regulations and maintaining compliance across operations.'
    },
    {
      icon: '🔄',
      title: 'Claims Processing',
      description: 'Streamlining claims processing workflows to reduce processing time and improve accuracy.'
    },
    {
      icon: '🏥',
      title: 'Provider Network',
      description: 'Managing complex provider networks and ensuring seamless coordination of care.'
    }
  ];

  const solutions = [
    {
      icon: '👥',
      title: 'Member 360 Platform',
      description: 'Get a complete view of member interactions, preferences, and health journey across all touchpoints.',
      features: [
        'Unified member profiles',
        'Interaction history tracking',
        'Personalized communication',
        'Health risk scoring'
      ]
    },
    {
      icon: '🤖',
      title: 'Automated Claims Management',
      description: 'Streamline claims processing with intelligent automation and workflow optimization.',
      features: [
        'Automated claim routing',
        'Fraud detection algorithms',
        'Real-time status updates',
        'Exception handling workflows'
      ]
    },
    {
      icon: '📱',
      title: 'Digital Member Experience',
      description: 'Provide seamless digital experiences through member portals and mobile applications.',
      features: [
        'Self-service portals',
        'Mobile app integration',
        'Virtual care coordination',
        'Digital health tools'
      ]
    },
    {
      icon: '📈',
      title: 'Analytics & Reporting',
      description: 'Leverage advanced analytics to drive data-driven decisions and improve outcomes.',
      features: [
        'Predictive modeling',
        'Population health analytics',
        'Cost trend analysis',
        'Performance dashboards'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Member Lifecycle Management',
      description: 'Manage the complete member journey from enrollment through claims and care coordination.'
    },
    {
      title: 'Provider Network Optimization',
      description: 'Optimize provider networks, manage contracts, and ensure quality care delivery.'
    },
    {
      title: 'Risk Adjustment & Quality',
      description: 'Improve risk adjustment accuracy and quality measure reporting for better outcomes.'
    },
    {
      title: 'Care Management Integration',
      description: 'Integrate care management programs with clinical workflows and member engagement.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with healthcare regulations and streamline audit processes.'
    }
  ];

  const successStories = [
    {
      metric: '40%',
      title: 'Reduction in Claims Processing Time',
      description: 'Major health insurer reduced claims processing time through automated workflows.',
      company: 'Regional Health Plan'
    },
    {
      metric: '25%',
      title: 'Improvement in Member Satisfaction',
      description: 'Enhanced member experience through personalized digital interactions.',
      company: 'National Insurance Provider'
    },
    {
      metric: '60%',
      title: 'Increase in Care Plan Adherence',
      description: 'Improved care coordination led to better member health outcomes.',
      company: 'Medicare Advantage Plan'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Payers"
      subtitle="Healthcare Insurance & Managed Care"
      description="Transform your payer operations with comprehensive Salesforce solutions designed to improve member experiences, streamline operations, and drive better health outcomes."
      icon="💳"
      category="Health & Insurance Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default Payers;
