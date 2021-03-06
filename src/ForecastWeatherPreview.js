import React from "react";
import ForecastDate from "./ForecastDate";

export default function ForecastWeatherPreview(props) {
  let forecastDate = new Date(props.data.dt * 1000);
  let iconCode = props.data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  if (props.unit === "fahrenheit") {
    return (
      <div className="col-2.4 forecast">
        <ForecastDate date={forecastDate} />
        <img src={iconUrl} alt="icon" className="forecastIcon" />
        {Math.round(props.data.main.temp)}°F
      </div>
    );
  }
  if (props.unit === "celsius") {
    return (
      <div className="col-2.4 forecast">
        <ForecastDate date={forecastDate} />
        <img src={iconUrl} alt="icon" className="forecastIcon" />
        {Math.round(((props.data.main.temp - 32) * 5) / 9)}°C
      </div>
    );
  }
}
