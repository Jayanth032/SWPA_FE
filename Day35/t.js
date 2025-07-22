const weatherData = {
  delhi: {
    temp: "32°C",
    desc: "Sunny",
    icon: "https://openweathermap.org/img/wn/01d.png"
  },
  mumbai: {
    temp: "29°C",
    desc: "Cloudy",
    icon: "https://openweathermap.org/img/wn/03d.png"
  },
  london: {
    temp: "18°C",
    desc: "Rainy",
    icon: "https://openweathermap.org/img/wn/09d.png"
  }
};

const select = document.getElementById("city-select");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const icon = document.getElementById("weather-icon");

select.addEventListener("change", () => {
  const city = select.value;
  const data = weatherData[city];
  cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
  temperature.textContent = data.temp;
  description.textContent = data.desc;
  icon.src = data.icon;
});
