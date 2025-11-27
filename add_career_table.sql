-- Add tblcareers table to existing database
USE a1crmanalyst;

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

-- Create index for better performance
CREATE INDEX idx_tblcareers_status ON tblcareers(status, created_at);
CREATE INDEX idx_tblcareers_email ON tblcareers(email);

SELECT 'tblcareers table created successfully!' as message;
