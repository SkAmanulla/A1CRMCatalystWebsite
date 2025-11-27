import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const Providers = () => {
  const challenges = [
    {
      icon: '👩‍⚕️',
      title: 'Staff Burnout',
      description: 'Managing healthcare workforce challenges and reducing administrative burden on clinical staff.'
    },
    {
      icon: '🏥',
      title: 'Patient Experience',
      description: 'Improving patient satisfaction while managing increasing patient volumes and complexity.'
    },
    {
      icon: '💰',
      title: 'Revenue Cycle',
      description: 'Optimizing revenue cycle management and reducing denials while maintaining compliance.'
    },
    {
      icon: '📋',
      title: 'Care Coordination',
      description: 'Coordinating care across multiple providers, specialists, and care settings.'
    },
    {
      icon: '📊',
      title: 'Quality Reporting',
      description: 'Meeting quality measure requirements and value-based care program obligations.'
    },
    {
      icon: '🔒',
      title: 'Data Security',
      description: 'Protecting sensitive patient information while enabling data sharing for better care.'
    }
  ];

  const solutions = [
    {
      icon: '👤',
      title: 'Patient 360 Platform',
      description: 'Comprehensive patient relationship management with complete care history and preferences.',
      features: [
        'Unified patient records',
        'Care team collaboration',
        'Appointment scheduling',
        'Patient communication hub'
      ]
    },
    {
      icon: '⚕️',
      title: 'Clinical Care Management',
      description: 'Streamline clinical workflows and improve care coordination across your organization.',
      features: [
        'Care plan management',
        'Clinical decision support',
        'Provider collaboration tools',
        'Quality measure tracking'
      ]
    },
    {
      icon: '💳',
      title: 'Revenue Cycle Optimization',
      description: 'Optimize revenue cycle processes from patient registration through collections.',
      features: [
        'Prior authorization workflow',
        'Claims management',
        'Denial management',
        'Financial counseling tools'
      ]
    },
    {
      icon: '📱',
      title: 'Patient Engagement',
      description: 'Enhance patient engagement through digital tools and personalized communications.',
      features: [
        'Patient portals',
        'Mobile health apps',
        'Telehealth integration',
        'Educational content delivery'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Location Management',
      description: 'Manage operations across multiple facilities, departments, and service lines.'
    },
    {
      title: 'Provider Network Integration',
      description: 'Seamlessly integrate with referring physicians and specialty care networks.'
    },
    {
      title: 'Population Health Management',
      description: 'Track and manage population health initiatives and preventive care programs.'
    },
    {
      title: 'Value-Based Care Support',
      description: 'Support value-based care contracts with comprehensive analytics and reporting.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with healthcare regulations and accreditation requirements.'
    }
  ];

  const successStories = [
    {
      metric: '30%',
      title: 'Increase in Patient Satisfaction',
      description: 'Multi-specialty clinic improved patient satisfaction through enhanced communication.',
      company: 'Regional Medical Group'
    },
    {
      metric: '45%',
      title: 'Reduction in No-Shows',
      description: 'Automated appointment reminders and scheduling optimization reduced no-shows.',
      company: 'Community Health Center'
    },
    {
      metric: '20%',
      title: 'Improvement in Quality Scores',
      description: 'Better care coordination led to improved quality measure performance.',
      company: 'Academic Medical Center'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Providers"
      subtitle="Healthcare Delivery Organizations"
      description="Empower your healthcare organization with integrated solutions that improve patient care, streamline operations, and support your clinical teams."
      icon="🏥"
      category="Health & Insurance Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default Providers;
