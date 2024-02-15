/*var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); */

//Search input
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const cityElement = document.getElementById('city');


    searchBar.addEventListener('input', function(event) {
        const searchTerm = event.target.value.trim().toLowerCase(); 


        updateCityContent(searchTerm);
    });

    function updateCityContent(searchTerm) {
        const cityData = {
            "new york": "Content for New York City",
            "london": "Content for London",
            "paris": "Content for Paris",

        };


        if (searchTerm in cityData) {
            cityElement.textContent = cityData[searchTerm]; 
        } else {
            cityElement.textContent = "City not found"; 
        }
    }
});
