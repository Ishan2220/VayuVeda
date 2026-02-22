import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import CitySearch from './components/CitySearch';
import AQIMeter from './components/AQIMeter';
import HealthTips from './components/HealthTips';
import CityList from './components/CityList';
import { fetchAQIData, fetchCityAQI } from './services/aqiService';
import useLocation from './hooks/useLocation';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.css';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [citiesData, setCitiesData] = useState([]);
  const [showHealthTips, setShowHealthTips] = useState(false);
  const [showCitiesList, setShowCitiesList] = useState(false);
  const { location, locationLoading } = useLocation();

  // Fetch current location AQI on component mount
  useEffect(() => {
    if (location) {
      handleLocationAQI();
    }
  }, [location]);

  // Fetch popular Indian cities AQI data
  useEffect(() => {
    fetchPopularCitiesData();
  }, []);

  const handleLocationAQI = async () => {
    if (!location) return;

    setLoading(true);
    try {
      const data = await fetchAQIData(location.lat, location.lon);
      setAqiData(data);
      setSelectedCity({ name: 'Your Location', ...data });
      toast.success('Location AQI loaded successfully!');
    } catch (error) {
      toast.error('Failed to fetch location AQI');
    } finally {
      setLoading(false);
    }
  };

  const fetchPopularCitiesData = async () => {
    const globalCities = [
      'New York', 'London', 'Tokyo', 'Paris', 'Beijing',
      'Delhi', 'Dubai', 'Singapore', 'Sydney', 'Cairo'
    ];

    const citiesPromises = globalCities.map(async (city) => {
      try {
        const data = await fetchCityAQI(city);
        return { name: city, ...data };
      } catch (error) {
        return { name: city, aqi: 'N/A', status: 'Data unavailable' };
      }
    });

    const results = await Promise.all(citiesPromises);
    setCitiesData(results);
  };

  const handleCitySelect = async (cityName) => {
    setLoading(true);
    try {
      const data = await fetchCityAQI(cityName);
      setAqiData(data);
      setSelectedCity({ name: cityName, ...data });
      toast.success(`${cityName} AQI loaded successfully!`);
    } catch (error) {
      toast.error(`Failed to fetch AQI for ${cityName}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <button
          className="float-btn"
          onClick={() => setShowHealthTips(!showHealthTips)}
          title="Health Tips"
        >
          🏥
        </button>
        <button
          className="float-btn"
          onClick={() => setShowCitiesList(!showCitiesList)}
          title="Cities List"
        >
          🏙️
        </button>
      </div>

      {/* Health Tips Side Panel */}
      <div className={`side-panel ${showHealthTips && aqiData ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>🏥 Health Tips</h3>
          <button
            className="close-btn"
            onClick={() => setShowHealthTips(false)}
          >
            ✕
          </button>
        </div>
        <div className="panel-content">
          {aqiData && <HealthTips aqiValue={aqiData.aqi} />}
        </div>
      </div>

      {/* Cities List Side Panel */}
      <div className={`side-panel ${showCitiesList ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>🏙️ Global Cities</h3>
          <button
            className="close-btn"
            onClick={() => setShowCitiesList(false)}
          >
            ✕
          </button>
        </div>
        <div className="panel-content">
          <CityList
            cities={citiesData}
            onCityClick={(city) => {
              handleCitySelect(city);
              setShowCitiesList(false);
            }}
            selectedCity={selectedCity?.name}
          />
        </div>
      </div>

      {/* Overlay for side panels */}
      {(showHealthTips || showCitiesList) && (
        <div
          className="overlay"
          onClick={() => {
            setShowHealthTips(false);
            setShowCitiesList(false);
          }}
        ></div>
      )}

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">
            VayuVeda
          </h1>
          <p className="hero-subtitle">
            Your premium Air Quality Guardian. Real-time monitoring with personalized health insights.
          </p>
        </section>

        <section className="search-section">
          <CitySearch onCitySelect={handleCitySelect} />

          {location && (
            <button
              className="btn location-btn"
              onClick={handleLocationAQI}
              disabled={loading || locationLoading}
            >
              📍 Use Location
            </button>
          )}
        </section>

        {(loading || locationLoading) && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Fetching air quality data...</p>
          </div>
        )}

        {aqiData && (
          <div className="aqi-dashboard">
            <AQIMeter aqiValue={aqiData.aqi} />
          </div>
        )}
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

export default App;
