import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Avatar, Container, Grid, Stack, TextField } from '@mui/material';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { WEATHER_API_KEY } from '../ApiKeys/Apikeys';
import './Weatherapp.css';

const Weather = () => {
  const [weatherDetails, setWeatherDetails] = useState({ data: null });
  const [cityName, setCityName] = useState('Mumbai');
  // let [cityName, setcityName] = useState('Mumbai');
  const APIKEY = '7607d41b60a0c17a902818c31873eca2';

  async function fetchWeatherData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIKEY}`
      );
      const data = await response.json();
      setWeatherDetails(data && data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setCityName(value);
  };

  useLayoutEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <Stack>
      <div className='Header'>
        <h2>Current Weather</h2>
        <div className='Location-Date'>
          <TextField
            style={{ height: 35, marginTop: 25 }}
            id='filled-textarea'
            label='Location'
            variant='outlined'
            onChange={handleChange}
          />
          <Date />
        </div>
      </div>

      <div className='Content'>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className='City'>
              <h1>
                <LocationOnIcon fontSize='large' />
                {cityName}
              </h1>
            </div>
            {/* <div className='Img-Temp'>
                <div className='Logo'>
                  <Avatar
                    alt='logo'
                    sx={{
                      width: 110,
                      height: 'auto',
                      border: '2px solid black',
                      marginRight: 6,
                      backgroundColor: 'rgba(28, 74, 248, 0.3.2)',
                    }}
                    src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
                  />
                </div>
                <div>
                  <div className='Temp'>{weatherDetails.main.temp}°C</div>
                  <div className='Min_Max'>
                    <h3>Min:{weatherDetails.main.temp_min}°C</h3>
                    <h3> Max:{weatherDetails.main.temp_max}°C</h3>
                  </div>
                </div>
              </div> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Right Sidebar Content */}
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
};

export default Weather;
