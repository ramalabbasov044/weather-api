// selector
let country = document.querySelector("#country")
let search = document.querySelector("#search-input")
let weatherBody = document.querySelector("#weather-main")

search.addEventListener("input",function(e){
    findCountryWeather(e.target.value)
})

async function findCountryWeather(key){
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + `${key}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9076eac4a5msha9000f7a84a1cb1p112ed6jsn13542991e11b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        weatherBody.innerHTML = `
            <div id="weather-main" class="weather_main">
                <div class="weather_about">
                    <p id="country" class="weather-result">
                    Name - ${result.location["name"]}
                    </p>
                    <p id="country" class="weather-result">
                    Region -  ${result.location["region"]}
                    </p>
                    <p id="country" class="weather-result">
                    Country -  ${result.location["country"]}
                    </p>
                </div>
                <div class="weather-img">
                    <div class="weather_top">
                        <p class="temprature_text">${result.current.condition.text}</p>
                        <img src='${result.current.condition.icon}' />
                    </div>
                    <p class="weather-temprature">
                        ${result.current.temp_c}°
                    </p>
                </div>
            </div>
        `
    }catch (error) {
        console.log(error);
    }
}