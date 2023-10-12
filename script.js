const temperature = document.querySelector('#temp');
const city = document.querySelector('#city');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');

const apiKey = '647a6068d1d73ad2a9ee14c8ceb0b28c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=kafanchan';

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    temperature.innerHTML = Math.round(data.main.temp) + ' °C';
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + ' %';
    windSpeed.innerHTML = data.wind.speed + ' km/h';
}
checkWeather();