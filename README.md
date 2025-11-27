# A1 CRM Analyst

A modern, professional CRM analyst website built with React.js, Node.js, and Microsoft SQL Server. Accelerating your customer growth through intelligent CRM solutions, data analytics, and automation technologies.

## 🚀 Features

- **Modern React Frontend**: Responsive design with Bootstrap and custom styling
- **Professional Homepage**: Hero section, services overview, industries served, and contact information
- **Node.js Backend**: RESTful API with Express.js
- **Microsoft SQL Server**: Robust database with comprehensive schema
- **Industry Focus**: Specialized solutions for Financial Services, Healthcare, Public Sector, Retail, Education, and Manufacturing
- **Service Portfolio**: "We Build", "We Operate", "We Run" service model
- **Contact Management**: Multiple location support and inquiry tracking
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🏗️ Project Structure

```
a1crmanalyst/
├── frontend/          # React.js application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main application component
│   └── package.json       # Frontend dependencies
├── backend/           # Node.js Express server
│   ├── config/            # Database configuration
│   ├── routes/            # API route handlers
│   └── server.js          # Main server file
├── database/          # SQL Server database files
│   ├── schema.sql         # Database schema
│   └── sample_data.sql    # Sample data for development
└── package.json       # Root package.json for scripts
```

## 🛠️ Technology Stack

### Frontend
- **React.js 18** - Modern JavaScript library for building user interfaces
- **React Bootstrap** - UI components and responsive grid system
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library with Font Awesome icons
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **CORS** - Cross-origin resource sharing middleware
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **mssql** - Microsoft SQL Server client for Node.js

### Database
- **Microsoft SQL Server** - Enterprise-grade relational database
- Comprehensive schema with tables for services, industries, contacts, projects, and users
- Proper indexing and triggers for optimal performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Microsoft SQL Server** - [Download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- **SQL Server Management Studio (SSMS)** - Optional but recommended

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd a1crmanalyst
```

### 2. Install Dependencies

Install all dependencies for the entire project:

```bash
npm run install-all
```

This will install dependencies for the root, frontend, and backend.

### 3. Database Setup

1. **Create Database**: Open SQL Server Management Studio and connect to your SQL Server instance.

2. **Run Schema Script**: Execute the database schema script:
   ```sql
   -- Open and execute database/schema.sql
   ```

3. **Insert Sample Data**: Execute the sample data script:
   ```sql
   -- Open and execute database/sample_data.sql
   ```

### 4. Configure Environment

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_SERVER=localhost
DB_DATABASE=a1crmanalyst
DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=1433

# JWT Configuration (for future auth features)
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=30d
```

### 5. Start the Development Servers

Run both frontend and backend simultaneously:

```bash
npm run dev
```

Or run them separately:

```bash
# Backend (runs on http://localhost:5000)
npm run server

# Frontend (runs on http://localhost:3000)
npm run client
```

### 6. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 📚 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get specific service
- `POST /api/services` - Create new service (admin)

### Industries
- `GET /api/industries` - Get all industries
- `GET /api/industries/:id` - Get specific industry
- `GET /api/industries/stats/overview` - Get industry statistics
- `POST /api/industries` - Create new industry (admin)

### Contact
- `GET /api/contact` - Get contact locations
- `POST /api/contact/submit` - Submit contact form
- `POST /api/contact/newsletter` - Subscribe to newsletter
- `GET /api/contact/stats` - Get contact statistics (admin)

## 🏢 Business Model

### Services Offered

1. **We Build**: Custom Salesforce solutions tailored to industry needs
   - Custom Development
   - System Integration
   - UI/UX Design
   - Mobile Solutions

2. **We Operate**: Deployment and performance optimization
   - Performance Tuning
   - System Monitoring
   - Process Optimization
   - Quality Assurance

3. **We Run**: Ongoing support and maintenance
   - 24/7 Support
   - Proactive Monitoring
   - Regular Updates
   - Training & Support

### Industries Served

- **Financial Services**: Risk management, compliance tracking, customer onboarding
- **Healthcare**: HIPAA-compliant systems, patient management, care coordination
- **Public Sector**: Citizen services, case management, transparency tools
- **Retail & E-commerce**: Customer journey mapping, inventory integration, sales analytics
- **Education**: Student lifecycle management, alumni relations, admissions
- **Manufacturing**: Supply chain integration, quality management, vendor management

## 🔒 Security Features

- **Helmet.js**: Security headers and protection against common vulnerabilities
- **CORS**: Configurable cross-origin resource sharing
- **Input Validation**: Server-side validation for all API endpoints
- **SQL Injection Protection**: Parameterized queries using mssql library
- **Environment Variables**: Sensitive configuration stored in environment variables

## 📱 Responsive Design

- **Mobile-First Approach**: Optimized for mobile devices
- **Bootstrap Grid System**: Responsive layout across all screen sizes
- **Custom CSS**: Enhanced styling with CSS custom properties
- **Progressive Enhancement**: Works on all modern browsers

## 🚀 Deployment

### Frontend Deployment
- **Vercel**: `npm run build` and deploy the `build` folder
- **Netlify**: Connect GitHub repository and auto-deploy
- **AWS S3 + CloudFront**: Static site hosting with CDN

### Backend Deployment
- **Heroku**: Deploy Node.js application with database add-on
- **AWS EC2**: Deploy on virtual private server
- **Azure App Service**: Deploy with Azure SQL Database

### Database Deployment
- **Azure SQL Database**: Managed SQL Server instance
- **AWS RDS SQL Server**: Managed database service
- **On-premises SQL Server**: Traditional server deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: support@a1crmcatalyst.com
- **Phone**: +1 (555) 123-4567
- **Website**: [https://a1crmcatalyst.com](https://a1crmcatalyst.com)

## 🙏 Acknowledgments

- Inspired by [blue5green.com](https://blue5green.com) design and functionality
- Built with modern web technologies and best practices
- Designed for scalability and maintainability

---

**Built with ❤️ by the A1 CRM Analyst Team**
