import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaRocket, FaUsers, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import axios from 'axios';
import './CareersPage.css';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    linkedin: '',
    city: '',
    state: '',
    country: '',
    resumeUrl: '',
    positionInterest: '',
    experienceYears: ''
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
      const response = await axios.post('/api/careers/submit', formData);
      
      if (response.data.success) {
        setShowAlert({
          show: true,
          type: 'success',
          message: 'Thank you for your application! Our HR team will reach out to you shortly.'
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          linkedin: '',
          city: '',
          state: '',
          country: '',
          resumeUrl: '',
          positionInterest: '',
          experienceYears: ''
        });
        setValidated(false);
      }
    } catch (error) {
      setShowAlert({
        show: true,
        type: 'danger',
        message: error.response?.data?.message || 'An error occurred while submitting your application. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const salesforcePositions = [
    'Salesforce Developer',
    'Salesforce Administrator', 
    'Salesforce Architect',
    'Salesforce Consultant',
    'Salesforce Business Analyst',
    'DevOps Engineer (Salesforce)',
    'QA Engineer (Salesforce)',
    'Project Manager (Salesforce)',
    'Technical Lead (Salesforce)',
    'Other'
  ];

  const experienceOptions = [
    '0-1 years',
    '1-3 years',
    '3-5 years', 
    '5-8 years',
    '8-12 years',
    '12+ years'
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="careers-hero-title">Join Our Team</h1>
              <p className="careers-hero-description">
                Ready to accelerate your career in Salesforce? We have several exciting opportunities 
                available for talented professionals who are passionate about CRM analysis and innovation.
                If you're interested, fill out the form below and let's start the conversation!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Why Work With Us?</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3} className="text-center mb-4">
              <div className="opportunity-card">
                <FaRocket className="opportunity-icon" />
                <h4>Innovation First</h4>
                <p>Work with cutting-edge Salesforce technologies and innovative solutions</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="opportunity-card">
                <FaUsers className="opportunity-icon" />
                <h4>Great Team</h4>
                <p>Collaborate with industry experts and passionate professionals</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="opportunity-card">
                <FaLightbulb className="opportunity-icon" />
                <h4>Growth Opportunities</h4>
                <p>Advance your career with mentorship and continuous learning</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="opportunity-card">
                <FaGraduationCap className="opportunity-icon" />
                <h4>Certifications</h4>
                <p>Support for Salesforce certifications and professional development</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Available Positions */}
      <section className="positions-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Current Opportunities</h2>
              <p className="section-subtitle">We're looking for talented individuals across various Salesforce roles</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {salesforcePositions.slice(0, 6).map((position, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="position-card h-100">
                  <Card.Body className="text-center">
                    <Card.Title>{position}</Card.Title>
                    <Card.Text>
                      Join our dynamic team and work on exciting projects across various industries.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="application-form-section">
        <div className="application-form-background">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="application-form-container">
                  <div className="form-header text-center mb-4">
                    <h2>Apply Now</h2>
                    <p>Take the first step towards an exciting career with us!<br />
                    Fill out the application form below and we'll get in touch.</p>
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
                            Please provide your first name.
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
                            Please provide your last name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
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
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="tel"
                            placeholder="Mobile Number*"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your mobile number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="url"
                            placeholder="LinkedIn Profile URL"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            className="form-field"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="City*"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your city.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="State/Province*"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your state/province.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Country*"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your country.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="url"
                            placeholder="Resume/Website URL*"
                            name="resumeUrl"
                            value={formData.resumeUrl}
                            onChange={handleInputChange}
                            required
                            className="form-field"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a link to your resume or professional website.
                          </Form.Control.Feedback>
                          <Form.Text className="text-muted">
                            Share a link to your resume (Google Drive, Dropbox, LinkedIn, personal website, etc.)
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Select
                            name="positionInterest"
                            value={formData.positionInterest}
                            onChange={handleInputChange}
                            className="form-field"
                          >
                            <option value="">Position of Interest</option>
                            {salesforcePositions.map((position, index) => (
                              <option key={index} value={position}>{position}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Select
                            name="experienceYears"
                            value={formData.experienceYears}
                            onChange={handleInputChange}
                            className="form-field"
                          >
                            <option value="">Salesforce Experience</option>
                            {experienceOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </Form.Select>
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
                          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
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

export default CareersPage;

