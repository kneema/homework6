const searchBtn = document.querySelector("#searchbutton");
const cityinput = document.querySelector("#inputcity");
const searchlist = document.querySelector("#searchlist");
const citycontainer = document.querySelector("#citycontainer");
const cities = ["adelaide","brisbane", "perth", "hobart", "darwin", "melbourne", "sydney", "canberra"];
const display = document.querySelector("#displayweather");
const icon = document.querySelector("#icon");
const temp = document.querySelector("#temp");
const uv = document.querySelector("#uv");
const APIKey = //enterapikey;



searchBtn.addEventListener("click", searchCity);
