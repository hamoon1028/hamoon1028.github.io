const weather = document.querySelector(".weather");

const API_key = "d4881bd5b454fce4c11ce7adf894f4b1";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherText = data.weather[0].main;
      const cityText = data.name;
      const tempText = `${data.main.temp}℃`;

      weather.innerText = `${cityText}  ${weatherText}  ${tempText}`;
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
