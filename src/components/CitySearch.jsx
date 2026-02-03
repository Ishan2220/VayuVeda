import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const CitySearch = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const popularCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal'
  ];
  
  const filteredCities = popularCities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onCitySelect(searchTerm.trim());
      setSearchTerm('');
    }
  };
  
  return (
    <div className="city-search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for any city..."
            className="search-input"
            list="cities"
          />
          <datalist id="cities">
            {filteredCities.map(city => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>
        <button type="submit" className="search-btn">
          Check AQI
        </button>
      </form>
    </div>
  );
};

export default CitySearch;
