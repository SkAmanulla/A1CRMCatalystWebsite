-- Sample Data for A1 CRM Analyst
-- MySQL version - Run this after creating the schema

USE a1crmcatalyst;

-- Insert Services
INSERT INTO services (title, description, icon, features, category, detailed_description, benefits, technologies, sort_order) VALUES
('We Build', 'Custom Salesforce solutions tailored to your industry needs. From implementation to customization, we create powerful CRM systems that scale with your business.', 'FaHammer', 
 JSON_ARRAY('Custom Development', 'System Integration', 'UI/UX Design', 'Mobile Solutions'),
 'Implementation',
 'Our expert team specializes in building custom Salesforce solutions that are perfectly aligned with your business processes and industry requirements. We take a consultative approach to understand your unique challenges and create tailored solutions that drive measurable results.',
 JSON_ARRAY('Faster Time to Market', 'Reduced Development Costs', 'Scalable Architecture', 'Industry Best Practices'),
 JSON_ARRAY('Salesforce Platform', 'Apex', 'Lightning Web Components', 'REST APIs', 'Integration Platforms'),
 1),

('We Operate', 'Deployment and performance optimization of your solutions. We ensure smooth operations with monitoring, maintenance, and continuous improvement.', 'FaCogs',
 JSON_ARRAY('Performance Tuning', 'System Monitoring', 'Process Optimization', 'Quality Assurance'),
 'Operations',
 'Once your solution is built, our operations team ensures it runs at peak performance. We provide comprehensive monitoring, proactive maintenance, and continuous optimization to maximize your ROI and user adoption.',
 JSON_ARRAY('99.9% Uptime', 'Proactive Issue Resolution', 'Performance Optimization', 'Cost Reduction'),
 JSON_ARRAY('Salesforce Shield', 'Monitoring Tools', 'Performance Analytics', 'Automation Tools'),
 2),

('We Run', 'Ongoing support and maintenance to keep your systems running at peak performance. 24/7 support with proactive monitoring and updates.', 'FaRocket',
 JSON_ARRAY('24/7 Support', 'Proactive Monitoring', 'Regular Updates', 'Training & Support'),
 'Support',
 'Our managed services team provides comprehensive ongoing support to ensure your CRM investment continues to deliver value. From user training to system updates, we handle everything so you can focus on growing your business.',
 JSON_ARRAY('Reduced IT Overhead', 'Expert Support Team', 'Continuous Innovation', 'User Adoption'),
 JSON_ARRAY('Support Ticketing', 'Remote Monitoring', 'Training Platforms', 'Documentation Systems'),
 3);

-- Insert Industries
INSERT INTO industries (title, description, icon, features, challenges, solutions, compliance_requirements, sort_order) VALUES
('Financial Services', 'Comprehensive CRM solutions for banks, insurance companies, and financial institutions with regulatory compliance and security.', 'FaUniversity',
 JSON_ARRAY('Risk Management', 'Compliance Tracking', 'Customer Onboarding', 'Portfolio Management'),
 JSON_ARRAY('Regulatory Compliance', 'Data Security', 'Customer Experience', 'Integration Complexity'),
 JSON_ARRAY('GDPR Compliant Systems', 'Advanced Security', 'Streamlined Onboarding', 'Unified Platforms'),
 JSON_ARRAY('SOX Compliance', 'PCI DSS', 'GDPR', 'FFIEC Guidelines', 'Basel III'),
 1),

('Healthcare', 'HIPAA-compliant CRM systems for healthcare providers, enabling better patient relationships and care coordination.', 'FaHeartbeat',
 JSON_ARRAY('Patient Management', 'HIPAA Compliance', 'Care Coordination', 'Medical Records Integration'),
 JSON_ARRAY('Patient Privacy', 'Data Integration', 'Care Coordination', 'Regulatory Requirements'),
 JSON_ARRAY('HIPAA Compliant Platform', 'EHR Integration', 'Care Team Coordination', 'Patient Engagement'),
 JSON_ARRAY('HIPAA', 'HITECH', 'FDA Regulations', 'State Healthcare Laws'),
 2),

('Public Sector', 'Government-grade solutions that improve citizen services and streamline public administration processes.', 'FaBuilding',
 JSON_ARRAY('Citizen Services', 'Case Management', 'Transparency Tools', 'Multi-departmental Integration'),
 JSON_ARRAY('Budget Constraints', 'Legacy Systems', 'Transparency Requirements', 'Multi-stakeholder Needs'),
 JSON_ARRAY('Cost-effective Solutions', 'Legacy Integration', 'Transparency Dashboards', 'Collaborative Platforms'),
 JSON_ARRAY('FISMA', 'Section 508', 'FOIA', 'Government Security Standards'),
 3),

('Retail & E-commerce', 'Customer-centric solutions that drive sales, improve customer experience, and optimize inventory management.', 'FaShoppingCart',
 JSON_ARRAY('Customer Journey Mapping', 'Inventory Integration', 'Sales Analytics', 'Marketing Automation'),
 JSON_ARRAY('Omnichannel Experience', 'Inventory Management', 'Customer Retention', 'Data Analytics'),
 JSON_ARRAY('Unified Customer View', 'Real-time Inventory', 'Personalized Marketing', 'Advanced Analytics'),
 JSON_ARRAY('PCI DSS', 'CCPA', 'GDPR', 'Consumer Protection Laws'),
 4),

('Education', 'Student information systems and CRM solutions that enhance learning experiences and administrative efficiency.', 'FaGraduationCap',
 JSON_ARRAY('Student Lifecycle', 'Alumni Relations', 'Admissions Management', 'Academic Analytics'),
 JSON_ARRAY('Student Engagement', 'Administrative Efficiency', 'Data Management', 'Communication'),
 JSON_ARRAY('Integrated Platforms', 'Process Automation', 'Centralized Data', 'Communication Tools'),
 JSON_ARRAY('FERPA', 'COPPA', 'State Education Laws', 'Accessibility Standards'),
 5),

('Manufacturing', 'Supply chain integration and customer management solutions that improve operational efficiency and customer satisfaction.', 'FaIndustry',
 JSON_ARRAY('Supply Chain Integration', 'Quality Management', 'Customer Support', 'Vendor Management'),
 JSON_ARRAY('Supply Chain Complexity', 'Quality Control', 'Customer Service', 'Vendor Coordination'),
 JSON_ARRAY('Integrated Supply Chain', 'Quality Systems', 'Service Automation', 'Vendor Portals'),
 JSON_ARRAY('ISO Standards', 'FDA Regulations', 'Environmental Compliance', 'Safety Standards'),
 6);

-- Insert Contact Locations
INSERT INTO contact_locations (location_name, address, city, state, zip_code, phone, email, business_hours, timezone, is_headquarters) VALUES
('New York Headquarters', '123 Business Ave, Suite 500', 'New York', 'NY', '10001', '+1 (555) 123-4567', 'ny@a1crmcatalyst.com',
 JSON_OBJECT('monday', '8:00 AM - 6:00 PM', 'tuesday', '8:00 AM - 6:00 PM', 'wednesday', '8:00 AM - 6:00 PM', 'thursday', '8:00 AM - 6:00 PM', 'friday', '8:00 AM - 6:00 PM', 'saturday', '9:00 AM - 2:00 PM', 'sunday', 'Closed'),
 'EST', TRUE),

('Los Angeles Office', '456 Tech Boulevard, Floor 12', 'Los Angeles', 'CA', '90210', '+1 (555) 987-6543', 'la@a1crmcatalyst.com',
 JSON_OBJECT('monday', '9:00 AM - 5:00 PM', 'tuesday', '9:00 AM - 5:00 PM', 'wednesday', '9:00 AM - 5:00 PM', 'thursday', '9:00 AM - 5:00 PM', 'friday', '9:00 AM - 5:00 PM', 'saturday', 'Closed', 'sunday', 'Closed'),
 'PST', FALSE),

('Chicago Office', '789 Innovation Drive, Suite 300', 'Chicago', 'IL', '60601', '+1 (555) 456-7890', 'chicago@a1crmcatalyst.com',
 JSON_OBJECT('monday', '8:00 AM - 5:00 PM', 'tuesday', '8:00 AM - 5:00 PM', 'wednesday', '8:00 AM - 5:00 PM', 'thursday', '8:00 AM - 5:00 PM', 'friday', '8:00 AM - 5:00 PM', 'saturday', '9:00 AM - 1:00 PM', 'sunday', 'Closed'),
 'CST', FALSE);

-- Insert sample projects (for case studies)
INSERT INTO projects (title, description, client_name, industry_id, service_ids, start_date, end_date, status, budget_range, team_size, technologies_used, challenges, solutions, results, success_rating, is_case_study, is_public) VALUES
('Healthcare CRM Transformation', 'Complete overhaul of patient management system for major healthcare provider', 'Regional Healthcare Network', 2, JSON_ARRAY(1,2,3), '2023-01-15', '2023-08-30', 'completed', '$500K-$1M', 8,
 JSON_ARRAY('Salesforce Health Cloud', 'Epic Integration', 'Lightning Platform', 'Mobile Apps'),
 'Legacy system integration, HIPAA compliance, staff training, data migration',
 'Custom Health Cloud implementation with Epic integration, mobile patient portal, automated workflows',
 '40% improvement in patient satisfaction, 60% reduction in administrative time, 100% HIPAA compliance',
 5, TRUE, TRUE),

('Financial Services Automation', 'Automated loan processing and customer onboarding for credit union', 'Community First Credit Union', 1, JSON_ARRAY(1,2), '2023-03-01', '2023-10-15', 'completed', '$250K-$500K', 6,
 JSON_ARRAY('Salesforce Financial Services Cloud', 'DocuSign', 'Automated Workflows', 'Integration APIs'),
 'Manual processes, compliance requirements, member experience improvement',
 'Automated loan processing, digital onboarding, compliance tracking, member portal',
 '70% reduction in processing time, 50% increase in member satisfaction, full regulatory compliance',
 5, TRUE, TRUE),

('Retail Customer Experience Platform', 'Omnichannel customer experience platform for fashion retailer', 'Fashion Forward Inc', 4, JSON_ARRAY(1,3), '2023-05-01', '2023-12-01', 'in_progress', '$750K-$1M', 10,
 JSON_ARRAY('Salesforce Commerce Cloud', 'Service Cloud', 'Marketing Cloud', 'Mobile Solutions'),
 'Fragmented customer data, inconsistent experience across channels, inventory management',
 'Unified customer platform, omnichannel experience, real-time inventory, personalized marketing',
 'Project in progress - early results show 25% increase in customer engagement',
 4, FALSE, FALSE);

-- Insert sample admin user (password should be hashed in production)
INSERT INTO users (username, email, password_hash, first_name, last_name, role, department) VALUES
('admin', 'admin@a1crmcatalyst.com', '$2b$10$example_hash_replace_in_production', 'System', 'Administrator', 'admin', 'IT'),
('jsmith', 'j.smith@a1crmcatalyst.com', '$2b$10$example_hash_replace_in_production', 'John', 'Smith', 'manager', 'Sales'),
('mjohnson', 'm.johnson@a1crmcatalyst.com', '$2b$10$example_hash_replace_in_production', 'Mary', 'Johnson', 'staff', 'Support');

-- Insert sample contact inquiries
INSERT INTO contact_inquiries (first_name, last_name, email, phone, company, job_title, industry, message, service_interest, preferred_contact_method, status) VALUES
('Alice', 'Brown', 'alice.brown@techcorp.com', '+1 (555) 111-2222', 'TechCorp Solutions', 'CTO', 'Technology', 'We are interested in implementing a CRM solution for our growing tech company. We have about 200 employees and need something scalable.', 'We Build', 'email', 'new'),
('Robert', 'Davis', 'r.davis@healthplus.org', '+1 (555) 333-4444', 'HealthPlus Medical', 'Operations Manager', 'Healthcare', 'Looking for HIPAA-compliant CRM system to manage patient relationships and coordinate care between departments.', 'We Build', 'phone', 'in_progress'),
('Sarah', 'Wilson', 'sarah.wilson@retailpro.com', '+1 (555) 555-6666', 'RetailPro Chain', 'Marketing Director', 'Retail', 'Need help with customer journey mapping and marketing automation for our retail chain with 50+ locations.', 'We Operate', 'both', 'completed');

-- Insert sample contact form submissions (tblcontacts) - with UUID
INSERT INTO tblcontacts (id, first_name, last_name, email, phone_number, company, reason_for_contact, message, status) VALUES
(UUID(), 'John', 'Smith', 'john.smith@example.com', '+1 (555) 123-0001', 'Example Corp', 'Service', 'We are interested in your Salesforce implementation services for our growing business. Can we schedule a consultation?', 'new'),
(UUID(), 'Emily', 'Johnson', 'emily.j@techstart.com', '+1 (555) 123-0002', 'TechStart Inc', 'Partnership', 'We would like to explore partnership opportunities with A1 CRM Analyst. Our company specializes in AI solutions.', 'in_progress'),
(UUID(), 'Michael', 'Brown', 'mike.brown@retailco.com', '+1 (555) 123-0003', 'RetailCo', 'Service', 'Looking for help with customer data analytics and reporting. We have a large customer database that needs better insights.', 'completed'),
(UUID(), 'Lisa', 'Davis', 'lisa.davis@healthcare.org', '+1 (555) 123-0004', 'Healthcare Solutions', 'General', 'I attended your webinar on CRM best practices. Could you provide more information about HIPAA compliance features?', 'new'),
(UUID(), 'David', 'Wilson', 'david.w@finance.com', '', 'Finance Plus', 'Service', 'Our financial services company needs a CRM solution that can handle compliance requirements. What options do you recommend?', 'new');

SELECT 'Sample data inserted successfully!' as message;
SELECT 'Total Services: 3' as info;
SELECT 'Total Industries: 6' as info; 
SELECT 'Total Contact Locations: 3' as info;
SELECT 'Total Projects: 3' as info;
SELECT 'Total Users: 3' as info;
SELECT 'Total Contact Inquiries: 3' as info;
SELECT 'Total Contact Form Submissions (tblcontacts): 5' as info;

