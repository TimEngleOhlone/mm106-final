function calcTotal() {
    let itemTotal = 0;
    let items = $("input");


    for (let i = 0; i < 20; i++) {
        if (items[i].checked) {
            itemTotal += (items[i].value * 1);
        }

        document.getElementById("total").innerHTML = "Your total item weight is: " + itemTotal + "lbs";

    }
}


let calcButton = document.getElementById("calcButton");
if (calcButton.addEventListener) {
    calcButton.addEventListener("click", calcTotal, false);
}
else if (calcButton.attachEvent) {
    calcButton.attachEvent("onclick", calcTotal);
}


let weather = {
     apiKey : "99d3dd489364e405c3c3a2b52f0dcd36",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city 
            + "&units=imperial&appid=" 
            + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, temp_min} = data.main;
    const {main} = data.weather[0];
    // console.log(name, main, icon, description, temp, temp_min );
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".low-temp").innerText = "Lowest Daily Temp: " + temp_min + "°F";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    
},
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};



document.querySelector(".search button").addEventListener("click", function(){
        weather.search();
    });

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == 'Enter') {
        weather.search();
    }
});



