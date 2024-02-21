//function to display the value put in the search bar
function search(event) {
  event.preventDefault(); 
  let searchInput = document.querySelector("#search-text-input"); 

  let h1 = document.querySelector("#city");
  h1.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search); 

