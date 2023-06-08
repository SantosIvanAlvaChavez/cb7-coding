import {qS, createEl, getWeatherCity} from "./helpers/fn.js";

const root = qS("#root");
const formEl = createEl("form");
const inputEl = createEl("input", "", {name: "type", value: "text"}, {name: "placeholder", value: "Enter a city"});
const btnEl = createEl("input", "", {name: "type", value: "submit"}, {name: "value", value: "Search"});
const containerEl = createEl("div");
const citiesEl = createEl("div");
const cities = ["Rom", "London", "Madrid", "New York"];

formEl.className = "form";
inputEl.className = "form-input";
btnEl.className = "form-btn";
containerEl.className = "cards";
citiesEl.className = "card-cities";
containerEl.append(citiesEl);
formEl.append(inputEl, btnEl);
root.append(formEl, containerEl);

inputEl.focus();
cities.forEach( city => getWeatherCity(city).then(data => citiesEl.append(data)));

//Events
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if(e.srcElement[0].value.trim() === "") return;

    containerEl.textContent = ""
    getWeatherCity(e.srcElement[0].value).then(data => containerEl.append(data));
    containerEl.append(citiesEl);
    root.append(formEl, containerEl);
    formEl.reset();
    inputEl.focus();
})
