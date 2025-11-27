import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('salesforce');
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredIndustryCategory, setHoveredIndustryCategory] = useState('health');
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setShowDropdown(false);
        setShowIndustryDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle dropdown with slight delay to prevent flickering
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setHoveredCategory('salesforce');
  };

  // Handle industry dropdown
  const handleIndustryMouseEnter = () => {
    setShowIndustryDropdown(true);
  };

  const handleIndustryMouseLeave = () => {
    setShowIndustryDropdown(false);
    setHoveredIndustryCategory('health');
  };

  const serviceCategories = {
    salesforce: {
      title: "Salesforce Products",
      services: [
        { name: "Agent Force", path: "/services/salesforce/agentforce" },
        { name: "Sales Cloud", path: "/services/salesforce/sales-cloud" },
        { name: "Service Cloud", path: "/services/salesforce/service-cloud" },
        { name: "Marketing Cloud", path: "/services/salesforce/marketing-cloud" },
        { name: "CLM", path: "/services/salesforce/clm" },
        { name: "Order Management", path: "/services/salesforce/order-management" },
        { name: "CPQ", path: "/services/salesforce/cpq" },
        { name: "MuleSoft", path: "/services/salesforce/mulesoft" }
      ]
    },
    devops: {
      title: "DevOps",
      services: [
        { name: "Copado", path: "/services/devops/copado" },
        { name: "AutoRabbit", path: "/services/devops/autorabbit" },
        { name: "DevOps Center", path: "/services/devops/devops-center" }
      ]
    },
    testing: {
      title: "Testing",
      services: [
        { name: "Playwright Test Automation", path: "/services/testing/playwright" }
      ]
    }
  };

  const industryCategories = {
    health: {
      title: "Health & Insurance Cloud",
      industries: [
        { name: "Payers", path: "/industries/health/payers" },
        { name: "Providers", path: "/industries/health/providers" },
        { name: "Life Insurance", path: "/industries/health/life-insurance" },
        { name: "Property & Casualty", path: "/industries/health/property-casualty" },
        { name: "Health Plans", path: "/industries/health/health-plans" }
      ]
    },
    telecom: {
      title: "Telecommunication Cloud",
      industries: [
        { name: "Mobile Network Operators", path: "/industries/telecom/mobile-operators" },
        { name: "Internet Service Providers", path: "/industries/telecom/isp" },
        { name: "Cable & Satellite", path: "/industries/telecom/cable-satellite" },
        { name: "Unified Communications", path: "/industries/telecom/unified-communications" },
        { name: "Digital Media Services", path: "/industries/telecom/digital-media" }
      ]
    },
    energy: {
      title: "Energy & Utilities Cloud",
      industries: [
        { name: "Oil & Gas", path: "/industries/energy/oil-gas" },
        { name: "Power Utilities", path: "/industries/energy/power-utilities" },
        { name: "Energy Utilities", path: "/industries/energy/energy-utilities" },
        { name: "Renewable Energy", path: "/industries/energy/renewable-energy" }
      ]
    },
    financial: {
      title: "Financial Services Cloud",
      industries: [
        { name: "Retail Banking & Credit Unions", path: "/industries/financial/retail-banking" },
        { name: "Corporate Investment Banking", path: "/industries/financial/investment-banking" },
        { name: "Commercial Banking", path: "/industries/financial/commercial-banking" },
        { name: "Wealth Management", path: "/industries/financial/wealth-management" },
        { name: "Capital Markets", path: "/industries/financial/capital-markets" },
        { name: "Asset Management", path: "/industries/financial/asset-management" }
      ]
    }
  };

  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar" 
      fixed="top"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-text">A1</span>
          <span className="brand-accent">CRM</span>
          <span className="brand-text">Analyst</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            
            {/* Services Dropdown */}
            <div 
              className={`nav-dropdown ${showDropdown ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link 
                as={Link} 
                to="/services" 
                className="dropdown-toggle"
                onClick={(e) => {
                  // On mobile, toggle dropdown on click
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setShowDropdown(!showDropdown);
                  }
                }}
              >
                Services <span className="dropdown-arrow">▼</span>
              </Nav.Link>
              <div className="mega-menu">
                <div className="mega-menu-content">
                  {/* Left Column - Categories */}
                  <div className="categories-column">
                    {Object.entries(serviceCategories).map(([key, category]) => (
                      <div 
                        key={key} 
                        className={`category-item ${hoveredCategory === key ? 'active' : ''}`}
                        data-category={key}
                        onMouseEnter={() => setHoveredCategory(key)}
                      >
                        <span className="category-link">
                          {category.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Column - Services */}
                  <div className="services-column">
                    {Object.entries(serviceCategories).map(([key, category]) => (
                      <div 
                        key={key} 
                        className={`services-list ${hoveredCategory === key ? 'active' : ''}`}
                        data-services={key}
                      >
                        <h6 className="services-title">{category.title}</h6>
                        <ul className="service-items">
                          {category.services.map((service, index) => (
                            <li key={index}>
                              <Link 
                                to={service.path} 
                                className="service-link"
                                onClick={() => setExpanded(false)}
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Industries Dropdown */}
            <div 
              className={`nav-dropdown ${showIndustryDropdown ? 'show' : ''}`}
              onMouseEnter={handleIndustryMouseEnter}
              onMouseLeave={handleIndustryMouseLeave}
            >
              <Nav.Link 
                as={Link} 
                to="/industries" 
                className="dropdown-toggle"
                onClick={(e) => {
                  // On mobile, toggle dropdown on click
                  if (window.innerWidth <= 991) {
                    e.preventDefault();
                    setShowIndustryDropdown(!showIndustryDropdown);
                  }
                }}
              >
                Industries <span className="dropdown-arrow">▼</span>
              </Nav.Link>
              <div className="mega-menu">
                <div className="mega-menu-content">
                  {/* Left Column - Categories */}
                  <div className="categories-column">
                    {Object.entries(industryCategories).map(([key, category]) => (
                      <div 
                        key={key} 
                        className={`category-item ${hoveredIndustryCategory === key ? 'active' : ''}`}
                        data-category={key}
                        onMouseEnter={() => setHoveredIndustryCategory(key)}
                      >
                        <span className="category-link">
                          {category.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Column - Industries */}
                  <div className="services-column">
                    {Object.entries(industryCategories).map(([key, category]) => (
                      <div 
                        key={key} 
                        className={`services-list ${hoveredIndustryCategory === key ? 'active' : ''}`}
                        data-services={key}
                      >
                        <h6 className="services-title">{category.title}</h6>
                        <ul className="service-items">
                          {category.industries.map((industry, index) => (
                            <li key={index}>
                              <Link 
                                to={industry.path} 
                                className="service-link"
                                onClick={() => setExpanded(false)}
                              >
                                {industry.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" onClick={() => setExpanded(false)}>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button 
              as={Link}
              to="/contact"
              variant="outline-light" 
              className="contact-btn"
              onClick={() => setExpanded(false)}
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
