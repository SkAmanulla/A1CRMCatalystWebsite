-- Add tblcontacts table to existing database
USE a1crmanalyst;

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

-- Create indexes for better performance
CREATE INDEX idx_tblcontacts_status ON tblcontacts(status, created_at);
CREATE INDEX idx_tblcontacts_email ON tblcontacts(email);
CREATE INDEX idx_tblcontacts_reason ON tblcontacts(reason_for_contact, created_at);

SELECT 'tblcontacts table created successfully!' as message;
