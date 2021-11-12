var day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
if (day == "Friday") {
    document.getElementById("pancakes").style.display = "block";
}