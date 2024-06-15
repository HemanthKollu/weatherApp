const API_KEY = '187691434a5211b24c0a3ebceed8c8b7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data", error);
        throw error;
    }
};

export default fetchWeatherData