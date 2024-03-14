//Function for Date
function formatDate(timestamp) {
  let date = new Date(timestamp);

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

//Current Temperature
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");

  let cityElement = document.querySelector("#city-name");

  let descriptionElement = document.querySelector("#description");

  let humidityElement = document.querySelector("#humid");

  let windElement = document.querySelector("#speed");

  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp) + "ºc";

  cityElement.innerHTML = response.data.name;

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = "Humidity:" + " " + response.data.main.humidity + "%";

  windElement.innerHTML = "Wind:" + " " + Math.round(response.data.wind.speed) + "km";

  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

//Function to fetch the Temperature
function getWeather(cityName) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3980a7c8f2a782241a093131b099f993&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

//Function for the Temperature display
function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");

  let cityName = searchInput.value.trim();

  if (cityName.length > 0) {
    getWeather(cityName);
  }

  searchInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#search-form");

  form.addEventListener("submit", search);
});



//Function to fetch the daily forecast
function getForecast(cityName) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=3980a7c8f2a782241a093131b099f993&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}


//Function to display the 5-Day forecast
function displayForecast(response) {
  let forecastElement = document.querySelector("#daily-forecast");
  forecastElement.innerHTML = "";

  response.data.list.forEach(function (forecastDay) {
    let forecastDate = new Date(forecastDay.dt * 1000);
    let forecastDayOfWeek = forecastDate.toLocaleDateString("en-US", { weekday: "short" });
    let forecastIcon = forecastDay.weather[0].icon;
    let forecastTemperature = Math.round(forecastDay.main.temp) + "ºC";

    let forecastHTML = `
      <div class="inform">
        <div class="day">${forecastDayOfWeek}</div>
        <img src="http://openweathermap.org/img/wn/${forecastIcon}.png" alt="Weather Icon" class="weather-icon">
        <div class="temp">${forecastTemperature}</div>
      </div>
    `;
    forecastElement.innerHTML += forecastHTML;
  });
}


//Function for the search bar
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityName = searchInput.value.trim();

  if (cityName.length > 0) {
    getWeather(cityName);
    getForecast(cityName); 
  }

  searchInput.value = "";
}




