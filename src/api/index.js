import axios from 'axios';
import { BASE_API } from '../config/constants';
import { ApiUrls } from './config';

const weatherServices = {
  getWeatherDetailsApi: async (cityName) => {
    try {
      const res = await axios.get(
        BASE_API + ApiUrls.GET_WEATHER_DETAILS_URL(cityName)
      );
      return res;
    } catch (error) {
      console.error(`getWeatherDetailsApi failed: ${error.message}`);
      throw error;
    }
  },
};

export default weatherServices;
