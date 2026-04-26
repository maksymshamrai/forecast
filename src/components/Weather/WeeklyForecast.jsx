import { useState, useEffect } from "react";
import axios from "axios";

const WeeklyForecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "506b4c3a5dd3a7c21b165dc99daa306d";

  const fetchForecast = async () => {
    try {
      setError(null);

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      // групуємо записи по датах
      const days = {};

      response.data.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toISOString().split("T")[0];

        if (!days[date]) days[date] = [];
        days[date].push(item);
      });

      // беремо перші 5 днів
      const fiveDays = Object.keys(days)
        .slice(0, 5)
        .map((date) => {
          const items = days[date];

          const temps = items.map((i) => i.main.temp);
          const min = Math.min(...temps);
          const max = Math.max(...temps);

          const mainItem = items[0];

          return {
            date,
            min,
            max,
            icon: mainItem.weather[0].icon,
            description: mainItem.weather[0].description,
          };
        });

      setForecast(fiveDays);
    } catch (err) {
      setError("Failed to load forecast");
      console.error(err);
    }
  };

  useEffect(() => {
    if (city) fetchForecast();
  }, [city]);

  if (error) return <p className="error">{error}</p>;
  if (!forecast.length) return null;

  return (
    <div className="weekly">
      <h2>5-day forecast</h2>

      {forecast.map((day) => {
        const dateObj = new Date(day.date);

        return (
          <div key={day.date} className="day-card">
            <p>
              {dateObj.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <div className="icon-temp">
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.description}
            />
            <p>
              {Math.round(day.max)}°C / {Math.round(day.min)}°C
            </p>
            </div>
            <p>{day.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyForecast;
