const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  main: String,
  country:String,
  temp: Number,
  feels_like: Number,
  humidity:Number,
  dt: Number
});

module.exports = mongoose.model('Weather', WeatherSchema);
