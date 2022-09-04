const input = document.getElementById("input-weather");
const searchButton = document.getElementById("btn-search");
const apiKey = "049c2eeb9d848315d9bc4fe0f7832726";

const h1 = document.getElementById("name");
const h2 = document.getElementById("cel");
const h3 = document.getElementById("cloud");
const h4 = document.getElementById("hum");
const h5 = document.getElementById("wind");
const h6 = document.getElementById("icon");
const display = document.getElementById("display");

searchButton.addEventListener("click", () => {
  let city = input.value;
  callingApi(city);
});

const callingApi = async (city) => {
  const linkApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const getData = await fetch(linkApi)
    .then((response) => response.json())
    .catch((error) => console.log("error"));

  const { weather, main, wind, name } = getData;
  const Icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  h1.textContent = `Weather In ${name}`;
  h2.textContent = `${Math.round(main.temp - 273.15)} °C`;
  h3.textContent = `${weather[0].main}`;
  h4.textContent = `Humidity:  ${main.humidity}%`;
  h5.textContent = `Wind Speed:  ${wind.speed} KM/H`;
  h6.src = `${Icon}`;
  display.style.display = "block";
};
