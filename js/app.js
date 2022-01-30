const cityForm = document.querySelector('[data-js="change-location"]')

const cityNameCantainer = document.querySelector('[data-js="city-name"]')
const cityWeatherCantainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureCantainer = document
.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {
    cityCard.classList.contains('d-none') ? cityCard.classList.remove('d-none') : null
}

const showCityWeatherInfo = async cityName => {
    const [{Key, LocalizedName}] = await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await
     getCityWeather(Key)
     const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    IsDayTime ? timeImg.src = "./src/day.svg" : timeImg.src = "./src/night.svg"
    timeIconContainer.innerHTML = timeIcon
    cityNameCantainer.textContent = LocalizedName
    cityWeatherCantainer.textContent = WeatherText
    cityTemperatureCantainer.textContent = Temperature.Metric.Value
}

cityForm.addEventListener('submit',  event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    showCityCard()
    showCityWeatherInfo(inputValue)
    cityForm.reset()
})