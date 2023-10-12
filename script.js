const searchInput = document.querySelector('#search input');
const searchBtn = document.querySelector('#search button');
const temperature = document.querySelector('#temp');
const searchCity = document.querySelector('#city');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');

const apiKey = '647a6068d1d73ad2a9ee14c8ceb0b28c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    temperature.innerHTML = Math.round(data.main.temp) + ' °C';
    searchCity.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + ' %';
    windSpeed.innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkWeather(searchInput.value);
})