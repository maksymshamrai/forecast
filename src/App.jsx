import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Weather from './components/Weather/Weather'
import WeatherDetails from './components/Weather/WeatherDetails'
import WeeklyForecast from './components/Weather/WeeklyForecast'
import News from './components/News/News'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    return saved ? JSON.parse(saved) : ["Warsaw"];
  });
  const [selectedCity, setSelectedCity] = useState(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const addCity = (newCity) => {
    const formatted = newCity.trim();

    if (!formatted) return;

    if (cities.some(c => c.toLowerCase() === formatted.toLowerCase())) return;

    setCities([...cities, formatted]);
  };

  const removeCity = (cityToRemove) => {
    setCities(cities.filter(city => city !== cityToRemove));
  };

  return (
    <>
      <Header />
      <Hero onSearch={addCity} />

      <div className="weather-list">
        {cities.map(city => (
          <Weather
            key={city}
            city={city}
            onOpenWeekly={(city) => {
              setSelectedCity(city);
              setView("weekly");
            }}
            onOpenDetails={(city) => {
              setSelectedCity(city);
              setView("details");
            }}
            onDelete={removeCity}
          />
        ))}
      </div>
      <div>
        {selectedCity && (
          <WeatherDetails city={selectedCity} />
        )}
      </div>
      <div>
        {selectedCity && (
          <WeeklyForecast city={selectedCity} />
        )}
      </div>
      <News />
      <Gallery />
      <Footer />
    </>
  );
}

export default App
