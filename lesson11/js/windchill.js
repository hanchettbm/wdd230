var temp = document.querySelector("#current-temp").textContent;

var speed = document.querySelector("#speed").textContent;
console.log(speed);

if ((temp <= 50) && (speed > 3)){
    var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed **0.16))) + "°F";
} else {
    var f = "N/A";
}

document.querySelector("#chill").textContent = f;