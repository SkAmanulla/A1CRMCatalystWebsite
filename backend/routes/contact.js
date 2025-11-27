const express = require('express');
const router = express.Router();
const { getPool, sql } = require('../config/database');

// Get all contact information
router.get('/', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .query(`
        SELECT 
          id,
          location_name,
          address,
          city,
          state,
          zip_code,
          country,
          phone,
          email,
          business_hours,
          timezone,
          is_headquarters,
          created_at,
          updated_at
        FROM contact_locations 
        WHERE active = 1
        ORDER BY is_headquarters DESC, location_name ASC
      `);

    res.json({
      success: true,
      data: result.recordset,
      count: result.recordset.length
    });
  } catch (err) {
    console.error('Error fetching contact information:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact information',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      company,
      job_title,
      industry,
      message,
      service_interest,
      preferred_contact_method,
      budget_range
    } = req.body;

    // Validation
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

    const pool = await getPool();
    const result = await pool.request()
      .input('first_name', sql.NVarChar, first_name)
      .input('last_name', sql.NVarChar, last_name)
      .input('email', sql.NVarChar, email)
      .input('phone', sql.NVarChar, phone)
      .input('company', sql.NVarChar, company)
      .input('job_title', sql.NVarChar, job_title)
      .input('industry', sql.NVarChar, industry)
      .input('message', sql.NVarChar, message)
      .input('service_interest', sql.NVarChar, service_interest)
      .input('preferred_contact_method', sql.NVarChar, preferred_contact_method)
      .input('budget_range', sql.NVarChar, budget_range)
      .query(`
        INSERT INTO contact_inquiries (
          first_name, last_name, email, phone, company, job_title,
          industry, message, service_interest, preferred_contact_method,
          budget_range, status, created_at, updated_at
        )
        OUTPUT INSERTED.id
        VALUES (
          @first_name, @last_name, @email, @phone, @company, @job_title,
          @industry, @message, @service_interest, @preferred_contact_method,
          @budget_range, 'new', GETDATE(), GETDATE()
        )
      `);

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user

    res.status(201).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      data: { inquiry_id: result.recordset[0].id }
    });

  } catch (err) {
    console.error('Error submitting contact form:', err);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form. Please try again later.',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Subscribe to newsletter
router.post('/newsletter', async (req, res) => {
  try {
    const { email, first_name, last_name } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
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

    const pool = await getPool();
    
    // Check if email already exists
    const existingSubscriber = await pool.request()
      .input('email', sql.NVarChar, email)
      .query('SELECT id FROM newsletter_subscribers WHERE email = @email');

    if (existingSubscriber.recordset.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Email is already subscribed to our newsletter'
      });
    }

    const result = await pool.request()
      .input('email', sql.NVarChar, email)
      .input('first_name', sql.NVarChar, first_name)
      .input('last_name', sql.NVarChar, last_name)
      .query(`
        INSERT INTO newsletter_subscribers (email, first_name, last_name, status, created_at, updated_at)
        OUTPUT INSERTED.id
        VALUES (@email, @first_name, @last_name, 'active', GETDATE(), GETDATE())
      `);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
      data: { subscriber_id: result.recordset[0].id }
    });

  } catch (err) {
    console.error('Error subscribing to newsletter:', err);
    res.status(500).json({
      success: false,
      message: 'Error subscribing to newsletter. Please try again later.',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Get contact form statistics (admin endpoint)
router.get('/stats', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .query(`
        SELECT 
          COUNT(*) as total_inquiries,
          SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new_inquiries,
          SUM(CASE WHEN status = 'in_progress' THEN 1 ELSE 0 END) as in_progress_inquiries,
          SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed_inquiries,
          SUM(CASE WHEN created_at >= DATEADD(day, -30, GETDATE()) THEN 1 ELSE 0 END) as inquiries_last_30_days,
          (SELECT COUNT(*) FROM newsletter_subscribers WHERE status = 'active') as newsletter_subscribers
        FROM contact_inquiries
      `);

    res.json({
      success: true,
      data: result.recordset[0]
    });
  } catch (err) {
    console.error('Error fetching contact stats:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact statistics',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

module.exports = router;
