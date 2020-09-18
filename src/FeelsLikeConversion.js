import React from "react";

export default function FahrenheitConversion(props) {
  if (props.unit === "fahrenheit") {
    return (
      <div className="furtherInfo">
        <p className="specs">Feels Like</p>
        <p>
          <span className="deets">{props.feelsLike}</span>
          <span className="additions"> °F</span>
        </p>
        <p className="specs">Humdity</p>
        <p>
          <span className="deets">{props.humidity}</span>
          <span className="additions"> %</span>
        </p>
        <p className="specs">Wind Speed</p>
        <p>
          <span className="deets">{props.windSpeed}</span>{" "}
          <span className="additions">mph</span>
        </p>
      </div>
    );
  }
  if (props.unit === "celsius") {
    return (
      <div className="furtherInfo">
        <p className="specs">Feels Like</p>
        <p>
          <span className="deets">
            {Math.round(((props.feelsLike - 32) * 5) / 9)}
          </span>
          <span className="additions"> °C</span>
        </p>
        <p className="specs">Humdity</p>
        <p>
          <span className="deets">{props.humidity}</span>
          <span className="additions"> %</span>
        </p>
        <p className="specs">Wind Speed</p>
        <p>
          <span className="deets">{Math.round(props.windSpeed * 1.60934)}</span>{" "}
          <span className="additions"> kmh</span>
        </p>
      </div>
    );
  }
}
