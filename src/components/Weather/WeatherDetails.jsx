import { useState, useEffect } from "react";
import axios from "axios";

const WeatherDetails = ({ city }) => {
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

  return (
    <div className="details">
          <div className="details-card">
            <p>Feels like:</p>
            <div className="details-data">{Math.round(weather.main.feels_like)}°C</div>
          </div>

          <div className="details-card">
            <p>Min:</p>
            <div className="details-data" id="temp">{Math.round(weather.main.temp_min)}°C</div>
            <p>Max:</p>
            <div className="details-data" id="temp">{Math.round(weather.main.temp_max)}°C</div>
          </div>

          <div className="details-card">
            <p>Humidity:</p>
            <div className="details-data">{weather.main.humidity}%</div>
          </div>

          <div className="details-card">
            <p>Pressure: </p>
            <div className="details-data">{weather.main.pressure} hPa</div>
          </div>

          <div className="details-card">
            <p>Wind:</p>
            <div className="details-data">{weather.wind.speed} m/s</div>
          </div>

          <div className="details-card">
            <p>Visibility:</p>
            <div className="details-data">{(weather.visibility / 1000).toFixed(1)} km</div>
          </div>
        </div>
  );
};

export default WeatherDetails;