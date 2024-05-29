import React from "react";
import './WeatherApp.css'
import searchIcon from'../Assets/search.png'
import clearIcon from'../Assets/clear.png'
import cloudIcon from'../Assets/cloud.png'
import drizzleIcon from'../Assets/drizzle.png'
import humidityIcon from'../Assets/humidity.png'
import rainIcon from'../Assets/rain.png'
import snowIcon from'../Assets/snow.png'
import windIcon from'../Assets/wind.png'

const WeatherApp = () => {

    let apiKey = "36b2c7f7268a3108d1d15fb02311b93a";

    const search = async () => {
            const searchValue = document.getElementsByClassName("city");
            if(searchValue[0].value === ""){
                return 0;
            }

            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue[0].value}&units=Metric&appid=${apiKey}`;

            let response = await fetch(apiUrl);
            let data = await response.json();

            const humidity = document.getElementsByClassName("humidity-percentage");
            const wind = document.getElementsByClassName("wind-speed");
            const temp = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");
            const icon = document.getElementsByClassName("weather-image");

            wind[0].innerHTML = data.wind.speed+" km/h";
            humidity[0].innerHTML = data.main.humidity+" %";
            temp[0].innerHTML = data.main.temp+" °C";
            location[0].innerHTML = data.name;
            // icon[0].innerHTML = data.weather.icon;

    }

    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="city" placeholder="search" />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={searchIcon} alt="Search Icon"></img>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloudIcon} alt="Cloud Icon" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidityIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={windIcon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherApp