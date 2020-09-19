import React, { useState } from "react";
import axios from "axios";
import ForecastWeatherPreview from "./ForecastWeatherPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (props.units === "fahrenheit") {
    if (loaded && props.city === forecast.city.name) {
      console.log(forecast);

      return (
        <div className="row scrolling-wrapper-flexbox">
          <ForecastWeatherPreview data={forecast.list[0]} unit="fahrenheit" />
          <ForecastWeatherPreview data={forecast.list[1]} unit="fahrenheit" />
          <ForecastWeatherPreview data={forecast.list[2]} unit="fahrenheit" />
          <ForecastWeatherPreview data={forecast.list[3]} unit="fahrenheit" />
          <ForecastWeatherPreview data={forecast.list[4]} unit="fahrenheit" />
        </div>
      );
    } else {
      let apiKey = "f965be3a8c73441341db743d519d1c93";
      let units = "imperial";
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(handleForecastResponse);

      return <div>{props.city}</div>;
    }
  }

  if (props.units === "celsius") {
    if (loaded && props.city === forecast.city.name) {
      console.log(forecast);

      return (
        <div className="row scrolling-wrapper-flexbox">
          <ForecastWeatherPreview data={forecast.list[0]} unit="celsius" />
          <ForecastWeatherPreview data={forecast.list[1]} unit="celsius" />
          <ForecastWeatherPreview data={forecast.list[2]} unit="celsius" />
          <ForecastWeatherPreview data={forecast.list[3]} unit="celsius" />
          <ForecastWeatherPreview data={forecast.list[4]} unit="celsius" />
        </div>
      );
    } else {
      let apiKey = "f965be3a8c73441341db743d519d1c93";
      let units = "imperial";
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(handleForecastResponse);

      return <div>{props.city}</div>;
    }
  }
}
