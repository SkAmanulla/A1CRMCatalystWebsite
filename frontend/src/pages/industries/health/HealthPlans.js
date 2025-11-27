import React from 'react';
import IndustryDetailTemplate from '../../../components/IndustryDetailTemplate/IndustryDetailTemplate';

const HealthPlans = () => {
  const challenges = [
    {
      icon: '📈',
      title: 'Rising Healthcare Costs',
      description: 'Managing escalating healthcare costs while maintaining competitive premiums and coverage.'
    },
    {
      icon: '👥',
      title: 'Member Engagement',
      description: 'Engaging members in their health journey and preventive care programs.'
    },
    {
      icon: '💊',
      title: 'Care Coordination',
      description: 'Coordinating care across providers, specialists, and care management programs.'
    },
    {
      icon: '📊',
      title: 'Value-Based Care',
      description: 'Transitioning to value-based care models and managing quality outcomes.'
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Meeting ACA requirements, state regulations, and CMS reporting obligations.'
    },
    {
      icon: '🔄',
      title: 'Provider Network Management',
      description: 'Managing complex provider networks and ensuring adequate network coverage.'
    }
  ];

  const solutions = [
    {
      icon: '💙',
      title: 'Member Health Management',
      description: 'Comprehensive member health management with personalized care plans.',
      features: [
        'Health risk assessments',
        'Care gap identification',
        'Preventive care reminders',
        'Chronic care management'
      ]
    },
    {
      icon: '🏥',
      title: 'Provider Relationship Management',
      description: 'Strengthen provider relationships and optimize network performance.',
      features: [
        'Provider credentialing',
        'Performance dashboards',
        'Contract management',
        'Quality measure tracking'
      ]
    },
    {
      icon: '📱',
      title: 'Digital Member Experience',
      description: 'Deliver seamless digital experiences across all member touchpoints.',
      features: [
        'Member self-service portals',
        'Mobile health apps',
        'Telehealth integration',
        'Digital health tools'
      ]
    },
    {
      icon: '⭐',
      title: 'Quality & Star Ratings',
      description: 'Improve quality scores and star ratings through comprehensive tracking.',
      features: [
        'HEDIS measure tracking',
        'Star rating optimization',
        'Quality improvement programs',
        'Performance analytics'
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Population Health Management',
      description: 'Comprehensive population health analytics and intervention management.'
    },
    {
      title: 'Medicare & Medicaid Support',
      description: 'Specialized capabilities for Medicare Advantage and Medicaid managed care.'
    },
    {
      title: 'Risk Adjustment Optimization',
      description: 'Optimize risk adjustment accuracy and revenue capture opportunities.'
    },
    {
      title: 'Care Management Programs',
      description: 'Support various care management programs including disease management and case management.'
    },
    {
      title: 'Provider Network Optimization',
      description: 'Optimize provider networks for cost, quality, and member access.'
    }
  ];

  const successStories = [
    {
      metric: '4.5★',
      title: 'Medicare Star Rating Achievement',
      description: 'Improved Medicare Advantage plan achieved 4.5-star rating through quality initiatives.',
      company: 'Regional Medicare Advantage Plan'
    },
    {
      metric: '35%',
      title: 'Increase in Preventive Care',
      description: 'Enhanced member engagement drove significant increase in preventive care utilization.',
      company: 'State Medicaid MCO'
    },
    {
      metric: '28%',
      title: 'Reduction in Medical Costs',
      description: 'Care management programs reduced per-member medical costs through better coordination.',
      company: 'Commercial Health Plan'
    }
  ];

  return (
    <IndustryDetailTemplate
      title="Health Plans"
      subtitle="Managed Care Organizations"
      description="Transform your health plan operations with comprehensive solutions for member engagement, care coordination, and quality management."
      icon="💙"
      category="Health & Insurance Cloud"
      challenges={challenges}
      solutions={solutions}
      capabilities={capabilities}
      successStories={successStories}
    />
  );
};

export default HealthPlans;
