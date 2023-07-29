let city = "kigali";
let url = `https://api.weatherapi.com/v1/forecast.json?key=9ed41df52aa54ba8b4b200722232807&days=5&q=${city}`;
console.log(url);
function getApi() {
    fetch(url, {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) =>{
        console.log(response)
        document.getElementById('feelsLike').innerHTML += `<span>${response.current.feelslike_c} <sup>0</sup>C</span>`
        document.getElementById('country').innerHTML = `${response.location.name} , ${response.location.country}`;
        document.getElementById('latitude').innerHTML += `<span>${response.location.lat}</span>`;
        document.getElementById('longitude').innerHTML += `<span>${response.location.lon}</span>`;
        document.getElementById('date').innerHTML = `<span>${date}</span>`;
        document.getElementById('lastUpdated').innerHTML += `<span>${response.current.last_updated}`;
        let condDiv = document.getElementById('conditions');
        condDiv.innerHTML = `<span>${response.current.condition.text} </span> <img src="${response.current.condition.icon}">`;
        document.getElementById('pascal').innerHTML += `<span>${response.current.pressure_mb} mBar </span>`;
        document.getElementById('humidity').innerHTML += `<span>${response.current.humidity}</span>`;
        document.getElementById('wind').innerHTML += `<span class="wind"><span>${response.current.wind_mph}</span><span>${response.current.wind_degree} <sup>0</sup></span><span>${response.current.wind_dir}</span></span>`;

        let nextDates = document.querySelectorAll('.nextDates');
        let index =0;
        nextDates.forEach((element)=>{
            element.innerHTML = response.forecast.forecastday[index].date;
            index++;
        });
        let newIndex = 0;
        let forecastData = document.querySelectorAll(".forecast-content");
        forecastData.forEach((elem)=>{
            elem.innerHTML = `<span><img src='${response.forecast.forecastday[newIndex].day.condition.icon}'></span>
            <span style="color:#CECE5A;">${response.forecast.forecastday[newIndex].day.condition.text}</span>
            <span>Max Temp: ${response.forecast.forecastday[newIndex].day.maxtemp_c} <sup>0</sup>C</span>
            <span>Min Temp: ${response.forecast.forecastday[newIndex].day.mintemp_c} <sup>0</sup>C</span>`;
            newIndex++;
        });
    })
}
window.onload = getApi();

const time = new Date();
        const day = time.getDay();
        const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          
        const date = `${days[day]}, ${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
    
