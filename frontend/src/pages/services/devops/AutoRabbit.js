import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const AutoRabbit = () => {
  const serviceData = {
    title: "AutoRabbit",
    subtitle: "Continuous Integration for Salesforce",
    description: "Transform your Salesforce development with AutoRabbit's intelligent CI/CD platform. Deploy faster, reduce risks, and maintain code quality with automated testing and deployment workflows.",
    icon: "🐰",
    category: "DevOps",
    features: [
      {
        title: "Smart Deployments",
        description: "Deploy changes intelligently with dependency analysis and conflict resolution.",
        icon: "🧠"
      },
      {
        title: "Automated Testing",
        description: "Run comprehensive test suites automatically before every deployment.",
        icon: "🧪"
      },
      {
        title: "Version Control",
        description: "Integrate seamlessly with Git, SVN, and other version control systems.",
        icon: "📚"
      },
      {
        title: "Data Migration",
        description: "Migrate data safely across environments with intelligent mapping and validation.",
        icon: "📊"
      },
      {
        title: "Rollback Capabilities",
        description: "Quickly rollback failed deployments with one-click recovery options.",
        icon: "↩️"
      },
      {
        title: "Compliance Reports",
        description: "Generate detailed audit trails and compliance reports for governance.",
        icon: "📋"
      }
    ],
    benefits: [
      {
        title: "Accelerated Development",
        description: "Speed up development cycles by up to 60% with automated CI/CD processes."
      },
      {
        title: "Reduced Errors", 
        description: "Minimize deployment errors with intelligent conflict detection and resolution."
      },
      {
        title: "Enhanced Security",
        description: "Maintain security standards with encrypted deployments and access controls."
      },
      {
        title: "Cost Optimization",
        description: "Reduce operational costs through automation and improved efficiency."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default AutoRabbit;
