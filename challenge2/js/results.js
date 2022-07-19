export {loadSearchResults};
import {view} from './view.js';
import { activateButtons } from './button.js';

/***********SHOW SEARCH RESULTS***********/
//Show the results by adding HTML elements to the form
function addResult(flight, c){
    console.log("addResult() invoked");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", c);
    newDiv.setAttribute("class", "option");

    const h2 = document.createElement("h2");
    c += 1;
    let textNode = document.createTextNode("Option " + c);
    h2.appendChild(textNode);

    newDiv.appendChild(h2);

    const image = document.createElement("img");
    image.setAttribute("src", "./img/plane.png");
    image.setAttribute("altcreate", "plane icon");

    newDiv.appendChild(image);

    const divSites = document.createElement("div");
    divSites.setAttribute("id", "sites");

    const divSiteA = document.createElement("div");
    divSiteA.setAttribute("id", "siteA");

    const labelA = document.createElement("label");
    labelA.setAttribute("id", "labelA");
    textNode = document.createTextNode("From: " + flight.from);
    labelA.appendChild(textNode);

    const departure = document.createElement("label");
    departure.setAttribute("id", "departure");
    textNode = document.createTextNode("Departure time: " + flight.departure);
    departure.appendChild(textNode);

    const divSiteB = document.createElement("div");
    divSiteB.setAttribute("id", "siteB");

    const labelB = document.createElement("label");
    labelB.setAttribute("id", "labelB");
    textNode = document.createTextNode("To: " + flight.to);
    labelB.appendChild(textNode);

    const arrival = document.createElement("label");
    arrival.setAttribute("id", "arrival");
    textNode = document.createTextNode("Arrival time: " + flight.arrival);
    arrival.appendChild(textNode);

    divSiteA.appendChild(labelA);
    divSiteA.appendChild(departure);
    divSiteB.appendChild(labelB);
    divSiteB.appendChild(arrival);
    divSites.appendChild(divSiteA);
    divSites.appendChild(divSiteB);

    newDiv.appendChild(divSites);

    const flightTime = document.createElement("div");
    flightTime.setAttribute("id", "flightTime");
    
    const labelTime = document.createElement("label");
    labelTime.setAttribute("id", "labelTime");
    textNode = document.createTextNode("Flight time: " + flight.hours + ":" + flight.minutes);
    labelTime.appendChild(textNode);

    const labelPrice = document.createElement("label");
    labelPrice.setAttribute("id", "price");
    textNode = document.createTextNode("Price: " + flight.price);
    labelPrice.appendChild(textNode);

    flightTime.appendChild(labelTime);
    flightTime.appendChild(labelPrice);

    newDiv.appendChild(flightTime);

    c -= 1;
    const saveFlight = document.createElement("input");
    saveFlight.setAttribute("type", "button");
    saveFlight.setAttribute("class", "saveFlight");
    saveFlight.setAttribute("id", c);
    saveFlight.setAttribute("name", "saveFlight");
    saveFlight.setAttribute("value", "Save flight");

    newDiv.appendChild(saveFlight);

    const flightSaved = document.createElement("p");
    flightSaved.setAttribute("class", "flightSaved");
    flightSaved.setAttribute("id", c);
    textNode = document.createTextNode("Flight saved");
    flightSaved.appendChild(textNode);

    newDiv.appendChild(flightSaved);

    const alreadySaved = document.createElement("p");
    alreadySaved.setAttribute("class", "alreadySaved");
    alreadySaved.setAttribute("id", c);
    textNode = document.createTextNode("Flight already saved");
    alreadySaved.appendChild(textNode);

    newDiv.appendChild(alreadySaved);
    view.options.appendChild(newDiv);
}

//Load flights found on the search one by one
function loadSearchResults(){
    console.log("loadSearchResults() invoked");
    let results = JSON.parse(window.localStorage.getItem('results'));
    let c = 0;
    results.forEach(flight => {
        
        addResult(flight, c);
        c += 1;
    }
    )
    activateButtons();
}