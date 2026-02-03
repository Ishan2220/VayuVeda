import React from 'react';
import { getAQIStatus, getAQIColor } from '../utils/constants';

const AQIMeter = ({ aqiValue }) => {
  const status = getAQIStatus(aqiValue);
  const color = getAQIColor(aqiValue);
  
  return (
    <div className="aqi-meter">
      <div className="meter-container">
        {/* Single colored background based on AQI */}
        <div 
          className="meter-background"
          style={{ backgroundColor: color }}
        >
          <div className="meter-center">
            <div className="aqi-value">
              {aqiValue}
            </div>
            <div className="aqi-status">
              {status}
            </div>
          </div>
        </div>
      </div>
      
      <div className="meter-legend">
        <div className="legend-item">
          <span className="legend-color good"></span>
          <span>Good (0-50)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color moderate"></span>
          <span>Moderate (51-100)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color unhealthy-sensitive"></span>
          <span>Unhealthy for Sensitive (101-150)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color unhealthy"></span>
          <span>Unhealthy (151-200)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color very-unhealthy"></span>
          <span>Very Unhealthy (201-300)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color hazardous"></span>
          <span>Hazardous (300+)</span>
        </div>
      </div>
    </div>
  );
};

export default AQIMeter;
