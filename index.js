// Function to fetch weather data from OpenWeather API
async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Function to update the UI with weather data
function updateWeatherUI(weatherData) {
    // Update city name, temperature, and other weather information in the DOM
}

// Event listener for search button
document.querySelector('.search-button').addEventListener('click', async () => {
    const searchInput = document.getElementById('search-text-input').value.trim();
    if (searchInput) {
        const weatherData = await fetchWeather(searchInput);
        if (weatherData) {
            updateWeatherUI(weatherData);
            // Add searched city to localStorage
            const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
            if (!searchHistory.includes(searchInput)) {
                searchHistory.push(searchInput);
                localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            }
        } else {
            alert('Failed to fetch weather data. Please try again later.');
        }
    } else {
        alert('Please enter a city name to search.');
    }
});

// Function to load search history from localStorage
function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    // Update the DOM to display search history
}

// Load search history when the page is loaded
window.addEventListener('load', loadSearchHistory);
