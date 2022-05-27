let weather = {
    apiKey: "c161672e57aee947cae631b37b268e60",
    getWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').textContent = `Weather in ${name}`;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').textContent = description;
        document.querySelector('.temp').textContent = temp + "°C";
        document.querySelector('.humidity').textContent = "Humidity:" + " " + humidity + "%";
        document.querySelector('.wind').textContent ="Wind Speed:" + " " + speed + "Km/h";
    },
    search: function () {
        const searchValue = searchBar.value
        this.getWeather(searchValue)
    }
}

const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
    weather.search()
});

searchBar.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        return weather.search()
    }
})



