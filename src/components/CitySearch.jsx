import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { searchCities } from '../services/aqiService';

const CitySearch = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length >= 2) {
        const results = await searchCities(searchTerm.trim());
        setSuggestions(results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      handleSelect(searchTerm.trim());
    }
  };

  const handleSelect = (cityName) => {
    onCitySelect(cityName);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="city-search" style={{ position: 'relative', width: '100%', maxWidth: '550px' }}>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => searchTerm.length >= 2 && setShowSuggestions(true)}
            placeholder="Search every city in the world..."
            className="search-input"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn search-btn">
          Search
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="glass" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '0.5rem',
          zIndex: 1001,
          maxHeight: '300px',
          overflowY: 'auto',
          padding: '0.5rem',
          borderRadius: '16px',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)'
        }}>
          {suggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item.station.name)}
              style={{
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderRadius: '10px',
                transition: 'var(--transition)',
                borderBottom: index < suggestions.length - 1 ? '1px solid var(--glass-border)' : 'none',
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.target.style.background = 'transparent'}
            >
              <div style={{ fontWeight: 600, fontSize: '1rem', color: '#f8fafc' }}>{item.station.name}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>AQI: {item.aqi}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitySearch;
