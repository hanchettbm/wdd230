var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
document.querySelector("#currentDate").textContent = new Date().toLocaleDateString('en-UK', options);