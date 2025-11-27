const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Mock data for demonstration (since database is not connected)
const mockServices = [
  {
    id: 1,
    title: "We Build",
    description: "Custom Salesforce solutions tailored to your industry needs. From implementation to customization, we create powerful CRM systems that scale with your business.",
    icon: "FaHammer",
    features: ["Custom Development", "System Integration", "UI/UX Design", "Mobile Solutions"],
    category: "Implementation"
  },
  {
    id: 2,
    title: "We Operate",
    description: "Deployment and performance optimization of your solutions. We ensure smooth operations with monitoring, maintenance, and continuous improvement.",
    icon: "FaCogs",
    features: ["Performance Tuning", "System Monitoring", "Process Optimization", "Quality Assurance"],
    category: "Operations"
  },
  {
    id: 3,
    title: "We Run",
    description: "Ongoing support and maintenance to keep your systems running at peak performance. 24/7 support with proactive monitoring and updates.",
    icon: "FaRocket",
    features: ["24/7 Support", "Proactive Monitoring", "Regular Updates", "Training & Support"],
    category: "Support"
  }
];

const mockIndustries = [
  {
    id: 1,
    title: "Financial Services",
    description: "Comprehensive CRM solutions for banks, insurance companies, and financial institutions with regulatory compliance and security.",
    icon: "FaUniversity",
    features: ["Risk Management", "Compliance Tracking", "Customer Onboarding", "Portfolio Management"]
  },
  {
    id: 2,
    title: "Healthcare", 
    description: "HIPAA-compliant CRM systems for healthcare providers, enabling better patient relationships and care coordination.",
    icon: "FaHeartbeat",
    features: ["Patient Management", "HIPAA Compliance", "Care Coordination", "Medical Records Integration"]
  },
  {
    id: 3,
    title: "Public Sector",
    description: "Government-grade solutions that improve citizen services and streamline public administration processes.",
    icon: "FaBuilding",
    features: ["Citizen Services", "Case Management", "Transparency Tools", "Multi-departmental Integration"]
  }
];

const mockLocations = [
  {
    id: 1,
    city: "New York",
    address: "123 Business Ave, Suite 500",
    zipCode: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@a1crmcatalyst.com"
  },
  {
    id: 2,
    city: "Los Angeles",
    address: "456 Tech Boulevard, Floor 12",
    zipCode: "Los Angeles, CA 90210",
    phone: "+1 (555) 987-6543",
    email: "la@a1crmcatalyst.com"
  },
  {
    id: 3,
    city: "Chicago",
    address: "789 Innovation Drive, Suite 300",
    zipCode: "Chicago, IL 60601",
    phone: "+1 (555) 456-7890",
    email: "chicago@a1crmcatalyst.com"
  }
];

// Routes
// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'A1 CRM Analyst API is running (Demo Mode)',
    timestamp: new Date().toISOString(),
    nodeVersion: process.version
  });
});

// Services endpoints
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    data: mockServices,
    count: mockServices.length
  });
});

app.get('/api/services/:id', (req, res) => {
  const service = mockServices.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Service not found'
    });
  }
  res.json({
    success: true,
    data: service
  });
});

// Industries endpoints
app.get('/api/industries', (req, res) => {
  res.json({
    success: true,
    data: mockIndustries,
    count: mockIndustries.length
  });
});

app.get('/api/industries/:id', (req, res) => {
  const industry = mockIndustries.find(i => i.id === parseInt(req.params.id));
  if (!industry) {
    return res.status(404).json({
      success: false,
      message: 'Industry not found'
    });
  }
  res.json({
    success: true,
    data: industry
  });
});

// Contact endpoints
app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    data: mockLocations,
    count: mockLocations.length
  });
});

app.post('/api/contact/submit', (req, res) => {
  const { first_name, last_name, email, message } = req.body;
  
  if (!first_name || !last_name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, email, and message are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Simulate successful submission
  res.status(201).json({
    success: true,
    message: 'Thank you for your inquiry! We will get back to you within 24 hours. (Demo Mode - No email sent)',
    data: { inquiry_id: Math.floor(Math.random() * 1000) + 1 }
  });
});

app.post('/api/contact/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email is required'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  res.status(201).json({
    success: true,
    message: 'Successfully subscribed to our newsletter! (Demo Mode)',
    data: { subscriber_id: Math.floor(Math.random() * 1000) + 1 }
  });
});

// Contact form submission endpoint
app.post('/api/contact/submit-form', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    company,
    reasonForContact,
    message
  } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !message || !reasonForContact) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, email, reason for contact, and message are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Validate reason for contact
  const validReasons = ['Service', 'Partnership', 'General'];
  if (!validReasons.includes(reasonForContact)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid reason for contact'
    });
  }

  // Generate a GUID-like ID for demo purposes
  const generateGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const contactId = generateGUID();

  // Log the contact submission (since we're in demo mode)
  console.log('🆕 New Contact Form Submission:');
  console.log('ID:', contactId);
  console.log('Name:', `${firstName} ${lastName}`);
  console.log('Email:', email);
  console.log('Company:', company || 'Not provided');
  console.log('Phone:', phoneNumber || 'Not provided');
  console.log('Reason:', reasonForContact);
  console.log('Message:', message);
  console.log('Submitted at:', new Date().toISOString());
  console.log('---');

  // Simulate successful database insertion
  res.status(201).json({
    success: true,
    message: 'Thank you for your inquiry! We will get back to you within 24 hours. (Demo Mode - No database connected)',
    data: { 
      contact_id: contactId,
      status: 'new',
      submitted_at: new Date().toISOString()
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err.message 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 A1 CRM Analyst API ready (Demo Mode)`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`⚡ Node.js version: ${process.version}`);
  console.log('📝 Note: Database not connected - using mock data for demonstration');
});
