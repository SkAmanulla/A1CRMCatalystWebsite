-- A1 CRM Analyst Database Schema
-- Microsoft SQL Server

-- Create database
CREATE DATABASE a1crmcatalyst;
GO

USE a1crmcatalyst;
GO

-- Create Services table
CREATE TABLE services (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX) NOT NULL,
    icon NVARCHAR(100),
    features NVARCHAR(MAX), -- JSON array of features
    category NVARCHAR(100),
    detailed_description NVARCHAR(MAX),
    benefits NVARCHAR(MAX), -- JSON array of benefits
    technologies NVARCHAR(MAX), -- JSON array of technologies
    case_studies NVARCHAR(MAX), -- JSON array of case studies
    sort_order INT DEFAULT 0,
    active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Industries table
CREATE TABLE industries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX) NOT NULL,
    icon NVARCHAR(100),
    features NVARCHAR(MAX), -- JSON array of key features
    challenges NVARCHAR(MAX), -- JSON array of industry challenges
    solutions NVARCHAR(MAX), -- JSON array of our solutions
    case_studies NVARCHAR(MAX), -- JSON array of case studies
    compliance_requirements NVARCHAR(MAX), -- JSON array of compliance needs
    success_metrics NVARCHAR(MAX), -- JSON array of success metrics
    sort_order INT DEFAULT 0,
    active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Contact Locations table
CREATE TABLE contact_locations (
    id INT IDENTITY(1,1) PRIMARY KEY,
    location_name NVARCHAR(255) NOT NULL,
    address NVARCHAR(500) NOT NULL,
    city NVARCHAR(100) NOT NULL,
    state NVARCHAR(100),
    zip_code NVARCHAR(20),
    country NVARCHAR(100) NOT NULL DEFAULT 'USA',
    phone NVARCHAR(20),
    email NVARCHAR(255),
    business_hours NVARCHAR(MAX), -- JSON object with hours
    timezone NVARCHAR(50),
    is_headquarters BIT DEFAULT 0,
    active BIT DEFAULT 1,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Contact Inquiries table
CREATE TABLE contact_inquiries (
    id INT IDENTITY(1,1) PRIMARY KEY,
    first_name NVARCHAR(100) NOT NULL,
    last_name NVARCHAR(100) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    phone NVARCHAR(20),
    company NVARCHAR(255),
    job_title NVARCHAR(255),
    industry NVARCHAR(100),
    message NVARCHAR(MAX) NOT NULL,
    service_interest NVARCHAR(255), -- Which service they're interested in
    preferred_contact_method NVARCHAR(50), -- email, phone, both
    budget_range NVARCHAR(100),
    status NVARCHAR(50) DEFAULT 'new', -- new, in_progress, completed, archived
    assigned_to INT, -- Staff member ID (future enhancement)
    notes NVARCHAR(MAX), -- Internal notes
    follow_up_date DATETIME2,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Newsletter Subscribers table
CREATE TABLE newsletter_subscribers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email NVARCHAR(255) UNIQUE NOT NULL,
    first_name NVARCHAR(100),
    last_name NVARCHAR(100),
    status NVARCHAR(50) DEFAULT 'active', -- active, unsubscribed
    subscription_source NVARCHAR(100), -- website, event, referral, etc.
    preferences NVARCHAR(MAX), -- JSON object with preferences
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Contacts table (tblcontacts)
CREATE TABLE tblcontacts (
    id UNIQUEIDENTIFIER DEFAULT NEWID() PRIMARY KEY,
    first_name NVARCHAR(100) NOT NULL,
    last_name NVARCHAR(100) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    phone_number NVARCHAR(20),
    company NVARCHAR(255),
    reason_for_contact NVARCHAR(50) NOT NULL, -- Service, Partnership, General
    message NVARCHAR(MAX) NOT NULL,
    status NVARCHAR(50) DEFAULT 'new', -- new, in_progress, completed, archived
    assigned_to INT, -- Staff member ID (future enhancement)
    notes NVARCHAR(MAX), -- Internal notes
    follow_up_date DATETIME2,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create Projects table (for case studies and tracking)
CREATE TABLE projects (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    client_name NVARCHAR(255),
    industry_id INT,
    service_ids NVARCHAR(MAX), -- JSON array of service IDs
    start_date DATE,
    end_date DATE,
    status NVARCHAR(50), -- planning, in_progress, completed, on_hold
    budget_range NVARCHAR(100),
    team_size INT,
    technologies_used NVARCHAR(MAX), -- JSON array
    challenges NVARCHAR(MAX),
    solutions NVARCHAR(MAX),
    results NVARCHAR(MAX),
    success_rating INT CHECK (success_rating >= 1 AND success_rating <= 5),
    testimonial NVARCHAR(MAX),
    is_case_study BIT DEFAULT 0,
    is_public BIT DEFAULT 0, -- Can be shown publicly
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (industry_id) REFERENCES industries(id)
);

-- Create Users table (for admin/staff access)
CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(100) UNIQUE NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL,
    password_hash NVARCHAR(255) NOT NULL,
    first_name NVARCHAR(100) NOT NULL,
    last_name NVARCHAR(100) NOT NULL,
    role NVARCHAR(50) DEFAULT 'staff', -- admin, manager, staff
    department NVARCHAR(100),
    phone NVARCHAR(20),
    is_active BIT DEFAULT 1,
    last_login DATETIME2,
    created_at DATETIME2 DEFAULT GETDATE(),
    updated_at DATETIME2 DEFAULT GETDATE()
);

-- Create indexes for better performance
CREATE INDEX IX_services_active ON services(active, sort_order);
CREATE INDEX IX_services_category ON services(category, active);
CREATE INDEX IX_industries_active ON industries(active, sort_order);
CREATE INDEX IX_contact_inquiries_status ON contact_inquiries(status, created_at);
CREATE INDEX IX_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IX_newsletter_email ON newsletter_subscribers(email, status);
CREATE INDEX IX_tblcontacts_status ON tblcontacts(status, created_at);
CREATE INDEX IX_tblcontacts_email ON tblcontacts(email);
CREATE INDEX IX_tblcontacts_reason ON tblcontacts(reason_for_contact, created_at);
CREATE INDEX IX_projects_industry ON projects(industry_id, is_public);
CREATE INDEX IX_projects_status ON projects(status, start_date);
CREATE INDEX IX_users_email ON users(email, is_active);
CREATE INDEX IX_users_role ON users(role, is_active);

-- Create triggers for updated_at timestamps
GO
CREATE TRIGGER tr_services_updated_at ON services
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE services 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

CREATE TRIGGER tr_industries_updated_at ON industries
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE industries 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

CREATE TRIGGER tr_contact_inquiries_updated_at ON contact_inquiries
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE contact_inquiries 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

CREATE TRIGGER tr_projects_updated_at ON projects
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE projects 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

CREATE TRIGGER tr_users_updated_at ON users
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE users 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

CREATE TRIGGER tr_tblcontacts_updated_at ON tblcontacts
AFTER UPDATE AS
BEGIN
    SET NOCOUNT ON;
    UPDATE tblcontacts 
    SET updated_at = GETDATE()
    WHERE id IN (SELECT DISTINCT id FROM inserted);
END;
GO

PRINT 'Database schema created successfully!';
