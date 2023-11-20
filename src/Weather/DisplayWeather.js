import React from 'react';
import './displayweather.css';

function DisplayWeather(props) {
  const { data } = props;

  const iconurl =
    'http://openweathermap.org/img/wn/' +
    `${data.cod !== 404 ? data.weather[0]?.icon : null}` +
    '.png';

  return (
    <div className='display-weather'>
      {' '}
      {/* Updated class name to follow React.js convention */}
      {data.cod !== 404 ? (
        <>
          <div className='main-card'>
            {' '}
            {/* Updated class name to follow React.js convention */}
            <span className='card-title'>
              {data.name}, {data.sys.country}. Weather
            </span>
            <span className='card-subtitle'>
              As of {new Date().toLocaleTimeString()}
            </span>
            <h1>
              {Math.floor(data.main?.temp - 273.15)}
              <sup>o</sup>
            </h1>
            <span className='weather-main'>{data.weather[0].main}</span>
            <img className='weather-icon' src={iconurl} alt='' srcSet='' />
            <span className='weather-description'>
              {data.weather[0].description}
            </span>
          </div>
          <div className='weather-details'>
            {' '}
            {/* Updated class name to follow React.js convention */}
            <div className='section-1'>
              {' '}
              {/* Updated class name to follow React.js convention */}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>High/Low</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor(data.main?.temp_max - 273.15)}/
                        {Math.floor(data.main?.temp_min - 273.15)}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Humidity</h4>
                    </td>
                    <td>
                      <span>{data.main?.humidity} %</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Pressure</h4>
                    </td>
                    <td>
                      <span>{data.main?.pressure} hPa</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Visibility</h4>
                    </td>
                    <td>
                      <span>{data.visibility / 1000} Km</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='section-2'>
              {' '}
              {/* Updated class name to follow React.js convention */}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>Wind</h4>
                    </td>
                    <td>
                      <span>
                        {Math.floor((data.wind.speed * 18) / 5)} km/hr
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Wind Direction</h4>
                    </td>
                    <td>
                      <span>
                        {data.wind.deg}
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
                        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4>Sunset</h4>
                    </td>
                    <td>
                      <span>
                        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className='main-card'>
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
