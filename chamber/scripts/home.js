/* --------------- MOBILE NAVIGATION ---------------*/

const hamButton = document.querySelector(#ham - btn");
const navBar = document.querySelector(#nav - bar);

if (hamButton && navBar) {
    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
        navBar.classList.toggle("open");

    });
}

/* --------------- WEATHER API ---------------*/

const apiKey = "80ce5061ef0bbbb84e9a25ed81fd191a";

const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=21.4389&lon=-158.1914&units=imperial&appid=80ce5061ef0bbbb84e9a25ed81fd191a"
const membersUrl = "data/members.json";

async function getWeatherData() {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    const current = data.list[0];
    const currentTemp = Math.round(current.main.temp);
    const desc = current.weather[0].description;
    const icon = current.weather[0].icon;

    document.getElementById("current-weather").innerHTML = `
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="${desc}">
      <p>${currentTemp}°F - ${desc}</p>
      `;


    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    const listIndices = [8, 16, 24];

    listIndices.forEach(index => {
        const dayData = data.list[index];
        const date = new Date(dayData.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayTemp = Math.round(dayData.main.temp);
        const dayIcon = dayData.weather[0].icon;


        forecastDiv.innerHTML += `
         <div class="forecast-day">
            <p><strong>${dayName}</strong></p>
            <img src="https://openweathermap.org/img/w/${dayIcon}.png" alt="weather icon">
            <p>${dayTemp}°F</p>
         </div>
        `;
    });
}

async function getSpotlights() {

    const response = await fetch(membersUrl);
    const members = await response.json();

    const featured = members.filter(m => m.membership == 2 || m.membership === 3);

    const shuffled = featured.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    const container = document.getElementById("spotlights");
    container.innerHTML = "";

    selected.forEach(member => {
        let level = "🥈 Silver";
        if (member.membership === 3) {
            level = "🥇 Gold";
        }


        container.innerHTML += `
        <div class="spotlight-card">
            <h4>${member.name}</h4>
            <img src="images/${member.image}" alt="${member.name}" width="100">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p><strong>${level} Member</strong></p>

        </div>
      `;
    });
}

getWeatherData();
getSpotlights();
