# MySQL Setup Guide for A1 CRM Analyst

This guide will help you set up MySQL for your A1 CRM Analyst project locally.

## 🚀 **Quick Setup Options**

Choose the option that works best for you:

### **Option 1: MySQL Community Server (Recommended for Development)**
- ✅ **Free and full-featured**
- ✅ **Easy GUI management with MySQL Workbench**
- ✅ **Best for beginners**

### **Option 2: XAMPP (Easiest All-in-One)**
- ✅ **Includes Apache, MySQL, PHP, phpMyAdmin**
- ✅ **One-click installation**
- ✅ **Perfect for quick testing**

### **Option 3: Docker (Advanced Users)**
- ✅ **Isolated environment**
- ✅ **Easy cleanup**
- ✅ **Cross-platform**

---

## 🛠️ **Option 1: MySQL Community Server Setup**

### **Step 1: Download MySQL**
1. **Visit**: https://dev.mysql.com/downloads/mysql/
2. **Choose your OS**: Windows/macOS/Linux
3. **Select** "MySQL Installer for Windows" (recommended for Windows users)
4. **Download** the installer

### **Step 2: Install MySQL**
1. **Run** the downloaded installer
2. **Choose Setup Type**: "Developer Default" (includes MySQL Server + Workbench)
3. **Click** "Next" and "Execute" to download components
4. **Configuration**:
   - **Config Type**: Development Computer
   - **Authentication**: Use Strong Password Encryption
   - **Root Password**: Set a strong password (e.g., `MySecurePassword123!`) - **Remember this!**
   - **MySQL User**: Leave default or create additional users
5. **Complete** the installation

### **Step 3: Download MySQL Workbench**
MySQL Workbench should be included in the Developer Default installation. If not:
1. **Visit**: https://dev.mysql.com/downloads/workbench/
2. **Download and install** MySQL Workbench

### **Step 4: Test Connection**
1. **Open** MySQL Workbench
2. **Connect** to your MySQL instance:
   - **Connection Name**: Local MySQL
   - **Hostname**: `localhost` or `127.0.0.1`
   - **Port**: `3306` (default)
   - **Username**: `root`
   - **Password**: (the password you set during installation)
3. **Test Connection** → **OK**

---

## 🎯 **Option 2: XAMPP Setup (Easiest)**

### **Step 1: Download XAMPP**
1. **Visit**: https://www.apachefriends.org/
2. **Download** XAMPP for your operating system
3. **Install** with default settings

### **Step 2: Start MySQL**
1. **Open** XAMPP Control Panel
2. **Start** "MySQL" service
3. **Click** "Admin" next to MySQL (opens phpMyAdmin)

### **Step 3: Access phpMyAdmin**
- **URL**: http://localhost/phpmyadmin
- **Username**: `root`
- **Password**: (leave blank by default, but set one for security)

---

## 🐳 **Option 3: Docker Setup**

### **Quick Docker Command**
```bash
# Pull and run MySQL container
docker run --name mysql-a1crm \
  -e MYSQL_ROOT_PASSWORD=MySecurePassword123! \
  -e MYSQL_DATABASE=a1crmcatalyst \
  -p 3306:3306 \
  -d mysql:8.0

# Connect to MySQL in the container
docker exec -it mysql-a1crm mysql -u root -p
```

---

## 📊 **Creating Your Database**

### **Step 1: Create the Database**

**Using MySQL Workbench:**
1. **Open** a new SQL tab
2. **Copy and paste** the content from `database/mysql_schema.sql`
3. **Execute** the entire script (⚡ Execute button or Ctrl+Shift+Enter)

**Using phpMyAdmin:**
1. **Click** "SQL" tab
2. **Copy and paste** the content from `database/mysql_schema.sql`  
3. **Click** "Go"

**Using Command Line:**
```bash
mysql -u root -p < database/mysql_schema.sql
```

### **Step 2: Insert Sample Data**
1. **Open** a new SQL tab/window
2. **Copy and paste** the content from `database/mysql_sample_data.sql`
3. **Execute** the script

---

## ⚙️ **Backend Configuration**

### **Step 1: Install MySQL Dependencies**
```bash
cd backend
npm install
```
This will install the `mysql2` package automatically.

### **Step 2: Create Environment File**
Create a `.env` file in the `backend` folder:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MySQL Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=MySecurePassword123!
DB_DATABASE=a1crmanalyst
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_demo123
JWT_EXPIRE=30d
```

**Replace** `MySecurePassword123!` with your actual MySQL root password.

### **Step 3: Start the MySQL-enabled Server**
```bash
# From the backend directory
npm run dev-mysql

# Or from the project root
cd backend && npm run dev-mysql
```

---

## ✅ **Verify Database Setup**

### **Check Tables**
Run this query in MySQL Workbench or phpMyAdmin:

```sql
USE a1crmcatalyst;

SHOW TABLES;
```

You should see:
- `contact_inquiries`
- `contact_locations`  
- `industries`
- `newsletter_subscribers`
- `projects`
- `services`
- `tblcontacts` ← **Your main contact form table**
- `users`

### **Check Contact Form Table**
```sql
USE a1crmcatalyst;

DESCRIBE tblcontacts;
```

### **View Sample Data**
```sql
USE a1crmcatalyst;

-- Check contact form submissions
SELECT COUNT(*) as ContactSubmissions FROM tblcontacts;

-- View sample contacts
SELECT 
    id,
    CONCAT(first_name, ' ', last_name) as FullName,
    email,
    company,
    reason_for_contact,
    status,
    created_at
FROM tblcontacts
ORDER BY created_at DESC;
```

---

## 🧪 **Test Your Setup**

### **1. Check API Health**
Visit: http://localhost:5000/api/health

You should see:
```json
{
  "status": "OK",
  "message": "A1 CRM Analyst API is running",
  "database": "Connected",
  "dbType": "MySQL"
}
```

### **2. Test Contact Form**
1. Go to: http://localhost:3000/contact
2. Fill out and submit the form
3. Check your database - the submission should appear in `tblcontacts` with a UUID

### **3. Check Backend Logs**
You should see:
```
🚀 Server running on port 5000
📊 A1 CRM Analyst API ready (MySQL + Demo Mode)  
✅ Connected to MySQL database
```

---

## 🔧 **Common Issues & Solutions**

### **Issue: "Error: ER_ACCESS_DENIED_ERROR"**
**Solutions:**
1. Check username/password in `.env` file
2. Verify MySQL user has proper permissions:
   ```sql
   GRANT ALL PRIVILEGES ON a1crmcatalyst.* TO 'root'@'localhost';
   FLUSH PRIVILEGES;
   ```

### **Issue: "Error: connect ECONNREFUSED 127.0.0.1:3306"**
**Solutions:**
1. Make sure MySQL service is running
2. Check if port 3306 is correct
3. Verify MySQL is listening on localhost

### **Issue: "Error: ER_BAD_DB_ERROR: Unknown database"**
**Solution:**
Run the schema script again to create the database.

### **Issue: Cannot start MySQL in XAMPP**
**Solutions:**
1. Check if port 3306 is used by another service
2. Change MySQL port in XAMPP config
3. Stop other MySQL services

---

## 🚀 **Production Considerations**

For production deployment:
1. **Use managed MySQL**: AWS RDS, Google Cloud SQL, Azure Database
2. **Enable SSL**: Encrypt database connections
3. **Create dedicated user**: Don't use root in production
4. **Set up backups**: Automated database backups
5. **Monitor performance**: Set up database monitoring

---

## 📚 **Helpful Resources**

- **MySQL Documentation**: https://dev.mysql.com/doc/
- **MySQL Workbench Manual**: https://dev.mysql.com/doc/workbench/en/
- **XAMPP Documentation**: https://www.apachefriends.org/docs/
- **phpMyAdmin Guide**: https://www.phpmyadmin.net/docs/

---

## 🎉 **Success!**

Once you see "Connected" in the health check and can submit contact forms successfully, your MySQL setup is complete! Your contact form will now store real data in MySQL with UUID identifiers.

### **Quick Commands Summary:**
```bash
# Install dependencies
cd backend && npm install

# Start MySQL server
npm run dev-mysql

# Test health endpoint
curl http://localhost:5000/api/health

# Access contact form
open http://localhost:3000/contact
```

Your A1 CRM Analyst is now powered by MySQL! 🎯