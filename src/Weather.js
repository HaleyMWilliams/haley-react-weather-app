import React from "react";
import "./index.css";

export default function Weather() {
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
              --
            </p>
            <p id="time">--</p>

            <p>
              <span className="currentTemp">Current Temperature</span>
              <br />
              <span id="temp-current">-- </span>
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
              src="https://openweathermap.org/img/wn/03d@2x.png"
              id="weather-icon"
              alt="weather-icon"
            />
            <p className="weatherDescription" id="weather-description">
              --
            </p>
            <hr />
            <div className="furtherInfo">
              <p className="specs">Feels Like</p>
              <p className="deets" id="feels-like">
                --
              </p>
              <p className="specs">Humdity</p>
              <p className="deets" id="humidity">
                --
              </p>
              <p className="specs">Wind Speed</p>
              <p className="deets" id="wind">
                --
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p class="signature">
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
}
