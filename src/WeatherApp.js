import React, { useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState(""); // Input mein city ka naam
  const [weather, setWeather] = useState(null); // Weather data
  const [error, setError] = useState(""); // Error handling

  const apiKey = "8a327fbe2bc2d3c9ab27f96564378d18"; // Yahan apna OpenWeatherMap API key daalain

  const getWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data); // Weather data ko state mein set kar rahe hain
      setError(""); // Error reset kar rahe hain
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null); // Agar error aaye to weather ko reset kar rahe hain
    }
  };

  return (
    <div style={{ margin: "0 auto", maxWidth: "400px", textAlign: "center" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ marginRight: "10px" }}
      />

      <button onClick={getWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
