import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './IndustriesPage.css';

const IndustriesPage = () => {
  const industries = [
    {
      category: 'Health & Insurance Cloud',
      icon: '🏥',
      description: 'Transform healthcare delivery and insurance operations with integrated solutions.',
      color: '#ef4444',
      industries: [
        { name: 'Payers', path: '/industries/health/payers' },
        { name: 'Providers', path: '/industries/health/providers' },
        { name: 'Life Insurance', path: '/industries/health/life-insurance' },
        { name: 'Property & Casualty', path: '/industries/health/property-casualty' },
        { name: 'Health Plans', path: '/industries/health/health-plans' }
      ]
    },
    {
      category: 'Telecommunication Cloud',
      icon: '📡',
      description: 'Enhance customer experience and streamline operations in the telecom sector.',
      color: '#8b5cf6',
      industries: [
        { name: 'Mobile Network Operators', path: '/industries/telecom/mobile-operators' },
        { name: 'Internet Service Providers', path: '/industries/telecom/isp' },
        { name: 'Cable & Satellite', path: '/industries/telecom/cable-satellite' },
        { name: 'Unified Communications', path: '/industries/telecom/unified-communications' },
        { name: 'Digital Media Services', path: '/industries/telecom/digital-media' }
      ]
    },
    {
      category: 'Energy & Utilities Cloud',
      icon: '⚡',
      description: 'Optimize operations and customer service in the energy and utilities sector.',
      color: '#10b981',
      industries: [
        { name: 'Oil & Gas', path: '/industries/energy/oil-gas' },
        { name: 'Power Utilities', path: '/industries/energy/power-utilities' },
        { name: 'Energy Utilities', path: '/industries/energy/energy-utilities' },
        { name: 'Renewable Energy', path: '/industries/energy/renewable-energy' }
      ]
    },
    {
      category: 'Financial Services Cloud',
      icon: '🏦',
      description: 'Drive digital transformation in banking, wealth management, and financial services.',
      color: '#3b82f6',
      industries: [
        { name: 'Retail Banking & Credit Unions', path: '/industries/financial/retail-banking' },
        { name: 'Corporate Investment Banking', path: '/industries/financial/investment-banking' },
        { name: 'Commercial Banking', path: '/industries/financial/commercial-banking' },
        { name: 'Wealth Management', path: '/industries/financial/wealth-management' },
        { name: 'Capital Markets', path: '/industries/financial/capital-markets' },
        { name: 'Asset Management', path: '/industries/financial/asset-management' }
      ]
    }
  ];

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h1 className="industries-hero-title">
                Industry-Specific Solutions
              </h1>
              <p className="industries-hero-description">
                Unlock the power of Salesforce with solutions tailored to your industry's unique challenges and opportunities. 
                Drive transformation with deep industry expertise and proven best practices.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid">
        <Container>
          <Row>
            {industries.map((industry, index) => (
              <Col lg={6} className="mb-5" key={index}>
                <Card className="industry-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="industry-card-header">
                      <div 
                        className="industry-card-icon"
                        style={{ color: industry.color }}
                      >
                        {industry.icon}
                      </div>
                      <h3 className="industry-card-title">{industry.category}</h3>
                    </div>
                    <p className="industry-card-description">
                      {industry.description}
                    </p>
                    <div className="industry-links flex-grow-1">
                      <h6 className="industry-links-title">Explore Solutions:</h6>
                      <div className="industry-links-grid">
                        {industry.industries.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="industry-link"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="industry-card-footer mt-3">
                      <Button
                        variant="outline-primary"
                        className="view-all-btn"
                        style={{ borderColor: industry.color, color: industry.color }}
                      >
                        View All Solutions
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="industries-stats">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Industry Implementations</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Satisfaction Rate</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Expert Support</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Experience</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="industries-cta">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="cta-title">Ready to Transform Your Industry?</h2>
              <p className="cta-description">
                Connect with our industry experts to discover how Salesforce can drive innovation and growth in your organization.
              </p>
              <div className="cta-actions">
                <Button 
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="cta-primary-btn me-3"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="cta-secondary-btn"
                >
                  Download Industry Guide
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default IndustriesPage;
