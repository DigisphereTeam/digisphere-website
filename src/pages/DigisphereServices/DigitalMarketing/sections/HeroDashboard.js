import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./HeroDashboard.css";
import CampaignAnalytics from "../../../../assets/digital-marketing/CampaignAnalytics.svg";
import ROAS from "../../../../assets/digital-marketing/ROAS.svg";
import Conv from "../../../../assets/digital-marketing/Conv. Rate.svg";
import cpl from "../../../../assets/digital-marketing/cpl.svg";

// Badge images for the floating layout
import NewLeadsBadge from "../../../../assets/digital-marketing/NewLeads.svg";
import SEORankingBadge from "../../../../assets/digital-marketing/Position.svg";

const graphData = [
  { month: "Sep", value: 30 },
  { month: "Oct", value: 41 },
  { month: "Nov", value: 35 },
  { month: "Dec", value: 50 },
  { month: "Jan", value: 45 },
  { month: "Feb", value: 57 },
  { month: "Mar", value: 54 },
  { month: "Apr", value: 67 },
  { month: "May", value: 63 },
  { month: "Jun", value: 72 },
];

const channels = [
  { name: "Google Ads", value: 34, color: "#3B82F6" },
  { name: "Organic SEO", value: 28, color: "#10B981" },
  { name: "Meta Ads", value: 22, color: "#0284C7" },
  { name: "Email", value: 16, color: "#F59E0B" },
];

const funnelData = [
  { label: 'Impressions', value: 124000, displayValue: '124K', percentage: 100, class: 'marketing-impressions' },
  { label: 'Clicks', value: 18400, displayValue: '18.4K', percentage: 78, class: 'marketing-clicks' },
  { label: 'Leads', value: 2310, displayValue: '2,310', percentage: 52, class: 'marketing-leads' },
  { label: 'Customers', value: 387, displayValue: '387', percentage: 28, class: 'marketing-customers' }
];

export default function HeroDashboard() {
  return (
    <div className="marketing-dashboard-wrapper">
      
      {/* Container for Main Analytics Card + Top Floating Badge */}
      <div className="marketing-relative-container">
<img
    src={NewLeadsBadge}
    alt="New Leads"
    className="top-floating-image"
  />
      

        {/* Main Dashboard Card */}
        <motion.div
          className="dashboard"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Top Header Row */}
          <div className="dashboard-header">
            <div className="header-left">
              <div className="icon-container-main">
                <img src={CampaignAnalytics} alt="CampaignAnalytics" />
              </div>
              <div className="header-text">
                <h3>Campaign Analytics</h3>
                <span>Live</span>
              </div>
            </div>
            <div className="header-right">
              <span className="status-dot"></span>
              <span className="status-text">Updating</span>
            </div>
          </div>

          <div className="dashboard-body">
            {/* Metric Cards Row */}
            <div className="cards-row ">
              <Card title="ROAS" value={4.2} suffix="x" growth="+0.6x this month" icon={ROAS} variant="green" />
              <Card title="Conv. Rate" value={3.8} suffix="%" growth="+1.2% this month" icon={Conv} variant="blue" />
              <Card title="CPL" prefix="₹" value={284} growth="-₹48 this month" icon={cpl} variant="purple" />
            </div>

            {/* Bottom Content Breakdown */}
            <div className="dashboard-content">
              {/* Graph Section */}
              <div className="graph-section">
                <h4>ORGANIC TRAFFIC GROWTH</h4>
                <div className="graph-container">
                  <div className="bars-wrapper">
                    {graphData.map((item, i) => (
                      <div key={i} className="bar-column">
                        <div className="bar-track">
                          <motion.div
                            className="bar-fill"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${item.value}%` }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="bar-label">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Channels Section */}
              <div className="channels-section">
                <h4>CHANNELS</h4>
                <div className="channels-list">
                  {channels.map((item, i) => (
                    <div key={i} className="channel-item">
                      <div className="channel-info">
                        <span className="channel-name">{item.name}</span>
                        <span className="channel-percentage">
                          <CountUp end={item.value} duration={1.5} suffix="%" />
                        </span>
                      </div>
                      <div className="channel-progress-track">
                        <motion.div
                          className="channel-progress-fill"
                          style={{ backgroundColor: item.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Container for Conversion Funnel Card + Bottom Floating Badge */}
      <div className="marketing-relative-container">
        
        {/* Conversion Funnel Card */}
        <motion.div 
          className="marketing-funnel-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="marketing-funnel-title">CONVERSION FUNNEL • THIS MONTH</h4>
          <div className="marketing-funnel-list">
            {funnelData.map((item, i) => (
              <div className="marketing-funnel-row" key={i}>
                <div className="marketing-funnel-label">{item.label}</div>
                <div className="marketing-funnel-track">
                  <motion.div
                    className={`marketing-funnel-bar ${item.class}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="marketing-funnel-value"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (i * 0.12) + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item.displayValue}
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
          <img
    src={SEORankingBadge}
    alt="SEO Ranking"
    className="bottom-floating-image"
  />
      </div>

    </div>
  );
}

function Card({ title, value, suffix = "", prefix = "", growth, icon, variant }) {
  return (
    <motion.div
      className="marketing-metric-card"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="card-top">
        <span className="card-title">{title}</span>
        <img src={icon} alt={title} className="marketing-card-icon" />
      </div>
      <h2 className="card-value">
        {prefix}
        <CountUp end={value} duration={1.5} decimals={value % 1 !== 0 ? 1 : 0} />
        {suffix}
      </h2>
      <small className={`card-growth ${variant}`}>{growth}</small>
    </motion.div>
  );
}