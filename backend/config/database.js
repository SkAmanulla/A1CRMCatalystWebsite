const sql = require('mssql');

const config = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'password',
  server: process.env.DB_SERVER || 'localhost',
  database: process.env.DB_DATABASE || 'a1crmanalyst',
  port: parseInt(process.env.DB_PORT) || 1433,
  options: {
    encrypt: true, // Use this if you're on Windows Azure
    trustServerCertificate: true, // Use this if you're using self-signed certificates
    enableArithAbort: true,
    connectionTimeout: 30000,
    requestTimeout: 30000
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

let poolPromise;

const getPool = () => {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(config)
      .connect()
      .then(pool => {
        console.log('✅ Connected to MS SQL Server');
        return pool;
      })
      .catch(err => {
        console.error('❌ Database Connection Error:', err.message);
        poolPromise = null; // Reset so we can try again
        throw err;
      });
  }
  return poolPromise;
};

const closePool = async () => {
  try {
    if (poolPromise) {
      const pool = await poolPromise;
      await pool.close();
      poolPromise = null;
      console.log('🔐 Database connection closed');
    }
  } catch (err) {
    console.error('❌ Error closing database connection:', err.message);
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

module.exports = { getPool, sql, closePool };
