import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHammer, FaCogs, FaRocket, FaChartLine, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      icon: <FaHammer />,
      title: "We Build",
      description: "Custom Salesforce solutions tailored to your industry needs. From implementation to customization, we create powerful CRM systems that scale with your business.",
      features: ["Custom Development", "System Integration", "UI/UX Design", "Mobile Solutions"]
    },
    {
      icon: <FaCogs />,
      title: "We Operate",
      description: "Deployment and performance optimization of your solutions. We ensure smooth operations with monitoring, maintenance, and continuous improvement.",
      features: ["Performance Tuning", "System Monitoring", "Process Optimization", "Quality Assurance"]
    },
    {
      icon: <FaRocket />,
      title: "We Run",
      description: "Ongoing support and maintenance to keep your systems running at peak performance. 24/7 support with proactive monitoring and updates.",
      features: ["24/7 Support", "Proactive Monitoring", "Regular Updates", "Training & Support"]
    }
  ];

  const capabilities = [
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      description: "Transform data into actionable insights with advanced analytics and reporting solutions."
    },
    {
      icon: <FaDatabase />,
      title: "Data Management",
      description: "Secure, scalable data solutions that ensure integrity and accessibility across your organization."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures with full compliance to industry standards and regulations."
    }
  ];

  return (
    <section className="services-overview section">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We provide end-to-end CRM solutions from planning and development to deployment and ongoing support. 
              Our expertise spans across multiple industries with proven methodologies.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    {service.icon}
                  </div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="capabilities-section">
          <Col lg={12} className="text-center mb-5">
            <h3 className="capabilities-title">Core Capabilities</h3>
          </Col>
          {capabilities.map((capability, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="capability-item">
                <div className="capability-icon">
                  {capability.icon}
                </div>
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesOverview;
