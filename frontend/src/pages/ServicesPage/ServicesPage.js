import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Salesforce Products',
      description: 'Comprehensive Salesforce solutions to accelerate your customer growth',
      icon: '☁️',
      services: [
        { name: 'Agent Force', path: '/services/salesforce/agentforce', description: 'AI-powered customer service automation' },
        { name: 'Sales Cloud', path: '/services/salesforce/sales-cloud', description: 'Complete sales management platform' },
        { name: 'Service Cloud', path: '/services/salesforce/service-cloud', description: 'Customer service and support solutions' },
        { name: 'Marketing Cloud', path: '/services/salesforce/marketing-cloud', description: 'Digital marketing automation platform' },
        { name: 'CLM', path: '/services/salesforce/clm', description: 'Contract Lifecycle Management' },
        { name: 'Order Management', path: '/services/salesforce/order-management', description: 'Streamlined order processing' },
        { name: 'CPQ', path: '/services/salesforce/cpq', description: 'Configure, Price, Quote solutions' },
        { name: 'MuleSoft', path: '/services/salesforce/mulesoft', description: 'Integration platform for connecting systems' }
      ]
    },
    {
      title: 'DevOps',
      description: 'Modern DevOps solutions for seamless development and deployment',
      icon: '🔧',
      services: [
        { name: 'Copado', path: '/services/devops/copado', description: 'Salesforce DevOps platform' },
        { name: 'AutoRabbit', path: '/services/devops/autorabbit', description: 'Continuous integration for Salesforce' },
        { name: 'DevOps Center', path: '/services/devops/devops-center', description: 'Native Salesforce DevOps tools' }
      ]
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing solutions for quality assurance',
      icon: '🧪',
      services: [
        { name: 'Playwright Test Automation', path: '/services/testing/playwright', description: 'End-to-end testing automation framework' }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={10} className="mx-auto text-center">
              <h1 className="services-hero-title">
                Our <span className="text-accent">Services</span>
              </h1>
              <p className="services-hero-subtitle">
                Accelerating your customer growth with comprehensive CRM solutions, 
                DevOps excellence, and quality assurance services
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Categories */}
      <section className="services-categories">
        <Container>
          {serviceCategories.map((category, index) => (
            <div key={index} className="service-category-section">
              <Row className="mb-5">
                <Col lg={12} className="text-center">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h2 className="category-title">{category.title}</h2>
                    <p className="category-description">{category.description}</p>
                  </div>
                </Col>
              </Row>
              
              <Row>
                {category.services.map((service, serviceIndex) => (
                  <Col lg={4} md={6} className="mb-4" key={serviceIndex}>
                    <Card className="service-card h-100">
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="service-card-title">
                          {service.name}
                        </Card.Title>
                        <Card.Text className="service-card-description flex-grow-1">
                          {service.description}
                        </Card.Text>
                        <Button 
                          as={Link} 
                          to={service.path} 
                          variant="outline-primary" 
                          className="service-card-button mt-auto"
                        >
                          Learn More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              
              {index < serviceCategories.length - 1 && <hr className="category-divider" />}
            </div>
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h3 className="cta-title">Ready to Get Started?</h3>
              <p className="cta-description">
                Contact us to discuss how our services can accelerate your customer growth
              </p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="cta-button">
                Contact Us Today
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
