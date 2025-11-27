const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { executeQuery } = require('./config/mysql_database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Mock data fallback (same as server-simple.js)
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

// Routes
// Health check endpoint
app.get('/api/health', async (req, res) => {
  let dbStatus = 'Not connected';
  let dbType = 'None';
  
  try {
    await executeQuery('SELECT 1 as test');
    dbStatus = 'Connected';
    dbType = 'MySQL';
  } catch (error) {
    dbStatus = 'Demo Mode';
    dbType = 'Mock Data';
  }

  res.json({ 
    status: 'OK', 
    message: 'A1 CRM Analyst API is running',
    database: dbStatus,
    dbType: dbType,
    timestamp: new Date().toISOString(),
    nodeVersion: process.version
  });
});

// Services endpoints
app.get('/api/services', async (req, res) => {
  try {
    const services = await executeQuery(`
      SELECT 
        id, title, description, icon, 
        features, category, created_at, updated_at
      FROM services 
      WHERE active = TRUE
      ORDER BY sort_order ASC, title ASC
    `);

    // Parse JSON fields
    const parsedServices = services.map(service => ({
      ...service,
      features: typeof service.features === 'string' ? JSON.parse(service.features) : service.features
    }));

    res.json({
      success: true,
      data: parsedServices,
      count: parsedServices.length
    });
  } catch (error) {
    // Fallback to mock data
    console.log('Using mock services data');
    res.json({
      success: true,
      data: mockServices,
      count: mockServices.length
    });
  }
});

// Industries endpoints  
app.get('/api/industries', async (req, res) => {
  try {
    const industries = await executeQuery(`
      SELECT 
        id, title, description, icon, features, created_at, updated_at
      FROM industries 
      WHERE active = TRUE
      ORDER BY sort_order ASC, title ASC
    `);

    // Parse JSON fields
    const parsedIndustries = industries.map(industry => ({
      ...industry,
      features: typeof industry.features === 'string' ? JSON.parse(industry.features) : industry.features
    }));

    res.json({
      success: true,
      data: parsedIndustries,
      count: parsedIndustries.length
    });
  } catch (error) {
    // Fallback to mock data
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

    console.log('Using mock industries data');
    res.json({
      success: true,
      data: mockIndustries,
      count: mockIndustries.length
    });
  }
});

// Contact locations endpoint
app.get('/api/contact', async (req, res) => {
  try {
    const locations = await executeQuery(`
      SELECT 
        id, location_name as city, address, 
        CONCAT(city, ', ', state, ' ', zip_code) as zipCode,
        phone, email, created_at, updated_at
      FROM contact_locations 
      WHERE active = TRUE
      ORDER BY is_headquarters DESC, location_name ASC
    `);

    res.json({
      success: true,
      data: locations,
      count: locations.length
    });
  } catch (error) {
    // Fallback to mock data
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

    console.log('Using mock contact locations data');
    res.json({
      success: true,
      data: mockLocations,
      count: mockLocations.length
    });
  }
});

// Contact form submission endpoint
app.post('/api/contact/submit-form', async (req, res) => {
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

  try {
    // Try to insert into MySQL database
    const result = await executeQuery(`
      INSERT INTO tblcontacts (
        first_name, last_name, email, phone_number, company, 
        reason_for_contact, message, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, 'new', NOW(), NOW())
    `, [firstName, lastName, email, phoneNumber || null, company || null, reasonForContact, message]);

    console.log('🆕 Contact Form Stored in Database:');
    console.log('Name:', `${firstName} ${lastName}`);
    console.log('Email:', email);
    console.log('Company:', company || 'Not provided');
    console.log('Reason:', reasonForContact);
    console.log('Submitted at:', new Date().toISOString());
    console.log('---');

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      data: { 
        status: 'new',
        submitted_at: new Date().toISOString(),
        database: 'MySQL'
      }
    });

  } catch (error) {
    console.error('Database insert failed:', error.message);
    
    // Fallback to demo mode
    const generateGUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    const contactId = generateGUID();

    console.log('🆕 Contact Form Submission (Demo Mode):');
    console.log('ID:', contactId);
    console.log('Name:', `${firstName} ${lastName}`);
    console.log('Email:', email);
    console.log('Company:', company || 'Not provided');
    console.log('Phone:', phoneNumber || 'Not provided');
    console.log('Reason:', reasonForContact);
    console.log('Message:', message);
    console.log('Submitted at:', new Date().toISOString());
    console.log('---');

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours. (Demo Mode - No database connected)',
      data: { 
        contact_id: contactId,
        status: 'new',
        submitted_at: new Date().toISOString(),
        database: 'Demo Mode'
      }
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/contact/newsletter', async (req, res) => {
  const { email, first_name, last_name } = req.body;

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

  try {
    // Try to insert into database
    await executeQuery(`
      INSERT INTO newsletter_subscribers (email, first_name, last_name, status, created_at, updated_at)
      VALUES (?, ?, ?, 'active', NOW(), NOW())
      ON DUPLICATE KEY UPDATE updated_at = NOW()
    `, [email, first_name || null, last_name || null]);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      database: 'MySQL'
    });
  } catch (error) {
    console.log('Newsletter signup (demo mode):', email);
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter! (Demo Mode)',
      database: 'Demo Mode'
    });
  }
});

// Career application submission endpoint
app.post('/api/careers/submit', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    linkedin,
    city,
    state,
    country,
    resumeUrl,
    positionInterest,
    experienceYears
  } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !mobile || !city || !state || !country || !resumeUrl) {
    return res.status(400).json({
      success: false,
      message: 'First name, last name, email, mobile, city, state, country, and resume URL are required'
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

  // URL validation for resume
  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (!urlRegex.test(resumeUrl)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid resume URL format'
    });
  }

  try {
    // Try to insert into MySQL database
    const result = await executeQuery(`
      INSERT INTO tblcareers (
        first_name, last_name, email, mobile, linkedin, city, state, country,
        resume_url, position_interest, experience_years, status, application_source,
        created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', 'website', NOW(), NOW())
    `, [
      firstName, 
      lastName, 
      email, 
      mobile, 
      linkedin || null, 
      city, 
      state, 
      country, 
      resumeUrl,
      positionInterest || null,
      experienceYears || null
    ]);

    console.log('🆕 Career Application Submitted:');
    console.log('Name:', `${firstName} ${lastName}`);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('Location:', `${city}, ${state}, ${country}`);
    console.log('Resume URL:', resumeUrl);
    console.log('Position Interest:', positionInterest || 'General');
    console.log('Experience:', experienceYears ? `${experienceYears} years` : 'Not specified');
    console.log('Submitted at:', new Date().toISOString());
    console.log('---');

    res.status(201).json({
      success: true,
      message: 'Thank you for your application! Our HR team will reach out to you shortly.',
      data: { 
        status: 'new',
        submitted_at: new Date().toISOString(),
        database: 'MySQL'
      }
    });

  } catch (error) {
    console.error('Career application database insert failed:', error.message);
    
    // Fallback to demo mode
    const generateGUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    const applicationId = generateGUID();

    console.log('🆕 Career Application Submission (Demo Mode):');
    console.log('ID:', applicationId);
    console.log('Name:', `${firstName} ${lastName}`);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('LinkedIn:', linkedin || 'Not provided');
    console.log('Location:', `${city}, ${state}, ${country}`);
    console.log('Resume URL:', resumeUrl);
    console.log('Position Interest:', positionInterest || 'General');
    console.log('Experience:', experienceYears ? `${experienceYears} years` : 'Not specified');
    console.log('Submitted at:', new Date().toISOString());
    console.log('---');

    res.status(201).json({
      success: true,
      message: 'Thank you for your application! Our HR team will reach out to you shortly. (Demo Mode - No database connected)',
      data: { 
        application_id: applicationId,
        status: 'new',
        submitted_at: new Date().toISOString(),
        database: 'Demo Mode'
      }
    });
  }
});

// Get career applications statistics (admin endpoint)
app.get('/api/careers/stats', async (req, res) => {
  try {
    const stats = await executeQuery(`
      SELECT 
        COUNT(*) as total_applications,
        SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new_applications,
        SUM(CASE WHEN status = 'in_review' THEN 1 ELSE 0 END) as in_review_applications,
        SUM(CASE WHEN status = 'interview_scheduled' THEN 1 ELSE 0 END) as interview_scheduled,
        SUM(CASE WHEN status = 'hired' THEN 1 ELSE 0 END) as hired,
        SUM(CASE WHEN created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 ELSE 0 END) as applications_last_30_days
      FROM tblcareers
    `);

    res.json({
      success: true,
      data: stats[0]
    });
  } catch (error) {
    console.error('Error fetching career stats:', error);
    // Return mock stats in demo mode
    res.json({
      success: true,
      data: {
        total_applications: 0,
        new_applications: 0,
        in_review_applications: 0,
        interview_scheduled: 0,
        hired: 0,
        applications_last_30_days: 0,
        database: 'Demo Mode'
      }
    });
  }
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
  console.log(`📊 A1 CRM Analyst API ready (MySQL + Demo Mode)`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`⚡ Node.js version: ${process.version}`);
  console.log('📝 Note: Falls back to demo mode if MySQL is not available');
});

