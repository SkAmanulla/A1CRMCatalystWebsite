#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up A1 CRM Analyst project...\n');

// Function to run commands
function runCommand(command, description) {
  console.log(`📦 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed!\n`);
  } catch (error) {
    console.error(`❌ Error during ${description}:`, error.message);
    process.exit(1);
  }
}

// Function to create environment file
function createEnvFile() {
  console.log('📝 Creating environment configuration file...');
  
  const envContent = `# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_SERVER=localhost
DB_DATABASE=a1crmanalyst
DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=1433

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_${Math.random().toString(36).substring(7)}
JWT_EXPIRE=30d

# Email Configuration (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
`;

  const backendEnvPath = path.join(__dirname, 'backend', '.env');
  
  if (!fs.existsSync(backendEnvPath)) {
    fs.writeFileSync(backendEnvPath, envContent);
    console.log('✅ Environment file created at backend/.env');
    console.log('⚠️  Please update the database credentials in backend/.env');
  } else {
    console.log('ℹ️  Environment file already exists, skipping...');
  }
  console.log('');
}

// Main setup process
async function setup() {
  try {
    // Install root dependencies
    runCommand('npm install', 'Installing root dependencies');

    // Install frontend dependencies
    process.chdir('frontend');
    runCommand('npm install', 'Installing frontend dependencies');
    
    // Go back to root
    process.chdir('..');
    
    // Install backend dependencies
    process.chdir('backend');
    runCommand('npm install', 'Installing backend dependencies');
    
    // Go back to root
    process.chdir('..');
    
    // Create environment file
    createEnvFile();
    
    // Success message
    console.log('🎉 Setup completed successfully!\n');
    console.log('Next steps:');
    console.log('1. Set up Microsoft SQL Server');
    console.log('2. Execute database/schema.sql to create the database schema');
    console.log('3. Execute database/sample_data.sql to insert sample data');
    console.log('4. Update database credentials in backend/.env');
    console.log('5. Run "npm run dev" to start the development servers\n');
    
    console.log('🌐 The application will be available at:');
    console.log('   Frontend: http://localhost:3000');
    console.log('   Backend:  http://localhost:5000');
    console.log('   Health:   http://localhost:5000/api/health\n');
    
    console.log('📚 For detailed instructions, see README.md');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
setup();
