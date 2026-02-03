import axios from 'axios';

// Using World Air Quality Index API - you'll need to get a free token from https://aqicn.org/data-platform/token/
const WAQI_TOKEN = 'e30c517d41e3bed22e20a60ecb706391cec1c822'; // Get from https://aqicn.org/data-platform/token/
const BASE_URL = 'https://api.waqi.info';

export const fetchAQIData = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/feed/geo:${lat};${lon}/?token=${WAQI_TOKEN}`
    );
    
    if (response.data.status === 'ok') {
      return {
        aqi: response.data.data.aqi,
        location: response.data.data.city.name,
        pollutants: response.data.data.iaqi
      };
    }
    throw new Error('Failed to fetch AQI data');
  } catch (error) {
    console.error('Error fetching AQI data:', error);
    throw error;
  }
};

export const fetchCityAQI = async (cityName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/feed/${cityName}/?token=${WAQI_TOKEN}`
    );
    
    if (response.data.status === 'ok') {
      return {
        aqi: response.data.data.aqi,
        location: response.data.data.city.name,
        pollutants: response.data.data.iaqi
      };
    }
    throw new Error(`Failed to fetch AQI data for ${cityName}`);
  } catch (error) {
    console.error(`Error fetching AQI data for ${cityName}:`, error);
    throw error;
  }
};
