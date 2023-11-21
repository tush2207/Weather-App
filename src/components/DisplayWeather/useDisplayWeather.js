import { useEffect, useState, useCallback } from 'react';
import weatherServices from '../../api';

const useDisplayWeather = () => {
  const [weatherDetails, setWeatherDetails] = useState();
  const [cityName, setCityName] = useState('Mumbai');
  const [initialLoad, setInitialLoad] = useState(true);

  // Modified code
  const fetchWeatherData = useCallback(async () => {
    try {
      const response = await weatherServices.getWeatherDetailsApi(cityName);
      setWeatherDetails(response?.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }, [cityName]); // Add dependencies if needed

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
    const fetchData = async () => {
      await fetchWeatherData();
    };

    // Only make the API call on initial load or when the search button is clicked
    if (initialLoad) {
      fetchData();
      setInitialLoad(false);
    }
  }, [initialLoad, fetchWeatherData]);

  return { weatherDetails, handleChange, cityName, getWeatherDetails };
};

export default useDisplayWeather;
