import React from 'react';
function HourlyWeather({ data, weatherImageMapping }) {
    const timestamp = data.dt_txt;
    const [dateStr, timeStr] = timestamp.split(" ");
    const dateArray = dateStr.split("-");
    const timeArray = timeStr.split(":");
    const hour = parseInt(timeArray[0]);
    const amOrPm = hour < 12 ? "AM" : "PM";
    const formattedHour = (hour % 12 || 12) + amOrPm;
    const tempMin = parseInt(data.main.temp_min - 273.15);
    const tempMax = parseInt(data.main.temp_max - 273.15);
    const weatherCondition = data.weather[0].main;
    const imageSrc = weatherImageMapping[weatherCondition] || "default.png";
  
    return (
      <div id="hour1">
        <div id="hour">{formattedHour}</div>
        <div id="im">
          <img src={imageSrc} alt={weatherCondition} />
        </div>
        <div id="tm">{tempMin}°C - {tempMax}°C</div>
      </div>
    );
  }
  export default HourlyWeather;  