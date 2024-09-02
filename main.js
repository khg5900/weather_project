const weatherCard = document.querySelector('.weather-card');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const city = document.querySelector('.city');
const description = document.querySelector('.description');


const API_KEY = '022c44fda65f777ac64bc741ad25b005'; // OpenWeatherMap API 키를 여기에 입력하세요

function onGeoError() {
    alert();
}

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        onGeoError();
    }
}
function getWeatherIcon(weatherMain) {
    const icons = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Snow': '❄️',
        'Thunderstorm': '⛈️',
        'Drizzle': '🌦️',
        'Mist': '🌫️'
    };
    return icons[weatherMain] || '🌡️';
}


function displayWeather(data) {

    weatherIcon.innerHTML = getWeatherIcon(data.weather[0].main);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    city.textContent = data.name;
    description.textContent = data.weather[0].description;
    weatherCard.style.display = 'block';
}


// 페이지 로드 시 기본으로 서울 날씨 표시
window.onload = () => getWeather('Seoul');