import React from "react";
import './App.css';

import Main from "./Main";
import ReactAnimatedWeather from 'react-animated-weather';


export default function Weather() {


  return (
    <>
      <div className="container border border-secondary border-opacity-25 rounded shadow">
        <ul>
          <li>
            <a href="/.html" target="_blank">
              Kano
            </a>
          </li>
          <li>
            <a href="/.html" target="_blank">
              JOS
            </a>
          </li>

          <li>
            <a href="/.html" target="_blank">
              platuea
            </a>
          </li>
        </ul>
        <Main />


        <div className="row current-box">
          <div className="col-6">
            <h1 className="current-city" id="city">
              kaduna
            </h1>
            <div className="current-day">
              Monday <span>18:11</span>
            </div>
          </div>
          <div className="col-3 current-temp">
            <span id="tempr">25</span>
            <span className="units">
              <a href="/" id="celcius-link">
                °C
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
          <div className="col-3 current-other">
            <div className="current-humidity">
              Humidity: <span id="data-humidity">50</span>%
            </div>
            <div className="current-wind">
              Wind: <span id="data-wind">2</span> km/h
            </div>
          </div>
        </div>

        <div className="row current-next">
          <div className="col-2">
            <h3 className="day">Tue</h3>
            <h3 className="temp">
              <div>
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color='goldenrod'
                  size={45}
                  animate={true}
                />


              </div>
            </h3>
          </div>
          <div className="col-2">
            <h3 className="day">Wed</h3>
            <h3 className="temp">
              <div>

                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color='goldenrod'
                  size={45}
                  animate={true}
                />
              </div>
            </h3>
          </div>
          <div className="col-2">
            <h3 className="day">Thu</h3>
            <h3 className="temp">
              <div>
            <ReactAnimatedWeather
                  icon='WIND'

                  color='skyblue'
                  size={45}
                  animate={true}
                />
              </div>
            </h3>
          </div>
          <div className="col-2">
            <h3 className="day">Fri</h3>
            <h3 className="temp">
              <div>
                <ReactAnimatedWeather
                  icon="RAIN"
                  color='lightblue'
                  size={45}
                  animate={true}
                />
              </div>
            </h3>
          </div>
<div className="col-2">
<h3 className="day">Sat</h3>
<h3 className="temp">
  <div>
    <ReactAnimatedWeather
   icon= 'CLOUDY'
              
   color='skyblue'
        size={45}
   animate={true}
/>




  </div>
</h3>
</div>
<div className="col-2">
<h3 className="day">Sun</h3>
<h3 className="temp">
  <div>
    <ReactAnimatedWeather
   icon="CLEAR_DAY"                
   color='goldenrod'
        size={45}
   animate={true}
/>




  </div>
</h3>
</div>


          
        </div>
      </div>
      <p>
        <a href="https://github.com/Luluameh/weather-app-Geo-location">
          Open source code
        </a>
        by Lucy Ajumi Ameh
      </p>
    </>
  );
}
