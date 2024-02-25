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
  const cityName = document.getElementById('search-text-input').value

    //Open weather link
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2cd45d17553ff56a907cdbed85b6e2e6}`;
  const hourlyForecastUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={2cd45d17553ff56a907cdbed85b6e2e6}`;

  //fetch the current weather
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })

  //Message to display if there is an error
  .catch(error => {
    console.error('Fetching error:', error);
    alert('Error fetching current weather. Please try again later')
  });

  //fetch the hourly weather
  fetch(hourlyForecastUrl)
    .then(Response => Response.json())
    .then(data => {
      displayHourlyForecast(data.list);
    })

  //Message to display if there is an error
  .catch(error => {
    console.error('Fetching hourly forecast error:', error);
    alert('Error fetching hourly forecast data. Please try again later')
  });
}
