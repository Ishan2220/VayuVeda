import React from 'react';
import { getAQIStatus, getAQIColor } from '../utils/constants';

const AQIMeter = ({ aqiValue }) => {
  const status = getAQIStatus(aqiValue);
  const color = getAQIColor(aqiValue);
  
  return (
    <div className="aqi-meter-wrapper">
      <div className="glass aqi-card">
        <div className="aqi-score" style={{ color: color }}>
          {aqiValue}
        </div>
        <div className="aqi-status" style={{ color: color }}>
          {status}
        </div>
        
        <div className="meter-legend">
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#00e400' }}></span>
            <span>Good (0-50)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ffff00' }}></span>
            <span>Moderate (51-100)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ff7e00' }}></span>
            <span>Unhealthy (101-150)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#ff0000' }}></span>
            <span>Very Unhealthy (151-200)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#8f3f97' }}></span>
            <span>Severe (201-300)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ backgroundColor: '#7e0023' }}></span>
            <span>Hazardous (300+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQIMeter;
