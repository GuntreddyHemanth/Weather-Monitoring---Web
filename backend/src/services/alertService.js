let alertThresholds = {
    temp: 35, // Example threshold
};

function checkForAlerts(weatherData) {
    if (weatherData.temp > alertThresholds.temp) {
        console.log(`Alert: Temperature exceeded ${alertThresholds.temp}°C`);
        // Optionally, send email or console alert
    }
}

module.exports = { checkForAlerts };
