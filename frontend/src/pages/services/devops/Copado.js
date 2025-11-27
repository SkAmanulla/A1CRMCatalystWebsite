import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const Copado = () => {
  const serviceData = {
    title: "Copado",
    subtitle: "Salesforce DevOps Platform",
    description: "Accelerate your Salesforce development with Copado's comprehensive DevOps platform. Streamline releases, ensure quality, and scale your development processes with confidence.",
    icon: "⚡",
    category: "DevOps",
    features: [
      {
        title: "Continuous Integration",
        description: "Automate build, test, and deployment processes with robust CI/CD pipelines.",
        icon: "🔄"
      },
      {
        title: "Release Management",
        description: "Plan, track, and execute releases across multiple Salesforce orgs and environments.",
        icon: "🚀"
      },
      {
        title: "Quality Gates",
        description: "Implement automated quality checks and testing to ensure code reliability.",
        icon: "🛡️"
      },
      {
        title: "Backlog Management",
        description: "Manage user stories, requirements, and development backlog in one platform.",
        icon: "📋"
      },
      {
        title: "Compliance & Governance",
        description: "Ensure compliance with SOX, GDPR, and other regulatory requirements.",
        icon: "📜"
      },
      {
        title: "Environment Management",
        description: "Manage sandbox creation, refreshes, and environment configurations.",
        icon: "🔧"
      }
    ],
    benefits: [
      {
        title: "Faster Deployments",
        description: "Reduce deployment time by up to 80% with automated release processes."
      },
      {
        title: "Improved Code Quality", 
        description: "Minimize bugs and issues with comprehensive testing and quality gates."
      },
      {
        title: "Better Collaboration",
        description: "Enable seamless collaboration between developers, admins, and business teams."
      },
      {
        title: "Risk Reduction",
        description: "Minimize deployment risks with automated rollback and monitoring capabilities."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default Copado;
