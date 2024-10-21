const axios = require('axios');
const WeatherModel = require('../models/weatherModel'); // MongoDB model

const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];

async function fetchWeatherData() {
    try {
        for (const city of cities) {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd0bbf4a54dc2ab1000ec17deb0de98`
            );
            const data = response.data;
            const weatherData = {
                city: data.name,
                main: data.weather[0].main,
                country: data.sys.country,
                temp: data.main.temp - 273.15, // Convert Kelvin to Celsius
                humidity: data.main.humidity,
                feels_like: data.main.feels_like - 273.15,
                dt: data.dt
            };

            console.log(`Saving weather data for ${city}:`, weatherData);
            // Save weather data to DB
            const weather = new WeatherModel(weatherData);
            await weather.save();
        }
    } catch (error) {
        console.error("Error fetching weather data: ", error);
    }
}

module.exports = { fetchWeatherData };
