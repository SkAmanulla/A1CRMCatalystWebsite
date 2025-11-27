import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetailTemplate.css';

const ServiceDetailTemplate = ({ 
  title, 
  subtitle, 
  description, 
  icon, 
  features = [], 
  benefits = [], 
  heroImage,
  category = "Service" 
}) => {
  return (
    <div className="service-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
          <Col lg={6}>
              <div className="service-hero-image">
                {heroImage ? (
                  <img src={heroImage} alt={title} className="img-fluid rounded" />
                ) : (
                  <div className="placeholder-image">
                    <span className="placeholder-icon">{icon || '🚀'}</span>
                  </div>
                )}
              </div>
            </Col>
            <Col lg={6}>
              <h1 className="service-hero-title">
                {title}
              </h1>
              {subtitle && (
                <h2 className="service-hero-subtitle">{subtitle}</h2>
              )}
              <p className="service-hero-description">
                {description}
              </p>
              <div className="service-hero-actions">
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  size="lg" 
                  className="me-3 mb-2"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  className="mb-2"
                  href="#features"
                >
                  Learn More
                </Button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section id="features" className="service-features">
          <Container>
            <Row>
              <Col lg={12} className="text-center mb-5">
                <h3 className="section-title">Key Features</h3>
                <p className="section-subtitle">
                  Discover what makes {title} powerful for your business
                </p>
              </Col>
            </Row>
            <Row>
              {features.map((feature, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <Card className="feature-card h-100">
                    <Card.Body className="text-center">
                      <div className="feature-icon mb-3">
                        {feature.icon || '✨'}
                      </div>
                      <Card.Title className="feature-title">
                        {feature.title}
                      </Card.Title>
                      <Card.Text className="feature-description">
                        {feature.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="service-benefits">
          <Container>
            <div className="text-center mb-4">
              <h3 className="section-title">Why Choose {title}?</h3>
              <p className="section-subtitle">
                Discover the key advantages that make {title} the perfect choice for your business.
              </p>
            </div>
            <Row className="align-items-start">
              <Col lg={8}>
                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <div className="benefit-header">
                        <div className="benefit-check">✓</div>
                        <h4 className="benefit-title">{benefit.title}</h4>
                      </div>
                      <p className="benefit-description">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={4}>
                <div className="benefits-image">
                  <div className="placeholder-image">
                    <span className="placeholder-icon">📊</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="service-cta">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h3 className="cta-title">Ready to Transform Your Business?</h3>
              <p className="cta-description">
                Get started with {title} today and see the difference it can make for your organization.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="cta-button"
              >
                Contact Our Experts
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServiceDetailTemplate;
