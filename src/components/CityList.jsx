import React from 'react';
import { getAQIColor, getAQIStatus } from '../utils/constants';

const CityList = ({ cities, onCityClick, selectedCity }) => {
  return (
    <div className="cities-list-content">
      <div className="cities-scroll">
        {cities.map((city, index) => (
          <div
            key={index}
            className={`city-item ${selectedCity === city.name ? 'selected' : ''}`}
            onClick={() => onCityClick(city.name)}
          >
            <div className="city-info">
              <h4 className="city-name">{city.name}</h4>
              <div className="city-details">
                <span 
                  className="city-aqi"
                  style={{ color: getAQIColor(city.aqi) }}
                >
                  AQI: {city.aqi !== 'N/A' ? city.aqi : 'N/A'}
                </span>
                <span 
                  className="city-status"
                  style={{ color: getAQIColor(city.aqi) }}
                >
                  {city.aqi !== 'N/A' ? getAQIStatus(city.aqi) : 'No Data'}
                </span>
              </div>
            </div>
            <div className="city-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
