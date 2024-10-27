let cityInput = document.getElementById("city-input"),
searchBtn = document.getElementById("search-btn"),
API_KEY = '81737403fee9debfa539eb341c7300c1';

function getCityCoordinates() {
  let cityName = cityInput.value.trim();
  cityInput.value=''
  if (cityName) return;
  let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},{state code},{country code}&limit={limit}&appid=${API_KEY}`;
  fetch(GEOCODING_API_URL).then(res => res.json()).then(data=>{
    console.log(data)
  });
}

searchBtn.addEventListener('click' , getCityCoordinates);