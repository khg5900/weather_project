const myCity = document.querySelector(".my-city");
const myWeather = document.querySelector(".my-weather");
const SWeather = document.querySelector(".s-weather");
const DWeather = document.querySelector(".d-weather");
const BWeather = document.querySelector(".b-weather");

const API_KEY = "022c44fda65f777ac64bc741ad25b005";

// async function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
//   const response = await fetch(url);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   myCity.innerText = data.name;
//   myWeather.innerText = data.weather[0].main;
// }

function onGeoError() {
  alert();
}
async function getWeatherInfo(lat, lng, Location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  Location.innerText = data.weather[0].main;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

getWeatherInfo(37.5665, 126.978, SWeather);
getWeatherInfo(35.8714, 128.6014, DWeather);
getWeatherInfo(35.1796, 129.0756, BWeather);
