const searchInput = document.querySelector('#search input');
const searchBtn = document.querySelector('#search button');

const cast = document.querySelector('#cast');
const temperature = document.querySelector('#temp');
const searchCity = document.querySelector('#city');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const castIcon = document.querySelector('#castIcon');
const error = document.querySelector('#error');

const apiKey = config.API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

export async function checkWeather(city) {    
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404 || response.status == 400) {
            error.style.display = 'block';
        } else {          
            let data = await response.json();

            changeWeatherIcon(data);

            temperature.innerHTML = Math.round(data.main.temp) + ' °C';
            searchCity.innerHTML = data.name;
            humidity.innerHTML = data.main.humidity + ' %';
            windSpeed.innerHTML = data.wind.speed + ' km/h';

            error.style.display = 'none';
            cast.style.display = 'block';
        }
    } catch (error) {
        console.log(error)
    }
}

function getWeatherIconPath(weather) {
    switch (weather) {
        case 'Clouds':
            return 'images/clouds.png';
        case 'Rain':
            return 'images/rain.png';
        case 'Clear':
            return 'images/clear.png';
        case 'Drizzle':
            return 'images/drizzle.png';
        case 'Mist':
            return 'images/mist.png';
        case 'Snow':
            return 'images/snow.png';
        default:
            return 'images/clear.png'; 
    }
}

function changeWeatherIcon(data) {
    const weatheIconPath = getWeatherIconPath(data.weather[0].main);
    castIcon.src = weatheIconPath;
}

export function search() {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        checkWeather(searchInput.value);
    })
}