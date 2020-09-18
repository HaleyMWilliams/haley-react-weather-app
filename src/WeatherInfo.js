import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`;

  return (
    <div>
      <section className="currentWeather">
        <div className="row">
          <div className="col city">
            <p className="city" id="current-city" city={props.data.city}>
              {props.data.city}
            </p>
            <p id="time">
              <FormattedDate date={props.data.date} />
              <br />
              <br />
              <WeatherTemperature
                city={props.data.city}
                fahrenheit={props.data.temperature}
                feelsLike={Math.round(props.data.feelsLike)}
                humidity={Math.round(props.data.humidity)}
                windSpeed={Math.round(props.data.windSpeed)}
                iconUrl={iconUrl}
                description={props.data.description}
                date={props.data.date}
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
