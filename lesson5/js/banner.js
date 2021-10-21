var day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
console.log(day);
if (day == "Wednesday") {
    document.getElementById("pancakes").style.display = "block";
    console.log("It Workded!")
}