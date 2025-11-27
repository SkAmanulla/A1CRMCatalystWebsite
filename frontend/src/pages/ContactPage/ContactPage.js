import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    reasonForContact: 'Service',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    setShowAlert({ show: false, type: '', message: '' });

    try {
      const response = await axios.post('/api/contact/submit-form', formData);
      
      if (response.data.success) {
        setShowAlert({
          show: true,
          type: 'success',
          message: 'Thank you for your message! We will get back to you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          company: '',
          reasonForContact: 'Service',
          message: ''
        });
        setValidated(false);
      }
    } catch (error) {
      setShowAlert({
        show: true,
        type: 'danger',
        message: error.response?.data?.message || 'An error occurred while submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="contact-hero-title">Talk to our CRM Experts</h1>
              <p className="contact-hero-description">
                We are here to help you with your business and technical inquiries, schedule a discovery call, 
                review your CRM environment, explore our industry-specific solutions, create a tailored 
                implementation plan, or provide expert analysis tailored to meet your unique business needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Global Locations Section */}
      <section className="global-locations">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Global Locations</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4} className="text-center mb-4">
              <div className="location-item">
                <h4>New York</h4>
                <p>123 Business Ave, Suite 500<br />New York, NY 10001</p>
                <p>📞 +1 (555) 123-4567</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="location-item">
                <h4>Los Angeles</h4>
                <p>456 Tech Boulevard, Floor 12<br />Los Angeles, CA 90210</p>
                <p>📞 +1 (555) 987-6543</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="location-item">
                <h4>Chicago</h4>
                <p>789 Innovation Drive, Suite 300<br />Chicago, IL 60601</p>
                <p>📞 +1 (555) 456-7890</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-background">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="contact-form-container">
                  <div className="form-header text-center mb-4">
                    <h2>Connect with us</h2>
                    <p>Ready to elevate your business?<br />
                    Contact us today to discuss how we can help you achieve your goals!</p>
                  </div>

                  {showAlert.show && (
                    <Alert 
                      variant={showAlert.type} 
                      onClose={() => setShowAlert({ show: false, type: '', message: '' })} 
                      dismissible
                    >
                      {showAlert.message}
                    </Alert>
                  )}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="First Name*"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a first name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Last Name*"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a last name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Email Address*"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="form-field"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="form-field"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Select
                            name="reasonForContact"
                            value={formData.reasonForContact}
                            onChange={handleInputChange}
                            className="form-field"
                          >
                            <option value="Service">Service</option>
                            <option value="Partnership">Partnership</option>
                            <option value="General">General</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-4">
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a message.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12} className="text-center">
                        <Button 
                          type="submit" 
                          className="submit-btn"
                          disabled={isSubmitting}
                          size="lg"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
