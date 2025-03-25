document.addEventListener('DOMContentLoaded', () => {
    const weatherInfo = document.querySelector('.weather-info');
    const apiKey = '4451e716b5a24c6751d08dca8aa1c030'; // Replace with your OpenWeatherMap API key
    const city = 'Timbuktu';
    const units = 'metric'; // Use 'imperial' for Fahrenheit

    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to load weather data. Please try again later.</p>';
        }
    }

    function displayWeather(data) {
        const currentWeather = data.list[0];
        const forecast = data.list.filter((_, index) => index % 8 === 0).slice(1, 4); // Get 3-day forecast

        weatherInfo.innerHTML = `
            <p>Location: ${data.city.name}, ${data.city.country}</p>
            <p>Temperature: ${currentWeather.main.temp}°C</p>
            <p>Condition: ${currentWeather.weather[0].description}</p>
            <h3>3-Day Forecast</h3>
            <ul>
                ${forecast
                    .map(
                        (day) => `
                    <li>
                        <strong>${new Date(day.dt_txt).toLocaleDateString()}</strong>: 
                        ${day.main.temp}°C, ${day.weather[0].description}
                    </li>
                `
                    )
                    .join('')}
            </ul>
        `;
    }

    fetchWeather();
});