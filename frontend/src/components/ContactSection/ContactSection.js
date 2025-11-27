import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const locations = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@a1crmcatalyst.com"
    },
    {
      city: "Los Angeles",
      address: "456 Tech Boulevard, Floor 12",
      zipCode: "Los Angeles, CA 90210",
      phone: "+1 (555) 987-6543",
      email: "la@a1crmcatalyst.com"
    },
    {
      city: "Chicago",
      address: "789 Innovation Drive, Suite 300",
      zipCode: "Chicago, IL 60601",
      phone: "+1 (555) 456-7890",
      email: "chicago@a1crmcatalyst.com"
    }
  ];

  return (
    <section className="contact-section section">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to transform your business with smart CRM solutions? 
              Contact our experts today for a free consultation.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {locations.map((location, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="location-icon mb-3">
                    <FaMapMarkerAlt />
                  </div>
                  <Card.Title className="location-title">{location.city}</Card.Title>
                  <div className="location-details">
                    <div className="contact-item">
                      <FaMapMarkerAlt className="contact-icon" />
                      <div>
                        <p>{location.address}</p>
                        <p>{location.zipCode}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <p>{location.phone}</p>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <p>{location.email}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="contact-cta">
          <Col lg={8} className="mx-auto">
            <Card className="cta-card">
              <Card.Body className="text-center">
                <div className="cta-content">
                  <div className="cta-icon mb-3">
                    <FaClock />
                  </div>
                  <h3 className="cta-title">Ready to Get Started?</h3>
                  <p className="cta-description">
                    Schedule a free consultation with our CRM experts. We'll analyze your current 
                    processes and provide tailored recommendations for your business growth.
                  </p>
                  <div className="cta-features mb-4">
                    <div className="cta-feature">
                      <span>✓ Free Consultation</span>
                    </div>
                    <div className="cta-feature">
                      <span>✓ Custom Solution Design</span>
                    </div>
                    <div className="cta-feature">
                      <span>✓ ROI Analysis</span>
                    </div>
                    <div className="cta-feature">
                      <span>✓ Implementation Roadmap</span>
                    </div>
                  </div>
                  <div className="cta-buttons">
                    <Button className="btn-primary-custom me-3">
                      Schedule Consultation
                      <FaArrowRight className="ms-2" />
                    </Button>
                    <Button variant="outline-primary" className="btn-outline-primary-custom">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="contact-info mt-5">
          <Col lg={12} className="text-center">
            <div className="business-hours">
              <h4>Business Hours</h4>
              <p>Monday - Friday: 8:00 AM - 6:00 PM (EST)</p>
              <p>Saturday: 9:00 AM - 2:00 PM (EST)</p>
              <p>Sunday: Emergency Support Only</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
