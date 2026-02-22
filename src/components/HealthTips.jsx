import React from 'react';
import { getHealthTips } from '../utils/constants';

const HealthTips = ({ aqiValue }) => {
  const tips = getHealthTips(aqiValue);

  return (
    <div className="health-tips-content">
      <div className="glass" style={{ padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        <span className="current-aqi" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#60a5fa' }}>
          Current AQI: {aqiValue}
        </span>
      </div>

      <div className="tips-sections" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="glass tip-section" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            👥 General Population
          </h4>
          <p style={{ color: '#94a3b8', margin: 0 }}>{tips.general}</p>
        </div>

        <div className="glass tip-section" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚠️ Sensitive Groups
          </h4>
          <p style={{ color: '#94a3b8', margin: 0 }}>{tips.sensitive}</p>
        </div>

        <div className="glass tip-section" style={{ padding: '1.5rem' }}>
          <h4 style={{ color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💡 Quick Actions
          </h4>
          <ul className="action-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {tips.actions.map((tip, index) => (
              <li key={index} style={{
                padding: '0.75rem 0',
                borderBottom: '1px solid var(--glass-border)',
                color: '#94a3b8',
                display: 'flex',
                gap: '0.75rem'
              }}>
                <span style={{ color: '#10b981' }}>✓</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
