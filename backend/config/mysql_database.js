const mysql = require('mysql2/promise');

const config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'a1crmanalyst',
  port: parseInt(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
  charset: 'utf8mb4',
  timezone: '+00:00'
};

let pool;

const getPool = () => {
  if (!pool) {
    pool = mysql.createPool(config);
    console.log('✅ MySQL connection pool created');
    
    // Test the connection
    pool.getConnection()
      .then(connection => {
        console.log('✅ Connected to MySQL database');
        connection.release();
      })
      .catch(err => {
        console.error('❌ MySQL Connection Error:', err.message);
        console.error('Please check your MySQL server and credentials');
      });
  }
  return pool;
};

const closePool = async () => {
  try {
    if (pool) {
      await pool.end();
      pool = null;
      console.log('🔐 MySQL connection pool closed');
    }
  } catch (err) {
    console.error('❌ Error closing MySQL connection pool:', err.message);
  }
};

// Helper function to execute queries
const executeQuery = async (query, params = []) => {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(query, params);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  await closePool();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await closePool();
  process.exit(0);
});

module.exports = { getPool, executeQuery, closePool };

