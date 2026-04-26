import { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";
import "./Weather.css";

import refreshIcon from "../../assets/refresh.svg";
import likeIcon from "../../assets/like.svg";
import deleteIcon from "../../assets/delete.svg";

const Weather = ({ city, onDelete, onOpenWeekly, onOpenDetails }) => {
  const [weather, setWeather] = useState(null);

  const API_KEY = "506b4c3a5dd3a7c21b165dc99daa306d";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  if (!weather) return null;

  const localTime = new Date(
    weather.dt * 1000 + weather.timezone
  );

  const time = localTime.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = localTime.toLocaleDateString("uk-UA");

  const day = localTime.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const icon = weather.weather?.[0]?.icon;

  return (
    <>
    <div className="weather">
      <div className="card">
        <div className="place">
          <p className="city">{weather.name}</p>
          <p className="country">{weather.sys.country}</p>
        </div>

        <h3 className="time">{time}</h3>

        <div className="forecast-type">
          <button className="forecast-type-btn">Hourly forecast</button>
          <button className="forecast-type-btn" onClick={() => onOpenWeekly(city)}>Weekly forecast</button>
        </div>

        <div className="date">
          <p className="full-date">{date}</p>
          <p className="day">{day}</p>
        </div>

        <img
          className="weather-image"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
        />

        <p className="temp">{Math.round(weather.main.temp)}℃</p>

        <div className="btn-container">
          <button className="refresh-btn" onClick={fetchWeather}>
            <img src={refreshIcon} alt="" />
          </button>

          <button className="like-btn">
            <img src={likeIcon} alt="" />
          </button>

          <button
            className="see-more-btn"
            onClick={() => onOpenDetails(city)}
          >
            See more
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(city)}
          >
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Weather;