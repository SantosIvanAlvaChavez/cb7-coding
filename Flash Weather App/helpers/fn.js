
export const qS = (element) => document.querySelector(element);

export const createEl = (type, content, ...attrs) => {
    const element = document.createElement(type);
    element.textContent = content;
    attrs.forEach( attr => element.setAttribute(attr?.name, attr?.value));

    return element;
}

export const getWeatherCity = async (city) => {
    try {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const API_KEY = "35d2462eded755b41dba15334328c027";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
        const data = await response.json();
        
        if(data.cod === "404") throw new Error(`${city} non è stata trovata`);

        const wrapperEl = createEl("div");
        const firstContainer = createEl("div");
        const cityEl = createEl("h1", `${data.name}, ${data.sys.country}`);
        const imgEl= createEl("img", "", {name: "src", value: ""});
        const secondContainer = createEl("div");
        const todayEl = createEl("h2", `${new Date().toLocaleString('en-US', options)}`);
        const tempEl = createEl("h3", Math.round(data.main.temp) + "°C");
        const iconEl = createEl("img", "", {name: "src", value: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`});
        const descriptionEl = createEl("p", data.weather[0].description);
        const tempMinEl = createEl("span", "Tmin: " + Math.round(data.main.temp_min) + "°C" + " - ");
        const tempMaxEl = createEl("span", "Tmax: " + Math.round(data.main.temp_max) + "°C");

        switch(data.weather[0].main){
            case "Clear":
            imgEl.src = "./images/clear.png";
            break;
            case "Clouds":
            imgEl.src = "./images/clouds.png";
            break;
            case "Drizzle":
            imgEl.src = "./images/drizzle.png";
            break;
            case "Haze":
            imgEl.src = "./images/haze.png";
            case "Mist":
            imgEl.src = "./images/haze.png";
            break;
            case "Rain":
            imgEl.src = "./images/rain.png";
            break;
            case "Snow":
            imgEl.src = "./images/snow.png";
            break;
        }

        wrapperEl.className = "card-info";
        firstContainer.className = "first-container";
        cityEl.className = "card-city";
        imgEl.className = "card-img";
        secondContainer.className = "second-container";
        todayEl.className = "card-today";
        tempEl.className = "card-temp";
        iconEl.className = "card-icon";
        descriptionEl. className = "card-description";
        tempMinEl.className = "card-temp-min";
        tempMaxEl.className = "card-temp-max";

        firstContainer.append(cityEl, imgEl);
        secondContainer.append(todayEl, tempEl, iconEl, descriptionEl, tempMinEl, tempMaxEl);
        wrapperEl.append(firstContainer, secondContainer );

        return wrapperEl;
    
    } catch(error) {
        const wrapperErrorEl = createEl("div");
        const imgErrorEl = createEl("img", "", {name: "src", value: "../images/error-city.png"})
        const errorEl = createEl("h2", error.message);
        
        wrapperErrorEl.className = "error";
        imgErrorEl.className = "error-img";
        wrapperErrorEl.append(imgErrorEl, errorEl);

        return wrapperErrorEl;
    }
}