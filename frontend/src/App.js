import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import CareersPage from './pages/CareersPage/CareersPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import IndustriesPage from './pages/IndustriesPage/IndustriesPage';
import Footer from './components/Footer/Footer';

// Salesforce Services
import AgentForce from './pages/services/salesforce/AgentForce';
import SalesCloud from './pages/services/salesforce/SalesCloud';
import ServiceCloud from './pages/services/salesforce/ServiceCloud';
import MarketingCloud from './pages/services/salesforce/MarketingCloud';
import CLM from './pages/services/salesforce/CLM';
import OrderManagement from './pages/services/salesforce/OrderManagement';
import CPQ from './pages/services/salesforce/CPQ';
import MuleSoft from './pages/services/salesforce/MuleSoft';

// DevOps Services
import Copado from './pages/services/devops/Copado';
import AutoRabbit from './pages/services/devops/AutoRabbit';
import DevOpsCenter from './pages/services/devops/DevOpsCenter';

// Testing Services
import Playwright from './pages/services/testing/Playwright';

// Health & Insurance Industries
import Payers from './pages/industries/health/Payers';
import Providers from './pages/industries/health/Providers';
import LifeInsurance from './pages/industries/health/LifeInsurance';
import PropertyCasualty from './pages/industries/health/PropertyCasualty';
import HealthPlans from './pages/industries/health/HealthPlans';

// Telecommunication Industries
import MobileOperators from './pages/industries/telecom/MobileOperators';
import ISP from './pages/industries/telecom/ISP';
import CableSatellite from './pages/industries/telecom/CableSatellite';
import UnifiedCommunications from './pages/industries/telecom/UnifiedCommunications';
import DigitalMedia from './pages/industries/telecom/DigitalMedia';

// Energy & Utilities Industries
import OilGas from './pages/industries/energy/OilGas';
import PowerUtilities from './pages/industries/energy/PowerUtilities';

// Financial Services Industries
import RetailBanking from './pages/industries/financial/RetailBanking';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            
            {/* Salesforce Products Routes */}
            <Route path="/services/salesforce/agentforce" element={<AgentForce />} />
            <Route path="/services/salesforce/sales-cloud" element={<SalesCloud />} />
            <Route path="/services/salesforce/service-cloud" element={<ServiceCloud />} />
            <Route path="/services/salesforce/marketing-cloud" element={<MarketingCloud />} />
            <Route path="/services/salesforce/clm" element={<CLM />} />
            <Route path="/services/salesforce/order-management" element={<OrderManagement />} />
            <Route path="/services/salesforce/cpq" element={<CPQ />} />
            <Route path="/services/salesforce/mulesoft" element={<MuleSoft />} />
            
            {/* DevOps Routes */}
            <Route path="/services/devops/copado" element={<Copado />} />
            <Route path="/services/devops/autorabbit" element={<AutoRabbit />} />
            <Route path="/services/devops/devops-center" element={<DevOpsCenter />} />
            
            {/* Testing Routes */}
            <Route path="/services/testing/playwright" element={<Playwright />} />
            
            {/* Health & Insurance Industries Routes */}
            <Route path="/industries/health/payers" element={<Payers />} />
            <Route path="/industries/health/providers" element={<Providers />} />
            <Route path="/industries/health/life-insurance" element={<LifeInsurance />} />
            <Route path="/industries/health/property-casualty" element={<PropertyCasualty />} />
            <Route path="/industries/health/health-plans" element={<HealthPlans />} />
            
            {/* Telecommunication Industries Routes */}
            <Route path="/industries/telecom/mobile-operators" element={<MobileOperators />} />
            <Route path="/industries/telecom/isp" element={<ISP />} />
            <Route path="/industries/telecom/cable-satellite" element={<CableSatellite />} />
            <Route path="/industries/telecom/unified-communications" element={<UnifiedCommunications />} />
            <Route path="/industries/telecom/digital-media" element={<DigitalMedia />} />
            
            {/* Energy & Utilities Industries Routes */}
            <Route path="/industries/energy/oil-gas" element={<OilGas />} />
            <Route path="/industries/energy/power-utilities" element={<PowerUtilities />} />
            
            {/* Financial Services Industries Routes */}
            <Route path="/industries/financial/retail-banking" element={<RetailBanking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
