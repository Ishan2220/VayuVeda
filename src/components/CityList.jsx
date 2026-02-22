import React from 'react';
import { getAQIColor, getAQIStatus } from '../utils/constants';

const CityList = ({ cities, onCityClick, selectedCity }) => {
  return (
    <div className="cities-list-content">
      <div className="cities-scroll">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`glass city-item ${selectedCity === city.name ? 'selected' : ''}`}
            onClick={() => onCityClick(city.name)}
            style={{
              marginBottom: '1rem',
              padding: '1.25rem',
              cursor: 'pointer',
              border: selectedCity === city.name ? '1px solid #3b82f6' : '1px solid var(--glass-border)'
            }}
          >
            <div className="city-info">
              <h4 className="city-name" style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{city.name}</h4>
              <div className="city-details" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                <span
                  className="city-aqi"
                  style={{ color: getAQIColor(city.aqi), fontWeight: 700 }}
                >
                  AQI: {city.aqi !== 'N/A' ? city.aqi : 'N/A'}
                </span>
                <span
                  className="city-status"
                  style={{ color: getAQIColor(city.aqi), opacity: 0.9 }}
                >
                  {city.aqi !== 'N/A' ? getAQIStatus(city.aqi) : 'No Data'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
