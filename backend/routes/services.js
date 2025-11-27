const express = require('express');
const router = express.Router();
const { getPool, sql } = require('../config/database');

// Get all services
router.get('/', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .query(`
        SELECT 
          id,
          title,
          description,
          icon,
          features,
          category,
          created_at,
          updated_at
        FROM services 
        WHERE active = 1
        ORDER BY sort_order ASC, title ASC
      `);

    res.json({
      success: true,
      data: result.recordset,
      count: result.recordset.length
    });
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching services',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Get service by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getPool();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(`
        SELECT 
          id,
          title,
          description,
          icon,
          features,
          category,
          detailed_description,
          benefits,
          technologies,
          case_studies,
          created_at,
          updated_at
        FROM services 
        WHERE id = @id AND active = 1
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: result.recordset[0]
    });
  } catch (err) {
    console.error('Error fetching service:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching service',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Create new service (admin endpoint)
router.post('/', async (req, res) => {
  try {
    const { title, description, icon, features, category, detailed_description, benefits, technologies } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title and description are required'
      });
    }

    const pool = await getPool();
    const result = await pool.request()
      .input('title', sql.NVarChar, title)
      .input('description', sql.NVarChar, description)
      .input('icon', sql.NVarChar, icon)
      .input('features', sql.NVarChar, JSON.stringify(features))
      .input('category', sql.NVarChar, category)
      .input('detailed_description', sql.NVarChar, detailed_description)
      .input('benefits', sql.NVarChar, JSON.stringify(benefits))
      .input('technologies', sql.NVarChar, JSON.stringify(technologies))
      .query(`
        INSERT INTO services (
          title, description, icon, features, category, 
          detailed_description, benefits, technologies, 
          active, created_at, updated_at
        )
        OUTPUT INSERTED.id
        VALUES (
          @title, @description, @icon, @features, @category,
          @detailed_description, @benefits, @technologies,
          1, GETDATE(), GETDATE()
        )
      `);

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: { id: result.recordset[0].id }
    });
  } catch (err) {
    console.error('Error creating service:', err);
    res.status(500).json({
      success: false,
      message: 'Error creating service',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

module.exports = router;
