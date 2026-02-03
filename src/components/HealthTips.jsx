import React from 'react';
import { getHealthTips } from '../utils/constants';

const HealthTips = ({ aqiValue }) => {
  const tips = getHealthTips(aqiValue);
  
  return (
    <div className="health-tips-content">
      <div className="aqi-indicator">
        <span className="current-aqi">Current AQI: {aqiValue}</span>
      </div>
      
      <div className="tips-sections">
        <div className="tip-section">
          <h4>👥 General Population</h4>
          <p>{tips.general}</p>
        </div>
        
        <div className="tip-section">
          <h4>⚠️ Sensitive Groups</h4>
          <p>{tips.sensitive}</p>
        </div>
        
        <div className="tip-section">
          <h4>💡 Quick Actions</h4>
          <ul className="action-list">
            {tips.actions.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
