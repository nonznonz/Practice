
   
function refreshWeather(response){
    let temperatureElent = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city) {
    let apiKey = "cbf1d504ac4o03023039f403acda1bat";
    let apiUrl =  `https://api.shecodes.io/weather/v1/current?query= ${city}&key= ${apiKey}`;

    axios.get(apiUrl).then(refreshWeather);
   }


function search(event){

event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;
searchCity(searchInput.value);

}



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);










