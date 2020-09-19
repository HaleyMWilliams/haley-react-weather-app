import React, { useState } from "react";
import FeelsLikeConversion from "./FeelsLikeConversion";
import WeatherForecast from "./WeatherForecast";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="currentTemp">Current Temperature</span>
        <br />
        <span id="temp-current">{Math.round(props.fahrenheit)}</span>
        <span className="active">°F</span>
        <span id="space"> | </span>
        <a href="/" className="unit" onClick={convertToCelsius}>
          °C
        </a>
        <img src={props.iconUrl} id="weather-icon" alt={props.description} />
        <p className="weatherDescription" id="weather-description">
          {props.description}
        </p>
        <hr />
        <FeelsLikeConversion
          unit="fahrenheit"
          feelsLike={props.feelsLike}
          humidity={props.humidity}
          windSpeed={props.windSpeed}
          date={props.date}
        />
        <hr />
        <WeatherForecast city={props.city} units="fahrenheit" />
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <span className="currentTemp">Current Temperature</span>
        <br />
        <span id="temp-current">
          {Math.round(((props.fahrenheit - 32) * 5) / 9)}
        </span>
        <span className="active">°C</span>
        <span id="space"> | </span>
        <a href="/" className="unit" onClick={convertToFahrenheit}>
          °F
        </a>
        <img src={props.iconUrl} id="weather-icon" alt={props.description} />
        <p className="weatherDescription" id="weather-description">
          {props.description}
        </p>
        <hr />
        <FeelsLikeConversion
          unit="celsius"
          feelsLike={props.feelsLike}
          humidity={props.humidity}
          windSpeed={props.windSpeed}
          date={props.date}
        />
        <hr />
        <WeatherForecast city={props.city} units="celsius" />
        <hr />
      </div>
    );
  }
}
