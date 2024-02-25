//function to display the value put in the search bar
function search(event) {
  event.preventDefault(); 
  let searchInput = document.querySelector("#search-text-input"); 

  let h1 = document.querySelector("#city");
  h1.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search); 



//function to get weather
function getWeather() {
  const apiKey = "2cd45d17553ff56a907cdbed85b6e2e6";
  //const cityName = document.getElementById('city').value

    //Open weather link
  const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2cd45d17553ff56a907cdbed85b6e2e6}';
  const hourlyForecastUrl = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={2cd45d17553ff56a907cdbed85b6e2e6}';
}

