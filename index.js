function getApi() {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=9ed41df52aa54ba8b4b200722232807&days=4&q=kigali', {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) =>{
        document.getElementById('temp').innerHTML += `<span>${response.current.cloud}</span>`
        document.getElementById('country').innerHTML = `${response.location.name} , ${response.location.country}`;
        document.getElementById('latitude').innerHTML += `<span>`
    })
}
window.onload = getApi();