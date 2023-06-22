async function getWeather() {
    // get value form input box
    const currentLocation = document.querySelector("#location").value;

    // base api url
    const base_url = "https://api.openweathermap.org/data/2.5/weather?";
    
    // api key
    const key = "3fd55917ebac1a4a2cb8195f3f5d44bd";

    // fetch api
    const response = await fetch(`${base_url}units=metric&q=${currentLocation}&appid=${key}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".tempareture").innerHTML = Math.round(data.main.temp) + `°c`;

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    document.querySelector(
      ".date"
    ).innerHTML = `Today is: <b>${day}/${month}/${year}</b>`;
    document.querySelector(".location").innerHTML = `Location is: <b>${data.name}</b>`;
    document.querySelector(".humidity").innerHTML = `Humidity: <b>${data.main.humidity}%</b>`;
  }
