# Weather App

## Description
The Weather App is a user-friendly web application that allows users to fetch and display current weather information based on their input. Users can search for weather data by city name. The application dynamically updates the UI based on the weather conditions and displays additional information such as temperature, humidity, and wind speed.

## Features
- Display current weather information
- Search weather by city name
- Dynamically update Icons based on weather conditions
- Show additional weather information such as humidity, wind speed, and description
- Handle errors gracefully and provide feedback to users

## Technologies Used
- React
- Fetch API
- CSS
- React Icons
- DateFormat

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your local machine

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/HemanthKollu/weatherApp.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd weather-app
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm start
    ```

### Project Structure
src/
├── api.js
├── App.js
├── Components/
│ ├── Icons/
│ │ ├── index.js
│ ├── WeatherApp/
│ │ ├── index.js
│ │ └── index.css
├── Assets/
│ ├── Icons/
│ │ ├── cloud.png
│ │ ├── fog (1).png
│ │ ├── fog (2).png
│ │ ├── rain.png
│ │ ├── snow.png
│ │ ├── storm.png
│ │ ├── sun.png
│ │ └── windy.png
└── index.css

## Components

# Icons Component (/Components/Icons/index.js):

Purpose: The Icons component is responsible for dynamically rendering weather icons based on the weather data passed as props. It utilizes React's useState and useEffect hooks to manage state and update the displayed icon when the weatherData prop changes. The component imports various weather icons from local assets (Clear, Fog, Rain, Snow, Storm, Wind, Clouds, Haze) and selects the appropriate icon based on the main property of the weatherData object. If no matching weather condition is found, it defaults to null.

# WeatherApp Component (/Components/WeatherApp/index.js):

Purpose: The WeatherApp component is the core component of the Weather App built using React. It provides a user interface for users to enter a city name and fetch current weather information using the OpenWeather API. The component includes input fields for city name entry, a search button to initiate data fetching, and dynamically updates the UI to display weather details when data is retrieved successfully.

* Key Features:

    City Search: Users can input a city name to fetch current weather data.

    Weather Information Display: Displays detailed weather information including temperature, weather description, feels like temperature, wind speed, and direction.

    Date and Time: Automatically updates to show the current date and time when weather data is fetched.

    Error Handling: Alerts users with an error message if the city name is invalid or if there are network issues during data fetching.

    Responsive Design: Designed to ensure a consistent and user-friendly experience across various screen sizes and devices.

# api.js file:

The api.js file provides a function fetchWeatherData that facilitates fetching weather information from the OpenWeatherMap API. It uses an asynchronous approach to make HTTP requests and handles responses to retrieve weather data based on a provided city name.

API_KEY: Holds a constant representing the API key required for accessing the OpenWeatherMap API. This key is essential for authenticating and authorizing requests.

BASE_URL: Defines the base URL of the OpenWeatherMap API endpoint (https://api.openweathermap.org/data/2.5/weather). This endpoint is where requests are sent to retrieve weather data.

fetchWeatherData(city): An asynchronous function that takes a city parameter. It constructs a URL with the city name and API key embedded to query the OpenWeatherMap API for weather data in metric units (Celsius).

Uses the fetch API to make a GET request to the constructed URL.

Checks if the response is successful (response.ok). If not, it throws an error.

Parses the JSON response and returns the weather data object containing various weather parameters such as temperature, humidity, wind speed, and weather description.

Catches and logs any errors that occur during the API call, providing robust error handling for network or API-related issues.

Purpose:
The purpose of api.js is to encapsulate the logic for interacting with the OpenWeatherMap API. By centralizing this functionality into a single module, it promotes code reusability and maintainability within the application. This separation of concerns allows components or other parts of the application to easily integrate weather data without duplicating API handling logic.