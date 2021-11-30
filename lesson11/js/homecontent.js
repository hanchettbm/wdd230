const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
.then(function (response){
    return response.json();
})

.then(function (jsonObject){
    const towns = jsonObject["towns"]
    towns.splice(1, 1);
    towns.splice(2, 3);
    for(let i = 0; i < towns.length; i++){
        let card = document.createElement("section");
        var text = document.createElement("div");
        text.setAttribute('class', 'sectionText');
        let townName = document.createElement("h2");
        let motto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement("p");
        let photo = document.createElement("img");


        townName.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
        photo.setAttribute("src", "images/" + towns[i].photo);
        photo.setAttribute("alt", towns[i].name);

        card.appendChild(text);
        card.appendChild(townName);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(photo);

        text.appendChild(townName);
        text.appendChild(motto);
        text.appendChild(yearFounded);
        text.appendChild(currentPopulation);
        text.appendChild(averageRainfall);

        document.querySelector("div.cards").appendChild(card);
    }
})