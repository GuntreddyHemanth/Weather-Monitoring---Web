const WeatherModel = require('../models/weatherModel');
const { startOfDay, endOfDay } = require('date-fns'); // For date handling

async function generateDailySummary(date) {
    try {
        const startTimestamp = Math.floor(startOfDay(date).getTime() / 1000); // Convert to seconds
        const endTimestamp = Math.floor(endOfDay(date).getTime() / 1000);     // Convert to seconds

        const weatherData = await WeatherModel.find({
            dt: { $gte: startTimestamp, $lte: endTimestamp }
        });

        console.log('Retrieved Weather Data:', weatherData);

        if (!weatherData || weatherData.length === 0) {
            throw new Error("No weather data available for the given date");
        }

        const temperatureValues = weatherData.map(w => w.temp);

        const dominantCondition = weatherData.reduce((acc, w) => {
            acc[w.main] = (acc[w.main] || 0) + 1;
            return acc;
        }, {});

        const summary = {
            date,
            avgTemp: temperatureValues.reduce((a, b) => a + b, 0) / temperatureValues.length,
            maxTemp: Math.max(...temperatureValues),
            minTemp: Math.min(...temperatureValues),
            dominantCondition: Object.keys(dominantCondition).reduce((a, b) => dominantCondition[a] > dominantCondition[b] ? a : b),
        };

        return summary;
    } catch (error) {
        console.error("Error generating daily summary:", error);
        throw error; // Rethrow error to handle it in the calling function
    }
}




// async function generateDailySummary(date) {
//     // Fetch weather data for the given date
//     const weatherData = await WeatherModel.find({ dt: { $gte: startOfDay(date), $lte: endOfDay(date) } });

//     // Check if weatherData is empty
//     if (!weatherData || weatherData.length === 0) {
//         // Handle the case where no data exists for the given date
//         return { error: "No weather data available for the given date" };
//     }

//     // Extract temperature values
//     const temperatureValues = weatherData.map(w => w.temp);

//     // Calculate dominant weather condition
//     const dominantCondition = weatherData.reduce((acc, w) => {
//         acc[w.main] = (acc[w.main] || 0) + 1;
//         return acc;
//     }, {});

//     // Generate the summary with safe operations
//     const summary = {
//         date,
//         avgTemp: temperatureValues.reduce((a, b) => a + b, 0) / temperatureValues.length,
//         maxTemp: Math.max(...temperatureValues),
//         minTemp: Math.min(...temperatureValues),
//         dominantCondition: Object.keys(dominantCondition).reduce((a, b) => dominantCondition[a] > dominantCondition[b] ? a : b),
//     };

//     return summary;
// }

module.exports = { generateDailySummary };
