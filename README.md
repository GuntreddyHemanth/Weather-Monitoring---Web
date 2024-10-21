# Full Stack Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates

This project is a full-stack weather monitoring application that fetches real-time weather data from a backend and displays the information on the frontend. The app also includes visualizations for daily weather trends, alerts, and more, with data fetched from the OpenWeatherMap API. It monitors the weather of major Indian metros and triggers alerts based on user-configurable thresholds.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Data Source](#data-source)
- [Rollups & Aggregates](#rollups--aggregates)
- [System Architecture](#system-architecture)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run the Application](#run-the-application)
  - [Run with Docker](#run-with-docker)
- [Testing](#testing)
- [Visualizations](#visualizations)
- [Design Choices](#design-choices)
- [Dependencies](#dependencies)
- [Future Enhancements](#future-enhancements)

## Overview
This application monitors real-time weather conditions and provides summarized insights using rollups and aggregates. The system continuously retrieves weather data from the OpenWeatherMap API for major Indian metros (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad), calculating daily summaries, visualizing trends, and generating alerts based on configurable thresholds.

## Features
- **Real-time Weather Data:** Fetches weather data every 5 minutes from the OpenWeatherMap API.
- **Daily Summaries:** Provides average, max, min temperature, and dominant weather condition for each day.
- **Alerts:** Triggers alerts if user-configurable thresholds (e.g., temperature above 35°C) are breached.
- **Temperature Conversion:** Converts temperature from Kelvin to Celsius or Fahrenheit based on user preference.
- **Visualizations:** Displays daily weather summaries, historical trends, and alerts using charts.

## Data Source
The system uses the OpenWeatherMap API to fetch weather data for the following cities:
- Delhi
- Mumbai
- Chennai
- Bangalore
- Kolkata
- Hyderabad

Sign up for a free API key [here](https://openweathermap.org/).

## Rollups & Aggregates
### Daily Weather Summary:
- **Average Temperature**
- **Maximum Temperature**
- **Minimum Temperature**
- **Dominant Weather Condition** (based on frequency of occurrence)

### Alerting Thresholds:
- User-configurable thresholds for temperature (e.g., alert if temperature exceeds 35°C for two consecutive updates).
- Triggers alerts on threshold breaches (via console or email).

## System Architecture
- **Frontend:** React.js
- **Backend:** Node.js/Express
- **Database:** MongoDB (to store daily summaries)
- **API:** OpenWeatherMap API (for real-time data)
- **Visualizations:** Recharts (for weather trends and alerts)

## Setup and Installation

### Prerequisites
- **Node.js:** [Install Node.js](https://nodejs.org/) to run the backend.
- **MongoDB:** [Install MongoDB](https://www.mongodb.com/) or use a cloud MongoDB service like MongoDB Atlas.
- 
### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/weather-monitoring-system.git
    cd weather-monitoring-system
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```
4. **Configure Scripts:**
Make sure your package.json in the root contains a script to run both the frontend and backend together using concurrently:
 ```bash
  "scripts": {
  "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"",
  "start:frontend": "npm --prefix frontend start",
  "start:backend": "npm --prefix backend start"
}
```
5.**Running the Project:**
To run both the frontend and backend at the same time, simply run:
```bash
npm start
```
This will start the backend server and the frontend running at http://localhost:3000.

**License**
This project is licensed under the MIT License - see the LICENSE file for details.
```bash

---

### Explanation:

1. **Project Overview**: Gives a high-level introduction to what the app does.
2. **Features**: Lists out the main features of the app.
3. **Tech Stack**: Highlights the tools and technologies used.
4. **Project Structure**: Shows how the project is organized.
5. **Setup and Installation**: Step-by-step guide to setting up the project locally.
6. **Running the Project**: Provides the command to start both frontend and backend simultaneously using `npm start`.
7. **Ignore Node Modules**: Mentions how the `node_modules` folders are ignored using `.gitignore`.
8. **API Endpoints**: Documents the backend API for weather data.

This `README.md` should provide a clear and professional overview of the project for developers and users.
```










