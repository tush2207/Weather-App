import { WEATHER_API_KEY } from '../config/constants';

export const ApiUrls = {
  GET_WEATHER_DETAILS_URL: (cityName) =>
    `weather?q=${cityName}&APPID=${WEATHER_API_KEY}`,
};
