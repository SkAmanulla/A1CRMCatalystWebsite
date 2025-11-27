import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChartLine, FaDatabase, FaRocket, FaCogs } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1 className="hero-title">
              Accelerating Your Customer Growth with 
              <span className="hero-accent"> Smart CRM Solutions</span>
            </h1>
            <p className="hero-description">
              We specialize in Salesforce implementation, data analytics, AI integration, 
              and automation solutions that accelerate your customer growth and drive operational excellence.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <FaChartLine className="stat-icon" />
                <div>
                  <h3>500+</h3>
                  <p>Projects Delivered</p>
                </div>
              </div>
              <div className="stat-item">
                <FaDatabase className="stat-icon" />
                <div>
                  <h3>50M+</h3>
                  <p>Records Analyzed</p>
                </div>
              </div>
              <div className="stat-item">
                <FaRocket className="stat-icon" />
                <div>
                  <h3>99.9%</h3>
                  <p>Uptime Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="hero-buttons">
              <Button className="btn-primary-custom me-3">
                Get Started
              </Button>
              <Button variant="outline-light" className="btn-outline-custom">
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-visual">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                <FaChartLine className="card-icon" />
                <h4>Analytics</h4>
                <p>Real-time insights</p>
              </div>
              <div className="floating-card card-2">
                <FaDatabase className="card-icon" />
                <h4>Data Management</h4>
                <p>Secure & scalable</p>
              </div>
              <div className="floating-card card-3">
                <FaCogs className="card-icon" />
                <h4>Automation</h4>
                <p>Streamlined workflows</p>
              </div>
              <div className="hero-bg-shape"></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default HeroSection;
