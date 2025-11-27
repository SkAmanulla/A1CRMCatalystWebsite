import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const CableSatellite = () => {
  const challenges = [
    {
      icon: '📺',
      title: 'Cord Cutting Trend',
      description: 'Adapting business models to address declining traditional TV subscriptions.'
    },
    {
      icon: '🎬',
      title: 'Content Competition',
      description: 'Competing with streaming services and over-the-top content providers.'
    },
    {
      icon: '🚀',
      title: 'Technology Transition',
      description: 'Transitioning from legacy systems to IP-based and cloud-native solutions.'
    },
    {
      icon: '💰',
      title: 'Revenue Diversification',
      description: 'Diversifying revenue streams beyond traditional cable and satellite services.'
    },
    {
      icon: '📦',
      title: 'Service Bundling',
      description: 'Creating compelling bundle offers across video, internet, and voice services.'
    },
    {
      icon: '📱',
      title: 'Mobile Integration',
      description: 'Integrating mobile services and competing with wireless-first providers.'
    }
  ];

  const solutions = [
    {
      icon: '🎞️',
      title: 'Content & Programming Management',
      description: 'Comprehensive content acquisition, scheduling, and distribution management.',
      features: [
        'Content licensing tracking',
        'Programming schedule management',
        'Video-on-demand cataloging',
        'Content performance analytics'
      ]
    },
    {
      icon: '📺',
      title: 'Subscriber Experience Platform',
      description: 'Unified platform for managing subscriber lifecycle and viewing experiences.',
      features: [
        'Personalized content recommendations',
        'Multi-screen viewing support',
        'Parental controls management',
        'Interactive program guides'
      ]
    },
    {
      icon: '📦',
      title: 'Service Bundle Management',
      description: 'Create and manage complex service bundles across video, internet, and voice.',
      features: [
        'Dynamic bundle configuration',
        'Promotional pricing management',
        'Cross-service billing',
        'Bundle performance tracking'
      ]
    },
    {
      icon: '🔧',
      title: 'Field Operations Optimization',
      description: 'Optimize field service operations for installations, maintenance, and repairs.',
      features: [
        'Technician scheduling',
        'Equipment inventory management',
        'Service call optimization',
        'Customer notification systems'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Platform Content Delivery',
      description: 'Support content delivery across traditional TV, streaming, and mobile platforms.'
    },
    {
      title: 'Advertising & Revenue Management',
      description: 'Maximize advertising revenue through targeted ad placement and inventory management.'
    },
    {
      title: 'Network Infrastructure Management',
      description: 'Manage complex cable and satellite infrastructure with integrated monitoring.'
    },
    {
      title: 'Customer Retention Programs',
      description: 'Implement comprehensive retention strategies to combat cord-cutting trends.'
    },
    {
      title: 'OTT Service Integration',
      description: 'Integrate over-the-top services and streaming platforms into traditional offerings.'
    }
  ];

  const successStories = [
    {
      metric: '30%',
      title: 'Reduction in Customer Churn',
      description: 'Personalized retention offers and improved service quality reduced subscriber churn.',
      company: 'Major Cable Operator'
    },
    {
      metric: '45%',
      title: 'Increase in VOD Usage',
      description: 'Enhanced content discovery and recommendations drove significant VOD growth.',
      company: 'Regional Cable Provider'
    },
    {
      metric: '25%',
      title: 'Improvement in Installation Efficiency',
      description: 'Optimized field operations reduced installation times and improved customer satisfaction.',
      company: 'Satellite TV Provider'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Cable & Satellite"
      subtitle="Cable TV & Satellite Broadcasting"
      description="Transform your cable and satellite operations with integrated solutions for content management, subscriber experience, and service delivery."
      icon="📡"
      category="Telecommunication Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default CableSatellite;
