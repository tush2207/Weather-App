import React from 'react';
import WeatherDetails from '../WeatherDetails';
import './DisplayWeather.css';
import useDisplayWeather from './useDisplayWeather';
import { Button } from '@mui/material';

const DisplayWeather = () => {
  const { handleChange, cityName, weatherDetails, getWeatherDetails } =
    useDisplayWeather();

  return (
    <div className='weather'>
      <span className='title'>Weather App</span>
      <br />
      <form>
        <input
          type='text'
          placeholder='city'
          name='city'
          value={cityName}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant='outlined'
          type='submit'
          color='success'
          onClick={(e) => getWeatherDetails(e)}
        >
          Submit
        </Button>

        {/* <button className='getweather' onClick={(e) => getWeatherDetails(e)}>
          Search
        </button> */}
      </form>

      {weatherDetails !== undefined ? (
        <div>
          <WeatherDetails data={weatherDetails} />
        </div>
      ) : null}
    </div>
  );
};

export default DisplayWeather;
