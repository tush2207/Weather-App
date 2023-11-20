import React from 'react';
import './weatherDetails.css';
import { Box, Grid, Stack, Typography } from '@mui/material';
import weatherImg from '../../assets/weather.jpg';
import { getTimeInfo } from '../../utils/helper';
function WeatherDetails(props) {
  const { data } = props && props;
  console.log(props, 'props');
  const iconurl =
    'http://openweathermap.org/img/wn/' +
    `${data?.cod !== 404 ? data?.weather[0].icon : null}` +
    '.png';

  const { currentDate, currentDay, currentTime } = getTimeInfo();

  return (
    <div className='displayweather'>
      {data?.cod !== 404 ? (
        <React.Fragment>
          <div
            className='maincard'
            style={{
              backgroundImage: `url(${weatherImg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              padding: 12,
            }}
          >
            <Stack
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                color: 'black',
                borderRadius: '10px',
              }}
            >
              <Grid container padding='20px'>
                <Grid item xs={12}>
                  <Typography variant='h3' textAlign='end'>
                    {data?.name} , {data?.sys.country}
                  </Typography>
                </Grid>
                <Grid item xs={7} marginTop='32px'>
                  <Typography variant='h3' textAlign='start'>
                    {currentTime}
                  </Typography>
                  <Typography variant='h6' textAlign='start'>
                    {currentDay} {currentDate}
                  </Typography>
                </Grid>
                <Grid item xs={5} marginTop='24px'>
                  <Typography textAlign='end' fontSize='70px'>
                    {Math.floor(data?.main.temp - 273.15)}
                    <sup>o</sup> C
                  </Typography>
                </Grid>
              </Grid>

              {/* <Box style={{ border: '1px  solid red' }} marginTop='10px'>
                <Typography
                  variant='h3'
                  textAlign='start'
                  
                  style={{ border: '1px  solid red' }}
                >
                  {currentTime}
                </Typography>
                <Typography
                  variant='h5'
                  textAlign='start'
                  color='whitesmoke'
                  style={{ border: '1px  solid red' }}
                >
                  {currentDay} {currentDate}
                </Typography>
              </Box> */}
            </Stack>
            {/* <Typography
              variant='h4'
              style={{ textAlign: 'end', color: 'whitesmoke' }}
            >
              {data?.name} , {data?.sys.country}
            </Typography> */}
            {/* <img
              className='weather-icon'
              src={iconurl}
              alt=''
              srcSet=''
              style={{
                backgroundColor: 'whitesmoke',
                borderRadius: '100px',
                marginTop: '20px',
              }}
            /> */}

            {/* <Box marginTop='10px'>
              <Typography variant='h3' textAlign='start' color='white'>
                {currentTime}
              </Typography>
              <Typography variant='h5' textAlign='start' color='whitesmoke'>
                {currentDay} {currentDate}
              </Typography>
            </Box> */}
            {/* <Typography
              // variant='h1'
              textAlign='end'
              color='whitesmoke'
              fontSize='75px'
            >
              {Math.floor(data?.main.temp - 273.15)}
              <sup>o</sup> C
            </Typography> */}
            {/* <span className='weather-main'>{data?.weather[0].main}</span> */}
          </div>
          <div className='weatherdetails'>
            <div className='section1'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>High/Low</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor(data?.main.temp_max - 273.15)}/
                        {Math.floor(data?.main.temp_min - 273.15)}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Humidity</h4>
                    </td>
                    <td>
                      <span>{data?.main.humidity} %</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Pressure</h4>
                    </td>
                    <td>
                      <span>{data?.main.pressure} hPa</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Visibility</h4>
                    </td>
                    <td>
                      <span>{data?.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='section2'>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>Wind</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor((data?.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Wind Direction</h4>
                    </td>
                    <td>
                      <span>
                        {data?.wind.deg}
                        <sup>o</sup> deg
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Sunrise</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(
                          data?.sys.sunrise * 1000
                        ).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Sunset</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data?.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className='maincard'>
          <h2>{data?.message}</h2>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
