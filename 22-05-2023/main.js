const api = {
    key: "35d2462eded755b41dba15334328c027",
    url: `https://api.openweathermap.org/data/2.5/weather`
}

const form = document.querySelector("form");
const searchBox = document.querySelector(".search-box");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const icon = document.querySelector(".icon");
const tempImg = document.querySelector(".temp-img");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const range = document.querySelector(".range");

const search = async (query) => {
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=it`)
        const data = await response.json();
        // console.log(data)
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date().toLocaleDateString());
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}°C / ${toCelsius(data.main.temp_max)}°C`
        searchBox.value = "";
        updateImage(data);
    } catch(err) {
        console.log(err);
        alert("Digitare una città valida");
    }
}

const updateImage = (data) => {
    const temp = toCelsius(data.main.temp);
    let src = "./images/temp-mid.png";

    if(temp > 26) {
        src = "./images/temp-high.png";
    } else if(temp < 20) {
        src = "./images/temp-low.png";
    }
    
    tempImg.src = src;
}

const toCelsius = (kelvin) => Math.round(kelvin - 273.15);

const onSubmit = (event) => {
    event.preventDefault();
    search(searchBox.value);
}

window.onload = () => {
    search("Milano")
}

form.addEventListener("submit", onSubmit);
