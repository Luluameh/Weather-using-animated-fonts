
import React, { useState } from "react";
import axios from "axios";

export default function Main() {
  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({});

  function showWeather(response) {
 
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f4cdbc9ef55eeb50f9d9349e9065d15a";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(Url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
      <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li> <br/>
          <li>Description: {weather.description}</li> <br/>
          <li>Humidity: {weather.humidity}%</li> <br/>
          <li>Wind: {weather.wind}km/h</li> <br/>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>

    
    
    </form>
  );

  return form;
  
}
