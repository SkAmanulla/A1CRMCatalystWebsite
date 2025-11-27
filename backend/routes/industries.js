const express = require('express');
const router = express.Router();
const { getPool, sql } = require('../config/database');

// Get all industries
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
          challenges,
          solutions,
          case_studies,
          compliance_requirements,
          created_at,
          updated_at
        FROM industries 
        WHERE active = 1
        ORDER BY sort_order ASC, title ASC
      `);

    res.json({
      success: true,
      data: result.recordset,
      count: result.recordset.length
    });
  } catch (err) {
    console.error('Error fetching industries:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching industries',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Get industry by ID
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
          challenges,
          solutions,
          case_studies,
          compliance_requirements,
          success_metrics,
          created_at,
          updated_at
        FROM industries 
        WHERE id = @id AND active = 1
      `);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Industry not found'
      });
    }

    res.json({
      success: true,
      data: result.recordset[0]
    });
  } catch (err) {
    console.error('Error fetching industry:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching industry',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Get industry statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .query(`
        SELECT 
          COUNT(*) as total_industries,
          SUM(CASE WHEN active = 1 THEN 1 ELSE 0 END) as active_industries,
          (SELECT COUNT(*) FROM projects WHERE industry_id IS NOT NULL) as total_projects,
          (SELECT AVG(CAST(success_rating as FLOAT)) FROM projects WHERE industry_id IS NOT NULL) as avg_success_rating
        FROM industries
      `);

    res.json({
      success: true,
      data: result.recordset[0]
    });
  } catch (err) {
    console.error('Error fetching industry stats:', err);
    res.status(500).json({
      success: false,
      message: 'Error fetching industry statistics',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

// Create new industry (admin endpoint)
router.post('/', async (req, res) => {
  try {
    const { 
      title, 
      description, 
      icon, 
      features, 
      challenges, 
      solutions,
      compliance_requirements 
    } = req.body;
    
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
      .input('challenges', sql.NVarChar, JSON.stringify(challenges))
      .input('solutions', sql.NVarChar, JSON.stringify(solutions))
      .input('compliance_requirements', sql.NVarChar, JSON.stringify(compliance_requirements))
      .query(`
        INSERT INTO industries (
          title, description, icon, features, challenges, 
          solutions, compliance_requirements, active, created_at, updated_at
        )
        OUTPUT INSERTED.id
        VALUES (
          @title, @description, @icon, @features, @challenges,
          @solutions, @compliance_requirements, 1, GETDATE(), GETDATE()
        )
      `);

    res.status(201).json({
      success: true,
      message: 'Industry created successfully',
      data: { id: result.recordset[0].id }
    });
  } catch (err) {
    console.error('Error creating industry:', err);
    res.status(500).json({
      success: false,
      message: 'Error creating industry',
      error: process.env.NODE_ENV === 'production' ? null : err.message
    });
  }
});

module.exports = router;
