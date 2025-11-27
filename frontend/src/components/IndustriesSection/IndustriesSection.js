import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUniversity, FaHeartbeat, FaBuilding, FaShoppingCart, FaGraduationCap, FaIndustry } from 'react-icons/fa';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <FaUniversity />,
      title: "Financial Services",
      description: "Comprehensive CRM solutions for banks, insurance companies, and financial institutions with regulatory compliance and security.",
      features: ["Risk Management", "Compliance Tracking", "Customer Onboarding", "Portfolio Management"]
    },
    {
      icon: <FaHeartbeat />,
      title: "Healthcare",
      description: "HIPAA-compliant CRM systems for healthcare providers, enabling better patient relationships and care coordination.",
      features: ["Patient Management", "HIPAA Compliance", "Care Coordination", "Medical Records Integration"]
    },
    {
      icon: <FaBuilding />,
      title: "Public Sector",
      description: "Government-grade solutions that improve citizen services and streamline public administration processes.",
      features: ["Citizen Services", "Case Management", "Transparency Tools", "Multi-departmental Integration"]
    },
    {
      icon: <FaShoppingCart />,
      title: "Retail & E-commerce",
      description: "Customer-centric solutions that drive sales, improve customer experience, and optimize inventory management.",
      features: ["Customer Journey Mapping", "Inventory Integration", "Sales Analytics", "Marketing Automation"]
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "Student information systems and CRM solutions that enhance learning experiences and administrative efficiency.",
      features: ["Student Lifecycle", "Alumni Relations", "Admissions Management", "Academic Analytics"]
    },
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      description: "Supply chain integration and customer management solutions that improve operational efficiency and customer satisfaction.",
      features: ["Supply Chain Integration", "Quality Management", "Customer Support", "Vendor Management"]
    }
  ];

  return (
    <section className="industries-section section">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Our deep industry expertise enables us to deliver tailored solutions that address 
              specific challenges and regulatory requirements across various sectors.
            </p>
          </Col>
        </Row>

        <Row>
          {industries.map((industry, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="industry-card h-100">
                <Card.Body>
                  <div className="industry-header">
                    <div className="industry-icon">
                      {industry.icon}
                    </div>
                    <Card.Title className="industry-title">{industry.title}</Card.Title>
                  </div>
                  <Card.Text className="industry-description">
                    {industry.description}
                  </Card.Text>
                  <div className="industry-features">
                    <h6>Key Features:</h6>
                    <ul>
                      {industry.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="industry-stats mt-5">
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="stat-number">15+</div>
            <div className="stat-label">Industries Served</div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="stat-number">500+</div>
            <div className="stat-label">Successful Implementations</div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Client Satisfaction</div>
          </Col>
          <Col lg={3} md={6} className="text-center mb-4">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustriesSection;
