const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.forEach((town) => {
      if (
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
      ) {
      
        let section = document.createElement("section");
        let h3 = document.createElement("h3");
        let divEvent = document.createElement("div");
        let events = town.events;
        let allEvents = document.createElement("div");


        section.setAttribute("class", "town-event");
        divEvent.setAttribute("class", "events");

        h3.textContent = town.name;

        events.forEach((event) => {
          let eventText = document.createElement("p");
          eventText.textContent = event;
          allEvents.append(eventText);
        });

        allEvents.setAttribute("class", "events-name");
        h3.setAttribute("class","h3-title");
        divEvent.append(allEvents);
        section.append(h3, divEvent);
        document.querySelector("div.events-content").append(section);
      }
    });
  });