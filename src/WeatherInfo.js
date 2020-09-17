import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`;

  return (
    <div>
      <section className="currentWeather">
        <div className="row">
          <div className="col city">
            <p className="city" id="current-city">
              {props.data.city}
            </p>
            <p id="time">
              <FormattedDate date={props.data.date} />
            </p>

            <p>
              <span className="currentTemp">Current Temperature</span>
              <br />
              <span id="temp-current">
                {Math.round(props.data.temperature)}
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

            <img src={iconUrl} id="weather-icon" alt={props.data.description} />
            <p className="weatherDescription" id="weather-description">
              {props.data.description}
            </p>
            <hr />
            <div className="furtherInfo">
              <p className="specs">Feels Like</p>
              <p className="deets" id="feels-like">
                {Math.round(props.data.feelsLike)}°F
              </p>
              <p className="specs">Humdity</p>
              <p className="deets" id="humidity">
                {Math.round(props.data.humidity)}%
              </p>
              <p className="specs">Wind Speed</p>
              <p className="deets" id="wind">
                {Math.round(props.data.windSpeed)} mph
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
}
