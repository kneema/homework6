const searchBtn = document.querySelector("#searchbutton");
const cityinput = document.querySelector("#inputcity");
const searchlist = document.querySelector("#searchlist");
const citycontainer = document.querySelector("#citycontainer");
const cities = ["adelaide","brisbane", "perth", "hobart", "darwin", "melbourne", "sydney", "canberra"];
const display = document.querySelector("#displayweather");
const icon = document.querySelector("#icon");
const temp = document.querySelector("#temp");
const uv = document.querySelector("#uv");


searchBtn.addEventListener("click", searchCity);
function buttonSearches() {
    let searchBar = localStorage.getItem("searchBtn");
    console.log(searchBar)
        localStorage.setItem("searchBar", Search);
            buttonSearches ();
    }
$("#submitBtn").on("submit", function (e) {
e.preventDefault ();
    
var searchBar = inputEl.value;

        getOpenWeather(searchBar);
    });

    function getOpenWeather (cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fe991547b0b791499b6ebb2c115c9743&units=metric";

        $.ajax ({
            url: queryURL,
            method: "GET",
            
            }
        })
        .then(current => {
            return $.ajax({
                type: 'GET',
                url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=fe991547b0b791499b6ebb2c115c9743&units=metric"
            })
        })
        .then(forecast => {
            
            let date = moment.utc(forecast.list[0].dt * 1000);
            console.log(date.format("DD MMM Y"));
            
            console.log(forecast);
            console.log(forecast.city.coord);
    
            fillPageForecast(forecast);
            // ADELAIDE {lon: 138.6, lat: -34.93}
            return $.ajax({
                type: 'GET',
                url: `http://api.openweathermap.org/data/2.5/uvi/forecast?appid=fe991547b0b791499b6ebb2c115c9743&lat=${forecast.city.coord.lat}&lon=${forecast.city.coord.lon}`
            });
        }).then(uv => {
        console.log(uv);
        fillUv(uv);
    
        fillUv(uvResponse)
        });
    }
    
    function fillPageCurent (current) {
     // Displaying data retreived from Open Weather API to HTML
     let date = moment.utc(current.dt * 1000);
            console.log(date.format("DD MMM Y"));
            
     $(".cityName").html("<h1>" + current.name + date.format(" DD MMM Y"));
     $(".wind").text("Wind Speed: " + current.wind.speed);
     $(".humidity").text("Humidity: " + current.main.humidity);
     $(".temperatureF").text("Temperature: " + current.main.temp);
     $(".icon").text("Temperature: " + current.weather[0].icon);
    
    }
    
    function fillPageForecast(forecast) {
    
    var savedWeather = forecast.list;
    console.log(savedWeather);
    for (let i = 0; i < 4 ; i++) {
        //saving time into variable 
        let forecastDate = moment().add(i + 1, "days").hours(15).minute(0);
        console.log(forecastDate);
        let dateEl= document.getElementById(`date${i}`);
        let temperature= document.getElementById(`temperature${i}`);
        let humidity= document.getElementById(`humidity${i}`);  
        let wind = document.getElementById(`wind${i}`);  
        // let icon = document.getElementById(`icon${i}`);  
    
    for (let j = 0; j < savedWeather.length ; j++){
      console.log(savedWeather[j]);
      if (forecastDate.isBefore (moment.utc(savedWeather[j].dt * 1000))){
    
    dateEl.innerText = moment.utc(savedWeather[j].dt * 1000).format("DD MMM Y");
    // icon.innerText = savedWeather[j].weather[0].icon;
    temperature.innerText = "Temperature: "+savedWeather[j].main.temp;
    humidity.innerText = "Humidity: "+ savedWeather[j].main.humidity + " % ";
    wind.innerText = "Wind Speed: "+savedWeather[j].wind.speed;
    
        break;
      }
    }
    }
    }
    
    
    function fillUv(uvResponse) {
    console.log("test");
    document.querySelector(".uvResponse").innerText = " UV Index: " + uvResponse [0].value;
    
    for (let k = 0; k < 4 ; k++) {
    let uvResponse= document.getElementById(`fillUv${k}`);
    for (let k = 0; k < fillUv.length ; j++){
    uvResponse.innerText = "UV Index: "+ uvResponse [0].value;
    }
    }
    }