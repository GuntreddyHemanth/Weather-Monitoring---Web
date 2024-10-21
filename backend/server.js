const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron = require('node-cron');
const weatherRoutes = require('./src/routes/weatherRoutes');
const { fetchWeatherData } = require('./src/services/weatherService');
require('dotenv').config(); // Ensure dotenv is set up to use environment variables


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://guntreddyhemanth:ZHhr58lYmLl9xRaZ@cluster0.abt8k.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use routes
app.use('/weather', weatherRoutes);


// Schedule weather data fetching at a configurable interval (e.g., every 1 minutes)
cron.schedule('*/1 * * * *',  () => {
  console.log('Fetching weather data...');
  fetchWeatherData();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


