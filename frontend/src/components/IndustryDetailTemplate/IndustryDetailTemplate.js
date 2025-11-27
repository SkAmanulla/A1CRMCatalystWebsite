import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './IndustryDetailTemplate.css';

const IndustryDetailTemplate = ({
  title,
  subtitle,
  description,
  icon,
  challenges = [],
  solutions = [],
  capabilities = [],
  successStories = [],
  category = "Industry"
}) => {
  return (
    <div className="industry-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb-section">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/industries">Industries</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="industry-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="industry-hero-content">
                <div className="industry-category-badge">
                  <span className="badge-text">{category}</span>
                </div>
                <h1 className="industry-hero-title">
                  <span className="industry-icon">{icon || '🏢'}</span>
                  {title}
                </h1>
                {subtitle && (
                  <h2 className="industry-hero-subtitle">{subtitle}</h2>
                )}
                <p className="industry-hero-description">
                  {description}
                </p>
                <div className="industry-hero-actions">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="me-3 mb-2 industry-primary-btn"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="mb-2 industry-secondary-btn"
                    href="#solutions"
                  >
                    Explore Solutions
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="industry-hero-visual">
                <div className="industry-graphic">
                  <div className="graphic-background"></div>
                  <div className="graphic-icon">
                    <span className="large-icon">{icon || '🏢'}</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <section className="industry-challenges">
          <Container>
            <div className="text-center mb-5">
              <h3 className="section-title">Industry Challenges</h3>
              <p className="section-subtitle">
                Understanding the key challenges facing the {title.toLowerCase()} industry.
              </p>
            </div>
            <Row>
              {challenges.map((challenge, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <Card className="challenge-card h-100">
                    <Card.Body className="d-flex flex-column">
                      <div className="challenge-icon">{challenge.icon}</div>
                      <Card.Title className="challenge-title">{challenge.title}</Card.Title>
                      <Card.Text className="challenge-description flex-grow-1">
                        {challenge.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Solutions Section */}
      {solutions.length > 0 && (
        <section id="solutions" className="industry-solutions">
          <Container>
            <div className="text-center mb-5">
              <h3 className="section-title">Our Solutions</h3>
              <p className="section-subtitle">
                Tailored Salesforce solutions to transform your {title.toLowerCase()} operations.
              </p>
            </div>
            <Row>
              {solutions.map((solution, index) => (
                <Col lg={6} key={index} className="mb-4">
                  <div className="solution-item">
                    <div className="solution-header">
                      <div className="solution-icon">{solution.icon}</div>
                      <h4 className="solution-title">{solution.title}</h4>
                    </div>
                    <p className="solution-description">{solution.description}</p>
                    <ul className="solution-features">
                      {solution.features?.map((feature, fIndex) => (
                        <li key={fIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Capabilities Section */}
      {capabilities.length > 0 && (
        <section className="industry-capabilities">
          <Container>
            <div className="text-center mb-5">
              <h3 className="section-title">Platform Capabilities</h3>
              <p className="section-subtitle">
                Comprehensive features designed specifically for {title.toLowerCase()}.
              </p>
            </div>
            <Row>
              <Col lg={8}>
                <div className="capabilities-list">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="capability-item">
                      <div className="capability-header">
                        <div className="capability-number">{index + 1}</div>
                        <h4 className="capability-title">{capability.title}</h4>
                      </div>
                      <p className="capability-description">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={4}>
                <div className="capabilities-visual">
                  <div className="visual-container">
                    <div className="visual-circle"></div>
                    <div className="visual-icon">
                      <span>{icon || '🏢'}</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Success Stories Section */}
      {successStories.length > 0 && (
        <section className="industry-success">
          <Container>
            <div className="text-center mb-5">
              <h3 className="section-title">Success Stories</h3>
              <p className="section-subtitle">
                Real results from organizations in the {title.toLowerCase()} sector.
              </p>
            </div>
            <Row>
              {successStories.map((story, index) => (
                <Col lg={4} key={index} className="mb-4">
                  <Card className="success-card h-100">
                    <Card.Body>
                      <div className="success-metric">{story.metric}</div>
                      <Card.Title className="success-title">{story.title}</Card.Title>
                      <Card.Text className="success-description">
                        {story.description}
                      </Card.Text>
                      <div className="success-company">{story.company}</div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="industry-cta">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 className="cta-title">Ready to Transform Your {title}?</h3>
              <p className="cta-description">
                Let's discuss how Salesforce can drive innovation and growth in your organization.
              </p>
              <div className="cta-actions">
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="light" 
                  size="lg"
                  className="cta-btn me-3"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="cta-btn-secondary"
                >
                  Download Case Study
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default IndustryDetailTemplate;
