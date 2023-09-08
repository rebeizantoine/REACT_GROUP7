import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import HourlyWeather from './HourlyWeather';
import back from './back.jpg';
import background from './background.jpg';
import clear from './clear.svg';
import drizzle from './drizzle.svg';
import fog from './fog.svg';
import mostlycloudy from './mostlycloudy.svg';
import partcloudy from './partlycloudy.svg';
import rain from './rain.svg';
import snow from './snow.svg';
import storm from './storm.svg';
import unknow from './unknown.svg';
import humidity from './humidity.jpg';

function WeatherApp() {
  // Define state variables for search input and weather data
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // Define the weather image mapping
  const weatherImageMapping = {
    Clear: clear,
    Clouds: mostlycloudy,
    Rain: rain,
    Snow: snow,
  };

  // Function to handle the search button click
  const handleSearch = () => {
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=d2bd3c547542a17e77dbb6faed609687`;

    fetch(api)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className="weather-app">
      <div id="search">
        <input
          type="text"
          id="searchInput"
          placeholder="Type of city...."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button id="searchButton" onClick={handleSearch}>
          SEARCH
        </button>
      </div>
      {weatherData && (
        <div id="weather">
          <h1 id="city">{weatherData.city.name}</h1>
          <h3 id="status">{weatherData.list[0].weather[0].main}</h3>
          <div id="t">
            <div>
              <p id="image">
                <img
                  src={weatherImageMapping[weatherData.list[0].weather[0].main]}
                  alt={weatherData.list[0].weather[0].main}
                />
              </p>
            </div>
            <div>
              <h1 id="temp">
                {parseInt(weatherData.list[0].main.temp - 273.15)}°C
              </h1>
            </div>
            
          </div>
          <div id="h"><img src={humidity}/><p id="humidity">{weatherData.list[0].main.humidity}</p></div>
          <div id="p"><img src={fog}/><p id="pressure">{weatherData.list[0].main.pressure}</p></div>
        </div>
      )}
      <div id="hourWeather">
      
  {weatherData && weatherData.list.slice(0, 4).map((hourlyData, index) => (
    <HourlyWeather
      key={index}
      data={hourlyData}
      weatherImageMapping={weatherImageMapping}
    />
  ))}

</div>
    </div>
  );
}

export default WeatherApp;