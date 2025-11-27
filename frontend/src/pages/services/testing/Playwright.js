import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const Playwright = () => {
  const serviceData = {
    title: "Playwright Test Automation",
    subtitle: "End-to-End Testing Automation Framework",
    description: "Ensure application quality with comprehensive Playwright test automation. Create reliable, fast, and maintainable end-to-end tests across all modern browsers and devices.",
    icon: "🎭",
    category: "Testing",
    features: [
      {
        title: "Cross-Browser Testing",
        description: "Test across Chromium, Firefox, and Safari with a single test script.",
        icon: "🌐"
      },
      {
        title: "Mobile Testing",
        description: "Run tests on mobile browsers and simulate different device configurations.",
        icon: "📱"
      },
      {
        title: "Auto-Wait Features",
        description: "Built-in smart waiting eliminates flaky tests with automatic element detection.",
        icon: "⏱️"
      },
      {
        title: "Visual Testing",
        description: "Capture screenshots and compare visual changes across test runs.",
        icon: "📸"
      },
      {
        title: "API Testing",
        description: "Test APIs and web services alongside UI testing for comprehensive coverage.",
        icon: "🔗"
      },
      {
        title: "Parallel Execution",
        description: "Run tests in parallel across multiple browsers and machines for faster feedback.",
        icon: "⚡"
      }
    ],
    benefits: [
      {
        title: "Faster Test Execution",
        description: "Run tests up to 3x faster with parallel execution and efficient automation."
      },
      {
        title: "Reduced Flakiness", 
        description: "Minimize flaky tests with intelligent waiting and robust element selection."
      },
      {
        title: "Better Coverage",
        description: "Achieve comprehensive test coverage across browsers, devices, and user scenarios."
      },
      {
        title: "Early Bug Detection",
        description: "Catch bugs early in the development cycle with continuous testing integration."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default Playwright;
