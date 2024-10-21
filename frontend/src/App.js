import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null); // Initialize as null to handle the initial state

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/weather');
        console.log('Data from backend:', response.data);
        setWeatherData(response.data); // Assuming the data is an object
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    fetchWeatherData();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp); // Correcting timestamp handling (use ms directly if given as ISO 8601 string)
    return date.toLocaleString(); // Return human-readable format
  };

  if (!weatherData) {
    return <div>Loading weather data...</div>; // Handle loading state
  }

  return (
    <div className="App">
      <h1>Real-Time Weather Monitoring</h1>
      <div className="weather-container">
        <div className="weather-card">
          <h2>Weather Overview</h2>
          <p>Date: {formatDate(new Date(weatherData.date))}</p>
          <p>Condition: {weatherData.dominantCondition}</p>
          <p>Average Temperature: {weatherData.avgTemp.toFixed(2)}°C</p>
          <p>Max Temperature: {weatherData.maxTemp.toFixed(2)}°C</p>
          <p>Min Temperature: {weatherData.minTemp.toFixed(2)}°C</p>
        </div>
      </div>

      {/* Line chart for temperature trends */}
      <h2>Temperature Trend</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={[weatherData]}> {/* Wrapping weatherData in an array */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avgTemp" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" />
          <Line type="monotone" dataKey="minTemp" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
