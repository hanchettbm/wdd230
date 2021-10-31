var day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
if (day == "Wednesday") {
    document.getElementById("pancakes").style.display = "block";
}