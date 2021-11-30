const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.forEach((town) => {
      if (town.name == "Soda Springs") {
      
        let section = document.createElement("section");
        let divEvent = document.createElement("div");
        let events = town.events;
        let allEvents = document.createElement("div");


        section.setAttribute("class", "town-event");
        divEvent.setAttribute("class", "events");

        events.forEach((event) => {
          let eventText = document.createElement("p");
          eventText.textContent = event;
          allEvents.append(eventText);
        });

        allEvents.setAttribute("class", "events-name");
        divEvent.append(allEvents);
        section.append(divEvent);
        document.querySelector("div.events-content").append(section);
      }
    });
  });