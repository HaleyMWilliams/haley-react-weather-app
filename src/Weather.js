import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      windSpeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      name: response.data.name,
      iconURL: `https://openweathermap.org/img/wn/03d@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <section className="currentWeather">
          <form className="search-form" id="search-form">
            <input
              type="text"
              placeholder="Enter New City..."
              id="search-city"
              autofocus="on"
            />
            <input type="submit" value="Search" id="submit-search" />
            <button id="current-location">Use Current Location</button>
          </form>
          <div className="row">
            <div className="col city">
              <p className="city" id="current-city">
                {weatherData.name}
              </p>
              <p id="time">
                <FormattedDate date={weatherData.date} />
              </p>

              <p>
                <span className="currentTemp">Current Temperature</span>
                <br />
                <span id="temp-current">
                  {Math.round(weatherData.temperature)}
                </span>
                <a
                  href="/"
                  className="weatherTemperature active"
                  id="farenheit-link"
                >
                  °F
                </a>
                <span id="space"> | </span>
                <a
                  href="/"
                  className="weatherTemperature active"
                  id="celsius-link"
                >
                  °C
                </a>
              </p>

              <img
                src={weatherData.iconURL}
                id="weather-icon"
                alt={weatherData.description}
              />
              <p className="weatherDescription" id="weather-description">
                {weatherData.description}
              </p>
              <hr />
              <div className="furtherInfo">
                <p className="specs">Feels Like</p>
                <p className="deets" id="feels-like">
                  {Math.round(weatherData.feelsLike)}°F
                </p>
                <p className="specs">Humdity</p>
                <p className="deets" id="humidity">
                  {Math.round(weatherData.humidity)}%
                </p>
                <p className="specs">Wind Speed</p>
                <p className="deets" id="wind">
                  {Math.round(weatherData.windSpeed)} mph
                </p>
              </div>
            </div>
          </div>
          <hr />
          <p className="signature">
            Coded by{" "}
            <a
              href="https://github.com/HaleyMWilliams/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haley Williams
            </a>
          </p>
        </section>
      </div>
    );
  } else {
    const apiKey = "f965be3a8c73441341db743d519d1c93";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
