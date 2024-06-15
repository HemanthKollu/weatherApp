import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { LuWind } from "react-icons/lu";
import fetchWeatherData from "../../api";
import "./index.css";
import dateFormat from "dateformat";
import Icons from "../Icons";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const onSearchCity = async () => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setCity("");
    } catch (error) {
      alert("Enter Correct City Name");
    }
  };

  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }

  return (
    <main>
      <div className="weathersearchContainer">
        <h1 className="header">Weather App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter City Name"
            className="cityInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="click" className="btn" onClick={onSearchCity}>
            <FaSearchLocation color="white" size="20" className="search-icon" />
          </button>
        </div>
        {weatherData && (
          <div className="content">
            <div className="location-container">
              <SlLocationPin size="26" />
              <p className="city-name">
                {weatherData.name}{" "}
                <span className="country-code">
                  ({weatherData.sys.country})
                </span>
              </p>
            </div>
            <p className="date-time">{renderDate()}</p>
            <Icons weatherData={weatherData}/>
            <p className="weather-description">
              {weatherData.weather[0].description}
            </p>
            <h2 className="temperature">
              {weatherData.main.temp}
              <span className="temp-deg">&deg;C</span>
            </h2>
            <p className="feels-like">
              Feels like {weatherData.main.feels_like}{" "}
              <span className="feelsLike-deg">&deg;C</span>
            </p>
            <div className="windStatus">
              <LuWind size="25" />
              <p className="wind-text">
                Wind is {weatherData.wind.speed} knots in {weatherData.wind.deg}
                &deg;
              </p>
            </div>
          </div>
        )}
        {!weatherData && (
          <div className="not-found-content">
            <p className="not-found">
              To get Weather data
              <br /> Kindly search the City name
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default WeatherApp;
