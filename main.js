const WEATHER_API_Key = "9f1cb7492c421a92f21c664c337f363f"; // MAILE GELEN API
const WEB_URL = "https://api.openweathermap.org/data/2.5/weather"; // URL
const city = prompt("Enter your city");
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
if (city) {
  const QUERY = `?q=${city}&APPID=${WEATHER_API_Key}&units=metric`;

  var temp = document.getElementById("temp");
  var humidity = document.getElementById("humidity");
  var windSpeed = document.getElementById("windSpeed");
  var cityName = document.getElementById("cityName");
  var description = document.getElementById("description");
  var weatherIcon = document.getElementById("weatherIcon");

  const weather = async () => {
    try {
      const response = await fetch(`${WEB_URL}${QUERY}`, { method: "GET" });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      let data = await response.json();
      console.log(data);

      INFO(data);
    } catch (error) {
      console.error(error);
      alert(
        "Failed to fetch weather data. Please check the city name and try again."
      );
    }
  };

  weather();

  function INFO(element) {
    temp.textContent = element.main.temp;
    humidity.textContent = element.main.humidity;
    windSpeed.textContent = element.wind.speed;
    description.textContent = element.weather[0].description;
    cityName.textContent = element.name;
    weatherIcon.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`;
  }
} else {
  alert(
    "City name cannot be empty. Please refresh the page and enter a city name."
  );
}