import "./Weatherapp.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import { WEATHER_API_KEY } from "../ApiKeys/Apikeys";
import TextField from "@material-ui/core/TextField";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Date from "../Weather/Date";

const Part = () => {
  const [temp, setTemp] = useState(null);
  let [entercity, setEntercity] = useState("Mumbai");
  const city = (e) => {
    setEntercity(e.target.value);
  };
  // let city = "Mumbai"
  //Declaration of Country Name
  let country = "India";
  //Declaration of Unit Name
  let units = "metric";
  //Declaration of APi URL
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${entercity},${country}&appid=${WEATHER_API_KEY}&units=${units}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setTemp(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  }, [apiUrl]);

  console.log("data", temp);

  return (
    <>
      <div className="body">
        <div className="Header">
          <h2>Current Weather</h2>
          <div className="Location-Date">
            <TextField
              style={{ height: 35, marginTop: 25 }}
              id="filled-textarea"
              label="Location"
              variant="outlined"
              onChange={city}
            />
            <Date />
          </div>
        </div>

        <div className="Content">
          <div className="Left_Sidebar">
            <div className="City">
              <h1>
                <LocationOnIcon fontSize="large" />
                {entercity}
              </h1>
            </div>
            <div>
              <div className="Img-Temp">
                <div className="Logo">
                  <Avatar
                    alt="logo"
                    sx={{
                      width: 110,
                      height: "auto",
                      border: "2px solid black",
                      marginRight: 6,
                      backgroundColor: "rgba(28, 74, 248, 0.3.2)",
                    }}
                    src={`http://openweathermap.org/img/wn/${
                      temp && temp.weather[0].icon
                    }@2x.png`}
                  />
                </div>
                <div>
                  <div className="Temp">{temp && temp.main.temp}°C</div>
                  <div className="Min_Max">
                    <h3>Min:{temp && temp.main.temp_min}°C</h3>
                    <h3> Max:{temp && temp.main.temp_max}°C</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Right_Sidebar">
            <div className="Right_Sidebar-Content">
              <div className="Weather-Info">
                <h2>Humidity</h2>
                <div className="Weather-Apidata">
                  {temp && temp.main.humidity}%
                </div>
              </div>
              <div className="Weather-Info">
                <h2>Pressure</h2>
                <div className="Weather-Apidata">
                  {temp && temp.main.pressure}hPa
                </div>
              </div>
              <div className="Weather-Info">
                <h2>Wind</h2>
                <div className="Weather-Apidata">
                  {temp && temp.wind.speed}m/s {temp && temp.wind.deg}°
                </div>
              </div>
            </div>
            <div className="Right_Sidebar-Content">
              <div className="Weather-Info">
                <h2>Sunrise</h2>
                <div className="Weather-Apidata">
                  {" "}
                  {temp && temp.sys.sunrise}
                </div>
              </div>
              <div className="Weather-Info">
                <h2>Sunset</h2>
                <div className="Weather-Apidata">
                  {" "}
                  {temp && temp.sys.sunset}
                </div>
              </div>
              <div className="Weather-Info">
                <h2 className="title">Description</h2>
                <div className="Weather-Apidata">
                  {temp && temp.weather[0].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;
