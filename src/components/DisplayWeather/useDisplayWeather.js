import { useEffect, useState } from 'react';
import weatherServices from '../../api';

const useDisplayWeather = () => {
  const [weatherDetails, setWeatherDetails] = useState();
  const [cityName, setCityName] = useState('Mumbai');
  const [initialLoad, setInitialLoad] = useState(true);

  async function fetchWeatherData() {
    try {
      const response = await weatherServices.getWeatherDetailsApi(cityName);
      setWeatherDetails(response?.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setCityName(value);
  };

  const getWeatherDetails = (e) => {
    e.preventDefault();
    fetchWeatherData();
    setInitialLoad(false); // Update initialLoad after the first search
  };

  useEffect(() => {
    // Only make the API call on initial load or when the search button is clicked
    if (initialLoad) {
      fetchWeatherData();
      setInitialLoad(false);
    }
  }, [initialLoad, cityName]);

  return { weatherDetails, handleChange, cityName, getWeatherDetails };
};

export default useDisplayWeather;
