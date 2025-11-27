import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const DigitalMedia = () => {
  const challenges = [
    {
      icon: '🎥',
      title: 'Content Monetization',
      description: 'Developing sustainable revenue models for digital content and streaming services.'
    },
    {
      icon: '🎯',
      title: 'Audience Engagement',
      description: 'Building and maintaining engaged audiences across multiple digital platforms.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Leveraging viewer data and analytics to optimize content strategy and ad targeting.'
    },
    {
      icon: '🚀',
      title: 'Platform Competition',
      description: 'Competing with major streaming platforms and social media networks for audience attention.'
    },
    {
      icon: '🔧',
      title: 'Technical Infrastructure',
      description: 'Scaling technical infrastructure to support growing content libraries and user bases.'
    },
    {
      icon: '🌍',
      title: 'Global Content Distribution',
      description: 'Managing content rights, localization, and distribution across international markets.'
    }
  ];

  const solutions = [
    {
      icon: '🎨',
      title: 'Content Management System',
      description: 'Comprehensive platform for managing digital content lifecycle and distribution.',
      features: [
        'Content catalog management',
        'Digital asset management',
        'Rights and licensing tracking',
        'Multi-platform publishing'
      ]
    },
    {
      icon: '📱',
      title: 'Audience Engagement Platform',
      description: 'Build deeper relationships with audiences through personalized experiences.',
      features: [
        'Viewer behavior analytics',
        'Personalized recommendations',
        'Social media integration',
        'Community management tools'
      ]
    },
    {
      icon: '💰',
      title: 'Revenue Optimization',
      description: 'Maximize revenue through subscription management, advertising, and merchandising.',
      features: [
        'Subscription billing management',
        'Ad inventory optimization',
        'Merchandise integration',
        'Sponsorship management'
      ]
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Advanced analytics to understand audience behavior and optimize content strategy.',
      features: [
        'Real-time viewership analytics',
        'Content performance metrics',
        'Audience segmentation',
        'Predictive content modeling'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Multi-Platform Content Delivery',
      description: 'Distribute content across web, mobile, smart TV, and emerging platforms.'
    },
    {
      title: 'Live Streaming Management',
      description: 'Comprehensive live streaming capabilities with real-time audience engagement.'
    },
    {
      title: 'Content Creator Management',
      description: 'Manage relationships with content creators, influencers, and production partners.'
    },
    {
      title: 'Global Localization',
      description: 'Support international expansion with localization and regional content management.'
    },
    {
      title: 'Brand Partnership Management',
      description: 'Manage brand partnerships, sponsored content, and advertising relationships.'
    }
  ];

  const successStories = [
    {
      metric: '75%',
      title: 'Increase in Subscriber Retention',
      description: 'Personalized content recommendations significantly improved subscriber retention rates.',
      company: 'Streaming Media Platform'
    },
    {
      metric: '50%',
      title: 'Growth in Ad Revenue',
      description: 'Optimized ad placement and targeting drove substantial advertising revenue growth.',
      company: 'Digital Media Network'
    },
    {
      metric: '120%',
      title: 'Increase in Content Engagement',
      description: 'Enhanced audience engagement tools doubled viewer interaction with content.',
      company: 'Online Content Creator'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Digital Media Services"
      subtitle="Streaming & Digital Content Platforms"
      description="Transform your digital media operations with comprehensive solutions for content management, audience engagement, and revenue optimization."
      icon="🎥"
      category="Telecommunication Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default DigitalMedia;
