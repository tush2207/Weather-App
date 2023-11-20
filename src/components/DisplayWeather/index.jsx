import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Container, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import './DisplayWeather.css';
import { Box } from '@material-ui/core';
import useDisplayWeather from './useDisplayWeather';
import WeatherDetails from '../WeatherDetails';

const DisplayWeather = () => {
  const { handleChange, cityName, weatherDetails, getWeatherDetails } =
    useDisplayWeather();

  console.log(weatherDetails, 'weatherDetails');

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
        <button className='getweather' onClick={(e) => getWeatherDetails(e)}>
          Search
        </button>
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
