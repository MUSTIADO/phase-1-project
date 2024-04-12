// Define API key and API URL
 apikey = "3e11999666d32ed264e2d00d65c5c828";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather"

// Select elements from the HTML
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch and display weather data
async function checkWeather(city){
    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
 // Display weather data in the HTML
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = convertKelvinToCelsius(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

// Iterate over each weather object and log the description to the console
    data.weather.forEach((weather) => {
      console.log("Weather Description:", weather.description);
    });

// Function to convert temperature from Kelvin to Celsius
    function convertKelvinToCelsius(kelvin){
        return Math.round(kelvin - 273.15)
    }
 // Set weather icon based on weather condition
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
      }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/drizzle.png";
    }

// Display the weather information container by setting its display style property to "block"
    document.querySelector(".weather").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
 // Event listener for clicking the search button
 searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value);
 })
});
 // Event listener for pressing Enter key in the search input
searchBox.addEventListener("keydown", (event) => {
if (event.key === "Enter") {
    checkWeather(searchBox.value);
}
});
// This event listener triggers whenever the value of the input changes
searchBox.addEventListener("change", () => {
    console.log( searchBox.value);


  });

  
  
  
  
  



