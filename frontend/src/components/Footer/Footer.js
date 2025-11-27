import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h3 className="brand-logo">
                <span className="brand-text">A1</span>
                <span className="brand-accent">CRM</span>
                <span className="brand-text">Catalyst</span>
              </h3>
              <p className="footer-description">
                Accelerating your customer growth with intelligent CRM solutions, data analytics, 
                and automation technologies. Your success is our mission.
              </p>
              <div className="social-links">
                <a href="https://facebook.com/a1crmcatalyst" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/a1crmcatalyst" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/company/a1crmcatalyst" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com/a1crmcatalyst" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
                <li><a href="/services#crm-implementation">CRM Implementation</a></li>
                <li><a href="/services#data-analytics">Data Analytics</a></li>
                <li><a href="/services#system-integration">System Integration</a></li>
                <li><a href="/services#training-support">Training & Support</a></li>
                <li><a href="/services#consulting">Consulting</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Industries</h5>
              <ul className="footer-links">
                <li><a href="/industries#financial-services">Financial Services</a></li>
                <li><a href="/industries#healthcare">Healthcare</a></li>
                <li><a href="/industries#public-sector">Public Sector</a></li>
                <li><a href="/industries#retail">Retail</a></li>
                <li><a href="/industries#education">Education</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Contact</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Business Ave<br />New York, NY 10001</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@a1crmcatalyst.com</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row>
          <Col lg={6} className="mb-3">
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <span className="separator">|</span>
              <a href="/cookies" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </Col>
          <Col lg={6} className="mb-3">
            <div className="copyright">
              <p>&copy; 2024 A1 CRM Analyst. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
