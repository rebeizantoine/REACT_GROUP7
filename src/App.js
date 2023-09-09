import "./App.css";
import pic from "./components/img/House.png";
import React, { useState, useEffect } from "react";
import DateTimeDisplay from "./dateTime.js";


const api = {
  key: "61af75f3f18c7bf8d2b68a365c65c688",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentHour, setCurrentHour] = useState("");

  const formatForecastTime = (index) => {
    if (index === 0) {
      return currentHour;
    } else {
      const hours = new Date().getHours() + index * 4;
      return `${hours}:00`;
    }
  };
  const formatMonth = (date) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'short' });

  };
  const formatForecastDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const searchPressed = () => {
    if (search.trim() === "") {
      setErrorMessage("Please enter a city name.");
      return;
    } else {
      setErrorMessage("");
    }

    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setCurrentHour(new Date().getHours() + ":00");
      });

    fetch(`${api.base}forecast?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const forecastData = result?.list;
        if (forecastData) {
          const filteredForecast = forecastData.slice(0, 4);
          setForecast(filteredForecast);
        } else {
          setErrorMessage("Error fetching forecast data.");
        }
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
      });
  };
  useEffect(() => {
    searchPressed();
  }, []); // Automatically search when the component mounts

  return (
    <div className="container">
      <header className="App-header">
        <h1 className="title">Tech Chuckle-trek</h1>
      </header>

      <div className="input">
        <input
          type="text"
          placeholder="Enter city name "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {typeof weather.main !== "undefined" && (
        <div className="sub-title">
          {/* Location  */}
          <p>{weather.name}</p>
          {/* Temperature Celsius  */}
          <p>{weather.main.temp}°C</p>
          {/* humidity */}
          <p> {weather.main.humidity !== undefined ? `${weather.main.humidity}%` : "N/A"}</p>
          {/* Condition (Sunny ) */}
          <p>{weather.weather[0].main}</p>
        </div>
      )}
      <div className="dateTime">
        {/* render from another file */}
        <DateTimeDisplay />
      </div>

      <div className="image">
        <img src={pic} alt="Description of the image" />
      </div>

      <div className="wrapper">
        {/* Display weather forecast */}
        {forecast.length >= 0 && (
          <div className="weather-rect">
            {forecast.map((forecastItem, index) => (
              <div key={index} className="mini-rec">
                {/* Display forecast data here */}
                <p>  {new Date(forecastItem.dt_txt).getDate()} {formatMonth(forecastItem.dt_txt)}</p>
                <img src={`https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`} alt="icon" />
                <p>{formatForecastTime(index)}</p>
                <p> {forecastItem.main.temp}°C</p>
                <p> {forecastItem.weather[0].main}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
