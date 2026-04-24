import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Weather from './components/Weather/Weather'
import './App.css'

function App() {
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("cities");
    return saved ? JSON.parse(saved) : ["Warsaw"];
  });

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
            onDelete={removeCity}
          />
        ))}
      </div>
    </>
  );
}

export default App
