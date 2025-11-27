import React from 'react';
import ServiceDetailTemplate from '../../../components/ServiceDetailTemplate/ServiceDetailTemplate';

const OrderManagement = () => {
  const serviceData = {
    title: "Order Management",
    subtitle: "Streamlined Order Processing",
    description: "Transform your order-to-cash process with Salesforce Order Management. Deliver exceptional customer experiences while optimizing inventory, fulfillment, and revenue recognition.",
    icon: "📦",
    category: "Salesforce Products",
    features: [
      {
        title: "Order Orchestration",
        description: "Coordinate complex orders across multiple systems, channels, and fulfillment locations.",
        icon: "🎼"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory visibility and allocation across all channels and locations.",
        icon: "📊"
      },
      {
        title: "Fulfillment Optimization",
        description: "Optimize order fulfillment with intelligent routing and split-shipment capabilities.",
        icon: "🚚"
      },
      {
        title: "Returns Processing",
        description: "Streamline returns and exchanges with automated processing workflows.",
        icon: "↩️"
      },
      {
        title: "Payment Processing",
        description: "Secure payment processing with support for multiple payment methods and currencies.",
        icon: "💳"
      },
      {
        title: "Order Tracking",
        description: "Provide customers with real-time order status updates and delivery tracking.",
        icon: "🔍"
      }
    ],
    benefits: [
      {
        title: "Faster Order Processing",
        description: "Process orders 40% faster with automated workflows and intelligent routing."
      },
      {
        title: "Improved Customer Experience", 
        description: "Deliver better customer experiences with accurate order status and fast fulfillment."
      },
      {
        title: "Reduced Errors",
        description: "Minimize order errors and discrepancies through automation and validation."
      },
      {
        title: "Increased Revenue",
        description: "Boost revenue with optimized pricing, promotions, and cross-sell opportunities."
      }
    ]
  };

  return <ServiceDetailTemplate {...serviceData} />;
};

export default OrderManagement;
