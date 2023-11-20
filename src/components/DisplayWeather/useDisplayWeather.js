import { useEffect, useState } from 'react';
import weatherServices from '../../api';

const useDisplayWeather = () => {
  const [weatherDetails, setWeatherDetails] = useState();
  const [cityName, setCityName] = useState('Mumbai');

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

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const getWeatherDetails = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return { weatherDetails, handleChange, cityName, getWeatherDetails };
};
export default useDisplayWeather;
