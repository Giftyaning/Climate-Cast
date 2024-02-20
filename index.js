function search(event) {
    event.preventDefault();
    let searchElement = document.querySelector("#search-text-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchElement.value;
}

let search = document.querySelector("#search-container");
search.addEventListener("submit", search )