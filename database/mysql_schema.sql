-- A1 CRM Analyst Database Schema
-- MySQL

-- Create database
CREATE DATABASE IF NOT EXISTS a1crmanalyst 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE a1crmanalyst;

-- Create Services table
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100),
    features JSON, -- JSON array of features
    category VARCHAR(100),
    detailed_description TEXT,
    benefits JSON, -- JSON array of benefits
    technologies JSON, -- JSON array of technologies
    case_studies JSON, -- JSON array of case studies
    sort_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Industries table
CREATE TABLE industries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(100),
    features JSON, -- JSON array of key features
    challenges JSON, -- JSON array of industry challenges
    solutions JSON, -- JSON array of our solutions
    case_studies JSON, -- JSON array of case studies
    compliance_requirements JSON, -- JSON array of compliance needs
    success_metrics JSON, -- JSON array of success metrics
    sort_order INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Contact Locations table
CREATE TABLE contact_locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    zip_code VARCHAR(20),
    country VARCHAR(100) NOT NULL DEFAULT 'USA',
    phone VARCHAR(20),
    email VARCHAR(255),
    business_hours JSON, -- JSON object with hours
    timezone VARCHAR(50),
    is_headquarters BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Contact Inquiries table
CREATE TABLE contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    job_title VARCHAR(255),
    industry VARCHAR(100),
    message TEXT NOT NULL,
    service_interest VARCHAR(255), -- Which service they're interested in
    preferred_contact_method VARCHAR(50), -- email, phone, both
    budget_range VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new', -- new, in_progress, completed, archived
    assigned_to INT, -- Staff member ID (future enhancement)
    notes TEXT, -- Internal notes
    follow_up_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Newsletter Subscribers table
CREATE TABLE newsletter_subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    status VARCHAR(50) DEFAULT 'active', -- active, unsubscribed
    subscription_source VARCHAR(100), -- website, event, referral, etc.
    preferences JSON, -- JSON object with preferences
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Contacts table (tblcontacts) - Main contact form table
CREATE TABLE tblcontacts (
    id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    company VARCHAR(255),
    reason_for_contact VARCHAR(50) NOT NULL, -- Service, Partnership, General
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new', -- new, in_progress, completed, archived
    assigned_to INT, -- Staff member ID (future enhancement)
    notes TEXT, -- Internal notes
    follow_up_date DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Projects table (for case studies and tracking)
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    client_name VARCHAR(255),
    industry_id INT,
    service_ids JSON, -- JSON array of service IDs
    start_date DATE,
    end_date DATE,
    status VARCHAR(50), -- planning, in_progress, completed, on_hold
    budget_range VARCHAR(100),
    team_size INT,
    technologies_used JSON, -- JSON array
    challenges TEXT,
    solutions TEXT,
    results TEXT,
    success_rating INT CHECK (success_rating >= 1 AND success_rating <= 5),
    testimonial TEXT,
    is_case_study BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT FALSE, -- Can be shown publicly
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (industry_id) REFERENCES industries(id)
);

-- Create Users table (for admin/staff access)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'staff', -- admin, manager, staff
    department VARCHAR(100),
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    last_login DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Career Applications table
CREATE TABLE tblcareers (
    id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    linkedin VARCHAR(500),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    resume_url VARCHAR(1000) NOT NULL, -- Resume link/website URL
    position_interest VARCHAR(255), -- Specific Salesforce role they're interested in
    experience_years INT, -- Years of Salesforce experience
    status VARCHAR(50) DEFAULT 'new', -- new, in_review, interview_scheduled, hired, rejected
    notes TEXT, -- Internal notes from HR
    assigned_to_hr INT, -- HR staff member ID (future enhancement)
    application_source VARCHAR(100) DEFAULT 'website', -- website, referral, linkedin, etc.
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_services_active ON services(active, sort_order);
CREATE INDEX idx_services_category ON services(category, active);
CREATE INDEX idx_industries_active ON industries(active, sort_order);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status, created_at);
CREATE INDEX idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email, status);
CREATE INDEX idx_tblcontacts_status ON tblcontacts(status, created_at);
CREATE INDEX idx_tblcontacts_email ON tblcontacts(email);
CREATE INDEX idx_tblcontacts_reason ON tblcontacts(reason_for_contact, created_at);
CREATE INDEX idx_tblcareers_status ON tblcareers(status, created_at);
CREATE INDEX idx_tblcareers_email ON tblcareers(email);
CREATE INDEX idx_projects_industry ON projects(industry_id, is_public);
CREATE INDEX idx_projects_status ON projects(status, start_date);
CREATE INDEX idx_users_email ON users(email, is_active);
CREATE INDEX idx_users_role ON users(role, is_active);

SELECT 'Database schema created successfully!' as message;

