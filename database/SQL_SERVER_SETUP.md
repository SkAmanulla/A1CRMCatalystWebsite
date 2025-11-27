# SQL Server Setup Guide for A1 CRM Analyst

This guide will help you set up Microsoft SQL Server for your A1 CRM Analyst project.

## Option 1: SQL Server Express (Free, Recommended for Development)

### Step 1: Download SQL Server Express
1. Visit: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
2. Click "Download now" under "Express" (it's free)
3. Run the downloaded installer

### Step 2: Installation
1. Choose "Custom" installation
2. Download and install SQL Server Installation Center
3. In the Installation Center, click "Installation" → "New SQL Server stand-alone installation"
4. Accept the license terms
5. Choose "Express" edition
6. **Important Settings:**
   - Instance Configuration: Choose "Default instance" or name it "SQLEXPRESS"
   - Server Configuration: 
     - SQL Server Database Engine: Set to "Automatic" startup
     - SQL Server Browser: Set to "Automatic" startup
   - Database Engine Configuration:
     - Authentication Mode: Choose "Mixed Mode"
     - Set a strong password for the 'sa' account (remember this!)
     - Add your Windows account as a SQL Server administrator

### Step 3: Download SQL Server Management Studio (SSMS)
1. Visit: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms
2. Download and install SSMS (free)

### Step 4: Test Connection
1. Open SQL Server Management Studio
2. Connect to your SQL Server instance:
   - Server name: `localhost\SQLEXPRESS` (or just `localhost` if default instance)
   - Authentication: SQL Server Authentication
   - Login: `sa`
   - Password: (the password you set during installation)

## Option 2: SQL Server Developer Edition (Free, Full Features)

### Step 1: Download SQL Server Developer
1. Visit: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
2. Click "Download now" under "Developer" (it's free but requires registration)

### Step 2: Follow similar installation steps as Express
- Choose "Developer" edition instead of "Express"
- Same configuration settings apply

## Option 3: Docker (Cross-Platform)

If you prefer Docker:

```bash
# Pull SQL Server Docker image
docker pull mcr.microsoft.com/mssql/server:2022-latest

# Run SQL Server container
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourStrong!Passw0rd" \
   -p 1433:1433 --name sql1 --hostname sql1 \
   -d mcr.microsoft.com/mssql/server:2022-latest
```

## Setting Up the A1 CRM Analyst Database

### Step 1: Connect to SQL Server
Using SSMS or your preferred SQL client, connect to your SQL Server instance.

### Step 2: Create the Database
Execute the schema script:

1. Open `database/schema.sql` in SSMS
2. Execute the entire script (F5)
3. This will create the `a1crmanalyst` database and all tables

### Step 3: Insert Sample Data
Execute the sample data script:

1. Open `database/sample_data.sql` in SSMS  
2. Execute the entire script (F5)
3. This will populate your database with sample data

### Step 4: Update Backend Configuration

Create a `.env` file in the `backend` folder:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_SERVER=localhost
# DB_SERVER=localhost\SQLEXPRESS  # If using named instance
DB_DATABASE=a1crmanalyst
DB_USER=sa
DB_PASSWORD=YourStrong!Passw0rd  # Replace with your actual password
DB_PORT=1433

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_demo123
JWT_EXPIRE=30d
```

## Verify Database Setup

### Check Tables
Run this query to verify all tables are created:

```sql
USE a1crmcatalyst;

SELECT TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_TYPE = 'BASE TABLE'
ORDER BY TABLE_NAME;
```

### Check Contact Form Table
Run this query to see the tblcontacts structure:

```sql
USE a1crmcatalyst;

SELECT 
    COLUMN_NAME,
    DATA_TYPE,
    IS_NULLABLE,
    COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'tblcontacts'
ORDER BY ORDINAL_POSITION;
```

### Test Sample Data
```sql
USE a1crmcatalyst;

-- Check contact form submissions
SELECT COUNT(*) as ContactSubmissions FROM tblcontacts;

-- View sample contacts
SELECT 
    id,
    first_name + ' ' + last_name as FullName,
    email,
    company,
    reason_for_contact,
    status,
    created_at
FROM tblcontacts
ORDER BY created_at DESC;
```

## Common Connection Issues

### Issue: "Cannot connect to server"
**Solutions:**
1. Ensure SQL Server service is running:
   - Open Services (services.msc)
   - Look for "SQL Server (SQLEXPRESS)" or "SQL Server (MSSQLSERVER)"
   - Make sure it's "Running"

2. Check SQL Server Browser is running (for named instances)

3. Enable TCP/IP protocol:
   - Open "SQL Server Configuration Manager"
   - Go to "SQL Server Network Configuration" → "Protocols for SQLEXPRESS"
   - Enable "TCP/IP"
   - Restart SQL Server service

### Issue: "Login failed for user 'sa'"
**Solutions:**
1. Verify Mixed Mode authentication is enabled
2. Check if 'sa' account is enabled
3. Verify the password is correct

### Issue: Firewall blocking connection
**Solution:**
Add inbound rule for port 1433 in Windows Firewall

## Production Considerations

For production deployment:
1. Use Azure SQL Database (managed service)
2. Use SQL Server on dedicated server
3. Implement proper backup strategies
4. Set up monitoring and alerts
5. Use Windows Authentication instead of SQL authentication
6. Encrypt connections (SSL/TLS)

## Getting Help

- SQL Server Documentation: https://docs.microsoft.com/en-us/sql/
- SQL Server Community: https://stackoverflow.com/questions/tagged/sql-server
- Microsoft Q&A: https://docs.microsoft.com/en-us/answers/topics/sql-server.html

---

Once you have SQL Server set up and the database created, your A1 CRM Analyst contact form will be ready to store submissions in the `tblcontacts` table with GUID IDs!
