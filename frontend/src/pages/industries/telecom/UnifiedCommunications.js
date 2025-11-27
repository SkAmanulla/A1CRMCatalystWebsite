import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const UnifiedCommunications = () => {
  const challenges = [
    {
      icon: '💼',
      title: 'Remote Work Enablement',
      description: 'Supporting distributed workforces with reliable communication and collaboration tools.'
    },
    {
      icon: '🌐',
      title: 'Cloud Migration',
      description: 'Migrating from on-premises systems to cloud-based unified communications platforms.'
    },
    {
      icon: '🔌',
      title: 'System Integration',
      description: 'Integrating disparate communication systems and applications into unified platforms.'
    },
    {
      icon: '📊',
      title: 'Service Quality',
      description: 'Maintaining high-quality voice and video communications across various network conditions.'
    },
    {
      icon: '🎯',
      title: 'User Adoption',
      description: 'Driving user adoption of new communication tools and changing work behaviors.'
    },
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Ensuring secure communications while meeting industry compliance requirements.'
    }
  ];

  const solutions = [
    {
      icon: '📞',
      title: 'Cloud Communications Platform',
      description: 'Comprehensive cloud-based communication and collaboration platform.',
      features: [
        'Voice over IP (VoIP)',
        'Video conferencing',
        'Instant messaging',
        'File sharing and collaboration'
      ]
    },
    {
      icon: '📈',
      title: 'Contact Center Solutions',
      description: 'Advanced contact center capabilities with omnichannel customer engagement.',
      features: [
        'Automatic call distribution',
        'Interactive voice response',
        'Agent productivity tools',
        'Real-time analytics'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Communications',
      description: 'Mobile-first communication solutions for on-the-go productivity.',
      features: [
        'Mobile app integration',
        'BYOD support',
        'Location-based services',
        'Mobile device management'
      ]
    },
    {
      icon: '🤖',
      title: 'AI-Powered Features',
      description: 'Artificial intelligence capabilities to enhance communication experiences.',
      features: [
        'Real-time transcription',
        'Language translation',
        'Smart scheduling',
        'Automated meeting insights'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Site Deployment',
      description: 'Support multi-location organizations with centralized management and local presence.'
    },
    {
      title: 'API Integration',
      description: 'Extensive API capabilities for integrating with business applications and workflows.'
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Elastic infrastructure that scales with organizational growth and demand.'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for communication usage and performance.'
    },
    {
      title: 'Disaster Recovery',
      description: 'Built-in redundancy and disaster recovery capabilities for business continuity.'
    }
  ];

  const successStories = [
    {
      metric: '60%',
      title: 'Reduction in Communication Costs',
      description: 'Migration to cloud-based UC platform significantly reduced communication expenses.',
      company: 'Global Enterprise'
    },
    {
      metric: '40%',
      title: 'Increase in Team Collaboration',
      description: 'Integrated collaboration tools improved team productivity and project outcomes.',
      company: 'Technology Company'
    },
    {
      metric: '95%',
      title: 'System Uptime Achievement',
      description: 'Robust cloud infrastructure delivered exceptional reliability and uptime.',
      company: 'Financial Services Firm'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Unified Communications"
      subtitle="Enterprise Communications & Collaboration"
      description="Transform your organization's communications with integrated cloud-based solutions that enable seamless collaboration and productivity."
      icon="📞"
      category="Telecommunication Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default UnifiedCommunications;
